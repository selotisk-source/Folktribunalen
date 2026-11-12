# FOLKTRIBUNALEN – Redaktionell masterplan och status

**Version:** 12 november 2026, 08.46 Europe/Sofia  
**Arbetsregel:** En artikel åt gången: research → komplett utkast → faktakontroll → redigering → godkännandekö. Ingen automatisk publicering. Endast chefredaktörens uttryckliga godkännande får föra en artikel till LIVE. Statusavsnitten högst upp är aktuella; arbetsloggar längre ned bevaras som historik.

## Publicerings- och systemstatus

- GitHub-repo: https://github.com/selotisk-source/Folktribunalen
- Publik statisk webbplats: https://folktribunalen.onrender.com (Render service `folktribunalen`, ID `srv-dblpumgm7kps73bv55e0`).
- Redaktionell backend/admin: https://folktribunalen-editorial.onrender.com och https://folktribunalen-editorial.onrender.com/admin.html (Render service ID `srv-dblq2r0n74is73cchqh0`).
- **Publik statisk tjänst:** senaste live deployment är `dep-dbqdrgmc6qcc73f1adc0`, commit `f52a144173118b00200657fcabb0bfd2de19abae`, avslutad 11 november 2026 kl. 21.27 UTC. Tjänsten är konfigurerad för auto-deploy från `main`, men den har ännu inte fått fullversionen av Hormuz.
- **Hormuz:** fullversionens kod finns i `src/app.js` på `main` från commit `8905e404ce621418d114991cdb99bbb093e1a7ea`. Render kör fortfarande `f52a144...`; därför är den fullständiga versionen inte LIVE. Den kortare Hormuz-versionen är den som finns i den aktuella statiska deploymenten. Ingen ny LIVE-publicering påstås.
- **Redaktionell backend:** senaste live deployment är fortfarande 4 november 2026, commit `6a835783553565f239864a9da7160d9f79f692b2`. Admin/API-flödet är inte testat end-to-end.
- **Databas:** `folktribunalen-db`, status `available`, kostnadsfri instans i Frankfurt med utgångsdatum 4 december 2026. `ipAllowList=[]`; en ny read-only `SELECT 1` nekas eftersom databasen blockerar alla externa anslutningar. Render anger lokal Render MCP eller en uttryckligen betrodd klient-IP i Networking som vägar framåt. Ingen öppen `0.0.0.0/0`-regel används.
- **Publiceringsspärr:** databasbaserad webbkö och adminpublicering är blockerade av den tomma IP-allowlisten. Ingen artikelpost har skrivits till databasen i denna körning.
- **Aktuell artikelkö:** huvudspår 1 ligger i PR #55 som komplett draft. PR #33 är stängd som supersederad. PR #7 är det separata Palantir Q3-/molnåtagandespåret. PR #42 är ett separat kortare GP-data-lobbyspår.
- **Fader Samir Daou:** PR #36 mergades till `main` den 11 november som en fil under `editorial/drafts`. Den är ett redaktionellt utkast, inte en publicerad artikel; den finns inte i den aktuella statiska `src/app.js`-versionen.

## Aktiva huvudspår

