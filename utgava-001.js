const branch='editorial/breaking-watch-2026-11-05';
const root='https://raw.githubusercontent.com/selotisk-source/Folktribunalen/'+branch+'/';
const tracks=[
{n:1,title:'Palantir och offentlig makt',note:'Offentliga kontrakt, NHS, resultatmått, molnberoenden och möjligheten för offentliga institutioner att behålla faktisk kontroll.',files:['editorial/drafts/2026-11-05-palantir-nhs-offentlig-makt.md']},
{n:2,title:'Europas AI-infrastruktur',note:'Gigafabriker, datacenter, energiförsörjning och AI-boomens finansiering. Planerade investeringar skiljs från kapital som faktiskt har betalats ut.',files:['editorial/drafts/2026-11-05-europas-ai-gigafactories-energi.md','editorial/drafts/2026-11-05-ai-infrastruktur-marknadstest.md','editorial/drafts/2026-11-05-anthropic-ai-rd-acceleration.md']},
{n:3,title:'Synkronicitetsprotokollet',note:'Ett dokumentärt arbetssätt där observation, tidslinje, hypotes och empiriskt belägg hålls åtskilda.',files:['editorial/drafts/2026-11-05-synkronicitet-två-nya-teoretiska-modeller.md']},
{n:4,title:'Sofia – staden under staden',note:'Arkeologiska lager, museisamlingar, kyrkor och stadens historiska kontinuitet. Utställningar beskrivs inte som nya utgrävningar.',files:['editorial/drafts/2026-11-05-sofia-glomda-gudar-arkeologi.md']},
{n:5,title:'Strategiska råvaror och Urbergsskölden',note:'GTK, RAKKA, Onkalo, litium, gruvavfall, återvinning och Europas försörjningskedjor.',files:['editorial/drafts/2026-11-05-urbergsskölden-onkalo-rakka-litium.md']},
{n:6,title:'NVIDIA, finansiering och säkerheter',note:'Kreditkedjor, chipfinansiering, projektbolag, säkerheter och marknadens stresstest. Aktiebelåning och utrustningsfinansiering hålls isär.',files:['editorial/drafts/2026-11-05-ai-finansiering-895bn-google-blackstone.md','editorial/drafts/2026-11-05-ai-infrastruktur-marknadstest.md']},
{n:7,title:'Libanons kristna historia och regional geopolitik',note:'Kristna lokalsamhällen, politisk historia, säkerhetsläget och UNIFIL:s framtid.',files:['editorial/drafts/2026-11-05-libanon-unifil-kristna-syd.md','editorial/drafts/2026-11-05-gripen-ukraina-saab-industri.md']},
{n:8,title:'Kyrkorna som överlevde imperierna',note:'Wiesbaden, Warszawa, Prag, Sofia och Varna fortsätter som ett eget jämförande kulturarvsspår. Den här cykeln gav inget nytt restaureringsbeslut eller annan nyhet som passerade källtröskeln. Spåret kvarstår i redaktionsplanen.',files:[]},
{n:9,title:'Fennoskandien – urberg, skog och hästkultur',note:'Geologi, markanvändning, skogslandskap, hästkultur och historiska kontinuiteter. Ingen ny substansierad händelse passerade notiströskeln i denna cykel; GTK:s Li Path följs inom råvaruspåret.',files:[]}
];
const additional=[
{title:'Hormuz och sjöfarten',file:'editorial/drafts/2026-11-05-hormuz.md'},
{title:'Anthropic och AI-assisterad forskning',file:'editorial/drafts/2026-11-05-anthropic-ai-rd-acceleration.md'},
{title:'Bank of England och energichocken',file:'editorial/drafts/2026-11-05-bank-of-england-energikris-ranta.md'},
{title:'Europa: flyghot och gränskontroll',file:'editorial/drafts/2026-11-05-europa-flyg-hot-granskontroll.md'},
{title:'Gripen till Ukraina',file:'editorial/drafts/2026-11-05-gripen-ukraina-saab-industri.md'},
{title:'Storsjö och Cladonia',file:'editorial/drafts/2026-11-05-storsjo-cladonia-15000-300ha.md'}
];
function md(s){
s=s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
s=s.replace(/^###### (.*)$/gm,'<h6>$1</h6>').replace(/^##### (.*)$/gm,'<h5>$1</h5>').replace(/^#### (.*)$/gm,'<h4>$1</h4>').replace(/^### (.*)$/gm,'<h3>$1</h3>').replace(/^## (.*)$/gm,'<h2>$1</h2>').replace(/^# (.*)$/gm,'<h1>$1</h1>');
s=s.replace(/^\*\*(.*?)\*\*$/gm,'<p><strong>$1</strong></p>').replace(/^\* (.*)$/gm,'<li>$1</li>').replace(/^- (.*)$/gm,'<li>$1</li>');
s=s.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*(.*?)\*/g,'<em>$1</em>').replace(/\[(.*?)\]\((https?:[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
s=s.replace(/(^<li>.*<\/li>\n?)+/gm,x=>'<ul>'+x+'</ul>');
s=s.split(/\n\s*\n/).map(x=>/^<(h[1-6]|ul|ol|table|blockquote|p)/.test(x.trim())?x:'<p>'+x.replace(/\n/g,'<br>')+'</p>').join('\n');
return s;
}
async function loadFile(file){
const response=await fetch(root+file);
if(!response.ok)throw new Error('Kunde inte hämta '+file+' ('+response.status+')');
return response.text();
}
function card(title,file,index){
const id='article-'+index;
return '<article class="story"><div class="meta">FÖRDJUPNING · KÄLLOR OCH FAKTASTATUS INGÅR I ARTIKELN</div><h3>'+title+'</h3><button type="button" data-target="'+id+'">ÖPPNA ARTIKEL</button><div class="article-body" id="'+id+'"><p>Laddar artikel…</p></div></article>';
}
(async()=>{
const host=document.getElementById('issue-content');let count=0;let html='';
for(const t of tracks){
html+='<section class="track" id="track-'+t.n+'"><div class="issue-kicker">REDAKTIONELLT HUVUDSPÅR '+String(t.n).padStart(2,'0')+'</div><h2>'+t.title+'</h2><p class="track-note">'+t.note+'</p>';
for(const file of t.files){const title=file.split('/').pop().replace(/^2026-11-05-/,'').replace(/\.md$/,'').replace(/-/g,' ');html+=card(title,file,count++);}
if(!t.files.length)html+='<div class="status-note"><strong>Bevakningen fortsätter.</strong> Spåret finns kvar i redaktionens masterplan och täckningsmatris. Avsaknad av en ny artikel i denna utgåva betyder inte att spåret har tagits bort.</div>';
html+='</section>';
}
html+='<section class="track" id="other-watch"><div class="issue-kicker">KOMPLETTERANDE BEVAKNING</div><h2>Övriga aktuella granskningar</h2><p class="track-note">Dessa artiklar kompletterar huvudspåren och breddar utgåvan utan att ersätta dem.</p>';
for(const a of additional)html+=card(a.title,a.file,count++);
html+='</section><section class="track"><div class="issue-kicker">REDAKTIONELL KONTROLL</div><h2>Täckningsmatris</h2><p class="track-note">Den interna arbetsloggen redovisar samtliga 19 huvudspår, källstatus och nästa kontrollpunkt.</p>'+card('Breaking Watch – täckningsmatris 5 november 2026','editorial/research/2026-11-05-breaking-watch-coverage-matrix.md',count++)+'</section>';
host.innerHTML=html;
host.querySelectorAll('button[data-target]').forEach(btn=>btn.addEventListener('click',async()=>{const box=document.getElementById(btn.dataset.target);if(box.dataset.loaded){box.classList.toggle('open');return;}btn.disabled=true;try{const file=box.closest('.story').dataset.file;const raw=await loadFile(file);box.innerHTML=md(raw);box.dataset.loaded='1';box.classList.add('open');btn.textContent='STÄNG ARTIKEL';}catch(e){box.innerHTML='<p>'+e.message+'</p>';box.classList.add('open');}finally{btn.disabled=false;}}));
const stories=[...host.querySelectorAll('.story')];
let i=0;for(const t of tracks){for(const f of t.files){stories[i++].dataset.file=f;}}
for(const a of additional){stories[i++].dataset.file=a.file;}
stories[i].dataset.file='editorial/research/2026-11-05-breaking-watch-coverage-matrix.md';
})().catch(e=>{document.getElementById('issue-content').innerHTML='<div class="status-note">Utgåvan kunde inte laddas: '+e.message+'</div>';});
