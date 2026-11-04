import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import bcrypt from 'bcryptjs';
import pg from 'pg';
import crypto from 'node:crypto';
import cookie from 'cookie';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 10000;
const DATABASE_URL = process.env.DATABASE_URL;
const SESSION_SECRET = process.env.SESSION_SECRET;
const pool = DATABASE_URL ? new pg.Pool({ connectionString: DATABASE_URL, ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, max: 5 }) : null;

app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '200kb' }));
app.use(express.static(__dirname, { index: 'index.html', maxAge: '1h' }));

const seed = [
 ['palantir-offentlig-makt','Makt','Palantir och den offentliga makten','Offentliga kontrakt, datahantering och den växande roll som privata teknikbolag får i statliga institutioner.'],
 ['europas-ai-infrastruktur','Finans','Vem bygger Europas AI-infrastruktur?','Kapitalet, datacentren och bolagen som formar den strategiska infrastrukturen för artificiell intelligens.'],
 ['synkronicitetsprotokollet','Kultur','Synkronicitetsprotokollet','Ett dokumentärt arbetssätt för att undersöka sammanträffanden, tidslinjer, platser och symboler.'],
 ['sofia-staden-under-staden','Kultur','Sofia – staden under staden','Kyrkor, arkeologiska lager och berättelserna som lever kvar under den moderna huvudstaden.'],
 ['europas-strategiska-ravaror','Resurser','Europas strategiska råvaror','Sällsynta jordartsmetaller, gruvor, energi och kontrollen över framtidens försörjningskedjor.'],
 ['nvidia-som-sakerhet','Finans','NVIDIA – när aktier blir säkerhet för lån','Aktier som pant och GPU-infrastruktur som säkerhet – två modeller med olika risker.'],
 ['det-stora-och-lilla-fangelset','Folk','Det stora och det lilla fängelset','Samir Geagea, Libanons kristna politiska historia och frigivningen 2005.']
];

async function migrate() {
 if (!pool) return;
 await pool.query(`
 CREATE TABLE IF NOT EXISTS editors (
   id BIGSERIAL PRIMARY KEY, email TEXT UNIQUE NOT NULL,
   password_hash TEXT NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT now()
 );
 CREATE TABLE IF NOT EXISTS articles (
   id TEXT PRIMARY KEY, category TEXT NOT NULL, title TEXT NOT NULL,
   summary TEXT NOT NULL DEFAULT '', body TEXT NOT NULL DEFAULT '',
   status TEXT NOT NULL DEFAULT 'PLANERAD'
     CHECK (status IN ('PLANERAD','RESEARCH','UTKAST','GRANSKNING','GODKÄND','PUBLICERAD','AVSLAGEN')),
   sources JSONB NOT NULL DEFAULT '[]'::jsonb,
   updated_at TIMESTAMPTZ NOT NULL DEFAULT now(), created_at TIMESTAMPTZ NOT NULL DEFAULT now()
 );
 CREATE TABLE IF NOT EXISTS submissions (
   id BIGSERIAL PRIMARY KEY, title TEXT NOT NULL, summary TEXT NOT NULL DEFAULT '',
   body TEXT NOT NULL DEFAULT '', source_url TEXT, status TEXT NOT NULL DEFAULT 'INKOMMEN',
   created_at TIMESTAMPTZ NOT NULL DEFAULT now()
 );`);
 for (const [id,category,title,summary] of seed) {
   await pool.query('INSERT INTO articles(id,category,title,summary) VALUES($1,$2,$3,$4) ON CONFLICT(id) DO NOTHING',[id,category,title,summary]);
 }
}
function sign(payload) {
 const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
 const sig = crypto.createHmac('sha256', SESSION_SECRET || '').update(data).digest('base64url');
 return data+'.'+sig;
}
function readSession(req) {
 const raw = cookie.parse(req.headers.cookie || '').ft_session;
 if (!raw || !SESSION_SECRET) return null;
 const [data,sig] = raw.split('.');
 if (!data || !sig) return null;
 const expected = crypto.createHmac('sha256',SESSION_SECRET).update(data).digest();
 let actual; try { actual=Buffer.from(sig,'base64url'); } catch { return null; }
 if (actual.length!==expected.length || !crypto.timingSafeEqual(actual,expected)) return null;
 try { const p=JSON.parse(Buffer.from(data,'base64url').toString()); return p.exp>Date.now()?p:null; } catch { return null; }
}
function requireDb(req,res,next){ if(!pool) return res.status(503).json({error:'Databasen är inte ansluten ännu.'}); next(); }
function requireAuth(req,res,next){ const s=readSession(req); if(!s) return res.status(401).json({error:'Logga in för att fortsätta.'}); req.editor=s; next(); }
function sameOrigin(req,res,next){ const origin=req.get('origin'); if(origin && origin!==`${req.protocol}://${req.get('host')}`) return res.status(403).json({error:'Ogiltig begäran.'}); next(); }

