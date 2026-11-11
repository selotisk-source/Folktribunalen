# FOLKTRIBUNALEN – Redaktionell masterplan och levande status

**Version:** 11 november 2026, 06.48 Europe/Sofia  
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

### Täckningsmatris A–S — senast kontrollerad 10 november 2026 kl. 23.17 EET

| Spår | Senaste kontrollerade underlag / nytt | Status och nästa kontrollpunkt |
|---|---|---|
| **A. Palantir och offentlig makt** | SEC Q3-10-Q samt Guardian 9 november om FOI-baserade WhatsApp-meddelanden där Palantir drev frågan om GP-data i NHS FDP. NHS Englands primärkällor från 21 november och 15 december 2023 samt FAQ uppdaterad 14 april 2026 visar att GP-data är uteslutna ur den nationella instansen, men kan förekomma i lokala instanser med lokala data-delningavtal; NHS England är ansvarig för nationell instans, trust/ICB för lokal, Palantir är biträde. | **Aktiv.** Original-FOI-filerna är inte direkt hämtade; ingen handling visar att GP-data faktiskt integrerats. Hämta FOI-original, NHS-avtalsbilagor, DPIA, revisionsspår och exitvillkor. |
| **B. Europas AI-datacenter** | Yle rapporterade 9 november demonstrationer mot datacenter i Helsingfors, Lahti, Tammerfors, Uleåborg, Jyväskylä och Åbo; omkring 1 300 i Helsingfors enligt polisens uppskattning, övriga orter enligt arrangörernas uppgifter. Statnett stoppade 9 november nya reservationer för datacenteranslutningar till senast 1 augusti 2027. 800 MW anslutet, 4 200 MW reserverat, 9 100 MW i kö och 18 000 MW i förfrågningar. Norge aviserar koncessionsordning; EU:s anbudsförfarande för minst sju AI-gigafabriker stänger 12 november. | **Aktiv.** Skilj anslutet, reserverat, kö och förfrågningar. Regeringens koncessionsordning är ännu förslag/utredning. Följ anbud, nätvillkor, effekt, vatten och faktisk drift. |
| **C. Synkronicitetsprotokollet** | Ingen ny reproducerbar studie eller öppet dataset som styrker en objektiv acausal mekanism. 2026 års forskning om meningsupplevelser och algoritmisk förstärkning ger testbara frågor, inte kausal bekräftelse. | **Metodspår.** Fortsätt med preregistrering, kontrollgrupper, replikation och alternativa förklaringar. Tidsmässiga sammanträffanden får inte användas som kausal evidens. |
| **D. Sofia – staden under staden** | Ingen ny arkeologisk rapport eller myndighetsakt om Sankt Sofia/Serdica i denna cykel. Samuils ceremoniella återföring i oktober är fortsatt senaste större händelse; gravfyndet vid Sankt Achilleios är en separat arkeologisk kontext. | **Aktiv bakgrund.** Följ kulturministeriet, NAIM, museikataloger, föremålsproveniens och eventuella protokoll. Håll grav, förvaring, ceremoni och tradition åtskilda. |
| **E. Strategiska råvaror** | Kommissionens C(2026)8051 den 9 oktober: 46 nya CRMA-projekt i 16 medlemsstater, totalt 106. Finland: CoNiKo, Hautalampi, Arctial, Sokli, Suhanko; Sverige: Viscaria; Bulgarien: Aurubis Pirdop. Bergsstaten beviljade Arete Gold Rottensjön nr 100, 27 557,73 ha, tre års undersökningstillstånd. Ansökan namnger koppar/guld/silver/zink/bly, men beslutet omfattar samtliga koncessionsmineral i 1 kap. 1 § första stycket 1–2 minerallagen (bl.a. uran, litium, kobolt, nickel, lantanider och grafit); detta är rättslig omfattning, inte belägg för förekomst. | **Aktiv.** CRMA-status är inte gruvtillstånd, finansiering eller produktion. Rottensjön är prospektering, inte gruvdrift; överklagandefrist 12 november. Följ överklagande, arbetsplan, säkerhet, rennäring, natur, vatten och kulturmiljö. |
| **F. NVIDIA och AI-finansiering** | Anthropic S-1/A-2 inlämnad 10 november: cirka 900,9 md USD i samlade köp- och leasingåtaganden; cirka 451,6 md USD före utgången av 2030 och cirka 70,7 md USD inom tolv månader. Av totalsumman omfattas cirka 186,2 md USD av uppsägningsrätt eller villkor före start; ytterligare 150–175 md USD i arrangemang utan fast dollaråtagande ligger utanför summan. En separat privat placering om 26 md USD i Class N-aktier är villkorad av att börsintroduktionen slutförs. Per 30 september redovisade bolaget 146,6 md USD i likviditet (95,6 md kontanter, 36,3 md kortfristiga placeringar och 14,8 md outnyttjad kreditfacilitet), upp till 77 md USD i villkorad NPA-finansieringskapacitet och upp till 5 md USD i equity commitments. Beräknade nettolikvider från IPO plus privat placering är 84,6 md USD vid antaget mittkurspris 74 USD; ännu inte mottagna. TeraWulf redovisar 401 MW/20-årigt Anthropic-avtal med framtida leverans. Venture Global beskriver ramavtal för upp till 16 × 720 MW kraftöar. | **Aktiv.** Åtagandena är inte omedelbar skuld eller utbetalt kapital. Bryt ned lease, purchase commitments, ännu ej påbörjade avtal, garantier, startvillkor, säkerheter och restvärdesrisk. Ramavtal är inte automatiskt fasta beställningar. |
| **G. Libanon och regional geopolitik** | ISF meddelade 30 oktober att en misstänkt gripits efter Fader Samir Daous död. Fides återgav 4 november lokala uppgifter om påstådd bekännelse; offentlig förhörshandling eller domstolsakt som styrker detta saknas. Yle rapporterade 10 november att cirka 180 finländska soldater fortfarande tjänstgör i UNIFIL; mandatet löper ut vid årsskiftet och missionen ska avvecklas under 2027. FN:s fredsbevarande chef har varnat för ett säkerhetsvakuum. | **Aktiv.** Motiv och rättslig status är inte offentligt fastställda. Följ åklagare/domstol, kyrkliga uttalanden, civila konsekvenser och FN:s övergångsplan; återge partsuppgifter separat. |
| **H. Kyrkor som överlevt imperierna** | Ingen ny offentlig restaurerings-, ägande- eller bygglovshandling för Wiesbaden, Warszawa, Prag, Sofia eller Varna identifierad. Prags träkyrka på Petřín är fortfarande listad som stängd; nytt öppningsdatum saknas. | **Bakgrundsspår.** Fortsätt separat stadsvis kontroll mot kyrkoarkiv, kommunala byggnadsarkiv och kulturarvsregister. |
| **I. Fennoskandien – urberg, skog och häst** | Ingen ny offentlig mark-, skogsbruks-, rennärings- eller hästrelaterad myndighetsakt över notiströskeln i denna cykel. | **Bakgrundsspår.** Korskoppla geologi, historiska kartor, markägande, skogsbruk och samiska rättigheter utan att anta obrutna traditioner. |
| **J. Storsjöodjuret** | Ingen ny oberoende observation, hydrologisk mätserie eller runologisk publikation. Peter Thiels offentliga uttalanden ska hållas i full kontext; Uppenbarelsebokens odjur är en separat teologisk jämförelse. | **Bakgrundsspår.** Följ arkiv, folkloristik, sjögeologi och primärtranskript. Inga biologiska eller kausala slutsatser utan evidens. |
| **K. Cladonia Skog / Storsjö kapell** | SVT Jämtland 10 november bekräftar första mötet i Svenstavik mellan Bergs kommun och en jurist som företrädde Cladonia Skog AB. SVT:s text anger inte de konkreta svaren; mötesprotokoll eller undertecknade åtaganden har inte hämtats. | **Aktiv.** Karp deltog inte enligt den publicerade texten. Begär diarieförda anteckningar, skriftliga svar, jakt-/fiskeavtal, servitut, fastighetsförteckning och lagfarter. Håll Karp och bolaget åtskilda. |
| **L. Skaga kapell** | Ingen ny RAÄ-, länsstyrelse- eller kyrkoarkivhandling om restaurering, ägande, inventarier eller finansiering identifierad. | **Bakgrundsspår.** Fortsätt med RAÄ, länsstyrelse, kommun- och kyrkoarkiv; skilj legend från daterad byggnadsdokumentation. |
| **M. Böckernas väg till Athos** | Inget nytt offentligt katalog-, donations- eller proveniensbesked identifierat. MOmA-projektet om osmanska dokument kvarstår som separat dokumenterat digitaliseringsspår. | **Bakgrundsspår.** Följ offentliga kataloger, digitalisering och proveniens mellan Sverige, Bulgarien, Grekland och Athos. |
| **N. Från skrift till storebror** | Yle MOT publicerade 9 november uppgifter om att Kela 2023 följde cirka 2 000 anställdas arbetstid med detaljerad aktivitets-/musklicksdata; tiotals fick påföljder och tio sades upp 2024. Primärdomen TT 2026:14 (18 maj) fastslår att en Kela-uppsägning saknade tillräcklig grund eftersom Oiwa-rapporterna inte pålitligt visade arbetstidsanvändning; domstolen anger också att Oiwa-tidsstämplarna inte var definierade för arbetstidskontroll och att personalen inte informerats om sådan användning vid införandet. Yle kopplar domen till en av uppsägningarna, men kopplingen mellan domens Oiwa-underlag och hela 2023 års musklicksurval måste hållas exakt. IMY har sedan 1 juli 2026 tillsynsansvar för polisens och Säpos realtidsbiometriska fjärridentifiering. | **Aktiv rättslig bevakning.** Följ tillståndsbeslut, IMY-rapportering, domar och upphandlingar; skilj lagstöd från faktisk användning. |
| **O. Hormuz och sjöfarten** | UKMTO 201-26 den 10 november: tanker träffad av okänt föremål 19 nm nordost om Lima, Oman; besättning säker, ingen miljöpåverkan rapporterad. WAM bekräftar separat skada på ett ADNOC Logistics & Services-fartyg i UAE:s territorialvatten; koppling okänd. Reuters rapporterar partiell LNG-återhämtning i oktober, samt saudiska uppgifter om pipelinebrand utan driftstörning 9 november och begränsad Aramco-byggnadsskada 8 november. | **Hög prioritet.** Identifiera fartyg/IMO/flagga, skilj UKMTO 201 från ADNOC-uppgiften och följ skadebedömning, försäkring, last, AIS och faktisk export. Ingen gärningsperson är fastställd för de nya händelserna. |
| **P. USA:s kongress och institutionell makt** | AP 10 november: Jim Jordan valdes till republikansk minoritetsledare med 106–73 i sluten partigruppsomröstning. Senaten röstade 73–25 den 9 november för cloture på motionen att gå vidare till H.R.2347; senatens schema 10 november visar fortsatt behandling post-cloture. | **Aktiv.** Jordans val är intern partigruppsomröstning, inte formellt val av talman. H.R.2347 är inte slutligt antagen. Följ officiella mandat, demokratiskt ledarskapsval, utskottsordföranden och slutlig lagtext. |
| **Q. Gripen och Europas säkerhet** | Saab uppgav 3 november att AI-agenter flugits på Gripen E och autonomt styrt flygplanet i BVR-scenarier under prov. Saab/FMV:s order på ny styrautomat, 1,3 md SEK, offentliggjordes 15 oktober med leveransplan 2030. | **Aktiv.** AI-uppgiften är bolagets egen; ingen oberoende testdata eller operativ certifiering har identifierats. Skilj flygprov, certifiering, förbandsinförande och operativ förmåga. |
| **R. Strategisk energi och större bolag** | Posiva fick 22 oktober drifttillstånd för Onkalo till 2070, men får inte starta innan STUK:s särskilda inspektion. Khor Mor angreps 8 november; KRG bekräftar angrepp 9 november och Dana Gas uppger produktionsstopp, släckt brand och inga personskador. Venture Global beskriver 10 november ramavtal för upp till 16 kraftöar. | **Hög prioritet.** Följ STUK:s driftsättningskontroll, Khor Mors skadebedömning/återstart, Zaporizjzjas externa kraftförsörjning, Northvolt/Lyten faktisk produktion och Venture Globals fasta beställningar/finansiering. |
| **S. Urbergsskölden – industri och infrastruktur** | CRMA-projektlistan, Rottensjön-beslutet och Onkalo-licensen är de viktigaste aktuella underlagen. GTK:s RAKKA och SGU:s offentliga geodata används för civil mineral- och miljöanalys. | **Tvärgående.** Följ CRMA-genomförande, Rottensjöns överklagande, Finlands register-/operatörsfrister, VPP, återbruk av industriområden och offentligt dokumenterad civil underjordisk infrastruktur. Cavecore är fortsatt konceptspår utan nytt offentligt tillstånds- eller finansieringsbesked. |

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


## 9 november 2026 kl. 13.40 Europe/Sofia – Breaking Watch: A–S delta

