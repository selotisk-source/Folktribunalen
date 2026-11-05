# PALANTIR OCH DEN OFFENTLIGA MAKTEN
## Vem kontrollerar infrastrukturen bakom den moderna staten?

*FOLKTRIBUNALEN · Granskning · Arbetsversion 1 · 5 november 2026*

### Ingress

När brittiska myndigheter lägger centrala delar av sjukvårdens datahantering och försvarsanalys i händerna på privata teknikleverantörer handlar frågan inte bara om programvara. Den handlar om vem som bygger infrastrukturen, vem som får teknisk åtkomst, vem som bestämmer hur data används – och hur lätt staten kan byta leverantör.

Palantir har blivit ett tydligt exempel på den större frågan. Företaget leder ett konsortium bakom NHS Federated Data Platform, har fått ett mångmiljonavtal med det brittiska försvarsdepartementet och har samtidigt mött parlamentarisk kritik om leverantörsberoende och digital suveränitet. NHS och regeringen framhåller å sin sida plattformens nytta, reglerade åtkomst och möjligheten att avsluta avtalet.

Det här är en granskning av den faktiska maktfördelningen – inte ett påstående om att en privat leverantör automatiskt kontrollerar staten.

---

## 1. När staten blir beroende av programvara

Den moderna staten är beroende av digital infrastruktur på samma sätt som den är beroende av vägar, elnät och kommunikationer. Skillnaden är att delar av den digitala infrastrukturen kan vara svåra att se. Den består av system som kopplar samman register, analyserar stora datamängder, hanterar arbetsflöden och hjälper myndigheter att fatta beslut.

Palantir Technologies har byggt sin verksamhet kring plattformar för datahantering och analys. Företaget grundades 2003 av Peter Thiel, Alex Karp, Stephen Cohen, Joe Lonsdale och Nathan Gettings. Karp är bolagets vd.

Palantirs verksamhet omfattar både offentliga och privata kunder. Inom offentlig sektor har företaget levererat teknik till bland annat försvars- och säkerhetsorganisationer. Det är just kombinationen av avancerad analys, känsliga verksamheter och långvariga offentliga kontrakt som gör bolagets roll politiskt betydelsefull.

Frågan är inte om staten får köpa privat teknik. Det gör den redan. Frågan är vilka kontrollmekanismer som måste finnas när en leverantör blir djupt integrerad i verksamheter som är centrala för medborgarnas liv och landets säkerhet.

## 2. NHS: ett avtal på upp till 330 miljoner pund

I november 2023 tilldelade NHS England ett konsortium lett av Palantir Technologies UK kontraktet för NHS Federated Data Platform, FDP. I konsortiet ingår även Accenture, PwC, NECS och Carnall Farrar.

Avtalet har ett maximalt värde på 330 miljoner pund över en period på upp till sju år. Det är viktigt att skilja mellan ett maximalt kontraktsvärde och pengar som redan har betalats ut: 330 miljoner pund är den publicerade övre ramen, inte ett belopp som kan beskrivas som redan förbrukat.

FDP är tänkt att koppla samman information som redan finns i olika NHS-system. Det kan till exempel hjälpa sjukhus att samordna operationsplanering, hantera väntelistor, följa vårdflöden och planera kapacitet.

Plattformen beskrivs som federerad. Den lägger ett sammanlänkande lager ovanpå befintliga datamängder i stället för att samla alla patientjournaler i en enda central databas. NHS England driver en nationell instans, medan enskilda vårdorganisationer och integrerade vårdorganisationer har ansvar för sina egna instanser.

Det är en viktig teknisk skillnad. Att en plattform kopplar samman data betyder inte i sig att alla uppgifter kopieras till en central databas eller att en leverantör får fri tillgång till samtliga patientjournaler.

House of Commons Library redovisade den 29 oktober 2026 att 142 av 202 NHS-trusts – omkring 70 procent – hade FDP i operativ användning i augusti 2026. Ytterligare 170 hade undertecknat en avsiktsförklaring om att ansluta sig. Bland de lokala integrerade vårdorganisationerna hade 35 av 36 både undertecknat en sådan överenskommelse och tagit plattformen i operativ användning.

Det visar att systemet har fått en betydande spridning. Det visar däremot inte ensamt hur stora förbättringar det har orsakat. House of Commons Library noterar att NHS England har lagt in en uttrycklig reservation: myndigheten kan inte slå fast att observerade förbättringar direkt har orsakats av FDP, eftersom andra faktorer inte har kontrollerats bort.

## 3. Vem äger patientdata – och vem kan komma åt den?

Detta är den mest känsliga delen av debatten.

NHS England anger att NHS-organisationerna är personuppgiftsansvariga för sina respektive data och användningsområden. Palantir och andra leverantörer agerar personuppgiftsbiträden. Det innebär att de behandlar personuppgifter för att utföra avtalade tjänster och enligt instruktioner från den personuppgiftsansvariga organisationen.

