# FOLKTRIBUNALEN – Redaktionell masterplan och status

**Version:** 17 november 2026, 02:35 EET – uppdaterad efter GitHub-, Render-, databas- och källkontroll  
**Arbetsregel:** En huvudartikel åt gången: research → komplett utkast → faktakontroll → redigering → godkännandekö → separat artikelgodkännande → publicering via redaktionens system → faktisk HTTP-kontroll av publik route.  
**Publiceringsspärr:** Ingen automatisk publicering, merge eller driftsättning. Varje enskild artikel kräver chefredaktörens uttryckliga godkännande av den version som ska publiceras. Om admin eller databas är blockerad fortsätter arbetet i utkastet; publicering får inte ersättas med en parallell statisk kodväg.

## Aktuell arbetskontroll – 17 november 2026

### Aktiv huvudartikel och godkännandekö

- **Huvudspår 1 – Palantir och den offentliga makten:** PR #55 är mergad. Artikeln är LIVE; route kontrollerades med HTTP 200 den 13 november 2026.
- **Huvudspår 2 – Europas AI-infrastruktur:** Basversionen godkändes uttryckligen av chefredaktören 15 november 2026 kl. 17:14:29 UTC i PR-kommentar 6898229000. PR #64 mergades 15 november kl. 22:57:44 UTC, merge-commit 45a9b8c2cc295b708afddcb739eb180318fd3052. PR-beskrivningens äldre status om ej godkänd/ej mergad är supersederad av chefredaktörskommentaren. Denna körning har kompletterat samma huvudartikel med primärkällor om LVV/Polisen i Finland, bygglov och delstartbesked i Skellefteå samt EuroHPC:s aktuella anbudsprocess. Revisionen ligger i Draft-PR #68 på grenen editorial/europe-ai-infrastructure-update-2026-11-17. PR:n ändrar endast masterplanen och den kanoniska artikeltexten; compare visar att grenen ligger före main och inte bakom. Den normaliserade PR-avläsningen och den senaste direkta GitHub REST-avläsningen har gett olika/ännu ej beräknade mergeability-värden; den senaste REST-avläsningen var mergeable=null och mergeable_state=unknown. Compare visar att grenen ligger före main och inte bakom. PR:n ligger kvar som Draft och har inte mergats. **Publik route är inte HTTP-testad och artikeln är inte LIVE-verifierad.** Artikelkortet med sluggen europas-ai-infrastruktur visar Meta/Ofcom-rubrik och ingress, medan artikelkroppen är Europas AI-infrastruktur.
- **Artikelordning:** Huvudspår 2 förblir den enda aktiva huvudartikeln tills redaktionell åtkomst fungerar och den faktiska publika route har kontrollerats LIVE. Huvudspår 3 – Synkronicitetsprotokollet, PR #38 – får inte påbörjas före den kontrollen.
- **PR #56 – Meta/Ofcom:** PR:n mergades 16 november kl. 00:23:49 UTC. Aktuell GitHub-kontroll visar 0 PR-kommentarer, 0 review submissions och 0 review threads. Inget separat artikelbundet LIVE-godkännande har påträffats. Senaste live-bundlen har en AI-infrastruktur-rubrik på förstasidan men länken går till Meta/Ofcom-routen; AI-kortet har Meta/Ofcom-rubrik och ingress. Den statiska HTML-fallbacken visar också Meta/Ofcom. **Publiceringsavvikelse utan påträffat godkännande; Meta/Ofcom-routen är mål för förstasidans länk i live-bundlen. Kräver chefredaktörens beslut om rättelse eller tillbakadragande.**
- **PR #66 – Genève/autonoma vapen:** PR:n mergades 16 november kl. 00:26:59 UTC. Därefter lades frontendkort, artikelrendering, huvudruteändring och cache-nyckel till i main genom commits 8259920, 780a6a2, c8ea8f3 och f9cb3ad. Aktuell GitHub-kontroll visar 0 PR-kommentarer, 0 review submissions och 0 review threads. Ingen separat artikelbunden godkännandehandling har påträffats. Commits efter senaste live-deploy ligger på main men ingår inte i senaste Render-deployen. Ingen publicering eller deploy har gjorts i denna körning.
- **Automationsspärr:** Den tidigare prompten för FOLKTRIBUNALEN – daglig utgivning uppdaterades 16 november kl. 06:15 UTC: en artikel åt gången, inget merge eller deploy utan artikelbundet uttryckligt godkännande, och ingen alternativ statisk publiceringsväg vid databasblockering. FOLKTRIBUNALEN Daily Desk och Folktribunalen – Redaktionsplan har motsvarande spärr.