### Substantiella nya kontroller
- **A – Palantir/NHS:** Guardian återger 6 november Financial Times-rapportering om planerad förlängning av NHS Federated Data Platform och parallell upphandling av en brittisk ersättare. Detta är ännu inte ett formellt regeringsbeslut. House of Commons Library 29 oktober anger att avtalet startade mars 2024, har en initial treårsperiod och optionsstruktur upp till sju år; leverantören behöver enligt NHS England informeras i december 2026 om regeringen inte förlänger efter mars 2027. Guardian:s FOI-granskning 2 november visar en skillnad mellan “realising benefits” och faktisk användning i 29 trusts. 117 539 fler operationer är en före-/efterförändring, inte kausalt bevis.
- **B/R – Norge:** Statnett införde 9 november en tillfällig paus för nya datacenterreservationer och vissa funktionsgodkännanden till senast 1 augusti 2027. Statnett redovisar 800 MW anslutet, 4 200 MW reserverat, 9 100 MW i kö och 18 000 MW ytterligare förfrågningar. Regeringen aviserar licensordning och större kostnadsansvar, men ingen färdig lag finns.
- **B/R – europeiska protester:** aktionsdagar 6–7 november i flera länder. Koalitionen uppger 90 evenemang; Le Monde rapporterar protester i cirka 15 länder, inklusive intrång på Microsofts byggarbetsplats i Amsterdam 6 november och omkring 2 000 demonstranter i Zaragoza. Koalitionens totalsiffra är partsuppgift; Le Monde är oberoende rapportering om enskilda händelser.
- **K – Cladonia/Storsjö:** SVT 9 november rapporterar över 30 000 underskrifter i ett upprop och att ett möte med Bergs kommun skjutits upp. SVT:s 6 november-reportage beskriver ön och tidigare rapporterade 300 ha som delar av en samlad SCA-affär. Skillnaden mot tidigare rapport om separat förvärvstillstånd kräver lagfartsakter och köpehandlingar.
- **O – Hormuz:** Reuters 9 november återger en anonym IRGC-flottkälla om förstörda navigationshjälpmedel i södra sundet. Uppgiften är obekräftad utanför iransk partsrapportering; UKMTO:s 8 november-fartygsincidenter är separata uppgifter och bekräftar inte systemens status.

### Arbetsflöde
- PR #16:s deltafil och täckningsmatris uppdaterade.
- PR #17:s datacenterutkast uppdaterat med Norge och europeiska protester.
- PR #7:s Palantir-utkast uppdaterat med NHS-avtalets framtid, användningsmått och källstatus.
- PR #4 innehåller redan SVT:s 9 november-uppdatering om Storsjö.
- Samtliga ändringar ligger i öppna granskningsgrenar. Inget har mergats eller publicerats i denna cykel.


## Ny Breaking Watch-cykel – 9 november 2026 kl. 15.13 Europe/Sofia

### Betydande delta och källstatus

| Spår | Ny kontroll / status | Nästa kontrollpunkt |
|---|---|---|
| **A – Palantir och offentlig makt** | Q3-rapporten och SEC 10-Q är redan införda i PR #7. Inget nytt myndighetskontrakt med tillräcklig primär dokumentation identifierat i denna cykel. Den centrala nya granskningen gäller fortfarande skillnaden mellan amerikanska myndighetsintäkter, kommersiell expansion, RPO och bolagets minst 5,6 md USD i molnåtaganden. | Hämta fullständiga upphandlings-/kontraktsbilagor och kontrollera uppsägnings-, dataägande- och exitvillkor. |
| **B – Europas AI-datacenter** | Norge: Statnett har tillfälligt pausat nya kapacitetsreservationer för stora datacenterlaster och regeringen aviserar licensordning; redan anslutna och godkända anläggningar omfattas inte av pausen. Finland: brottsutredning om misstänkt miljö-/vattenlagsöverträdelse vid Googles Muhos-projekt. EU:s AI-gigafabrikupphandling har nya separata deadlines för Lot 1 och Lot 2 efter uppdatering 5 november. | Följ Statnetts villkor och regeringsförslag; LVV:s beslut och polisens decemberuppdatering; EuroHPC:s nya inlämningslänkar och anbudsutfall. |
| **C – Synkronicitetsprotokollet** | Ny översiktsartikel 19 oktober 2026: “Strange attractors: purpose, synchronicity, flow, and the neurodynamics of meaning”, *Neuroscience of Consciousness*. Den föreslår en neurodynamisk modell och testbara prediktioner. Det är en konceptuell review, inte en ny experimentell demonstration av kausal eller övernaturlig synkronicitet. Författarna definierar synkronicitet som upplevelsen av meningsfullt sammanträffande utan kausal förklaring. | Granska de föreslagna biomarkörerna och om de har testats oberoende; sök preregistrerade försök, data och reproduktion. |
| **D – Sofia – staden under staden** | Ingen ny arkeologisk handling efter den tidigare återföringen av Samuil-attribuerade kvarlevor identifierad. Den vetenskapliga attributionen är fortsatt baserad på arkeologisk kontext och antropologi; DNA-bekräftelse har inte redovisats. | Följ den utlovade DNA-/isotop-/radiokoldateringsanalysen och eventuell publicerad rapport. Kontrollera också om de 48 kyrkliga föremål som skulle återföras efter 5 november faktiskt har överlämnats; ingen efterföljande primärbekräftelse identifierad i denna cykel. |
| **E – Strategiska råvaror** | CRMA:s andra EU-lista omfattar 46 nya strategiska projekt; Finland har fem, Sverige ett (Viscaria) och Bulgarien ett (Pirdop/Aurubis). Suhanko är ett av Finlands utvinningsprojekt. Vaasa förvaltningsdomstols interimistiska beslut 13 oktober stoppar förberedande arbeten tills tillstånden vunnit laga kraft; nio överklaganden rapporterade. Viscarias Q3-rapport 5 november visar fortsatt förberedelse, noll kvartalsomsättning och att bankfinansiering ännu inte är slutligt säkrad. | Följ Suhankos överklaganden, Viscarias bindande kreditbeslut, capex och faktisk byggtakt; håll CRMA-status åtskild från finansiering och tillstånd. |
| **F – NVIDIA/AI-finansiering** | Meta har emitterat USD-obligationer om 15 md USD med leverans omkring 5 november; separat EUR-erbjudande om 9 md EUR väntas levereras 12 november. Prospekten anger allmänna bolagsändamål, inte AI-öronmärkning. Blackstone/BofA/Citi/Morgan Stanley har offentliggjort en 63 md USD SPV-finansiering för Broadcom-XPU-utrustning som ska leasas till Anthropic; first-lien arrangeras av tre banker, Blackstone är committed second-lien-provider och Broadcom ger residualvärdesstöd motsvarande first-lien-delen. Tranchebelopp och lånevillkor är inte offentliga i transaktionsmeddelandet. | Följ EUR-avvecklingen 12 november, faktisk drawdown, SPV-låntagare/ägare, säkerheter, räntor och Broadcoms exakta residualvärdesmekanik. |
| **G – Libanon och kristna samfund** | Mordet på maronitiske prästen Samir Daou i Ain Jrain 29 oktober och en gripen misstänkt rapporterades 4 november; motiv och religiös koppling är inte fastställda. Ny regional koppling: ett rapporterat Qatari-förslag om Hormuz och kärninspektioner uppges även kräva slut på Libanonkriget, men de detaljerade villkoren är ännu inte offentligt bekräftade av parterna. | Följ åklagar-/domstolshandlingar och ISF:s fortsatta uttalanden. Följ separat om Libanonvillkoret bekräftas av Qatar, Iran, USA eller Libanons regering. Undvik att beskriva prästmordet som sekteristiskt utan belägg. |
| **H – Kyrkor som överlevt imperierna** | Ingen ny byggnads-, ägande- eller restaureringshandling för Wiesbaden, Warszawa, Prag, Sofia eller Varna identifierad. | Fortsätt separat kontroll i kommunala byggnadsarkiv, kyrkoarkiv och kulturarvsregister. |
| **I – Fennoskandien, skog och häst** | Regeringens SOU 2026:58 från 30 september är ett nytt centralt dokument: Samiska sanningskommissionens slutbetänkande och 71 uppmaningar och 49 förslag om bland annat mark, språk, kultur, självbestämmande och statligt ansvar. Det är ett kommissionsförslag, inte lag eller rättsligt avgörande. Rapporten innehåller 71 uppmaningar och 49 förslag; mandatet omfattade inte att analysera konkreta renbetesrättigheter eller föreslå författningsändringar inom de områden som låg under Renmarkskommitténs direktiv. ECHR:s Saarivuoma-mål (2381/22) avgjordes 3 mars 2026 och blev slutligt 3 juni 2026. Domstolen fann ingen kränkning av egendomsskyddet trots att en svensk sameby under cirka 50 år inte kunnat nyttja vissa betesrättigheter i Norge; domen är en separat gränsöverskridande rättslig jämförelse, inte en automatisk lösning för svenska markförhållanden. | Följ regeringens remiss/beredning, finansiering och faktiska genomförandebeslut; skilj historisk upprättelse från fastighets- och nyttjanderätt i enskilda fall. |
| **J – Storsjöodjuret** | Ingen ny oberoende observation, hydrologisk mätning eller runologisk publikation. Thiels privata föreläsningar i oktober är sekundärt rapporterade och saknar offentlig fullständig officiell transkription. | Fortsätt källkritisk jämförelse mellan folklore, Frösöstenen, teologi och offentliga Thiel-uttalanden. |
| **K – Cladonia/Storsjö kapell** | PR #4 har redan uppdaterats med SVT:s och kampanjplattformens uppgifter om över 30 000 namnunderskrifter. Exakt totalareal, om 300-ha-delen ingår i 15 000-ha-siffran och fastigheternas lagfarter är fortfarande inte fastställda genom direkt Lantmäteriet-utdrag i denna arbetscykel. | Hämta två förvärvstillstånd, lagfarter, fastighetsutdrag, servitut, jaktupplåtelser och avverkningsanmälningar. |
| **L – Skaga kapell** | Ingen ny RAÄ-, länsstyrelse-, kyrkoarkiv- eller restaureringshandling identifierad. | Fortsätt med daterade inventarier, byggnadsarkeologi, brand-/återuppbyggnadsdokument och skilj legend från arkivbelägg. |
| **M – Böckernas väg till Athos** | Ingen ny offentlig katalogisering, digitalisering eller verifierad donation identifierad. | Följ offentliga katalogposter och proveniens mellan Sverige, Bulgarien, Grekland och Athos; inga privata eller begränsade uppgifter. |
| **N – Från skrift till Storebror** | EU:s AI Act har fått ändrad tidsplan för delar av högriskreglerna: Annex III-system till 2 december 2027 och högriskprodukter enligt Annex I till 2 augusti 2028. Nytt 9 november: Meta meddelar global utvidgning av AI-baserad åldersuppskattning på Instagram, som kan placera konton med vuxet födelsedatum i Teen Account-skydd. Meta beskriver metoden som AI-inferens; tidigare metodbeskrivning omfattar profil-/aktivitetsdata och visuell analys. Meta har inte offentliggjort felmarginaler, oberoende revision eller fullständig överklagandeprocess i den nya uppdateringen. | Följ publicering i Official Journal, tekniska standarder, nationell tillsyn och faktisk offentlig upphandling; för Meta: felklassificeringar, datakällor, retention, mänsklig prövning och möjlighet att bestrida åldersbedömningen. |
| **O – Hormuz och sjöfarten** | PR #3 innehåller UKMTO 197–200 och JMIC Update 112 (177 rapporterade incidenter sedan 1 mars; hotnivå SEVERE). Nytt 9 november: IRGC-marinrepresentant påstår att navigationshjälpmedel i södra Hormuz förstörts och att inga obehöriga fartyg passerat; Reuters har inte kunnat bekräfta tid, orsak, plats eller faktisk påverkan. Ett Qatari-medlingsförslag uppges koppla återöppning av sundet till amerikanska eftergifter och IAEA-inspektioner. De detaljerade villkoren är inte ett undertecknat avtal. | Följ oberoende navigations-/sjöfartsbekräftelse, IMO-inlämnad rutt, officiella uttalanden från Qatar/Oman/USA/Iran och om någon faktisk transitförändring sker. Skilj JMIC:s 177 rapporterade incidenter från IMO:s 130 verifierade attacker. |
| **P – USA:s kongress** | AP har kallat demokratiskt övertagande av båda kamrarna. Den nya kongressen tillträder 3 januari 2027; sittande kongress behåller makten under övergången. Reuters 8 november beskriver aviserad tillsynsagenda från kommande demokratiska ledare, inte redan inledda utredningar. | Följ dagens cloture-procedur om H.R.2347, delstatlig certifiering, utskottsordföranden och faktisk subpoena-/anslagsmakt efter 3 januari. |
| **Q – Gripen och Europas säkerhet** | PR #12 har redan Saab-uppgiften om AI-agenter testade i Gripen E och avtalet med Naval Group om sensorer/vapenkontroll till fyra svenska FDI-fregatter. Saab-uppgiften om AI-agenter är partsuppgift utan publicerad oberoende testdata. | Följ FMV-/Saab-leveranser, exportavtal och teknisk validering; inga känsliga operativa detaljer. |
| **R – Strategisk energi och större bolag** | Northvolt/Lyten: ingen ny oberoende redovisning av kommersiella leveransvolymer identifierad; bolagsuppgifter om produktionsramp måste skiljas från faktisk leverans. Viscaria och Meta/AI-finansieringen korskopplas till el- och kapitalbehov. | Följ Lyten-site, anställning, produktion, kundleveranser, elavtal och finansiering; verifiera Northvolt-tillgångars återbruk mot faktiska avtal. |
| **S – Urbergsskölden / civil underjordisk infrastruktur** | Posiva fick driftlicens 22 oktober till slutet av 2070 för högst 6 500 ton uran i använt bränsle. Licensen är inte samma sak som att driften redan startat; STUK:s förberedande inspektioner och säkerhetsvillkor återstår. CRMA, RAKKA, Suhanko och Viscaria korskopplas. | Följ STUK:s inspektioner, driftstart, långsiktig förvaltning och offentliga säkerhetsbeslut. Publicera inte åtkomst- eller sårbarhetsdetaljer om skyddsobjekt. |

