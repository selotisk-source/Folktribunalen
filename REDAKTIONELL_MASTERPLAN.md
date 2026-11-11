# FOLKTRIBUNALEN – Redaktionell masterplan och status

**Version:** 11 november 2026, Europe/Sofia  
**Arbetsregel:** En artikel åt gången: research → komplett utkast → faktakontroll → redigering → godkännandekö. Ingen automatisk publicering. Endast chefredaktörens uttryckliga godkännande får föra en artikel till LIVE.

## Publicerings- och systemstatus

- GitHub-repo: https://github.com/selotisk-source/Folktribunalen
- Publik statisk webbplats: https://folktribunalen.onrender.com (Render service folktribunalen, ID srv-dblpumgm7kps73bv55e0).
- Redaktionell backend/admin: https://folktribunalen-editorial.onrender.com och https://folktribunalen-editorial.onrender.com/admin.html (Render service ID srv-dblq2r0n74is73cchqh0).
- Databas: folktribunalen-db, status available, kostnadsfri instans med nuvarande utgångsdatum 4 december 2026.
- **Publik LIVE-version:** Den tidigare kortversionen är den senast bekräftade LIVE-versionen (deployment `dep-dbqdrgmc6qcc73f1adc0`, commit `f52a144173118b00200657fcabb0bfd2de19abae`, 11 november 2026). Den godkända fullversionen har nu lagts in i `src/app.js` på `main` genom commit `8905e404ce621418d114991cdb99bbb093e1a7ea`. Render-tjänsten är inställd på automatisk deployment från `main`; den nya deploymenten inväntar ännu bekräftelse i Render. Fullversionen får inte beskrivas som LIVE förrän den nya deploymenten är `live` och den publika artikelsidan har kontrollerats.

- **Nuvarande fullständiga uppdatering:** Chefredaktören godkände den samlade fullversionen den 11 november 2026 med tilläggen 10–11 november. Kanonisk text: `editorial/drafts/2026-11-05-hormuz.md`, kopierad till `main` i commit `f9e8b79389822b1895eedc7c5794d754e60c2abb`. Den publika artikeln i `src/app.js` innehåller fulltexten, UKMTO 201-26 och 202-26, ADNOC:s separata fartygsskada, ORLEN, Rezaei/Araghchi samt Didamar. Didamar-avsnittet redovisar även Omans motuppgift via The Maritime Executive och att fysisk skada inte är fastställd.

- **Blockerare för redaktionell backend – återkontrollerad 11 november:** Render Postgres folktribunalen-db har status available men ipAllowList: []. En ny read-only SELECT 1 avvisades igen: databasen blockerar alla externa anslutningar. Render anger två möjliga vägar: kör Render MCP lokalt eller lägg till en uttryckligen betrodd klient-IP under databasens Networking. Använd inte en öppen 0.0.0.0/0-regel som genväg. Backendservicens senaste live deployment är fortfarande 4 november, commit 6a835783553565f239864a9da7160d9f79f692b2; publik statisk tjänsts senaste live deployment är 8 november, commit 8e46f91e643be55cce6afed9ed6d05d5c9aae707. DATABASE_URL-mappningen och admin/API-flödet är inte testade end-to-end; ingen fullversion har skrivits till webbplatsens databas.
- Senaste deployment för backend folktribunalen-editorial: 4 november 2026, commit 6a835783553565f239864a9da7160d9f79f692b2; den har inte fått de senaste redaktionella backendändringarna.
- **Godkännandekö:** Databasbaserad webbkö är fortfarande blockerad av databasens tomma IP-allowlist. Chefens godkännande av Hormuz-fullversionen är dokumenterat i denna körning. PR #48 blev en tillfällig granskningsgren; publiceringsändringarna har förts direkt till `main` och PR #48 är tekniskt supersederad.


## Aktiva huvudspår

