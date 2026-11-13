# FOLKTRIBUNALEN – Redaktionell masterplan och status

**Version:** 13 november 2026, 08:03 EET – efter LIVE-publicering av huvudspår 1 och redaktionell färdigställning av huvudspår 2  
**Arbetsregel:** En artikel åt gången: research → komplett utkast → faktakontroll → redigering → godkännandekö. Ingen automatisk publicering. Endast chefredaktörens uttryckliga godkännande får föra en artikel till LIVE. Statusavsnitten högst upp är aktuella; arbetsloggar längre ned bevaras som historik.

## Publicerings- och systemstatus

- GitHub-repo: https://github.com/selotisk-source/Folktribunalen
- Publik statisk webbplats: https://folktribunalen.onrender.com (Render service `folktribunalen`, ID `srv-dblpumgm7kps73bv55e0`).
- Redaktionell backend/admin: https://folktribunalen-editorial.onrender.com och https://folktribunalen-editorial.onrender.com/admin.html (Render service ID `srv-dblq2r0n74is73cchqh0`).
- **Publik statisk tjänst:** senaste live deployment är `dep-dbr6iilg1s2s73fiq0v0`, commit `f873ebfa9fbe637ad74dd7db662496c714090004`, avslutad 13 november 2026 kl. 01.35.25 UTC. Render status är `live`. Palantir-sidan har tidigare fått HTTP 200 i produktionstest.
- **Hormuz:** den aktuella `src/app.js`-versionen innehåller fulltexten, JMIC Advisory Note 113 och UKMTO 201–204. Render visar en live-deployment efter PR #62 och #63. Direkt route-kontroll av `#/artikel/hormuz-sjofart` kunde inte genomföras i den här körningen eftersom webbplatsens host inte var åtkomlig via webbläsarhämtningen; status är därför **deployment live, route-test ej avslutat**, inte fullständigt route-verifierad.
- **Palantir på publika sajten:** huvudartikeln `Palantir och den offentliga makten – NHS som stresstest för datakontroll` är publicerad och LIVE på https://folktribunalen.onrender.com/#/artikel/palantir-offentlig-makt. Artikelsidan kontrollerades 13 november 2026: HTTP 200, korrekt rubrik, ingress, huvudtext, primärkällor, oberoende rapportering och källuppdateringen 12 november. Förstasidans huvudruta pekar på artikeln.
- **Redaktionell backend:** senaste live deployment är fortfarande 4 november 2026, commit `6a835783553565f239864a9da7160d9f79f692b2`. Admin/API-flödet är inte testat end-to-end.
- **Databas:** `folktribunalen-db`, status `available`, kostnadsfri instans i Frankfurt med utgångsdatum 4 december 2026. `ipAllowList=[]`; en ny read-only `SELECT 1` nekas eftersom databasen blockerar alla externa anslutningar. Render anger lokal Render MCP eller en uttryckligen betrodd klient-IP i Networking som vägar framåt. Ingen öppen `0.0.0.0/0`-regel används.
- **Publiceringsspärr:** databasbaserad webbkö och adminpublicering är blockerade av den tomma IP-allowlisten. Ingen artikelpost har skrivits till databasen i denna körning.
- **Aktuell artikelkö:** huvudspår 1, PR #55, är chefredaktörsgodkänt, mergat och publicerat LIVE. Huvudspår 2 har ett reviderat komplett granskningspaket i PR #64, öppet som Draft, synkat mot `main` och väntar på chefredaktörens separata godkännande. Branchjämförelsen visar 1 commit före och 0 bakom `main`; GitHub rapporterar `mergeable: true`. PR #13, #17, #24, #25, #31, #40 och #43 bevaras som tidigare delutkast/källunderlag och har inte mergats eller publicerats genom PR #64. PR #33 är stängd som supersederad. PR #7 och #42 är separata Palantir-spår.
- **Fader Samir Daou:** PR #36 mergades till `main` den 11 november. Den nuvarande statiska koden behåller artikelkortet och artikeltexten med sluggen `samir-daou-jbeil`, markerad `PUBLICERAD 11 NOVEMBER 2026`. Publik länk: https://folktribunalen.onrender.com/#/artikel/samir-daou-jbeil. Den är en separat regional/rättslig artikel, inte huvudartikeln om Geagea, Gemayel, Syrien och kyrkan.

## Aktiva huvudspår