### Nya arbetsobjekt och ändringar i godkännandekön

- **PR #6 – AI-finansiering:** uppdaterat med den officiellt offentliggjorda SPV-strukturen för Broadcom/Anthropic och Metas USD-/EUR-obligationserbjudanden. Fortsatt draft; ej mergat eller publicerat.
- **PR #9 – Urbergsskölden:** kompletterat med Suhankos interimistiska domstolsstopp och skillnaden mellan CRMA-status och lagakraftvunna tillstånd. Fortsatt draft.
- **PR #17 – AI-infrastrukturens politiska riskpremie:** kompletterat med Googles miljö-/vattenlagsutredning i Muhos, EuroHPC:s ändrade gigafabrikdeadlines och AP:s kongressbedömning. Fortsatt draft.
- **PR #16 – Breaking Watch/masterplan:** denna arbetslogg är en uppdatering av bevakningsunderlaget, inte en publicering.
- PR #3, #4, #7, #12, #22, #28 och #30 kvarstår som separata arbets-/granskningsärenden enligt sina egna statusar. Ingen artikel har godkänts eller publicerats i denna cykel.

### Webb- och publiceringsstatus

Den tidigare kortversionen av Hormuzartikeln är den enda version som tidigare arbetslogg dokumenterar som LIVE. Den senare fullversionen i PR #3 är fortfarande draft och dess tidigare godkännande omfattar inte den reviderade texten. Ingen ny merge, deployment eller LIVE-kontroll har gjorts i denna cykel. Databasbaserad webbkö har inte skrivits till eller bekräftats; den senaste dokumenterade blockeraren är tom IP-allowlist för Render Postgres.



### Källrättelse – samiska sanningskommissionens slutrapport

Tidigare arbetslogg angav felaktigt **36 rekommendationer**. Det ska rättas till **71 uppmaningar och 49 förslag**. Institutet för mänskliga rättigheter redovisar samma uppdelning, och rapporten finns i Riksdagens dokumentdatabas. Mandatet avgränsade uttryckligen analys av rätten till renskötsel och därtill knutna rättigheter samt författningsändringar inom de tidigare Renmarkskommitté-direktivens område. Detta är en viktig avgränsning när rapporten kopplas till enskilda markförvärv eller samebyars nyttjanderätt.

Primärkällor:
- SOU 2026:58 i Riksdagens dokumentdatabas: https://data.riksdagen.se/dokument/HEB358
- Kommissionens tilläggsdirektiv 2025:84: https://www.regeringen.se/contentassets/c309be2a10854ae7baa6f4dbdd51c1f9/tillaggsdirektiv-till-sanningskommissionen-for-det-samiska-folket-ku-202102-dir.-202584.pdf
- Institutet för mänskliga rättigheter, 30 september 2026: https://mrinstitutet.se/aktuellt/nyheter-2026/2026-09-30-sanningskommissionens-slutrapport-visar-vagen-mot-upprattelse-och-forsoning
- ECHR, Saarivuoma Sami Village v. Norway, application 2381/22: https://hudoc.echr.coe.int/eng?i=001-248836



## Sen uppdatering – 9 november 2026

### N – Plattformarnas automatiserade åldersinferens

Meta meddelade 9 november global utvidgning av AI-baserad åldersuppskattning på Instagram. Bolaget säger att miljontals fler tonårskonton ska föras in i Teen Account-skydd även när kontot anger ett vuxet födelsedatum. Meta uppger också att Apple Age Range-signal används i Australien och att liknande teknik ska rullas ut på Facebook och senare Threads.

**PRIMÄRKÄLLA – Meta, 9 november:** https://about.fb.com/news/2026/11/expanding-teen-account-protections-to-teens-around-the-world/

**OBEROENDE BEKRÄFTELSE – Reuters, 9 november:** https://www.reuters.com/legal/litigation/meta-expands-ai-age-checks-instagram-teens-lawsuits-mount-2026-11-09/

**Metodens tidigare offentliga beskrivning:** Meta har tidigare beskrivit en kombination av profil- och aktivitetsmönster, textuella signaler och visuell analys av foto/video för generella åldersledtrådar som längd och benstruktur. Meta säger att detta inte är ansiktsigenkänning. Den uppgiften gäller den tidigare metodbeskrivningen och ska inte automatiskt tolkas som fullständig teknisk dokumentation av den globala utrullningen 9 november.

**Öppna frågor:** felmarginaler per åldersgrupp och region; falska positiva/negativa; vilka visuella data som analyseras och hur länge de sparas; mänsklig granskning; hur en vuxen som felaktigt klassificeras som minderårig kan överklaga; extern revision och dataskyddsbedömning. Artikelvinkel för N: *När plattformen slutar fråga och börjar uppskatta din ålder – vem granskar felbesluten?*

### O – Förhandlingsspåret i Hormuz

The Guardian 7 november rapporterade om ett Qatari-förslag som kopplar lättad amerikansk blockad, frysta iranska tillgångar, IAEA-inspektioner och återöppning av Hormuz. Qatars officiella uttalanden bekräftar fortsatt förmedling och samtal, men inte alla detaljer. Reuters 9 november återger en anonym IRGC-marinrepresentants påstående om förstörda navigationshjälpmedel. Detta är en partsuppgift utan oberoende teknisk bekräftelse.

Källor:
- https://www.theguardian.com/world/2026/nov/07/strait-of-hormuz-qatar-plan-iran-nuclear-inspections
- https://www.reuters.com/world/iran-says-no-unauthorised-vessels-transited-strait-hormuz-overnight-after-2026-11-09/
- https://mofa.gov.qa/en/qatar/latest-articles/latest-news/details/2026/11/03/advisor-to-prime-minister--official-spokesperson-for-ministry-of-foreign-affairs--qatar-continues-its-efforts-to-bridge-gap-between-washington--tehran

### G – Kopplingen till Libanon

Den rapporterade Qatari-sekvensen uppges kräva att Libanonkriget upphör som ett villkor för Hormuzöppning. Detta är en del av en förhandlingsrapport, inte ett avtal eller ett bekräftat eldupphör. PR #22 har fått en separat källnotering; UNIFIL:s mandat och tillbakadragande påverkas inte automatiskt av förslaget.

### Arbetsstatus

PR #3 och PR #22 har kompletterats med respektive källnotering. PR #16 har uppdaterats med N/O/G-delta. Ingen artikel har mergats eller publicerats.


# FOLKTRIBUNALEN – Breaking Watch
## Kontrollrunda 10 november 2026, 00.34 EET (Sofia)

**Omfattning:** huvudspår A–S, 19 av 19 kontrollerade i denna cykel.  
**Tröskel:** endast materiella förändringar förs vidare som notiser eller artikeluppdateringar.  
**Publiceringsregel:** inget publicerat automatiskt. Alla nya arbetsgrenar nedan är utkast.

## Nya materiella fynd

### B – Nordisk omreglering av datacenter och elnätskapacitet

**Norge, 9 november – PRIMÄRKÄLLA:** Regeringen meddelade att den vill utreda en koncessionsordning för befintliga och framtida datacenter. Det är en regeringsavsikt, inte en antagen lag. Förslaget ska väga in samhällsnytta, digital säkerhet och beredskap; kryptodrift ska inte räknas som samhällsnyttig. Regeringen vill också att stora nya laster bidrar mer till nät- och systemkostnader och att branschen diskuterar kommersiella bidrag till ny kraftproduktion. Statnett har separat pausat nya nätkapacitetsreservationer för datacenter till senast 1 augusti 2027. Statnett redovisar 800 MW anslutet, 4 200 MW reserverat, 9 100 MW i kapacitetskö och 18 000 MW i ytterligare förfrågningar. Dessa är olika stadier, inte installerad effekt.

**Finland, 29–30 oktober – PRIMÄRKÄLLA:** Regeringen överlämnade HE 282/2026 om ett datacenterregister. Förslaget gäller datacenter med minst 0,5 MW installerad IT-effekt. Operatören ska rapportera ägare, plats, användning, kapacitet, tidsplan, el- och vattenanvändning. NESA ska föra registret och publicera kvartalsvisa översikter; första offentliga översikten planeras senast 30 september 2027. Föreslaget ikraftträdande är 1 april 2027. Registret är inte ett drifttillstånd och får enligt propositionen inte användas för att godkänna eller avslå ett enskilt projekt.

**Danmark, 20 augusti och senare – PRIMÄRKÄLLA:** Folketingets L 23 om prioritering av nätkapacitet och lämplig anslutning är markerat som stadfäst. Det är en bredare lag om nätkapacitet, inte en särskild datacenterlag. Le Monde rapporterar att stora datacenter hamnar långt ned i den danska prioriteringen när kapaciteten är knapp; den exakta tillämpningen ska följas i genomförandereglerna.

**Europa, 6–7 november / publicerat 9 november – OBEROENDE RAPPORTERING:** Le Monde rapporterade att Stop Dirty Data Centres-koalitionen räknade 90 evenemang i cirka 15 länder. Antalet är koalitionens sammanräkning återgiven av tidningen, inte en oberoende deltagarräkning.

**Betydelse:** Tre nordiska stater använder olika styrmedel: Norge förbereder tillståndsprövning och har en nätreservationspaus; Finland föreslår ett informationsregister; Danmark har stadfäst en bredare kapacitetsprioriteringslag. De får inte beskrivas som ett gemensamt förbud. Lokala protester visar en parallell konflikt om el, vatten, mark och kostnadsfördelning, men bevisar inte att de orsakade regeringarnas beslut.

**Arbetsåtgärd:** PR #31 uppdaterad med jämförelsen och tydliga skillnader mellan lag, proposition, regeringsavsikt och nätoperatörsåtgärd.

Källor:
- Norge, regeringsbesked 9 november: https://www.regjeringen.no/no/aktuelt/regjeringen-vil-ha-en-kontrollert-vekst-av-samfunnsnyttige-datasentre-i-norge/id3192054/
- Statnett 9 november: https://www.statnett.no/om-statnett/nyheter-og-pressemeldinger/nyhetsarkiv-2026/midlertidige-tiltak-for-fortsatt-forsvarlig-systemdrift/
- Finland, regeringsbesked 29 oktober: https://valtioneuvosto.fi/en/-/1410877/government-proposes-new-data-centre-register-to-improve-situational-awareness
- Finland, Eduskunta HE 282/2026: https://www.eduskunta.fi/asiat-ja-aanestykset/valtiopaivaasiat/asiakirjat/edktunnus/EDK-2026-AK-60520
- Danmark, Folketinget L 23: https://www.ft.dk/samling/20252/lovforslag/l23/beh1/forhandling.htm
- Le Monde, protester 6–7 november, publicerat 9 november: https://www.lemonde.fr/en/economy/article/2026/11/09/protests-against-data-centers-held-across-europe_6775706_19.html
- Le Monde, nordisk policyförändring 9 november: https://www.lemonde.fr/international/article/2026/11/09/les-pays-nordiques-freinent-le-deploiement-des-data-centers_6808695_3210.html

### G – Mordet på Fader Samir Daou, Jbeil

**Händelser 28–30 oktober; nya sammanställningar publicerade 4 november.** Fader Samir Mikhael Daou försvann den 28 oktober och hittades död i Ain Jrain den 29 oktober. ISF meddelade den 30 oktober att en misstänkt gripits och att utredningen fortsatte under rättslig tillsyn.

**OBEROENDE RAPPORTERING:** L'Orient Today rapporterade den 30 oktober att dess korrespondent fått uppgift om att en misstänkt deltog i en rekonstruktion av händelseförloppet. L'Orient skrev samtidigt att ISF inte offentliggjort identitet eller motiv.

**PARTSUPPGIFT / MEDIERAPPORTERAD UPPGIFT:** Agenzia Fides 4 november återgav lokala medieuppgifter om en 22-årig säsongsarbetare och en påstådd bekännelse. Något förhörsprotokoll eller domstolsdokument som styrker bekännelsen har inte offentliggjorts i det granskade materialet. Ingen dom har meddelats. Nationalitet är inte belägg för motiv och får inte generaliseras till en grupp.