### Teknik och publiceringsstatus

- **GitHub:** selotisk-source/Folktribunalen, huvudgren main. Senaste kontrollerade main-commit: b5dfa0375780d580bdcc21735f896a7e5cf6638b. Inga ändringar skrevs till main i denna körning.
- **Publik statisk Render-tjänst:** folktribunalen, service srv-dblpumgm7kps73bv55e0, auto-deploy vid commit på main. Senaste kontrollerade live-deploy: dep-dbt4qddg1s2s738p7bmg, commit a43f1579058824a36ccad6245d4616551505431e, färdig 16 november kl. 00:24:32 UTC. Ingen deployment för aktuell main-head hittades i listan 17 november 00:35 UTC. Ingen manuell deploy har utlösts.
- **Kodstatus:** senaste live-versionens artikelpost med ID europas-ai-infrastruktur visar Meta/Ofcom-rubrik och ingress, men har AI-infrastrukturens artikelkropp under samma slug. Förstasidan visar Meta/Ofcom som huvudartikel. main innehåller även senare Genève-commits som ännu inte finns i senaste live-deploy.
- **Redaktionell backend/admin:** folktribunalen-editorial, service srv-dblq2r0n74is73cchqh0. Senaste live-deploy är 4 november 2026, commit 6a835783553565f239864a9da7160d9f79f692b2. Servicekonfigurationen saknar healthCheckPath. DNS-upplösning till adminhosten misslyckades från både web- och containerverktyg; ingen health-, login- eller artikelstatusrespons har erhållits.
- **Postgres:** folktribunalen-db, ID dpg-dblq2fqfngtc73c0h9gg-a, status available, IP-allowlist tom, region Frankfurt, Free-plan. Read-only SELECT 1 AS connectivity_check testades 17 november och nekades med Render-felet att databasen blockerar alla externa anslutningar eftersom IP-allowlisten är tom. Render anger att hostad MCP saknar IP-adresser som kan allowlistas; använd lokal Render MCP eller en uttryckligen betrodd klient-IP i Networking. Använd inte 0.0.0.0/0. Ingen databaspost har skrivits.
- **Publik route:** direkt HTTP-försök mot https://folktribunalen.onrender.com/#/artikel/europas-ai-infrastruktur kunde inte genomföras eftersom hosten inte kunde DNS-upplösas från web- och containerverktygen. Ingen HTTP-status eller sidtext är fastställd. Artikeln är inte LIVE-kontrollerad.
- **Nästa tekniska steg:** återställ säker Postgres-åtkomst via lokal Render MCP eller betrodd klient-IP; testa adminens health, autentisering och artikelstatusflöde; åtgärda metadata-/route-mismatch i redaktionens publiceringssystem; publicera endast efter separat godkännande av den slutliga uppdaterade versionen; kontrollera sedan HTTP-status, korrekt rubrik, ingress, fulltext och källor. Först efter den LIVE-kontrollen öppnas huvudspår 3.

## Aktiva huvudspår