| Nr | Spår | Egen artikel / arbetstitel | Artikeltyp | Status 13 nov 2026 |
|---|---|---|---|---|
| 1 | **Palantir och den offentliga makten** | Palantir och den offentliga makten – NHS som stresstest för datakontroll | Granskning | **PUBLICERAD LIVE 13 nov 2026.** PR #55 mergad till `main`; publik artikelväg kontrollerad och källor öppnas. PR #33 stängd som supersederad. PR #42 är ett separat GP-dataartikelspår; PR #7 är Q3-/molnåtagandespåret. |
| 2 | **Vem bygger Europas AI-datacenter?** | Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen? | Undersökande granskning | **Reviderat komplett granskningsutkast i PR #64**, 13 nov 2026. Draft för chefredaktörens granskning; inte godkänt, inte mergat och inte publicerat. Samlar Amsterdam, Norge/NO3, Finland, Lanarkshire, Sofia/BRAIN++, Skellefteå/EdgeConneX, Bull/Schwarz Digits, protestvågen och EU:s föreslagna transparensram. Nscale:s Loughton och Kvandal behandlas som europeiska fall; Monarch i West Virginia markeras uttryckligen som amerikanskt jämförelsefall. Paketet innehåller bildförslag, primär- och oberoende källor, faktastatus och öppna frågor. PR #64 är fortsatt öppen Draft och väntar på chefredaktörens godkännande; ingen merge har gjorts. |
| 3 | **Synkronicitetsprotokollet** | Synkronicitet i algoritmernas spegel – mellan mening och mekanism | Metod/essä | Komplett första granskningsutkast i PR #38. Kräver metodavsnitt med reproducerbara observationer, alternativa hypoteser, felkällor och tydliga gränser mellan sammanträffande och kausalitet. |
| 4 | **Sofia – staden under staden** | Sofia före Sofia: stadens arkeologiska och religiösa lager | Kulturhistorisk granskning | PR #8 behandlar Samuil/Prespa, gravkontext och symboler. Huvudartikeln måste också samla musei-/utställningsmaterial och byggnadsarkeologi. Samuils ursprungliga gravtradition ska hållas vid Sankt Achilleios vid Prespasjön; flytta den inte till Sankt Sofia i Sofia utan belägg. |
| 5 | **Europas strategiska råvaror** | Urbergsskölden: Europas råvarusuveränitet, avfall och energiberoende | Granskning | Huvudutkast i PR #34; kompletterande Hautalampi/Eurobattery-case i PR #51. Behöver skilja CRMA-status, fyndighet, resurs, reserv, tillstånd, finansiering, nätanslutning och faktisk produktion. |
| 6 | **NVIDIA – när aktier blir säkerhet för lån** | NVIDIA som säkerhet: var går gränsen mellan aktiepant och GPU-finansiering? | Finansgranskning | PR #47 behandlar bolagsstyrning/exportkontroller; PR #14 och #23 behandlar AI-finansiering och kreditkedjor. Den specifika dokumenterade kedjan där NVIDIA-aktier ställs som säkerhet saknas fortfarande. Blanda inte aktiepant med GPU-/serverfinansiering. |
| 7 | **Det stora och det lilla fängelset** | Libanons kristna mellan två fängelser: Geagea, Gemayel, Syrien och kyrkan | Historisk/politisk granskning | PR #22 behandlar UNIFIL och södra Libanon; PR #39 behandlar presidentämbetets arkiv. PR #36 om mordet på Fader Samir Daou är publicerad i den statiska live-versionen som en separat rätts-/regiongranskning, inte huvudartikeln. Den sammanhängande historiska artikeln om Samir Geagea, Gemayel-familjen, Syriens närvaro och kyrkans roll återstår. |
| 8 | **Europa: Kyrkorna som överlevde imperierna** | Kyrkorna som överlevde imperierna: Wiesbaden, Warszawa och Prag | Kulturhistorisk serie | Inget komplett huvudutkast. Byggnadsakter, restaureringsdokument och församlingarnas primärhistorik måste samlas separat för varje stad; Sofia och Varna möjliga fortsättningar. |
| 9 | **Fennoskandien – urberget, skogen och hästen** | Fennoskandien: urberg, skog och häst som landskapets infrastruktur | Kulturhistorisk/ekonomisk essä | Delcase finns i PR #4 och #32 (Storsjö kapell/mark), PR #37 (Rottensjön) och PR #43 (Northvolt/EdgeConneX). Ingen bred huvudartikel ännu; geologi, skogsbruk, markrätt, arkeologi och hästkultur måste hållas samman med separata källserier.

## Separata projekt och serier