**PRIMÄRT KYRKLIGT UTTALANDE, återgivet av MTV:** Maronitiska stiftet i Jbeil fördömde mordet och uppmanade till ansvar, återhållsamhet och att inte sprida obekräftade uppgifter. Patriarken Bechara al-Rai krävde en fullständig utredning och rättvisa.

**Nytt sammanhang:** Fides återger även Daous uttalande från 2023 om ekonomisk kollaps, emigration och vardagliga svårigheter i bergsförsamlingarnas kristna samhällen. Det är en relevant socialhistorisk bakgrund men får inte användas som förklaring till mordet.

**Arbetsåtgärd:** Nytt draft-PR #36 skapat. Det skiljer mordet och gripandet från obekräftade detaljer, anger att motivet är okänt och dokumenterar stiftets uppmaning att undvika rykten.

Källor:
- L'Orient Today, 29 oktober: https://today.lorientlejour.com/article/1552604/priest-samir-daou-found-murdered-after-going-missing.html
- L'Orient Today, 30 oktober: https://today.lorientlejour.com/article/1552743/assassination-of-priest-samir-daou-isf-arrest-a-suspect.html
- LBCI, ISF-besked 30 oktober: https://www.lbcgroup.tv/news/lebanon-news/965538/lbci-lebanon-articles/en
- Agenzia Fides, 4 november: https://fides.org/fr/news/78378-ASIE_LIBAN_Un_pretre_maronite_a_ete_tue
- MTV Lebanon, stiftets uttalande 29 oktober: https://www.mtv.com.lb/en/News/%D9%85%D8%AD%D9%84%D9%8A%D8%A7%D8%AA/1753317/%D9%85%D8%B7%D8%B1%D8%A7%D9%86%D9%8A-%D8%A9-%D8%AC%D8%A8%D9%8A%D9%84-%D8%A7%D9%84%D9%85%D8%A7%D8%B1%D9%88%D9%86%D9%8A-%D8%A9-%D8%AA%D8%B9%D9%84%D9%8A%D9%82%D8%A7--%D8%B9%D9%84%D9%89-%D9%82%D8%AA%D9%84-%D8%A7%D9%84%D8%A3%D8%A8-%D8%B6%D9%88--%D9%84%D8%B9%D8%AF%D9%85-%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%B4%D8%A7%D8%A6%D8%B9%D8%A7%D8%AA

### K – Cladonia / Storsjö: rapporterad tilläggsaffär

**Publiceringsdatum 19 oktober:** Fastighetsvärlden identifierar Berg Storsjö 18:3 och 18:5 som två mindre fastigheter, cirka 300 hektar och fem miljoner kronor, förvärvade genom ett annat förvärvstillstånd. Areal och köpeskilling återges från Östersunds-Posten. Fastighetsvärlden återger också SCA:s uppgift att de sammanlagda 240 miljoner kronor som bolaget fått i två affärer användes för att köpa 4 000–5 000 hektar mer produktiv skogsmark närmare industri och terminaler.

**Källstatus:** väl specificerad sekundärrapportering, inte full primärverifiering. Lantmäteriets lagfartsuppgifter, köpehandlingar och Länsstyrelsens separata beslut har ännu inte hämtats direkt. SVT:s uppföljning 6 november beskriver den större affären och lokala jaktfrågor; den får inte blandas ihop med tilläggsförvärvet utan fastighetsbilagor.

**Arbetsåtgärd:** PR #32 uppdaterad med fastighetsbeteckningarna och tydlig status för primärkontrollen.

Källa:
- Fastighetsvärlden, 19 oktober 2026: https://www.fastighetsvarlden.se/notiser/palantirs-vd-kopt-ytterligare-i-harjedalen/

### Övriga spår – kontrollmatris

| Spår | Kontrollresultat denna cykel | Status / nästa kontroll |
|---|---|---|
| A – Palantir | SEC Form 10-Q för kvartalet till 30 sep 2026 är hämtad: RPO 4,9 md USD; minst 5,6 md USD i molninköpsåtagande över tio avtalsår. Guardian/FOI 9 nov visar lobbying om GP-data, inte genomförd integration. | PR #33. Hämta fullständiga FOI-handlingar, FDP-avtal, exitvillkor och regeringens förlängningsbeslut. |
| B – Datacenter | Norge/Statnett pausade nya reservationer 9 nov; Finland HE 282/2026 är lagförslag; Lyten uppger 16 GWh batteri och >1 GW AI-datacenter i Skellefteå, ännu ej oberoende bekräftad drift. | PR #31 och #17. Följ licenskriterier, register, bygglov, nätavtal och faktisk uttagen effekt. |
| C – Synkronicitet | Teoretiska modeller om meningsskapande har noterats; inga nya empiriska resultat som etablerar acausal kausalitet. | Följ reproducerbarhet, förregistrering och metodkritik. |
| D – Sofia | Ingen ny arkeologisk utgrävningsrapport eller ny dokumentation om Samuils grav identifierad i denna cykel. NAIM-BAS:s katalogmaterial kvarstår som forskningsunderlag. | Begär rapporter från NAIM-BAS, Sofia kommun och museer; håll gravtradition, arkeologi och tolkning isär. |
| E – Mineraler | Bergsstaten beviljade 8 okt Arete Gold undersökningstillstånd Rottensjön nr 100, 27 557,73 ha, dnr BS 200-1233-2026; beslutet återger invändningar om rennäring, natur/kultur och försvarsintresse. Överklagandefrist 12 nov. | PR #37 och #34. Hämta fullständiga yttranden, överklaganden, arbetsplan och säkerhet. Viscarias kreditprocess följs separat. |
| F – NVIDIA/finansiering | Senaste hämtade SEC 10-Q är fortfarande 26 aug för kvartalet till 31 juli. NVIDIA bekräftade 28 okt att Q3 FY2027-resultat publiceras 17 nov. | Följ CFO-kommentar och SEC-inlämning 17 nov; skilj åtaganden, kreditramar, utbetalningar och säkerheter. |
| G – Libanon | Daou-fallet har nytt sammanställt källäge; motiv ej offentliggjort. PR #36 skapat. | Följ ISF, domstol, kyrkliga uttalanden, civila konsekvenser och byarnas återvändande. |
| H – Kyrkor genom imperierna | Inget nytt offentligt restaurerings- eller ägarbeslut identifierat. | Fortsätt stad-för-stad med kommunala byggnadsarkiv och kyrkoarkiv. |
| I – Fennoskandien | Ingen ny markanvändnings- eller skogsbruksakt som passerar notiströskeln. Samiska sanningskommissionens korrigerade tal kvarstår: 71 uppmaningar och 49 förslag. | Följ skogsbeslut, rennäring, naturvärden och rättighetsprocesser. |
| J – Storsjöodjuret | Ingen ny primär dokumentation om observationer, hydrologi eller Frösöstenen. | Fortsätt folkloristik och runologi separat från biologiska påståenden; Thiels citat kräver full kontext. |
| K – Cladonia | Medierapport om JO-anmälan 21 okt och separat rapporterad tilläggsaffär 18:3/18:5. Ingen JO-akt, lagfart eller köpehandling har hämtats i denna runda. Arete Gold/Rottensjön är ett separat bolag/ärende utan belagd koppling. | PR #32. Hämta Lantmäteriets lagfarter, köpehandlingar, ISP- och JO-diarie samt Länsstyrelsens beslut. |
| L – Skaga | Ingen ny restaureringsakt eller inventarieförteckning identifierad. | Följ RAÄ, Länsstyrelsen, Tivedens lokala kyrkoarkiv och återuppbyggnadsdokumentation. |
| M – Athos | Inget nytt offentligt katalog- eller donationsbesked identifierat. PR #26 kvarstår. | Följ offentliga kataloger och digitaliseringsprojekt; respektera klostrens tillträdesregler. |
| N – Skrift till Storebror | Metas utvidgade AI-baserade åldersinferens på Instagram, publicerad 9 november, finns i masterplanens föregående logg. Inget nytt tillsynsbeslut identifierat. | Följ felklassificering, överklagande, dataskydd och svensk realtidsbiometri. |
| O – Hormuz | PR #3 innehåller den senaste fullversionen med IMO:s 131 incidenter/25 omkomna och HUDA-spåret; Saudiarabiens pipelineattack 9 november finns som partsuppgift/rapporterad händelse. | Följ IMO/UKMTO, fartygsidentitet, försäkring, driftdata och oberoende skadebedömning. |
| P – USA:s kongress | Senate LIS Roll Call 257 visar 73–25–2 den 9 nov kl. 17.31 ET för cloture på motionen att gå vidare till H.R.2347. Det är procedursteg; KAT26764 är substituttexten och inte slutligt antagen lag. | PR #10 och #17 uppdaterade. Följ post-cloture-behandling 10 nov, amendments och separat passageomröstning. |
| Q – Gripen | Saab meddelade 15 okt FMV-order på 1,3 mdkr för ny flygstyrdator; planerade leveranser 2030. PR #12 innehåller uppgiften. | Hämta FMV:s fullständiga kontrakt och följ milstolpar, utan operativa detaljer. |
| R – Strategisk energi | Ingen ny oberoende återstart av Khor Mor identifierad. Lyten anger återstartad batteriverksamhet och EdgeConneX fas 1 i Skellefteå, men uppgifterna är bolagets egna. | Följ Dana Gas, KRG-operatörer, STUK/Posiva och Lyten/EdgeConneX för faktiska driftsiffror, nätuttag och tillstånd. |
| S – Urbergsskölden | GTK:s 4 juni-studie visar begränsad ekonomisk potential i de flesta undersökta stängda gruvavfallsområden; data har lagts i offentligt kartlager/RAKKA. Rottensjön-ärendet korskopplas till E. | Följ GTK/SGU, CRMA, Bergsstaten, Posiva och civil energilagring; publicera inte skyddsobjektsdetaljer. |

## Artikel- och arbetskö

- **PR #31:** Vem får elektriciteten? Norge och AI-industrins nätanslutning – uppdaterad 10 november med nordisk jämförelse.
- **PR #32:** Storsjö kapell – Cladonia, markägande och lokala rättigheter – uppdaterad 10 november med Berg Storsjö 18:3/18:5 och källreservation.
- **PR #36:** Mordet på Fader Samir Daou – Jbeil, rättsprocessen och bergsförsamlingarnas villkor – nytt draft, ej publicerat.
- **PR #37:** Rottensjön – 27 558 hektar prospektering och konkurrerande riksintressen – nytt draft, ej publicerat; överklagandefrist 12 november.
- **PR #3, #10, #16, #17, #30, #33–35:** kvarstår som öppna granskningsärenden enligt respektive arbetsgren.

**Publiceringsstatus:** Inga nya artiklar har mergats eller publicerats LIVE i denna cykel. PR #31, #32 och #36 är utkast. Ingen databasbaserad webbkö har ändrats eller påstås vara uppdaterad.


## Delta 10 november 2026, 04.18 EET

Ny kontrolljournal: [2026-11-10-breaking-watch-0418.md](editorial/research/2026-11-10-breaking-watch-0418.md). Senatens roll-call 257 har nu officiell primärverifiering. Rottensjön nr 100 har fått ett separat granskningsutkast PR #37. PR #10, #17 och #34 är uppdaterade i respektive arbetsgren. Inga ändringar har mergats eller publicerats LIVE.


## Delta 10 november 2026 – uppföljning efter 04.18 EET

Ny kontrolljournal: [2026-11-10-breaking-watch-followup.md](editorial/research/2026-11-10-breaking-watch-followup.md). A–S har åter fått kontrollnotering. Materiella preciseringar: EdgeConneX har enligt Norran fått ett delstartbesked som endast gäller grundläggning; NVIDIA:s 10-Q visar 36 md USD i AI-cloud agreements med ensidig omdirigeringsrätt för vissa partner; Samuils fyndår anges olika som 1965 och 1969 i skilda rapporteringskedjor; East-West-pipelinen rapporterades träffad 9 november utan rapporterat driftstopp.

**Befintliga utkast uppdaterade, inga nya artiklar startade:** PR #5 (EdgeConneX), PR #8 (Samuil) och PR #14 (NVIDIA). PR #3 innehåller redan East-West-pipelineuppgiften. PR #16 har fått den nya A–S-journalen.

**Renderkontroll:** statiska tjänstens senaste deployment är fortsatt `live` på commit `8e46f91` (8 november, “Publish approved Hormuz article”). Senaste hämtade `main`-commit är `f265e51` (9 november, “Publish expanded Hormuz investigation”); ingen senare Render-deployhändelse har identifierats. Editorial backend är fortsatt på deployment från 4 november. Databasen är `available`, men tom IP-allowlist blockerar alla externa SQL-anslutningar; Render anger att dess hostade MCP-server saknar en allowlistbar IP. Direkt HTTP-/sidkontroll misslyckades på URL-/DNS-nivå i denna körning. Deploystatus är därför bekräftad i Render, men sidinnehållet är inte direkt kontrollerat.