| Nr | Spår | Egen artikel / arbetstitel | Artikeltyp | Status 16 nov 2026 |
|---|---|---|---|---|
| 1 | **Palantir och den offentliga makten** | Palantir och den offentliga makten – NHS som stresstest för datakontroll | Granskning | **PUBLICERAD LIVE.** PR #55 mergad; publik route HTTP 200 kontrollerad 13 nov. Daterat NHS-tillägg från 12 nov förbereds separat efter avslutad spår-2-cykel. |
| 2 | **Vem bygger Europas AI-datacenter?** | Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen? | Undersökande granskning | **Basversion chefredaktörsgodkänd och PR #64 mergad; 17-novemberrevision i separat Draft-PR. Ej LIVE.** Ny kontroll av Finland, Skellefteå och EuroHPC införd i revisionen. Route-test blockerat av DNS-resolution; Postgres read-only test nekas av tom IP-allowlist; kort-/route-mismatch kvarstår. |
| 3 | **Synkronicitetsprotokollet** | Synkronicitet i algoritmernas spegel – mellan mening och mekanism | Metod/essä | PR #38 öppen Draft. Komplett första granskningsutkast; kräver reproducerbara observationer, alternativa hypoteser, felkällor och tydlig gräns mellan sammanträffande och kausalitet. Nästa huvudartikel först efter spår 2:s LIVE-kontroll. |
| 4 | **Sofia – staden under staden** | Sofia före Sofia: stadens arkeologiska och religiösa lager | Kulturhistorisk granskning | PR #8 öppen Draft och delutkast. Huvudartikeln behöver musei-/utställningsmaterial och byggnadsarkeologi. Samuils gravtradition ska hållas vid Sankt Achilleios vid Prespasjön; flytta den inte till Sankt Sofia i Sofia utan belägg. |
| 5 | **Europas strategiska råvaror** | Urbergsskölden: Europas råvarusuveränitet, avfall och energiberoende | Granskning | PR #34 och #51 öppna Draft; PR #65 om Kazakstans tungstenprojekt öppet Draft. Skilj CRMA-status, fyndighet, resurs, reserv, tillstånd, finansiering, nätanslutning och faktisk produktion. |
| 6 | **NVIDIA – när aktier blir säkerhet för lån** | NVIDIA som säkerhet: var går gränsen mellan aktiepant och GPU-finansiering? | Finansgranskning | PR #14, #23 och #47 öppna Draft. Den specifika dokumenterade kedjan där NVIDIA-aktier faktiskt pantsätts saknas fortfarande. Skilj aktiepant från GPU-/serverfinansiering och osäkrade konvertibla instrument. |
| 7 | **Det stora och det lilla fängelset** | Libanons kristna mellan två fängelser: Geagea, Gemayel, Syrien och kyrkan | Historisk/politisk granskning | PR #22 och #39 öppna Draft. PR #36 om mordet på Fader Samir Daou är publicerad som separat rätts-/regiongranskning, inte huvudartikeln om Geagea, Gemayel, Syriens närvaro och kyrkans roll. |
| 8 | **Europa: Kyrkorna som överlevde imperierna** | Kyrkorna som överlevde imperierna: Wiesbaden, Warszawa och Prag | Kulturhistorisk serie | Ingen komplett huvudartikel. Byggnadsakter, restaureringsdokument och församlingarnas primärhistorik behöver samlas separat för varje stad; Sofia och Varna är möjliga fortsättningar. |
| 9 | **Fennoskandien – urberget, skogen och hästen** | Fennoskandien: urberg, skog och häst som landskapets infrastruktur | Kulturhistorisk/ekonomisk essä | PR #4, #32, #37 och #43 innehåller delcase; PR #61 om markrätt är separat öppet Draft. Ingen bred huvudartikel ännu; geologi, skogsbruk, markrätt, arkeologi och hästkultur ska hållas samman med separata källserier. |

## Separata projekt och serier