| Projekt | Planerad leverans | Status 13 nov 2026 |
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
| **Prioritet 6 – Hormuz och sjöfarten** | Hormuz: Irak söker en egen väg – men farleden är fortfarande osäker | Den samlade fullversionen godkändes 11 november. PR #62 och #63 är mergade; senaste statiska deployment är `f873ebfa...` och Render visar `live`. `src/app.js` innehåller JMIC Advisory Note 113 och UKMTO 201–204. Direkt route-test av den publika artikelsidan återstår eftersom hosten inte kunde hämtas via webbläsarverktyget. PR #53 är ett separat uppföljningsutkast med fyra skilda beviskedjor. |
| **Maktförskjutningen i USA:s kongress** | Kongressen byter färg – men vem kontrollerar den tekniska makten? | PR #10 är fortsatt Draft, uppdaterad 12 november. Senate Vote 257 (73–25) var cloture på motionen att gå vidare med H.R. 2347/BAAJA, inte slutlig passage. Jim Jordans interna konferensseger och House Roll Call 317 hålls åtskilda från plenarsalsbeslut och den nya kongressens tillträde 3 januari 2027. |
| **Palantirs kvartalsrapport och AI-infrastruktur** | Palantir Q3: tillväxt, offentliga kontrakt och datacenterberoenden | PR #7 är fortsatt Draft, uppdaterad 12 november, om Q3, molnåtaganden, kundfordringar och offentliga kontrakt. Det är inte huvudspår 1-artikeln i PR #55. PR #42 är en separat GP-data-/lobbygranskning. |
| **Svenska Gripen över Polen** | Fyra timmar över Polen – Gripens uppdrag, tankflyget och Natos luftförsvar | **Primärkällor identifierade:** Försvarsmakten 30 september bekräftar F 17:s tvåmånadersinsats från 1 oktober, huvudsakligen med basering i Sverige och flygoperationer i polskt luftrum; Polens försvarsministerium bekräftar NATO Air Policing. Polska generalstabens officiella X-post 3 november anger över fyra timmars patrull-/skyddsuppdrag och stöd av tankflygplan AA-332 MMF19. X-posten gav 403 vid direkt hämtning; Defence24 återger uttalandet 4 november och Aviation24 rapporterar samma händelse. Antal Gripen är inte offentliggjort. Defence24:s Alpha Scramble-tolkning ska märkas som sekundär bedömning. PR #12 gäller AI-agenter/industri/Kanada och är inte denna artikel. Eget utkast har inte startats före chefredaktörens beslut om PR #64. |

## Återkommande hyllning i varje utgåva

- Johannes Gutenberg – tryckkonst och spridning av skrift.
- Carl von Linné – vetenskaplig klassifikation och naturkunskap.
- Voltaire – filosofi, kritik och bildning.
- Sankta Paraskevi – andligt och kulturellt arv.
- Sankt Charbel – andligt och kulturellt arv.
- Vasilevski – **identiteten måste fastställas innan namn eller hyllning publiceras.**

## Nästa arbetsordning

1. **Huvudspår 1 – Palantir och den offentliga makten:** chefredaktören godkände 13 november 2026. PR #55 är mergad till `main`; artikeln är publicerad LIVE och den publika route:n är kontrollerad. PR #33 är stängd som supersederad.
2. Publiceringskontroll av huvudspår 1 är klar. Den statiska publika webbplatsen använder nu innehållet i `src/app.js`; databas/adminflödet är fortfarande separat och inte testat end-to-end.
3. **Huvudspår 2 – Europas AI-datacenter** har ett komplett sammanhållet första utkast i PR #64. Det väntar på chefredaktörens granskning. Ingen publicering och ingen LIVE-ändring har gjorts för spår 2.
4. Nästa huvudspår efter att huvudspår 2 har godkänts, publicerats och kontrollerats LIVE är **3 Synkronicitetsprotokollet**. Därefter följer 4 Sofia, 5 strategiska råvaror, 6 NVIDIA, 7 Libanon, 8 kyrkorna som överlevde imperierna och 9 Fennoskandien.
5. Hormuz förblir separat prioritet 6 i nyhetskön och ska hållas åtskilt från den nio-spåriga huvudordningen.
6. Aktuella nyhetsspår och separata serier bevakas och får egna artikelposter, men produktion och publicering sker fortfarande en artikel åt gången.

## Redaktionell standard

- Primärkällor först: myndighetsbeslut, lagtext, domar, avtal, bolagsregister, upphandlingar, årsredovisningar, prospekt, originaldata och dokument.
- Oberoende källor ska pröva primärkällornas uppgifter; pressmeddelanden är avsändarens uppgifter, inte automatiskt oberoende bevis.
- Märk varje central uppgift som **belagt faktum**, **analys** eller **obekräftat/hypotes**.
- Ange datum, metod, källans begränsningar, öppna frågor och rättelser.
- Ge berörda parter möjlighet att bemöta konkreta uppgifter.
- Skilj Storsjö kapell i Härjedalen från Storsjön vid Östersund/Frösön.
- Ingen automatisk publicering. Varje artikel måste uttryckligen godkännas av chefredaktören och kontrolleras LIVE efter publicering innan nästa artikel påbörjas.


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
6. **NVIDIA som lånesäkerhet:** PR #47 gäller styrelse/exportkontroll; PR #14 och #23 gäller AI-finansiering. En dokumenterad aktiepantkedja saknas fortfarande.
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