Ingen draft-PR har mergats. Ingen ny artikel har publicerats. Den godkända korta Hormuzartikeln har en registrerad live-deploypost; PR #3:s utökade granskningsversion är separat och fortfarande öppen.


## Driftuppföljning 10 november 2026 – Hormuzversionen på webbplatsen

Källjämförelsen visar att Render fortfarande kör commit `8e46f91` från 8 november. Den deployade `src/app.js` visar Hormuzkortet med 130 incidenter och publiceringsdatum 8 november; den innehåller inte 9 november-versionens 131 incidenter eller East-West-pipelineavsnitt. GitHub `main` har däremot uppdaterad artikeltext i commit `f265e51` från 9 november. Ingen Render-deployhändelse efter 8 november har identifierats, trots `autoDeploy=yes` mot `main`. Orsaken är inte fastställd.

Render rapporterar deploymentstatus `live`, men det betyder i detta fall att den äldre 8 november-byggnaden är live. Webbläsar-/DNS-kontroll av själva HTML-sidan misslyckades. PR #3 är fortfarande draft; fullversionen är inte godkänd för uppdaterad publicering. Ingen manuell deploy har utlösts.

Render Postgres `folktribunalen-db` är `available`, men IP-allowlisten är tom. Read-only SQL-fråga avvisades med felet att externa anslutningar blockeras; Render anger att den hostade MCP-servern saknar en IP-adress att allowlista. Databasens köstatus är därför fortfarande oläsbar.


## P – senatsomröstningen 9 november: H.R. 2347 är BAAJA:s lagstiftningsfordon

Senate LIS Roll Call Vote 257 visar 73–25 för cloture på motionen att gå vidare till H.R. 2347. Senate Democratic Caucus och Senate Press Gallery anger att H.R. 2347 är det lagstiftningsfordon som används för Bipartisan American Affordability and Jobs Act (BAAJA). Senate LIS visar fortfarande den ursprungliga formella titeln *Survivor Justice Tax Prevention Act*. Detta är en skillnad mellan ursprunglig registertitel och den aktuella lagstiftningsfordonsrollen, inte två separata omröstningar. Cloture på motionen att gå vidare är inte slutlig passage; senaten fortsätter post-cloture den 10 november. PR #10 uppdaterat med denna skillnad, ersättningsändringen och miljö-/tribal-invändningarna.


## Källuppdatering 10 november 2026 – efter morgonens kontrollrunda

- **B/R – Norge:** Statnett publicerade 9 november en tillfällig paus för nya datacenterreservationer och vissa FOS §14-/420 kV-godkännanden, med förväntat slut senast 1 augusti 2027. Regeringen aviserade samma dag en planerad koncessionsordning för befintliga och framtida datacenter, med övergångsregler. Detta är inte en antagen lag. Statnetts kapacitetsstadier (800 MW anslutet, 4 200 MW reserverat, 9 100 MW i kö, 18 000 MW förfrågningar) ska inte summeras som driftsatt kapacitet. PR #31 uppdaterad med primärkällor och öppna frågor.
- **O – Hormuz/energi:** Reuters publicerade 10 november S&P Global Energy-data om 31 lastade LNG-fartyg ut genom Hormuz i oktober, högsta månadsnivån sedan konflikten började, men fortfarande långt under normal handel. Aramco Tower i Riyadh skadades i en separat attack 8 november; Houthirörelsen tog på sig ansvaret. East-West-pipelinen rapporterades träffad 9 november, men saudiska myndigheter uppgav ingen driftstörning och ingen gärningsperson har fastställts. PR #3 uppdaterad med skillnaden mellan dessa två händelser.
- **R – Khor Mor:** KRG:s ministerier bekräftade angreppet 8 november i ett gemensamt uttalande 9 november. Dana Gas uppger misstänkt drönarattack, släckt brand, inga personskador och fortsatt produktionsstopp. KRG:s cirka 2,8 GW-uppgift är myndighetsuppskattning, inte oberoende uppmätt produktion. PR #30 uppdaterad.
- **R – Zaporizjzja:** 330 kV Ferosplavna-1 förlorade anslutningen 8 november och återställdes samma dag enligt Energoatom. IAEA:s 27:e bortfall sedan 2022 och Energoatoms 16:e fullständiga bortfall under 2026 är två olika räknare. PR #35 innehåller redan primär- och oberoende källkontroll.
- **Arbetsflöde:** granskningsnoteringar i PR #3, #16, #30 och #31 uppdaterade. Inga nya artiklar startade, inga PR:er mergade och ingen artikel publicerad i denna kontrollrunda.


## Artikelkö – 10 november 2026
- **PR #38 – C: Synkronicitet i algoritmernas spegel – mellan mening och mekanism.** Nytt fullständigt granskningsutkast. Skiljer subjektiv meningsupplevelse, algoritmisk serendipitet och påstådd acausalitet; innehåller testbara hypoteser och metodkrav. Draft för chefredaktörens granskning, inte mergat eller publicerat.


## Delta 10 november 2026, 18.04 Europe/Sofia

- **Nytt granskningsärende PR #39 – Libanon:** *Libanon försöker återvinna presidentämbetets förlorade arkiv*. Utkastet behandlar presidentkansliets/USEK:s MoU den 30 oktober, presidentkansliets egna uppgifter om saknade handlingar och krigsrelaterade arkivförluster, det separata utrikesministeriet/USEK-spåret för diasporaanknutna medborgarskapshandlingar samt Aouns möte med Maronite Foundation for the Diaspora den 10 november.
- **Källstatus:** presidentkansliets MoU och mötesnotis är primärkällor; utrikesministeriets MoU är ett separat primärspår. AUB och University of Chicago ger akademisk kontext men verifierar inte specifika presidentarkivförluster.
- **Öppna frågor:** fullständiga MoU-texter, arkivhållare, inventarielista, finansiering, digitaliseringsstandarder, sekretess och allmänhetens åtkomst.
- **Status:** PR #39 är ett öppet draft för chefredaktörens granskning. Inte mergat, inte publicerat och inte LIVE.

- **F – Anthropic/AI-finansiering:** PR #14 har fått en ny primärkälla: SEC S-1/A-2 inlämnad 10 november. Prospektet redovisar 900,9 md USD i samlade compute-/infrastrukturåtaganden, upp från 895,4 md USD i S-1/A-1 den 2 november; 186,2 md USD är villkorade eller uppsägningsbara. En villkorad privat placering på 26 md USD namnger bland andra NVIDIA, Google, AMD, Broadcom, Micron, Microsoft och TSMC. Skillnaden mellan prospektversionerna är inte bevis på kontant utbetalning. Åtaganden är inte automatiskt skuld eller utbetalt kapital.
- **A – Palantir:** PR #7 kompletterat med Q3-10-Q:s jämförelse: amerikansk kommersiell intäkt 984 m USD mot amerikansk myndighetsintäkt 953 m USD för kvartalet. Nio-månadersmixen är fortfarande cirka 51 % myndigheter och 49 % kommersiellt.
- **D/H – Sofia/Serres:** PR #8 källrättat. Grekisk officiell uppgift anger utställning av 48 föremål till 5 november och planerad återföring därefter till två kloster och Serres/Nigritas metropolitdöme. Ingen primärkälla eller mottagningskvittens har hittats för att två silverflabeller faktiskt överlämnades 8 november; uppgiften är EJ BEKRÄFTAD.
- **K – Cladonia:** PR #4 kompletterat med Sveriges Radios rapport 10 november om ett första möte. SR anger inte tydligt mötesdatum eller om mötet redan genomförts; kommunalt protokoll/kallelse saknas.
- **Publiceringsstatus:** inga nya artiklar har mergats eller publicerats LIVE. PR #4, #7, #8, #14 och #16 har fått källkommentarer; PR #16:s uppföljningsjournal har uppdaterats.


## Delta 10 november 2026, 18.23 Europe/Sofia – Anthropic IPO som separat artikel

- **PR #40 – Anthropic går till börsen – 900,9 miljarder dollar i computeåtaganden.** Nytt separat draft för spår F/B/R, baserat på SEC Form S-1/A-2 den 10 november. Artikeln granskar det föreslagna prisintervallet $70–78, 825 miljoner Class A-aktier, en villkorad privat placering om $26 miljarder och 900,9 miljarder dollar i aggregerade köp-/leasingåtaganden för compute och infrastruktur.
- **Viktig avgränsning:** 900,9 miljarder dollar är inte omedelbar skuld eller utbetalt kapital; 186,2 miljarder är föremål för villkor/uppsägningsrätt och ytterligare $150–175 miljarder i icke-fasta betalningsarrangemang ligger utanför totalsumman.
- **PR #14** behåller sin egen vinkel på NVIDIA:s $105 miljarder residualvärdesgaranti och SB Energy/OpenAI. Anthropic-IPO:n behandlas i PR #40, inte som ett nytt huvudavsnitt i PR #14.
- **Status:** PR #40 öppet draft, inte godkänt, inte mergat, inte publicerat och inte LIVE.


## Delta 10 november 2026, 18.32 Europe/Sofia – uppdaterad redaktionell status

### Nya granskningsutkast
- **PR #41:** Arbetsförmedlingens statistiska bedömningsstöd och IMY:s aktiva tillsyn – spår N/A.
- **PR #42:** Palantirs lobbying om GP-journaler i NHS FDP – spår A/N.
- **PR #43:** Lyten/EdgeConneX och återbruket av Northvolt-området i Skellefteå – spår R/B/S.
- **PR #44:** Venture Globals AI-utility-strategi – spår R/B/F.
- **PR #40:** Anthropic S-1/A-2 kompletterad med avtalsavstämning, motpartsvillkor, Broadcom-leasing och TeraWulf/Google-backstop.

### Nya källuppdateringar i befintliga utkast
- **PR #3:** ADNOC Gas Q3 och fortsatt utredning av Fujairah som möjlig LNG-exportväg; inget beslut eller FID.
- **PR #4:** Sveriges Radio 10 november om ett första möte kring Cladonia/Storsjö; datum, protokoll och deltagarlista saknas.
- **PR #7:** Guardian:s FOI-baserade rapportering 9 november om Palantirs lobbying för GP-data samt källkonflikt om FDP-kontraktets maximala slutår.
- **PR #8:** rättelse om två silverflabeller; faktisk återlämning 8 november ej styrkt.
- **PR #34:** Finland HE 133/2026 på presidentens beslutssida 6 november; slutlig lagtext/ikraftträdande ska verifieras i Finlex.
- **PR #39:** Libanons presidentkansliets MoU- och mötesnotiser kontrollerade direkt.

### Viktiga nya källor och status
- **Anthropic:** SEC Form S-1/A-2 10 november redovisar $900,9 md aggregerade compute-/infrastrukturåtaganden. Det är inte omedelbar skuld. 186,2 md är föremål för villkor/uppsägningsrättigheter; 150–175 md rörliga uppskattningar ligger utanför totalsumman. TeraWulf Form 8-K 4 november visar Google-backstop för vissa av Anthropics 401 MW leaseförpliktelser; inte en generell garanti för hela Anthropic.
- **NHS/Palantir:** Guardian:s FOI-baserade rapportering visar lobbying om utvidgning till GP-data, inte faktisk överföring. Parlamentets HCWS57 från 21 november 2023 säger att GP-data inte skulle ingå i den nationella FDP-plattformen.
- **Arbetsförmedlingen:** IMY:s tillsynssida uppdaterad 5 november anger aktiv granskning i steg 2 av 3. Arbetsförmedlingen säger att handläggaren fattar slutligt beslut; systemet använder profilering och randomisering i vissa gränsfall.
- **Northvolt/Skellefteå:** kommunen uppger att EdgeConneX senare förvärvade delar av området; direkt säljare och exakt datum är inte entydiga i kommunens FAQ och lagfart saknas; Lyten uppger att batteriupptrappning pågår och att EdgeConneX inlett utvecklingsarbete för fas 1. 1 GW är potentiell slutkapacitet, inte driftsatt effekt.
- **Venture Global:** SEC Form 8-K/Q3 och bolagets earnings-call-remarks 10 november anger ramavtal för upp till 16 × 720 MW, första 250 MW compute sent 2028 och mål om 5 GW till 2031. Inga fullständiga kund- eller finansieringsåtaganden har identifierats.
- **Hormuz:** Reuters rapporterar UAE-tender för 1,87 miljoner fat Saudi Arab Light från Gem No.2. Tenderhandlingen har inte hämtats direkt; faktisk lastning/köpare okända. ADNOC Gas säger att Fujairah-alternativet fortfarande utreds, inget beslut.
- **Finland/CRMA:** HE 133/2026 finns på presidentens beslutssida 6 november; slutlig lagtext och ikraftträdandedatum har inte återfunnits i Finlex.
- **Cladonia:** SR rapporterar ett första möte men ger inte ett tydligt datum eller protokoll.

### Rättelse
Masterplanens tidigare uppgift om att två silverflabeller återfördes till Timios Prodromos den 8 november är borttagen. Den specifika överlämningen är inte primärt eller oberoende styrkt. Officiell grekisk källa styrker endast utställning till 5 november och planerad återföring därefter.

