# FOLKTRIBUNALEN – Redaktionell masterplan och levande status

**Version:** 9 november 2026, 01.47 Europe/Sofia  
**Chefredaktör:** användaren  
**Grundregel:** En artikel i taget. Research → komplett utkast → faktakontroll → redigering → separat godkännande. Efter godkännande publiceras artikeln via redaktionssystemet och kontrolleras LIVE innan nästa artikel påbörjas. Ingen automatisk publicering.

## 1. Publiceringsstatus och system

- GitHub: https://github.com/selotisk-source/Folktribunalen
- Render: https://folktribunalen-editorial.onrender.com
- Admin: https://folktribunalen-editorial.onrender.com/admin.html
- Render-service: `folktribunalen-editorial`, Frankfurt, autoDeploy aktiverat mot `main`.
- Senaste deployment i Render-listan: `dep-dblq3nafngtc73c0l87g`, commit `6a835783553565f239864a9da7160d9f79f692b2`, 4 november 2026. Senare GitHub-commits har ännu inte följts av en ny deployment i listan.
- Databasen `folktribunalen-db` är `available`, men dess IP-allowlist är tom. Databasen löper enligt Render ut 4 december 2026 om planen inte ändras.
- `DATABASE_URL`-mappningen i webbservicens miljö har inte kunnat läsas i tillgänglig servicevy. Databasfråga kunde inte genomföras i den schemalagda arbetsmiljön eftersom Render-verktyget krävde ett valt workspace. Ingen databaspost har skrivits i denna körning.
- Admin/API-vägarna har inte kunnat HTTP-testas från denna körning. Ingen artikel är dokumenterad som LIVE.
- **Säkerhetsåtgärd 6 november:** den tidigare publika sidan `utgava-001.html` och dess laddare togs bort från `main`. Den sidan kunde annars ha visat fulltext från en gren med ej godkända utkast. Startsidan visar nu nio redaktionella spår som pågående arbete, inte en publicerad utgåva. Förstasidans obekräftade Levski-citat och ersättningsnamnen Levski/Gemayel har tagits bort ur hyllningslistan.
- Startsidan och databasseed innehåller nu nio spårkort. Artikelvyerna är fortfarande arbets-/statussidor, inte färdigpublicerade artiklar.

### Godkännandekö

