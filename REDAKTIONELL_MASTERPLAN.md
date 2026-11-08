# FOLKTRIBUNALEN – Redaktionell masterplan och levande status

**Version:** 7 november 2026, 08.26 Europe/Sofia  
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
- Den deployade src/app.js innehåller Hormuzkortet, artikelkroppen och etiketten PUBLICERAD 8 NOVEMBER 2026. Den innehåller Huda och Task Force Iron Gate samt den tidigare saudiska varningen, men inte de senare UKMTO 199/200-uppgifterna eller skadan på Aramcos administrativa byggnad i Riyadh. Dessa finns i PR #3:s senare draft.
- **UI-avvikelse:** startsidans statiska HTML har fortfarande texten “FÖRSTA UTGÅVAN UNDER ARBETE/PRODUKTION” samtidigt som Hormuzkortet i src/app.js är märkt publicerat. Detta bör harmoniseras i en separat webbändring.
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