| Nr | Spår | Egen artikel / arbetstitel | Artikeltyp | Status |
|---|---|---|---|---|
| 1 | Palantir och den offentliga makten | Vem mäter nyttan – och vem kontrollerar den offentliga statens digitala nervsystem? | Granskning | Långt delutkast finns: 2026-11-05-palantir-nhs-offentlig-makt.md. Q3 2026/SEC 10-Q är separat research. Behöver ingress, primär avtalsdokumentation, bildförslag och slutlig faktakontroll. |
| 2 | Vem bygger Europas AI-datacenter? | Europas AI-infrastruktur: vem finansierar, äger och kontrollerar den? | Granskning | Flera separata delutkast finns om gigafabriker, marknadstest, Anthropic och kreditkedjan. Ingen sammanhållen huvudartikel ännu; skilj europeiska projekt från amerikanska jämförelsefall. |
| 3 | Synkronicitetsprotokollet | Synkronicitet under lupp: från meningsfull slump till prövbar hypotes | Metod/essä | Långt utkast finns: 2026-11-05-synkronicitet-två-nya-teoretiska-modeller.md. Kräver tydlig ingress, reproducerbar metod, alternativförklaringar och bildförslag. |
| 4 | Sofia – staden under staden | Sofia före Sofia: stadens arkeologiska och religiösa lager | Kulturhistorisk granskning | Två delutkast finns: utställningen med 213 föremål och Samuil/Prespa. Måste sammanföras utan att flytta Samuils ursprungliga gravplats från Sankt Achillios vid Prespasjön till Sofia. |
| 5 | Europas strategiska råvaror | Urbergsskölden: Europas råvarusuveränitet, avfall och energiberoende | Granskning | Stort Urbergsskölden-utkast samt separat Arctial/Viscaria-case finns. Behöver en egen huvudartikel som skiljer CRMA-status, tillstånd, finansiering, nätanslutning och produktion. |
| 6 | NVIDIA – när aktier blir säkerhet för lån | NVIDIA som säkerhet: var går gränsen mellan aktiepant och GPU-finansiering? | Finansgranskning | AI-finansieringsutkast finns om IREN, leasing, kredit och NVIDIA:s molnpolicy. Den specifika dokumenterade kedjan för NVIDIA-aktier som pant saknas fortfarande. |
| 7 | Det stora och det lilla fängelset | Libanons kristna mellan två fängelser: Geagea, Gemayel, Syrien och kyrkan | Historisk/politisk granskning | Ett UNIFIL-/sydlibanesiskt delutkast finns. Den sammanhängande historiska huvudartikeln om Samir Geagea, Gemayel-familjen, Syriens närvaro och kyrkans roll återstår. |
| 8 | Europa: Kyrkorna som överlevde imperierna | Kyrkorna som överlevde imperierna: Wiesbaden, Warszawa och Prag | Kulturhistorisk serie | Inget komplett huvudutkast i dokumentbanken. Byggnadsakter och församlingarnas primärhistorik måste samlas separat för varje stad; Sofia och Varna möjliga fortsättningar. |
| 9 | Fennoskandien – urberget, skogen och hästen | Fennoskandien: urberg, skog och häst som landskapets infrastruktur | Kulturhistorisk/ekonomisk essä | Arctial/Kvikant-utkast finns som lokalt delcase. Den breda fennoskandiska huvudartikeln om geologi, skogsbruk, markrätt och hästkultur återstår. |

## Separata projekt och serier

| Projekt | Planerad leverans | Status |
|---|---|---|
| ODJURET UR DJUPET | Uppenbarelsebokens odjur ur havet, Storsjöodjuret, Frösöstenen och Peter Thiels egna föreläsningar om Antikrist | Långt utkast finns (2026-11-05-storsjo-thiel-antichrist-folklore.md). Kräver primärtext från Thiel, runologisk faktakontroll, bildförslag och formell faktasektion. Symbolisk parallell central; historisk påverkan får inte påstås utan belägg. |
| Storsjö kapell, Härjedalen – markförvärv | Undersök rapporterade cirka 15 000 hektar kring Storsjö kapell och Cladonia Skog AB/Alex Karp-uppgiften | Långt utkast finns, men ägaruppgift och areal är inte fastställda i lagfart/fastighetsregister. Jämför fastighetsgränser med Fornsök, gravar, bronsålderslämningar, depåfynd, samfälligheter och lokala rättigheter. Håll helt åtskilt från Storsjön vid Östersund/Frösön. |
| Skaga kapell | Åtta delar: ursprung; Johannes Döparens huvud; björnfällarna; silverlöjan; jätten Skagas dotter/Ramunder; offerplatsen; rivningen; återuppbyggnad, brand och återinvigning | Åttadelad struktur definierad; komplett del 1 och arkivkällor återstår. Sägner ska märkas som lokal tradition, inte arkivfakta. |
| Böckernas väg till Athos | Serien om Sofia, klostren, bokhandel, Zograf och ortodox bildningstradition | Fyra separata utkast uppgavs ha skapats 5 november, men titlar/fulltexter har inte återfunnits i GitHub eller Library-sökningen. Äldre redaktionellt beslut: huvudplacering SVART HAV, korsreferens RÖD JORD. Återskapa inte från minnet; inventera och återfinna källunderlag först. |
| Från skrift till storebror | Skrift, register, statistik, databaser och övervakning som maktens minne | Två brittiska delutkast finns om Met Police/Auror och biometrisk ansiktsigenkänning. En sammanhängande huvudartikel krävs; skilj lagstöd, pilot, faktisk driftsättning och tillsyn. |