1. **Hormuz – aktivt granskningsärende:** [PR #3 – öppna utkastet](https://github.com/selotisk-source/Folktribunalen/pull/3). Kanonisk granskningsfil är `editorial/drafts/2026-11-05-hormuz.md`; `2026-11-06-hormuz.md` är märkt som arkiverad arbetsversion av samma artikel. Utkastet uppdaterades 7 november kl. 08.20 med Trumps uttalande om ett nytt begränsat angrepp mot Qeshm den 6 november, Qatars fortsatta medling, AP:s rapporterade tvådagars bryggförslag och Reuters uppgifter om Irans separata sjudagarsförslag. PR:n är fortfarande draft, inte mergad, inte publicerad och inte LIVE. Väntar på chefredaktörens granskning.
2. **Äldre dokumentbank:** [PR #1 – 26 äldre utkast](https://github.com/selotisk-source/Folktribunalen/pull/1). Den är uttryckligen markerad som arkiv och får inte mergas som en batch. Enskilda artiklar måste lyftas till separata granskningsärenden.
3. Webbplatsens databasbaserade godkännandekö är **inte tillgänglig ännu**. GitHub-PR #3 är en tillfällig, separat granskningspost – inte en bekräftad webbplatskö.

## 2. Aktiva huvudspår – nio egna artikelkrav

| Nr | Huvudspår | Utkast som finns | Vad som återstår innan spåret har en färdig egen artikel |
|---|---|---|---|
| 1 | **Palantir och den offentliga makten** | `2026-11-05-palantir-nhs-offentlig-makt.md` i PR #1 | Granska NHS-kontrakt, upphandlingsvillkor, datakontroll, exitvillkor och oberoende kritik. Q3 2026-resultatet är nu inlämnat till SEC i Form 10-Q den 3 november: omsättning 2,313 miljarder USD (+96 %), amerikansk kommersiell omsättning 984 miljoner mot 953 miljoner från amerikanska myndighetskunder; RPO 4,9 miljarder USD. Separat Q3-artikel saknas fortfarande. Viktig kontroll: många kundavtal kan sägas upp av bekvämlighetsskäl med mindre än tolv månaders varsel, och bolagets RPO-definition omfattar icke uppsägningsbara belopp. |
| 2 | **Vem bygger Europas AI-datacenter?** | Gigafabriker, AI-marknadstest, Anthropic/R&D och kreditkedjan finns som separata utkast i PR #1 | Sammanför inte planerade investeringar, kreditåtaganden och utbetalt kapital. Huvudartikeln måste kartlägga ägare, operatörer, el, nät, kylning, chip, finansiering och offentliga stöd. Aktuell jämförelsepunkt: Google köpte Crusoes pre-development-site i sydöstra Wyoming efter att Alphabet aviserat 17 miljarder USD i projektinvestering; Crusoe uppger mer än 6 GW kontrakterad kapacitet och över 40 GW i utvecklingspipeline. Reuters rapporterar även att OpenAI tänker fortsätta USA-expansionen trots kongresskiftet och har sagt att bolaget slutar använda NDA:er med offentliga tjänstemän vid diskussioner om framtida platser. Detta är amerikanska jämförelsefall, inte europeiska projekt. |
| 3 | **Synkronicitetsprotokollet** | `2026-11-05-synkronicitet-två-nya-teoretiska-modeller.md` | Slutför metodartikeln med reproducerbara observationer, alternativa hypoteser och tydliga gränser. Sammanträffande är inte i sig kausalitet eller bevis för påverkan. |
| 4 | **Sofia – staden under staden** | `2026-11-05-sofia-glomda-gudar-arkeologi.md` samt `2026-11-06-samuil-prespa-sofia-remains.md` | Slutför en egen stadsarkeologisk huvudartikel med musei-, utgrävnings- och byggnadsdokument. Tsar Samuils gravtradition måste hållas knuten till Sankt Achilleios vid Lilla Prespasjön; den får inte flyttas till Sankt Sofia i Sofia utan belägg. |
| 5 | **Europas strategiska råvaror** | Onkalo/RAKKA/litium samt Arctial- och Viscaria-relaterade utkast | Skilj fyndighet, resurs, reserv, tillstånd, finansiering, byggstart och faktisk produktion. CRMA-status är inte detsamma som ett finansierat eller driftsatt projekt. |
| 6 | **NVIDIA – när aktier blir säkerhet för lån** | AI-finansierings- och kreditkedjeutkast; NVIDIA/icke-kinesisk molnpolicy som separat delspår | Den centrala artikeln om **NVIDIA-aktier som lånesäkerhet** saknar ännu en egen dokumenterad låne-/pantkedja. Håll aktiepant åtskild från GPU-, server- och projektfinansiering. |
| 7 | **Det stora och det lilla fängelset – Libanons kristna historia** | `2026-11-05-libanon-unifil-kristna-syd.md` | UNIFIL-utkastet täcker inte hela den historiska artikeln. Geagea, Gemayel-familjen, Syriens närvaro och tillbakadragande, domar, amnesti och kyrkans roll kräver en separat sammanhängande historisk granskning med flera perspektiv. |
| 8 | **Europa: Kyrkorna som överlevde imperierna** | Referensmaterial sparat; inget komplett huvudutkast i PR #1 | Egen artikel krävs med byggnadsspecifika källor för Wiesbaden, Warszawa och Prag. Sofia och Varna kan bli fortsättningar. Skilj byggnadskontinuitet, liturgiskt bruk, församlingens överlevnad, skada och återuppbyggnad. |
| 9 | **Fennoskandien – urberget, skogen och hästen** | `2026-11-06-arctial-hastlandskap-energi-crma.md` som ett delcase | Arctial/Kvikant är inte en heltäckande fennoskandisk historia. En egen huvudartikel kräver separata geologiska, skogshistoriska, arkeologiska, ekonomiska och hästhistoriska källor. |

**Statusbedömning:** Spår 1–5 och 7 har minst ett delutkast i dokumentbanken, men inget är automatiskt färdigt eller godkänt. Spår 6 har relaterade finansieringsutkast men saknar en egen artikel om NVIDIA-aktier som lånesäkerhet. Spår 8 saknar komplett artikelutkast. Spår 9 har ett delcase men saknar den breda huvudartikeln. Inget av de nio spåren är LIVE.

## 3. Separata projekt och artikelserier

| Projekt | Befintligt material | Nästa nödvändiga arbete |
|---|---|---|
| **Storsjöodjuret / ODJURET UR DJUPET** | `2026-11-05-storsjo-thiel-antichrist-folklore.md` | Fördjupa Uppenbarelsebokens odjur ur havet, Storsjöodjuret, Frösöstenen och Peter Thiels egna föreläsningar om Antikrist. Den symboliska parallellen är central; historisk påverkan mellan traditionerna får inte påstås utan belägg. |
| **Storsjö kapell, Härjedalen – Cladonia Skog AB/Alex Karp** | `2026-11-05-storsjo-cladonia-15000-300ha.md` | Uppgiften om cirka 15 000 hektar är inte fastställd genom fastighetsregister i denna arbetscykel. Hämta lagfarter, bolagshandlingar och fastighetsgränser; jämför med Fornsök, gravar, bronsålderslämningar, depåfynd, samfälligheter och lokala rättigheter. Håll detta strikt åtskilt från Storsjön vid Östersund/Frösön. |
| **Skaga kapell – åtta delar** | Åttadelad struktur definierad | Skriv del 1 först och gå därefter vidare: (1) ursprung, (2) Johannes Döparens huvud, (3) björnfällarna, (4) silverlöjan, (5) jätten Skagas dotter/Ramunder, (6) offerplatsen, (7) rivningen, (8) återuppbyggnaden, branden och återinvigningen. Varje legend ska skiljas från arkivbelägg. |
| **Böckernas väg till Athos** | Fyra tidigare utkast uppgavs vara skrivna, men titlar och fulltext har inte återfunnits i nuvarande GitHub-gren. Tidigare källspår: *Църковен вестник*, årgång XVIII nr 10, 1–15 maj 2017; Bulgariens patriarkat; Zografklostrets webbplats. Ämnen som nämnts: Lovech-katedralen, metropolit Gabriel, Timotej Sakas, Paraklitosklostret, bulgariska katedraler, bokhandlar i Sofia och Zograf på Athos. | Återfinn de fyra tidigare texterna innan nya skrivs. Inventera exakta titlar, källor och status; skriv inte om dem från minnet. Redaktionell placering: SVART HAV, korsreferens RÖD JORD. |
| **Från skrift till storebror** | Två brittiska bevakningsutkast finns: Met Police/Auror och biometrisk ansiktsigenkänning | Gör en sammanhängande huvudartikel om hur skrift, register, statistik, databaser och biometriska system blir offentlig och privat kontrollinfrastruktur. Skilj lagstöd, pilotprojekt, faktisk driftsättning och upphandling. |

## 4. Aktuella nyhetsspår

| Nyhetsspår | Status | Redaktionell kontrollpunkt |
|---|---|---|
| **Hormuz och sjöfarten** | Konsoliderat utkast i PR #3, uppdaterat 7 november | IMO:s rådsmeddelande 6 november bekräftar 25 omkomna sjömän sedan konfliktens början och minst 130 verifierade attacker mot kommersiella fartyg i regionen; 130 gäller inte enbart Hormuz. UKMTO:s veckorapport No. 14 redovisar 11 rapporterade attacker under veckan till och med 4 november (åtta i sundet, tre i Persiska viken) och passager cirka 65 procent under förkonfliktnivån, med metodbegränsningar. Trump uppgav 6 november att USA genomfört ett nytt begränsat angrepp mot ett iranskt luftvärnssystem på Qeshm; AP och The Guardian återger uttalandet, men exakt mål/skadebild saknar separat offentlig operativ redogörelse i granskade källor. Qatar sade 7 november att medlingen fortsätter. AP:s rapporterade tvådagars bryggförslag från anonyma regionala tjänstemän hålls åtskilt från Irans eget sjudagarsförslag. Ingen offentlig bindande uppgörelse eller nytt verifierat passageprotokoll har identifierats. |
| **Maktförskjutningen i USA:s kongress** | `2026-11-05-kongressen-teknisk-makt-starshield-nvidia.md` finns i dokumentbanken | AP har kallat demokratiska segrar som ger partiet kontroll över både representanthuset och senaten (senaten 3 november kl. 23.36 ET, representanthuset 4 november kl. 01.24 ET enligt AP:s egen redovisning). Detta är nyhetsbyråns valbedömning, inte delstaternas slutliga certifiering. Artikeln måste skilja kommande majoritetskontroll från den sittande kongressens befogenheter fram till den nya kongressens tillträde. Kontrollera talmansval, senatens ledarskap, utskottsordföranden, nominationsmakten, budget, subpoena/utredningsbefogenheter och eventuella nära senatsval som ännu inte kallats. |
| **Palantirs kvartalsrapport och AI-infrastruktur** | Palantir/NHS-utkast och separat AI-kreditkedjeutkast finns | Skapa en egen Palantir-Q3-artikel. Kontrollera SEC-rapport, segment, guidning, offentliga kontrakt och vad som är bolagets egen beskrivning kontra oberoende belägg. |
| **Svenska Gripen över Polen** | Expressen-material 4 november mottaget; separat artikel väntar tills Hormuz är behandlad | Försvarsmaktens pressmeddelande 30 september säger att Flygvapnet genomför sin fjärde Nato-insats med stridsflyg från F17 och att F17 genomför sin andra Nato-insats. Detta får inte omformuleras till belägg för en fjärde stridskontakt. Polsk generalstabs post 3 november beskriver mer än fyra timmars patrull-/skyddsuppgift; exakt uppgift offentliggjordes inte. Originalpost: https://x.com/SztabGenWP/status/2117630867426144278. Försvarsmaktens bakgrund och insatsräkning: https://www.forsvarsmakten.se/kontakt/press-och-media/svenska-stridsflyg-i-ny-nato-insats/. Oberoende återgivning: https://defence24.pl/sily-zbrojne/tej-nocy-szwedzi-chronili-polskie-niebo-wspieral-je-tankowiec-nato. |
| **Saab AI-agenter och Gripen E** | Separat utkast i dokumentbanken | Håll det åtskilt från den polska luftförsvarsinsatsen. Ett industri-/teknikbesked bevisar inte operativ användning i Polen. |

## 5. Återkommande hyllning i varje utgåva

- **Johannes Gutenberg** – tryckkonst och spridning av skrift.
- **Carl von Linné** – vetenskaplig klassifikation och naturkunskap.
- **Voltaire** – filosofi, kritik och bildning.
- **Sankta Paraskevi** – andligt och kulturellt arv.
- **Sankt Charbel** – andligt och kulturellt arv.
- **Vasilevski** – identiteten är ännu inte fastställd. Ett tidigare meddelande innehöll också stavningen ”Vasil levski”, men den avsedda personen och kopplingen till hyllningen är inte tillräckligt fastställda i redaktionsunderlaget. Ingen person eller ersättningsidentitet publiceras innan detta är klarlagt.

Varje porträtt ska ha biografiska primärkällor, historisk kontext och autentiskt, spårbart citat om citat används.

## 6. Nästa arbetsordning

1. **Hormuz:** chefredaktören granskar PR #3. Komplettera de öppna primärkontrollerna om de blir tillgängliga. Ingen nästa artikel påbörjas innan Hormuz har godkänts, publicerats genom redaktionssystemet och kontrollerats LIVE.
2. **Gripen över Polen:** därefter separat artikel med polsk generalstabs originalpost, Försvarsmaktens kommentar, ledningskedja och tydlig skillnad mellan operativ patrull, incidentberedskap, scramble och stridskontakt.
3. **USA:s kongress:** slutför det befintliga utkastet efter val- och mandatkontroll.
4. **Palantir Q3/AI-infrastruktur:** separat artikel med SEC- och kontraktsdokument.
5. Därefter fortsätter de nio huvudspåren och serierna i turordning, ett granskningsärende åt gången.

## 7. Redaktionell standard

- Primärkällor först: myndighetsbeslut, lagtext, domar, avtal, fastighetsregister, upphandlingar, årsredovisningar, prospekt, SEC-rapporter och originaldata.
- Oberoende källor ska pröva primärkällorna; pressmeddelanden är avsändarens uppgifter, inte oberoende bevis.
- Märk centrala uppgifter som **belagt faktum**, **analys** eller **obekräftat/partsuppgift/hypotes**.
- Ange publiceringsdatum, händelsedatum, tidszon, metod och datagräns. Skilj prognos från utfall och plan från genomförande.
- Ge berörda parter möjlighet att bemöta konkreta uppgifter.
- Skilj Storsjö kapell i Härjedalen från Storsjön vid Östersund/Frösön.
- Korrigera fel öppet och behåll tidigare versioner i redaktionens historik.
- Ingen artikel blir LIVE utan chefredaktörens uttryckliga godkännande och efterföljande kontroll av den faktiska publicerade sidan.

## 8. Arbetslogg – 7 november 2026

- **Hormuz / PR #3:** faktaläget uppdaterat på samma granskningsgren. Ny rubrik: HORMUZ: 11 ATTACKER PÅ EN VECKA – 25 SJÖMÄN DÖDA, USA SLÅR TILL PÅ NYTT. Tillagt: presidentens offentliga besked om angrepp 6 november, Qatars medlingsuttalande 7 november, AP:s anonyma uppgifter om ett tvådagars bryggförslag och Reuters redovisning av Irans separata sjudagarsförslag. Utkastet är fortsatt draft; chefredaktörens godkännande saknas.
- **Palantir Q3:** SEC:s Form 10-Q för kvartalet till och med 30 september 2026 inlämnad 3 november. Primärkälla: https://www.sec.gov/Archives/edgar/data/1321655/000132165526000048/pltr-20260930.htm. Omsättning 2,313 miljarder USD, +96 % år/år; amerikansk kommersiell omsättning 984 miljoner USD mot 953 miljoner från amerikanska myndighetskunder; RPO 4,9 miljarder USD, varav bolaget väntar sig att redovisa cirka 44 % under kommande 12 månader. Avtal om molntjänster innebär minst 5,6 miljarder USD i åtaganden över tio avtalsår till februari 2036, med årliga minimibelopp 268–979 miljoner USD. Bolaget redovisar inga utestående skulder under sin revolverande kreditfacilitet per 30 september, men har en kreditram på 500 miljoner USD. RPO ska inte beskrivas som garanterad framtida omsättning: 10-Q anger att många kundavtal kan sägas upp för bekvämlighetsskäl med mindre än tolv månaders varsel. Oberoende rapportering: https://www.reuters.com/technology/palantir-tops-third-quarter-revenue-estimates-strong-ai-software-demand-2026-11-02/.
- **AI-infrastruktur:** Reuters rapporterade 6 november att Google förvärvat Crusoes pre-development-site i sydöstra Wyoming; Alphabet hade dagen före annonserat 17 miljarder USD i investering. Crusoe uppgav mer än 6 GW kontrakterad kapacitet och över 40 GW i utvecklingspipeline. Reuters rapporterade också att OpenAI avser fortsätta sin amerikanska datacenterexpansion och inte längre använda NDA:er med offentliga tjänstemän vid diskussioner om framtida platser. Källor: https://www.reuters.com/business/google-acquires-wyoming-data-center-site-ai-infrastructure-firm-crusoe-2026-11-06/ och https://www.reuters.com/business/retail-consumer/openai-press-ahead-with-data-center-expansion-despite-midterm-sweep-cfo-tells-2026-11-06/. Dessa är amerikanska jämförelsefall, inte belägg om europeiska anläggningar.
- **Kongressen:** AP:s metodredovisning säger att AP kallade senatskontrollen 3 november kl. 23.36 ET och representanthusets kontroll 4 november kl. 01.24 ET. Källor: https://www.ap.org/the-definitive-source/behind-the-news/calling-control-of-congress-in-the-2026-midterm-elections/ och https://apnews.com/article/f126e12e05b579a327b98481c0ae2226. Slutlig delstatscertifiering, nya utskottsordföranden och faktisk maktöverföring återstår att dokumentera.
- **Gripen över Polen:** fortsatt nästa artikel efter Hormuz. Den polska försvarsministeriets sida 30 september bekräftar att Gripen skulle börja operera i Nato Air Policing över Polen från oktober: https://www.gov.pl/web/obrona-narodowa/szwedzkie-mysliwce-gripen-wzmocnia-ochrone-polskiego-nieba. Den specifika flygningen 3 november kräver fortsatt kontroll mot polska generalstabens originalpost och Försvarsmaktens uppgifter. Denna artikel har inte påbörjats eftersom Hormuz ännu inte är godkänd och LIVE-kontrollerad.
- **Render / webbkö:** Renderstatus kunde inte uppdateras i denna körning: Render-verktygen svarade att ett workspace måste vara valt innan service-, deployment- och databasfrågor kan köras. Ingen workspace valdes i den icke-interaktiva körningen. Därför görs inget nytt påstående om aktuell deployment eller databasanslutning. Senast dokumenterade status i tidigare arbetslogg: gammal deployment från 4 november, tom IP-allowlist för Postgres, DATABASE_URL-mappning ej bekräftad; ingen webbkö eller LIVE-artikel bekräftad.
- **Nästa ordning:** Hormuz förblir enda aktiva artikelärende. Efter uttryckligt godkännande, publicering via webbplatsen och faktisk LIVE-kontroll blir Gripen över Polen nästa artikel. Inga andra artiklar startas före den spärren.


## 9. Breaking Watch – arbetslogg 8 november 2026 kl. 14.04 Europe/Sofia

### Täckningsmatris A–S

| Spår | Senaste kontroll / utfall | Status och nästa kontrollpunkt |
|---|---|---|
| **A. Palantir och offentlig makt** | Q3-10-Q och brittiska polis-/NHS-spår kvarstår. BCH-award publicerad 6 november; uppgivet tilldelningsdatum 9 oktober, femårigt avtal. Officiell Find a Tender-sida ger 403 i denna hämtning. | Ingen ny kontraktsförändring i denna cykel. Hämta originalaward och DPIA/upphandlingsbilagor när åtkomst fungerar. |
| **B. Europas AI-datacenter** | DataVita beskriver nu den aktuella DV4-designen som nätansluten; direkt förnybar anslutning anges som framtida möjlighet. Planeringsärende 26/01110/PPP har en energibilaga daterad 31 augusti 2026; PDF-hämtningen time-out. NWF:s garanti och CoreWeave-offtake är tidigare kända. | Skilj politisk vision om 1 GW förnybar direktanslutning från faktisk planeringsansökan och nätanslutning. Begär energibilaga, anslutningsavtal och PPA. |
| **C. Synkronicitetsprotokollet** | Ingen ny reproducerbar studie eller öppet dataset som passerar nyhetströskeln identifierat. | Fortsätt med metodkritik, preregistrering och alternativa förklaringar; inga kausalpåståenden från tidsmässiga sammanträffanden. |
| **D. Sofia – staden under staden** | Ingen ny arkeologisk rapport eller myndighetsbeslut om Sankt Sofia/Serdica. Samuils ceremoniella återföring och sarkofagfrågan är fortsatt senaste större dokumenterade händelse. | Följ musei-/ministeriedokument, föremålsproveniens och eventuell ny katalogisering; skilj gravkontext från ceremoniell förvaring. |
| **E. Strategiska råvaror** | SGU publicerade 5 november en detritisk zirkonstudie för metasedimentära bergarter i Västernorrland. Det är geologisk proveniensdata, inte en ny resurs eller reserv. | Knyt till regional geologisk modell; sök peer-review/oberoende replikation och eventuella senare prospekteringsbeslut. |
| **F. NVIDIA och AI-finansiering** | Financial Times identifierade 8 november Anthropic som köpare i en affär om cirka 1,7 GW Caterpillar-gasgeneratororder för cirka 3,4 md USD. Piper Sandler hade tidigare uppgett 3,39 md USD kontant och 1,74 GW kontrakterad utrustning utan att namnge köparen. | PR #29 öppnad som draft. Fastställ tillgångsöverföring, betalningsplan, projektbolag, finansiering, säkerheter, gasavtal och restvärdesrisk. 1,7 GW är beställd utrustning, inte verifierad driftkapacitet. |
| **G. Libanon och regional geopolitik** | Ingen ny verifierad kyrkoskada, beslagshändelse eller restaureringsorder identifierad. Israels president aviserar att Gadi Eisenkot ska få regeringsuppdrag 8 november kl. 17.00; regeringen är ännu inte bildad. | Följ den formella mandatgivningen och koalitionsavtalet; dra inga slutsatser om Libanonpolitik innan regeringsprogrammet är offentligt. |
| **H. Kyrkor som överlevt imperierna** | Ingen ny offentlig restaurerings-, ägande- eller bygglovshandling för Wiesbaden, Warszawa, Prag, Sofia eller Varna identifierad. | Fortsätt separat stadsvis kontroll mot kyrkoarkiv och kulturarvsregister. |
| **I. Fennoskandien – urberg, skog och häst** | SGU:s zirkondata i Västernorrland är den nya geologiska datapunkten. Ingen ny dokumenterad ändring i skogsbruk, hästavel eller markrättigheter passerade tröskeln. | Korskoppla geologi med historiska kartor, markanvändning och samiska rättigheter utan att anta obrutna traditioner. |
| **J. Storsjöodjuret** | Ingen ny oberoende observation, hydrologisk studie eller runologisk publikation identifierad. | Fortsätt hålla folklore, geologi och teologisk jämförelse åtskilda. |
| **K. Cladonia Skog / Storsjö kapell** | Ingen ny offentligt indexerad lagfart eller bolagshändelse identifierad i denna cykel. Direkt fastighetsutdrag från Lantmäteriet har inte hämtats. | Hämta fastighetsbeteckningar, lagfarter, servitut och avverkningsanmälningar innan ytterligare ägarpåståenden görs. |
| **L. Skaga kapell** | Ingen ny restaureringsorder, finansieringshandling eller arkivpublikation identifierad. | Fortsätt med RAÄ, länsstyrelse och kyrkoarkiv; håll legend och daterad byggnadsdokumentation åtskilda. |
| **M. Böckernas väg till Athos** | Ingen ny offentlig katalogisering, digitalisering eller verifierad donation identifierad i denna cykel. | Fortsätt proveniensspårning mellan Sverige, Bulgarien, Grekland och Athos. |
| **N. Från skrift till storebror** | Ingen ny lag, dom eller upphandling som ändrar rättsläget identifierad. | Följ genomförande och tillsyn, inte bara lagförslag eller produktlanseringar. |
| **O. Hormuz och sjöfarten** | UKMTO Warning 199-26: tankerbrand 7 november 19.20 UTC, cirka 8 nm NW Khasab, besättningen evakuerad. WAM uppger att 22 personer räddats från ett branddrabbat lastfartyg; AP säger att samma fartyg inte är fastställt. UKMTO Warning 200-26: separat utgående tanker träffad av okänt föremål; besättning säker, ingen miljöpåverkan rapporterad. | PR #3 uppdaterad med båda varningarna, räddningsuppgiften och tydliga identitets-/attribueringsluckor. Identifiera fartyg, IMO, flagg, rederi och P&I. |
| **P. USA:s kongress och institutionell makt** | Senatens schema anger cloture-vote på motion to proceed till H.R. 2347 den 9 november kl. 17.30 ET (23.30 Sofia). Det är en proceduromröstning, inte slutligt antagande av lag. | Följ utfallet och den faktiska lagtexten; skilj lagförslag, motion to proceed och antagen lag. |
| **Q. Gripen och Europas säkerhet** | Saab uppgav 3 november att egna AI-agenter flugits i Gripen E-försök. Saab offentliggjorde 6 november ett avtal med Naval Group värt cirka 2 md SEK för vapenkontrollsystem och sensorer till fyra svenska FDI-fregatter, leveranser 2027–2034. | AI-testet är partsuppgift utan publicerad oberoende testdata; skilj test från operativ förmåga. Fregattavtalet är ett Saab–Naval Group-avtal, inte en direkt beställning från Försvarsmakten. |
| **R. Strategisk energi och större bolag** | Saudiarabiens energiministerium uppger att splitter orsakat begränsad skada på en administrativ Aramco-byggnad i Riyadh; inga personskador. Ingen skada på oljeproduktion eller export är belagd. Spåret korskopplas till Anthropic och DataVita. | Följ Aramcos drift-/säkerhetsbesked, försäkring och eventuella produktionspåverkningar; skilj kontorsskada från energianläggning. |
| **S. Urbergsskölden – industri och infrastruktur** | Finland: GTK:s utforskningsprogram lämnades 12 september 2025 mot EU-frist 24 maj 2025; RAKKA:s offentliga gruvavfallslager lanserades 17 juni 2026 mot korrigerad databasfrist 24 november 2025. Lagändringen om GTK:s uppdrag godkändes 6 november och träder i kraft 15 november, inte det tidigare planerade 1 november. Operatörsstudier enligt CRMA artikel 27(3) ska in senast 24 november 2026. | PR #9 uppdaterad med tidslinje och möjlig efterlevnadsfråga. Formulera som dokumenterad tidsavvikelse, inte fastslagen överträdelse; kontrollera om tidigare databas uppfyllde artikel 27(4). |

### Nya och uppdaterade redaktionella arbetsobjekt

- **PR #3 – Hormuz:** tidigare användargodkänd huvudversion publicerad separat på main och Render-deployment markerad LIVE. PR #3 är en senare, utökad version och förblir draft, öppen, ej mergad och ej godkänd. Den har nu fått UKMTO 199/200 och Riyadh/Aramco-avsnittet.
- **PR #9 – Urbergsskölden/CRMA:** draft uppdaterad med de korrigerade EU-fristerna, GTK:s faktiska inlämnings-/publiceringsdatum, presidentens beslut 6 november, ikraftträdande 15 november och operatörsfristen 24 november.
- **PR #29 – Anthropic/gaskraft:** nytt draft skapat; öppet, ej mergat, ej godkänt och ej publicerat.
- **PR #16 – Breaking Watch:** denna matris är fortsatt granskningsunderlag; ingen merge.

### Webb- och databasstatus

- Render static site: deployment `dep-dbo6g9rrjlhs73ai5500`, commit `8e46f91e643be55cce6afed9ed6d05d5c9aae707`, status **LIVE** 8 november 2026 kl. 12.16.54 UTC. Huvudversionen av Hormuz-artikeln är märkt `PUBLICERAD 8 NOVEMBER 2026`.
- Repositoryns senaste publicerade version och PR #3:s senare draft är separata. PR #3 är inte mergad.
- Render Postgres: den hostade anslutningen avvisas eftersom IP-allowlisten är tom. Ingen databasbaserad köstatus kunde läsas.
- Direkt hämtning av den publika webbplatsen från aktuell webbläsarmiljö misslyckades. Render bekräftar deploymentstatus LIVE; separat visuell kontroll av sidans rendering är ännu inte genomförd.

### Nästa relevanta kontrollpunkter

1. UKMTO 199/200: identifiera fartyg, flagg och IMO; fastställ om WAM:s 22 räddade personer hör till 199-26.
2. Anthropic: sök transaktionsdokument, Caterpillar-order, tillgångsägare, gasavtal, utsläppstillstånd och säkerheter.
3. Finland: kontrollera Finlex-publiceringen av lagändringen och jämför RAKKA:s faktiska fält med CRMA artikel 27(4); följ operatörsstudierna fram till 24 november.
4. Israel: kontrollera om Eisenkot formellt får uppdraget kl. 17.00 och följ därefter koalitionsavtal.
5. USA:s senat: kontrollera cloture-omröstningen om H.R. 2347 den 9 november kl. 23.30 Sofia.


## Ny cykel 8 november 2026 kl. 15.09 Europe/Sofia – A–S och driftskontroll

### Betydande delta sedan 14.04

- **A – Palantir/NHS:** Utskottets protokoll från 4 november innehåller en viktig avtalsnyans. I fråga 235 beskriver Ben Coleman avtalet som löpande till slutet av mars och säger “It is not a break clause.” Detta är ledamotens beskrivning i förhöret, inte ersättning för signerad kontraktstext. Yvette Cooper säger att avtalsöversynen pågår. I fråga 245 säger Sir Jim Mackey att NHS ska kräva att Palantir delar och klarerar nyttopåståenden före publicering, men att avtalsbestämmelsen kan vara svår att genomdriva. Medierapporteringen 6 november om tvåårig förlängning är inte ett offentligt regeringsbeslut. PR #7 kompletterad. Källa: https://committees.parliament.uk/oralevidence/18242/html/
- **B/F – Anthropic/OnePWR:** Piper Sandlers officiella transaktionspost bekräftar försäljning av OnePWR:s kraftgenereringsplattform till ett onamngivet frontier-AI-laboratorium för cirka 3,4 md USD. FT identifierar köparen som Anthropic med hänvisning till en person med insyn. Reuters återger uppgiften 8 november kl. 12.54 UTC men säger uttryckligen att Reuters inte kunde verifiera den; Anthropic och OnePWR svarade inte på frågor. Köparidentiteten är därför inte offentligt transaktionsbekräftad. PR #29:s rubrik och kanoniska fil har ändrats till en attribuerad uppgift; 1,74 GW är kontrakterad utrustning/kapacitet, inte installerad eller driftsatt elproduktion. Källor: https://www.pipersandler.com/investment-banking-transactions/onepwr-solutions-20260901 · https://www.ft.com/content/41bf5c6a-9735-4f1a-a8e3-2bcccad58ba0 · https://www.reuters.com/business/energy/anthropic-secures-34-billion-generator-deal-ai-data-centers-ft-reports-2026-11-08/
- **G/P – Israel:** Presidentens kansli meddelade 7 november att Isaac Herzog avser ge Gadi Eisenkot uppdraget att bilda regering 8 november kl. 17.00. Vid kontrollen kl. 15.09 Sofia hade den formella ceremonin ännu inte ägt rum. AP och Guardian beskriver 48 oppositionsmandat, 53 för Netanyahus block och 19 arabiska partimandat samt koalitionshindren. Ingen ny regering är bildad vid denna kontroll. Källor: https://www.president.gov.il/en/president-herzog-concludes-consultations-and-announces-he-will-task-gadi-eisenkot-with-forming-a-government/ · https://apnews.com/article/bec07675825bee5895315e2ea1cb5751 · https://www.theguardian.com/world/2026/nov/07/israel-president-gadi-eisenkot-form-government
- **K – Cladonia/Storsjö:** Oberoende Nyheter publicerade 7 november en lokal uppföljning om jaktlag som uppges ha förlorat tillgång till tidigare jaktmarker, bland annat ett jaktlags tidigare cirka 3 500 hektar. Artikeln återger även uppgifter om vinteruppehåll i avverkning, ny skogsbruksplan och lokalt underhåll av stugor/vägar. Detta är en enskild sekundär rapport, inte jakträttsavtal, fastighetsutdrag eller myndighetsbeslut. PR #4 kompletterad med tydlig källmarkering och primärkontroller. Källa: https://oberoendenyheter.se/nyheter/alex-karps-skogskop-stoppar-algjakt-for-lokala-jaktlag
- **O – M/V Huda:** Reuters och AP återger CENTCOM:s uppgift att amerikanska styrkor den 7 november slog ut det St Kitts- och Nevis-flaggade lastfartyget M/V Huda i Omanbukten efter upprepade varningar och ett påstått försök att bryta blockaden. Detta bekräftar att CENTCOM lämnat uppgiften, inte en oberoende teknisk skadeundersökning. Kopplingen till UKMTO 198-26 är fortsatt en redaktionell matchning mot register/AIS, inte UKMTO:s egen namngivning. Reuters: https://www.reuters.com/world/middle-east/us-military-says-it-disabled-cargo-vessel-gulf-oman-2026-11-07/
- **O – UKMTO 199/200 och WAM:** UKMTO Warning 199-26 gäller enligt den återgivna varningen en tankerbrand cirka 8 nautiska mil nordväst om Khasab 7 november kl. 19.20 UTC och evakuering av besättningen. UKMTO:s officiella X-post identifierad men direkt hämtning gav 403; AP bekräftar separat att en brittisk maritim myndighet rapporterat tankerbrand nära Oman. WAM:s uppgift om 22 räddade personer avser ett onamngivet lastfartyg och är inte matchad till 199-26. Warning 200-26 återges i sekundär transkription som en separat tanker träffad av okänt föremål; direkt UKMTO-PDF och fartygsidentitet saknas. 200-26 hålls på lägre källsäkerhetsnivå. X-länkar: https://x.com/UK_MTO/status/2119357459471237504 · https://x.com/UK_MTO/status/2119379751207051560
- **O – Riyadh/Aramco:** Saudiarabiens energiministerium uppger att splitter från ett försök till angrepp 8 november orsakade begränsad skada på en administrativ Aramco-byggnad i Riyadh och inga personskador. Reuters reporter såg krossade fönster på flera våningsplan. Koalitionens uppgift om robotinterceptioner och attribuering till Houthierna är en partsuppgift; Houthierna hade inte tagit på sig händelsen vid Reuters publicering. Ingen skada på oljeproduktion, raffinering eller export är belagd. Källor: https://www.reuters.com/world/middle-east/loud-booms-heard-saudi-capital-riyadh-after-early-warning-alert-issued-2026-11-08/ · https://apnews.com/article/090d96e25872f5c63e105b9dd3e5dc60

### Täckningsmatris – A–S

| Spår | Resultat i denna cykel | Nästa kontrollpunkt |
|---|---|---|
| **A Palantir** | Ny avtalsnyans i parlamentets protokoll; signerad kontraktstext saknas. | Avtal, options-/uppsägningsschema, exitplan och skriftligt svar om nyttopåståenden. |
| **B AI-datacenter** | Anthropic/OnePWR har Reuters reservation; DataVita/Drax oförändrat sedan 14.04. | Köparbekräftelse, Caterpillar-orderlista, nätanslutning, miljötillstånd, driftsättning. |
| **C Synkronicitet** | Ingen ny reproducerbar primärstudie som ändrar metodläget. | Preregistrerade studier, öppna data, reproduktioner. |
| **D Sofia** | Ingen ny primär arkeologisk handling; Samuil-attributionen är fortsatt forskningsfråga. | Antropologisk rapport, proveniens och arkeologiska beslutshandlingar. |
| **E Mineraler** | CRMA/GTK-tidslinjen oförändrad sedan 14.04. | Tidigare finsk gruvavfallsdatabas; operatörsstudier senast 24 november. |
| **F NVIDIA/finansiering** | Ingen ny SEC-rapport; Anthropic-affärens köparidentitet kvalificerad. | Nscale-transaktion omkring 16 november; NVIDIA-resultat 17 november. |
| **G Libanon/regional geopolitik** | Eisenkot aviserad för formell mandatgivning kl. 17.00; ännu inte skett kl. 15.09. UNIFIL:s slutmandat 31 december 2026 kvarstår. | Formell mandatgivning, koalitionsförhandlingar, UNIFIL:s genomförandeplan, lokala civila/kyrkliga belägg. |
| **H Kyrkorna** | Ingen ny byggnads-, ägar- eller restaureringshandling. | Kommunala byggnadsarkiv och församlingarnas restaureringsbeslut. |
| **I Fennoskandien** | Ingen ny geologisk, skoglig eller hästhistorisk primärhandling. | SGU/GTK, skogsbruksplaner, fornminnesdata och hästavelns arkiv. |
| **J Storsjöodjuret** | Ingen ny oberoende observation eller vetenskaplig evidens. | Historiska vittnesmål, hydrologiska data och Thiels fullständiga primärkällor. |
| **K Cladonia/Storsjö** | Ny lokal rapportering om jaktlag, inga nya fastighets-/jakträttshandlingar. | Lantmäteriet, förvärvstillstånd, uppsägningsbrev, jaktupplåtelser, skogsbruksplan. |
| **L Skaga kapell** | Ingen ny restaurerings- eller arkivhandling. | Kyrkoarkiv, RAÄ, länsstyrelsebeslut och byggnadsarkeologi. |
| **M Athos** | MOmA-projektet med uppskattningsvis 30 000 osmanska dokument är senaste tydliga offentliga projektuppgift. | Katalogposter, digitaliseringsmetod, HTR-precision och proveniens. |
| **N Skrift till Storebror** | IMY:s uppdrag sedan 1 juli 2026 och lag 2026:806/807 kvarstår; ingen ny användningsanmälan identifierad. | IMY:s första anmälningar/årsrapport och domstols-/tillståndsbeslut. |
| **O Hormuz** | Huda/CENTCOM, UKMTO 199/200, WAM:s oidentifierade räddning och Riyadh/Aramco hålls som separata händelser. | IMO/UKMTO originaldokument, fartygs-IMO, flagg, rederi/P&I och Aramcos driftbesked. |
| **P USA:s kongress** | Ingen ny omröstning ännu. Cloture-vote om motion to proceed till H.R.2347 schemalagd 9 november kl. 17.30 ET / 23.30 Sofia. | Officiellt resultat och journal; skilj cloture från slutligt antagande. |
| **Q Gripen/säkerhet** | Saab-beskeden 3 och 6 november oförändrade; ingen ny operativ uppgift. | FMV/Saab-testprotokoll på offentlig nivå, leveransbesked, polsk generalstabs primärpost. |
| **R Energi/större bolag** | Vinnova/RefinyX och Northvolt-återbruk oförändrade; inga nya utfall. | Pilotresultat, tillstånd, utbetalning, faktisk materialkvalitet/produktion. |
| **S Urbergsskölden** | CRMA, RAKKA, GTK-lagändring och Onkalo oförändrade sedan 14.04. | Finlex-publicering, STUK:s förhandsinspektion, 24 november-fristen, offentlig civilinfrastrukturdata. |

### Redaktionella arbetsobjekt

- **PR #7 – Palantir/NHS:** kompletterad med utskottsprotokollets avtalsnyans och skillnaden mellan pågående översyn, medierapport om förlängning och faktisk kontraktstext.
- **PR #4 – Storsjö/Cladonia:** kompletterad med 7 november-rapporten om jaktlag, märkt som sekundär rapportering med primärkontroller kvar.
- **PR #29 – Anthropic/OnePWR:** kanonisk artikeltext uppdaterad med Reuters reservation; rubriken ändrad så köparidentiteten inte framställs som slutligt bekräftad.
- **PR #3 – Hormuz:** fortsatt draft. Den senare versionen innehåller 199/200 och Riyadh/Aramco, men har inte godkänts eller mergats.
- **PR #16 – täckningsmatris:** fortsatt draft; denna fil är arbetslogg, inte webbplatsens databasbaserade kö.

### Publicerings- och driftsstatus kl. 15.09

- **Render statisk webbplats folktribunalen:** senaste deployment dep-dbo6g9rrjlhs73ai5500, commit 8e46f91e643be55cce6afed9ed6d05d5c9aae707, status **LIVE**, avslutad 8 november kl. 12.16.54 UTC.
- Den deployade src/app.js innehåller Hormuzkortet, artikelkroppen och etiketten PUBLICERAD 8 NOVEMBER 2026. Den innehåller Huda och Task Force Iron Gate samt den tidigare saudiska varningen, men inte de senare UKMTO 199/200-uppgifterna eller skadan på Aramcos administrativa byggnad i Riyadh. Dessa finns i PR #3:s senare draft.- **UI-avvikelse:** startsidans statiska HTML har fortfarande texten “FÖRSTA UTGÅVAN UNDER ARBETE/PRODUKTION” samtidigt som Hormuzkortet i src/app.js är märkt publicerat. Detta bör harmoniseras i en separat webbändring.
- **Render editorial-service:** senaste deployment är dep-dblq3nafngtc73c0l87g, commit 6a835783553565f239864a9da7160d9f79f692b2, från 4 november. Ingen ny deployment finns i tjänstens deploylista.
- **Render Postgres:** databasen folktribunalen-db är available, men ipAllowList är tom. En read-only fråga misslyckades med felmeddelandet: “This database blocks all external connections because its IP allowlist is empty, so this tool can't reach it.” Databasens köstatus kan därför inte läsas.
- **Publik visning:** webbförfrågan till https://folktribunalen.onrender.com/ misslyckades i denna miljö med DNS-felet “Could not resolve host”. Render-status och GitHub-artefakt är kontrollerade; separat visuell webbläsarkontroll är inte genomförd.

### Nästa kontrollpunkter

1. Kl. 17.00 Sofia: kontrollera presidentens formella mandatgivning till Eisenkot.
2. Identifiera UKMTO 199/200-fartygen via IMO/flagga/rederi och håll WAM:s 22 räddade separat tills fartygsidentitet bekräftats.
3. Hämta kontraktstexten för NHS FDP och skriftligt svar om Palantirs effektpåståenden.
4. Begär köparbekräftelse och tillgångs-/betalningsunderlag för OnePWR-affären.
5. Kontrollera senatens cloture-resultat den 9 november kl. 23.30 Sofia.
6. Fortsätt primärkontroll av Cladonias lagfarter, jakträttsavtal och skogsbruksplan.


## Ny cykel 8 november 2026 kl. 17.52 Europe/Sofia – delta sedan 15.09

### Betydande nya eller korrigerade uppgifter

- **G – Libanon: mordet på den maronitiske prästen Samir Mikhael Daou.** Daou försvann 28 oktober och hittades död i sitt hus i Ain Jrain den 29 oktober. Libanons Internal Security Forces meddelade den 30 oktober att en misstänkt gripits och att utredningen fortsätter under rättslig tillsyn. **PRIMÄRKÄLLA återgiven av oberoende libanesisk press:** L’Orient Today uppger uttryckligen att ISF inte offentliggjorde den misstänktes identitet eller motiv. **PARTSUPPGIFT/OBEKRÄFTAD:** Fides och Vatican News återger lokala medieuppgifter om en 22-årig syrisk säsongsarbetare och ett påstått erkännande; detta är inte samma sak som ett offentliggjort polis- eller domstolsbesked. Inget belägg har hittats för religiöst motiv. Händelsen får inte beskrivas som ett antikristet attentat utan sådant belägg. Skilj den från prästen Pierre el-Rahis död i Al-Qlayaa den 9 mars 2026, som var en separat krigshändelse. Källor: https://today.lorientlejour.com/article/1552743/assassination-of-priest-samir-daou-isf-arrest-a-suspect.html · https://www.fides.org/it/news/78378 · https://www.vaticannews.va/de/kirche/news/2026-11/beirut-mord-an-maronitischen-priester.html

- **N – Från skrift till Storebror: brittisk migrationsmyndighets live-ansiktsigenkänning.** Home Offices samlingssida uppdaterades 22 oktober och den rättsliga mandatbeskrivningen 29 oktober; myndighetens egen ändringshistorik säger att programmet gått från proof of concept till pilot och att uppdateringen inte skapar nya verkställighetsbefogenheter. The Guardian rapporterade 4 november att policyunderlag öppnar för proaktiva insatser vid transportknutpunkter och särskilda evenemang, även för civilrättsliga migrationsöverträdelser som visumöverskridande. Detta är en möjlig användningsram, inte belägg för att sådana platser redan har övervakats. **PRIMÄRKÄLLA:** Home Offices publicerade resultat omfattar 18 registrerade insatser, samtliga vid Holyhead, med sammanlagt 10 264 registrerade ansikten, två korrekta positiva larm, två felaktiga larm, noll felaktiga ingripanden och ett registrerat arrest-/disposalutfall. Tabellen visar att larm och ingripande är skilda steg. **OBEROENDE BEKRÄFTELSE:** The Guardian beskriver den bredare planerade ramen och invändningar från rättighetsorganisationer. GOV.UK:s samlingssida säger att en DPIA-länk lades till 22 oktober, men den direkta DPIA-adressen gav HTTP 410 vid denna kontroll; fulltexten kunde därför inte granskas här. Källor: https://www.gov.uk/government/collections/live-facial-recognition-in-immigration-enforcement · https://www.gov.uk/government/publications/live-facial-recognition-deployment-records/live-facial-recognition-deployment-in-november-2025-accessible · https://www.theguardian.com/technology/2026/nov/04/uk-deploy-facial-recognition-biggest-ever-immigration-crackdown

- **E/S – Finland, Viiankiaava/Sakatti och Natura 2000.** Miljöministeriet meddelade 16 oktober att Lapplands förbund måste komplettera ansökan om undantag från Natura 2000-skyddet senast 31 januari 2027. Begäran följer på utlåtanden från Lupa- ja valvontavirasto och Metsähallitus den 2 oktober, som bedömde kompensationsplanen som otillräcklig för flera skyddade naturtyper och arter. Europeiska kommissionens miljödirektorat begärde 9 oktober ytterligare uppgifter, bland annat årliga brytningsvolymer för metaller för att kunna bedöma projektets betydelse i förhållande till ett tvingande allmänintresse. **PRIMÄRKÄLLA:** finska miljöministeriet, Metsähallitus och tillsynsmyndigheten. **OBEROENDE BEKRÄFTELSE:** Yle rapporterade samma process och förklarade att projektet kräver fler plan- och miljöbeslut. Detta är en begäran om komplettering, inte ett slutligt avslag eller ett gruvtillstånd. Projektet kan inte gå vidare utan regeringens godkännande av den aktuella regionala planen. Källor: https://valtioneuvosto.fi/en/-/1410903/ministry-of-the-environment-requests-regional-council-of-lapland-to-supplement-application-for-derogation-from-natura-2000 · https://www.metsa.fi/tiedotteet/metsahallitus-sakatin-kaivoshankkeen-natura-korvaussuunnitelma-ei-riita-taysimaaraisesti-korvaamaan-kaikkia-viiankiaavan-heikennyksia/ · https://api.sttinfo.fi/tiedote/72381474/lupa-ja-valvontavirasto-sakatin-kaivoshankkeen-natura-2000-verkostolle-aiheutuvien-heikennysten-korvaamista-koskevaa-suunnitelmaa-on-taydennettava?publisherId=69821631

- **S/R – Finland–Sverige, forskningsbränsle och slutförvaring.** Finlands lag 936/2026 utfärdades 29 oktober och publicerades i Finlex 2 november. Den ger lagkraft åt den bilaterala överenskommelsen om slutförvaring i Sverige av använt kärnbränsle som sänts dit för forskningsändamål och av radioaktivt avfall från just den forskningen. **PRIMÄRKÄLLA:** Finlex 936/2026. § 3 anger att lagens ikraftträdande ska bestämmas genom statsrådets förordning; den separata ikraftträdandeförordningen har inte identifierats i denna kontroll. Detta är en avgränsad forskningsöverenskommelse, inte ett generellt tillstånd att exportera finskt kommersiellt kärnbränsleavfall till Sverige. Källa: https://www.finlex.fi/sv/lagstiftning/2026/936

- **O – Hormuz: UKMTO Warning 197-26 har nu hämtats som originalhandling.** Händelsen inträffade 5 november 2026 kl. 22.00 UTC, cirka 16 nautiska mil öster om Khasab. Befälhavaren på ett utgående tankfartyg rapporterade en explosion vid vattenlinjen på babordssidan. Besättningen var säker och fartyget fortsatte för egen maskin. Varningen publicerades 6 november kl. 12.13 UTC och anger källan som Master. **PRIMÄRKÄLLA:** UKMTO Warning 197-26. Den anger inte fartyg, IMO-nummer, flagg, orsak eller ansvarig aktör. Den ska hållas separat från 198-26 (bulkfartyg/militära styrkor öster om Khor Fakkan), 199-26 (brand på tanker nordväst om Khasab) och 200-26 (okänt föremål mot utgående tanker). Ingen av dessa varningar får slås samman till en enda fartygshändelse utan identifierande belägg. Källa: https://www.ukmto.org/-/media/ukmto/products/20261106-ukmto_warning-197-26.pdf?rev=c53718e903cc45659052993058647de4

- **D – Sofia/Samuil: forskningsfrågan om identiteten är fortsatt öppen.** BTA:s redogörelse 8 oktober anger att de kvarlevor som tillskrivs Samuil hittades i sarkofag Gamma vid basilikan St Achillios på ön i Lilla Prespasjön; de undersöktes i Thessaloniki och överfördes till Bulgarien den 3 oktober, varefter de placerades i en särskilt tillverkad sarkofag i Sankt Sofia i Sofia. BTA uppger att DNA, radiokoldatering och isotopanalyser planeras och att publicering i ett optimistiskt scenario kan dröja två till tre år. **OBEROENDE VETENSKAPLIGT MOTBELÄGG:** Marina Toumpouris studie från 2024 argumenterar att de utgrävda elementen inte ger belägg för koppling till Samuil och pekar i stället mot biskop Theofrastos som möjlig historisk koppling till återuppbyggnaden av basilikan. **STÖD FÖR ATTRIBUTIONEN:** Yordan Yordanovs antropologiska studie från 2010 argumenterar att skelettets vänsterunderarmsskada, ålder och övriga arkeologiska/historiska data starkt stöder Moutsopoulos identifiering. Den nya ceremonin i Sofia är inte i sig ett nytt arkeologiskt bevis. Den arkeologiska kryptan under Sankt Sofia i Sofia måste hållas åtskild från den ursprungliga gravkontexten vid St Achillios i Prespa. Källor: https://www.bta.bg/en/news/culture/1220275-preliminary-examination-of-tsar-samuel-s-remains-reveals-chronic-illnesses-seve · https://zenodo.org/records/12574392 · https://www.iempam.bas.bg/journals/acta/acta_16.pdf

### Täckningsmatris A–S – denna cykel

| Spår | Status i denna cykel | Nästa kontrollpunkt |
|---|---|---|
| A Palantir | Q3-10-Q och NHS-förhöret redan dokumenterade i PR #7; inget nytt delta sedan 15.09. | Signerad NHS-kontraktstext, optioner, uppsägningsvillkor och granskningsrätt. |
| B AI-datacenter | Drax/Bull-Schwarz/DataVita redan dokumenterade; ingen ny formell ansökan eller driftstart i denna cykel. | DataVita energibilaga, nätanslutning, tenant och driftsatt effekt. |
| C Synkronicitet | Ingen ny reproducerbar studie eller kausal evidens. | Preregistrering, öppna data och oberoende replikation. |
| D Sofia | Samuil-attributionen får en tydligare vetenskaplig motvikt; inga nya utgrävningsbeslut. | DNA/radiokoldatering, ursprunglig utgrävningsjournal och jämförelse av 2010/2024-studierna. |
| E Mineraler | Viiankiaava/Sakatti kompletteringskrav är den nya regulatoriska utvecklingen. | Komplettering 31 januari 2027 och kommissionens bedömning av allmänintresse. |
| F NVIDIA/finansiering | Ingen ny SEC-rapport sedan föregående kontroll; befintlig garanti- och åtagandekedja kvarstår. | NVIDIA Q3-resultat och nya kredit-/säkerhetsdokument. |
| G Libanon | Mordet på Samir Daou och gripandet av misstänkt är en ny, verifierbar kristen samhällshändelse; motivet är inte offentliggjort. | ISF-/domstolsuppgifter, motiv, rättsligt åtal och eventuella lokala repressalier. |
| H Kyrkor | Ingen ny byggnads-, ägar- eller restaureringshandling. | Kommunala byggnadsarkiv och församlingsbeslut. |
| I Fennoskandien | Ingen ny geologisk, skoglig eller hästhistorisk primärhandling. | SGU/GTK, skogsbruksplaner, fornminnesdata och hästavelns arkiv. |
| J Storsjöodjuret | Ingen ny oberoende observation eller fysisk evidens. | Historiska vittnesmål, hydrologi och fullständiga primärkällor till Thiels uttalanden. |
| K Cladonia/Storsjö | Ingen ny fastighets- eller jakträttshandling; 7 november-rapporteringen är fortsatt sekundär. | Lantmäteriets lagfarter, köpekontrakt, upplåtelseavtal och skogsbruksplan. |
| L Skaga kapell | Ingen ny restaurerings- eller arkivhandling. | Kyrkoarkiv, RAÄ och länsstyrelsebeslut. |
| M Athos | MOmA:s 30 000 osmanska dokument är redan dokumenterade i PR #26. | Katalogposter, HTR-precision och proveniens. |
| N Skrift till Storebror | Home Office LFR har gått från proof of concept till pilot; publicerade resultat är fortfarande begränsade till Holyhead. | DPIA-fulltext, första deployment utanför Holyhead, extern tillsyn och rättsliga överklaganden. |
| O Hormuz | UKMTO 197-26 originalhandling tillförd; 198/199/200 hålls separata. | IMO/flagga/rederi/P&I för varje varning, särskilt 197-26. |
| P USA:s kongress | Midtermresultaten redan dokumenterade; ingen ny lagstiftningsomröstning i denna kontroll. | Officiella valresultat, utskottskontroll och 120:e kongressens tillträde 3 januari 2027. |
| Q Gripen | 16 Gripen E-kontraktet för Ukraina och industrispåren redan dokumenterade. | FMV/Saab-leverans- och finansieringshandlingar; inga känsliga operativa detaljer. |
| R Energi/större bolag | Drax/Northvolt redan dokumenterade; lag 936/2026 är ny, forskningsspecifik svensk-finsk avfallsram. | Statsrådets ikraftträdandeförordning och Posiva/STUK:s offentliga forsknings- och tillståndsbesked. |
| S Urbergsskölden | Sakatti/Viiankiaava och lag 936/2026 tillför nya tillstånds- och gränsöverskridande frågor. | CRMA/GTK-lagstiftningens slutliga status, Natura-komplettering och ikraftträdandeförordning. |

### Redaktionella arbetsobjekt

- **PR #3 – Hormuz:** kanonisk draft kompletteras med UKMTO 197-26 som separat, officiell incident. PR #3 är fortsatt draft, öppen, ej mergad och ej godkänd.
- **PR #16 – täckningsmatris/masterplan:** denna cykel har lagts till på granskningsgrenen. PR #16 är fortsatt draft, ej mergad och ej publicerad.
- **Nya artikelidéer, inte nya PR:** (1) “När migrationskontrollen blir biometrisk: brittiska Home Offices LFR-pilot”; (2) “Samir Daou: ett mord, ett gripande och ett motiv som ännu inte är offentliggjort”; (3) “Sakatti mot Viiankiaava: kritiska metaller och Natura-rättens gräns”; (4) “Samuils kvarlevor: statlig ceremoni, två konkurrerande vetenskapliga tolkningar”. Ingen ny artikel-PR öppnas i denna cykel; den befintliga godkännandekön är redan omfattande och ska hanteras artikel för artikel.

### Teknisk/publiceringsstatus vid kontrollen 8 november kl. 17.52

- Render statisk webbplats har senaste registrerade deployment **LIVE**: `dep-dbo6g9rrjlhs73ai5500`, commit `8e46f91e643be55cce6afed9ed6d05d5c9aae707`, avslutad 8 november kl. 12.16.54 UTC. Ingen ny deployment har gjorts i denna cykel.
- Direkt hämtning av den publika sidan via den tillgängliga webbläsarkontrollen gav **Internal Error**; Render bekräftar deploymentstatus LIVE men visuell rendering har inte kunnat kontrolleras i denna kontroll.
- Render Postgres `folktribunalen-db` har fortfarande tom `ipAllowList`. En ny read-only fråga mot `information_schema.tables` misslyckades med det exakta felet: “This database blocks all external connections because its IP allowlist is empty, so this tool can't reach it.” Databasens faktiska godkännandekö kan därför inte läsas. Ingen bred öppning av databasen har gjorts.
- Ingen artikel har mergats eller publicerats i denna cykel. Den tidigare publicerade Hormuz-huvudversionen på `main` är separat från PR #3:s utökade granskningsutkast.

## Ny cykel 9 november 2026 kl. 01.47 Europe/Sofia – delta sedan 8 november 17.52

Denna cykel har åter screenat samtliga spår A–S. Nedan dokumenteras nytt eller korrigerat material. Befintliga fynd i tidigare PR:er upprepas inte som nyheter.

### Betydande nya uppgifter och källstatus

- **B/R – Finland: datacenterexpansionen går in i konkret miljöprövning samtidigt som Google-projekten är regulatoriskt pausade.**
  - **PRIMÄRKÄLLA, publicerad 5 november:** LVV lade ut Uus-Olkkola-programmet för miljökonsekvensbedömning. Projektbeskrivningen omfattar upp till 900 MW över cirka 160 hektar i Pyhäjärvi; första genomförandefasen anges som 100 MW. Samrådet löper 5 november–4 december 2026. Detta är ett YVA-program, inte bygglov, nätanslutningsavtal eller byggstart. https://www.ymparisto.fi/fi/osallistu-ja-vaikuta/ymparistovaikutusten-arviointi/uus-olkkolan-datakeskus-pyhajarvi-haapajarvi
  - **PRIMÄRKÄLLA:** Tervamäki i Iisalmi är ett separat projekt på cirka 1,2 GW och 112 hektar. LVV har förlängt samrådet till 9 november 2026 efter dokumenterade webbplatsstörningar 8–10 och 21–22 oktober. Detta är en processuell förlängning för att säkra fungerande hörande enligt YVA-lagen, inte en ny kapacitetsökning. https://www.ymparisto.fi/fi/osallistu-ja-vaikuta/ymparistovaikutusten-arviointi/tervamaen-datakeskus-iisalmi
  - **PRIMÄRKÄLLA, 22 oktober:** LVV:s uppföljning säger att Tuike Finland den 14 oktober uppgav att bolaget hade stoppat förberedelsearbeten vid både Muhos och Kajaani-Otanmäki efter myndighetens uppmaning den 6 oktober. Vid Muhos krävs en detaljerad vattenhanteringsplan senast 5 november, med bland annat oberoende vattenövervakning, skyfall, snösmältning och risker från svartskiffer/sura sulfidjordar. LVV bedömer också att dikningen kräver vattenrättsligt tillstånd. https://www.sttinfo.fi/tiedote/72435808/lupa-ja-valvontavirasto-vaatii-tuike-finland-oylta-toimenpiteita
  - **OBEROENDE BEKRÄFTELSE:** Reuters rapporterade 29 oktober att polisen öppnat en förundersökning om misstänkt miljöskada vid Muhos. **OBEKRÄFTAT/ÖPPET:** inget offentligt efterföljande myndighetsbesked om huruvida planen lämnats in, godkänts eller om någon begränsad aktivitet återupptagits har identifierats per 9 november. Det är en paus av miljöförändrande förberedelsearbete, inte ett slutligt avslag eller ett generellt förbud mot all planering. https://www.reuters.com/business/environment/finland-launches-criminal-probe-suspected-environmental-damage-google-data-2026-10-29/
  - **Separat upphandlingsspår:** EuroHPC:s AI-gigafactory-call har sista anbudsdag 12 november. Det är en egen upphandling; den ska inte blandas ihop med senare datum som redan finns i PR #24. EuroHPC anger upp till sju gigafabriker i minst sju medlemsstater, offentlig upphandling som ankarkund och förväntade privata investeringar över 20 md euro. Urval väntas tidigt 2027; drift inom 18 månader efter urval är en plan, inte befintlig kapacitet. https://www.eurohpc-ju.europa.eu/eurohpc-joint-undertaking-launches-ai-gigafactories-call-2026-07-30_en

- **E/S – Viscaria, Kiruna: finansieringsprocessen har en tydligare men ännu inte bindande tidslinje.**
  - **PRIMÄRKÄLLA, 29 oktober:** Viscaria uppger att ING och Société Générale är lead arrangers; fyra till sex europeiska affärsbanker väntas ansluta till syndikatet tillsammans med exportkreditinstituten Euler Hermes och Finnvera. Bolaget räknar med att slutföra skuldfinansieringsprocessen inom 90 dagar och väntar sig kreditgodkännande från huvudbankerna omkring årsskiftet. Detta är ett pågående due-diligence-/syndikeringsarbete, inte ett undertecknat slutligt låneavtal eller utbetald kredit. https://www.viscaria.com/sv/viscaria-lamnar-uppdatering-om-projektfinansieringsprocessen/
  - **PRIMÄRKÄLLA, Q3-rapport 5 november:** nettoomsättning 0 MSEK, resultat efter skatt −21,0 MSEK, kassaflöde 123 MSEK, likvida medel 1 471 MSEK per 30 september och aktiverade prospekterings-/utvärderingsutgifter 152 MSEK. Bolaget anger fortsatt första säljbara koppar 2028. Strategisk CRMA-status är inte gruvtillstånd, mineralreserv, färdig finansiering eller kommersiell produktion. https://www.viscaria.com/sv/delarsrapport-juli-september-2026/
  - **ÖPPEN FRÅGA:** stäm av 2025 års icke-bindande term sheet om upp till cirka 3,9 md SEK mot slutliga kreditgodkännanden, låneavtal, säkerhetspaket, exportkreditgarantier och faktiskt finansiellt tillträde.

- **K – Cladonia/Storsjö: rättelse av uppgiften om ett separat senare markköp.**
  - **OBEROENDE BEKRÄFTELSE, SVT publicerad 6 november:** SVT skriver uttryckligen att flera fastigheter, inklusive ön, köptes av SCA i ett enda svep; totalpriset för hela affären anges till 240 MSEK och arealen till cirka 15 000 hektar. Detta korrigerar den tidigare formuleringen som lämnade öppet om ön eller cirka 300 hektar skulle vara ett separat senare köp. Ett separat tillståndsspår kan avse administrativ handläggning av en delmängd, men får inte användas som bevis för en andra köpeskilling eller adderas till arealen utan lagfarts-/köpehandlingsstöd. https://www.svt.se/nyheter/lokalt/jamtland/har-ar-palantir-vdns-mark-i-harjedalen-se-skogen-on-och-fabodvallen
  - SVT återger Cladonias egna uppgifter: ingen avverkning planeras vintern 2026/27; en ny skogsbruksplan tas fram; bolaget säger att allemansrätt, samebyarnas renbetesrätt, servitut och vissa föreningsavtal består. Detta är **PARTSUPPGIFT**, inte oberoende kontroll av framtida markförvaltning.
  - **KONTEXT, redan införd i PR #4:** SVT:s 7 november-reportage om jaktlagens upplåtelser beskriver att tidigare jakträttsavtal upphörde i samband med SCA:s försäljning och att Cladonia ännu inte fastställt nya lokala upplåtelser. Det ska beskrivas som avtals-/upplåtelsefråga, inte som att allemansrätten eller en generell lagstadgad rätt till jakt har upphört. https://www.svt.se/nyheter/lokalt/jamtland/efter-45-ar-forsvann-ratten-att-jaga-nar-alex-karp-kopte-skog-i-harjedalen

- **C – Synkronicitetsprotokollet: empirisk och teoretisk evidens hålls isär.**
  - **OBEROENDE PUBLICERAD FORSKNING, 11 mars 2026:** en matchad studie med 242 deltagare jämför ultraortodoxa och sekulära judiska deltagare i Israel. Den finner samband mellan anknytningsmönster, meningsdetektion i sammanträffanden och upplevd mening i livet; synkronicitetsmedvetenhet i sig medierade inte sambandet. Studien mäter självrapporterad tolkning och mening, inte objektivt verifierade sammanträffanden eller en acausal mekanism. Författarna efterlyser longitudinella och experimentella studier. https://doi.org/10.3389/fpsyg.2026.1609435

- **D – Samuil i Sofia: en avvikande längduppgift ska inte återges som fastställd.**
  - BNR och BNT:s rapportering från 8 oktober anger cirka 153 cm från den preliminära antropologiska analysen. En sekundär artikel hos 24chasa anger 173 cm. Det senare avviker från BNR/BNT:s återgivning och ska tills vidare behandlas som sannolikt publicerings-/transkriptionsfel, inte som en andra mätning. Den äldre uppskattningen omkring 150,6 cm byggde på fotografier/gipskopior, inte en ny direktmätning. Fullständigt antropologiskt protokoll har inte hämtats. BNT rapporterar att en könsbestämning av prov i Bonn pekade på manligt kön; detta är inte samma sak som en genetisk identitetsmatchning eller ett släktskapstest. https://bnrnews.bg/sofia/post/539293/ucheni-tsar-samuil-e-bil-visok-153-sm-i-e-stradal-ot-reditsa-zabolyavaniya och https://bntnews.bg/news/dnk-analiz-izotopi-i-oshte-prouchvaniya-balgarskite-ucheni-za-ostankite-na-samuil-i-kostite-predadeni-ot-garciya-1416045news.html

- **N – Från skrift till Storebror: EU:s AI-regelkalender ändrades genom bindande förordning.**
  - **PRIMÄRKÄLLA:** Förordning (EU) 2026/1744 publicerades i EUT 24 juli och trädde i kraft 27 juli 2026. Den flyttar tillämpningen av AI Act-reglerna för Annex III-högrisk till **2 december 2027** och Annex I-högrisk till **2 augusti 2028**. Detta är inte en allmän paus av AI Act: redan tillämpliga förbud, GPAI-krav och transparensregler enligt artikel 50 ska hållas åtskilda från de uppskjutna högriskkraven. https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng
  - Sveriges lag 2026:806 om realtidsbaserad biometrisk fjärridentifiering och IMY:s tillsyn från 1 juli finns redan i PR #21. Ingen ny offentlig svensk användningslogg eller nytt tillståndsbeslut identifierades i denna cykel.

- **O/R – Hormuz och Irak: ny uppgift om en särskild exportkorridor nära Oman.**
  - **PARTSUPPGIFT återgiven av Reuters 8 november:** Iraks utrikesminister Fuad Hussein sade i en Al Jazeera-intervju att Bagdad nått överenskommelser med USA om att irakisk olja ska kunna exporteras genom Hormuz via en sjöled nära Oman. Reuters återger irakiska energitjänstemäns uppgift att exporten steg från cirka 2,65 miljoner fat/dag i september till cirka 3,5 miljoner i oktober. Ministerns uppgift om 60 md USD i förluster är hans egen uppskattning. Ingen offentlig avtalstext, amerikansk bekräftelse, startdag eller oberoende fartygs-/lastserie som visar att just den nya korridoren redan används har identifierats. Skriv därför ”överenskommelser enligt ministern”, inte ”formellt avtal” eller ”säkrad export”. https://www.reuters.com/business/energy/iraq-has-reached-understandings-us-to-allow-oil-exports-through-hormuz-minister-says-2026-11-08/

- **R – Northvolt/Lyten: produktion har återstartat i begränsad skala, men leverans är senarelagd.**
  - **OBEROENDE BEKRÄFTELSE, SVT publicerad 18 oktober:** ett par hundra personer arbetar i Skellefteå; en produktionslina körs stegvis och bolaget säger att första kommersiella leveranser väntas i början av 2027. Det är inte belägg för storskalig produktion, full återanställning eller att den tekniska kapaciteten redan används. Tidigare mål om leveranser under andra halvåret 2026 har flyttats. https://www.svt.se/nyheter/lokalt/vasterbotten/har-startar-batterifabriken-om-i-skelleftea-ida-ar-tillbaka-sa-kul

### Täckningsmatris A–S – 9 november

| Spår | Kontrollutfall denna cykel | Öppna frågor / nästa kontroll |
|---|---|---|
| A Palantir | Q3-10-Q, kundkoncentration, 5,6 md USD molnåtagande och NHS-frågor redan i PR #7; inget nytt primärdokument i denna cykel. | NHS-kontrakt, DPIA, revision/exit, uppsägning och namngiven molnleverantör. |
| B AI-datacenter | Nya finska YVA-program för Tervamäki och Uus-Olkkola; Google/Tuike-paus och förundersökning. | Tervamäki-samråd 9 nov; Uus-Olkkola 4 dec; Tuikes plan efter 5 nov och myndighetens beslut. |
| C Synkronicitet | 2026-studie med 242 deltagare; inga objektiva eller kausala/acausala belägg. | Fulltext, mätinstrument, preregistrering, basfrekvens och replikation. |
| D Sofia | Samuils ceremoniella återföring är känd; 153 cm stöds av BNR/BNT, 173 cm är en avvikande sekundär uppgift. | Full antropologisk rapport, metod, DNA/isotoper, 2010/2024-studierna. |
| E Mineraler | Viscarias Q3 och finansieringsprocess har ny tidslinje; CRMA-listan är redan i PR #9. | Kreditgodkännanden, slutligt syndikat, låneavtal, säkerheter och resurs-/reservstatus. |
| F NVIDIA | Q2 FY2027-10-Q och garanti-/åtagandekedjan redan i PR #14. | Q3-resultat 17 november; stängning av planerade transaktioner och förändrade garantier. |
| G Libanon | Daou/UNIFIL-spåren redan dokumenterade; inget nytt verifierat kyrkoangrepp eller rättsligt beslut denna cykel. | ISF-/domstolsakt, civila återvändanden och UNIFIL:s faktiska avvecklingsplan. |
| H Kyrkor | Wiesbaden, Warszawa, Prag, Sofia och Varna screenade; ingen ny restaurerings-/ägandehandling utöver Samuil-händelsen i D. | Kommunala byggnadsarkiv, kyrkoarkiv och kulturarvsbeslut. |
| I Fennoskandien | Ingen ny geologisk/skoglig/hästhistorisk primärhandling som ändrar läget. | SGU/GTK, skogsbruksplaner, fornminnen, renskötsel och hästavelns arkiv. |
| J Storsjöodjuret | Ingen ny oberoende observation eller fysisk evidens. | Arkivvittnesmål, hydrologi, runologiska källor och fullständiga Thiel-transkript. |
| K Cladonia/Storsjö | SVT korrigerar uppgiften om separat senare köp: flera fastigheter i ett enda SCA-förvärv, cirka 240 MSEK. | Lagfarter, köpehandlingar, två eventuella tillståndsakter, jakträttsavtal och ny skogsbruksplan. |
| L Skaga kapell | Ingen ny RAÄ-/länsstyrelse-/kyrkoarkivhandling identifierad. | Dendrokronologi, brand-/återuppbyggnadskedja, inventarier och ägande. |
| M Athos | Tidigare katalog-/digitaliseringsspår kvarstår; inget nytt offentligt proveniens- eller donationsdokument. | Katalogposter, proveniens, metadata och öppna digitaliseringsprojekt. |
| N Storebror | EU-förordning 2026/1744 ändrar AI Act-tidslinjen; svensk realtidsbiometri redan i PR #21. | Nationell implementering, tillsyn, tillståndsloggar och verklig användning. |
| O Hormuz | Ny irakisk ministeruppgift om sjöled nära Oman; befintliga UKMTO 197–200 hålls separata i PR #3. | US/Iraq-avtalstext, AIS/lastdata, försäkringspremier och fartygsidentiteter. |
| P USA:s kongress | Midtermresultat och planerad AI-agenda redan i PR #10; inget nytt formellt lagbeslut denna cykel. | Officiell certifiering, utskottsordföranden och procedurresultat 9 nov. |
| Q Gripen | Saab AI-agentförsök och FDI-fregattavtal redan i PR #12; ingen ny operativ förmåga verifierad. | Testprotokoll, användningsram, mänsklig kontroll och formella Gripen-beställningar. |
| R Energi/större bolag | Lyten återstartar en lina; första kommersiella cellleveranser väntas Q1 2027. Fortum/Google-PPA är fortsatt viktig bakgrund. | Kvalificering, faktisk produktion, kundacceptans, lokal katod-/materialkedja och elavtal. |
| S Urbergsskölden | Onkalo-licensen och CRMA/GTK-spåren redan dokumenterade; Viscaria finansiering tillför nytt delta. | STUK:s förstartskontroll, CRMA-genomförande, civila bergrum och långsiktig förvaltning. |

### Redaktionell arbetskö och teknik

- **Befintliga PR:er uppdateras – inga nya artikel-PR:er öppnas i denna cykel.** Nya deltan hör hemma i PR #4 (Cladonia), #9 (Viscaria), #15 (Lyten), #17 (Finland/EU-datacenter), #21 (AI Act-tidslinjen), #3 (Irak/Hormuz) och denna masterplan-PR #16.
- GitHub har **28 öppna PR:er** i Folktribunalen-repot vid denna kontroll. Den stora befintliga kön hanteras artikel för artikel; ingen batch-merge.
- **Ingen merge eller publicering har skett i denna cykel.** PR #16 är fortsatt en granskningsgren.
- Render: statiska webbplatsens senaste deployment är fortfarande **LIVE**, dep-dbo6g9rrjlhs73ai5500, commit 8e46f91e643be55cce6afed9ed6d05d5c9aae707, färdig 8 november 12.16.54 UTC. Editorial-webbtjänstens senaste deployment är 4 november, commit 6a835783553565f239864a9da7160d9f79f692b2.
- Render Postgres folktribunalen-db är status **available**, men IP-allowlist är tom och databasen har utgångsdatum 4 december 2026 på nuvarande free-plan. Databasens faktiska godkännandekö kan därför inte läsas via extern anslutning. Exakt tidigare fel: “This database blocks all external connections because its IP allowlist is empty, so this tool can't reach it.” Ingen IP-allowlist har öppnats och ingen databasskrivning har gjorts.
- Render bekräftar deploymentstatus LIVE, men en separat visuell kontroll av publika sidan har inte genomförts i denna cykel.



## Breaking Watch – ny cykel 9 november 2026, 03.41 Europe/Sofia

### Samlad redaktionell bedömning

Den här cykeln gav nya, materiella uppgifter inom A, B, D, E, F, I, K, N, O, P, Q, R och S. C gav en ny teoretisk publikation men ingen ny empirisk validering. G, H, J, L och M gav ingen ny händelse som passerar notiströskeln; deras öppna frågor kvarstår. Ingen ny artikel har skapats i batch. Den aktiva Hormuz-granskningen PR #3 har fått en daterad källuppdatering; masterplan och täckningsmatris uppdateras här.

### Nya och korrigerade uppgifter

**A – Palantir / offentlig makt**
- SEC Form 10-Q för kvartalet som avslutades 30 september, inlämnad 3 november: Palantir redovisar ett minimiåtagande om minst USD 5,6 miljarder till en tredje parts molntjänstleverantör över tio avtalsår till 29 februari 2036; årliga miniminivåer USD 268–979 miljoner. Motparten namnges inte i noten. Detta är ett inköpsåtagande, inte automatiskt en omedelbar skuld.
- 5–6 november: FT rapporterar att brittiska regeringen planerar att förlänga NHS Federated Data Platform-avtalet och samtidigt upphandla en brittisk ersättare med sikte på ett möjligt byte om cirka två år. **PARTSUPPGIFT/OBEKRÄFTAD som beslut:** inget undertecknat förlängningsavtal eller nytt tilldelningsbeslut identifierat.
- 2 november: Guardian/FOI visar att 29 av 137 NHS-trusts som uppges realisera nytta säger att plattformen inte är live eller att de inte använder dess appar. NHS England invänder att vissa använder begränsade funktioner för datainlämning och administration. Detta är en definitions- och nyttorevisionsfråga, inte bevis för att ingen användning sker.
- FT:s genomgång av brittiska MoD-betalningar: cirka £282m redovisade betalningar 2015/16–2025/26 jämförs med £95,9m i offentligt identifierbara kontraktsnotiser. Skillnaden är en transparens-/avstämningsfråga, inte i sig bevis för överdebitering. Det separata £240,6m-avtalet publicerades 23 januari 2026 och ska inte blandas ihop med den historiska avstämningen.
- Källor: SEC https://www.sec.gov/Archives/edgar/data/1321655/000132165526000048/pltr-20260930.htm ; FT https://www.ft.com/content/5c237fb3-23ba-4c1a-9257-fd66b9d42d6c och https://www.ft.com/content/bd35cc23-9c24-4ac5-8754-76ed8dd0c264 ; Guardian https://www.theguardian.com/technology/2026/nov/02/palantir-unused-nhs-hospital-trusts ; MoD award notice https://www.find-tender.service.gov.uk/Notice/006344-2026

**B – Europas AI-datacenter**
- 5 november: EuroHPC publicerade ett tekniskt meddelande om AI Gigafactories-upphandlingen. Utkast och tidigare inlämnade anbud via de gamla länkarna kommer inte att beaktas; nya länkar ska användas och anbud måste skapas/skickas in på nytt. Uppdaterad tidsplan: Lot 1 till 4 februari 2027 och Lot 2 till 3 december 2026. Detta är ett upphandlings-/systemfel, inte ett urval av vinnande konsortier.
- Europeiska kommissionens datacenterunderlag anger cirka 68 TWh elanvändning 2024 och en möjlig ökning till cirka 114 TWh 2030. Prognos, inte uppmätt framtida förbrukning.
- Skellefteå: EdgeConneX-planen omfattar sju byggnader om cirka 96–150 MW IT-last vardera, med två första byggnader i den tidiga fasen och ytterligare fem senare. Kommunens material beskriver fortfarande en etableringsprocess; faktisk nätanslutning/effektreservation har inte belagts offentligt. Lokalt samråd 5 november och protester rapporteras; petitionsiffran 4 000 ska behandlas som parts-/arrangörsuppgift tills den verifierats.
- Lyten: lokal rapportering anger att första kommersiella leveranser från Skellefteå väntas tidigast i början av 2027. Katodmaterial uppges fortfarande komma från Kina och Sydkorea medan bolaget söker partner för lokal produktion. Ingen oberoende reviderad produktionsvolym har publicerats.
- Källor: EuroHPC https://www.eurohpc-ju.europa.eu/call-tenders-selection-artificial-intelligence-gigafactory-consortia-and-establishment-ai_en ; kommissionen https://single-market-economy.ec.europa.eu/sectors/digital-economy/data-centres-energy-efficiency-2026_en ; Skellefteå kommun https://skelleftea.se/ ; SVT https://www.svt.se/nyheter/lokalt/vasterbotten/

**C – Synkronicitet**
- Ny teoretisk artikel, *A Biosemiotic Theory of Synchronicity*, erbjuder en biosemiotisk tolkningsmodell. Den är inte ett experimentellt belägg för kausal synkronicitet och innehåller inte en reproducerad, förregistrerad testserie. Protokollets hypoteser ska därför fortsatt operationaliseras och prövas separat.

**D – Sofia / Sankt Sofia**
- 3 oktober: kvarlevor som tillskrivs Tsar Samuil överfördes från Thessaloniki till Sofia och fördes till Sankt Sofia; utbytet omfattar 48 kyrkliga föremål som återlämnas till Grekland. BTA rapporterade ceremonin; AFP bekräftade ankomsten oberoende.
- Viktig källreservation: BTA:s expertintervjuer 2 oktober återger historikern Ilia Ilievs bedömning att identifieringen är huvudsakligen indiciebaserad. Släktskapsanalys kan möjligen stärka relationen mellan två gravar, men detta är inte detsamma som en säker individuell DNA-identifiering av Samuil. Skriv därför alltid “kvarlevor som tillskrivs Samuil” eller “tros tillhöra Samuil”.
- Källor: BTA https://www.bta.bg/en/news/bulgaria/1213569-greece-to-return-remains-of-tsar-samuel-to-bulgaria och https://www.bta.bg/en/news/bulgaria/1216695-tsar-samuel-s-remains-transfer-to-sofia-what-experts-say ; AFP via https://www.dawn.com/news/2034630/bulgarias-tsar-samuel-returns-home-after-1000-years

**E – Strategiska råvaror**
- 9 oktober: EU-kommissionen godkände den andra listan med 46 strategiska projekt enligt CRMA; totalen är nu 106. Nordiska projekt i annexet omfattar bland annat CoNiKo (Kokkola, Co/Ni-raffinering), Hautalampi (Cu/Co/Ni), Arctial (aluminiumförädling), Sokli (REE), Suhanko (Cu/Ni/PGM) och Viscaria (koppar). Bulgarien finns med genom Aurubis Tankhouse Expansion i Pirdop.
- Strategisk status innebär prioriterad samordning/tillståndsprocess enligt CRMA, inte automatiskt miljötillstånd, finansiering, byggstart eller kommersiell produktion.
- Viscarias Q3-rapport 5 november anger att finansieringsprocessen förlängs cirka 90 dagar och att kreditgodkännande ännu inte är slutligt. Bolagets egen rapport är primär för bolagets tidsplan; oberoende bekräftelse av kreditbeslut saknas.
- Källor: kommissionens beslut och annex https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials/strategic-projects-under-crma/selected-projects_en ; Viscaria https://www.viscaria.com/

**F – NVIDIA / AI-finansiering**
- 3 september: NVIDIA:s SEC 8-K redovisar ett undertecknat avtal om att förvärva Hugging Face för USD 11,9 miljarder, med upp till ytterligare USD 1,0 miljard i personal-/retentionsprogram. Transaktionen väntas stänga under första halvåret 2027, villkorad av sedvanliga godkännanden; den är alltså inte genomförd. Analysera kontroll över modell- och utvecklarinfrastruktur, men blanda inte ihop köpeskilling med utbetald kontantlikviditet före closing.
- Den separata USD 105bn villkorade SB Energy/OpenAI-garantin är redan dokumenterad i PR #14; den ska fortsatt beskrivas som en maximal kontingent exponering med villkor och indemnitet, inte som en omedelbar skuld eller utbetalning.
- Källa: NVIDIA SEC 8-K https://www.sec.gov/Archives/edgar/data/1045810/000104581026000090/nvda-20260903.htm

**G – Libanon**
- Ingen ny oberoende, kristen-specifik händelse rörande kyrkoägande, församlingar eller kulturarv passerade notiströskeln i denna cykel. Fortsatt bevakning av civila konsekvenser, UNIFIL, kyrkliga vittnesmål och egendomsfrågor; inga nya påståenden om sektfördelning utan källstöd.

**H – Kyrkorna i Wiesbaden, Warszawa, Prag, Sofia och Varna**
- Ingen ny verifierad restaurerings-, ägar- eller tillståndshändelse i de fem stadsdossiers som passerade notiströskeln. Fortsätt separat stad-för-stad-kontroll; inga sammanslagna tidslinjer som suddar ut lokala skillnader.

**I – Fennoskandien / skog**
- Skogsstyrelsen bekräftar att EUDR börjar tillämpas 30 december 2026 för stora/medelstora aktörer och 30 juni 2027 för kvalificerade mikro/små aktörer. Ny bilaga I trädde i kraft 18 september och uppdaterade tullkoder publicerades 23 september. Det är en spårbarhets-/due-diligence-regel för listade träprodukter och andra råvaror, inte ett generellt avverkningsförbud.
- Inga nya belägg i denna cykel för en obruten hästkulturtradition eller nya ras-specifika avelstrender; hästspåret står kvar som långsiktig kultur- och registerforskning.
- Källa: Skogsstyrelsen https://www.skogsstyrelsen.se/lag-och-tillsyn/avskogningsforordningen/

**J – Storsjöodjuret / Thiel**
- Ingen ny oberoende observation eller fysisk evidens för Storsjöodjuret. The Verge publicerade 20 oktober en analys baserad på läckta inspelningar av privata Thiel-föreläsningar; det är sekundär rapportering, inte ett officiellt transkript. Thiels offentliga First Things-essä 15 juli är primärtext. Den teologiska jämförelsen med Uppenbarelsebokens havsodjur hålls skild från folkloristisk/biologisk evidens.

**K – Cladonia Skog AB / Storsjö**
- SVT:s rapportering 6 november klargör att marken om cirka 15 000 hektar och köpeskillingen omkring 240 mkr avser SCA-affären som helhet. De cirka 300 hektaren/två mindre fastigheterna och uppgiften om 5 mkr ska inte beskrivas som ett senare separat förvärv utan som separata fastighetsdelar/överföringar inom samma övergripande SCA-affär, tills Lantmäteriets lagfartsakter visar annat.
- ISP:s beslut 27 augusti “utan åtgärd” är ett faktiskt myndighetsbeslut, men inte en offentlig redovisning av hela säkerhetsbedömningen. JO-anmälan är en anmälan, inte ett konstaterat fel eller en inledd JO-utredning.
- Jaktavtal och lokala nyttjanderätter måste hållas isär från allemansrätt och fiskerätt. SCA/bolagsuttalanden om framtida jaktmöjligheter är partsuppgifter tills upplåtelseavtal finns.
- Källor: SVT https://www.svt.se/nyheter/lokalt/jamtland/techmiljardar-koper-skog-i-storsjo-kapell-i-bergs-kommun ; Fastighetsvärlden/ÖP-uppgifterna och Länsstyrelsens beslut ska fortsatt jämföras med Lantmäteriets lagfartsakter.

**L – Skaga kapell**
- Ingen ny restaurerings- eller ägarhändelse i denna cykel. Historikspåret kvarstår; traditionell datering av äldre kapellbyggnad ska inte presenteras som arkeologiskt fastställd utan byggnadsarkeologiskt underlag.

**M – Böckernas väg till Athos**
- Inget nytt dokumenterat bokförvärv eller proveniensspår Sverige–Bulgarien–Grekland–Athos denna cykel. MOmA:s digitaliseringsarbete med osmanskturkiska dokument i Athoskloster kvarstår som relevant infrastrukturprojekt, men är inte i sig belägg för en viss boks resa eller donation.

**N – Från skrift till Storebror**
- Rådet gav 29 juni 2026 slutligt klartecken till AI Omnibus: de flesta AI Act-regler började gälla 2 augusti 2026, medan regler för fristående högrisksystem flyttas till 2 december 2027 och högrisk-AI inbyggd i produkter till 2 augusti 2028. Detta är antagna tidsfrister, inte ett nytt förslag.
- EUDI-plånböcker har en separat medlemsstatsdeadline 24 december 2026. Inget belägg har hittats för att Bulgariens plånbok redan är i drift; nationella lag- och certifieringssteg får inte beskrivas som en lansering.
- Källa: Rådet https://www.consilium.europa.eu/en/policies/artificial-intelligence-act/timeline-artificial-intelligence/

**O – Hormuz**
- JMIC Advisory Update 112, 8 november: fem nya incidentrapporter sedan föregående uppdatering och 177 rapporterade incidenter sedan 1 mars; hotnivån för Hormuz kvarstår som SEVERE. Aggregatet är inte likvärdigt med IMO:s verifierade attacker och får inte användas för attribution.
- QatarEnergy har enligt Edisons offentliggörande 27 oktober förlängt force majeure för LNG till 31 december. Totalt uppges 38 laster/ca 5 bcm omfattas; Edison säger att 27 laster/ca 2,7 bcm ersatts. Reuters bekräftar förlängningen för fler än en kundmarknad. Detta visar kontrakts- och försörjningspåverkan, inte att italienska slutkunder automatiskt saknar gas.
- JMIC PDF https://www.ukmto.org/-/media/ukmto/products/jmic_advisory_update_112_08-nov.pdf?rev=fab35b6555404e9a92944523318e299a ; Reuters https://www.reuters.com/business/energy/qatar-will-not-deliver-gas-european-client-edison-until-end-december-2026-10-28/

**P – USA:s kongress**
- Efter mellanårsvalet 3 november har AP kallat demokraternas seger i både representanthuset och senaten. Det är en prognostiserad politisk kontrollförskjutning; den nya kongressen tillträder 3 januari 2027. Den sittande kongressen behåller formell makt fram till dess. Utskottsordföranden, formella majoritetsbeslut och kommittémandat ska inte tillskrivas den nya majoriteten i förtid.

**Q – Gripen / Europas säkerhet**
- 6 oktober: första Gripen E byggd i Brasilien genomförde sin första flygning. Brasilien har ett avtal om 36 flygplan, varav 15 ska byggas i Brasilien; första flygningen är inte en kundleverans eller operativ certifiering.
- 3 november: Saab uppgav att AI-agenter testats i Gripen E i en BVR-simulerad miljö. Detta är en bolagsuppgift om ett test, inte belägg för autonom operativ stridsförmåga eller ett godkänt operativt system.
- Källor: Saab/Embraer pressmeddelanden https://www.saab.com/newsroom/press-releases/2026/first-brazilian-produced-gripen-e-completes-maiden-flight och https://www.saab.com/newsroom/press-releases/2026/saab-tests-ai-agents-in-gripen-e

**R – Strategisk energi**
- Lyten/Skellefteå: tidig kommersiell leverans anges till början av 2027; katodmaterial uppges ännu importeras från Kina och Sydkorea medan lokal partner söks. Ingen verifierad lokal fullskalig katodkedja eller offentlig produktionsvolym.
- QatarEnergy-force-majeure förs in som en energiflödesrisk med direkt relevans för europeisk gasförsörjning. Inga andra nya tillstånds- eller finansieringsbeslut för kärnkraft/SMR/VPP passerade tröskeln i denna cykel.

**S – Urbergsskölden / civil underjordisk infrastruktur**
- 22 oktober: finska statsrådet beviljade Posiva drifttillstånd till utgången av 2070 för inkapslings- och slutförvarsanläggningen vid Olkiluoto/Onkalo, högst 6 500 ton uran i använt kärnbränsle. Tillståndet betyder inte omedelbar drift: STUK måste genomföra den lagstadgade förhandsinspektionen innan anläggningen får tas i bruk.
- CRMA-projekten i Finland/Sverige kopplas till E; inga nya offentliga VPP- eller Cavecore-beslut hittades.
- Källa: finska statsrådet https://valtioneuvosto.fi/en/-/1410877/government-grants-operating-licence-for-posiva-s-spent-nuclear-fuel-encapsulation-and-final-disposal-facility

### Arbetsflöde och status
- GitHub-repository: 28 öppna PR:er före denna cykel; ingen ny PR skapad. PR #3 har fått uppdatering om JMIC Update 112 och QatarEnergy. PR #16 får denna masterplan och täckningsmatris.
- Inget har mergats eller publicerats i denna cykel.
- Render: statisk webbplats har en LIVE-deploy på commit 8e46f91, som också är senaste commit på main. Källkoden innehåller artikelkortet med status “PUBLICERAD 8 NOVEMBER 2026”. Själva publika sidan kunde inte hämtas från den här körmiljön på grund av DNS-upplösningsfel; visuell kontroll av kortet i webbläsaren är därför inte bekräftad.
- Editorial API är LIVE på commit 6a8357. Render Postgres finns, men extern anslutning nekas eftersom IP allowlist är tom: “External database connections are not enabled for this database. Add an IP address or CIDR range to the IP allowlist.” Ingen databas- eller publiceringsköskrivning har gjorts.
