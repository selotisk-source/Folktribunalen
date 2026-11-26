# FOLKTRIBUNALEN – Redaktionell masterplan och status

**Version:** 25 november 2026, 08:04 EET – daglig kontroll av artikelgodkännande, PR-spärr, nyhetsläge och publiceringshinder  
**Arbetsregel:** En huvudartikel åt gången: research → komplett utkast → faktakontroll → redigering → godkännandekö → versionsbundet chefredaktörsgodkännande → ansluten redaktionell adminväg → faktisk HTTP- och innehållskontroll. Nästa huvudartikel får inte starta före LIVE-kontroll av föregående artikel.

**Obligatorisk PR-spärr:** Artikel-PR ska vara Open/Draft under research, faktakontroll, redigering och godkännandekö. Ingen Ready for review, merge, cherry-pick, deploy, databasändring, frontendändring eller LIVE-publicering före uttryckligt godkännande av exakt aktuell commit. Ett godkännande av en äldre commit omfattar inte senare ändringar. Mergade äldre avvikelser är historiska och får inte byggas ut med nya deployer utan separat godkännande.

## Senaste arbetskontroll – 25 november 2026, 08:04 EET

### Huvudartikel 2 – versionsbeslut och publiceringsläge

- **Artikel:** *Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen?*
- **PR:** [#71 – Open/Draft](https://github.com/selotisk-source/Folktribunalen/pull/71), gren `editorial/europe-ai-infrastructure-review-2026-11-17`.
- **Nuvarande PR-head vid kontroll:** `1a5b802932e3a50d755519045ed0ec970a8308fc`; 40 commits, två ändrade filer; senast uppdaterad 24 november 06:11:50 UTC.
- **Versionsbundet godkännande:** Issue-kommentaren [#7123684212](https://github.com/selotisk-source/Folktribunalen/pull/71#issuecomment-7123684212) dokumenterar chefredaktörens uttryckliga ”Ja” och ”Ja, publicera” för exakt commit `d7a9d7e907f6e3bccfb2a6e212402ca297d06b7a`.
- **Avgränsning:** Nuvarande PR-head är senare än godkänd commit. PR-kommentaren dokumenterar fyra efterföljande commits och ändringar i artikelmanus/dossier. Nuvarande head `1a5b802932e3a50d755519045ed0ec970a8308fc` omfattas inte av godkännandet. PR #71 ska förbli Draft; nuvarande head får inte mergas eller publiceras. Godkännandet av `d7a9d7e` är inte ett godkännande av senare versioner.
- **Reviewkontroll 25 november:** PR #71 är Open/Draft, inte mergad. Review-listan är tom. PR-kommentaren om godkännandet är en versionsnotering, inte en GitHub review submission.
- **Nästa huvudartikel:** PR #38, *Synkronicitet i algoritmernas spegel – mellan mening och mekanism*, är fortsatt Open/Draft och parkerad. Den får inte aktiveras innan artikel 2:s godkända version har gått genom redaktionens adminväg och klarat publik kontroll av HTTP-status, rubrik, ingress och fulltext.

### Publiceringskedja – blockerande steg

1. **GitHub-version:** endast commit `d7a9d7e907f6e3bccfb2a6e212402ca297d06b7a` har uttryckligt versionsbundet godkännande. Nuvarande PR-head är en annan version.
2. **Admin/backend:** den senast dokumenterade publiceringsarkitekturen saknar en bekräftad importväg från PR/GitHub-artikeltext till admin och databas. Adminens statusfunktion räcker inte för att föra in rätt fulltext.
3. **Databas:** senast dokumenterat Postgres `folktribunalen-db` status `available`, men `ipAllowList=[]`; tidigare hosted Render MCP-försök med read-only `SELECT 1` nekades. Ingen ny databasanslutning har lyckats i denna körning.
4. **Publik webb:** tidigare DNS-fel för `folktribunalen.onrender.com` och redaktionell backend. Ingen ny lyckad HTTP-status eller sidtext har erhållits i denna körning.
5. **Frontend:** senast dokumenterad `src/app.js` använder statiska artikelarrayer och hämtar inte artikeltexten från `/api/articles`. Den dokumenterade slug-/metadata-mismatchen för `europas-ai-infrastruktur` måste lösas via en separat godkänd teknisk ändring; ingen sådan ändring görs i denna artikelspärrade körning.

**Publiceringsresultat:** ingen merge, deploy, databasändring, frontendändring eller LIVE-publicering har utförts. Ingen HTTP-status för artikel 2 är fastställd. Artikel 2 är inte LIVE-kontrollerad.

### PR-spärr – aktuell kontroll

- GitHub-sökning 25 november: 68 öppna PR:er med Draft-status; noll öppna PR:er utanför Draft.
- PR #71: Open/Draft, head `1a5b802932e3a50d755519045ed0ec970a8308fc`.
- PR #73: Open/Draft, masterplandokumentation.
- PR #38: Open/Draft, nästa huvudartikel, parkerad.
- PR #28 och #69: Open/Draft, separata researchserier.
- Ingen öppen PR behövde återställas från Ready for review.
- Ingen merge, cherry-pick, deploy eller ändring på `main` gjordes i denna kontroll.

### Aktuella nyhetssignaler – 25 november

- **Gripen över Polen:** Försvarsmaktens primärmeddelande 20 november bekräftar att svenska JAS 39 Gripen deltog under natten i flera timmars luftförsvarsinsats tillsammans med polska F-16 och ett nederländskt lufttankningsflygplan. Svenska piloter följde flera mål i polskt luftrum under svåra väder- och siktförhållanden. Försvarsmaktens meddelande anger inte antal flygplan eller att svenska piloter avlossade vapen. Källa: https://www.forsvarsmakten.se/kontakt/press-och-media/svenska-jas-gripen-i-luftforsvarsinsats-over/
- **AI-infrastruktur:** Reuters 19 november rapporterar att OVHcloud lanserat 55 europeiskt hostade moln- och AI-produkter, inklusive tillgång till NVIDIAs Blackwell-chip. Bolaget uppger 110 MW tillgänglig datacenterkapacitet. Detta är bolagets kapacitetsuppgift, inte oberoende verifierad installerad AI-last. Källa: https://www.reuters.com/business/ovhcloud-launches-ai-cloud-products-hosted-europe-2026-11-19/
- **Datacenter och lokalt motstånd:** AP rapporterar protester vid Microsofts byggplats i Amsterdam och samordnade protester i flera europeiska länder. Påståenden om energi, vatten och miljö ska attribueras till demonstranter/organisationer och jämföras med tillstånds- och miljödokument. Källa: https://apnews.com/article/b4f3f9f368697bb37416bcb4fabdd67c
- **Hormuz:** En AIS-baserad live-sida visade noll AIS-synliga kommersiella passager under den del av 25 november som sidan hade registrerat kl. 01:51 UTC. Dagen var inte avslutad och IMF PortWatch hade ännu inte publicerat data för 25 november. Detta är inte belägg för att sundet var helt stängt; fartyg utan AIS och senare passager saknas. Källa: https://hormuz.now/traffic/2026-11-25
- **USA:s kongress och Palantir:** inga nya primärdokument har i denna körning kontrollerats som ändrar de tidigare daterade noterna. H.R. 2347/BAAJA får inte beskrivas som lag utan nytt antagande och promulgation. Form 144 är föreslagen försäljning, inte bevis för genomförd transaktion.

### Nio huvudspår – styrning

1. **Palantir och den offentliga makten:** PR #55 tidigare mergad; senast dokumenterade publika HTTP 200 är från 13 november. Q3/insider- och offentlighetsnoter följs separat. Ny LIVE-kontroll saknas.
2. **Vem bygger Europas AI-datacenter?:** PR #71; komplett utkast i Draft. Endast commit `d7a9d7e` uttryckligen godkänd; senare PR-head ej godkänd. Publiceringskedjan blockerad.
3. **Synkronicitetsprotokollet:** PR #38 Draft; komplett första utkast, parkerat som nästa huvudartikel.
4. **Sofia – staden under staden:** PR #8 delutkast och PR #77 researchpaket; musei- och byggnadsarkeologi återstår. Samuils gravtradition får inte felaktigt placeras i Sankt Sofia i Sofia; källorna måste hållas vid Sankt Achilleios/Prespa där beläggen hör hemma.
5. **Europas strategiska råvaror:** PR #34, #51 och #65 Draft; delcase finns men sammanhängande huvudartikel återstår. Skilj fyndighet, resurs, reserv, tillstånd, finansiering och produktion.
6. **NVIDIA – aktier som säkerhet för lån:** PR #14, #23 och #47 Draft; dokumenterad aktiepantskedja saknas. Skilj aktiepant från GPU-/datacenterfinansiering och bolagsåtaganden.
7. **Libanons kristna historia:** PR #22 och #39 Draft; huvudartikel återstår. PR #36 om Fader Samir Daou är separat reportage.
8. **Kyrkorna som överlevde imperierna:** komplett huvudartikel återstår; byggnadsakter för Wiesbaden, Warszawa och Prag behövs. Sofia och Varna möjliga fortsättningar.
9. **Fennoskandien – urberget, skogen och hästen:** PR #4, #32, #37 och #43 innehåller delcase; sammanhängande huvudartikel återstår. Markrätt och arkeologi ska källbeläggas separat.

### Separata projekt och serier

- **ODJURET UR DJUPET:** PR #28 Draft. Uppenbarelsebokens odjur, Storsjöodjuret, Frösöstenen och Peter Thiels egna föreläsningar. Symbolisk parallell är central; historisk påverkan får inte påstås utan belägg.
- **Storsjö kapell/Cladonia/Alex Karp:** PR #4 och #32 Draft. Rapporten om cirka 15 000 hektar är ännu inte fastställd genom lagfart/fastighetsregister. Fortsätt med fastighetsgränser, Fornsök, gravar, bronsålderslämningar, depåfynd, samfälligheter och lokala rättigheter. Håll strikt åtskilt från Storsjön vid Östersund/Frösön.
- **Skaga kapell:** PR #69 och #75 Draft. Åtta delar i fastställd ordning: ursprung; Johannes Döparens huvud; björnfällarna; silverlöjan; jätten Skagas dotter/Ramunder; offerplatsen; rivningen; återuppbyggnad/brand/återinvigning. Researchpaket är inte åtta färdiga manus.
- **Böckernas väg till Athos:** PR #26 och #76 Draft; dokumentdigitalisering och proveniens. Skilj administrativa osmanska handlingar från liturgiska böcker och handskrifter.
- **Från skrift till storebror:** PR #21, #41, #45 och #54 Draft; delcase om ansiktsigenkänning, myndighetsprofilering, arbetsplatsövervakning och eu-LISA. Sammanhängande huvudartikel återstår.
- **Frölunda:** PR #74 Draft; håll Västra och Östra Frölunda och deras ortnamnsbelägg åtskilda.
- **Cypern:** PR #72 och #81 Draft; kulturhistorisk research, Palaipafos, Geroskipou, Asklepieion och Commandaria.
- **Varna/Svarta havet:** PR #80 Draft; undervattenskulturarv, Karon Limen och regional historia.

### Återkommande hyllning

Varje utgåva ska innehålla Johannes Gutenberg, Carl von Linné, Voltaire, Sankta Paraskevi, Sankt Charbel och Vasil Levski (Васил Левски; 1837–1873). Levski-notisen ska grundas på National Museum Vasil Levski – Documentary Heritage och Bulgariens nationalbibliotek – Levski's Notebook:
- https://vlevskimuseum-bg.org/en/documentary-heritage/
- https://www.nationallibrary.bg/levski/

Använd inte citat utan kontroll mot original eller kontrollerad transkription.

### Redaktionell portföljregel

FOLKTRIBUNALEN ska fortsätta som flerområdesredaktion, inte som en breaking-news-feed. Håll en formell huvudartikel åt gången. Sidospår får utvecklas som evidensnoter men ska inte tränga undan huvudordningen. När artikel 2:s publiceringskedja är blockerad ska arbetet fortsätta med faktakontroll och utkast; artikel 3 får inte aktiveras och ingen parallell statisk publiceringsväg får användas.

---

# FOLKTRIBUNALEN – Redaktionell masterplan och status

**Version:** 24 november 2026, 08:05 EET – daglig desk, Frölunda-källkedja, Svartahavets spannmålstrafik och uppdaterad PR-/driftkontroll  
**Arbetsregel:** En huvudartikel åt gången: research → komplett utkast → faktakontroll → redigering → godkännandekö → separat artikelgodkännande → publicering via redaktionens anslutna adminväg → faktisk HTTP-kontroll av publik route. Nästa huvudartikel får inte starta före kontroll av rätt rubrik, ingress och fulltext på den aktuella publika routen.

**Obligatorisk PR-spärr:** Varje artikel-PR ska vara Open/Draft under hela research-, faktakontrolls-, redigerings- och godkännandefasen. Den får inte markeras Ready for review före separat uttryckligt chefredaktörsgodkännande av exakt aktuell commit. Före detta godkännande är merge, cherry-pick till main, deploy, databasändring, frontendändring och publicering förbjudna. Efter godkännandet får endast den godkända versionen gå via den anslutna adminvägen. Äldre generella godkännanden gäller inte materiellt ändrade versioner. Mergade äldre avvikelser hålls historiska och får inte utökas med nya deployer utan separat godkännande.

**Återkommande hyllning i varje utgåva:** Johannes Gutenberg, Carl von Linné, Voltaire, Sankta Paraskevi, Sankt Charbel och Vasil Levski. Levski-notisen ska ange både National Museum Vasil Levski – Documentary Heritage (https://vlevskimuseum-bg.org/en/documentary-heritage/) och National Library of Bulgaria – Levski's Notebook (https://www.nationallibrary.bg/levski/). Skilj dokumenterade uppgifter från hyllning och tolkning; inga citat utan kontroll mot original eller kontrollerad transkription.

Äldre daterade loggar längre ned är historiska ögonblicksbilder. Denna översta kontroll anger aktuell status per 24 november 2026.

## Senaste dagliga desk – 24 november 2026, 08:05 EET

### Kontinuitet och kö

- Föregående sidospår 23 november: Cypern, PR #81 – Geroskipou-Monagri, Ashmolean, Strabon 14.6.3 och Commandaria.
- Dagens sidospår 24 november: Frölunda, PR #74 – källkedjan mellan Västra Frølanda 1436, Östra Frølvnda songh 1402 och två separata 1313-hänvisningar.
- **Aktiv huvudartikel oförändrad:** PR #71, Europas AI-infrastruktur, Open/Draft, exakt head `1a5b802932e3a50d755519045ed0ec970a8308fc`. Separat chefredaktörsgodkännande av exakt version saknas.
- **Nästa huvudartikel oförändrad:** PR #38, Synkronicitetsprotokollet, fortsatt parkerad tills PR #71 har godkänts, gått genom adminvägen och klarat publik HTTP-/innehållskontroll.
- **Nästa sidospår enligt tid sedan senaste konkreta leverans:** Storsjö kapell/Cladonia i Härjedalen, PR #4 och #32. Senaste uppdateringar 12–13 november; äldre än Skaga PR #69 (17 nov), Cypern PR #72 (18 nov), Athos PR #76 (20 nov), Skaga PR #75/Sofia PR #77/ODJURET PR #78 (21 nov), Varna PR #80 (22 nov) och Cypern PR #81 (23 nov).

### Dagens Frölunda-leverans – PR #74

- Open/Draft; head `da58fbf535013e0febbbb8a2ad879847e7b0f24e`; 17 commits, 15 filer, 789 tillägg, 0 borttagningar; 0 review submissions och 0 review threads.
- Nytt researchpaket: `editorial/research/2026-11-24-frolunda-archival-source-audit.md`.
- Tre nya provenance-länkade evidensnoter: två skilda 1313-/1436-källkedjor; avvikelsen 1885/1886; konkreta arkivmål för kartor 1764/1917.
- Rapport 13 (1999) s. 51/fotnot 103 (Nyström s. 32) hålls isär från s. 56–57/fotnot 123 (Hörman s. 267). Isof anger Frølanda 1436 som Västra Frölundas första säkra skrivform. Östra Frølvnda 1402 är ett separat belägg i Kinds härad.
- Originalhandlingarna 1313/1436, Nyström/Hörman-sidorna, 1550 års jordebok och den administrativa handlingen bakom 1886 återstår.

### Supplemental Svartahavssignal – PR #80

- PR #80 är fortsatt Open/Draft; head `3027f62f16196159004b9076a264b0e2c2cca3e0`; 11 commits, 9 filer.
- WFP:s briefing till FN:s säkerhetsråd 23 november har fått en separat evidensnot: `editorial/evidence-notes/2026-11-24-black-sea-grain-shipping-wfp-briefing.md`.
- WFP uppgav 63 procent färre vete-/majsfartyg genom Bosporen vid mitten av oktober 2026 jämfört med samma period 2025; 10 miljoner ton ryskt och ukrainskt vete kan enligt WFP utebli från världsmarknaden. Siffrorna är attribuerade till WFP:s chef; underliggande AIS-/incidentmetod återstår. Ingen Varna-specifik trafikförlust hävdas.
- Klassificering: kandidat för senare artikel om Svarta havets spannmålskorridor och livsmedelsförsörjning. Undervattensarkeologipaketet skrivs inte om.

### Hormuz

UKMTO:s officiella Recent Incidents-sida visar fortfarande Advisory 217-26 (22 november 14:25 UTC) som senaste post vid kontroll 24 november. Ingen ny UKMTO-post efter 217 identifierades; ingen ny Hormuz-evidensnot behövdes. PR #79 fortsätter som separat bevakningsbank. Hormuz har inte ändrat rotationsordningen.

### PR-spärr – aktuell kontroll

- GitHub-sökning: 68 öppna PR:er med `draft=true`, 0 öppna PR:er utanför Draft.
- PR #71, #73, #74, #79, #80 och #81 är Open/Draft. PR #74 och #80 har inga review submissions eller review threads.
- PR #73 är fortsatt dokumentations-PR i Draft; dess 24 november-version ligger inte på main.
- Ingen Ready for review, merge, cherry-pick, main-ändring, deploy, databasändring, frontendändring eller publicering har gjorts.

### Drift och åtkomst – kontroll 24 november

- **Railway:** fem tjänster i production; alla rapporteras Offline. Osiris-mindcloud-ui och Cognee Memory har senaste registrerade deployment FAILED (12 respektive 10 oktober). Ingen Hermes-tjänst finns i inventeringen.
- **Render:** statisk folktribunalen har senaste listade live-deploy 16 november, commit `a43f1579058824a36ccad6245d4616551505431e`; redaktionell backend har senaste listade live-deploy 4 november, commit `6a835783553565f239864a9da7160d9f79f692b2`.
- **Postgres:** status `available`, men `ipAllowList=[]`. Read-only `SELECT 1` via hosted Render MCP nekas eftersom externa anslutningar blockeras. Databasens metadata anger expiry 4 december 2026 kl. 21:18:55 UTC (23:18:55 EET).
- **Publik route:** webbläsarhämtning och direkt `curl` kunde inte lösa `folktribunalen.onrender.com` (DNS-fel). Ingen HTTP-status, rubrik, ingress eller fulltext erhölls. PR #71 är inte LIVE-kontrollerad.

### Återkommande hyllning

Varje utgåva behåller Gutenberg, Carl von Linné, Voltaire, Sankta Paraskevi, Sankt Charbel och Vasil Levski. Levski-källorna ska anges i varje utgåva:
- https://vlevskimuseum-bg.org/en/documentary-heritage/
- https://www.nationallibrary.bg/levski/

## Aktuell arbetskontroll – 24 november 2026, 02:55 EET

### Aktiv huvudartikel – huvudspår 2

- **Artikel:** *Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen?*
- **PR:** [#71 – Open/Draft](https://github.com/selotisk-source/Folktribunalen/pull/71), gren `editorial/europe-ai-infrastructure-review-2026-11-17`.
- **Exakt aktuell PR-head:** `1a5b802932e3a50d755519045ed0ec970a8308fc`.
- **Omfattning:** 40 commits, två ändrade filer; komplett artikel med tolv huvudavsnitt, slutsats, faktaruta, **53 primärkällor och 27 oberoende/kompletterande rapporteringskällor**, samt internt dossier med bildförslag, rättighetsstatus, faktakontroll, öppna frågor och teknisk analys.
- **Godkännande:** separat chefredaktörsgodkännande av exakt aktuell head saknas. PR #71 är Open/Draft. Kontroll 24 november: 0 review submissions, 0 inline review threads. Den enda issue-kommentaren är faktakontroll från 17 november, inte godkännande. PR #64:s historiska godkännande gäller inte denna materiellt uppdaterade version.
- **Versionsbundet chefredaktörsgodkännande – 24 november 2026:** Chefredaktören svarade uttryckligen ”Ja” och därefter ”Ja, publicera” efter att ha fått frågan om exakt commit `d7a9d7e907f6e3bccfb2a6e212402ca297d06b7a`. Godkännandet gäller endast den committen. En ny branchjämförelse visar att artikelgrenen därefter har avancerat **4 commits**; artikelmanuset har ytterligare 34 rader och dossieret har ändrats. Den nuvarande PR-headen är `1a5b802932e3a50d755519045ed0ec970a8308fc`. De senare ändringarna omfattas inte av godkännandet. PR #71 ska därför fortsatt vara Draft; ingen merge eller publicering av den senare headen är tillåten utan nytt versionsbundet godkännande.
- **Publiceringsförsök efter godkännandet:** ingen LIVE-publicering kunde genomföras. Render Postgres är `available` men har `ipAllowList=[]`; hosted Render MCP avvisade read-only `SELECT 1` eftersom externa anslutningar blockeras. DNS-uppslagning misslyckades för både `folktribunalen.onrender.com` och `folktribunalen-editorial.onrender.com`, så ingen HTTP-status kunde hämtas. Kodgranskning visar dessutom att publika `src/app.js` läser statiska arrayer och inte hämtar `/api/articles`; admin-UI:t kan ändra DB-status men importerar inte PR-text eller binder publiceringen till en GitHub-commit. Databasstatusändring ensam skulle därför inte publicera rätt fulltext på den statiska webbplatsen. Huvudspår 2 förblir den enda aktiva huvudartikeln; PR #38 startas inte före fungerande publiceringskedja och LIVE-kontroll.
- **Ny faktakontroll 24 november – EU:s elnätsöverenskommelse:** rådet och Europaparlamentet nådde 18 november en preliminär överenskommelse om snabbare tillstånd för förnybar energi, elnät, lagring, laddinfrastruktur samt ny el- och gasinfrastruktur. Medlemsstater kan behandla förnybar energi och elnät som överordnat allmänintresse, med undantag för säkerhets-, försvars- och kulturarvsintressen. Tyst godkännande kan införas för vissa mellanliggande steg. Lokal nyttodelning gäller för förnybara energiprojekt över 7 MW, inte datacenter som sådana. Överenskommelsen måste fortfarande godkännas formellt och införlivas nationellt inom 18 månader efter antagandet. Den ger inte datacenter automatisk nätprioritet. Primärkälla: https://www.consilium.europa.eu/en/press/press-releases/2026/11/18/grids-package-council-and-parliament-agree-to-streamline-permitting-for-a-faster-clean-energy-transition/pdf/ · Reuters: https://www.reuters.com/business/energy/eu-reaches-provisional-deal-speed-permits-renewable-energy-projects-2026-11-18/
- **Ny faktakontroll 24 november – Italien/Terna:** Terna:s resultatpresentation 12 november anger cirka 108 GW anslutningsförfrågningar för datacenter per september 2026 och cirka 2 GW i kategorin `ready to build`. Siffrorna är avrundade och mäter en administrativ pipeline, inte byggd kapacitet, faktisk förbrukning eller garanterad nätleverans. Terna:s Econnextion är månadsuppdaterad och bygger på sökandes uppgifter; Terna garanterar inte fullständighet eller riktighet. Reuters 14 oktober rapporterade närmare 600 förfrågningar och mer än 100 GW. Primärkällor: https://download.terna.it/terna/Terna_9M_2026_Consolidated_Results_Presentation_8df40c85fce1506.pdf · https://dati.terna.it/connessioni/econnextion. Oberoende rapportering: https://economictimes.indiatimes.com/tech/technology/italy-data-centre-connection-requests-top-100-gw-terna-ceo-says/articleshow/134942281.cms · https://www.quotidianoenergia.it/module/news/page/entry/id/537419
- **Övrig faktakontroll:** Spanien Real Decreto 1032/2026 är fortsatt beskriven som publicerad i BOE 21 november och i kraft 22 november. EuroHPC:s officiella utlysningssida är fortsatt aktuell för Lot 2-fristen 3 december 2026 kl. 17.00 och Lot 1-fristen 4 februari 2027 kl. 17.00. Molnsuveränitetsavsnittet från 23 november kvarstår.
- **Filer:** [artikelutkast](https://github.com/selotisk-source/Folktribunalen/blob/editorial/europe-ai-infrastructure-review-2026-11-17/editorial/drafts/2026-11-13-europe-ai-infrastructure.md) och [internt dossier](https://github.com/selotisk-source/Folktribunalen/blob/editorial/europe-ai-infrastructure-review-2026-11-17/editorial/dossiers/2026-11-19-europe-ai-infrastructure-editorial-dossier.md).

### Redaktionell dokumentation – PR #73

- **PR:** [#73 – Open/Draft](https://github.com/selotisk-source/Folktribunalen/pull/73), dokumentations-PR med masterplan och återkommande hyllningsmodul. Denna uppdatering ligger på Draft-grenen; ingen merge.
- **Återkommande hyllning:** modulen omfattar Gutenberg, Linné, Voltaire, Sankta Paraskevi, Sankt Charbel och Vasil Levski. Levski-notisen ska alltid länka National Museum Vasil Levski – Documentary Heritage och National Library – Levski's Notebook. Gutenberg-notisen har korrigerats: hans betydelse gäller det europeiska trycksystemet med rörliga metalltyper, inte uppfinningen av tryck globalt. Källor: https://www.gutenberg-mainz.de/en/who-invented-printing/ · https://www.bnf.fr/en/jikji-treasure-world-printing
- **Publik frontend:** `index.html` och `src/app.js` på main visar fortfarande fem föregångare och anger att ett sjätte namn ska fastställas. Levski finns i redaktionella modulen men ännu inte i frontend. Detta kräver separat godkänd frontendändring.

### GitHub – faktisk kontroll

- **Main:** `04e00e97b35bb984d783bab652011a3d7441a0cd`.
- **PR #71:** Open/Draft, 40 commits, två filer, head `1a5b802932e3a50d755519045ed0ec970a8308fc`; bas main `04e00e97b35bb984d783bab652011a3d7441a0cd`.
- **PR #73:** Open/Draft, dokumentations-PR med två filer; aktuell head visas i GitHub PR-metadata.
- **PR #71 review:** 0 review submissions, 0 inline review threads; endast den äldre faktakontrollkommentaren från 17 november. Ingen artikelbunden approval.
- **Frontendkod på main:** `src/app.js` blob `8df7ea73093317eeebff2186cf9f6e69a4d3a7de`. Korrigerad kontroll: kortposten med id `europas-ai-infrastruktur` har Meta/Ofcom-rubrik och ingress, men `articleBodies["europas-ai-infrastruktur"]` innehåller Europas AI-infrastrukturtext. Tidigare påstående om Google Wyoming/Crusoe/AEP som body för samma slug var felaktigt och supersederas här. Den faktiska avvikelsen är rubrik/ingress-metadata mot artikelkropp; body är dessutom äldre statisk text jämfört med PR #71.
- **Historiska mergade avvikelser:** PR #56, #64 och #66 kvarstår historiskt dokumenterade. Inga nya deployer eller ändringar har lagts till.

### Render – faktisk kontroll 24 november

- **Workspace:** My Workspace, id `tea-dbjt81flk1mc73a82rg0`. `list_services` och `get_service` lyckades med workspace-id.
- **Statisk webbplats:** `folktribunalen`, service `srv-dblpumgm7kps73bv55e0`, URL https://folktribunalen.onrender.com, branch `main`, `autoDeploy=yes`, `not_suspended`. Senaste listade live-deploy `dep-dbt4qddg1s2s738p7bmg`, commit `a43f1579058824a36ccad6245d4616551505431e`, avslutad 16 november 2026 00:24:32 UTC.
- **Redaktionell backend:** `folktribunalen-editorial`, service `srv-dblq2r0n74is73cchqh0`, URL https://folktribunalen-editorial.onrender.com, branch `main`, `autoDeploy=yes`, `not_suspended`, Free-plan. Senaste listade live-deploy `dep-dblq3nafngtc73c0l87g`, commit `6a835783553565f239864a9da7160d9f79f692b2`, avslutad 4 november 2026 21:22:06 UTC.
- **Postgres:** `folktribunalen-db`, id `dpg-dblq2fqfngtc73c0h9gg-a`, status `available`, Free-plan, Frankfurt, `ipAllowList=[]`. Render anger `expiresAt=2026-12-04T21:18:55Z` (4 december 2026 kl. 23:18:55 EET). Detta är en nära förestående drift- och databevaranderisk som kräver beslut före datumet.
- **DB-test:** read-only `SELECT 1` via hosted Render MCP nekades eftersom databasen blockerar externa anslutningar när IP-allowlisten är tom; hosted MCP har ingen klient-IP som kan tillåtas. Ingen allowliständring och ingen DB-läsning/skrivning genomfördes. Backendens eventuella privata nätverksanslutning till Postgres är inte testad och får inte beskrivas som trasig.
- **Publik route:** container-`curl` till statisk root, AI-artikelroute, backend `/api/health` och `/api/setup-status` gav `curl: (6) Could not resolve host`. Webbläsaröppning av domänerna gav URL-not-accessible. Ingen HTTP-status eller sidtext erhölls.

### Publiceringsarkitektur – kodgranskning

- `index.html` (blob `50710aed1ef2eaecc69e30120646f8b08ae4159c`) laddar statisk `src/app.js?v=20261116-geneve`. Publicerad kortmetadata och body läses från statiska arrayer; ingen `fetch('/api/articles')` finns i den publika appen.
- `/redaktion` i public frontend omdirigerar till `/admin.html`. `admin.js` använder relativa `/api`-anrop. Den statiska Render-tjänsten har ingen API-server; den separata Node-backenden har API-rutterna.
- `server.js` blob `a8c54ccbcedac30fccfd223e820b8165162f2869` har `GET /api/articles` och `PATCH /api/articles/:id`. PATCH kan tekniskt ändra status/body/summary/sources, men admin-UI:t visar endast titel/sammanfattning och statusval – ingen import/redigering av PR-text eller commit-SHA. Publiceringsstatus kräver `confirmPublish: "JA"`, men databasmodellen binder inte beslutet till exakt godkänd GitHub-version.
- **Konsekvens:** en databasstatusändring uppdaterar inte den statiska publika webbplatsen och nuvarande admin-UI kan inte importera PR #71:s exakta innehåll/version. Den anslutna publiceringsvägen är därför inte end-to-end testad eller tillräcklig för att publicera den godkända committen till publik route. En separat godkänd integrationsändring krävs innan publicering kan genomföras och LIVE-kontrolleras.

### Arbetsordning

- PR #71 är fortsatt enda aktiva huvudartikel.
- PR #38 – Synkronicitetsprotokollet – ligger parkerad tills PR #71 har separat godkännande, korrekt publiceringsväg och LIVE-kontroll av HTTP-status, rubrik, ingress och fulltext.
- Ingen merge, cherry-pick, deploy, databasändring, frontendändring eller publicering har gjorts i denna kontroll.

## Historisk arbetskontroll – 23 november 2026

### Aktiv huvudartikel – huvudspår 2

- **Artikel:** *Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen?*
- **PR:** [#71 – Open/Draft](https://github.com/selotisk-source/Folktribunalen/pull/71), gren `editorial/europe-ai-infrastructure-review-2026-11-17`.
- **Exakt aktuell PR-head:** `d7a9d7e907f6e3bccfb2a6e212402ca297d06b7a`.
- **Omfattning:** 36 commits, två ändrade filer; komplett artikel med tolv huvudavsnitt, slutsats, faktaruta, 50 primärkällor och 24 oberoende rapporteringskällor, samt internt dossier med bildförslag, rättighetsstatus, faktakontroll och öppna frågor.
- **Godkännande:** separat chefredaktörsgodkännande av exakt aktuell head saknas. PR #64:s tidigare godkännande gäller inte denna materiellt uppdaterade version. PR #71 har 0 review submissions och 0 inline review threads; den enda issue-kommentaren är en faktakontroll daterad 17 november 2026, inte ett godkännande.
- **Senaste artikeluppdatering:** 23 november – EuroHPC:s officiella utlysningssida har lagts till som primärkälla och tidsfristerna har preciserats. Sidan är Open; Lot 2 stänger 3 december 2026 kl. 17.00 och Lot 1 4 februari 2027 kl. 17.00 (Europe/Luxembourg). Meddelandet 5 november säger att gamla utkast och inlämnade anbud i det tidigare eSubmission-systemet inte beaktas och måste återskapas. Tender Specifications v2 från 23 oktober visar fortfarande den ursprungliga fristen 12 november; den senare officiella utlysningssidan anger förlängningen. Källa: https://www.eurohpc-ju.europa.eu/call-tenders-selection-artificial-intelligence-gigafactory-consortia-and-establishment-ai_en
- **Ny komplettering 23 november – molnsuveränitet:** artikeln har fått ett nytt avsnitt om EU-kommissionens upp till 180 miljoner euro stora ram för suveräna molntjänster, Nederländernas STACKIT-avtal, Schweiz upphandling av Swiss Government Cloud och kommissionens marknadsbild i COM(2026) 502. Texten skiljer upphandlingstak från faktisk användning, ramavtal från byggbudget och SEAL-3/SEAL-2 från full EU-leveranskedja SEAL-4. Reuters rapporterar att upphandlingar i högre grad väger in operativ autonomi, krypteringsnycklar och exit-rättigheter, men också att migrationerna går långsamt. Primärkällor: https://commission.europa.eu/news-and-media/news/commission-advances-cloud-sovereignty-through-strategic-procurement-2026-04-17_en · https://www.rijksoverheid.nl/actueel/nieuws/2026/04/23/rijksoverheid-sluit-deal-met-europees-cloudplatform-stackit · https://www.admin.ch/en/newnsb/vL4DxR3WIhey · https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52026PC0502. Oberoende källa: https://www.reuters.com/business/finance/europes-cloud-sovereignty-push-gains-ground-us-hyperscalers-remain-dominant-2026-11-23/
- **Spanien:** BOE publicerade Real Decreto 1032/2026 den 21 november; den trädde i kraft 22 november. Artikeltexten skiljer 10 MW access power från 500 kW IT-effekt för artikel 13:s rapporterings-/publiceringskrav. Artikel 5 om ALTA-system gäller oberoende av MW-tröskeln men endast när systemet klassats i den högsta säkerhetskategorin. Två skilda 80-procentskrav, PUE/WUE, övergångar och den särskilda EU-projektregimen redovisas separat. Primärkälla: https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-24439
- **IEA:** artikeln använder IEA:s *World Energy Outlook 2026*, publicerad 19 november, för global jämförelse. Uppgifterna om cirka 60 procent kol-/gasbaserad fysisk elförsörjning till datacenter och cirka 70 procents utsläppsökning till 2030 gäller globalt och IEA:s STEPS-scenario, inte en särskild prognos för Europa.
- **Nästa huvudspår:** Synkronicitetsprotokollet, PR #38, förblir parkerat tills PR #71 har fått separat godkännande av exakt aktuell commit, gått via adminvägen och klarat faktisk LIVE-kontroll.

### Övriga spår och research

- **PR #72:** Cypern – Palaipafos, heliga geografier och Commandaria (research).
- **PR #74:** Frölunda – källkedja och evidensnoter (research).
- **PR #75:** Skaga kapell – arkivåtervinning och källkontroll (research).
- **PR #76:** Böckernas väg till Athos (research).
- **PR #77:** Sofia – staden under staden (research).
- **PR #78:** ODJURET UR DJUPET (research).
- **PR #79:** nyhetsbevakning – Hormuz, USA:s kongress, Palantir och Gripen (research/evidensnoter), uppdaterad 23 november: 13 commits, sex noter inklusive separat UKMTO 217.
- **PR #80:** Varna/Svarta havet – undervattenskulturarv, Karon Limen och regional historia (research/evidensnoter).
- **PR #81:** Cypern – Geroskipou-Monagri, Strabon och Afrodite (researchuppdatering, inte huvudartikel).
- Religion/Folket/Tradition är portfölj- och researchbankar. De är inte aktiva huvudartiklar. Ingen parallell huvudartikel har startats.

### GitHub – faktisk kontroll 23 november

- Repository: `selotisk-source/Folktribunalen`.
- `main` head: `04e00e97b35bb984d783bab652011a3d7441a0cd`.
- Masterplanen på `main` är fortfarande den äldre 18-novemberversionen; denna uppdatering ligger endast i PR #73 Draft och är inte mergad till main.
- GitHub API returnerade 68 öppna PR:er; samtliga 68 hade `draft=true`, noll öppna icke-Draft-PR:er.
- PR #71: Open/Draft, 36 commits, två filer, head enligt ovan.
- PR #73: Open/Draft, dokumentations- och hyllningsmodul; denna masterplanrevision ligger kvar på samma Draft-gren.
- PR #79: Open/Draft, 8 commits och 5 filer.
- PR #80: Open/Draft, 10 commits och 8 filer.
- Ingen PR behövde återställas från Ready for review.

### Render, databas och publik route – kontroll 23 november

- Render `list_workspaces` returnerade en arbetsyta: **My Workspace** (`tea-dbjt81flk1mc73a82rg0`). `list_services` svarade `no workspace selected` och kräver att användaren uttryckligen väljer arbetsyta innan tjänste-/deploymentlista kan hämtas. Postgres metadata visar fortsatt `available`, men `ipAllowList=[]`; den hostade anslutningen kan inte nå databasen. Ingen DB-läsning eller skrivning genomfördes.
- Senast dokumenterade statiska Render-deploy: 16 november 2026, commit `a43f1579058824a36ccad6245d4616551505431e`; tjänsten har tidigare identifierats som auto-deploy från `main`.
- Senast dokumenterade redaktionella backend-deploy: 4 november 2026, commit `6a835783553565f239864a9da7160d9f79f692b2`; backendens adminflöde är inte testat end-to-end.
- Aktuell Postgres-metadata: `available`, men `ipAllowList=[]`. Hosted Render MCP saknar en tillåten klientadress; åtkomst kräver lokal Render MCP eller att en betrodd klient-IP tillåts i databasens Networking-inställningar. Ingen DB-läsning eller skrivning genomfördes i denna körning.
- Publik route testades 23 november via både direkt GET i container och webbläsarhämtning: DNS-uppslagningen misslyckades (`Temporary failure in name resolution` / URL not accessible). Ingen HTTP-status, rubrik, ingress eller fulltext kunde erhållas. Artikeln är inte LIVE-kontrollerad.
- `main/src/app.js` har fortfarande den tidigare bekräftade mismatchen: kortmetadata för sluggen `europas-ai-infrastruktur` pekar på Meta/Ofcom medan body-mappningen innehåller Google Wyoming/Crusoe/AEP. PR #71 innehåller den separata AI-infrastrukturtexten. Ingen frontendändring har gjorts.
- Ingen ny merge, cherry-pick, deploy, databasändring, frontendändring eller publicering har gjorts i denna kontroll. PR #64:s merge den 15 november är separat registrerad som historisk avvikelse ovan.

### Historiska publiceringsavvikelser

- **PR #64 – Europas AI-infrastruktur, basversion:** stängd/mergad 15 november 2026 kl. 22:57:44 UTC. Merge commit `45a9b8c2cc295b708afddcb739eb180318fd3052`; merged PR-head `dc32ae595efc9ee4e77d38a82c6e653d57d821fd`. PR:n ändrade endast `editorial/drafts/2026-11-13-europe-ai-infrastructure.md`. En PR-kommentar kl. 17:14:29 UTC dokumenterade chefredaktörens godkännande i chatten; GitHub kunde inte registrera formell APPROVE från PR-författarkontot. Merge till main är bekräftad, men merge i sig bevisar inte databaspost eller korrekt LIVE-publicering. Ingen lyckad HTTP-kontroll av den publika artikeln är dokumenterad. PR #64:s body har uppdaterats med denna historiska status. Behandla merge som en äldre processavvikelse/legacy merge; inga nya deployer eller frontend-/databasändringar får byggas vidare på den utan separat godkännande av exakt version. Den materiellt uppdaterade efterföljaren PR #71 är separat Open/Draft och kräver eget godkännande.
- **PR #56 – Meta/Ofcom** och **PR #66 – Genève/autonoma vapen** är tidigare mergade avvikelser utan påträffat separat artikelbundet LIVE-godkännande. De ska endast registreras historiskt. Inga nya deployer eller kodändringar får byggas vidare på dessa utan separat godkännande.
### Nästa steg

1. Fortsätt samma huvudartikel med källkontroll, öppna frågor och redigering i PR #71 Draft.
2. Invänd separat chefredaktörsgodkännande av exakt head `d7a9d7e907f6e3bccfb2a6e212402ca297d06b7a`.
3. Efter godkännande: använd endast redaktionens anslutna adminväg och kontrollera HTTP-status, rubrik, ingress och fulltext på den faktiska publika routen.
4. Starta inte PR #38 som aktiv huvudartikel före den kontrollen.
5. Håll alla sex återkommande hyllningar och källhänvisningarna för Levski i varje utgåva.

## Aktiva huvudspår

| Nr | Spår | Egen artikel / arbetstitel | Artikeltyp | Status / senaste kontroll |
|---|---|---|---|---|
| 1 | **Palantir och den offentliga makten** | Palantir och den offentliga makten – NHS som stresstest för datakontroll | Granskning | **PUBLICERAD LIVE.** PR #55 mergad; publik route HTTP 200 kontrollerad 13 nov. Daterat NHS-tillägg från 12 nov förbereds separat efter avslutad spår-2-cykel. |
| 2 | **Vem bygger Europas AI-datacenter?** | Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen? | Undersökande granskning | **PR #71 Open/Draft, aktuell head `1a5b802932e3a50d755519045ed0ec970a8308fc`, 40 commits, två filer; 53 primärkällor och 27 oberoende/kompletterande rapporteringskällor.** Chefredaktören har uttryckligen godkänt endast den tidigare versionen `d7a9d7e907f6e3bccfb2a6e212402ca297d06b7a` (50 primärkällor/24 oberoende källor). Fyra senare commits, inklusive EU:s elnätsöverenskommelse och Terna 108/2 GW-avsnitt, omfattas inte av godkännandet. Ingen merge eller LIVE-publicering. DB-allowlist, DNS och den statiska frontendens uteblivna DB-koppling blockerar publicering via nuvarande adminväg. Huvudspår 3 förblir parkerat. |
| 3 | **Synkronicitetsprotokollet** | Synkronicitet i algoritmernas spegel – mellan mening och mekanism | Metod/essä | PR #38 öppen Draft. Komplett första granskningsutkast; kräver reproducerbara observationer, alternativa hypoteser, felkällor och tydlig gräns mellan sammanträffande och kausalitet. Nästa huvudartikel först efter spår 2:s LIVE-kontroll. |
| 4 | **Sofia – staden under staden** | Sofia före Sofia: stadens arkeologiska och religiösa lager | Kulturhistorisk granskning | PR #8 öppen Draft och delutkast. Huvudartikeln behöver musei-/utställningsmaterial och byggnadsarkeologi. Samuils gravtradition ska hållas vid Sankt Achilleios vid Prespasjön; flytta den inte till Sankt Sofia i Sofia utan belägg. |
| 5 | **Europas strategiska råvaror** | Urbergsskölden: Europas råvarusuveränitet, avfall och energiberoende | Granskning | PR #34 och #51 öppna Draft; PR #65 om Kazakstans tungstenprojekt öppet Draft. Skilj CRMA-status, fyndighet, resurs, reserv, tillstånd, finansiering, nätanslutning och faktisk produktion. |
| 6 | **NVIDIA – när aktier blir säkerhet för lån** | NVIDIA som säkerhet: var går gränsen mellan aktiepant och GPU-finansiering? | Finansgranskning | PR #14, #23 och #47 öppna Draft. Den specifika dokumenterade kedjan där NVIDIA-aktier faktiskt pantsätts saknas fortfarande. Skilj aktiepant från GPU-/serverfinansiering och osäkrade konvertibla instrument. |
| 7 | **Det stora och det lilla fängelset** | Libanons kristna mellan två fängelser: Geagea, Gemayel, Syrien och kyrkan | Historisk/politisk granskning | PR #22 och #39 öppna Draft. PR #36 om mordet på Fader Samir Daou är publicerad som separat rätts-/regiongranskning, inte huvudartikeln om Geagea, Gemayel, Syriens närvaro och kyrkans roll. |
| 8 | **Europa: Kyrkorna som överlevde imperierna** | Kyrkorna som överlevde imperierna: Wiesbaden, Warszawa och Prag | Kulturhistorisk serie | Ingen komplett huvudartikel. Byggnadsakter, restaureringsdokument och församlingarnas primärhistorik behöver samlas separat för varje stad; Sofia och Varna är möjliga fortsättningar. |
| 9 | **Fennoskandien – urberget, skogen och hästen** | Fennoskandien: urberg, skog och häst som landskapets infrastruktur | Kulturhistorisk/ekonomisk essä | PR #4, #32, #37 och #43 innehåller delcase; PR #61 om markrätt är separat öppet Draft. Ingen bred huvudartikel ännu; geologi, skogsbruk, markrätt, arkeologi och hästkultur ska hållas samman med separata källserier. |

## Separata projekt och serier

| Projekt | Planerad leverans | Status 17 nov 2026 |
|---|---|---|
| **ODJURET UR DJUPET** | Uppenbarelsebokens odjur ur havet, Storsjöodjuret, Frösöstenen och Peter Thiels egna föreläsningar om Antikrist | PR #28 öppet Draft. Den symboliska parallellen mellan odjuren är central; historisk påverkan får inte påstås utan belägg. Kräver primärtextbaserad kontroll av Thiels föreläsningar, runologisk kontroll av Frösöstenen och källor till Storsjöodjurets folkliga tradition. |
| **Storsjö kapell, Härjedalen – Cladonia/Alex Karp** | Undersök rapporterade cirka 15 000 hektar, fastighetsgränser, fornlämningar, gravar, bronsålderslämningar, depåfynd, samfälligheter och lokala rättigheter | PR #4 och #32 öppna Draft. Ägare och areal är inte fastställda i lagfart/fastighetsregister. Håll helt åtskilt från Storsjön vid Östersund/Frösön. |
| **Skaga kapell** | Åtta delar: ursprung; Johannes Döparens huvud; björnfällarna; silverlöjan; jätten Skagas dotter/Ramunder; offerplatsen; rivningen; återuppbyggnad, brand och återinvigning | **PR #69 Open/Draft:** researchpaket för del 1 samt fem separata Skaga-evidensnoter. Dateringskonflikten 1137/1210 och rivningskonflikten 1825/1826 är dokumenterade; komplett artikelmanus och originalarkivkontroll återstår. |
| **Böckernas väg till Athos** | Sofia, klostren, bokhandel, Zograf och ortodox bildningstradition | PR #26 är separat utkast om 30 000 osmanska dokument och digitalisering. Fyra tidigare utkast som uppgavs ha skapats 5 nov har inte återfunnits med exakta titlar/fulltexter; återskapa dem inte från minnet. Äldre placering: huvudspår SVART HAV, korsreferens RÖD JORD. |
| **Från skrift till storebror** | Skrift, register, statistik, databaser och övervakning som maktens minne | Delutkast PR #21 (realtidsansiktsigenkänning), #41 (Arbetsförmedlingens AI-profilering), #45 (Kelas arbetsplatsövervakning) och #54 (eu-LISA/EES). En sammanhängande huvudartikel krävs; skilj lagstöd, pilot, faktisk drift och tillsyn. |

## Redaktionell portföljstyrning

FOLKTRIBUNALEN är en flerområdesredaktion, inte en breaking-news-feed. Hormuz är en separat bevakningsström och får inte automatiskt tränga undan kultur, historia, framtid, ekonomi, regionala reportage eller de nio huvudspåren.

- Håll en aktiv huvudartikel åt gången i formell gransknings- och publiceringskö.
- Parallell källinsamling får ske som evidensnotering, inte som en andra aktiv huvudartikel.
- Varje dagskörning ska föra minst ett icke-Hormuz-spår framåt när artikelordningen tillåter det.
- Välj portföljspår genom rotation och tid sedan senaste konkreta leverans, inte genom nyhetsvolym.
- Små nyhetssignaler blir daterade, källänkade notiser eller tilläggsförslag; de startar inte automatiskt en full omskrivning.
- Alla leveranser förblir utkast tills chefredaktören uttryckligen godkänner just den artikeln.

### Övriga portföljspår och parkerade ärenden

- **Frölunda – ortnamnshistoria:** PR #74 Open/Draft (researchpaket 19 nov, 10 filer, 425 tillägg; 3 Frölunda-evidensnoter, 4 Hormuz-noter, 1 GAS HUSKY-not och daglig logg). Paketet skiljer Västra Frölunda/Frølanda 1436 från Östra Frölunda/Frølvnda songh 1402; originalbrev, 1550 års jordebok och de två 1313-hänvisningarna återstår att kontrollera. Kandidat för senare artikel, inte aktiv huvudartikel. Börja i originalbelägget **Frølanda 1436** och följ formerna genom 1500-talet, 1550 års Frölunda och 1886 års Västra-tillägg. Isofs tolkning är standardutgångspunkt: frö i betydelsen fruktbar/frodig + land, med senare -lunda-utveckling. Jämför Frösön, Fröslunda, Frösåker och Fröseke. Håll Västra och Östra Frölunda åtskilda; Frølvnda 1402 är ett separat belägg. 1313 får bara nämnas som möjlig parallell om identifikationen kan styrkas. Gudad namnshypotes får inte användas som slutsats utan originalkällestöd.
- **Cypern:** egen kulturhistorisk serie med Palaipafos och övergången från lokala fruktbarhetskulter till Afroditekulten; Geroskipou/Hieros Kipos; Asklepieion i Nea Pafos; Kungagravarna; och Commandaria. Pröva varje samband mot arkeologiska och textuella belägg; förutsätt inte obruten kultkontinuitet.
- **Varna och Svartahavsområdet:** separat regional bevakning om historia, kulturarv, stadsmiljö, kyrkor och regional utveckling. Koppla till Sofia och Svartahavsserien utan att slå ihop separata artiklar.
- **Framtid och teknik:** AI, infrastruktur, samhällsförändring, framtidsscenarier och teknikens konsekvenser ska vara ett eget återkommande spår, inte bara reaktioner på dagsnyheter.
- **Parkerade draft-ärenden:** PR #61 (SOU 2026:58/markrätt), #59 (Norrsundet/SMR), #58 (JEF:s nordliga flottor), #57 (retrospektiv ansiktsigenkänning), #53 (Hormuz-incidentuppföljning) och #52 (Siemens Energy/AI-elnät) är öppna granskningsärenden. De får inte tränga sig före den aktiva huvudartikelordningen. PR #65 om Kazakstans tungstenprojekt hör till huvudspår 5 och ligger som Draft. PR #10 om USA:s kongress och PR #7 om Palantirs kvartalsrapport ligger i nyhetsbevakningen som Draft-underlag. PR #12 är inte ett Gripen-utkast.
- **Hyllningskontroll:** Identiteten är fastställd som **Vasil Levski (Васил Левски; Vasil Ivanov Kunchev, 1837–1873)**. National Museum Vasil Levski dokumenterar hans cirka 100 handskrivna brev och hans handskrivna program-/regelutkast för befrielserörelsen; Bulgariens nationalbibliotek bevarar och digitaliserar hans anteckningsbok. Hyllningen ska knytas till nationell frigörelse, medborgerligt och kulturellt arv. Använd inga tillskrivna citat utan kontroll mot originaltext. Källor: https://vlevskimuseum-bg.org/en/documentary-heritage/ · https://www.nationallibrary.bg/levski/


- **Religion, folk och tradition – researchbank:** PR #69 innehåller Skaga-kapellpaketet och separata evidensnoter. Dessa är källunderlag, inte en andra aktiv huvudartikel. Skaga del 1 kräver fortsatt originalarkivkontroll innan komplett artikel kan läggas i godkännandekön.
## Nyhetsuppdatering – 23 november 2026

### Hormuz och sjöfarten
UKMTO Advisory 217-26, daterad 22 november kl. 14:25 UTC, beskriver en rapporterad incident mellan en tanker och militära styrkor i Omanbukten. Den är klassificerad som **Advisory**, inte Attack, och innehåller ingen uppgift om träff, projektil, skada, personskada eller miljöpåverkan. Håll den separat från UKMTO 214–216 nära Khasab den 20–21 november; 215/216 kan avse samma tanker och ska inte räknas som två säkert identifierade fartyg.  
Källa: https://www.ukmto.org/-/media/ukmto/products/20261122_ukmto_-advisory_217-26.pdf

### Maktförskjutningen i USA:s kongress
Efter Chuck Hubbards seger över Virginia Foxx i North Carolinas femte distrikt har demokraterna säkrat minst **258 av 435 platser** i representanthuset; fyra valkretsar återstår att kalla. Den inkommande senatsmajoriteten är **56–44**. Den 120:e kongressen tillträder 3 januari 2027; den sittande 119:e kongressen behåller sina nuvarande mandat fram till dess. H.R. 2347, as amended med BAAJA/SA 6883, passerade senaten 62–33 den 19 november men är ännu inte lag och väntar på representanthusets behandling.  
Källor: https://apnews.com/article/721096a4d9ba2cd68683692361798cdb · https://www.reuters.com/world/us/north-carolina-win-gives-democrats-biggest-us-house-majority-since-early-1990s-2026-11-22/ · https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00270.htm

### Palantir – Q3, DOJ och Karps Form 144
Q3 2026 redovisade 2,313 miljarder USD i intäkter, 984 miljoner USD i USA:s kommersiella intäkter, 953 miljoner USD från amerikanska myndighetskunder och 4,9 miljarder USD i RPO. DOJ:s åtal mot Igor D’iu är en separat säkerhetshändelse; DOJ namnger inte Palantir i pressmeddelandet, medan Reuters identifierar bolaget. Den 20 november lämnade Alexander Karp dessutom in en Form 144 om en **föreslagen** försäljning av 585 000 aktier, med ett angivet sammanlagt marknadsvärde på 85 900 756,50 USD. Form 144 visar en föreslagen försäljning, inte att affären genomförts.  
Källor: https://www.sec.gov/Archives/edgar/data/1321655/000195004726011411/xsl144X01/primary_doc.xml · https://www.reuters.com/legal/litigation/us-department-of-justice-charges-russian-targeting-palantir-foreign-agent-2026-11-18/ · https://investors.palantir.com/files/2026%20Q3%20PLTR%2010-Q.pdf

### Svenska Gripen över Polen
Försvarsmakten bekräftar en flera timmar lång insats natten till 20 november med svenska Gripen, polska F-16 och nederländskt tankflyg. Polens försvarsministerium redovisar tre nedfallsplatser och att en Ch-101 identifierats vid Nowy Lipowiec. Polens operativa befälhavare uppger i Rzeczpospolita att CAOC Uedem utfärdat ett villkorat eldtillstånd; en svensk pilot försökte följa ett objekt som preliminärt bedömdes vara en Kh-101 men avlossade inget skott eftersom positiv identifiering inte kunde göras i det svåra vädret. Det senare är en attribuerad uppgift från befälhavaren genom sekundär rapportering, inte en detalj i Försvarsmaktens svenska pressmeddelande.  
Källor: https://www.mynewsdesk.com/forsvarsmakten/pressreleases/swedish-jas-gripen-in-allied-air-defence-operations-over-poland-3479554 · https://www.gov.pl/web/obrona-narodowa/wicepremier-w-kosiniak-kamysz-o-naruszeniu-polskiej-przestrzeni-powietrznej · https://www.rp.pl/konflikty-zbrojne/art45521881-pilot-mial-zgode-nato-na-zestrzelenie-rosyjskiego-pocisku-wiadomo-dlaczego-nie-strzelil

**Samlad status:** uppgifterna ovan är daterade bevakningsuppdateringar och evidensnoter. De är inte nya huvudartiklar och ändrar inte den fastställda huvudartikelordningen.

## Aktuella nyhetsspår

| Spår | Artikelvinkel | Status 17 nov 2026 (historisk ögonblicksbild) |
|---|---|---|
| **Hormuz och sjöfarten** | Hormuz: två UKMTO-varningar, separata minepåståenden och en växande energirisk | IMO:s officiella pressbriefing 11 nov anger **mer än 130 verifierade attacker** och minst 25 döda sjömän sedan 28 feb. En FN-briefing 14 nov, återgiven av Al Jazeera, anger att IMO följde **136 säkerhetsincidenter** 1 mar–11 nov, varav 35 i oktober och 10 i november; behåll skillnaden mellan IMO:s offentliga formulering “attacker” och den senare rapporterade incidenträkningen “incidenter”. UKMTO Warning 207-26 (16 nov 05:58 UTC): utgående tanker rapporterad träffad av okänd projektil, maskinrumsbrand, besättningen redovisad. Warning 208-26 (16 nov 19:00 UTC): separat tredjepartsrapport om tanker 7 nautiska mil norr om Khasab, obrukbart fartyg och maskinrumsbrand, besättningen uppgavs säker. Iranska flottans separata minepåståenden är inte oberoende bekräftade och får inte kopplas till UKMTO-varningarna utan belägg. Al Jazeera 17 nov rapporterar även drönarlarm vid Khor Mor i irakiska Kurdistan; ingen omedelbar träff eller skada rapporterades från den senaste överflygningen. PR #69 innehåller tre separata Hormuz-evidensnoter. Källor: https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-secretary-general-calls-for-enforcement-of-maritime-rules.aspx · https://www.ukmto.org/-/media/ukmto/products/20261116-ukmto_warning_207-26.pdf · https://www.ukmto.org/-/media/ukmto/products/20261116-ukmto_warning_208-26.pdf · https://www.aljazeera.com/news/2026/11/17/tankers-hit-in-strait-of-hormuz-as-drone-raises-alarm-at-iraq-gas-field |
| **Svarta havet / Varna** | BETUL 8 sjönk i Bulgariens ekonomiska zon | 16 nov kapsejsade/sjönk BETUL 8 cirka 40 nautiska mil från Kap Kaliakra med 3 000 ton vete ombord. Bulgariens transportministerium uppgav att samtliga 12 turkiska besättningsmedlemmar räddades. Reuters hänvisar till maritima säkerhetskällor för uppgiften om sjödrönare; ansvarig aktör och exakt angreppsmetod är inte fastställda i den officiella bulgariska information som kontrollerats. PR #69 har separat evidensnot. Håll händelsen åtskild från Sulina-incidenterna 13–14 nov. Källa: https://www.reuters.com/world/cargo-ship-sinking-black-sea-off-bulgaria-says-transport-ministry-2026-11-16/ |
| **Maktförskjutningen i USA:s kongress** | Demokraterna tar båda kamrarna – men maktskiftet sker först i januari | AP har kallat Demokraternas seger i både representanthuset och senaten i mellanårsvalet 3 nov. Reuters återgav 11 nov en preliminär fördelning på 55–44 i senaten med en plats olöst och 254–168 i representanthuset med 13 lopp ännu ej avgjorda. Den sittande 119:e kongressen arbetar fortfarande: Reuters rapporterade 17 nov att den republikanskt ledda senaten bekräftade Daniel Domenico till 10th Circuit med 51–46. Senatens H.R. 2347-omröstningar 9–10 nov (73–25 och 62–21) var procedursteg, inte slutligt antagande av BAAJA. Källor: https://apnews.com/article/f126e12e05b579a327b98481c0ae2226 · https://www.reuters.com/world/us/democrat-scott-colom-defeats-incumbent-cindy-hyde-smith-cnn-projects-2026-11-11/ · https://www.reuters.com/legal/government/us-senate-elevates-judge-appointed-in-trumps-first-term-to-appeals-court-2026-11-17/ · https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00258.htm |
| **Palantirs kvartalsrapport** | Q3: snabb tillväxt, USA-koncentration och offentliga kontrakt | SEC:s Form 10-Q för kvartalet till 30 sep lämnades in 3 nov. Intäkterna var 2,313 md USD mot 1,181 md USD motsvarande kvartal 2025 (+96 %). USA stod för 1,937 md USD (cirka 84 %) och övriga marknader 376 MUSD. Bolagets Q3-kommunikation anger USA:s kommersiella intäkter 984 MUSD och USA:s myndighetsintäkter 953 MUSD. Siffrorna är bolagsrapporterade; bevaka kundkoncentration, kontraktens faktiska leverans och offentlig sektors beroende. Källor: https://www.sec.gov/Archives/edgar/data/1321655/000132165526000048/pltr-20260930.htm · https://www.reuters.com/technology/palantir-tops-third-quarter-revenue-estimates-strong-ai-software-demand-2026-11-02/ |
| **Europas AI-infrastruktur** | Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen? | PR #71 är Open/Draft, aktuell commit `ef997a8361fecdaf14af63972f2813f1a0a6a2ea`. 19 nov-kontrollen har lagt till Sveriges bemyndigande om upp till 50 miljoner euro och skiljt den statliga noden från AI Gigafactory Northerns ännu ej valda svenska plats. Norgeavsnittet skiljer regeringens 800 MW från E24:s 868 MW och noterar E24:s avrundning av Lefdal 63/63,8 MW. EuroHPC är fortsatt Open; NVE:s senaste offentliga status är ännu inte slutligt avgjord. Ingen tilldelning eller svensk plats är fastställd. PR #71 kräver separat godkännande av exakt commit. Källor: https://www.uniper.energy/system/files/2026-11/Uniper_Capital%20Markets%20Day%20Presentation_November_2026.pdf · https://www.ebrd.com/home/news-and-events/publications/economics/transition-reports/transition-report-2026-27/chapters.html · https://e24.no/naeringsliv/i/0vE68o/nscale-prosjekt-slipper-stroemfrys · https://www.nve.no/nytt-fra-nve/nyheter-energi/nve-gir-nscale-varsel-om-tvangsmulkt/ · https://press.telia.se/news/telia-och-europeiska-teknikledare-bildar-ai-gigafactory-northern-med-sikte-paa-en-ny-saeker-ai-infrastruktur-515055 |
| **Svenska Gripen över Polen** | Fyra timmar över Polen – Gripens uppdrag, tankflyget och Natos luftförsvar | Senaste enskilda patrulluppgift är 3 nov: Polska generalstaben uppgav över fyra timmars patrull-/skyddsuppdrag med tankflyg AA-332 MMF19; antal Gripen offentliggjordes inte. Sveriges regeringsbesked 30 sep anger att insatsen startade i oktober och att flygplanen huvudsakligen baseras i Sverige med en mindre framskjuten närvaro i Polen. Patriotinsatsen från december är separat. Ingen ny specifik patrullhändelse har identifierats 17 nov. Källor: https://www.government.se/press-releases/2026/09/sweden-to-provide-combat-aircraft-for-nato-operation-in-poland/ · https://defence24.pl/sily-zbrojne/tej-nocy-szwedzi-chronili-polskie-niebo-wspieral-je-tankowiec-nato |
| **Meta/Ofcom och Genève/autonoma vapen** | Två separata publiceringsavvikelser | PR #56 och PR #66 är mergade, men ingen separat artikelbunden LIVE-godkännandehandling har påträffats. Meta/Ofcom finns i senaste Render-deployens förstasida; Genève finns i senare main-commits men inte i senaste kontrollerade live-deploy. Båda kräver chefredaktörens uttryckliga beslut om fortsatt publicering eller tillbakadragande. |
## Återkommande hyllning i varje utgåva

- **Johannes Gutenberg** – tryckkonst och spridning av skrift.
- **Carl von Linné** – vetenskaplig klassifikation och naturkunskap.
- **Voltaire** – filosofi, kritik och bildning.
- **Sankta Paraskevi** – andligt och kulturellt arv.
- **Sankt Charbel** – andligt och kulturellt arv.
- **Vasil Levski (Васил Левски; Vasil Ivanov Kunchev, 1837–1873)** – Bulgariens “Apostel för frihet”, revolutionär organisatör och bärare av ett dokumenterat nationellt och medborgerligt arv. National Museum Vasil Levski beskriver hans handskrivna brev och hans program-/regelutkast för befrielserörelsen; National Library of Bulgaria bevarar hans anteckningsbok. Använd inga tillskrivna citat utan kontroll av originaltext. Identiteten är fastställd; namnet skrivs **Vasil Levski**, inte “Vasilevski”. Källor: https://vlevskimuseum-bg.org/en/documentary-heritage/ · https://www.nationallibrary.bg/levski/

## Nästa arbetsordning

1. **Huvudspår 2 fortsätter som enda aktiva huvudartikel.** PR #71 har en komplett, rensad artikeltext och separat dossier med faktaläge 19 november: Sverige/EuroHPC, Norge/E24, NVE/Nscale, AI Gigafactory Northern, BNEF, Uniper och EBRD. Exakt commit `ef997a8361fecdaf14af63972f2813f1a0a6a2ea` väntar på separat uttryckligt chefredaktörsgodkännande.
2. **Publiceringsvägen:** Render-arbetsytan är identifierad och tjänsterna/deployhistoriken är lästa. Databasen är `available` men `ipAllowList=[]`; read-only `SELECT 1` nekas av den hostade Render MCP-anslutningen. Fortsätt med lokal Render MCP eller en uttryckligen betrodd klient-IP. Adminens health/login/article-status är ännu inte testad end-to-end.
3. **Frontendavvikelsen:** rätta kort-/slug-mismatchen för AI-artikeln via kontrollerad redaktionell ändring. Meta/Ofcom och Genève/autonoma vapen förblir separata publiceringsärenden tills chefredaktören avgör deras status.
4. **Efter godkännande:** publicera den godkända PR #71-versionen via redaktionens admin, invänta Render och kontrollera faktisk publik route med HTTP-status samt korrekt rubrik, ingress, fulltext och källor. Ingen nästa huvudartikel före denna kontroll.
5. **Nästa huvudartikel:** först när huvudspår 2 visas korrekt LIVE öppnas huvudspår 3 – Synkronicitetsprotokollet, PR #38. Därefter följer huvudspår 4–9 i fastställd ordning.
6. **Sidospår:** PR #69:s Skaga- och evidenspaket får användas som researchbank, men Skaga blir inte en andra aktiv huvudartikel. Cypern, Frölunda och Varna/Svarta havet fortsätter som källnoter när de inte stör huvudartikelordningen.

## Redaktionell standard

- Primärkällor först: myndighetsbeslut, lagtext, domar, avtal, bolagsregister, upphandlingar, årsredovisningar, prospekt och originaldata.
- Oberoende källor ska pröva primärkällornas uppgifter; pressmeddelanden är avsändarens uppgifter, inte automatiskt oberoende bevis.
- Märk varje central uppgift som **belagt faktum**, **partsuppgift**, **analys** eller **obekräftad hypotes**.
- Ange datum, metod, källans begränsningar, öppna frågor och rättelser.
- Ge berörda parter möjlighet att bemöta konkreta uppgifter.
- Skilj Storsjö kapell i Härjedalen från Storsjön vid Östersund/Frösön.
- Varje artikel ska innehålla artikeltyp, rubrik, ingress, komplett text, primärkällor, oberoende källor, bildförslag, faktakontroll, öppna frågor och status.
- Ingen automatisk publicering. Varje artikel måste uttryckligen godkännas av chefredaktören och kontrolleras på faktisk publik route efter publicering innan nästa artikel påbörjas.

## Historisk redaktionsinventering – 12 november 2026 (statusen nedan är supersederad av uppdateringen ovan)

- **PR #55:** huvudspår 1, Palantir och den offentliga makten. Komplett utkast med ingress, huvudtext, primärkällor, oberoende rapportering, bildförslag, faktakontroll och öppna frågor. Draft, inte godkänt och inte publicerat.
- **PR #33:** äldre Palantir/NHS-version stängd som supersederad av PR #55.
- **PR #7:** separat aktuellt nyhetsspår om Palantirs Q3, molnåtagande, kundfordringar och offentliga kontrakt. Draft.
- **PR #42:** separat granskningsutkast om Palantirs kontakter kring GP-journaler. Draft; håll lobbying åtskild från faktisk dataintegration.
- **PR #36:** Fader Samir Daou-artikeln är mergad till `main` och finns i Render-live-versionens bundle `f52a144...` med publiceringsdatum 11 november 2026. Route: `#/artikel/samir-daou-jbeil`. Den är separat från huvudspår 7:s historiska artikel.
- **PR #10:** USA:s kongress och maktförskjutningen. Draft.
- **PR #16:** Breaking Watch-täckningsmatris uppdaterad 12 november. Draft.
- **PR #38:** Synkronicitetsprotokollet. Draft.
- **PR #34:** Urbergsskölden/CRMA. Draft.
- **PR #47:** NVIDIA:s bolagsstyrning och exportkontroller. Draft; aktiepantkedjan saknas fortfarande.
- **PR #4 och #32:** Storsjö kapell/Cladonia, separata utkast som kräver fortsatt fastighets- och fornlämningskontroll.
- **PR #53:** Hormuz-uppföljning med fyra rapporter och skilda bevislägen. Draft.
- **PR #1:** arkiv/dokumentbank med 26 äldre utkast; får inte batch-mergas.
- Fullständigt artikelpaket krävs för varje artikel: artikeltyp, rubrik, ingress, komplett sammanhängande text, primärkällor, oberoende källor, bildförslag, faktakontroll, öppna frågor och tydlig status.

## Hormuz – teknisk publiceringsstatus 13 november 2026

- PR #62 (JMIC 113 och UKMTO 201–204) och PR #63 (koppla uppdateringen till publicerad artikeltext) är mergade till `main`.
- Render statisk tjänst visar deployment `dep-dbr6iilg1s2s73fiq0v0`, commit `f873ebfa9fbe637ad74dd7db662496c714090004`, status `live`, avslutad 13 november kl. 01.35.25 UTC.
- `src/app.js` på `main` innehåller den fullständiga Hormuz-texten, JMIC Advisory Note 113 och fyra separata UKMTO-poster 201–204. Detta bekräftar att källkoden för den aktuella versionen innehåller uppdateringen.
- Direkt route-/HTTP-kontroll av `https://folktribunalen.onrender.com/#/artikel/hormuz-sjofart` kunde inte slutföras i denna körning: webbläsarhämtningen rapporterade att hosten inte var åtkomlig. Status är därför deployment LIVE och kodinnehåll kontrollerat, men den faktiska publika route-visningen är ännu inte direkt kontrollerad.
- Databasens ID är `dpg-dblq2fqfngtc73c0h9gg-a`, status `available`, men `ipAllowList=[]`. En ny read-only `SELECT 1` nekades med det exakta felet att databasen blockerar alla externa anslutningar eftersom IP-allowlisten är tom. Render anger lokal Render MCP eller en uttryckligen betrodd klient-IP under Networking; ingen öppen `0.0.0.0/0`-regel används.
- Redaktionell backend `folktribunalen-editorial` kör fortfarande deployment från 4 november, commit `6a835783553565f239864a9da7160d9f79f692b2`. Admin/API-flödet och `DATABASE_URL` är inte testade end-to-end. Ingen databaspost för Hormuz-fullversionen har skrivits.

## Faktaläge och arbetslogg – 9 november 2026, 09.05 Europe/Sofia

- **IMO:** den aktuella officiella incidentlistan anger 130 bekräftade incidenter och 25 dödsfall per 6 november. Den listar ett fartyg som VIEILA (IMO 9234654), men VesselFinder och Rynda anger samma IMO-nummer som VIEIRA, råoljetankfartyg under Vanuatus flagg. Detta är en olöst namn-/registeravvikelse; texten använder IMO-numret tills flaggstatskontroll är möjlig.
- **VIEIRA/VIEILA och UKMTO 197-26:** IMO:s datum och position 5 november, 16 NM öster om Khasab, matchar UKMTO 197-26 starkt. UKMTO namngav inte fartyget och IMO-sidan anger inte varningsnumret.
- **Huda:** ClassNK bekräftar registerposten HUDA, IMO 9197088, bulkfartyg under St Kitts och Nevis. CENTCOM:s uppgift om iranskt hamnbesök och blockadbrott är fortsatt en partsuppgift. AIS-ögonblicksbilden visar Sohar som senaste registrerade hamnanlöp före positionen den 5 november, men är inte en fullständig färdjournal.
- **Irak:** Reuters 8 november återger utrikesminister Fuad Husseins uppgift om en förståelse med USA för irakisk export via en sjöfartsled nära Oman. Ingen offentlig avtalstext eller verifierad operativ korridor har identifierats.
- **Iran:** Reuters 9 november återger en anonym IRGC-flottkälla om förstörda navigationshjälpmedel och inga obehöriga passager under natten. Ansvarig aktör, tidpunkt och effekt är inte oberoende fastställda.
- **LNG:** Edison uppger 38 laster, cirka 5 bcm, under force majeure till 31 december och 27 ersatta per 27 oktober. Edisons webbsida är daterad 27 oktober, men pressmeddelandets brödtext har dateline 28 september; datumskillnaden redovisas.
- **JMIC Update 112:** en sekundär återgivning uppger 177 incidenter och Huda kopplad till 198-26. Den ursprungliga PDF-filen på UKMTO:s webbplats har inte kunnat granskas direkt i denna körning; dessa detaljer används inte som självständigt bekräftad primärfakta.
- **Publik webbplats:** Render statiska tjänst folktribunalen visar deployment dep-dbo6g9rrjlhs73ai5500 som live, commit 8e46f91e643be55cce6afed9ed6d05d5c9aae707, avslutad 8 november 12.16.54 UTC. Den publika huvudversionen är kort (fyra huvudstycken). Den nya fullständiga texten finns i PR #48 och är inte publicerad.
- **Nästa steg:** chefredaktören granskar fullversionen i PR #3. Efter uttryckligt godkännande kan den ersätta kortversionen på den publika sajten. Därefter kontrolleras den faktiska sidan; först därefter går redaktionen vidare till Gripen över Polen.

- **Källredigering 09.12:** UKMTO:s Weekly Overview No. 14 är nu integrerad i artikelns brödtext med tydlig skillnad mellan veckotalet (11 rapporterade attacker under perioden till 4 november) och IMO:s kumulativa 130 bekräftade incidenter. Reuters om Task Force Iron Gate är flyttad till kompletterande källor; primärkällor och oberoende källor är nu separerade.

- **Källkomplettering 09.18:** WAM:s officiella nyhetsbyråsida om räddningen av 22 personer och den officiella JMIC Update 112-PDF:en har lagts in i primärkällförteckningen med tydlig notering om att sidorna inte kunde hämtas direkt i denna kontroll. AP och en sekundär återgivning används endast som komplettering; JMIC:s 177-tal och Huda-koppling behandlas inte som självständigt bekräftade fakta.

- **UKMTO Overview No. 14, primärkontrollerad 09.24:** rapporten anger 96 incidenter rapporterade till UKMTO i Hormuzsundet sedan 28 februari, 155 Iran–USA-konfliktrelaterade incidenter YTD i hela VRA, 11 attacker under rapportveckan (8 i sundet, 3 i Persiska viken), 3 fartyg som fortsatte, 5 som behövde assistans och 3 som sjönk. Den anger 170 utgående och 155 inkommande passager för de senaste sju dagarna, inklusive AIS-baserade och USA-uppgivna faciliterade passager; omkring 65 procent under förkonfliktnivån. Dessa UKMTO-mått hålls isär från IMO:s 130 bekräftade incidenter och JMIC:s sekundärt återgivna 177.


## Arbetslogg – 10 november 2026

- **Hormuz fullversion:** uppdaterad i PR #3, commit `b91bcba0111c32cc62dbbcba2bfb24dc12b05946`. Tillagt Reuters 10 november om 31 utgående lastade LNG-tankfartyg i oktober (23 Qatar, åtta UAE) och separat Kpler-mått om 42 lastningar mot 27 i september. Detta märks som partiell LNG-återhämtning, inte generell återöppning.
- **JMIC Update 112:** original-PDF direkt granskad. Faktakontrollen korrigerad så att HUDA/UKMTO 198-26 anges som JMIC:s regionala korsreferens baserad på CENTCOM:s identifiering, inte som oberoende teknisk verifiering. Öppen fråga kvarstår om flaggstat/rederi kan bekräfta identitet och färd.
- **IMO:** texten använder den senaste publicerade incidentlistan per 9 november: 131 bekräftade incidenter och 25 dödsfall. IMO-rådets tidigare 130 verifierade attacker hålls som ett separat mått.
- **Saudi East-West-pipeline:** uppgiften om träff 9 november är fortfarande en saudisk partsuppgift som återgivits av Reuters/Financial Times; ingen oberoende teknisk skadeverifiering har identifierats.
- **Arkiv:** PR #1:s 26 artikelutkast har inventerats i `editorial/research/2026-11-10-archive-draft-inventory.md`. Den 27:e filen i PR #1 är en täckningsmatris, inte ett artikelutkast. PR #1 förblir draft och får inte batch-mergas.
- **Godkännandestatus:** PR #3 är fortsatt open/draft/unmerged. Ingen fullversion har godkänts eller publicerats. Den separat godkända kortversionen ligger kvar på den statiska webbplatsen.


## Arbetslogg – 11 november 2026

- **Hormuz – versionsordning rättad:** kanonisk artikeltext är editorial/drafts/2026-11-05-hormuz.md. Filen 2026-11-06-hormuz.md är uttryckligen märkt som arkiverad arbetsversion med bevarade käll-/arbetsnoteringar, inte som den kanoniska artikeln. PR #3:s beskrivning ska följa samma filordning.
- **Chefredaktörsbeslut:** grundversionen av fulltexten godkändes uttryckligen 10 november. Tilläggen om UKMTO 201-26 och ADNOC den 10 november samt IMO 133/25, Reuters 11 november och ORLEN-avtalet har tillkommit efter det beslutet och är därför inte godkända. PR #3 ska ligga kvar som draft tills den uppdaterade helheten fått ett separat beslut.
- **IMO primärkontrollerad:** IMO:s officiella sida anger 133 bekräftade incidenter och 25 döda sjömän med lägesdatum 10 november; föregående ögonblicksbild 9 november angav 131. Den aktuella listan visar bland annat NAVIG8 MACALLISTER (7 nov, 8 NM nordväst om Khasab), HUDA (7 nov, 17 NM från Omans kust) och GRIT (3 nov, 14 NM nordost om Lima). IMO-sidan kopplar inte uttryckligen dessa poster till UKMTO-varningsnummer. Källa: https://www.imo.org/en/mediacentre/hottopics/pages/middle-east-highlighted-incidents.aspx
- **Reuters 11 november:** Brent $92,53 och WTI $86,71 kl. 04.20 GMT; Washington Institute:s räkning 37 fartygsangrepp i oktober. Håll detta institut-/Reuters-mått åtskilt från IMO:s 133 bekräftade incidenter. Källa: https://www.reuters.com/business/energy/oil-rises-two-month-low-hormuz-shipping-attacks-offset-iran-truce-hopes-2026-11-11/
- **ORLEN primärkälla:** Regulatory Announcement No. 39/2026, 10 november, bekräftar uppsägning av ett av två QatarEnergy-avtal: 1 mtpa, cirka 15,3 TWh, uppskattat värde 570 miljoner euro för 2026, 60 dagars fortsatt avtalsverkan. Det andra avtalet med upp till 1 mtpa till 2034 fortsätter. Reuters ger oberoende rapportering. Källor: https://www.orlen.pl/en/investor-relations/reports-and-publications/regulatory-announcements/2026/03/Regulatory-announcement-no-39-2026 · https://www.reuters.com/business/energy/polands-orlen-ends-long-term-qatarenergy-lng-contract-over-delivery-failure-2026-11-10/
- **UKMTO 201-26:** Reuters återger UKMTO:s uppgift om tankerträff nordost om Lima den 10 november. UKMTO:s dynamiska Recent Incidents-sida visade 0 rapporter vid kontroll 11 november; den ursprungliga posten gick inte att hämta direkt. ADNOC:s separata fartygsskada är direkt bekräftad via WAM/bolagsuttalande. De två händelserna får inte slås ihop.
- **Nytt Östersjö-/energisäkerhetsspår:** Reuters rapporterade 11 november brand i Ust-Luga efter drönarattack, tre skadade enligt regionguvernören; Reuters kunde inte omedelbart verifiera guvernörens uppgifter. Separat uppger branschkällor att rysk raffinaderikapacitet minskat omkring 30 procent sedan slutet av oktober. Loggas som framtida researchsignal för Fennoskandien/energi, inte som Hormuz-incident. Källor: https://www.reuters.com/world/drone-attack-causes-fire-russias-baltic-sea-port-ust-luga-governor-says-2026-11-11/ · https://www.reuters.com/business/energy/recent-ukrainian-attacks-have-reduced-russias-oil-processing-capacity-by-30-2026-11-10/
- **GitHub/PR #3:** branch approval/hormuz-2026-11-06 är 75 commits före och 17 bakom main; compare-status diverged, GitHub anger mergeable: false. PR #3 ligger draft och är inte mergad. Branchen måste synkas/reconcileras innan merge, utan att någon ej godkänd artikeltext förs till LIVE.
- **Render:** databasen available, men ipAllowList: []; read-only SELECT 1 nekas av extern hosted connection. Backendens senaste live deployment är 4 november; publik statisk tjänsts senaste live deployment är 8 november. Ingen databaspost för fullversionen har skrivits.


## Teknisk redaktionsuppdatering – 11 november 2026

- PR #3 stängdes som supersederad efter att dess branch visat 80 commits före och 17 bakom main samt mergeable=false.
- En ny, synkad granskningsgren skapades från aktuell main: editorial/hormuz-2026-11-11-reconciled. PR #48 innehåller endast tre fokuserade filändringar: masterplanen, kanonisk Hormuz-fulltext och arkivfilen.
- PR #48 jämförs med main som ahead by 3, behind by 0; GitHub rapporterar mergeable=true. PR #48 är fortsatt draft eftersom tilläggen 10–11 november inte har godkänts.
- Den ursprungliga chefredaktörskommentaren i PR #3 finns kvar och länkas i PR #48. Ingen merge, publicering eller LIVE-ändring har gjorts.


## Prioritetskorrigering – 11 november 2026

Chefredaktörens korrigering: **Hormuz är prioritet 6.** Tidigare formuleringar i denna masterplan som placerade Hormuz först eller som nästa artikel var felaktiga och ersätts av denna prioritetsordning. Prioritet 1–5 ska genomföras före Hormuz i den tidigare beslutade inbördes ordningen. Hormuz grundversionens godkännande kvarstår, men det ändrar inte artikelns köplats; tillägg daterade 10–11 november är fortfarande inte godkända. Ingen artikel efter Hormuz påbörjas före faktisk LIVE-kontroll när Hormuz väl når sin tur.


## Publiceringsbeslut och uppföljning – 11 november 2026

- Chefredaktören godkände uttryckligen den samlade Hormuz-fullversionen efter att ha fått se den uppdaterade helheten och därefter gett klartecken: “Klart kör”.
- Den kanoniska artikelfilen uppdaterades på `main` i commit `f9e8b79389822b1895eedc7c5794d754e60c2abb`.
- Den publika artikelvyn i `src/app.js` uppdaterades på `main` i commit `8905e404ce621418d114991cdb99bbb093e1a7ea`. Kortversionens metadata ersattes med fulltextens rubrikbeskrivning och datum 11 november. Den fullständiga artikeln omfattar ingress, huvudtext, källor samt uppdateringar om Gem No.2, ADNOC Gas, UKMTO 201/202, ADNOC Logistics & Services, ORLEN, Irans uttalanden och Didamar. Didamar-texten redovisar både Reuters rapportering och Omans motuppgift.
- Render static service `srv-dblpumgm7kps73bv55e0` är konfigurerad för auto-deploy från `main`. Vid senaste kontrollen hade Render ännu inte listat en deployment för commit `8905e404...`; därför är LIVE-publicering ännu inte bekräftad.
- Nästa operativa steg: kontrollera Render tills commit `8905e404...` är `live`, öppna `https://folktribunalen.onrender.com/#/artikel/hormuz-sjofart` och kontrollera att fulltext och länkar visas. Först efter den kontrollen återgår redaktionen till nästa artikel i den ursprungligen beslutade ordningen efter prioritet 6.


## Deployment-uppföljning – 11 november 2026, 21:xx UTC

- Kontroll efter publiceringscommit `8905e404ce621418d114991cdb99bbb093e1a7ea`: Render hade ännu ingen deployment för den committen trots auto-deploy från `main`.
- En ny dokumentationscommit skickas till `main` för att ge den konfigurerade commit-triggern en ny ändringssignal. Ingen manuell Render-deployment används.
- Hormuz-fullversionen får status LIVE först när Render visar deployment för aktuell `main` som `live` och den publika artikelsidan har öppnats och kontrollerats.


## Historisk statusuppdatering – 12 november 2026

- GitHub `main` innehåller fullversionens Hormuz-kod, men Render static service kör fortfarande commit `f52a144173118b00200657fcabb0bfd2de19abae`. Den nya fullversionen är inte LIVE.
- Render Postgres `folktribunalen-db` är `available`, men `ipAllowList=[]`; en ny `SELECT 1` nekades med beskedet att alla externa anslutningar blockeras. Gratisinstansen löper ut 4 december 2026.
- Redaktionell backend kör fortfarande deployment från 4 november, commit `6a835783553565f239864a9da7160d9f79f692b2`.
- PR #55 är öppen, draft och inte mergad; den innehåller huvudspår 1:s kompletta granskningsutkast. PR #33 har stängts som supersederad. PR #7 har tydliggjorts som det separata Q3-/molnåtagandespåret. Den befintliga Palantir-sidan på publika sajten är märkt `PÅGÅENDE GRANSKNING`, inte som den färdiga huvudartikeln.
- PR #36:s Fader Samir Daou-text finns i Render-live-versionens bundle med artikelkort, artikeltext och publiceringsdatum 11 november 2026. Den är publicerad som separat regional/rättslig artikel; den ersätter inte huvudspår 7:s historiska granskning.
- Inga artiklar publicerades i denna uppdatering. Nästa redaktionella steg är chefredaktörens granskning av PR #55.


## Publiceringslogg – 13 november 2026

- Chefredaktören gav uttryckligt klartecken för Palantir-huvudartikeln 13 november 2026.
- PR #55 avmarkerades som draft och mergades till `main` i commit `ab0a7f3e7e4dfa3739dc6889dc2f7775e01097b4`.
- Den godkända artikeln kopplades in i `src/app.js` med rubrik, ingress, full huvudtext, primärkällor, oberoende rapportering och källuppdateringen från 12 november. Förstasidans huvudruta pekar nu på artikeln.
- Render statiska webbplatsen `folktribunalen` (service `srv-dblpumgm7kps73bv55e0`) har deployment `dep-dbr6iilg1s2s73fiq0v0` med status `live`, byggd från commit `f873ebfa9fbe637ad74dd7db662496c714090004` den 13 november kl. 01.35.25 UTC.
- Publicerad route: https://folktribunalen.onrender.com/#/artikel/palantir-offentlig-makt. Kontroll den 13 november: HTTP 200; korrekt rubrik och ingress; NHS-kontraktsuppgiften; huvudtexten; listan över primärkällor; oberoende källor; uppdateringen 12 november.
- PR #55:s GitHub-status är merged/closed. Den publicerade versionen ligger i `src/app.js`; redaktionell mastertext finns kvar i `editorial/drafts/2026-11-12-palantir-offentlig-datamakt.md` som käll- och versionsunderlag.
- Nästa huvudartikel enligt beslutad ordning är **nr 2 – Europas AI-datacenter**. Inget annat huvudspår ska gå före.


## Redaktionslogg – huvudspår 2, 13 november 2026

- Efter att huvudspår 1 (PR #55) publicerats LIVE har relevanta AI-infrastrukturdelutkast granskats och sammanställts till ett eget huvudutkast.
- **PR #64:** https://github.com/selotisk-source/Folktribunalen/pull/64
- **Kanonisk sammanhållen text:** `editorial/drafts/2026-11-13-europe-ai-infrastructure.md`
- Innehåll: ACER/IEA:s systembakgrund; Amsterdam/Plimsollweg; Norges anslutningskö och licensplan; Finlands LVV-åtgärd vid Muhos och Kajaani; DataVita/Lanarkshire och National Wealth Funds garanti; BRAIN++/Discoverer++ i Sofia; EdgeConneX/Skellefteå; samt Bull/Schwarz Digits.
- Faktakontrollen skiljer mellan prognos, installerad kapacitet, anslutning, reserverad kapacitet, kö, anslutningsförfrågan och faktisk elförbrukning. Den norska tabellen summeras inte. 1 GW i Skellefteå behandlas som potentiell framtida campuskapacitet. Discoverer++-upphandlingens värde behandlas inte som ett extra projekt utöver BRAIN++-budgeten. DataVitas garanti beskrivs inte som kontantbidrag.
- **Status:** PR #64 är öppen och markerad Draft. PR #64 är fortsatt öppen Draft; aktuell mergeability ska kontrolleras igen före eventuell merge. Ingen merge har gjorts. Huvudspår 2 har inte publicerats eller lagts in på den publika webbplatsen.
- Huvudtexten har kompletterats med Statnetts NO3-underlag, protestvågen/EU:s föreslagna transparensram och Nscale:s SEC S-1/A: Kvandal i Norge, Loughton i Storbritannien och Monarch i USA. Monarch räknas inte som europeisk kapacitet. Bildförslag, källor, faktastatus och öppna frågor ingår.
- PR #13, #17, #24, #25, #31, #40 och #43 ligger kvar som källunderlag/delutkast. PR #40:s globala Anthropic-computegranskning hålls separat från den europeiska huvudartikeln där den inte behövs.
- **Nästa tillåtna steg:** chefredaktörens granskning och separat godkännande av PR #64. Först därefter kan publicering och LIVE-kontroll genomföras. Huvudspår 3 får inte påbörjas före det.


## Aktuell redaktionskontroll – 13 november 2026, 08:03 EET

### Huvudspår 2 – PR #64
- Kanonisk artikel: `editorial/drafts/2026-11-13-europe-ai-infrastructure.md`.
- PR #64 är öppen, Draft, ej mergad och ej publicerad. GitHub rapporterar `mergeable: true`; PR-grenen är en separat granskningsgren och har inte uppdaterats med den senaste fristående masterplan-commiten.
- Reviderat paket innehåller full artikel, bildförslag, primärkällor, oberoende rapportering, faktastatus och öppna frågor.
- Nya sakdelar har integrerats i huvudtexten: protestvågen och EU:s föreslagna rating/minimistandardprocess; Statnetts NO3-underlag; Nscale:s SEC S-1/A om Loughton, Kvandal och Monarch. Nscale:s Microsoft-belopp anges som ursprungligt aggregerat värde före avslutat SOW; prospektet ger inte ett nytt nettovärde. Monarch i West Virginia är uttryckligen ett amerikanskt jämförelsefall.
- Faktakontrollerade primärpunkter: ACER 2026 Monitoring Report; Statnetts beslut 9 november och NO3-redogörelse; EuroHPC:s Discoverer++-upphandling; Nscale:s S-1/A inlämnad 12 november. Norska MW-kategorier, IT-last, anslutning, reservation och faktisk förbrukning hålls åtskilda.
- PR #64 väntar på chefredaktörens separata granskning och godkännande. Huvudspår 3 ska inte startas före godkännande, publicering och LIVE-kontroll av huvudspår 2.

### Nio huvudspår – levande status
1. **Palantir och den offentliga makten:** PR #55 mergad och LIVE. Publik artikelväg kontrollerad 13 november; PR #33 supersederad. PR #7 (Q3) och #42 (GP-data/lobbying) är separata draftärenden.
2. **Europas AI-datacenter:** PR #64 komplett reviderat granskningsutkast; väntar på chefredaktören.
3. **Synkronicitetsprotokollet:** PR #38 komplett första draft; metod, reproducerbarhet och alternativförklaringar ska kontrolleras före godkännande.
4. **Sofia – staden under staden:** PR #8 Samuil/Prespa är delcase; huvudartikel med musei-, utgrävnings- och byggnadskällor återstår.
5. **Strategiska råvaror:** PR #34 Urbergsskölden och PR #51 Hautalampi/Eurobattery är draft; fyndighet, tillstånd, finansiering och produktion måste hållas isär.
6. **NVIDIA som lånesäkerhet:** PR #47 gäller styrelse/exportkontroll; PR #14 och #23 gäller AI-finansiering. Nscale:s SEC S-1/A visar NVIDIA:s deltagande i osäkrade konvertibla finansieringsinstrument, men inte aktiepant. En dokumenterad aktiepantkedja saknas fortfarande. Nscale:s S-1/A redovisar NVIDIA som investerare/part i osäkrade konvertibla instrument; det är inte belägg för att NVIDIA-aktier pantsatts som säkerhet.
7. **Libanons kristna historia:** PR #22 UNIFIL och #39 presidentarkiv är delspår. PR #36 Fader Samir Daou är publicerad separat; Geagea/Gemayel/Syrien/kyrkans sammanhängande huvudartikel återstår.
8. **Kyrkorna som överlevde imperierna:** ingen komplett huvudartikel ännu; Wiesbaden, Warszawa och Prag kräver byggnadsspecifika primärkällor. Sofia/Varna är möjliga fortsättningar.
9. **Fennoskandien:** PR #4/#32 Storsjö kapell/mark, #37 Rottensjön och #43 Skellefteå/Northvolt är delcase; den breda syntesartikeln återstår.

### Separata projekt och serier
- **ODJURET UR DJUPET:** PR #28 om Peter Thiel; Storsjöodjuret, Frösöstenen och primärtextbaserad kontroll av föreläsningarna återstår. Symbolisk parallell ja; historisk påverkan får inte påstås utan belägg.
- **Storsjö kapell/Cladonia:** PR #4 och #32. Cirka 15 000 hektar och ägaruppgiften är inte fastställda i fastighetsregister. Fastighetsgränser ska jämföras med Fornsök, gravar, bronsålderslämningar, depåfynd och lokala rättigheter. Håll åtskilt från Storsjön vid Östersund/Frösön.
- **Skaga kapell:** åttadelad struktur definierad; komplett del 1 och arkivbelägg återstår.
- **Böckernas väg till Athos:** PR #26 om 30 000 osmanska dokument är ett delutkast; fyra tidigare utkast har inte återfunnits i fulltext.
- **Från skrift till storebror:** PR #21, #41, #45, #54 och #57 är delspår; sammanhängande huvudartikel återstår.

### Aktuella nyhetsspår
- **Hormuz:** PR #62/#63 mergade; statisk deployment `f873ebfa...` är LIVE. Koden i `src/app.js` innehåller JMIC 113 och UKMTO 201–204. Direkt route-test återstår; ingen databaspost har skrivits.
- **USA:s kongress:** PR #10 Draft. Senate Vote 257 (73–25) är ett procedurbeslut om cloture, inte slutlig passage; ny kongress tillträder 3 januari 2027.
- **Palantir Q3:** PR #7 Draft, separat från huvudartikel PR #55.
- **AI-infrastruktur:** huvudspår 2 PR #64 samlar europeiska fall; PR #14/17/20/24/25/31/40/43 är kompletterande delspår.
- **Gripen över Polen:** primärunderlaget är nu identifierat: [Försvarsmakten 30 september](https://www.forsvarsmakten.se/aktuellt/nyheter/svenska-stridsflyg-i-ny-nato-insats/), [Polens försvarsministerium 30 september](https://www.gov.pl/web/obrona-narodowa/szwedzkie-mysliwce-gripen-wzmocnia-ochrone-polskiego-nieba) och [Polska generalstabens X-post 3 november](https://x.com/SztabGenWP/status/2117630867426144278). Posten anger över fyra timmars patrol-/skyddsuppdrag med tanker AA-332 MMF19; direkt X-hämtning gav 403, men Defence24 återger uttalandet 4 november. Antalet Gripen är inte offentliggjort. PR #12 handlar om AI-agenter/industri/Kanada och hålls separat. Eget artikelutkast väntar tills PR #64 har fått chefredaktörsbeslut.

### Breaking Watch och publiceringssystem
- PR #16 (täckningsmatris) och PR #60 (intern researchlogg) är öppna Drafts. Senaste journalen 13 november 07:51 anger att samtliga 19 A–S-spår screenats; viktiga deltan omfattar NVIDIA/Singapore, UKMTO 201–204, Cladonia-mötet, Norrsundet-samråd och SOU 2026:58.
- PR #16:s äldre Rendernotering om 8 november är supersederad av den aktuella Renderkontrollen ovan.
- Redaktionell backend kör fortfarande 4 november-deploymenten. Postgres är `available`, men `ipAllowList=[]`; read-only `SELECT 1` nekas eftersom alla externa anslutningar blockeras. Admin/API och `DATABASE_URL` är inte testade end-to-end. Databasbaserad godkännandekö kan därför inte användas.
- **Hyllning i varje utgåva:** Johannes Gutenberg, Carl von Linné, Voltaire, Sankta Paraskevi och Sankt Charbel kvarstår. Vasilevskis identitet måste fastställas innan namn eller hyllning publiceras.


### Gripen över Polen – källstatus 13 november 2026
- **Svensk primärkälla:** Försvarsmakten 30 september 2026 anger att F 17 påbörjade en tvåmånaders NATO-insats 1 oktober; flygoperationerna skulle huvudsakligen utgå från Sverige, med mindre framskjuten bas i Polen, under CAOC Uedem. Uppgiften beskriver uppdragets ram, inte en enskild incident.
- **Polsk primärkälla:** Polens försvarsministerium 30 september bekräftar att svenska Gripen ska delta i NATO Air Policing från oktober.
- **Händelse 3 november:** Polska generalstabens officiella X-post anger att svenska JAS 39 Gripen i över fyra timmar utförde patrull- och skyddsuppgifter över Polen med tanker AA-332 MMF19. Den officiella X-sidan gav HTTP 403 vid direkt hämtning; Defence24:s artikel 4 november återger inläggets text och länk, medan Aviation24 publicerade en separat rapport samma dag. Antalet flygplan är inte angivet. Defence24:s hänvisning till Alpha Scramble är sekundär tolkning, inte uttryckligen bekräftad i den återgivna generalstabsformuleringen.
- **Avgränsning:** Detta är inte samma sak som Saabs AI-agentprov i Gripen E, inte ett nytt flygplansköp och inte automatiskt bevis för luftstrid eller nedskjutning. Ingen sådan händelse rapporteras i de granskade källorna.
- **Artikelstatus:** researchbasen är etablerad; separat artikelutkast startas efter chefredaktörens beslut om PR #64, i enlighet med en-artikel-i-taget-regeln.

Källor: https://www.forsvarsmakten.se/aktuellt/nyheter/svenska-stridsflyg-i-ny-nato-insats/ · https://www.gov.pl/web/obrona-narodowa/szwedzkie-mysliwce-gripen-wzmocnia-ochrone-polskiego-nieba · https://x.com/SztabGenWP/status/2117630867426144278 · https://defence24.pl/sily-zbrojne/tej-nocy-szwedzi-chronili-polskie-niebo-wspieral-je-tankowiec-nato · https://www.aviation24.be/manufacturers/saab/swedish-gripens-patrol-polish-skies-with-multinational-nato-tanker-support/


## Kontrollrunda – 14 november 2026, 08:13 EET

### Aktuell arbetskö och artikelkvalitet
- **Huvudspår 1 – Palantir:** PR #55 är stängd som mergad. PR-beskrivningen anger chefredaktörsgodkännande 13 november, merge till `main` i `ab0a7f3e7e4dfa3739dc6889dc2f7775e01097b4`, statisk Render-deployment `f873ebfa9fbe637ad74dd7db662496c714090004` med status `live`, och en publik HTTP 200-kontroll 13 november. En ny direkt hämtning av sajten lyckades inte i denna kontroll; senast dokumenterade sidkontroll är därför fortfarande 13 november.
- **Huvudspår 2 – Europas AI-infrastruktur:** PR #64 är fortsatt öppen och Draft, utan review submissions. Kanonisk fil `editorial/drafts/2026-11-13-europe-ai-infrastructure.md` är 501 rader/55 689 tecken. Den innehåller ingress, nio sammanhängande huvudavsnitt, slutsats, bildförslag, faktaruta, primärkällor, oberoende rapportering, faktastatus och öppna frågor. Branchjämförelse före denna masterplanuppdatering: 4 commits före `main`, 0 bakom, status ahead. Denna masterplanuppdatering flyttar `main`; PR-grenen ska jämföras och synkas före eventuell merge. Ingen godkännande- eller publiceringsåtgärd är gjord.
- **En-artikel-i-taget:** PR #64 är fortfarande den aktiva granskningsposten. Nästa huvudartikel, Synkronicitetsprotokollet, startas inte före chefredaktörsbeslut, eventuell publicering och faktisk LIVE-kontroll av PR #64.
- **Render:** publik statisk tjänst `srv-dblpumgm7kps73bv55e0` har senaste `live`-deployment `dep-dbr6iilg1s2s73fiq0v0`, commit `f873ebfa9fbe637ad74dd7db662496c714090004`, avslutad 13 november 01:35:25 UTC. Redaktionell backend `srv-dblq2r0n74is73cchqh0` kör fortfarande 4 november-commit `6a835783553565f239864a9da7160d9f79f692b2`.
- **Postgres:** `folktribunalen-db` (`dpg-dblq2fqfngtc73c0h9gg-a`) är `available`, free, Frankfurt, utgång 4 december 2026, men `ipAllowList=[]`. Nytt read-only `SELECT 1` avvisades med Render-felet: “This database blocks all external connections because its IP allowlist is empty”. Render anger lokal Render MCP eller en uttryckligen betrodd klient-IP som väg framåt. Ingen databaspost har skrivits och admin/API är inte testat end-to-end.

### Breaking Watch – nya sakuppgifter och rättelser
- **Palantir/NHS, 12 november:** The Guardian rapporterar att NHS England tog ned sin webbsida med påståendet att 137 hospital trusts var live och realising benefits med FDP efter att 29 truster uppgett att de inte använde alla eller de flesta verktygen. Guardian anger att OSR granskar NHS-påståendena och att NHS tidigare varnats om att det saknades evidens för påståendet om mer än 100 000 extra operationer. Detta är en materiell efterföljande uppgift till den publicerade PR #55-texten; den live-publicerade artikeln ska få ett separat daterat uppdateringstillägg efter att PR #64 har fått redaktionellt beslut. Källor: Guardian 12 nov 2026, https://www.theguardian.com/technology/2026/nov/12/nhs-england-deletes-misleading-claim-137-trusts-benefiting-from-palantir-ai-tools ; tidigare undersökning 9 nov, https://www.theguardian.com/technology/2026/nov/09/revealed-palantir-lobbied-minister-to-stretch-ai-tools-reach-to-nhs-gp-records .
- **Hormuz, 13–14 november:** Reuters publicerade 13 november 21:01 UTC att IRGC Navy sade att två oljetankfartyg exploderat och brunnit efter att ha träffat minor. Reuters uppger att inga fartygsnamn eller ytterligare detaljer lämnades. Uppgiften är en iransk myndighets-/partsuppgift återgiven av Reuters; den är inte oberoende bekräftad i den kontrollerade källmängden. IMO:s senaste öppnade uttalande 11 november anger mer än 130 verifierade attacker sedan 28 februari och minst 25 döda sjömän; räkna inte in de två påstådda händelserna i IMO:s totalsiffra utan ny IMO-post. Källor: https://www.reuters.com/world/middle-east/irans-irgc-says-two-tankers-hit-sea-mines-hormuz-2026-11-13/ ; https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-secretary-general-calls-for-enforcement-of-maritime-rules.aspx .
- **NVIDIA/Megaspeed/Singapore, 12–13 november:** Singapores Ministry of Home Affairs klargjorde 12 november att Alice Huang/Huang Le inte utreddes för spioneri. MHA säger att polisen i februari 2026 bedömde att bevisen inte räckte för att fastställa att hon begått de misstänkta deklarationsbrotten, men att hon bedömdes ha lämnat information som hon visste var felaktig för att tona ned sin roll; hon fick en stern warning och förbjöds att återvända. Utredningen av Megaspeed och sex andra personer fortsätter. Reuters 12 november rapporterar att Singapore upplevt begränsad amerikansk hjälp; Reuters 13 november återger finansminister Scott Bessents kritik mot Commerce Department om exportkontrollbeslutet. Skilj myndighetsfakta, politiska påståenden och ej fastställda spionanklagelser; skriv inte att Huang var spion. Källor: https://www.mha.gov.sg/media-room/newsroom/singapore-investigations-into-alice-huang-huang-le-and-megaspeed-international-pte-ltd/ ; https://www.reuters.com/world/asia-pacific/singapore-barred-alice-huang-re-entry-following-investigation-2026-11-12/ ; https://www.reuters.com/business/retail-consumer/bessent-says-treasury-favored-limits-megaspeed-2026-11-13/ .
- **USA:s senat/BAAJA, 9–12 november:** Officiell Senate LIS visar Vote 257: 73–25 för cloture på motionen att gå vidare till H.R. 2347 den 9 november; Vote 258: 62–21 för motionen att gå vidare den 10 november. Senate Floor Activity 10 november listar Capitos substitute amendment SA 6883 och efterföljande amendments; Press Gallery-loggen 11 november anger att cloture lämnades in på SA 6883 och grundförslaget. Loggen för 12 november anger en annan omröstning om domarnominering, inte slutlig passage av BAAJA. H.R. 2347:s ursprungliga titel/text är ett skatteförslag om vissa skadestånd; BAAJA är den senatsbehandlade ersättningstexten/lagstiftningsfordonet. Källor: https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00257.htm ; https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00258.htm ; https://www.senate.gov/legislative/LIS/floor_activity/11_10_2026_Senate_Floor.htm ; https://www.periodicalpress.senate.gov/on-the-floor/floor-logs-archive/ .
- **Europas AI-infrastruktur:** PR #64:s faktaläge är 13 november och dess primärkällor kontrollerades igen 14 november. EuroHPC:s AI-gigafabrikupphandling är fortsatt öppen med Lot 2-frist 3 december 2026 och Lot 1-frist 4 februari 2027; inga vinnare eller slutliga platser är beslutade. Skellefteå kommuns FAQ beskriver Bergsbyn/EdgeConneX som tidigt utvecklingsskede och 1 GW som möjlig framtida campuskapacitet, inte befintlig drift eller offentlig nätanslutningsgaranti. Källor: https://eurohpc-ju.europa.eu/call-tenders-selection-artificial-intelligence-gigafactory-consortia-and-establishment-ai_en ; https://skelleftea.se/extraordinara-handelser/bergsbyns-industriomrade/utvecklingen-pa-bergsbyns-industriomrade-i-skelleftea/fragor-och-svar .
- **Gripen över Polen:** ingen ny officiell händelseuppgift identifierades i 14-novemberkontrollen. Behåll 3 november som den senaste dokumenterade enskilda patrulluppgiften från polska generalstaben; antal Gripen är inte offentliggjort. Svenska/Polska försvarsdepartementens 30-septemberbesked beskriver uppdragets ram, inte enskild incident.
- **Vasilevski:** identiteten är fortfarande inte fastställd. Ingen hyllningstext får tillskriva namnet en person innan full identitet och relevant historiskt bidrag har dokumenterats.

### Arbetsbeslut för nästa cykel
1. Behåll PR #64 som enda aktiva huvudartikel i granskningskön; ingen ny huvudartikel startas före chefredaktörens beslut och LIVE-kontroll.
2. Efter beslut om PR #64: genomför eventuell merge/publicering via redaktionella systemet när åtkomst fungerar; kontrollera faktisk publik sida innan huvudspår 3.
3. Lägg Palantir/NHS-uppgiften från 12 november som daterat uppdateringsförslag till redan publicerad artikel när den aktiva PR #64-cykeln är avslutad.
4. Fortsätt bevaka Hormuz; de två IRGC-uppgifterna hålls som obekräftad partsuppgift tills IMO/UKMTO eller annan oberoende dokumentation identifierar fartygen/händelserna.
5. Fortsätt NVIDIA/Megaspeed-spåret med MHA:s rättelse som primär källa; inga spionanklagelser mot Alice Huang utan bevis.


---

## Redaktionell utvidgning – Religion, Folket och Tradition (17 november 2026)

Tre självständiga redaktionella områden har lagts till i portföljen. Fullständigt program, serier, bildstandard och källregler finns i `editorial/portfolio/religion-folket-tradition.md`.

### RELIGION
Bevakning av religiösa traditioner, institutioner, trosgemenskaper, liturgi, kloster, kyrkohistoria, heliga platser, religiösa minoriteter, skrifttraditioner och idéhistoria. Omfattar bland annat ortodoxa, koptiska, etiopisk-ortodoxa Tewahedo, syriska, armeniska och maronitiska traditioner samt andra religioner med samma krav på saklighet och intern mångfald.

Serier: **Tron och imperiet; De levande traditionerna; Skrifternas historia; Heliga geografier; Mystikens idévärldar; De försvinnande kyrkorna.**

### FOLKET
Människor, arbete, familjer, generationer, lokalsamhällen, migration, yrkesliv, stad och landsbygd, språk, identitet, vittnesmål och framtidsvillkor. Reportage ska ge människor egna röster och skydda utsatta källor.

Serier: **Människorna bakom arbetet; Röster från platsen; Generationerna; Stadens och bygdens folk; Ett yrkesliv; Framtidens människor.**

### TRADITION
Levande och materiellt kulturarv: folktro, högtider, årscykler, folkdräkter, musik, dans, hantverk, mat, byggnadskultur, dialekter, muntligt berättande och regionala symboler. Nordiska, slaviska, balkanska och övriga europeiska traditioner behandlas med regional precision.

Serier: **Traditionernas atlas; De gamla mästarna; Årets kretslopp; Folkets minne; Symbolernas språk; Det heliga året.**

### Gemensam redaktionell standard
- Skilj dokumenterad historia, muntlig tradition, religiös lära, partsuppgift, analys och spekulation.
- Redovisa regionala skillnader, källornas begränsningar och alternativa tolkningar.
- För intervjuer och personporträtt: samtycke, korrekt attribution och skydd av utsatta källor.
- Bilder ska ha relevant bildtext, källa/upphovsperson och dokumenterad rättighetsstatus. Arkivbild, rekonstruktion och AI-genererad illustration ska märkas tydligt; AI-bilder får inte framställas som dokumentära fotografier eller historiska original.
- Dessa tre områden får bidra med perspektiv och källnoteringar till övriga ämnen, men ändrar inte den beslutade huvudartikelordningen.

### Startstatus och köregel
Detta är en portföljutvidgning, inte en ny huvudartikel eller ett publiceringsbeslut. Researchidéer får samlas parallellt som källnoteringar. En ny huvudartikel går in i formell produktion först när den aktiva huvudartikelcykeln för Europas AI-infrastruktur har avslutats enligt ordinarie gransknings-, godkännande- och LIVE-kontroll.


## Researchleverans – Religion, Folket och Tradition (17 november 2026)

Tre parallella researchbankar har nu påbörjats utan att öppna en andra aktiv huvudartikel. Underlaget finns i `editorial/research/2026-11-17-religion-folket-tradition-image-research.md`.

- **Religion:** Boyanakyrkan i Sofia – UNESCO:s byggnadsfaser och freskerna från 1259. En bildkandidat från Wikimedia Commons har identifierad upphovsperson Interact-Bulgaria och licens CC BY-SA 4.0.
- **Folket:** British Library Endangered Archives Programme, projekt EAP500, om fotografiska samlingar från Bulgariens minoritetsgemenskaper. Enskilda arkivbilders återanvändningsrätt är ännu inte fastställd; ingen publicering före rättighetskontroll.
- **Tradition:** Kukeri/Surva – UNESCO:s bulgariska immateriella kulturarv och lokal ritual/hantverkstradition. En bild av Vivian Krayslavova från 28 januari 2022 är identifierad med CC BY-SA 4.0.
- **Tvärgående folkperspektiv:** OECD:s Bulgaria Labour Market and Social Policies 2025 ger nationell arbetsmarknadskontext; lokala reportage kräver egna intervjuer och regional data.

**Status:** Källor, möjliga reportagevinklar, bildkandidater, bildtexter och rättighetsstatusar dokumenterade. Detta är research, inte färdiga artiklar eller publiceringsgodkännanden. Huvudspår 2 – Europas AI-infrastruktur – förblir den enda aktiva huvudartikeln tills dess route- och publiceringskontroll är avslutad.


## Kontrollnotering – 18 november 2026, 02:44 EET

- PR #71 är uppdaterad till faktaläge 18 november 2026. GitHub visar PR:n som öppen och redo för granskning, inte Draft, inte mergad. Inga review submissions eller review threads fanns vid kontrollen.
- Granskningsgrenen `editorial/europe-ai-infrastructure-review-2026-11-17` är baserad på main och innehåller endast `editorial/drafts/2026-11-13-europe-ai-infrastructure.md`. Senaste artikelcommit före denna masterplan-uppdatering: `5865523bde6b021861e4eff48921a02f275ce615`. Jämförelsen mot main visar en commit före och noll bakom; en ändrad fil.
- Nya evidenspunkter: E24:s dokumentbaserade redogörelse 17 november om åtta norska projekt och 623,8 MW; NVE:s föreläggande 29 september plus NTB:s 9 novemberrapport om Nscales överklagande och mottagen Sweco-analys; Telias primärmeddelande 16 november om AI Gigafactory Northern.
- Render-arbetsytelistan visar My Workspace. Ingen arbetsyta valdes eftersom användarbekräftelse krävs innan Render-resurser kan läsas eller ändras. Därför är tjänste-, deployment-, backend- och databasstatusen ovan endast senast dokumenterade status, inte nykontrollerad.
- Direktöppning av den publika AI-artikelrouten misslyckades i webbläsarkontrollen; containerförsöket kunde inte slå upp värdnamnet. Ingen HTTP-status eller sidtext har erhållits och ingen LIVE-kontroll har genomförts.
- Frontendens kort-/slug-mismatch kvarstår i `src/app.js`: `europas-ai-infrastruktur` visar fortfarande Meta/Ofcom-rubrik och ingress medan artikelkroppen under sluggen är AI-infrastrukturtexten. Ingen frontendkod har ändrats.
- Denna uppdatering gäller masterplan och redaktionell status. Ingen artikel har mergats, publicerats eller manuellt driftsatts. En dokumentationscommit på main kan utlösa den tidigare identifierade statiska auto-deployen; Render-resultatet är inte kontrollerat.
- Nästa steg är att få Render-arbetsytan bekräftad, fortsätta faktakontrollen av PR #71 och invänta separat chefredaktörsgodkännande av just den aktuella versionen. Ingen nästa huvudartikel före faktisk LIVE-kontroll.



## Nyhetskontroll – 19 november 2026

### Hormuz och sjöfarten – två separata fartygshändelser

- **UKMTO Warning 211-26, incidentdatum 17 november:** UKMTO anger en tanker 13 nautiska mil norr om Khasab som träffad av en okänd projektil. Brand ombord hade släckts; sökandet efter en saknad besättningsmedlem pågick. Fartygsskador och miljöpåverkan var ännu inte bedömda. UKMTO namnger inte fartyget. Primärkälla: https://www.ukmto.org/-/media/ukmto/products/20261118-ukmto_warning_211.pdf
- **ADNOC L&S, 17 november:** bolaget uppgav 18 november att ett av dess fartyg angripits, med en saknad och elva skadade besättningsmedlemmar; övriga hade evakuerats. Reuters återger bolagets besked och UKMTO:s separata varning. Seatrade och Riviera, med hänvisning till Vanguard, identifierar fartyget som Navig8 Messi; den identifieringen ska tillskrivas dessa källor, inte UKMTO eller ADNOC, som inte namngav fartyget i de kontrollerade beskeden. Källor: https://www.reuters.com/world/middle-east/uaes-adnoc-ls-says-one-crew-member-missing-after-attack-on-its-vessel-hormuz-2026-11-18/ · https://www.seatrade-maritime.com/security/one-missing-11-injured-in-attack-on-adnoc-tanker-in-hormuz · https://www.rivieramm.com/news-content-hub/11-injured-one-missing-from-adnoc-tanker-following-strike-in-strait-of-hormuz-90615
- **Tara Gas är en separat händelse:** LPG-tankern träffades den 16 november och övergavs efter upprepade angrepp. Reuters rapporterade 18 november att Oman hade räddat 24 personer och sökte efter en saknad; brandbekämpning pågick. Indien uppgav att två besättningsmedlemmar vårdades på sjukhus. Blanda inte samman Tara Gas med ADNOC-fartyget/Navig8 Messi eller räkna en händelse två gånger. Källa: https://www.reuters.com/world/middle-east/uaes-adnoc-l-s-says-one-crew-member-missing-after-attack-on-its-vessel-hormuz-2026-11-18/
- **Senaste kontroll:** sökning efter en ny UKMTO-varning daterad 19 november gav ingen ny officiell träff. Detta betyder inte att ingen incident inträffat; bevakningen fortsätter. Iranska partsuppgifter om minor eller andra fartygsbränder ska hållas åtskilda från UKMTO:s rapporterade incidenter tills oberoende identifiering finns.

### USA:s kongress – mandatförskjutning, inte omedelbart maktskifte

- Reuters rapporterade 18 november att Mary Peltola vunnit Alaskas senatsval, vilket gav Demokraterna nio vunna republikanska senatsplatser och en kommande majoritet på 56–44. Reuters anger att detta kombinerat med segern i representanthuset bäddar för två år av möjlig låsning mot president Donald Trump. Källa: https://www.reuters.com/world/us/democrat-peltola-wins-alaska-securing-56-44-us-senate-majority-2026-11-18/
- AP anger att Demokraterna återtagit representanthuset och hade plockat 42 mandat vid artikelns publicering. AP anger också att senatens 56–44-fördelning gäller när den nya kongressen börjar i januari. Källa: https://apnews.com/article/senate-democrat-flip-alaska-aa623c1c32cb493c21633a1a6a140578
- Redaktionell precision: skilj valresultat och kommande majoritet från den sittande 119:e kongressens mandatfördelning före den nya kongressens tillträde. Använd inte 56–44 som om det redan vore den sittande senatens aktuella mandatfördelning.

### Palantir Q3 2026 – SEC-rapporten ger en mer nyanserad bild

- Palantirs Form 10-Q för kvartalet till 30 september 2026 finns i bolagets investerarportal. Q3-intäkter: 2,313 miljarder USD, +96 procent år/år. Niomånadersintäkter: 5,881 miljarder USD, +92 procent.
- Geografi: USA 1,937 miljarder USD (84 procent) av Q3-intäkterna; övriga världen 376,2 miljoner USD (16 procent). Segment: Q3 government revenue 1,1455 miljarder USD och commercial revenue 1,1679 miljarder USD. U.S. government revenue var 953 miljoner USD och U.S. commercial revenue 984 miljoner USD. Var tydlig med skillnaden mellan totala segment och USA-delarna.
- Q3 GAAP-nettoresultat hänförligt till stamaktieägare var 1,128 miljarder USD; bruttomarginalen var 83 procent. Kvarvarande prestationsåtaganden (RPO) var 4,9 miljarder USD, varav bolaget väntade sig redovisa cirka 44 procent inom 12 månader och 37 procent under de följande 13–36 månaderna.
- Under de första nio månaderna kom 51 procent av intäkterna från myndighetskunder och 49 procent från kommersiella kunder. Bolaget uppger att många kontrakt kan sägas upp av kunden med mindre än tolv månaders varsel; RPO ska därför inte beskrivas som en ovillkorlig garanti för framtida intäkter.
- Bolaget redovisar i genomsnitt 146 miljoner USD i intäkter från sina 20 största kunder under rullande tolv månader, upp 76 procent år/år. Detta är ett genomsnitt, inte en redovisad andel av total omsättning.
- Primärkälla: Palantir Form 10-Q, kvartalet avslutat 30 september 2026: https://investors.palantir.com/files/2026%20Q3%20PLTR%2010-Q.pdf. Kvartalsresultat och bolagets presentation finns även på https://investors.palantir.com/financials/quarterly-results. Använd SEC-rapporten för rapporterade siffror och märk bolagets egna definitioner.

### Europas AI-infrastruktur – status efter 18 november

- DataCenter Norway uppdaterade sitt register 18 november och sammanfattar Statnetts beslut från 9 november: tillfälligt stopp för nya kapacitetsreservationer till datacenter till senast 1 augusti 2027 samt paus i vissa tekniska godkännanden. Detta är en daterad återgivning av beslutet, inte ett nytt beslut den 18 november. Källa: https://www.datacenternorway.no/news/energy-power/statnett-pauses-new-grid-reservations-for-data-centres-until-august-2027/
- E24:s granskning anger åtta projekt med sammanlagt 623,8 MW som får fortsätta genom tekniska steg; Nscale Narvik uppges få gå vidare med 115 MW av önskade 230 MW. Detta är inte driftsatt kapacitet. Källa: https://e24.no/naeringsliv/i/0vE68o/nscale-prosjekt-slipper-stroemfrys
- Financial Times rapporterade 16 november att Uniper närmar sig ett första platsavtal och har samtal om två ytterligare platser; bolaget anger cirka 700 MW säkrad nätkapacitet i tio identifierade projektområden. Inget undertecknat avtal har hämtats i denna kontroll. Källa: https://www.ft.com/content/74756c50-cedb-4ff9-9cad-43abd5b0646d
- Ingen ny EuroHPC-tilldelning eller fastställd svensk plats för AI Gigafactory Northern har identifierats i denna kontroll. PR #71:s faktaläge 19 november kvarstår; dessa nyhetspunkter ändrar inte artikelns status eller den aktiva artikelordningen.

### Svenska Gripen över Polen

- Polens försvarsministerium bekräftade 30 september att svenska Gripen skulle delta i NATO Air Policing över Polen från oktober: https://www.gov.pl/web/obrona-narodowa/szwedzkie-mysliwce-gripen-wzmocnia-ochrone-polskiego-nieba
- Den senaste identifierade enskilda patrulluppgiften är fortfarande polska generalstabens uppgift 3 november om mer än fyra timmars patrull-/skyddsuppdrag med tankflyg AA-332 MMF19. Antalet Gripen offentliggjordes inte. Återgivning: https://defence24.pl/sily-zbrojne/tej-nocy-szwedzi-chronili-polskie-niebo-wspieral-je-tankowiec-nato
- Regeringens besked 6 oktober om att Sverige från december avser att bidra med ett Patriot-luftvärnsförband till skyddet av Natos logistiknav i Polen är ett separat bidrag och får inte beskrivas som en Gripen-händelse: https://www.government.se/press-releases/2026/10/swedish-air-defence-unit-to-nato-operations-in-poland/
- Ingen ny specifik Gripen-patrullhändelse har identifierats i denna kontroll.

### Redaktionell följd

- Nyhetsbevakningen är kompletterande och startar ingen ny huvudartikel.
- Huvudspår 2 – Europas AI-infrastruktur – är fortsatt enda aktiva huvudartikel i godkännandekön. PR #71:s aktuella version är ef997a8361fecdaf14af63972f2813f1a0a6a2ea och ska ligga i Draft.
- Huvudspår 3 – Synkronicitetsprotokollet – förblir parkerat tills huvudspår 2 har fått artikelbundet godkännande, gått genom redaktionens adminväg och klarat faktisk LIVE-kontroll.
- Samtliga nyhetsuppgifter ovan är research-/masterplanstillägg, inte godkända publiceringsartiklar.




## Daily Desk – researchleverans 19 november 2026

### Frölunda – källkedjan bakom två skilda ortnamn

- **PR #74 – Frölunda: källkedja och evidensnoter:** Open/Draft, 10 filer, 425 tillägg, 10 commits före main och 0 bakom vid jämförelsen. Researchpaketet ligger på grenen research/2026-11-19-frolunda-source-chain-run4. Main är oförändrad; ingen merge eller publicering.
- **Västra Frölunda:** Isof anger Frølanda 1436, med förleden sannolikt dialektordet frö (fruktbar/frodig) och efterleden land; anslutning till -lunda anges redan på 1500-talet. 1550 års fem hemman återges via Göteborgs Stadsmuseums rapport 13 (1999), som hänvisar till Lars Nyström 1967, s. 56. Jordeboken är ännu inte hämtad.
- **Östra Frölunda:** separat belägg Frølvnda songh 1402 i Kinds härad, med efterleden lund. Detta är inte ett äldre belägg för Västra Frölunda.
- **1313:** rapporten återger två olika hänvisningar – ”de Frö lundom” som möjligen avser trakten och en separat diplomhandling som möjligen avser en kyrka. De får inte slås ihop eller användas som säker ortnamnsdatering.
- **Öppna källsteg:** SDHK-nummer och originalbild för 1436; fullständig referens bakom DiplSv.I.125 för 1402; Nyström 1967 s. 32/56/72; 1550 års jordebok; två separata 1313-handlingar; administrativa beslut bakom särskiljningen 1886.
- **Källor:** Isof:s ortnamnslexikon (https://www.isof.se/namn/ortnamn/sol/ortnamnslexikon/vad-vaxjo; https://www.isof.se/namn/ortnamn/sol/ortnamnslexikon/ockero-oxnevalla; https://www.isof.se/namn/ortnamn/sol/ortnamnslexikon/fagered-forslov), Göteborgs Stadsmuseum/Göteborgs Kyrkogårdsförvaltning rapport 13 (https://carlotta.goteborgsstadsmuseum.se/carlotta/web/image/blob/1154083/Kyrkog%C3%A5rdsrapport%2B13.pdf), Svenskt Diplomatariums huvudkartotek (https://sok.riksarkivet.se/sdhk) och Gammeldansk Seddelsamling (https://gammeldanskseddelsamling.dk/).

### Hormuz – ny UKMTO 212-26, separat från 211-26

- PR #74 innehåller en separat evidensnotering för **UKMTO 212-26**. Den återgivna varningstexten anger en utgående tanker träffad av okänd projektil i maskinrummet cirka 6 nautiska mil norr om Khasab den 18 november, 16:45 UTC; besättningen uppgavs säker, skador och miljöpåverkan okända. UKMTO:s officiella X-konto publicerade varningen 22:30 UTC. PDF-versionen kunde inte hämtas i denna kontroll; uppgifterna ska därför attribueras till UKMTO:s post och markeras som återgivna, inte som självständigt PDF-kontrollerade. Källa: https://x.com/UK_MTO/status/2123182021308559506
- UKMTO 212-26 ska hållas separat från 211-26 (incidentdatum 17 november, en saknad besättningsmedlem, brand släckt) och 208-26. Fartygsnamn, IMO-nummer, projektiltyp och ansvarig aktör är inte fastställda.
- **ADNOC L&S:** Reuters 18 november återger bolagets uppgift om ett onamngivet fartyg, en saknad och elva skadade. Seatrade/Riviera tillskriver Vanguard identifieringen Navig8 Messi; skriv inte detta som UKMTO:s eller ADNOC:s egen identifiering.
- **Tara Gas:** Reuters uppger separat att Oman räddat 24 personer och sökte efter en saknad; två uppges ha behövt sjukhusvård enligt indisk myndighetsuppgift. Möjlig koppling mellan Tara Gas och UKMTO 211 är inte fastställd eftersom UKMTO inte namnger fartyget och positionsuppgifterna inte är identiska.
- **Iranska minepåståenden:** uppgift om tre tankfartyg som träffats av minor är en partsuppgift utan identifierade fartyg, verifierade positioner eller oberoende bekräftelse. Koppla inte påståendet till UKMTO 211/212.
- Källnoteringar i PR #74: editorial/evidence-notes/2026-11-19-hormuz-ukmto212.md; editorial/evidence-notes/2026-11-19-hormuz-ukmto211-tanker-crosscheck.md; editorial/evidence-notes/2026-11-19-hormuz-adnoc-unnamed-vessel.md; editorial/evidence-notes/2026-11-19-hormuz-iran-mine-claims.md.

### Varna/Svarta havet – GAS HUSKY

- PR #74:s uppdatering skiljer Bulgariens NAVWARN 854/26 den 17 november 10:50 UTC (GAS HUSKY med 45 graders slagsida, drivande och navigationsfara) från Reuters senare rapport den 18 november om att fartyget sjunkit.
- Transportministeriet uppgav att samtliga 19 besättningsmedlemmar räddats. Reuters återgav guvernörens uppgift om fyra träffar; vapentyp, operatör och ansvarig aktör är inte fastställda i de granskade myndighetsuppgifterna.
- Detta är ett daterat tillägg till samma GAS HUSKY-händelse, inte en ny olycka. Källor: https://www.vtmis.bg/wx/wx_eng.htm · https://www.mtc.government.bg/bg/category/1/spasen-e-celiyat-ekipazh-na-mk-gas-husky · https://www.reuters.com/world/lpg-tanker-that-sank-off-bulgaria-tuesday-was-hit-by-projectiles-official-says-2026-11-18/

**Portföljbeslut:** Frölunda-paketet är separat research och får inte ersätta huvudspår 2 i den formella artikelkön. Hormuz- och GAS HUSKY-uppgifterna är daterade tillägg. Huvudspår 3 förblir parkerat.


## Kontrollrunda – 21 november 2026, 02:45 EET

- **PR #71:** artikeltext och dossier uppdaterade i samma Draft-gren. Aktuell head 8fe41388e4ba46ecc3d1c88b8902fe4a120c0e3b. PR har 0 review submissions, 0 inline review threads och en äldre issue-kommentar från 17 november som inte utgör godkännande.
- **Spanien:** ministerrådet godkände datacenterdekretet 20 november. MITECO och La Moncloa redovisar 80 procent timvis korrelerad förnybar el med additionalitet för stora datacenter över 10 MW, vatten-/energieffektivitetskrav, rapportering, kompensationer och en avgränsad digital suveränitetsdel för offentliga system i högsta säkerhetskategori. BOE-publicering och ikraftträdande har inte fastställts i kontrollen 21 november. La Moncloa redovisar samtidigt en bindande elnätsplan till 2030 med investeringar över 17 miljarder euro och 47 GW ny efterfrågan; detta är en nationell plan, inte reserverad datacenterkapacitet.
- **Oberoende motbilder:** Reuters 20 november återger PP:s löfte att riva upp reglerna, Spain DC:s kritik och utvecklares uppgifter om att vissa projekt kan bli olönsamma; AWS och Microsoft uppger att deras planer är oförändrade. Inga faktiska projektflyttar är fastställda.
- **GitHub:** API-kontroll av samtliga öppna PR:er gav 63 resultat och 0 PR:er utanför Draft.
- **Render:** statisk tjänst är live på dep-dbt4qddg1s2s738p7bmg / commit a43f1579058824a36ccad6245d4616551505431e; backend är live på dep-dblq3nafngtc73c0l87g / commit 6a835783553565f239864a9da7160d9f79f692b2. Båda är autoDeploy=yes från main.
- **Postgres:** available men ipAllowList tom. Read-only SELECT 1 nekades med Render-meddelandet att externa anslutningar blockeras eftersom IP-allowlisten är tom. Ingen skrivning.
- **Route:** curl gav DNS-resolution failure; webbläsarhämtning gav URL ej tillgänglig. Ingen HTTP-status eller sidinnehåll har verifierats.
- **Frontend:** src/app.js på main behåller trevägsmismatch för europas-ai-infrastruktur: Meta/Ofcom-kort, Google Wyoming/Crusoe/AEP-body och PR #71:s europeiska AI-text. Ingen kodändring.
- **Status:** inga merges, cherry-picks, deployer, DB-ändringar, frontendändringar eller publiceringar i denna kontroll. PR #71 är enda aktiva huvudartikel; PR #38 förblir parkerad.



## Uppföljning – 21 november 2026, 02:52 EET

PR #71:s faktaruta kompletterades med Spanien: tröskeln över 10 MW, 80 procents timvis korrelerad förnybar el och uttrycklig not om att ministerrådets godkännande 20 november ännu inte har kunnat knytas till en publicerad BOE-text eller ikraftträdandedag. Aktuell PR-head är 87e78d8f569e8e5e5b9d1c2ea2d0dbe726be2b4e; 17 commits före main, 0 bakom, 2 filer. PR #71 förblir Open/Draft.


## Uppföljning – Spanien, 21 november 2026

El País 20 november har kontrollerats i fulltext. Artikelutkastet och dossieret har preciserats: energiministerns uppgift är 15 GW datacenterprojekt med beviljade nätåtkomsttillstånd (6 GW transmissionsnät, 9 GW distributionsnät) och 20 GW i kö. Spain DC:s uppgifter om 66,9 miljarder euro i potentiella investeringar till 2030 och 0,8 procent av elförbrukningen är märkta som branschens egna uppskattningar. Spain DC:s aviserade domstolsutmaning och begäran om interimistisk suspension återges som avsikt, inte som verifierat inlämnat mål. Uppgiften om över 600 samrådsinvändningar har tagits bort ur dossieret eftersom den inte stöds av den kontrollerade El País-artikeln.

PR #71:s nya head är 87e78d8f569e8e5e5b9d1c2ea2d0dbe726be2b4e; 19 commits före main, 0 bakom, 2 ändrade filer. PR #71 förblir Open/Draft.


Efter den kompletterande El País-kontrollen uppdaterades även dossierfilen. PR #71:s aktuella head är därmed 87e78d8f569e8e5e5b9d1c2ea2d0dbe726be2b4e, 19 commits före main och 0 bakom. PR #71 förblir Open/Draft; ingen artikelbunden approval finns för denna head.


## Nyhetskontroll – 24 november 2026

### Hormuz och sjöfarten
- The Jerusalem Post återger 24 november ett IRGC/IRNA-påstående om tre tankfartyg som ska ha träffats av minor och börjat brinna under passage genom Hormuz. Fartygen är inte namngivna; positioner, IMO-nummer och oberoende skadebekräftelse saknas. JPost uppger att CENTCOM inte hade svarat. Ingen matchande ny UKMTO-varning/advisory identifierades i kontrollen. Behandla detta som en partsuppgift, inte som tre verifierade fartygsattacker.
- Evidensnot: https://github.com/selotisk-source/Folktribunalen/blob/research/2026-11-22-news-watch/editorial/evidence-notes/2026-11-24-hormuz-irgc-three-tanker-claim.md
- Källa: https://www.jpost.com/middle-east/iran-news/article-915899

### USA:s kongress och BAAJA
- Senaten antog H.R. 2347, i den ändrade form som senatens floor log identifierar som BAAJA, 62–33 den 19 november. Den ursprungliga H.R. 2347-titeln i roll-call-listan ska hållas åtskild från ersättningstexten SA 6883. BAAJA är inte lag. Mike Levin och Sean Casten meddelade 23 november att de inte stöder nuvarande text utan ändringar; de lyfter bland annat miljöskydd, Tribal sovereignty och rättslig prövning. Ingen bekräftad House-omröstning har identifierats i kontrollen.
- Evidensnot: https://github.com/selotisk-source/Folktribunalen/blob/research/2026-11-22-news-watch/editorial/evidence-notes/2026-11-24-baaja-house-negotiation.md
- Källor: https://www.senate.gov/legislative/LIS/floor_activity/11_19_2026_Senate_Floor.htm · https://levin.house.gov/media/press-releases/rep-levin-calls-for-changes-to-senate-passed-energy-permitting-bill · https://casten.house.gov/media/press-releases/casten-statement-on-senate-permitting-reform

### Palantir – Alex Karp och Form 144
- Två separata Form 144-notiser daterade 20 november anger 90 000 respektive 585 000 föreslagna aktier. Tillsammans: 675 000 aktier och cirka 99,7 MUSD enligt notiserna. 90 000-notisen anger en Rule 10b5-1-plan antagen 12 mars 2026; 585 000-notisen har en annan kommentar om flerdagarsförsäljning/förhandsanmälan och anger inget planadoptionsdatum. Form 144 bevisar inte att aktierna sålts. Form 4-kontroll återstår.
- Evidensnot: https://github.com/selotisk-source/Folktribunalen/blob/research/2026-11-22-news-watch/editorial/evidence-notes/2026-11-24-palantir-karp-form144-double-notice.md
- Primärfiling 90 000: https://www.sec.gov/Archives/edgar/data/1321655/000195004726011389/0001950047-26-011389-index.htm. SEC-katalogen listar accession 0001950047-26-011411 för 585 000-notisen; värdena är även transkriberade av StockTitan.

### Gripen över Polen
- Polens BBN bekräftar tre nedfallsplatser den 20 november och identifierar en Kh-101 vid Nowy Lipowiec; två andra objekt är preliminärt en ytterligare robot och en jetdriven drönare. Uppgiften om ett villkorat eldtillstånd till svensk Gripen-pilot och utebliven avfyrning på grund av väder återges av Kyiv Independent med hänvisning till den polske operativa befälhavaren; separat svensk myndighetsbekräftelse har inte hittats. Inget påstående om att Gripen sköt ned ett mål.
- Evidensnot: https://github.com/selotisk-source/Folktribunalen/blob/research/2026-11-22-news-watch/editorial/evidence-notes/2026-11-24-gripen-poland-incident-followup.md
- Källor: https://www.bbn.gov.pl/pl/wydarzenia/10584%2CNaruszenie-polskiej-przestrzeni-powietrznej-Komentarz-Szefa-BBN.html · https://kyivindependent.com/swedish-gripen-pilot-unable-to-shoot-down-suspected-russian-missile-over-poland-due-to-poor-weather-commander-says/

### PR- och artikelstatus
- PR #79:s researchgren research/2026-11-22-news-watch är 17 commits före main, 0 bakom och innehåller 10 evidensnoter; fyra nya noter daterade 24 november har lagts till. PR #79 förblir research/Draft och är inte en publiceringsartikel.
- PR #71 är fortsatt enda aktiva huvudartikel. Chefredaktören har godkänt exakt d7a9d7e907f6e3bccfb2a6e212402ca297d06b7a; nuvarande PR-head 1a5b802932e3a50d755519045ed0ec970a8308fc ligger fyra commits senare och omfattas inte av godkännandet. Publicering är blockerad av tom Postgres-IP-allowlist, DNS-fel till båda Render-domänerna och avsaknad av DB-koppling i statisk frontend. PR #38 förblir parkerad.
- Ingen merge, deploy, databasändring, frontendändring eller LIVE-publicering har genomförts.

## Daglig kontroll – 25 november 2026, 03:15 EET

### Aktiv huvudartikel och versionsbundet beslut
- **PR #71 – Europas AI-infrastruktur:** Open/Draft, aktuell head `1a5b802932e3a50d755519045ed0ec970a8308fc`, bas `main` på `04e00e97b35bb984d783bab652011a3d7441a0cd`, 53 commits och två ändrade filer enligt GitHub PR-metadata.
- GitHub PR-kommentarerna innehåller ett dokumenterat chefredaktörsbeslut den 24 november för exakt äldre commit `d7a9d7e907f6e3bccfb2a6e212402ca297d06b7a`. Den nuvarande headen är senare och omfattas inte. PR #71 förblir Draft. Aktuell review-kontroll: 0 review submissions och 0 inline review threads. Den senare PR-kommentaren dokumenterar versionsgränsen och är inte ett nytt godkännande av head `1a5b802...`.
- **PR #73 – masterplan/hyllningsmodul:** Open/Draft, head `6cffb091ba4d406a9d968c11eeef45d5b9afc560`. Denna statusuppdatering görs endast på PR #73:s dokumentationsgren; main ändras inte.
- PR #38 – Synkronicitetsprotokollet – ligger fortsatt parkerad tills huvudspår 2 har en giltig versionsgodkänd publiceringsväg och faktisk LIVE-kontroll.

### Render – ny läsning i My Workspace
- Workspace: My Workspace, `tea-dbjt81flk1mc73a82rg0`.
- Statisk tjänst `folktribunalen` (`srv-dblpumgm7kps73bv55e0`): ej suspenderad, auto-deploy från `main`. Senaste listade deployment är fortsatt `dep-dbt4qddg1s2s738p7bmg`, status `live`, commit `a43f1579058824a36ccad6245d4616551505431e`, färdig 16 november 2026 00:24:32 UTC.
- Redaktionell backend `folktribunalen-editorial` (`srv-dblq2r0n74is73cchqh0`): ej suspenderad, auto-deploy från `main`. Senaste listade deployment är fortsatt `dep-dblq3nafngtc73c0l87g`, status `live`, commit `6a835783553565f239864a9da7160d9f79f692b2`, färdig 4 november 2026 21:22:06 UTC.
- Render-listningen bekräftar tjänsternas nuvarande metadata och historiska senaste live-deployer; den bevisar inte att deras HTTP-endpoints svarar.
- Postgres: tidigare läst metadata i PR #71 anger `available`, `ipAllowList=[]` och expiry 4 december 2026 21:18:55 UTC. Ingen ny SQL-fråga kördes i denna kontroll; tidigare `SELECT 1` nekades av den tomma allowlisten. Ingen databasändring.
- Publik route `https://folktribunalen.onrender.com/` och backend `https://folktribunalen-editorial.onrender.com/api/health` kunde inte hämtas via webbläsarkontrollen (URL not accessible). Ingen HTTP-status, rubrik, ingress eller fulltext har erhållits. Route är inte LIVE-kontrollerad.

### Sidospår – Storsjö/Cladonia, utan ny huvudartikel
- PR #4 är Open/Draft. PR #32 är ett separat utkastspår; ingen av dem aktiveras som huvudartikel.
- SVT-sidan ”Debatt och upprop efter Palantir-vd:ns köp i Härjedalen” hämtades i fulltext. Sidans publiceringsdatum är **9 november 2026**, trots att sökindexets kortutdrag gav intryck av en nyare publicering. Den ska därför inte registreras som en nyhet från 25 november.
- Fulltexten återger ett upprop med över 30 000 underskrifter, kommunalrådets uppgift att ett möte med Cladonia skjutits upp, samt ett mejlsvar från bolaget om allemansrätt, samebyarnas renbete, servitut/ledningsrätter, jaktupplåtelser, skogsbruksplan, ingen planerad vinteravverkning och upprustning av befintliga stugor/vägar. Alla bolagsuttalanden är partsuppgifter återgivna av SVT, inte kontrollerade avtalsvillkor eller myndighetsbeslut.
- Källan tillför ingen daterad ny utveckling jämfört med redan dokumenterade SVT-uppgifter. Den kan användas som primär publiceringskälla för vad SVT rapporterade den 9 november, men inte som ny evidens om vad som hänt den 25 november.
- Källa: https://www.svt.se/nyheter/lokalt/jamtland/debatt-och-upprop-efter-palantir-vdns-kop-i-harjedalen

### Arbetsbeslut
- PR #71 förblir enda aktiva huvudartikel och Draft. Inget godkännande av nuvarande head har dokumenterats.
- Ingen merge, cherry-pick, deploy, databasändring, frontendändring eller publicering har gjorts.
- Nästa sidospår i rotationslistan kvarstår Storsjö/Cladonia; nästa huvudartikel kvarstår PR #38 efter avslutad huvudspår-2-cykel.


## Daily Desk – 25 november 2026

### Dagens rotation: Storsjö kapell / Cladonia

Föregående sidospår var Frölunda (PR #74, 24 november). Dagens minst nyligen avancerade dokumenterade kultur-/markspår är Storsjö/Cladonia, med senaste konkreta uppdateringar i PR #4 och #32 den 12–13 november. PR #4 och #32 är båda Open/Draft; PR #32 är dagens arbetsgren.

**Ny evidensnot:** `editorial/evidence/2026-11-25-storsjo-v-markforvarv-politisk-reaktion.md` på PR #32.
- Aftonbladet publicerade 20 november en debattartikel av Vänsterpartiets Birger Lahti och Elin Hoffner om skärpt granskning av stora markförvärv.
- Klassificering: daterad uppdatering till befintligt artikelutkast.
- Källan dokumenterar en politisk ståndpunkt, inte ett myndighetsbeslut, ett lagförslag eller ett konstaterande om olaglighet/säkerhetsrisk i det aktuella förvärvet.
- Omni återger debattartikeln 21 november. Tidigare SVT/SR-uppgifter om ISP, Länsstyrelsen och kommunmötet hålls separata från debattörernas argument.
- Nästa bevisluckor: originalbeslut från ISP (27 augusti) och Länsstyrelsen (9 september), kommunens mötesanteckningar samt eventuella efterföljande riksdags-/regeringshandlingar.

**Föreslagen artikelvinkel för ett avgränsat tillägg:** ”Markaffären blir också en fråga om politisk kontroll”. Ingen full omskrivning.

### Huvudartikelkö och projektstatus
- Aktiv huvudartikel: PR #71, Europas AI-infrastruktur, Open/Draft, head `1a5b802932e3a50d755519045ed0ec970a8308fc`. Separat godkännande av exakt aktuell commit saknas.
- Nästa huvudartikel: PR #38, Synkronicitetsprotokollet, fortsatt parkerad tills huvudspår 2 har korrekt publicerats via admin och publik route har kontrollerats.
- Frölunda PR #74: föregående leverans, Draft.
- Cypern PR #81: föregående dessförinnan, Draft.
- Varna/Svarta havet PR #80: senaste WFP-noten kvarstår; ingen ny Varna-specifik utveckling har lagts till i dagens leverans.
- Skaga kapell PR #69, Sofia PR #77/#78, Böckernas väg till Athos PR #76, strategiska råvaror, finans, kyrkor, Libanon, Fennoskandien/Storsjö och övriga dokumenterade serier ligger kvar enligt tabellerna ovan. Ingen parkerad huvudartikel har aktiverats.

### Hormuz
Endast separat bevakningsström. Ingen ny, källkontrollerad signal som motiverar en kompletterande evidensnot har lagts till i denna körning. Hormuz har inte påverkat rotationsordningen.

### Teknik, åtkomst och publiceringsspärr
- GitHub: PR #32 kontrollerad Open/Draft före och efter ny evidenscommit; PR #71 och #73 kontrollerade Open/Draft. Inga review submissions på PR #32 eller #71 i denna kontroll.
- Hermes: senaste dokumenterade tjänsteinventering visade ingen Hermes-tjänst. Ingen ny Hermes-endpoint har kunnat bekräftas i denna körning; tillgänglighet kvarstår som blockerad/oklar.
- Källåtkomst: Aftonbladets debattartikel, Omni, Sveriges Radio och SVT kunde hämtas. ISP:s och Länsstyrelsens originalbeslut samt kommunens mötesanteckningar saknas fortfarande.
- Redaktionell backend/databas: ingen ny end-to-end-kontroll genomfördes. Senast dokumenterade blockerare kvarstår: Render-arbetsyta/endpointkontroll ej fullföljd och Postgres allowlist/anslutning blockerade.
- Publik artikelroute: ingen ny HTTP-status eller kontroll av rubrik, ingress och fulltext genomfördes. PR #71 är inte LIVE-kontrollerad.

**PR-spärr:** Alla artikel- och research-PR:er ska förbli Draft. Ingen PR-statusändring, merge, cherry-pick, deploy, DB-/frontendändring eller publicering har gjorts. Historiska avvikelser PR #56 och #66 kvarstår endast som dokumenterade avvikelser; inga nya deployer.

### Nästa rotation
Nästa sidospår efter dagens Storsjö/Cladonia-leverans väljs på nytt efter minst nyligen avancerade status och dokumenterad projektbrief. Den formella huvudartikelkön är oförändrad: PR #71 aktiv, PR #38 nästa men parkerad.

### Återkommande hyllning
Denna utgåva ska behålla de sex återkommande namnen: Johannes Gutenberg, Carl von Linné, Voltaire, Sankta Paraskevi, Sankt Charbel och Vasil Levski (Васил Левски; Vasil Ivanov Kunchev, 1837–1873). Levski-avsnittet ska länka till National Museum Vasil Levski – Documentary Heritage (https://vlevskimuseum-bg.org/en/documentary-heritage/) och Bulgariens nationalbiblioteks material om Levski's Notebook (https://www.nationallibrary.bg/levski/). Arkivbelagda uppgifter ska hållas åtskilda från hyllning och tolkning; inga citat utan originalkontroll.


### Supplemental Hormuz-not – 25 november 2026
- PR #79 har fått en separat evidensnot: `editorial/evidence-notes/2026-11-25-hormuz-ukmto-219-imo-141.md`, commit `9d5383b65463cd65a6be482ee3ae78eea06ed2a4`.
- UKMTO Warning 219-26 är daterad 24 november och avser en verifierad, tidsfördröjt rapporterad händelse 23 november 20:25 UTC: tre österutgående fartyg träffade av okända projektiler, samtliga besättningar redovisade och fartygen fortsatte; skador/miljöpåverkan okända.
- IMO:s bekräftade översikt anger 141 incidenter och 25 dödsfall bland sjöfolk per 23 november. Detta är en regional aggregatpost, inte en räkning enbart av incidenter i själva sundet.
- Klassificering: daterad uppdatering till befintlig Hormuz-bevakning. Supplementalnot endast; ingen ändring av portföljrotation eller huvudartikelkö.

### Nästa sidospår efter Storsjö
PR-metadata visar att Libanonspåret senast uppdaterades 11 november (PR #39) och 13 november (PR #22), äldre än Skaga (17 nov), Böckernas väg till Athos (20 nov), Sofia/ODJURET (21 nov), Varna (22–24 nov), Cypern (23 nov) och Frölunda (24 nov). Därför är **Libanon** nästa sidospår enligt minst nyligen avancerad status. Använd de befintliga PR #22/#39-briefarna; skapa inte en ny vinkel innan deras dokumenterade scope har lästs. Finans PR #49 (12 nov) och strategiska råvaror PR #65 (13 nov) ligger därefter bland de äldre portföljspåren.


## Daily Desk – 26 november 2026

### Aktiv huvudartikel – PR #71
- **Status:** Open / Draft. Endast huvudartikel i formell kö; PR #38 – Synkronicitetsprotokollet – fortsatt parkerad.
- **Exakt aktuell head efter dagens uppdatering:** `e604b54471a563b019251a2ae6fe567b84e73364`. PR #71 har 42 commits och två ändrade filer. GitHub returnerade först `mergeable=false`; efter uppdatering av PR-metadata returnerade slutkontrollen `mergeable=true`. Ingen merge har genomförts.
- **Godkännande:** PR #71:s GitHub-tidslinje innehåller ett dokumenterat chefredaktörsbeslut av äldre commit `d7a9d7e907f6e3bccfb2a6e212402ca297d06b7a`. Beslutet omfattar inte dagens uppdaterade head. Inga GitHub review submissions eller inline review threads finns; PR-kommentarerna är faktakontroll och versionsavgränsning, inte ett godkännande av aktuell head.
- **Dagens artikeluppdatering:** nytt avsnitt om CRA:s Prague Gateway baserat på Corilis Digital Infrastructure delårsrapport till 30 september, publicerad 24 november. Artikeln har nu 54 primärkällor och fortsatt 27 oberoende/kompletterande rapporteringskällor. Bolagets uppgifter om 50 MW nätkraft, 22 MW 2N-redundans/17,3 MW redundant IT, 45 MW avsiktsförklaringar och första modul omkring mitten av 2028 märks som bolagsuppgifter. Ingen Gigafactory-tilldelning eller formell anbudsinlämning hävdas.
- **Artikelgren:** `editorial/europe-ai-infrastructure-review-2026-11-17`. Artikel och dossier är uppdaterade och inlästa från GitHub efter skrivning.

### Sidospår – Storsjö/Cladonia
- PR #32 kontrollerades: Open/Draft, 20 commits, tre ändrade filer. Ingen ny evidensnot lades till i denna körning; 25 november-noteringen om SVT:s publiceringsdatum och partsuppgifterna ligger kvar.
- Nästa sidospår enligt senaste dokumenterade rotation är Libanon (PR #22/#39), men detta är endast bevakningsordning. Ingen ny huvudartikel eller sidospårs-PR skapades i denna körning.

### GitHub och PR-spärr
- PR #71: Open/Draft; exakt head ovan.
- PR #73: Open/Draft; masterplanen uppdateras endast på dess befintliga dokumentationsgren.
- PR #32: Open/Draft.
- PR #71:s kommentarhistorik kontrollerades. Det finns ett äldre versionsbundet godkännande för `d7a9d7e...`, men inte för aktuell head. Ingen PR-status ändrades. Ingen merge, cherry-pick, databasändring, frontendändring eller publicering.

### Render – faktisk metadata- och deploymentkontroll 26 november
Render-arbetsytan My Workspace (`tea-dbjt81flk1mc73a82rg0`) valdes och tjänster/deployer lästes:
- **Statisk webbplats:** `folktribunalen`, service `srv-dblpumgm7kps73bv55e0`, branch `main`, auto-deploy vid commit, inte suspenderad. Senaste listade live-deploy `dep-dbt4qddg1s2s738p7bmg`, commit `a43f1579058824a36ccad6245d4616551505431e`, 16 november 2026 00:24:32 UTC.
- **Redaktionell backend:** `folktribunalen-editorial`, service `srv-dblq2r0n74is73cchqh0`, branch `main`, auto-deploy vid commit, inte suspenderad. Senaste listade live-deploy `dep-dblq3nafngtc73c0l87g`, commit `6a835783553565f239864a9da7160d9f79f692b2`, 4 november 2026 21:22:06 UTC.
- **Postgres:** separat `list_postgres_instances` och `get_postgres` 26 november bekräftade `available`, Free-plan, `ipAllowList=[]`, expiry `2026-12-04T21:18:55.067Z`. En ny read-only `SELECT 1 AS connection_test` nekades eftersom externa anslutningar blockeras av tom allowlist; hosted Render MCP saknar en allowlistbar klient-IP. Ingen allowliständring eller databasändring.
- Render-listan visar att båda tjänsterna auto-deploy från `main`. Dagens ändringar ligger endast på PR-grenar, inte på main; ingen deploy har utlösts av dagens GitHub-skrivningar.

### Publik route – kontroll 26 november
Webbläsarhämtning försöktes för:
- `https://folktribunalen.onrender.com/`
- `https://folktribunalen.onrender.com/#/artikel/europas-ai-infrastruktur`
- `https://folktribunalen-editorial.onrender.com/api/health`

Alla tre returnerade URL-not-accessible i webbläsarverktyget. Det ger ingen HTTP-status eller sidtext. Publik route är inte LIVE-kontrollerad; ingen rubrik, ingress eller fulltext kan därför bekräftas.

### Publiceringsarkitektur och blockerare
- Senaste dokumenterade kodgranskning visar att publika frontend hämtar artikelkort och brödtext från statiska arrayer i `src/app.js`, inte från redaktionella DB-API:t.
- Admin-UI och backend binder inte en publicering till exakt godkänd GitHub-commit och admin-UI:t importerar inte PR-fulltexten. Ingen godkänd, testad publiceringskedja från PR #71 till publika sidan är etablerad.
- Extern DB-anslutning har tidigare blockerats av tom IP-allowlist. Ingen allowlist har öppnats.
- Fortsätt i utkast och dokumentera blockeraren; använd inte statisk frontendändring eller annan publiceringsväg som genväg.

### Återkommande hyllning
Varje utgåva behåller Gutenberg, Carl von Linné, Voltaire, Sankta Paraskevi, Sankt Charbel och Vasil Levski. Levski-källorna ska fortsatt länkas i varje utgåva:
- https://vlevskimuseum-bg.org/en/documentary-heritage/
- https://www.nationallibrary.bg/levski/
Arkivbelagda uppgifter hålls åtskilda från hyllning och tolkning; inga citat utan originalkontroll.

### Arbetsbeslut
- PR #71 är fortsatt enda aktiva huvudartikel.
- PR #38 får inte startas före separat godkännande, fungerande ansluten publiceringsväg och faktisk LIVE-kontroll av huvudspår 2.
- Inga PR:er har konverterats från Draft. Ingen merge, cherry-pick, deploy, databasändring, frontendändring eller publicering har utförts.
