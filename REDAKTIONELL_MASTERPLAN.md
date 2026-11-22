# FOLKTRIBUNALEN – Redaktionell masterplan och status

**Version:** 22 november 2026 – uppdaterad nyhetsbevakning, PR #79 och fullständig kontroll av Real Decreto 1032/2026, EuroHPC och Render-/route-status
**Arbetsregel:** En huvudartikel åt gången: research → komplett utkast → faktakontroll → redigering → godkännandekö → separat artikelgodkännande → publicering via redaktionens system → faktisk HTTP-kontroll av publik route.  
**Publiceringsspärr:** Ingen automatisk publicering, merge eller driftsättning. Varje enskild artikel kräver chefredaktörens uttryckliga LIVE-godkännande. Om admin eller databas är blockerad fortsätter arbetet i utkastet; publicering får inte ersättas med en parallell statisk kodväg. Äldre daterade statusloggar längre ned är historiska ögonblicksbilder; den översta arbetskontrollen anger aktuell status.


## Aktuell arbetskontroll – 22 november 2026

### Aktiv huvudartikel

- **Filversioner:** artikeltextens senaste commit är `3fff61ef05aff5c1e2f4b9bc1cedff0cc02fad87`; dossierets senaste commit är `3eeb2e4c34e4790eb2771ffddb3a5ae782646c4b`.
- **Huvudspår 2 – Europas AI-infrastruktur:** PR #71 är fortsatt Open/Draft på `editorial/europe-ai-infrastructure-review-2026-11-17`. Aktuell PR-head efter artikel- och dossieruppdatering: `3eeb2e4c34e4790eb2771ffddb3a5ae782646c4b`. PR #71 har 28 commits och två ändrade filer: komplett artikelutkast samt internt redaktionellt dossier. Artikelutkastet innehåller 44 primärkällor och 23 oberoende rapporteringskällor.
- **Nytt rättsligt läge i Spanien:** Real Decreto 1032/2026 publicerades i BOE 21 november (BOE-A-2026-24439) och trädde i kraft 22 november. Kraven för nätåtkomst gäller datacenter med minst 10 MW anslutningseffekt, aggregerat per plats och ägare. Artikeltexten skiljer 80 procent årlig additionalitet från 80 procent timvis korrelation, redovisar PUE/WUE-övergångsvärden, ALTA-avgränsningen för digital suveränitet, specialregimen för vissa EU-strategiska projekt och tidsfrister för redan tillståndsgivna men ej anslutna projekt. Den beskriver också sexmånadersfönstret för additionalitet till och med 2028, solcellsundantaget, den villkorade 90-procentsvägen och de särskilda EU-projektgränserna.
- **Skottland:** Scottish Government Direction kräver EIA för nya datacenterutvecklingar över 50 MW inom de Schedule 2-klasser som anges i 2017 års EIA-regler; den har varit i kraft sedan 17 september 2026. Le Monde-rapporteringen om Edinburghprotesten 14 november är märkt som oberoende samhällsrapportering, inte som primärkälla för tillstånd.
- **EuroHPC:** den officiella upphandlingssidan står Open. Alla gamla utkast och anbud i tidigare inlämningssystem ska återskapas via nya länkar. Lot 2 stänger 3 december 2026 kl. 17.00 CET; Lot 1 4 februari 2027 kl. 17.00 CET. EuroHPC:s 5-novembermeddelande avser byte av inlämningslänkar; 2EU rapporterar en separat teknisk uppdatering 10 november till MLPerf v5.1. Den officiella tender-specifikationen v2 daterad 23 oktober anger Training v5.1 och Inference v5.1; fullständig portalversionshistorik har inte hämtats. Ingen ny inlämning från ett namngivet konsortium är fastställd.
- **Godkännande:** separat chefredaktörsgodkännande av exakt head `3eeb2e4c34e4790eb2771ffddb3a5ae782646c4b` saknas. Godkännandet av PR #64 gäller inte denna materiellt uppdaterade version. PR #71 har noll review submissions och noll inline review threads.
- **Nästa huvudspår:** Synkronicitetsprotokollet, PR #38, förblir parkerat tills PR #71 har fått separat godkännande av exakt aktuell commit, gått genom den anslutna adminvägen och klarat faktisk LIVE-kontroll av HTTP-status, rubrik, ingress och fulltext.