### Arbetsflödesstatus
PR #39–#44 är öppna granskningsutkast. Ingen PR har mergats och ingen artikel har publicerats LIVE. Webbplatsens produktionsdatabas har inte ändrats.


## 10. Uppdatering 11 november 2026 kl. 00.45 Europe/Sofia

### Nya granskningsobjekt och källuppdateringar

- **PR #45 – Kela/Oiwa:** nytt separat draft för huvudspår N, baserat på arbetsdomstolens primärdom TT 2026:14 (18 maj 2026) och Yle MOT:s dokumentbaserade granskning 8–9 november. Utkastet skiljer uttryckligen den enskilda domens bevisvärdering från Yles uppgifter om den bredare 2 000-personersgranskningen. Ingen slutsats dras att hela pilotprojektet var olagligt; inget belägg har hittats för att ett AI-system själv fattade uppsägningsbeslut. PR #45 är draft, inte mergad och inte publicerad.
- **PR #22 – UNIFIL/Libanon:** kompletterad med Yles uppgift 10 november om cirka 180 finländska militärer i UNIFIL och att EU:s planerade stödinsats har ett annat, mer avgränsat uppdrag än UNIFIL. EU-insatsen får inte beskrivas som en ersättning för FN-missionen.
- **PR #12 – Gripen/Europeisk säkerhet:** kompletterad med Saab–Naval Group-kontraktet 6 november om cirka 2 miljarder kronor för system och sensorer till fyra svenska FDI-fregatter. Detta är ett separat marint delsystemskontrakt, inte ett Gripen-avtal.
- **PR #24 – AI-gigafabriker:** EuroHPC:s nya anbudslänkar för Lot 1 och Lot 2 är nu publicerade. Lot 1 stänger 4 februari 2027 och Lot 2 3 december 2026. Den tidigare uppgiften om 12 november gäller inte denna aktuella upphandling.
- **PR #16 – Breaking Watch:** A–S-matrisen och den daterade delta-loggen är uppdaterade i samma granskningsgren.

### Nya tvärgående bevakningspunkter

- **Svarta havet:** Europeiska kommissionens ordförande meddelade 10 november i Varna/Bukarest att upp till 50 miljoner euro ska avsättas för att påskynda en gemensam maritim säkerhetshubb med Bulgarien och Rumänien, med mål om operativ drift 2027. Detta är ett separat geografiskt spår från Hormuz. Kommissionens pressbriefing är primärkälla; Reuters ger oberoende rapportering.
- **Cladonia/Storsjö:** SVT rapporterade 10 november att Bergs kommun träffat en jurist som företrädde Cladonia i Svenstavik. Uppgiften styrker ett möte, inte ett kommunstyrelsebeslut eller bindande åtaganden. Mötesanteckningar och bolagets skriftliga svar saknas fortfarande.
- **Statkraft Mittlagan:** den första delen av huvudförhandlingen hölls 2–5 november i Halmstad; nästa del är planerad 1–4 december i Eldsberga. Något slutligt tillståndsbeslut har inte identifierats.

### Publicerings- och godkännandestatus

PR #3 Hormuz förblir den enda artikel som tidigare markerats som godkänd grundtext; den utökade versionen i PR #3 kräver fortfarande separat godkännande av tilläggen. PR #45 och övriga nya granskningsobjekt är drafts. Ingen artikel mergades eller publicerades i denna uppdatering. Databasbaserad webbkö och aktuell LIVE-rendering har inte ändrats eller bekräftats genom denna redaktionella uppdatering.


## 11 november 2026 kl. 02.00 Europe/Sofia – ny fördjupning av Svarta havet-spåret

- **PR #46 – Svarta havets maritima säkerhetshubb:** separat granskningsutkast skapat efter att Europeiska kommissionens pressbriefingar den 10 november preciserat arbetsgrupp, finansieringsram upp till €50 miljoner, mål om operativ status 2027 och geografisk samverkan över Varna, Constanța och en icke namngiven rumänsk flygbas. Utkastet skiljer hubben från MCM BLACK SEA och Odesas JMSC.
- **Ny primärkälla:** EU:s gemensamma genomföranderapport JOIN(2026) 15 final (3 juli 2026) beskriver hubben som civilledd, regionalt ägd och interinstitutionell, med CISE/EMSA-interoperabilitet och initialt regionalt partnerskap med Turkiet, Ukraina och Moldavien.
- **Oberoende korskontroll:** Reuters 10 november och AP 5 november. Ansvar för enskilda fartygsattacker hålls som obekräftat om inte offentlig forensisk attribution finns.
- **Öppna frågor:** finansieringsinstrument/utbetalning, arbetsgruppens mandat och sammansättning, juridisk form, dataägande, åtkomststyrning, besluts- och ansvarskedja samt mätbara kriterier för operativ status 2027.
- **Publiceringsstatus:** PR #46 är draft. Ingen merge, publicering eller LIVE-kontroll har skett.


## 11 november 2026 kl. 02.00 – Anthropic IPO-dokumentförlopp

PR #40 har kompletterats med ett viktigt källstatusskifte: Reuters rapporterade 10 november att en bankversion som cirkulerade 9 november med cirka 866,7 miljoner aktier och $70–80 återkallades som felaktig. Den offentliga SEC Form S-1/A-2, inlämnad 10 november, anger i stället 825 miljoner aktier och $70–78. Reuters kunde inte fastställa vilka uppgifter i bankversionen som var felaktiga. Den återkallade versionen används därför endast som dokumenthändelse; den offentliga SEC-handlingen är primärkälla för aktuella villkor. PR #40 är fortsatt draft, inte mergad eller publicerad.


## 11 november 2026 kl. 02.00 – Cladonia/SCA: kapitalomallokering

PR #4 har kompletterats med Fastighetsvärldens 19 oktober-uppgift om att SCA uppgett att de sammanlagt 240 mkr från de två transaktionerna använts till 4 000–5 000 ha produktiv, icke fjällnära skog närmare industri och terminaler. Detta är en partsuppgift återgiven av tidningen, inte verifierad spårning av kapital eller fullständig fastighetslista. Huvudpaketet anges till 235 mkr; separat tillstånd för Berg Storsjö 18:3 och 18:5 om cirka 300 ha anges till 5 mkr. Exakt totalareal kvarstår öppen tills registerutdrag har kontrollerats.


## 11 november 2026 kl. 02.00 – USA:s kongress: ledarövergång

PR #10 har kompletterats med att House Republicans valde Jim Jordan till partiets ledare i minoritet i nästa kongress med 106–73 den 10 november. Detta var en intern konferensomröstning, inte en plenarsalsomröstning eller ett tillträde före 3 januari 2027. Reuters uppger att senatsrepublikanerna återvalde John Thune genom acklamation. AP och Reuters används som oberoende bekräftelse.


### Kontrollnoteringar A–S – 11 november 2026 kl. 02.00

- EuroHPC:s officiella sida bekräftar Lot 1 4 februari 2027 och Lot 2 3 december 2026; tidigare inlämningar måste göras om via nya länkar.
- Sofia/Samuil: sarcofagens placering och ceremonin 3 oktober är redan dokumenterade i PR #8; ingen ny arkeologisk primärhandling denna cykel.
- Rottensjön: 12 november är nästa kontrollpunkt; inget utfall före fristens utgång förutsätts.
- Libanon/UNIFIL: tidigare mandat- och avvecklingsram oförändrad i de kontrollerade primärkällorna.
- Kela/Oiwa: inget nytt domstolsavgörande eller ny offentlig metodhandling identifierad.
- Hormuz: ADNOC:s officiella uppdatering 10 november bekräftar skadat fartyg i UAE:s territorialvatten men lämnar identitet, skada och ansvar öppna; separat från UKMTO-incidenten nordost om Lima, Oman.
- USA:s senat: roll-call 257 den 9 november bekräftar 73–25 cloture på motionen att gå vidare till H.R.2347; procedur, inte slutlig passage.
- Spår utan nyhet över notiströskeln efter screening: C, H, I, J, L och M.


## Breaking Watch – 11 november 2026, 05:14 EET

Ny kontrollcykel A–S dokumenterad i [journalen 05:14](editorial/research/2026-11-11-breaking-watch-0514.md). Nya substantiella delta: SpaceX/Apollo cirka 40 md USD villkorad master finance lease (F), EU-kommissionens 68 TWh/2024 och 114 TWh/2030-prognos samt konsultation till 14 december (B), LKAB:s begränsade demonstrationsdrift i Luleå från 3 november (E/S), UKMTO Incident 201-26 och separat ADNOC-fartygsskada i UAE:s territorialvatten 10 november samt Reuters marknadsrapport 11 november (O). Palantirs TITAN-produktionsorder har primärkontrollerats mot Army CPE ISW och oberoende rapportering om analytikerns godkännanderoll (A); orderhändelsen är från 1 september och inte en ny novemberhändelse.

Befintliga utkast uppdaterade: PR #7, #17, #34, #14 och #3. PR #3 återfördes till draft eftersom de nya Hormuz-tilläggen inte omfattas av tidigare godkännande. Ingen merge eller LIVE-publicering.


### Tillägg 11 november 2026 – ORLEN/QatarEnergy

ORLEN:s regulatoriska rapport 39/2026 (10 november) bekräftar uppsägning av ett av två QatarEnergy-avtal om 1 mtpa LNG, cirka 15,3 TWh/år, med 60 dagars fortsatt avtalsverkan. Det andra avtalet till upp till 1 mtpa till 2034 kvarstår. Reuters ger oberoende rapportering och beskriver detta som den första kända uppsägningen av ett långfristigt QatarEnergy-avtal sedan exportstörningarna. PR #18 och PR #3 uppdaterade; PR #3 är fortsatt draft.

# FOLKTRIBUNALEN – Breaking Watch
## Kontrollrunda 11 november 2026, 06:48 EET

### Sammanfattning

Samtliga 19 huvudspår A–S har screenats på nytt. Den här rundan gav fem nya materiella deltauppgifter jämfört med journalen 04:13 EET: (1) Vita huset nominerade Palantirs CISO Michael LoSapio till CISA-direktör; (2) UNIFIL rapporterade att en patrull besköts nära Wadi Jilu; (3) Bergsstaten publicerade kartbilaga för den ansökta undersökningen Kiltivaara nr 1001; (4) representanthuset hänvisade H.Res.1655 om Hegseth till Judiciary Committee genom en proceduromröstning; (5) NVIDIA:s styrelseutredning har följts av ett tvärpolitiskt exportkontrolluttalande och senator Kevin Cramers avgångskrav. En ny draft-PR har skapats för NVIDIA-granskningen.

Inga artiklar har mergats eller publicerats i denna kontrollrunda. Befintliga utkast har uppdaterats i sina respektive granskningsgrenar.

## Nya materiella uppgifter

### A/N – Palantir CISO nomineras till CISA

**Händelsedatum/publiceringsdatum:** 9 november 2026.

- **PRIMÄRKÄLLA:** Vita huset skickade Michael LoSapios nominering till CISA-direktör till senaten. LoSapio är Palantirs Chief Information Security Officer; han är nominerad, inte bekräftad. Nick Andersen är fortsatt tillförordnad direktör.
- **OBEROENDE BEKRÄFTELSE:** Reuters 9 november och CyberScoop 9–10 november rapporterar att CISA saknat senatsbekräftad direktör i nära 22 månader och att personalstyrkan minskat med ungefär en tredjedel sedan 2025. CyberScoop rapporterar att tillträdande demokratiska ledare för säkerhetsutskotten har uttryckt frågor om Palantirs arbete åt DHS/ICE.
- **Öppet:** Senatens hearing och omröstning; LoSapios aktieinnehav, avyttringar, recusal, återanställningsvillkor och etikplan; om CISA har direkta Palantir-avtal. Inget belägg har hittats för att nomineringen i sig innebär ett nytt Palantir-kontrakt eller att CISA använder en viss Palantir-produkt i ett operativt beslut.
- **BCH-avtalet:** Den rapporterade femårsaffären om £10 093 202 är ett call-off från ramavtal med Cambridgeshires PCC som köpare. BCH syftar på Bedfordshire, Cambridgeshire och Hertfordshire. Sju-force-upphandlingsfunktionen är inte bevis för att sju styrkor använder avtalet. Den direkta Contracts Finder-sidan returnerade 403 i denna kontroll; det signerade call-off-avtalet, DPIA och databehandlingsbilagor saknas.
- **Arbetsflöde:** PR #7 uppdaterad. CISA-nomineringen är fortsatt en fråga om styrning och oberoende, inte ett konstaterat rättsligt jäv.

Källor: https://www.whitehouse.gov/presidential-actions/2026/11/nominations-sent-to-the-senate-54a2/ · https://www.reuters.com/world/white-house-nominates-palantirs-losapio-lead-homeland-securitys-cyber-agency-2026-11-09/ · https://cyberscoop.com/michael-losapio-cisa-director-nomination-palantir-scrutiny/

### D – Samuils kvarlevor: identiteten är fortsatt en historisk/arkeologisk attribution

