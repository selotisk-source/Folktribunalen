# FOLKTRIBUNALEN – Redaktionell masterplan och levande status

**Version:** 7 november 2026, 08.26 Europe/Sofia  
**Chefredaktör:** användaren  
**Grundregel:** En artikel i taget. Research → komplett utkast → faktakontroll → redigering → separat godkännande. Efter godkännande publiceras artikeln via redaktionssystemet och kontrolleras LIVE innan nästa artikel påbörjas. Ingen automatisk publicering.

## Aktuell arbetsuppdatering – 9 november 2026, kväll

- **Hormuz fullversion:** [PR #3](https://github.com/selotisk-source/Folktribunalen/pull/3) är draft och ej mergad. Fulltexten uppdaterades 9 november med IMO:s 131 bekräftade incidenter/25 dödsfall, IMO:s nya HUDA-post och tydligare osäkerhetsmärkning för UKMTO 199/200. Kräver separat godkännande; den tidigare kortversionens godkännande gäller inte fullversionen.
- **Norge/AI-elnät:** Komplett första utkast i `editorial/drafts/2026-11-09-norge-ai-elnat.md`, [PR #31](https://github.com/selotisk-source/Folktribunalen/pull/31). Draft, ej mergat eller publicerat.
- **Storsjö/Cladonia:** Komplett första utkast i `editorial/drafts/2026-11-09-storsjo-cladonia-markagande.md`, [PR #32](https://github.com/selotisk-source/Folktribunalen/pull/32). Draft, ej mergat eller publicerat. SVT 9 november anger över 30 000 underskrifter, uppskjutet kommunmöte och att fem jaktlag fått besked om att jaktupplåtelserna upphör; en jägare uppger att han efter 45 år nu förlorat all jakträtt på marken. Cladonia säger att lokala jakträtter ska ordnas men att formerna ännu inte är fastställda. ISP beslutade 27 augusti att lämna anmälan utan åtgärd; Länsstyrelsen beviljade förvärvstillstånd 9 september. Fastighetsförteckning, lagfarter, originalbeslut och samebyarnas perspektiv återstår.
- **Palantir/NHS:** Uppdaterat huvudutkast i `editorial/drafts/2026-11-09-palantir-nhs-datamakt.md`, [PR #33](https://github.com/selotisk-source/Folktribunalen/pull/33). Innehåller SEC Q3, parlamentets muntliga bevisning 4 november och Guardian-granskningen 9 november om lobbying kring GP-data. Draft, ej mergat eller publicerat.
- **Urbergsskölden/CRMA:** Uppdaterat huvudutkast i `editorial/drafts/2026-11-09-urbergsskölden-crma-urberg.md`, [PR #34](https://github.com/selotisk-source/Folktribunalen/pull/34). Innehåller EU:s 46 nya strategiska projekt, Finland/Sverige/Bulgarien, föreslaget ikraftträdande 15 november för finländskt lagpaket och Onkalo/Viscaria. Draft, ej mergat eller publicerat.
- **Publiceringsläge:** Inga nya artiklar har mergats eller publicerats. GitHub-PR:er är granskningsposter, inte webbplatsens databasbaserade kö. Databasbaserad kö och admin/API är inte end-to-end-testade i denna uppdatering.
- **Arbetsordning:** De fem prioriterade spåren har nu uppdaterade utkast eller granskningsposter. Fortsätt med källfördjupning och faktakontroll; publiceringsgodkännande hanteras separat, ett utkast i taget. Ingen artikel går LIVE utan uttryckligt godkännande.


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