## Aktuella nyhetsspår

**Redaktionell prioritetsordning:** Hormuz/sjöfarten är **prioritet 6**. Det är ett separat köindex och ska inte härledas från numreringen av de nio långsiktiga huvudspåren. Prioritet 1–5 ligger före Hormuz och ska behålla sin tidigare beslutade ordning. Hormuz får inte flyttas upp som nästa artikel enbart för att grundversionen är godkänd.

| Spår | Artikelvinkel | Status 11 nov 2026 |
|---|---|---|
| **Prioritet 6 – Hormuz och sjöfarten** | Hormuz: Irak söker en egen väg – men farleden är fortfarande osäker | **Hela uppdaterade fullversionen uttryckligen godkänd 11 november; publiceringskod inlagd på main, Render-deployment inväntas.** IMO:s officiella lista anger 133 bekräftade incidenter och 25 dödsfall med lägesdatum 10 november (131 i föregående ögonblicksbild 9 november). IMO-listan innehåller bland annat NAVIG8 MACALLISTER, HUDA och GRIT; den anger inte uttryckliga UKMTO-varningsnummer för dessa poster. Reuters 11 november återger Washington Institute:s räkning om 37 fartygsangrepp i oktober; detta är ett separat mått från IMO:s incidentlista. ORLEN:s regulatoriska meddelande 10 november bekräftar uppsägning av ett av två QatarEnergy-avtal: 1 mtpa, cirka 15,3 TWh, uppskattat avtalsvärde 570 miljoner euro för 2026, 60 dagars fortsatt verkan; det andra avtalet kvarstår. UKMTO 201-26 och ADNOC-händelsen hålls åtskilda. Fullversionen är ännu inte bekräftad LIVE; PR #48 har ersatts av direkta main-commits. PR #3 är stängd som supersederad. |
| Maktförskjutningen i USA:s kongress | Kongressen byter färg – men vem kontrollerar den tekniska makten? | Långt delutkast finns i PR #1; måste uppdateras med certifierade mandat, ledarskap, utskott och faktisk maktövergång. |
| Palantirs kvartalsrapport och AI-infrastruktur | Palantir Q3: tillväxt, offentliga kontrakt och datacenterberoenden | Q3/SEC 10-Q-underlag finns; separat artikel behöver färdig ingress, fullständig text, primärkällor, oberoende källor, bildförslag, faktakontroll och öppna frågor. |
| Svenska Gripen över Polen | Fyra timmar i polskt luftrum – vad gjorde den svenska insatsen? | Expressen-underlag 4 november och Försvarsmaktens bakgrund finns. Separat artikel ännu inte påbörjad; placering bestäms av den gällande prioritetskön. Den ska inte automatiskt behandlas som nästa artikel efter Hormuz. Kräver polsk generalstabs originalpost, svensk Försvarsmaktskommentar och tydlig skillnad mellan patrull, incidentberedskap och stridskontakt. |

## Återkommande hyllning i varje utgåva

- Johannes Gutenberg – tryckkonst och spridning av skrift.
- Carl von Linné – vetenskaplig klassifikation och naturkunskap.
- Voltaire – filosofi, kritik och bildning.
- Sankta Paraskevi – andligt och kulturellt arv.
- Sankt Charbel – andligt och kulturellt arv.
- Vasilevski – **identiteten måste fastställas innan namn eller hyllning publiceras.**

## Nästa arbetsordning