- **PRIMÄRKÄLLA/OBEROENDE RAPPORTERING:** Kvarlevor som tillskrivs Tsar Samuil överfördes 3 oktober från Grekland till Bulgarien och placerades i en ny marmorsarkofag i Sankt Sofia-kyrkan i Sofia. Den ursprungliga fyndplatsen är basilikan Sankt Achillios på ön i Lilla Prespasjön, inte den arkeologiska nivån under Sankt Sofia i Sofia.
- **NY KÄLLKRITISK PRECISERING:** BTA:s expertintervju om den preliminära undersökningen klargör att genetisk jämförelse mellan två gravkontexter kan visa släktskap, men inte ensam ge en direkt DNA-identifikation av Samuil utan ett säkert referensprov. Inget färdigt genetiskt resultat har publicerats i denna kontroll.
- **Öppet:** fältdagbok, fyndkatalog, provkedja, antropologiskt protokoll, genetiska resultat och inventarielista över de 48 föremål som överfördes till Grekland.
- **Arbetsflöde:** PR #8 uppdaterad; den tidigare skillnaden mellan fyndåret 1965/1969 och höjduppgifterna kvarstår.

Källor: https://www.bta.bg/en/news/culture/1220275-preliminary-examination-of-tsar-samuel-s-remains-reveals-chronic-illnesses-seve · https://www.bta.bg/en/news/culture/1216728-sarcophagus-for-tsar-samuel-s-remains-now-stands-ready-in-st-sophia-church · https://apnews.com/article/68839e7ca6ba2b121529f7e475e501d6

### E/S – Kiltivaara nr 1001: ansökan, inte beviljat tillstånd

**Dokumentdatum:** Bergsstaten publicerade kartbilaga till underrättelsen 10 november 2026.  
**Ansökningsdatum:** 2 juli 2026.

- **PRIMÄRKÄLLA:** SGU:s öppna data anger Boliden Mineral AB som sökande, cirka 9 333,6847 hektar i Gällivare kommun och guld, koppar, molybden och silver som sökta metaller. Statusfältet är “Ansökt”.
- **Viktig avgränsning:** Kartbilagan och ansökan är inte ett beviljat undersökningstillstånd, en bearbetningskoncession, en resursberäkning eller ett beslut om gruvdrift.
- **Öppet:** beslutsläge, fullständig ansökningspolygon, fastighets-/sakägarlista, sameby- och renskötselperspektiv, Natura 2000, vattenskydd, naturreservat, fornminnen och befintliga tillstånd.
- **Oberoende belägg:** ingen oberoende källa som bekräftar en ekonomisk fyndighet eller kommersiell potential har identifierats.
- **Arbetsflöde:** PR #34 uppdaterad.

Källa: https://www.sgu.se/bergsstaten/aktuella-handelser/

### G – UNIFIL-patrull besköts nära Wadi Jilu

**Händelsedatum:** 10 november 2026, kväll.

- **PRIMÄRKÄLLA:** UNIFIL uppger att en rutinpatrull nära Wadi Jilu besköts med omkring ett dussin skott. Patrullen besvarade elden efter att ha identifierat ett mynningsblänk; skytten upphörde. Ingen fredsbevarare skadades. UNIFIL identifierade inte skytten eller skottens ursprung och begärde att Libanons regering inleder en utredning.
- **OBEROENDE BEKRÄFTELSE – begränsad:** Anadolu och ANSA återger UNIFIL:s uttalande, men tillför ingen separat fältverifiering.
- **Öppet:** libanesisk utredning, skyttens identitet, exakt händelseförlopp och eventuell påverkan på patrullering. Ingen aktör tillskrivs ansvar.
- **Betydelse:** händelsen inträffar när UNIFIL:s ordinarie mandat närmar sig slutdatumet 31 december 2026. Den ska hållas åtskild från rapporterna om israeliska luftangrepp, artilleribanor och ingenjörsarbeten den 5–8 november.
- **Arbetsflöde:** PR #22 uppdaterad.

Källor: https://unifil.unmissions.org/en/press-releases/unifil-statement-10-november-2026 · https://www.aa.com.tr/en/middle-east/un-peacekeepers-come-under-fire-in-southern-lebanon-mission-says/4119542 · https://www.ansa.it/sito/notizie/mondo/mediooriente/2026/11/10/unifil-nostra-pattuglia-bersagliata-da-colpi-nessun-soldato-ferito_3a96a44f-3dbb-4d23-8b84-8a17f5c22655.html

### F/P – NVIDIA:s styrelseutredning och exportkontrollpress

**Händelsedatum:** styrelsebesked 8 november; Banks/Warren-uttalande 9 november; Cramers avgångskrav 10 november, rapporterat 11 november.

- **PRIMÄRKÄLLA:** NVIDIA:s styrelse meddelade 8 november att oberoende styrelseledamöter med extern juridisk rådgivare ska utreda rapporteringen om att Jensen Huang kan ha varit måltavla för en utländsk underrättelseoperation. Styrelsen säger att den inte har skäl att tro att företagshemligheter eller nationell säkerhet komprometterats. Det är bolagets partsuppgift, inte en myndighetsbedömning.
- **OBEROENDE RAPPORTERING:** AP och Reuters återger rapporteringen om en relation mellan Huang och en person med koppling till en NVIDIA-kund samt underrättelseuppgifter som inte har publicerats i en avhemligad myndighetshandling. Ingen offentlig domstolshandling, åtalshandling eller avhemligad underrättelsebedömning som fastställer spioneri har identifierats.
- **PRIMÄRKÄLLA:** Senatorerna Jim Banks (R) och Elizabeth Warren (D) publicerade 9 november ett gemensamt uttalande om exportlicenser till Kina och AI Overwatch Act. Detta är politisk press, inte lag eller utskottsbeslut.
- **OBEROENDE RAPPORTERING:** Senator Kevin Cramer (R), ledamot av Senate Banking Committee, krävde 10 november att Huang lämnar vd-posten. Det är Cramers personliga uttalande, inte hela utskottets ståndpunkt.
- **Öppet:** styrelsens mandat och slutsatser, Huang/board ethics disclosures, exportlicenser och slutanvändarverifiering, eventuella BIS-åtgärder samt om FBI har inlett en formell utredning. AP återger Trumps uppgift om FBI; något separat offentligt FBI-besked har inte identifierats.
- **Arbetsflöde:** nytt granskningsutkast PR #47 skapat; PR #10 uppdaterad med Banks/Warren och den institutionella tidslinjen.

Källor: https://investor.nvidia.com/news/press-release-details/2026/Statement-from-NVIDIA-Board-of-Directors/default.aspx · https://www.banking.senate.gov/newsroom/minority/warren-banks-statement-on-nvidias-continued-export-of-advanced-ai-chips-following-reports-of-foreign-intelligence-operation · https://www.reuters.com/world/china/senior-republican-us-senate-banking-panel-calls-nvidia-ceo-huang-resign-2026-11-11/ · https://apnews.com/article/68839e7ca6ba2b121529f7e475e501d6

### P – Hegseth: House hänvisade resolutionen till utskott

**Händelsedatum:** 10 november 2026.

- **PRIMÄRKÄLLA:** House Roll Call 317, H.Res.1655, var en omröstning om *Motion to Refer*. Resultat 211–204; 18 röstade inte. Resolutionen hänvisades till Judiciary Committee.
- **Viktig avgränsning:** detta var inte en omröstning om att ställa Hegseth inför riksrätt och inte en prövning av anklagelsernas riktighet.
- **OBEROENDE BEKRÄFTELSE:** Reuters och AP beskriver proceduren som ett sätt att stoppa en omedelbar sakomröstning. Demokraterna tar enligt AP kontroll över båda kamrarna först när den 120:e kongressen tillträder 3 januari 2027.
- **Arbetsflöde:** PR #10 uppdaterad.

Källor: https://clerk.house.gov/Votes/2026317 · https://www.reuters.com/world/us/us-house-votes-derail-impeachment-defense-secretary-hegseth-2026-11-10/ · https://apnews.com/article/87a78193502f716e6fb8eee5aef06ac0

### Korrigering 11 november 2026 – SGU:s mineralansökningar

Den tidigare journaltexten som angav SGU-export 1 november för Kiltivaara ska ersättas med **exportdatum 8 november 2026**. SGU:s öppna dataset visar tre relevanta ansökta poster: Isovinsa Aapua (Övertorneå, 171,2168 ha), Stekenjokk nr 9 (Strömsund/Vilhelmina, 1 691,5824 ha) och Kiltivaara nr 1001 (Gällivare, 9 333,6847 ha). Samtliga står som “Ansökt”; inget av dem är ett beviljat tillstånd eller en resursberäkning. Full källmatris finns i [kontrolljournalen 11 november 06:48 EET](editorial/research/2026-11-11-breaking-watch-0648.md) och granskningsutkastet PR #34.

Fullständig kontrollmatris och systemstatus för rundan 06:48 EET: [editorial/research/2026-11-11-breaking-watch-0648.md](editorial/research/2026-11-11-breaking-watch-0648.md).

### NVIDIA – House-brev och aktieägartalan, tillägg 11 november 2026

Den 4 november daterade tre republikanska House-ordförande ett brev till Jensen Huang och begärde en sluten briefing den 18 november; svar eller alternativt datum begärdes senast 11 november. Brevet är en begäran, inte en subpoena. Den 9 november lämnades Kistenmacher v. NVIDIA, 5:26-cv-13448, Document 1, in i Northern District of California. Det är en föreslagen värdepappersklassaktion och en partsinlaga, inte en dom. NVIDIA:s oberoende styrelseledamöter meddelade 10 november att Joon H. Kim och Wachtell Lipton anlitats för utredningen. Full källkritik och dokumentlänkar finns i PR #47 och kontrolljournalen 11 november 06:48 EET.

### Utvidgad mineralregisterkontroll – 11 november 2026

SGU:s API-sida `startIndex=50` har exportdatum **8 november 2026** och visar minst 28 ansökta undersökningstillstånd med ansökningsdatum under 2026, från 22 juni till 20 oktober. Urvalet omfattar bland annat Kiltivaara (Boliden, 9 333,7 ha), Stavaträsk (24 822,9 ha, guld), Sorvanen/Koutelis (KoBold; kobolt/koppar/REE), Yxsjöberg/Sandudden (NewPeak; beryllium/volfram/REE), Flenberget/Hålåberget (Nordmark; volfram) och Grängesberg nr 8/9 (apatit/järn/REE/vanadin/volfram). Samtliga är ansökta, inte beviljade. Kiltivaara-kartan publicerades separat 10 november. Full tabell och källstatus finns i PR #34 och journalen 11 november 06:48 EET.


### Nytt granskningsutkast 11 november 2026 – RWE/KKR och Vanguard