| Nr | Spår | Egen artikel / arbetstitel | Artikeltyp | Status 12 nov 2026 |
|---|---|---|---|---|
| 1 | **Palantir och den offentliga makten** | Palantir och den offentliga makten – NHS som stresstest för datakontroll | Granskning | **Komplett utkast i PR #55**, öppet draft för chefredaktörens granskning. PR #33 stängd som supersederad. PR #42 är en separat artikel om GP-data-lobbying; PR #7 är det separata Q3-/molnåtagandespåret. |
| 2 | **Vem bygger Europas AI-datacenter?** | Europas AI-infrastruktur: vem finansierar, äger och kontrollerar den? | Granskning | Flera delartiklar: Amsterdam/PR #13, politisk risk/PR #17, BRAIN++ Sofia/PR #24, Bull–Schwarz/PR #25, Norge/nätanslutning/PR #31, Anthropic/compute/PR #40 och Skellefteå/PR #43. Ingen sammanhållen huvudartikel ännu. Skilj europeiska projekt från amerikanska jämförelsefall. |
| 3 | **Synkronicitetsprotokollet** | Synkronicitet i algoritmernas spegel – mellan mening och mekanism | Metod/essä | Komplett första granskningsutkast i PR #38. Kräver metodavsnitt med reproducerbara observationer, alternativa hypoteser, felkällor och tydliga gränser mellan sammanträffande och kausalitet. |
| 4 | **Sofia – staden under staden** | Sofia före Sofia: stadens arkeologiska och religiösa lager | Kulturhistorisk granskning | PR #8 behandlar Samuil/Prespa, gravkontext och symboler. Huvudartikeln måste också samla musei-/utställningsmaterial och byggnadsarkeologi. Samuils ursprungliga gravtradition ska hållas vid Sankt Achilleios vid Prespasjön; flytta den inte till Sankt Sofia i Sofia utan belägg. |
| 5 | **Europas strategiska råvaror** | Urbergsskölden: Europas råvarusuveränitet, avfall och energiberoende | Granskning | Huvudutkast i PR #34; kompletterande Hautalampi/Eurobattery-case i PR #51. Behöver skilja CRMA-status, fyndighet, resurs, reserv, tillstånd, finansiering, nätanslutning och faktisk produktion. |
| 6 | **NVIDIA – när aktier blir säkerhet för lån** | NVIDIA som säkerhet: var går gränsen mellan aktiepant och GPU-finansiering? | Finansgranskning | PR #47 behandlar bolagsstyrning/exportkontroller; PR #14 och #23 behandlar AI-finansiering och kreditkedjor. Den specifika dokumenterade kedjan där NVIDIA-aktier ställs som säkerhet saknas fortfarande. Blanda inte aktiepant med GPU-/serverfinansiering. |
| 7 | **Det stora och det lilla fängelset** | Libanons kristna mellan två fängelser: Geagea, Gemayel, Syrien och kyrkan | Historisk/politisk granskning | PR #22 behandlar UNIFIL och södra Libanon; PR #39 behandlar presidentämbetets arkiv. PR #36 om mordet på Fader Samir Daou är en separat rätts-/regiongranskning som ligger som draft på `main`, inte huvudartikeln. Den sammanhängande historiska artikeln om Samir Geagea, Gemayel-familjen, Syriens närvaro och kyrkans roll återstår. |
| 8 | **Europa: Kyrkorna som överlevde imperierna** | Kyrkorna som överlevde imperierna: Wiesbaden, Warszawa och Prag | Kulturhistorisk serie | Inget komplett huvudutkast. Byggnadsakter, restaureringsdokument och församlingarnas primärhistorik måste samlas separat för varje stad; Sofia och Varna möjliga fortsättningar. |
| 9 | **Fennoskandien – urberget, skogen och hästen** | Fennoskandien: urberg, skog och häst som landskapets infrastruktur | Kulturhistorisk/ekonomisk essä | Delcase finns i PR #4 och #32 (Storsjö kapell/mark), PR #37 (Rottensjön) och PR #43 (Northvolt/EdgeConneX). Ingen bred huvudartikel ännu; geologi, skogsbruk, markrätt, arkeologi och hästkultur måste hållas samman med separata källserier.

## Separata projekt och serier

| Projekt | Planerad leverans | Status 12 nov 2026 |
|---|---|---|
| **ODJURET UR DJUPET** | Uppenbarelsebokens odjur ur havet, Storsjöodjuret, Frösöstenen och Peter Thiels egna föreläsningar om Antikrist | PR #28 behandlar Peter Thiel, Antikrist och AI-accelerationen. Den sammanhållna serien måste även få en separat, primärtextbaserad kontroll av Thiels föreläsningar, runologisk kontroll av Frösöstenen och belägg för Storsjöodjurets folkliga tradition. Den symboliska parallellen är central; historisk påverkan får inte påstås utan belägg. |
| **Storsjö kapell, Härjedalen – markförvärv** | Undersök rapporterade cirka 15 000 hektar kring Storsjö kapell och Cladonia Skog AB/Alex Karp-uppgiften | PR #4 och PR #32 innehåller separata granskningsutkast. Ägaruppgift och areal är inte fastställda i lagfart/fastighetsregister. Jämför fastighetsgränser med Fornsök, gravar, bronsålderslämningar, depåfynd, samfälligheter och lokala rättigheter. Håll helt åtskilt från Storsjön vid Östersund/Frösön. |
| **Skaga kapell** | Åtta delar: ursprung; Johannes Döparens huvud; björnfällarna; silverlöjan; jätten Skagas dotter/Ramunder; offerplatsen; rivningen; återuppbyggnad, brand och återinvigning | Åttadelad struktur definierad; komplett del 1 och arkivkällor återstår. Sägner ska märkas som lokal tradition, inte arkivfakta. |
| **Böckernas väg till Athos** | Serien om Sofia, klostren, bokhandel, Zograf och ortodox bildningstradition | PR #26 är ett separat utkast om 30 000 osmanska dokument och digitalisering. De fyra tidigare utkast som uppgavs ha skapats 5 november har inte återfunnits med exakta titlar/fulltexter. Återskapa dem inte från minnet. Äldre redaktionellt beslut: huvudplacering SVART HAV, korsreferens RÖD JORD. |
| **Från skrift till storebror** | Skrift, register, statistik, databaser och övervakning som maktens minne | Delutkast finns i PR #21 (svensk realtidsansiktsigenkänning), PR #41 (Arbetsförmedlingens AI-profilering), PR #45 (Kelas arbetsplatsövervakning) och PR #54 (eu-LISA/EES). En sammanhängande huvudartikel krävs; skilj lagstöd, pilot, faktisk driftsättning och tillsyn.