| Projekt | Planerad leverans | Status 16 nov 2026 |
|---|---|---|
| **ODJURET UR DJUPET** | Uppenbarelsebokens odjur ur havet, Storsjöodjuret, Frösöstenen och Peter Thiels egna föreläsningar om Antikrist | PR #28 öppet Draft. Den symboliska parallellen mellan odjuren är central; historisk påverkan får inte påstås utan belägg. Kräver primärtextbaserad kontroll av Thiels föreläsningar, runologisk kontroll av Frösöstenen och källor till Storsjöodjurets folkliga tradition. |
| **Storsjö kapell, Härjedalen – Cladonia/Alex Karp** | Undersök rapporterade cirka 15 000 hektar, fastighetsgränser, fornlämningar, gravar, bronsålderslämningar, depåfynd, samfälligheter och lokala rättigheter | PR #4 och #32 öppna Draft. Ägare och areal är inte fastställda i lagfart/fastighetsregister. Håll helt åtskilt från Storsjön vid Östersund/Frösön. |
| **Skaga kapell** | Åtta delar: ursprung; Johannes Döparens huvud; björnfällarna; silverlöjan; jätten Skagas dotter/Ramunder; offerplatsen; rivningen; återuppbyggnad, brand och återinvigning | Åttadelad struktur definierad. Komplett del 1 och arkivkällor återstår. Sägner märks som lokal tradition, inte arkivfakta. |
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

| Spår | Artikelvinkel | Status 16 nov 2026 |
|---|---|---|
| **Hormuz och sjöfarten** | Hormuz: Irak söker en egen väg – men farleden är fortfarande osäker | IMO:s officiella sida anger mer än 130 verifierade attacker och minst 25 döda sjömän till och med den 11 nov. JMIC Update 113 är daterad 12 nov. Reuters 12 nov återger Irans påstående om fyra tankfartyg som träffats; Reuters kunde inte självständigt verifiera uppgiften. Al Jazeera 14 nov återger FN:s dödstal och Irans senare påstående om ytterligare tre fartyg. Håll varje händelse separat och partsuppgifter åtskilda från IMO:s verifierade incidentlista. PR #53 är ett separat uppföljningsutkast. Källor: https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-secretary-general-calls-for-enforcement-of-maritime-rules.aspx · https://www.ukmto.org/-/media/ukmto/products/jmic_advisory_update_113_12-nov.pdf · https://www.reuters.com/world/middle-east/two-oil-tankers-disabled-by-explosions-strait-hormuz-irgc-says-2026-11-12/ |
| **Maktförskjutningen i USA:s kongress** | Kongressen byter färg – men vem kontrollerar den tekniska makten? | Senatens senaste öppnade officiella Wrap Up är 12 nov. Vote 257 den 9 nov gav 73–25 för cloture om att gå vidare; Vote 258 den 10 nov gav 62–21 för motionen att gå vidare med H.R. 2347 som lagstiftningsfordon för BAAJA. Senatens Wrap Up 12 nov redovisar ingen slutlig passage av BAAJA. H.R. 2347:s ursprungliga text gäller skattebehandling av vissa skadestånd; BAAJA är ersättningstexten. Källor: https://www.democrats.senate.gov/floor/wrap-up · https://www.heinrich.senate.gov/imo/media/doc/substitute_amendment_to_bipartisan_american_affordability_and_jobs_act.pdf |
| **Palantirs kvartalsrapport och AI-infrastruktur** | Palantir Q3: tillväxt, offentliga kontrakt och datacenterberoenden | Palantir rapporterade 2 nov Q3-intäkter på 2,313 md USD, +96 % år/år. USA:s kommersiella intäkter var 984 MUSD (+148 %) och översteg för första gången USA:s myndighetsintäkter på 953 MUSD. Total kontraktsvolym (TCV) var 2,918 md USD, +6 %. Helårsprognosen höjdes till 8,530–8,534 md USD. Detta är bolagsrapporterade siffror; följ upp mot 10-Q och oberoende rapportering. Källor: https://www.nasdaq.com/press-release/palantir-reports-q3-2026-us-comm-revenue-growth-148-y-y-and-revenue-growth-96-y-y · https://www.reuters.com/technology/palantir-tops-third-quarter-revenue-estimates-strong-ai-software-demand-2026-11-02/ |
| **Europas AI-infrastruktur** | Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen? | PR #64 är godkänd basversion och mergad; 17-novemberrevisionen ligger separat i Draft. EuroHPC:s upphandling är Open med nya länkar; äldre anbud måste återskapas. Lot 2 3 dec 2026 kl. 17.00 CET, Lot 1 4 feb 2027 kl. 17.00 CET. Finland: LVV kräver vattenhanteringsplan och vattenlagstillstånd i Muhos; polisens förundersökning är preliminär. Skellefteå: bygglov för DC01/DC02 och rapporterat delstartbesked enbart för grundläggning; avtalad nätkapacitet okänd. Ingen publik route är LIVE-kontrollerad. |
| **Svenska Gripen över Polen** | Fyra timmar över Polen – Gripens uppdrag, tankflyget och Natos luftförsvar | Ingen ny officiell händelseuppgift identifierad i 16-novemberkontrollen. Behåll 3 nov som senaste dokumenterade enskilda patrulluppgift; uppdragets varaktighet och stöd av tankflyg är dokumenterade i befintligt källpaket. Antal Gripen är inte offentliggjort. |
| **Meta/Ofcom och Genève/autonoma vapen** | Två separata aktuella artiklar | PR #56 och PR #66 är mergade. Tidigare samtalskontroll fann inget separat uttryckligt LIVE-godkännande för någon av artiklarna. Meta/Ofcom finns i senaste live-deployens förstasida; Genève finns i senare commits på `main` men ännu inte i senaste Render-deploy vid kontrollen. Båda ska hållas utanför LIVE tills chefredaktören godkänner varje artikel separat. |

