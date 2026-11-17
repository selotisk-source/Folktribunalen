# FOLKTRIBUNALEN – Redaktionell masterplan och status

**Version:** 17 november 2026 – uppdaterad efter GitHub-, Render- och källkontroll  
**Arbetsregel:** En huvudartikel åt gången: research → komplett utkast → faktakontroll → redigering → godkännandekö → separat artikelgodkännande → publicering via redaktionens system → faktisk HTTP-kontroll av publik route.  
**Publiceringsspärr:** Ingen automatisk publicering, merge eller driftsättning. Varje enskild artikel kräver chefredaktörens uttryckliga LIVE-godkännande. Om admin eller databas är blockerad fortsätter arbetet i utkastet; publicering får inte ersättas med en parallell statisk kodväg.

## Aktuell arbetskontroll – 17 november 2026

### Aktiv huvudartikel och godkännandekö

- **Huvudspår 1 – Palantir och den offentliga makten:** PR #55 är mergad. Senast dokumenterade publika route-test gav HTTP 200 den 13 november 2026.
- **Huvudspår 2 – Europas AI-infrastruktur:** basversionen godkändes uttryckligen 15 november och PR #64 mergades. Den publika artikelsidan är fortfarande inte HTTP-kontrollerad. Kort-/slug-mismatch kvarstår: kortet med sluggen `europas-ai-infrastruktur` visar Meta/Ofcom-rubrik och ingress, medan artikelkroppen under sluggen är AI-infrastrukturtexten. Den uppdaterade versionen med Finland, Skellefteå, EuroHPC, Uniper och EBRD ligger i **Draft-PR #70** på grenen `editorial/europe-ai-infrastructure-update-2026-11-17-v2`, byggd från aktuell `main`. PR #70 är inte mergad eller publicerad och kräver ett nytt, uttryckligt godkännande eftersom texten har ändrats materiellt efter basversionens godkännande.
- **Äldre PR #68:** den första 17-novemberrevisionen är supersederad av PR #70, som bygger på aktuell `main` och innehåller samma tidigare uppdateringar plus Uniper/EBRD. PR #68 ska inte mergas.
- **Artikelordning:** huvudspår 2 är fortsatt den enda aktiva huvudartikeln. Huvudspår 3 – Synkronicitetsprotokollet (PR #38) – ligger kvar som nästa i den fastställda ordningen men får inte aktiveras förrän artikel 2 har publicerats via redaktionens system och den publika route:n faktiskt har kontrollerats.
- **Separat researchleverans – Skaga kapell:** PR #69 är Open/Draft och innehåller ett researchpaket för del 1 samt fem Skaga-evidensnoter, därutöver en separat BETUL 8-notering och tre Hormuz-noter. Detta är sidospårsresearch, inte en andra aktiv huvudartikel och inte en färdig artikel i godkännandekön.
- **PR #56 – Meta/Ofcom:** mergad 16 november; GitHub-kontrollen visar inga PR-kommentarer eller review submissions som styrker separat artikelbundet LIVE-godkännande. Meta/Ofcom finns i senaste live-deployens förstasida. Behandlas som publiceringsavvikelse som kräver chefredaktörens beslut om rättelse eller tillbakadragande.
- **PR #66 – Genève/autonoma vapen:** mergad 16 november och efterföljande frontendändringar finns på `main`, men ingen separat artikelbunden godkännandehandling har påträffats. Ändringarna ingår inte i senaste live-deployen vid senaste Render-kontrollen. Ingen ny deploy har gjorts.
- **Automationsspärr:** den dagliga utgivningsprompten uppdaterades 16 november med en artikel åt gången och artikelbundet godkännande före merge/deploy. Daily Desk och Redaktionsplan har motsvarande spärr. Inga automatiska LIVE-publiceringar ska ske.

### Teknik och publiceringsstatus

- **GitHub:** `selotisk-source/Folktribunalen`, huvudgren `main`. Senaste kontrollerade main-commit är `8805d536f589ec29a56e0a2bdb4314bc454a2ac8`. PR #70 är baserad på denna commit; PR #69 är separat Draft-research.
- **Publik statisk Render-tjänst:** `folktribunalen`, service `srv-dblpumgm7kps73bv55e0`, auto-deploy från `main`. Senaste kontrollerade live-deploy är `dep-dbt4qddg1s2s738p7bmg`, commit `a43f1579058824a36ccad6245d4616551505431e`, färdig 16 november 00:24:32 UTC. Ingen ny deploy har utlösts.
- **Redaktionell backend/admin:** service `srv-dblq2r0n74is73cchqh0`; senaste live-deploy är från 4 november, commit `6a835783553565f239864a9da7160d9f79f692b2`. HealthCheckPath är tomt. DNS-upplösning till adminhosten har misslyckats; ingen health-, login- eller artikelstatusrespons har erhållits.
- **Postgres:** `folktribunalen-db`, ID `dpg-dblq2fqfngtc73c0h9gg-a`, status `available`, men `ipAllowList=[]`. Read-only `SELECT 1` via hostad Render MCP nekas eftersom databasen blockerar alla externa anslutningar. Render anger lokal Render MCP eller en uttryckligen betrodd klient-IP som väg framåt. Öppna inte för alla adresser och använd inte `0.0.0.0/0`. Ingen DB-write har gjorts.
- **Publik route:** direkt hämtning av `https://folktribunalen.onrender.com/#/artikel/europas-ai-infrastruktur` har inte gett DNS-upplösning från web- och containerverktygen. HTTP-status och innehåll är därför inte fastställda; artikeln är inte LIVE-kontrollerad.
- **Deployspärr:** eftersom den publika tjänsten auto-deployar från `main` hålls alla pågående redaktionella ändringar i Draft-grenar. Ingen merge, manuell deploy eller DB-skrivning har gjorts i denna kontroll.
- **Nästa tekniska steg:** återställ säker Postgres-åtkomst via lokal Render MCP eller betrodd klient-IP; testa backendens health, autentisering och artikelstatusflöde; rätta metadata-/route-mismatch i redaktionens system; invänta separat godkännande av PR #70-versionen; publicera sedan via redaktionens admin och kontrollera HTTP-status, korrekt rubrik, ingress, fulltext och källor. Först därefter öppnas huvudspår 3.

## Aktiva huvudspår

| Nr | Spår | Egen artikel / arbetstitel | Artikeltyp | Status 17 nov 2026 |
|---|---|---|---|---|
| 1 | **Palantir och den offentliga makten** | Palantir och den offentliga makten – NHS som stresstest för datakontroll | Granskning | **PUBLICERAD LIVE.** PR #55 mergad; publik route HTTP 200 kontrollerad 13 nov. Daterat NHS-tillägg från 12 nov förbereds separat efter avslutad spår-2-cykel. |
| 2 | **Vem bygger Europas AI-datacenter?** | Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen? | Undersökande granskning | **Basversion godkänd och PR #64 mergad; uppdaterad version i Draft-PR #70.** Den nya versionen kräver nytt uttryckligt godkännande. Ingen LIVE-kontroll; route-mismatch och blockerad databasåtkomst kvarstår. |
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

- **Frölunda – ortnamnshistoria:** börja i originalbelägget **Frølanda 1436** och följ formerna genom 1500-talet, 1550 års Frölunda och 1886 års Västra-tillägg. Isofs tolkning är standardutgångspunkt: frö i betydelsen fruktbar/frodig + land, med senare -lunda-utveckling. Jämför Frösön, Fröslunda, Frösåker och Fröseke. Håll Västra och Östra Frölunda åtskilda; Frølvnda 1402 är ett separat belägg. 1313 får bara nämnas som möjlig parallell om identifikationen kan styrkas. Gudad namnshypotes får inte användas som slutsats utan originalkällestöd.
- **Cypern:** egen kulturhistorisk serie med Palaipafos och övergången från lokala fruktbarhetskulter till Afroditekulten; Geroskipou/Hieros Kipos; Asklepieion i Nea Pafos; Kungagravarna; och Commandaria. Pröva varje samband mot arkeologiska och textuella belägg; förutsätt inte obruten kultkontinuitet.
- **Varna och Svartahavsområdet:** separat regional bevakning om historia, kulturarv, stadsmiljö, kyrkor och regional utveckling. Koppla till Sofia och Svartahavsserien utan att slå ihop separata artiklar.
- **Framtid och teknik:** AI, infrastruktur, samhällsförändring, framtidsscenarier och teknikens konsekvenser ska vara ett eget återkommande spår, inte bara reaktioner på dagsnyheter.
- **Parkerade draft-ärenden:** PR #61 (SOU 2026:58/markrätt), #59 (Norrsundet/SMR), #58 (JEF:s nordliga flottor), #57 (retrospektiv ansiktsigenkänning), #53 (Hormuz-incidentuppföljning) och #52 (Siemens Energy/AI-elnät) är öppna granskningsärenden. De får inte tränga sig före den aktiva huvudartikelordningen. PR #65 om Kazakstans tungstenprojekt hör till huvudspår 5 och ligger som Draft. PR #10 om USA:s kongress och PR #7 om Palantirs kvartalsrapport ligger i nyhetsbevakningen som Draft-underlag. PR #12 är inte ett Gripen-utkast.
- **Hyllningskontroll:** Vasilevski är fortfarande oidentifierad. Namn, biografi och hyllningstext får inte publiceras innan personens identitet och relevanta bidrag har fastställts med källor.

## Aktuella nyhetsspår

| Spår | Artikelvinkel | Status 17 nov 2026 |
|---|---|---|
| **Hormuz och sjöfarten** | Hormuz: två separata UKMTO-varningar – och separata iranska minepåståenden | UKMTO Warning 207-26 (16 nov 05:58 UTC) anger att en utgående tanker träffades av okänd projektil och fick maskinrumsbrand; inga personskador, besättningen redovisad, skade-/miljöpåverkan okänd. Warning 208-26 (16 nov 19:00 UTC) gäller en tredjepartsrapport om tanker 7 nautiska mil norr om Khasab, obrukbart fartyg och maskinrumsbrand; besättningen uppgavs säker. Iranska flottans separata påståenden om tankfartyg som träffat minor är inte oberoende bekräftade och får inte automatiskt kopplas till 207/208. IMO:s senaste öppnade totalsiffra är fortfarande mer än 130 verifierade attacker och minst 25 döda till och med 11 nov; den siffran ska inte uppdateras utan ny IMO-post. PR #69 innehåller tre separata evidence notes. Källor: https://www.ukmto.org/-/media/ukmto/products/20261116-ukmto_warning_207-26.pdf · https://www.ukmto.org/-/media/ukmto/products/20261116-ukmto_warning_208-26.pdf · https://www.aljazeera.com/news/2026/11/17/tankers-hit-in-strait-of-hormuz-as-drone-raises-alarm-at-iraq-gas-field · https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-secretary-general-calls-for-enforcement-of-maritime-rules.aspx |
| **Svarta havet / Varna** | BETUL 8 sjönk i Bulgariens ekonomiska zon | 16 nov skickade BETUL 8 nödanrop omkring 40 nautiska mil sydost om Kap Kaliakra med 12 personer ombord och cirka 3 000 ton spannmål. Bulgariens transportministerium uppger att samtliga 12 evakuerades. Reuters hänvisar till maritima säkerhetskällor för uppgiften om sjödrönare; angripare och farkosttyp är inte fastställda i den officiella bulgariska information som kontrollerats. PR #69 innehåller separat evidence note; blanda inte ihop med Sulina-incidenterna 13–14 nov. |
| **Maktförskjutningen i USA:s kongress** | Kongressen byter färg – men vem kontrollerar den tekniska makten? | Senatens officiella dagsprogram för 17 nov anger fortsatt behandling av Capitos ersättningsändring SA 6883 efter cloture och att cloture har lämnats in på H.R. 2347. Programmet redovisar inte slutlig passage av BAAJA. H.R. 2347:s ursprungliga text är ett annat lagstiftningsfordon än den ersättningstext som behandlas; procedursteget får inte beskrivas som slutligt lagbeslut. Tidigare Vote 257 (73–25) och Vote 258 (62–21) var procedurbeslut. Källor: https://www.democrats.senate.gov/2026/11/16/schedule-for-tuesday-november-17-2026 · https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00257.htm · https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00258.htm |
| **Palantirs kvartalsrapport** | Q3: snabb tillväxt och stark USA-koncentration | Palantirs SEC 10-Q för kvartalet till 30 september 2026 redovisar intäkter på 2,313 miljarder USD mot 1,181 miljarder samma kvartal 2025 (+96 %). USA stod för 1,937 miljarder USD, 84 % av kvartalsintäkterna; övriga världen 376 miljoner USD. Bolagets tidigare Q3-kommunikation anger USA:s kommersiella intäkter 984 MUSD och USA:s myndighetsintäkter 953 MUSD. Detta är bolagsrapporterade siffror; bevaka kundkoncentration, kontraktens faktiska leverans och offentlig sektors beroende. Primärkälla: https://www.sec.gov/Archives/edgar/data/1321655/000132165526000048/pltr-20260930.htm |
| **Europas AI-infrastruktur** | Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen? | PR #70 är Draft och bygger på aktuell main. Nytt: Uniper anger cirka 700 MW säkrad nätkapacitet för datacenterprojekt i avancerad utveckling; bolagets karta visar projektområden i Storbritannien, Nederländerna, Tyskland och Skandinavien. FT rapporterar att ett första avtal var nära och två andra platser i avancerade samtal; inget undertecknat avtal har hämtats. EBRD:s rapportöversikt anger 485 TWh global datacenterförbrukning 2025 och att USA/Kina väntas stå för 78 % av kapacitetsökningen. Reuters återger att nästan hälften av EBRD:s verksamhetsländer saknar elnät för ett enda datacenter; detta är inte ett mått för EU enbart. Källor: https://www.uniper.energy/system/files/2026-11/Uniper_Capital%20Markets%20Day%20Presentation_November_2026.pdf · https://www.ebrd.com/home/news-and-events/publications/economics/transition-reports/transition-report-2026-27/chapters.html · https://www.ft.com/content/74756c50-cedb-4ff9-9cad-43abd5b0646d · https://www.reuters.com/business/finance/developing-economies-risk-missing-out-defence-ai-boom-ebrd-warns-2026-11-17/ |
| **Svenska Gripen över Polen** | Fyra timmar över Polen – Gripens uppdrag, tankflyget och Natos luftförsvar | 3 nov är fortfarande senaste dokumenterade enskilda patrulluppgift: Polska generalstaben uppgav över fyra timmars patrull-/skyddsuppdrag med tankflyg AA-332 MMF19. Direkt X-hämtning har gett 403; oberoende rapportering återger generalstabens post. Ingen ny officiell händelseuppgift identifierad 17 nov. Skilj Gripen-patrullen från Sveriges separata Patriotinsats i Polen. Källor: https://x.com/SztabGenWP/status/2117630867426144278 · https://defence24.pl/sily-zbrojne/tej-nocy-szwedzi-chronili-polskie-niebo-wspieral-je-tankowiec-nato · https://www.forsvarsmakten.se/aktuellt/nyheter/svenskt-luftvarn-till-natos-ostra-flank/ |
| **Meta/Ofcom och Genève/autonoma vapen** | Två separata aktuella artiklar | PR #56 och PR #66 är mergade. Ingen separat artikelbunden LIVE-godkännandehandling har påträffats i den aktuella GitHub-kontrollen. Meta/Ofcom finns i senaste live-deployens förstasida; Genève finns i senare main-commits men inte i senaste Render-deploy. Båda kräver chefredaktörens separata beslut. |

## Återkommande hyllning i varje utgåva

- Johannes Gutenberg – tryckkonst och spridning av skrift.
- Carl von Linné – vetenskaplig klassifikation och naturkunskap.
- Voltaire – filosofi, kritik och bildning.
- Sankta Paraskevi – andligt och kulturellt arv.
- Sankt Charbel – andligt och kulturellt arv.
- Vasilevski – **identiteten måste fastställas innan namn eller hyllning publiceras.**

## Nästa arbetsordning

1. Återställ säker Postgres-åtkomst via lokal Render MCP eller en uttryckligen betrodd klient-IP; öppna inte databasen för alla adresser.
2. Testa redaktionell backend/admin end-to-end: health, autentisering, artikelstatus och godkännandeflöde.
3. Rätta metadata-/route-mismatch i redaktionens publiceringssystem och hantera PR #56/#66:s publiceringsavvikelser enligt chefredaktörens beslut.
4. Invänta uttryckligt godkännande av just den uppdaterade AI-infrastrukturversionen i PR #70. Publicera därefter via admin när åtkomst fungerar och kontrollera faktisk publik route med HTTP-status och rätt innehåll.
5. Först efter LIVE-kontrollen av huvudspår 2 startas huvudspår 3 – Synkronicitetsprotokollet.
6. Behåll PR #69 som separat Skaga-research i Draft. Fortsätt källinsamling för övriga portföljspår utan att öppna en andra aktiv huvudartikel.


## Redaktionslogg – 17 november 2026, källuppdatering

- **PR #70:** uppdaterad version av huvudspår 2 på aktuell main. Innehåller tidigare faktauppdateringar om Finland, Skellefteå och EuroHPC samt nya avsnitt om Uniper och EBRD. Draft only; nytt artikelbundet godkännande krävs.
- **PR #69:** Skaga kapell del 1 – researchpaket och fem evidensnoter; BETUL 8 och tre separata Hormuz-noter. Detta är research, inte en komplett artikel eller godkännandekö.
- **Hormuz:** UKMTO 207-26 och 208-26 är två separata varningar. De iranska minepåståendena är separata partsuppgifter och får inte knytas till UKMTO-händelserna utan identifiering.
- **Svarta havet:** BETUL 8 sjönk i Bulgariens ekonomiska zon 16 november; alla 12 besättningsmedlemmar evakuerades enligt bulgariska myndigheter. Sjödrönare är sekundärt rapporterad orsak, inte fastställd gärningsperson.
- **USA:s kongress:** senatens 17-novemberprogram visar fortsatt procedurbehandling, inte slutlig passage av BAAJA.
- **Palantir:** SEC 10-Q bekräftar Q3-intäkter 2,313 md USD och 84 procent USA-andel.
- **Vasilevski:** identiteten är fortfarande inte fastställd; ingen biografi eller hyllning får publiceras innan detta är källbelagt.


## Historiska kontroll- och researchloggar – behållna för spårbarhet

Följande daterade anteckningar återges från den tidigare masterplanen. De är historik, inte aktuell status; den aktuella kontrollen och arbetsordningen står överst i dokumentet.

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