Ett personuppgiftsbiträde blir inte ägare till uppgifterna och får inte använda dem för egna, fristående ändamål bara för att företaget driver tekniken.

Men rollen som biträde betyder inte heller att leverantörens personal aldrig kan få teknisk åtkomst. För att underhålla, konfigurera och säkra ett komplext system kan särskilt behörig personal behöva administrativ eller projektspecifik åtkomst. Det är därför viktigt att granska den faktiska åtkomsten, inte bara den juridiska etiketten.

I regeringens svar till parlamentet, publicerat den 22 oktober 2026, redovisas att tre Palantir-anställda ingenjörer hade administrativ åtkomst till NHS England:s National Data Integration Tenant. Den åtkomsten avsåg bland annat plattformsinställningar, säkerhetsunderhåll och konfiguration.

Regeringen redovisade också att ytterligare 33 ingenjörer från Palantir och andra leverantörer den 15 juni 2026 hade mer begränsad, projektspecifik åtkomst till bestämda datamängder och arbetsuppgifter. Åtkomsten skulle vara behovsstyrd och tidsbegränsad.

Detta är inte samma sak som att alla Palantir-anställda har fri tillgång till NHS patientdata. Det är inte heller samma sak som att det saknas en åtkomstfråga. Tre personer med administrativ åtkomst till en nationell datamiljö är en konkret och viktig uppgift som förtjänar insyn, tydliga loggar och oberoende kontroll.

Frågan blev politiskt känslig efter rapportering i maj 2026 om att Palantir-personal hade fått åtkomst till identifierbara patientuppgifter i en del av plattformen. Palantirs brittiske chef Louis Mosley bestred beskrivningen av åtkomsten som obegränsad och beskrev den som en specifik teknisk behörighet i en avgränsad miljö.

I ett skriftligt svar den 16 juni 2026 uppgav hälsoministeriet att delar av den publicerade konsekvensbedömningen för dataskydd inte fullt ut beskrev de operativa åtkomstarrangemangen. NHS England skulle därför uppdatera dokumentationen och stärka beskrivningen av behörigheter, loggning och styrning.

Den centrala kontrollfrågan är därmed dubbel: fungerar de tekniska och avtalsmässiga skydden i praktiken – och beskriver den offentliga dokumentationen dem korrekt och begripligt?

## 4. Parlamentets kritik: risken att bli inlåst

Den 3 juni 2026 publicerade det brittiska parlamentets Science, Innovation and Technology Committee rapporten *Rewiring the State: Delivering Digital Government*.

Kommittén pekade ut Palantir som det mest oroande exemplet på hur den offentliga sektorn kan bli beroende av ett litet antal stora teknikleverantörer. Den beskrev ett växande leverantörsberoende som en svaghet och rekommenderade regeringen att använda den tidiga uppsägningsmöjligheten i NHS-avtalet 2027.

Kommittén ville att regeringen skulle ta fram en fullt kostnadsberäknad exitplan före utgången av 2026 och antingen bygga en egen lösning eller söka ett alternativ som minskar tekniska och avtalsmässiga beroenden.

Vad betyder då leverantörsinlåsning?

Det kan uppstå när en organisation har byggt så många arbetsflöden, integrationer, datamodeller och specialanpassningar kring en viss leverantör att ett byte blir dyrt, långsamt eller tekniskt riskfyllt. Även om avtalet formellt kan sägas upp kan det i praktiken vara svårt att lämna systemet utan att störa verksamheten.

Det är inte ett problem som är unikt för Palantir. Parlamentets rapport tar också upp beroendet av Microsoft och Amazon Web Services. Men Palantir blir särskilt intressant eftersom plattformen används i känsliga verksamheter och samtidigt har vuxit in i flera delar av den brittiska staten.

### Regeringens svar

Regeringen svarade på kommitténs rapport den 22 oktober 2026. Den avvisade inte behovet av att granska avtalet, men lovade inte heller att avsluta det.

I stället uppgav regeringen att NHS Federated Data Platform ska genomgå en ordinarie avtalsöversyn inför beslutet om den valfria tvååriga förlängningen. Granskningen ska väga in bland annat leverans, nyckeltal, ekonomi, vårdens behov, datasäkerhet och kontinuitet.

Regeringen framhöll att avtalet innehåller övergångskontroller om det inte förlängs. Den uppgav också att Palantir inte är uteslutet från framtida upphandlingar och att företaget fortsatt är behörigt att lämna anbud enligt de vanliga reglerna.

Det är alltså inte ett fattat beslut om att Palantir ska lämna NHS. Det är en pågående prövning av om avtalet ska förlängas.