## Återkommande hyllning i varje utgåva

- Johannes Gutenberg – tryckkonst och spridning av skrift.
- Carl von Linné – vetenskaplig klassifikation och naturkunskap.
- Voltaire – filosofi, kritik och bildning.
- Sankta Paraskevi – andligt och kulturellt arv.
- Sankt Charbel – andligt och kulturellt arv.
- Vasilevski – **identiteten måste fastställas innan namn eller hyllning publiceras.**

## Nästa arbetsordning

1. Återställ säker Postgres-åtkomst via lokal Render MCP eller en uttryckligen betrodd klient-IP.
2. Rätta frontendens AI-kort-/sluggmismatch och reda ut den redan deployade Meta/Ofcom-posten samt de ännu ej deployade Genève-ändringarna i enlighet med chefredaktörens beslut.
3. Testa redaktionell backend/admin end-to-end.
4. Publicera huvudspår 2 via redaktionens system efter att den godkända artikeln är korrekt kopplad; testa faktisk publik route med HTTP-status och innehåll.
5. Först efter detta startas huvudspår 3 – Synkronicitetsprotokollet.
6. Därefter fortsätter huvudordningen 4–9. Palantir/NHS-tillägget hanteras som ett daterat separat tillägg efter spår 2-cykeln.

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


## Redaktionslogg – 17 november 2026, 02:35 EET