1. **Prioritet 1–5:** genomför de fem tidigare beslutade artiklarna i deras redan fastställda ordning. De ligger före Hormuz; denna korrigering ändrar inte deras inbördes ordning.
2. **Prioritet 6 – Hormuz:** den samlade fullversionen godkändes 11 november och publiceringskoden är inlagd på `main`. Vänta in Render-deployment, kontrollera status `live` och öppna den publika artikelsidan innan arbetet går vidare. Publiceringen sker via den statiska webbplatsen; databasbaserad admin/kö är fortfarande blockerad.
3. **Prioritet 7 och följande:** fortsätt i den redan beslutade kön. Gripen över Polen, USA:s kongress och Palantirs Q3 får inte automatiskt flyttas före de fem första eller före Hormuz; deras plats bestäms av den gällande prioriteringslistan.
4. De nio långsiktiga huvudspåren och separata serierna fortsätter parallellt som masterplanens täckningskrav, men artikelproduktion sker fortfarande en artikel åt gången och utan att kringgå prioriteringskön.

## Redaktionell standard

- Primärkällor först: myndighetsbeslut, lagtext, domar, avtal, bolagsregister, upphandlingar, årsredovisningar, prospekt, originaldata och dokument.
- Oberoende källor ska pröva primärkällornas uppgifter; pressmeddelanden är avsändarens uppgifter, inte automatiskt oberoende bevis.
- Märk varje central uppgift som **belagt faktum**, **analys** eller **obekräftat/hypotes**.
- Ange datum, metod, källans begränsningar, öppna frågor och rättelser.
- Ge berörda parter möjlighet att bemöta konkreta uppgifter.
- Skilj Storsjö kapell i Härjedalen från Storsjön vid Östersund/Frösön.
- Ingen automatisk publicering. Varje artikel måste uttryckligen godkännas av chefredaktören och kontrolleras LIVE efter publicering innan nästa artikel påbörjas.


## Redaktionsinventering – 10 november 2026

PR #1 innehåller 26 äldre artikelutkast och en separat täckningsmatris. En sammanfattning av samtliga 26 finns i [arkivinventeringen](https://github.com/selotisk-source/Folktribunalen/blob/editorial/breaking-watch-2026-11-05/editorial/research/2026-11-10-archive-draft-inventory.md). Den skiljer delutkast, huvudspår, separata projekt och supersederade versioner. Flera äldre texter saknar en enhetlig uttrycklig struktur för bildförslag, faktakontroll och öppna frågor. De är därför dokumentbank, inte godkännandekö eller färdigpublicerade artiklar.

- Fullständigt artikelpaket krävs för varje artikel: artikeltyp, rubrik, ingress, komplett sammanhängande text, primärkällor, oberoende källor, bildförslag, faktakontroll, öppna frågor och tydlig status.
- PR #1: arkiv/dokumentbank, 26 äldre utkast; får inte batch-mergas.
- PR #48: enda aktiva granskningsärendet, Hormuz. Kanonisk fil: editorial/drafts/2026-11-05-hormuz.md. Den innehåller komplett huvudtext, primär- och oberoende källor, bildförslag, faktakontroll och öppna frågor. Grundversionen godkändes 10 november; tillägg 10–11 november (UKMTO 201, ADNOC, IMO 133/25, ORLEN och Reuters 11 november) är inte godkända. 2026-11-06-hormuz.md är arkiv-/källnoteringsfil, inte kanonisk artikel. PR #3 är stängd som supersederad.
- Böckernas väg till Athos: fyra tidigare utkast uppgavs ha skapats 5 november; fulltexterna återfanns inte i GitHub-inventeringen eller Library-sökningen. Äldre beslut om placering i SVART HAV med korsreferens till RÖD JORD bevaras.
- Nästa artikel: Gripen över Polen efter att Hormuz är godkänd och LIVE. Övriga huvudspår färdigställs därefter ett i taget.

## Hormuz – teknisk publiceringsspärr

Read-only SQL nekas eftersom databasens IP-allowlist är tom ([]). Admin/API och DATABASE_URL är inte testade end-to-end, och webbplatsens databasbaserade godkännandekö kan inte användas. Detta blockerar DB-publicering men inte den statiska webbplatsen. Den godkända fullversionen är nu inlagd i `src/app.js` på `main`; Render måste slutföra en ny deployment och den publika rutten `#/artikel/hormuz-sjofart` måste kontrolleras innan LIVE-status kan bekräftas.


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