- **Ny artikel:** [PR #49 – RWE–KKR stänger £12 md i Vanguard-finansiering](https://github.com/selotisk-source/Folktribunalen/pull/49).
- **Händelse 11 november:** RWE och KKR har slutfört 50:50-transaktionen och nått finansiell stängning för Vanguard West/East, cirka 2,8 GW och cirka £12 md total projektinvestering.
- **Finansieringsstruktur enligt RWE:** 35 banker, £11,1 md kontantfaciliteter, £1,7 md kompletterande faciliteter, £1 md förbindelse från National Wealth Fund samt kreditstöd från Euler Hermes och EIFO. RWE beskriver projektfinansieringen som non-recourse. Detaljerade garanti- och säkerhetsvillkor är inte offentliggjorda i pressmeddelandet.
- **Oberoende bekräftelse:** Reuters och brittiska regeringens pressmeddelande 11 november.
- **Öppen källfråga:** DESNZ:s CfD-tabell listar 1 380 + 90 + 75 MW per projekt, medan RWE:s aktuella plan anger 1,4 GW per projekt och Vestas-orderna 92 × 15 MW = 1 380 MW. Skillnaden kräver förklaring; ingen slutsats om fel eller ytterligare kapacitet dras.
- **Balansräkning:** RWE anger €17,0 md nettoskuld per 30 september och cirka €12 md vid årsslut, huvudsakligen på grund av avkonsolideringen av Vanguard efter joint venturet. Det betyder inte att RWE saknar fortsatt ekonomisk exponering; ägandet är fortsatt 50 procent.
- **Status:** PR #49 är draft för chefredaktörens granskning. Inte mergad, inte publicerad och inte LIVE.
- **Kontrolljournal 09:48 EET:** [editorial/research/2026-11-11-breaking-watch-0948.md](editorial/research/2026-11-11-breaking-watch-0948.md).


### Källkomplettering 11 november 2026 – Vanguard CfD-kapacitet

RWE Annual Report 2025 anger att Norfolk Vanguard East/West har potential upp till 3,1 GW men att 2,8 GW då var planerat. DESNZ:s CfD-tabell summerar till cirka 3,09 GW (1,545 GW per projekt), medan RWE:s aktuella plan den 11 november 2026 är 2,8 GW. Detta förklarar i huvudsak skillnaden som maximal CfD-kapacitet kontra aktuell byggplan. Utkast PR #49 har korrigerats; återstående kontroll gäller vilka 90/75 MW-enheter som är optioner eller ingår i slutlig FID-/teknikomfattning.

Källa: https://www.rwe.com/-/media/RWE/documents/05-investor-relations/finanzkalendar-und-veroeffentlichungen/2025-GJ/RWE-Annual-Report-2025.pdf


## Breaking Watch – 11 november 2026, 13:53 EET

Ny kontrolljournal: [2026-11-11-breaking-watch-1353.md](editorial/research/2026-11-11-breaking-watch-1353.md).

### Nya deltan i denna runda
- **F/B – Nscale:** Reuters 10 november återger en obekräftad uppgift om att Nscale överväger att skjuta upp IPO till 2027. Reuters kunde inte verifiera uppgiften och Nscale hade inte svarat. Microsofts beslut att inte utnyttja en separat Texas-expansionsoption (Reuters 5 november) påverkade enligt källan inte befintliga arbetsorder eller rapporterat TCV. Nscale S-1 definierar TCV så att outnyttjade optioner inte ingår. Öppen källskillnad: Reuters 10 november nämner 2 md USD från NVIDIA, medan S-1 beskriver en separat NVIDIA-del på 1 md USD i en minsta teckningsstruktur om 3,1 md USD.
- **F – kreditförsäkring:** FT 11 november rapporterar att Barclays har försäkrat viss AI-infrastrukturutlåning, att HSBC undersökt upplägget och att JPMorgan avstod. Bloomberg hade tidigare rapporterat explorativa sonderingar. WTW:s primära marknadsundersökning från maj visar växande datacenterexponering men också att flera försäkringsgivare närmade sig sektorsgränser. Ingen offentlig låntagare, försäkringsgivare eller policy har identifierats.
- **B/R – Siemens Energy/Vestas:** Siemens Energys officiella FY2026-release anger 164 md EUR i orderstock, 68,1 md EUR i orderintag, 44,2 md EUR omsättning, 12,4 procents marginal och 8,8 md EUR i fritt kassaflöde före skatt. Reuters återger VD:ns uppgift att datacenterrelaterade order på gasturbiner och nätutrustning är cirka 15 md EUR (9,1 procent av orderstocken). Vestas Q3 2026 visar 5,7 md EUR omsättning, 8,5 procents marginal och 77,9 md EUR kombinerad orderstock; Reuters rapporterar 27 procents lägre orderintag år över år och snävare helårsprognos.
- **O – Hormuz:** Rezaei förnekade 10 november pågående samtal och sade att sundet förblir stängt tills sju iranska villkor uppfylls. Araghchi sade via IRNA att öppning kan ske inom två dagar om villkoren accepteras. Full villkorslista saknas; tvådagarsuppgiften är inte ett återöppningsdatum. IRGC:s påstående om tre tankfartyg som träffat minor är inte matchat mot tre identifierade fartyg.

### Arbetsflöde
- PR #14 uppdaterad i granskningsgrenen med Nscale-/kreditförsäkringsdelta.
- PR #48 uppdaterad med Irans uttalanden; tillägget omfattas inte av tidigare godkännande.
- PR #16 kompletterad med journalen och A–S-matrisen.
- Inga merges och inga LIVE-publiceringar.


### Q – Saab/Danmark, 11 november 2026
Saab meddelade en order på 350 m SEK från danska DALO för ytterligare live-träningsutrustning till CV90, inklusive drönar- och icke-siktlinjeträning, med leveranser 2026–2028. Detta är en Training and Simulation-order, inte en Gripen-order. PR #12:s Gripen-status ändras därför inte. Källa: https://www.saab.com/newsroom/press-releases/2026/saab-receives-order-for-advanced-live-training-systems-from-denmark


Nscale – kompletterande kapacitetsnotering, 11 november: FT:s rapport 5 november preciserar den uteblivna Texas-optionen till cirka 500 MW vid Nscales egen anläggning, efter att 700 MW tidigare nämnts. FT skiljer detta från ett separat Microsoft-avtal om cirka 240 MW vid en angränsande Ionic Digital-anläggning. Befintligt Nscale-avtal uppges inte vara påverkat. Offentliga avtals- och nätanslutningshandlingar saknas. Källa: https://www.ft.com/content/668e6ef8-88a1-4bef-8664-8f495baf09f8


### Möjlig ny artikelvinkel – AI-boomens elräkning blir industrins orderbok

**Arbetsrubrik:** *När AI behöver kraft: Siemens Energys 15 miljarder, RWE:s 2,5 GW gas och vindkraftens motbild.*

**Tes att pröva:** AI-datacenterexpansionen blir redan synlig i orderböckerna för gasturbiner och nätutrustning. Samtidigt bygger RWE ut både havsvind och reglerbar gaskapacitet, medan Vestas order- och marginalutveckling följer en annan bana. Artikeln ska inte likställa all datacenterkraft med fossil produktion eller framställa Vestas svagare kvartal som ett generellt fall i vindkraften.

**Underlag:** Siemens Energys FY2026-release (164 md EUR orderstock; 12,4 procents marginal; 8,8 md EUR fritt kassaflöde före skatt) och VD-uppgift via Reuters om cirka 15 md EUR datacenterrelaterade order; RWE:s Q1–Q3-release (4,6 md EUR justerat EBITDA, 2,5 GW nya gaskraftverk i tysk kapacitetsauktion, 13,5 GW under byggnation); Vestas Q3 2026 (77,9 md EUR kombinerad orderstock, snävare helårsutsikter) och Reuters om 27 procents lägre orderintag år över år.

**Fortsatt faktainsamling före fullständigt utkast:** projekt-/kundfördelning för Siemens 15 md EUR; geografi och teknikmix (gasturbiner kontra nätutrustning); orderstockens konvertering till leveranser; Vestas regionala ordermix och effekten av He Dreiht-bladskadan; offentliga nätanslutnings- och tillståndsdata för de datacenter som driver efterfrågan.

**Status:** Artikelidé i masterplanen, ännu inte ett separat granskningsutkast eller PR. 


Nscale – finansieringsskillnaden i S-1, 11 november: SEC-prospektet anger upp till 44,6 md USD i Anthropic-avtal men säger att Nscale vid prospektdatumet 18 september saknade bindande finansieringsåtaganden för att finansiera leveransen. Prospektet redovisar 103,4 md USD aktivt och kontrakterat TCV men 2,6 md USD aktivt TCV; H1 2026-intäkter 140,6 m USD, nettoförlust 1,02 md USD och största kund 52 procent av H1-intäkterna. Den separata 3,1 md USD teckningsöverenskommelsen, med 1 md USD NVIDIA-del, får inte räknas som bevis för att Anthropic-finansieringen är säkrad. Källa: https://www.sec.gov/Archives/edgar/data/2110365/000119312526395475/ck0002110365-20260918.htm


### R – RWE Q1–Q3, 11 november 2026
RWE:s primärmeddelande visar justerat EBITDA 4,6 md EUR (+35%), nettoinvesteringar 10,7 md EUR, nettoskuld 17,0 md EUR och prognos cirka 12 md EUR vid årsslut genom huvudsakligen Vanguard-avkonsolidering. RWE uppger också 2,5 GW nya kombinerade gas- och ångturbinkraftverk i tysk kapacitetsauktion och 13,5 GW under byggnation. PR #49 har fått en källuppdatering; avkonsolidering ska inte beskrivas som att RWE:s 50-procentiga ägarandel eller ekonomiska exponering försvinner. Källa: https://www.rwe.com/en/press/rwe-ag/2026-11-11-rwe-delivers-an-excellent-earnings-performance-in-the-first-three-quarters/


Kreditförsäkring – jurisdiktionsskillnad, 11 november: FT uppger att europeiska och kanadensiska banker länge har använt försäkring för regulatorisk kapitallättnad, medan amerikanska banker normalt inte får motsvarande kapitaleffekt; där kan försäkringen frigöra intern risklimit/utlåningskapacitet. Detta ska hållas åtskilt från faktisk risköverföring och politisk-risk-/contract-frustration-skydd. Källa: https://www.ft.com/content/599932b7-a548-4d45-8ba4-70bdb8d14565


## Breaking Watch – 11 november 2026, 16:15 EET

Ny fullcykelkontroll A–S tillagd i `editorial/research/2026-11-11-breaking-watch-1615.md`. Täckningsmatrisen har fått motsvarande delta. Huvudspår med substantiell utveckling: Palantir, EU:s AI-gigafabriker, Sofia/Samuil, CRMA:s nordiska projekt, NVIDIA-finansiering, Hormuz, USA:s kongress, Gripen, Jämtmassivet och Onkalo. Öppna kontrollfrågor kvarstår särskilt kring Cladonia/Storsjö, UNIFIL:s avveckling, EUDI-wallets och myndighetsanvändning av biometriska system. Inga artiklar har mergats eller publicerats; uppdateringarna ligger i befintliga granskningsspår.

## Breaking Watch – uppdatering 11 november 2026 kl. 22:24

### Prioriterade förändringar
1. **A:** Helsing Clarity lanserad 11 november; inget bekräftat kundval eller operativ driftsättning. Palantirs 10-Q visar Q3 commercial revenue 1,168 md USD mot government 1,146 md USD, men nio månaders intäkter är fortfarande 51 % government och 81 % USA. Ett kundkonto står för 27 % av kundfordringarna men inte över 10 % av intäkterna. Minst 5,6 md USD i tioåriga tredjeparts-molnköp är ett inköpsåtagande, inte en omedelbar skuld.
2. **B/F:** Statnett pausade nya nätreservationer och nya FOS §14-funktionsgodkännanden för stora uttagskunder till senast 1 augusti 2027. Tydal har NVE-koncession för 132 kV-anläggningar och 180 MW oförändrat uttag, men dess separata §14-status är inte offentligt klarlagd. Bitdeers 121 IT-MW-avtal har 4,7 md USD i schemalagda betalningar, men kreditbackstop är villkorad och cirka 500 mn USD återstående capex ska finansieras.
3. **C:** OUP-artikeln om synkronicitet är en teoretisk modell, inte empirisk evidens för extern kausalitet.
4. **E/S:** CRMA-bilagan C(2026)8051 listar Hautalampi (FinnCobalt Oy) som projekt 19. ECA:s rapport 04/2026 understryker att strategisk status inte innebär EU-finansiering och inte kräver finansiell bärkraft; revisionsrättens stickprov avser den tidigare projektomgången 2025, inte en särskild granskning av Hautalampi.
5. **K:** P4:s 11 november-rapport återger kommunalrådets andrahandsuppgift om att bolagsföreträdaren angav skidåkning som förklaring till köpet. Inte ett direkt Karp-uttalande eller bindande markanvändningsplan.
6. **O:** Reuters rapporterar Didamar-incidenten 11 november; förstörda navigationssystem och faktisk påverkan är inte självständigt fastställda. Oktoberstatistik: Washington Institute for Near East Policy räknade 37 fartyg som träffats; S&P Global Energy räknade 31 LNG-tankfartyg med last som lämnade sundet, upp från 23 i september.
7. **P:** House Roll Call 317 den 10 november: motion om hänskjutande av H.Res.1655 antogs 211–204. Detta var inte en slutlig omröstning om själva impeachment-anklagelsen.
8. **Q:** Ukrainas avtal om 16 Gripen E undertecknades 30 juni; Saab bokförde 24,6 md SEK i order under Q3. Den separata C/D-gåvan ska hållas isär.
9. **R:** Enafors/Jämtmassivet är ett planerat 150 MW-batterilager i utvecklingsfas, utan offentlig MWh-kapacitet, slutligt tillstånd, nätanslutning eller investeringsbeslut. Lyten: första kundleveranser av celler uppges i oberoende sammanställning ligga Q1 2027; testkörning är inte serieproduktion.

### Ny separat godkännandepost
- **PR #51:** “Hautalampi får EU-status – medan Eurobattery Minerals står i en bolagsstyrningskris”. Draft PR, ej mergad. Den skiljer bolagets egna upplysningar om vd:ns häktning, revisorsavgång och NGM-process från saknade domstolshandlingar och från projektets separata tillståndsstatus.
- **Tidslinje:** Metaller & Gruvor återger den 9 november en åklagaruppgift om att gripandet skedde den 4 november; bolaget offentliggjorde den 7 november att vd:n hade häktats. Häktningsbeslutets datum och konkreta grund är inte dokumenterade i den offentliga källmängden här.

### Nästa kontrollpunkter
- Tydals FOS §14-ärende och faktisk kreditbackstop.
- Eurobatterys extra bolagsstämma, registrerad styrelsesammansättning, ny revisor, NGM:s disciplinnämnd och LVV:s tillståndsdiarium för Hautalampi.
- Bergs kommuns mötesanteckningar och Lantmäteriets lagfarter/fastighetsbeteckningar för Cladonia.
- UKMTO/IMO:s fortsatta verifiering av Didamar och fartygsincidenter.
- EuroHPC:s uppdaterade AI-gigafactory-deadlines (3 december 2026, Lot 2; 4 februari 2027, Lot 1); äldre Futurium-datum 12 november får inte återanvändas.
- För övriga spår D, G, H, I, J, L och M: inga nya publika primärdokument som passerar notiströskeln identifierades i denna sökcykel. Dessa kontroller är en källsökning/screening, inte en ersättning för full arkiv- och diariegenomgång.