### Övriga spår och research-PR:er

Följande öppna PR:er är research-/dokumentationsmaterial, inte aktiva huvudartiklar: PR #72 Cypern; #74 Frölunda; #75 Skaga kapell; #76 Athos/bokvägar; #77 Sofia – staden under staden; #78 Odjuret ur djupet. PR #73 är masterplan och återkommande hyllningsmodul; PR #79 är ett separat nyhetsbevakningspaket med fyra evidensnoter. De ska hållas i Draft och får inte flyttas före huvudartikelkön. Religion/Folket/Tradition, Skaga och övriga serier förblir portfölj- och evidensmaterial. Ingen parallell huvudartikel har startats.

### Nyhetsbevakning – 22 november 2026 (PR #79)

Fyra separata, provenance-länkade evidensnoter har lagts i [PR #79 – Nyhetsbevakning 22 november](https://github.com/selotisk-source/Folktribunalen/pull/79). Aktuell PR-head: `b95a754e40ddc844eb1f441109f72bc51a4e18e3` (7 commits, 4 filer). De är researchmaterial, inte nya huvudartiklar.

- **Hormuz:** UKMTO 214-26 den 20 november och 215-26/216-26 den 21 november gäller tre rapporterade träffar nära Khasab. Reuters säger att det är oklart om 215 och 216 avser samma tanker. Fartygen är inte namngivna; Irans minuppgift hålls som obekräftad partsuppgift. Gulf News rapporterade 22 november att ledamoten Vahid Ahmadi hävdar att 14 tankfartyg förbereds för att utmana blockaden; fartyg, destination och tidpunkt anges inte och någon oberoende bekräftelse på en seglande konvoj finns inte. Behandla uppgiften som politisk signalering, inte som fastställd flottförflyttning.
- **USA:s kongress:** Mary Peltolas seger ger Demokraterna en inkommande senatsmajoritet på 56–44 och partiet har återtagit representanthuset. Detta gäller 120:e kongressen från 3 januari 2027, inte den sittande 119:e kongressen. H.R. 2347 användes som lagstiftningsfordon: SA 6883, en ersättningstext med BAAJA som korttitel, antogs 69–27 den 18 november; senaten antog H.R. 2347, as amended, 62–33 den 19 november. Senatens röstningssida visar fortfarande den ursprungliga skattetiteln i metadata. Texten är inte lag och måste behandlas av representanthuset. Separat avslogs H.Con.Res. 93 om krigsmaktsfrågan rörande Iran med 48–51 den 19 november.
- **Palantir:** Q3-intäkterna var 2,313 miljarder USD (+96 procent år/år); USA:s kommersiella intäkter var 984 miljoner USD mot 953 miljoner USD i USA:s myndighetsintäkter; RPO var 4,9 miljarder USD. DOJ väckte den 18 november åtal mot Igor D’iu för påstått agerande som rysk agent och övervakning av anställda vid ett Silicon Valley-företag. DOJ namnger inte företaget i pressmeddelandet; Reuters identifierar det som Palantir. Anklagelserna är inte fastställda domstolsfakta.
- **Gripen över Polen:** Försvarsmakten bekräftar svensk Gripen-insats natten till 20 november med lufttankning och samverkan med polska F-16 och nederländskt tankflyg. Polska BBN redovisar tre nedfallsplatser och identifierar ett objekt som en Kh-101. Kyiv Independent rapporterade 22 november med hänvisning till Polens operativa befälhavare att CAOC i Uedem utfärdade ett villkorat eldtillstånd, men att svensk pilot inte kunde identifiera målet visuellt eller elektrooptiskt och därför inte avlossade skott. Detaljen är sekundär rapportering, inte ett besked i Försvarsmaktens pressmeddelande.

**Käll- och publiceringsgräns:** detaljer, primärlänkar, oberoende rapportering, faktastatus och öppna frågor finns i PR #79:s fyra separata evidensnoter. Inga av noterna är en färdig artikel eller ett publiceringsgodkännande.

### PR-spärr – aktuell kontroll

- GitHub-sökning den 22 november returnerade **66 öppna Draft-PR:er och 0 öppna icke-Draft-PR:er** i repot.
- PR #71 är Open/Draft, 28 commits, två filer; noll review submissions och noll review threads.
- PR #73 är Open/Draft och innehåller endast `REDAKTIONELL_MASTERPLAN.md` samt `editorial/portfolio/recurring-tributes.md`.
- PR #73 är den plats där denna masterplanuppdatering hålls. **Main-masterplanen är inte ändrad**; den aktuella filen på main har versionsdatum 18 november 2026. Denna 22-novemberkontroll ligger endast i PR #73 Draft.
- Historiska avvikelser PR #56 Meta/Ofcom och PR #66 Genève/autonoma vapen kvarstår som historiska poster utan nya deployer eller kodändringar.

### GitHub, Render och publik route – faktisk kontroll 22 november

- PR #71:s basgren är `main` på `04e00e97b35bb984d783bab652011a3d7441a0cd`.
- **Frontendavvikelse på main:** `src/app.js`, blob `8df7ea73093317eeebff2186cf9f6e69a4d3a7de`, visar Meta/Ofcom-rubrik och ingress för sluggen `europas-ai-infrastruktur`, medan body-mappningen för samma slug innehåller Google Wyoming/Crusoe/AEP. PR #71:s artikeltext är Europas AI-infrastruktur. Detta är en bekräftad kodmismatch; ingen frontendändring har gjorts.
- **Statisk Render-tjänst:** `folktribunalen`, `srv-dblpumgm7kps73bv55e0`, branch `main`, `autoDeploy=yes`. Senaste listade live-deploy: `dep-dbt4qddg1s2s738p7bmg`, commit `a43f1579058824a36ccad6245d4616551505431e`, färdig 16 november 2026 00:24:32 UTC.
- **Redaktionell backend:** `folktribunalen-editorial`, `srv-dblq2r0n74is73cchqh0`, branch `main`, `autoDeploy=yes`. Senaste listade live-deploy: `dep-dblq3nafngtc73c0l87g`, commit `6a835783553565f239864a9da7160d9f79f692b2`, färdig 4 november 2026 21:22:06 UTC.
- Render-konfigurationen visar `ipAllowList=0.0.0.0/0` för webbplats och backend. Det är nätverksåtkomst; backendens autentisering/adminflöde har inte testats end-to-end.
- **Postgres:** `folktribunalen-db`, `dpg-dblq2fqfngtc73c0h9gg-a`, status `available`, `ipAllowList=[]`. En read-only `SELECT 1 AS connectivity_check` via hosted Render MCP nekades: databasen blockerar externa anslutningar när IP-allowlisten är tom och hosted MCP saknar en klient-IP att lägga till. Render anger lokal Render MCP som alternativ. Ingen DB-läsning eller DB-skrivning har genomförts.
- **Publik route:** hämtning av `https://folktribunalen.onrender.com/` och hash-routen för AI-artikeln misslyckades med DNS-felet `Temporary failure in name resolution`; webbhämtningen kunde inte nå URL:en. Ingen HTTP-status, rubrik, ingress eller fulltext har erhållits. LIVE-kontrollen är inte genomförd.
- PR-grenarna har inte utlöst Render-deploy eftersom båda tjänsterna är kopplade till `main` med `autoDeploy=yes`. Ingen merge, cherry-pick, deploy, databasändring, frontendändring eller publicering har gjorts.

### Återkommande hyllning i varje utgåva

PR #73:s `editorial/portfolio/recurring-tributes.md` innehåller fortsatt Gutenberg, Linné, Voltaire, Sankta Paraskevi, Sankt Charbel och Vasil Levski. Levski-notisen har de föreskrivna källorna från National Museum Vasil Levski – Documentary Heritage och Bulgariens nationalbibliotek. Inga citat tillskrivs Levski utan kontroll mot originalmanuskript eller kontrollerad transkription. Denna redaktionella standard är dokumenterad i PR #73 Draft; den är ännu inte mergad till main.

### Nästa steg

1. Fortsätt samma huvudartikel med uppföljning av tillämpningen av Real Decreto 1032/2026 och EuroHPC:s återinlämningsprocess.
2. Håll PR #71 i Draft tills separat godkännande av exakt slutlig commit finns.
3. Efter godkännande: använd endast redaktionens anslutna adminväg och kontrollera HTTP-status, rubrik, ingress och fulltext.
4. Starta inte PR #38 som aktiv huvudartikel före faktisk LIVE-kontroll av PR #71.

## Aktuell arbetskontroll – 21 november 2026 (förmiddagskontroll)

### Aktiv huvudartikel och godkännandekö

- **Huvudspår 2 – Europas AI-infrastruktur:** PR #71 är Open/Draft på grenen editorial/europe-ai-infrastructure-review-2026-11-17. Aktuell head efter faktaruteuppdateringen: 95e7584ab81b7d94b8b5493b6e89ae7faa024b79. Två filer: komplett artikelutkast och separat internt dossier. Artikeln har nu en faktakontrollerad del om Spaniens datacenterdekret och den nationella elnätsplanen till 2030.
- **Godkännande:** ingen separat chefredaktörsapproval för exakt aktuell head har identifierats. PR #64:s godkännande 15 november gäller endast den tidigare basversionen. PR #71 har 0 review submissions och 0 inline review threads; den enda issue-kommentaren är en äldre faktakontroll från 17 november och är inte ett godkännande.
- **Rättslig status Spanien:** ministerrådet godkände datacenterdekretet 20 november. Den fullständiga författningstexten har inte identifierats i BOE vid kontrollen 21 november; publicering och ikraftträdande är därför inte fastställda. Artikeln beskriver det som ministerrådsgodkänt, inte som redan gällande rätt.
- **Nästa huvudspår:** Synkronicitetsprotokollet, PR #38, förblir parkerat tills PR #71 har fått separat godkännande av exakt aktuell commit, gått via ansluten adminväg och klarat faktisk LIVE-kontroll av HTTP-status, rubrik, ingress och fulltext.
- **Separata researchspår:** PR #74 Frölunda är research, inte huvudartikel. Religion/Folket/Tradition och Skaga ligger kvar som portfölj- och evidensmaterial, inte parallella huvudartiklar.
- **Historiska publiceringsavvikelser:** PR #56 Meta/Ofcom och PR #66 Genève/autonoma vapen är tidigare mergade avvikelser utan påträffat separat artikelbundet LIVE-godkännande. De registreras historiskt; inga nya deployer eller ändringar får byggas vidare på dem utan separat godkännande.

### PR-spärr – aktuell kontroll

- GitHub API returnerade 63 öppna PR:er i repot. Samtliga 63 har draft=true; ingen öppen PR behöver återställas från Ready for review.
- PR #71 är Open/Draft och väntar på godkännande av exakt head 95e7584ab81b7d94b8b5493b6e89ae7faa024b79.
- PR #73 är en separat dokumentations- och hyllningsmodul-PR, Open/Draft. Denna masterplanuppdatering ligger kvar på dess dokumentationsgren.
- Ingen merge, cherry-pick till main, databasändring, frontendändring, publicering eller manuell deploy har gjorts.

### GitHub, Render och publik route

- **Main:** PR #71:s bas är 04e00e97b35bb984d783bab652011a3d7441a0cd.
- **Frontendavvikelse:** src/app.js på main, blob 8df7ea73093317eeebff2186cf9f6e69a4d3a7de, har kortmetadata för sluggen europas-ai-infrastruktur med rubriken Meta lämnade fel WhatsApp Business-data till Ofcom. articleBodies för samma slug innehåller i stället Google Wyoming/Crusoe/AEP. PR #71:s utkast är Europas AI-infrastruktur. Detta är en bekräftad trevägsmismatch i källkoden; ingen frontendändring har gjorts.
- **Statisk Render-tjänst:** folktribunalen, srv-dblpumgm7kps73bv55e0, branch main, autoDeploy=yes. Senaste listade live-deploy: dep-dbt4qddg1s2s738p7bmg, commit a43f1579058824a36ccad6245d4616551505431e, färdig 16 november 2026 00:24:32 UTC.
- **Redaktionell backend:** folktribunalen-editorial, srv-dblq2r0n74is73cchqh0, branch main, autoDeploy=yes. Senaste listade live-deploy: dep-dblq3nafngtc73c0l87g, commit 6a835783553565f239864a9da7160d9f79f692b2, färdig 4 november 2026 21:22:06 UTC.
- **Postgres:** folktribunalen-db, dpg-dblq2fqfngtc73c0h9gg-a, status available, ipAllowList=[]. Read-only SELECT 1 AS connection_test nekades av Render eftersom databasen blockerar alla externa anslutningar när allowlisten är tom; hosted Render MCP har ingen klient-IP att lägga till. Ingen DB-write har gjorts.
- **Publik route:** curl mot https://folktribunalen.onrender.com/ och hash-routen för europas-ai-infrastruktur misslyckades med DNS-felet Could not resolve host. Webbläsarhämtningen kunde inte nå den statiska webbplatsen eller backendens URL. Ingen HTTP-status, sidrubrik, ingress eller fulltext har erhållits. Ingen LIVE-kontroll är genomförd.
- **Auto-deployrisk:** båda Render-tjänsterna är kopplade till main med autoDeploy=yes. PR-grenarna ändrar inte main och har inte utlöst någon artikeldeploy.


### Källkontroll 21 november – Spanien

MITECO:s officiella pressmeddelande från 20 november och La Moncloas ministerrådsreferens hämtades på nytt 21 november; båda svarade HTTP 200. MITECO bekräftar ministerrådets godkännande av ett Real Decreto för stora datacenters hållbarhet och digital suveränitet. Kraven över 10 MW, 80 procent timvis korrelerad förnybar energi, additionalitet, WUE/PUE och rapportering återges i artikelutkastet med korrekt avgränsning. Krav på data inom EES och kontroll av tredjelandsåtkomst gäller system i den högsta säkerhetskategorin, inte generellt varje privat AI-arbetslast. Den separata nationella elnätsplanen till 2030 är inte datacenterreserverad kapacitet.

Riktad sökning på dekretets titel har ännu inte identifierat den fullständiga BOE-texten. BOE:s befintliga Real Decreto-ley 7/2026 är den tidigare rättsliga grunden, inte själva genomförandedekretet. En direkt dagsarkivadress gav 404 och används inte som bevis för frånvaro av publicering. Rättslig status står därför kvar som ministerrådsgodkänt 20 november; BOE-text och ikraftträdande återstår att fastställa.


### Nyhetskontroll 21 november 2026

- **Hormuz/sjöfart – ny incident 20 november:** Reuters rapporterar med hänvisning till UKMTO att en utgående tanker träffades av en okänd projektil cirka 8 nautiska mil norr om Khasab och började brinna. Inga personskador eller miljöeffekter rapporterades. Irans revolutionsgarde gav senare en annan förklaring – minträff – via iranska statsmedier. Detta är en partsuppgift och ska inte blandas ihop med UKMTO:s separata varningar 211-26 och 212-26 den 17 respektive 18 november. UKMTO-numret för händelsen 20 november är inte fastställt i det kontrollerade underlaget. Reuters: https://www.reuters.com/world/middle-east/fire-reported-tanker-after-projectile-strike-off-oman-ukmto-says-2026-11-20/
- **USA:s kongress:** Senatens officiella Roll Call Vote 270 den 19 november visar att H.R. 2347, as amended, passerade 62–33 (fem senatorer röstade inte). Congress.gov anger status Passed Senate. Senatens roll-call-sida behåller representanthusets ursprungliga skattetitel; sekundär dokumentrapportering identifierar den antagna ersättningstexten som BAAJA/SA 6883. Eftersom senaten antog ändrad text måste representanthuset agera igen. Förslaget är inte lag. Officiella källor: https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00270.htm · https://www.congress.gov/bill/119th-congress/house-bill/2347 . Sekundär dokumentgenomgång: https://publicrecordservice.com/record/2026/11/senate-passes-hr-2347-permitting-substitute-sa-6883-62-33-vote-270/
- **Palantir:** senaste kvartalsrapporten i investerarportalens SEC-lista är 10-Q den 3 november. Portalen listar fem Form 144-notiser daterade 20 november. Ett kontrollerat SEC-dokument, accession 0001950047-26-011414, gäller officer David A. Glazer och anger 55 745 stamaktier, uppskattat marknadsvärde 8 185 534,48 USD och en föreslagen försäljningsdag 20 november; notisen beskriver en flerdagarsförsäljning med 60 procent av bruttofrisläppandet. Form 144 är en förhandsnotis om föreslagen försäljning, inte bevis för att affären genomförts. De övriga fyra notiserna är inte individgranskade i denna körning. Källor: https://investors.palantir.com/financials/sec-filings · https://www.sec.gov/Archives/edgar/data/1321655/000195004726011414/0001950047-26-011414.txt
- **Gripen över Polen – ny operativ händelse 20 november:** Försvarsmaktens pressmeddelande 20 november kl. 12:54 anger att svenska JAS 39 Gripen deltog under natten i en luftförsvarsinsats efter att oidentifierade objekt upptäckts. Insatsen varade flera timmar, krävde lufttankning och klargöring vid en framskjuten bas i Polen; svenska piloter följde flera mål. Försvarsmakten beskriver flera misstänkta luftrumskränkningar men identifierar inte objekten i pressmeddelandet. Uppgifter i svensk sekundärrapportering om två kryssningsrobotar och en drönare ska därför hållas som separat attribuerad rapportering tills polska primärkällor har kontrollerats. Primärkälla: https://www.mynewsdesk.com/se/forsvarsmakten/pressreleases/svenska-jas-gripen-i-luftfoersvarsinsats-oever-polen-3479553 . Sekundärrapportering: https://omni.se/svenska-gripen-plan-deltog-i-insatsen-i-polen/a/dJOQrJ
- **AI-infrastruktur:** Spaniens ministerrådsgodkända datacenterdekret är fortsatt en del av huvudartikel 2 och har dokumenterats i dossieret med MITECO/La Moncloa som primärkällor. EuroHPC:s upphandling står fortsatt Open enligt den officiella upphandlingssidan; Lot 2 stänger 3 december 2026 och Lot 1 den 4 februari 2027. Ingen tilldelning har fastställts.

### Återkommande hyllning i varje utgåva

PR #73 innehåller editorial/portfolio/recurring-tributes.md med Johannes Gutenberg, Carl von Linné, Voltaire, Sankta Paraskevi, Sankt Charbel och Vasil Levski. Varje utgåva ska ha alla sex, med källor i samma utgåva. Levski-notisen ska alltid ange både National Museum Vasil Levski – Documentary Heritage och National Library – Levski's Notebook. Inga citat får tillskrivas Levski utan kontroll mot originalmanuskript eller kontrollerad transkription.


## Aktiva huvudspår

| Nr | Spår | Egen artikel / arbetstitel | Artikeltyp | Status / senaste kontroll |
|---|---|---|---|---|
| 1 | **Palantir och den offentliga makten** | Palantir och den offentliga makten – NHS som stresstest för datakontroll | Granskning | **PUBLICERAD LIVE.** PR #55 mergad; publik route HTTP 200 kontrollerad 13 nov. Daterat NHS-tillägg från 12 nov förbereds separat efter avslutad spår-2-cykel. |
| 2 | **Vem bygger Europas AI-datacenter?** | Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen? | Undersökande granskning | **PR #71 Open/Draft, aktuell commit `87e78d8f569e8e5e5b9d1c2ea2d0dbe726be2b4e` (19 commits före main, 0 bakom).** Komplett artikel och internt dossier faktakontrollerade 21 nov, inklusive Spanien. Separat chefredaktörsgodkännande krävs för exakt commit. Ingen LIVE-kontroll; route-mismatch och databasblockering kvarstår. |
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