## 5. Försvarsdepartementet: 240,6 miljoner pund utan ny konkurrensutsättning

Palantirs roll i den brittiska staten begränsas inte till sjukvården.

Den 30 december 2025 undertecknades ett nytt Palantir Enterprise Agreement med det brittiska försvarsdepartementet. Det publicerade kontraktsvärdet är 240,6 miljoner pund. Avtalsperioden löper från den 1 april 2026 till den 31 mars 2029.

Till skillnad från NHS-upphandlingen tilldelades försvarsavtalet genom ett direktförfarande, utan en ny konkurrensutsatt upphandling.

Det brittiska parlamentets kommitté bad regeringen redovisa varför. I svaret den 22 oktober 2026 uppgav regeringen att avtalet skulle upprätthålla befintliga tjänster och kontinuiteten i kritiska försvarsförmågor. Palantirs system var redan integrerade i försvarsverksamheten, och ett avbrott bedömdes kunna störa pågående operativ leverans.

Regeringen hänvisade till Procurement Act 2023 och dess bestämmelser om direkt tilldelning, samt till en publicerad transparensnotis och genomförda kontroller av bland annat ekonomi, säkerhet, laglighet och värde för pengarna.

Här möts två sidor av samma fråga. Försvarsmyndigheten kan ha starka operativa skäl att undvika ett tekniskt avbrott. Men just när ett system blivit så integrerat att ett byte anses riskera kontinuiteten blir frågan om långsiktigt beroende särskilt viktig.

Det är därför relevant att fråga hur staten behåller kompetens, dokumentation och möjlighet att byta leverantör – även när kontinuitet kräver att avtalet förlängs.

## 6. Londonpolisen: en rättstvist utan slutligt avgörande i sak

I London uppstod en separat konflikt om ett föreslaget tvåårigt avtal värt omkring 50 miljoner pund mellan Palantir och Metropolitan Police.

Avtalet skulle använda Palantirs teknik för att automatisera delar av polisens analysarbete och hantera information i brottsutredningar. Mayor’s Office for Policing and Crime, MOPAC, stoppade processen med hänvisning till att Met inte hade genomfört en öppen konkurrensutsättning.

Palantir väckte talan. Den 14 oktober 2026 meddelade parterna att de nått en uppgörelse och drog tillbaka sina respektive anklagelser.

Uppgörelsen innebar inte att det ursprungliga kontraktet automatiskt återupplivades. MOPAC uppgav samtidigt att organisationen inte har och aldrig har haft någon generell policy mot att ingå avtal med Palantir och att företaget kan delta i framtida upphandlingar.

Det är viktigt att inte beskriva uppgörelsen som att en domstol slog fast att någon av parterna hade rätt i sak. Tvisten avslutades genom en förlikning, inte genom ett offentligt avgörande av alla de bakomliggande frågorna.

## 7. Den politiska dimensionen

Palantir är inte ett företag som enbart säljer neutral kontorsprogramvara. Företagets teknik används i sammanhang där analysresultat kan påverka militära beslut, myndighetsarbete och offentlig verksamhet.

Det har också funnits en offentlig debatt om grundaren Peter Thiels politiska uttalanden och om bolagets manifest *The Technological Republic*, som bygger på vd Alex Karps idéer.

I parlamentets rapport återges både kritiken och Palantirs svar. Kommittén hänvisade till företagets verksamhet för amerikanska militära och immigrationsrelaterade myndigheter, Thiels uttalanden om NHS och företagets politiska manifest. Palantirs brittiske chef Louis Mosley sade å sin sida att bolaget stödjer demokratiskt valda regeringar i att genomföra sina mandat och att företaget inte självt tar politiska ställningstaganden.

Dessa uppgifter ska hållas isär. En grundares uttalanden är inte automatiskt samma sak som varje anställds eller varje kunds uppfattning. Ett företags manifest är däremot relevant när man bedömer hur bolaget självt beskriver sin roll i samhället.

Den demokratiska frågan är större än en persons politiska åsikter: vilka krav ska ställas på leverantörer av teknik som används i statens mest känsliga verksamheter?

## 8. Följ pengarna – men också kontrollen

En granskning av digital makt måste följa mer än kontraktens totalsummor.

Den måste skilja mellan:

- kontraktets maximala värde och faktiskt utbetalda belopp,
- ägande av programvara och kontroll över data,
- teknisk åtkomst och rätt att använda uppgifter för egna ändamål,
- ett formellt möjligt leverantörsbyte och en praktiskt genomförbar exit,
- regeringens motivering och en oberoende bedömning av resultatet.

I NHS-fallet är Palantir huvudleverantör i ett konsortium med flera andra företag. NHS-organisationerna är personuppgiftsansvariga, medan leverantörerna agerar personuppgiftsbiträden under avtalade instruktioner. I försvarsavtalet motiverar regeringen direkt tilldelning med kontinuitet i redan integrerade system. I London avslutades en upphandlingsrelaterad rättstvist genom en uppgörelse.