app.get('/api/health',(req,res)=>res.json({ok:true,database:!!pool}));
app.get('/api/setup-status',requireDb,async(req,res)=>{const q=await pool.query('SELECT count(*)::int AS n FROM editors');res.json({needsSetup:q.rows[0].n===0});});
app.post('/api/setup',requireDb,sameOrigin,rateLimit({windowMs:15*60*1000,limit:5}),async(req,res)=>{
 const email=String(req.body.email||'').trim().toLowerCase(), password=String(req.body.password||'');
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||password.length<14) return res.status(400).json({error:'Ange en giltig e-postadress och ett lösenord på minst 14 tecken.'});
 const client=await pool.connect();
 try {
  await client.query('BEGIN');
  await client.query('LOCK TABLE editors IN EXCLUSIVE MODE');
  const n=await client.query('SELECT count(*)::int AS n FROM editors');
  if(n.rows[0].n!==0){await client.query('ROLLBACK');return res.status(409).json({error:'Redaktionen har redan en administratör.'});}
  const hash=await bcrypt.hash(password,12);
  const created=await client.query('INSERT INTO editors(email,password_hash) VALUES($1,$2) RETURNING id,email',[email,hash]);
  await client.query('COMMIT');
  res.cookie('ft_session',sign({id:created.rows[0].id,email,exp:Date.now()+8*60*60*1000}),{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',maxAge:8*60*60*1000,path:'/'});
  res.json({ok:true,email});
 } catch(e){await client.query('ROLLBACK');throw e;} finally{client.release();}
});
app.post('/api/login',requireDb,sameOrigin,rateLimit({windowMs:15*60*1000,limit:8}),async(req,res)=>{
 const email=String(req.body.email||'').trim().toLowerCase(), password=String(req.body.password||'');
 const q=await pool.query('SELECT id,email,password_hash FROM editors WHERE email=$1',[email]);
 if(!q.rowCount||!(await bcrypt.compare(password,q.rows[0].password_hash))) return res.status(401).json({error:'Fel e-postadress eller lösenord.'});
 res.cookie('ft_session',sign({id:q.rows[0].id,email,exp:Date.now()+8*60*60*1000}),{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',maxAge:8*60*60*1000,path:'/'});
 res.json({ok:true,email});
});
app.post('/api/logout',sameOrigin,(req,res)=>{res.clearCookie('ft_session',{path:'/'});res.json({ok:true});});
app.get('/api/me',requireAuth,(req,res)=>res.json({email:req.editor.email}));
app.get('/api/articles',requireDb,requireAuth,async(req,res)=>{const q=await pool.query('SELECT id,category,title,summary,body,status,sources,updated_at FROM articles ORDER BY updated_at DESC');res.json(q.rows);});
app.patch('/api/articles/:id',requireDb,requireAuth,sameOrigin,async(req,res)=>{
 const allowed=['PLANERAD','RESEARCH','UTKAST','GRANSKNING','GODKÄND','PUBLICERAD','AVSLAGEN'];
 const {status,body,summary,sources}=req.body;
 if(status!==undefined&&!allowed.includes(status))return res.status(400).json({error:'Ogiltig status.'});
 if(status==='PUBLICERAD' && req.body.confirmPublish!=='JA')return res.status(400).json({error:'Publicering kräver separat uttrycklig bekräftelse.'});
 const q=await pool.query('UPDATE articles SET status=COALESCE($2,status),body=COALESCE($3,body),summary=COALESCE($4,summary),sources=COALESCE($5::jsonb,sources),updated_at=now() WHERE id=$1 RETURNING *',[req.params.id,status??null,body??null,summary??null,sources===undefined?null:JSON.stringify(sources)]);
 if(!q.rowCount)return res.status(404).json({error:'Artikeln hittades inte.'});
 res.json(q.rows[0]);
});
app.post('/api/submissions',requireDb,requireAuth,sameOrigin,async(req,res)=>{
 const title=String(req.body.title||'').trim(); if(!title)return res.status(400).json({error:'Rubrik krävs.'});
 const q=await pool.query('INSERT INTO submissions(title,summary,body,source_url) VALUES($1,$2,$3,$4) RETURNING *',[title,String(req.body.summary||''),String(req.body.body||''),req.body.sourceUrl||null]);res.status(201).json(q.rows[0]);
});
app.get('/api/submissions',requireDb,requireAuth,async(req,res)=>{const q=await pool.query('SELECT * FROM submissions ORDER BY created_at DESC');res.json(q.rows);});
app.use('/api',(err,req,res,next)=>{console.error(err);res.status(500).json({error:'Ett internt fel uppstod.'});});
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'index.html')));
migrate().then(()=>console.log('Folktribunalen API initialized')).catch(e=>{console.error('Database initialization failed:',e.message);});
app.listen(PORT,()=>console.log(`Folktribunalen listening on ${PORT}`));