## Aktuella nyhetsspår

**Köregel:** De aktuella nyhetsspåren bevakas löpande, men de ersätter inte ordningen för de nio långsiktiga huvudspåren. Hormuz är fortsatt separat prioritet 6 i nyhetskön.

| Spår | Artikelvinkel | Status 12 nov 2026 |
|---|---|---|
| **Prioritet 6 – Hormuz och sjöfarten** | Hormuz: Irak söker en egen väg – men farleden är fortfarande osäker | Den samlade fullversionen är uttryckligen godkänd 11 november och koden finns på `main` i commit `8905e404...`. Render kör ännu `f52a144...`, så fullversionen är inte LIVE. PR #53 är ett separat uppföljningsutkast om fyra rapporter och fyra olika bevislägen. |
| **Maktförskjutningen i USA:s kongress** | Kongressen byter färg – men vem kontrollerar den tekniska makten? | PR #10 är ett granskningsutkast. Certifierade mandat, ledarskap, utskottsordföranden och faktisk maktövergång måste skiljas åt. |
| **Palantirs kvartalsrapport och AI-infrastruktur** | Palantir Q3: tillväxt, offentliga kontrakt och datacenterberoenden | PR #7 är ett separat Q3-/molnåtagandeutkast. Det är inte huvudspår 1-artikeln i PR #55. PR #42 är en separat GP-data-lobbygranskning. |
| **Svenska Gripen över Polen** | Fyra timmar i polskt luftrum – vad gjorde den svenska insatsen? | PR #12 behandlar Gripen, industri, AI-agenter och Kanadas villkorade plan. Den separata artikeln om den rapporterade patrullen över Polen är ännu inte färdig. Kräver polsk generalstabs originalpost, svensk Försvarsmaktskommentar och tydlig skillnad mellan patrull, incidentberedskap och stridskontakt. |

## Återkommande hyllning i varje utgåva

- Johannes Gutenberg – tryckkonst och spridning av skrift.
- Carl von Linné – vetenskaplig klassifikation och naturkunskap.
- Voltaire – filosofi, kritik och bildning.
- Sankta Paraskevi – andligt och kulturellt arv.
- Sankt Charbel – andligt och kulturellt arv.
- Vasilevski – **identiteten måste fastställas innan namn eller hyllning publiceras.**

## Nästa arbetsordning

1. **Huvudspår 1 – Palantir och den offentliga makten:** komplett utkast ligger i PR #55, draft och öppet för chefredaktörens granskning. PR #33 är stängd som supersederad. Ingen publicering före uttryckligt godkännande.
2. Efter godkännande: publicera via den redaktionella webbplatsen när admin- och databasåtkomst fungerar. Kontrollera att artikeln faktiskt visas LIVE innan nästa huvudspår påbörjas.
3. **Huvudspår 2 – Europas AI-datacenter** blir nästa artikel efter att huvudspår 1 har godkänts, publicerats och kontrollerats LIVE.
4. Därefter följer huvudspåren i den ordning chefredaktören angav: **3 Synkronicitetsprotokollet, 4 Sofia, 5 strategiska råvaror, 6 NVIDIA, 7 Libanon, 8 kyrkorna som överlevde imperierna, 9 Fennoskandien.**
5. Hormuz förblir separat prioritet 6 i nyhetskön. Den godkända fullversionen väntar på Render-deployment och faktisk LIVE-kontroll; den får inte användas för att hoppa över huvudspår 1–5.
6. Aktuella nyhetsspår och separata serier bevakas och får egna artikelposter, men produktion och publicering sker fortfarande en artikel åt gången.

## Redaktionell standard

