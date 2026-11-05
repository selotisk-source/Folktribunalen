/* FOLKTRIBUNALEN — RECLAIM THE SWASTIKA historical series */
(() => {
  const app = document.getElementById('app');
  const nav = document.querySelector('.main-nav');
  if (!app || !nav) return;
  if (![...nav.querySelectorAll('a')].some(a => a.getAttribute('href') === '#/reclaim-the-swastika')) {
    const link = document.createElement('a');
    link.href = '#/reclaim-the-swastika';
    link.textContent = 'Reclaim the Swastika';
    nav.insertBefore(link, nav.querySelector('button'));
  }
  const sources = [
    ['Expo — Svenske talaren stoppas (2 Aug 2012)','https://expo.se/nyhet/svenske-talaren-stoppas/','Contemporary reporting on Richard Abrams, SDL, the Stockholm demonstration and the removal from the speaker list.'],
    ["Bartholomew's Notes — 2 August 2012",'https://barthsnotes.com/2012/08/02/','Contemporary commentary quoting the original “RECLAIM THE SWASTIKA” statement and describing the Chamber of Manifestation blog.'],
    ['Islamophobia Watch — The Swedish allies of Geller, Spencer and the EDL','https://www.islamophobiawatch.co.uk/the-swedish-allies-of-geller-spencer-and-the-edl/','Contemporary account of SDL, the Stockholm event and the campaign statement.'],
    ['Expo — Aldrig tidigare har en enmansrörelse fått så mycket uppmärksamhet (4 Aug 2012)','https://expo.se/nyhet/aldrig-tidigare-har-en-enmansrorelse-fatt-sa-mycket-uppmarksamhet/','Follow-up reporting on the demonstration and the Swedish Defence League.'],
    ['SOU 2012:74 — Främlingsfienden inom oss, bilagedel','https://www.riksdagen.se/sv/dokument-och-lagar/dokument/statens-offentliga-utredningar/framlingsfienden-inom-oss-bilagedel_h0b374/html/','Swedish government inquiry with background on Defence Leagues and the 2012 Stockholm demonstration.'],
    ['Johann Großruck — Lambach und die „Hakenkreuz-Legende“','https://www.kirchenzeitung.at/site/archiv/article/14111.html','Review of Großruck’s historical research; reports that he refuted the claimed direct link between the abbot’s coat of arms and Hitler’s emblem.'],
    ['Austrian National Fund — Johann Großruck, Lambach im Dritten Reich','https://www.nationalfonds.org/detailansicht/834','Bibliographic record for the 2011 scholarly book on Lambach, Nazi-era persecution of the monastery and the swastika legend.'],
    ['Miguel Serrano — The Golden Thread: Esoteric Hitlerism','https://miguelserrano.org/wp-content/uploads/2024/11/The-Golden-Thread.pdf','Primary text by Serrano. Read as evidence of Serrano’s own esoteric-Hitlerist mythology, not as reliable historical proof.'],
    ['United States Holocaust Memorial Museum — The history of the swastika','https://encyclopedia.ushmm.org/content/en/article/history-of-the-swastika','Institutional historical context for the symbol’s ancient use and Nazi appropriation.']
  ];
  const articles = [
    {id:'before-the-hakenkreuz',n:'01',title:'Before the Hakenkreuz',deck:'The symbol’s long history before its appropriation by Nazi Germany.',body:`<p>The swastika is an ancient geometric symbol found in multiple societies and religious traditions. Its Sanskrit name is associated with well-being and auspiciousness; Hindu, Buddhist and Jain communities continue to use it in living religious contexts.</p><p>That history must be distinguished from the Nazi Hakenkreuz: the emblem adopted by the National Socialist movement and made inseparable from dictatorship, aggressive war, persecution and genocide. Historical continuity of a shape does not mean continuity of meaning.</p><p>A responsible history therefore holds two facts together: the symbol predates Nazism by millennia, and the Nazi emblem carries a specific and devastating twentieth-century history.</p><p class="notice">Editorial standard: every archaeological example must be dated, located and sourced. Similar shapes alone do not establish a common origin, shared meaning or unbroken tradition.</p>`},
    {id:'lambach',n:'02',title:'Lambach Abbey: the church, the boy and the legend',deck:'What can be established about Hitler’s childhood contact with a hooked-cross motif?',body:`<p>Adolf Hitler attended school and sang in the choir at the Benedictine abbey of Lambach in Upper Austria during his childhood. The monastery’s abbot, Theoderich Hagn, had a coat of arms that incorporated a hooked-cross form. These details form the basis of a frequently repeated story that Hitler encountered the symbol there.</p><p>But the stronger claim—that the Lambach emblem directly inspired the Nazi party symbol—is disputed. Historian Johann Großruck’s research on the abbey and the “Hakenkreuz legend” challenges that causal story. The existence of a motif at a place Hitler attended is not, by itself, proof that it determined his later political choice.</p><p>The monastery’s later history is also essential. In 1941 the Nazi regime confiscated Lambach, expelled most of its monks and converted the complex into a National Political Educational Institute. The institution that appears in the childhood legend was itself subsequently victimized by the regime.</p><p><strong>Finding:</strong> Hitler’s childhood association with Lambach and the abbot’s heraldry are documented historical context. The claim of direct inspiration remains unproven and is challenged by specialist research.</p>`},
    {id:'serrano',n:'03',title:'Miguel Serrano and the Golden Thread',deck:'How a twentieth-century author transformed history into esoteric Hitlerist mythology.',body:`<p>Chilean diplomat and writer Miguel Serrano developed an explicitly esoteric form of Hitlerism. In <em>El Cordón Dorado</em>, published in English as <em>The Golden Thread</em>, he connected Hitler, Lambach Abbey, the swastika, occult orders and elaborate mythological ideas.</p><p>Serrano’s book is a primary source for what Serrano believed and promoted. It is not reliable evidence that the supernatural narratives he describes occurred. His work belongs to the history of post-war neo-Nazi and esoteric Hitlerist ideology, including antisemitic conspiracy narratives.</p><p>The Lambach story is a point where the historical record and Serrano’s mythology meet—but they must not be conflated. Großruck’s research is a necessary counterweight to Serrano’s interpretation.</p><p>This article studies Serrano as an ideological author: what sources he invokes, how he rearranges them, and where documented history gives way to myth.</p>`},
    {id:'campaign-archive',n:'04',title:'Richard Abrams, SDL and the 2012 campaign',deck:'A documented retrospective of the original “Reclaim the Swastika” statement and the press response.',body:`<p>In August 2012, contemporary reporting identified Richard Abrams as a member of the Swedish Defence League (SDL) who had been expected to speak at an international anti-Muslim demonstration in Stockholm. Expo reported that organisers removed him from the speaker list after material on his website attracted attention.</p><p>Bartholomew’s Notes reproduced the campaign wording “RECLAIM THE SWASTIKA!” and described the Chamber of Manifestation blog. Islamophobia Watch also discussed the statement and the SDL/EDL context. These are contemporary accounts of the campaign and its reception; they are not neutral substitutes for the original archived blog or a complete account of Abrams’s own views.</p><p>The archive matters because it records how the campaign was presented at the time and how it was interpreted by journalists and commentators. The sources also place it within an anti-Muslim demonstration and a wider counter-jihad milieu. That political context cannot responsibly be omitted.</p><p>This retrospective does not endorse the SDL, anti-Muslim mobilisation, Nazi ideology, antisemitism or the use of Nazi insignia. It documents a past campaign, examines its language and reception, and separates the ancient symbol’s diverse histories from the political uses made of it in the twentieth and twenty-first centuries.</p>`},
    {id:'who-owns-a-symbol',n:'05',title:'Who owns a symbol?',deck:'Cultural memory, religious practice and the limits of reclamation.',body:`<p>No single modern political movement can rewrite every earlier use of an ancient symbol. Equally, an appeal to ancient origins cannot erase the harm carried by a symbol when used as the emblem of a genocidal regime.</p><p>Context is decisive: who is displaying the sign, in what setting, for what purpose, and with what historical associations? A Hindu family’s religious use, an archaeological object in a museum and a neo-Nazi banner are not interchangeable acts.</p><p>Reclamation should therefore mean recovering accurate historical knowledge and respecting living religious traditions—not rehabilitating Nazi insignia or provoking communities targeted by Nazism.</p>`},
    {id:'method-and-sources',n:'06',title:'How we investigate symbols',deck:'A source protocol for archaeology, political history and contested claims.',body:`<p>We rank evidence by what it can actually establish. Archaeological catalogues and excavation reports establish an object’s provenance and dating. Contemporary records establish what people said or did at a particular time. Scholarly research tests causal claims. Ideological texts are primary sources for the author’s beliefs, not automatic proof of their factual claims.</p><p>We label uncertainty, preserve competing interpretations, correct errors visibly and distinguish reporting from analysis. We do not infer a continuous tradition from visual resemblance alone.</p>`}
  ];
  const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function landing(){
    app.innerHTML = `<section class="page-view campaign-page">
      <a class="back" href="#/">← FOLKTRIBUNALEN</a>
      <div class="tag">SPECIAL SERIES · HISTORY · SYMBOLS · POLITICAL MEMORY</div>
      <h1>RECLAIM THE SWASTIKA</h1>
      <p class="standfirst">An investigation into an ancient symbol, its Nazi appropriation, the Lambach legend, Miguel Serrano’s esoteric mythology and a Swedish campaign documented in 2012.</p>
      <div class="notice"><strong>Editorial position:</strong> This is a historical investigation, not an endorsement of Nazi ideology, antisemitism, anti-Muslim mobilisation or Nazi insignia. We distinguish ancient and living religious uses from the Nazi Hakenkreuz and examine the campaign’s political context critically.</div>
      <div class="section-head"><h2>THE SERIES</h2><span>06 INVESTIGATIONS</span></div>
      <section class="article-grid campaign-grid">${articles.map(a=>`<article class="article-card"><div class="tag">INVESTIGATION ${a.n}</div><h3>${esc(a.title)}</h3><p>${esc(a.deck)}</p><a href="#/reclaim-the-swastika/${a.id}">READ INVESTIGATION ↗</a></article>`).join('')}</section>
      <div class="section-head"><h2>THE HISTORICAL RECORD</h2><span>ARCHIVE & PRIMARY SOURCES</span></div>
      <div class="campaign-sources">${sources.map((s,i)=>`<article class="source-row"><div class="tag">SOURCE ${String(i+1).padStart(2,'0')}</div><div><h3><a href="${s[1]}" target="_blank" rel="noopener noreferrer">${esc(s[0])} ↗</a></h3><p>${esc(s[2])}</p></div></article>`).join('')}</div>
      <p class="small">Source links lead to external publications and archival materials. The press archive includes critical reporting and is presented as historical documentation, not as endorsement.</p>
    </section>`;
    window.scrollTo(0,0);
  }
  function article(id){
    const a=articles.find(x=>x.id===id);
    if(!a){landing();return}
    app.innerHTML=`<section class="page-view campaign-page">
      <a class="back" href="#/reclaim-the-swastika">← BACK TO THE SERIES</a>
      <div class="tag">INVESTIGATION ${a.n} / 06 · FOLKTRIBUNALEN</div>
      <h1>${esc(a.title)}</h1><p class="standfirst">${esc(a.deck)}</p>
      <div class="prose campaign-prose">${a.body}</div>
      <div class="section-head"><h2>RELATED SOURCES</h2><span>DOCUMENTATION</span></div>
      <div class="campaign-sources">${sources.filter((s,i)=> a.id==='campaign-archive' ? [0,1,2,3,4].includes(i) : a.id==='lambach' ? [5,6] .includes(i) : a.id==='serrano' ? [5,6,7] .includes(i) : a.id==='before-the-hakenkreuz' || a.id==='who-owns-a-symbol' ? [8] .includes(i) : [5,6,7,8].includes(i)).map(s=>`<article class="source-row"><div><h3><a href="${s[1]}" target="_blank" rel="noopener noreferrer">${esc(s[0])} ↗</a></h3><p>${esc(s[2])}</p></div></article>`).join('')}</div>
      <a class="read-link" href="#/reclaim-the-swastika">RETURN TO SERIES ↗</a>
    </section>`;
    window.scrollTo(0,0);
  }
  function route(){
    const p=decodeURIComponent(location.hash.slice(1)||'/');
    if(p==='/reclaim-the-swastika'){landing();return}
    if(p.startsWith('/reclaim-the-swastika/')){article(p.split('/')[2]);return}
  }
  window.addEventListener('hashchange',route);
  const style=document.createElement('style');
  style.textContent=`.campaign-page h1{font:800 clamp(42px,7vw,82px)/1.02 var(--display);letter-spacing:-.045em;color:#281a16;margin:18px 0}.campaign-page .campaign-prose{max-width:820px;font-size:17px;line-height:1.85}.campaign-page .campaign-prose p{margin:1.15em 0}.campaign-page .campaign-prose .notice{font-size:12px}.campaign-sources{max-width:920px}.source-row{display:grid;grid-template-columns:100px 1fr;gap:18px;border-bottom:1px solid var(--line);padding:17px 0}.source-row h3{font:700 17px var(--display);margin:0 0 7px}.source-row h3 a{color:#681b20;text-decoration:none}.source-row p{font:13px/1.6 var(--serif);color:#51483d;margin:0}.campaign-page .notice{max-width:900px;margin:24px 0}.campaign-grid{margin-bottom:25px}@media(max-width:650px){.source-row{grid-template-columns:1fr;gap:5px}.campaign-page .campaign-prose{font-size:15px}}`;
  document.head.appendChild(style);
  route();
})();