### Huvudspår 2 – fortsatt aktiv artikel
- Den aktuella masterplanen lästes först i denna körning. Huvudspår 2 är fortsatt den enda aktiva huvudartikeln. Huvudspår 3 (Synkronicitetsprotokollet, PR #38) har inte påbörjats.
- Basversionens chefredaktörsgodkännande finns i PR #64-kommentar 6898229000 (15 november 17:14:29 UTC). PR #64 är mergad; PR-beskrivningens tidigare status om ej godkänd/ej mergad är historisk och supersederad av godkännandekommentaren.
- Ny källkontroll har lett till sakuppdateringar i samma artikelutkast:
  - **Finland:** LVV:s 22 oktober-besked: Tuike uppgav att arbetena stoppats vid båda platserna 14 oktober; cirka nio kilometer diken planerades i Muhos, merparten redan utförd enligt bolagets anmälan; LVV kräver vattenhanteringsplan och vattenlagstillstånd. Polisen öppnade 29 oktober förundersökning efter fem utredningsbegäranden, enbart avseende Muhos; ingen skuld är fastställd.
  - **Skellefteå:** kommunens kungörelse bekräftar bygglov 24 september för DC02 och ändrad användning av DS4/FA03 till DC01. SVT:s samrådsuppgifter anger sju byggnader 96–150 MW vardera. Norran rapporterade 9 november ett delstartbesked 29 oktober som endast gäller grundläggning; själva beslutet är inte hämtat och fullständigt startbesked saknas.
  - **EuroHPC:** officiella upphandlingssidan står som Open; nya inlämningslänkar finns; äldre utkast och inskickade anbud kommer inte att beaktas. Lot 2 deadline 3 december 2026, Lot 1 4 februari 2027. 2EU rapporterar att testkraven uppdaterades till MLPerf v5.1 den 10 november; datumet för ändringen är sekundärkällebelagt eftersom full ändringshistorik inte hämtats.
- Den uppdaterade artikeln innehåller komplett huvudtext, bildförslag, primärkällor, oberoende rapportering, faktastatus och uppdaterade öppna frågor. Draft-PR #68 öppnades 17 november kl. 00:41:15 UTC. Två filer ändras; compare visar ahead och behind 0. Den normaliserade PR-avläsningen och senare REST-avläsningar har inte gett ett stabilt mergeability-värde; senaste REST-data returnerade mergeable=null och mergeable_state=unknown. Compare visar grenen före main och inte bakom. PR:n förblir Draft; uppdateringen är inte mergad och inte publicerad.

### Faktiska GitHub-/Render-statusar
- main vid kontroll: b5dfa0375780d580bdcc21735f896a7e5cf6638b. Inga ändringar skrevs till main i denna körning.
- Statisk Render-tjänst: senaste live deployment dep-dbt4qddg1s2s738p7bmg, commit a43f1579058824a36ccad6245d4616551505431e, avslutad 16 november 00:24:32 UTC. Ingen deployment för aktuell main-head hittades. Auto-deploy från main är aktiverad; denna körning gjorde ingen deploy.
- Live-kodkontroll: artikelkortet med ID europas-ai-infrastruktur visar Meta/Ofcom-rubrik och ingress, medan artikelkroppen under sluggen är Europas AI-infrastruktur. JavaScript-förstasidan visar AI-infrastrukturens rubrik men länkar till Meta/Ofcom-routen; den statiska HTML-fallbacken visar Meta/Ofcom. Route har inte HTTP-testats.
- Redaktionell backend: senaste live-deploy 4 november, commit 6a835783553565f239864a9da7160d9f79f692b2. HealthCheckPath är tomt. DNS-resolution för adminhosten misslyckades i web- och containerverktyg; ingen health- eller loginrespons har erhållits.
- Postgres dpg-dblq2fqfngtc73c0h9gg-a: available, men ipAllowList är tom. Read-only SELECT 1 AS connectivity_check nekades uttryckligen eftersom databasen blockerar alla externa anslutningar. Ingen DB-write gjordes.
- Publik route https://folktribunalen.onrender.com/#/artikel/europas-ai-infrastruktur: web- och containerförsök misslyckades med DNS-resolution; HTTP-status och innehåll är inte fastställda.
- PR #56 och #66 är mergade; båda har 0 kommentarer, 0 review submissions och 0 review threads. PR #56:s Meta/Ofcom-huvudartikel ligger i senaste live-deploy utan påträffat separat artikelbundet LIVE-godkännande. PR #66:s Genèvekod ligger på main men inte i senaste live-deploy. Inga åtgärder för rättelse, rollback, merge eller deploy har utförts i denna körning.

### Fortsatt ordning och blockerare
1. Behåll huvudspår 2 som enda aktiva huvudartikel.
2. Återställ säker Postgres-åtkomst via lokal Render MCP eller betrodd klient-IP; öppna inte databasen för alla adresser.
3. Testa adminens health, autentisering och artikelstatusflöde.
4. Åtgärda metadata-/route-mismatch i redaktionens publiceringssystem. Ingen alternativ statisk publiceringsväg.
5. Efter separat godkännande av den slutliga uppdaterade texten: använd redaktionens system och kontrollera den faktiska publika route med HTTP-status och rätt rubrik, ingress, text och källor.
6. Först efter den kontrollen får huvudspår 3 aktiveras.