- Primärkällor först: myndighetsbeslut, lagtext, domar, avtal, bolagsregister, upphandlingar, årsredovisningar, prospekt, originaldata och dokument.
- Oberoende källor ska pröva primärkällornas uppgifter; pressmeddelanden är avsändarens uppgifter, inte automatiskt oberoende bevis.
- Märk varje central uppgift som **belagt faktum**, **analys** eller **obekräftat/hypotes**.
- Ange datum, metod, källans begränsningar, öppna frågor och rättelser.
- Ge berörda parter möjlighet att bemöta konkreta uppgifter.
- Skilj Storsjö kapell i Härjedalen från Storsjön vid Östersund/Frösön.
- Ingen automatisk publicering. Varje artikel måste uttryckligen godkännas av chefredaktören och kontrolleras LIVE efter publicering innan nästa artikel påbörjas.


## Redaktionsinventering – 12 november 2026

- **PR #55:** huvudspår 1, Palantir och den offentliga makten. Komplett utkast med ingress, huvudtext, primärkällor, oberoende rapportering, bildförslag, faktakontroll och öppna frågor. Draft, inte godkänt och inte publicerat.
- **PR #33:** äldre Palantir/NHS-version stängd som supersederad av PR #55.
- **PR #7:** separat aktuellt nyhetsspår om Palantirs Q3, molnåtagande, kundfordringar och offentliga kontrakt. Draft.
- **PR #42:** separat granskningsutkast om Palantirs kontakter kring GP-journaler. Draft; håll lobbying åtskild från faktisk dataintegration.
- **PR #36:** Fader Samir Daou-artikeln är mergad till `main` under `editorial/drafts`. Den är ett utkast, inte en LIVE-artikel.
- **PR #10:** USA:s kongress och maktförskjutningen. Draft.
- **PR #16:** Breaking Watch-täckningsmatris uppdaterad 12 november. Draft.
- **PR #38:** Synkronicitetsprotokollet. Draft.
- **PR #34:** Urbergsskölden/CRMA. Draft.
- **PR #47:** NVIDIA:s bolagsstyrning och exportkontroller. Draft; aktiepantkedjan saknas fortfarande.
- **PR #4 och #32:** Storsjö kapell/Cladonia, separata utkast som kräver fortsatt fastighets- och fornlämningskontroll.
- **PR #53:** Hormuz-uppföljning med fyra rapporter och skilda bevislägen. Draft.
- **PR #1:** arkiv/dokumentbank med 26 äldre utkast; får inte batch-mergas.
- Fullständigt artikelpaket krävs för varje artikel: artikeltyp, rubrik, ingress, komplett sammanhängande text, primärkällor, oberoende källor, bildförslag, faktakontroll, öppna frågor och tydlig status.

## Hormuz – teknisk publiceringsspärr

Den fullständiga godkända texten finns i `editorial/drafts/2026-11-05-hormuz.md` och publiceringsvyn finns i `src/app.js` på `main` genom commit `8905e404ce621418d114991cdb99bbb093e1a7ea`. Render har ännu inte driftsatt den committen; senaste live-version är `f52a144...` från 11 november och innehåller den kortare versionen. Fullversionen är därför inte LIVE.

Databasens IP-allowlist är tom. Read-only SQL nekas eftersom externa anslutningar blockeras. Admin/API och DATABASE_URL är inte testade end-to-end, och ingen databaspost för fullversionen har skrivits. När admin- och databasåtkomst fungerar ska publiceringen ske via den redaktionella webbplatsen; därefter ska den faktiska publika artikelsidan kontrolleras innan nästa artikel startas.

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


## Statusuppdatering – 12 november 2026

- GitHub `main` innehåller fullversionens Hormuz-kod, men Render static service kör fortfarande commit `f52a144173118b00200657fcabb0bfd2de19abae`. Den nya fullversionen är inte LIVE.
- Render Postgres `folktribunalen-db` är `available`, men `ipAllowList=[]`; en ny `SELECT 1` nekades med beskedet att alla externa anslutningar blockeras. Gratisinstansen löper ut 4 december 2026.
- Redaktionell backend kör fortfarande deployment från 4 november, commit `6a835783553565f239864a9da7160d9f79f692b2`.
- PR #55 är öppen, draft och rapporteras som `mergeable_state=clean`; den innehåller huvudspår 1:s kompletta granskningsutkast. PR #33 har stängts som supersederad. PR #7 har tydliggjorts som det separata Q3-/molnåtagandespåret.
- PR #36:s Fader Samir Daou-text är mergad som redaktionellt utkast under `editorial/drafts`; den är inte införd som publicerad artikel i den statiska webbplatsen.
- Inga artiklar publicerades i denna uppdatering. Nästa redaktionella steg är chefredaktörens granskning av PR #55.