Det finns alltså inte en enda enkel berättelse om att Palantir har tagit över staten. Det finns flera konkreta avtal, tekniska beroenden, åtkomstarrangemang och politiska beslut som måste granskas var för sig.

FOLKTRIBUNALENS redaktionella metod ställer därför sju frågor:

1. Vem betalar?
2. Vem äger och kontrollerar?
3. Vem tjänar ekonomiskt?
4. Vem äger den kritiska infrastrukturen?
5. Vilka tekniska och kommersiella beroenden byggs upp?
6. Vad händer om leverantören inte längre kan eller får leverera?
7. Vilka lagliga och praktiskt genomförbara alternativ finns?

Det är så man följer pengarna hela vägen till makten.

## SLUTSATS: KAN STATEN BYTA LEVERANTÖR?

Palantir har fått en betydande roll i brittisk sjukvård och försvar. NHS-plattformen används i en stor del av vårdsystemet i England. Försvarsdepartementet har tecknat ett avtal värt 240,6 miljoner pund. Samtidigt har parlamentet varnat för leverantörsinlåsning och efterlyst en tydlig exitplan.

Regeringen har svarat att den ska granska NHS-avtalet, men har inte beslutat att avsluta det. Den har också redovisat varför försvarsavtalet tilldelades direkt och beskrivit vilka åtkomstbehörigheter leverantörernas tekniska personal har i NHS-systemet.

Den avgörande frågan är därför inte om privata företag ska få leverera teknik till staten. Det kommer de att göra.

Frågan är om staten behåller tillräcklig kunskap, insyn, kontroll och praktisk handlingsfrihet för att kunna byta leverantör när det behövs.

**Kan en demokratisk stat förbli digitalt suverän när allt större delar av dess viktigaste system byggs och drivs av privata, internationella teknikföretag?**

Det är frågan som måste ställas innan nästa kontrakt skrivs under.

---

## Källor och dokumentation

### Primärkällor
1. UK Parliament, Science, Innovation and Technology Committee, *Rewiring the state: Delivering digital government*, publicerad 3 juni 2026: https://publications.parliament.uk/pa/cm5902/cmselect/cmsctech/61/report.html
2. UK Parliament, Government response to *Rewiring the state*, publicerad 22 oktober 2026: https://publications.parliament.uk/pa/cm5902/cmselect/cmsctech/651/report.html
3. House of Commons Library, *What’s happening with the NHS Federated Data Platform?*, publicerad 29 oktober 2026: https://commonslibrary.parliament.uk/research-briefings/cbp-12264/
4. NHS England, *NHS Federated Data Platform privacy notice*: https://www.england.nhs.uk/digitaltechnology/nhs-federated-data-platform/security-privacy/nhs-fdp-privacy-notice/
5. UK Parliament, skriftligt svar HL696 om åtkomst till identifierbara patientuppgifter, 16 juni 2026: https://questions-statements.parliament.uk/written-questions/detail/2026-06-04/HL696/
6. UK Find a Tender, MOD Palantir Enterprise Agreement, kontrakt 006344-2026: https://www.find-tender.service.gov.uk/Notice/006344-2026/PDF
7. NHS England, *Federated Data Platform update*, 7 december 2023: https://www.england.nhs.uk/long-read/federated-data-platform-update/

### Oberoende rapportering
8. Reuters, Palantir och MOPAC:s uppgörelse, 14 oktober 2026: https://www.reuters.com/legal/litigation/palantir-london-mayors-office-settle-lawsuit-over-uk-police-contract-2026-10-14/
9. Sky News, rapportering om uppgörelsen, 14 oktober 2026: https://news.sky.com/story/tech-giant-palantir-and-sadiq-khan-settle-legal-battle-over-police-contract-13599306

### Redaktionella reservationer
- Kontraktsvärdet för NHS är ett maximalt värde över upp till sju år, inte verifierad total utbetalning.
- NHS-resultat och förbättringar ska inte tillskrivas FDP som ensam orsak utan robust effektutvärdering.
- Teknisk åtkomst för ett begränsat antal behöriga leverantörsanställda får inte beskrivas som generell eller obegränsad åtkomst för hela företaget.
- Regeringens och parlamentets uppgifter om NHS-kontraktets break clause uttrycks med något olika tidsangivelser. Artikeln använder därför formuleringen tidig 2027 och hänvisar till regeringens pågående avtalsöversyn.
- MOPAC-tvisten avslutades genom uppgörelse; ingen dom i sak används som stöd.
- Berörda parter bör erbjudas möjlighet att lämna bemötande före publicering.

*Status: Arbetsutkast. Ej godkänt för publicering.*
