# Palantir i offentligheten – vem kontrollerar data, arbetsflöden och beslutsmakt?

**Artikeltyp:** Granskning · offentlig makt · hälsodata · polis · försvar · bolagsstyrning  
**Faktaläge:** 12 november 2026  
**Huvudspår:** Palantir och den offentliga makten  
**Korsreferenser:** Europas AI-infrastruktur · NVIDIA och AI-finansiering · Från skrift till storebror

*Palantir växer snabbt och har blivit leverantör till flera av de institutioner som samlar in, analyserar och använder offentlig information. I Storbritannien står regeringen inför ett beslut om NHS:s dataplattform, samtidigt som dokumenterade meddelanden visar att bolaget ville diskutera en utvidgning till GP-journaler. Ett nytt polisavtal, en tidigare polischef som betald rådgivare och nomineringen av Palantirs säkerhetschef till chef för USA:s cybersäkerhetsmyndighet visar hur långt bolagets relationer till staten sträcker sig. Men den centrala frågan är inte om Palantir äger alla data eller fattar alla beslut. Den är vem som bestämmer ändamål, åtkomst, kontroll, granskning och möjligheten att lämna plattformen.*

## Ett växande bolag – med staten kvar som kärnkund

Palantir Technologies redovisade 2,313 miljarder dollar i omsättning under tredje kvartalet 2026, en ökning med 96 procent jämfört med samma kvartal 2025. Bolagets SEC-rapport visar att den globala kommersiella verksamheten under kvartalet stod för 1,168 miljarder dollar och myndighetsverksamheten för 1,146 miljarder. Kommersiella intäkter var därmed något större under just detta kvartal.

Den bilden får inte förväxlas med att Palantir har blivit oberoende av offentliga kunder. För årets första nio månader redovisade bolaget 2,994 miljarder dollar i myndighetsintäkter mot 2,887 miljarder i kommersiella intäkter. Den offentliga sektorn stod alltså fortfarande för en knapp majoritet av intäkterna under perioden. Båda segmenten växte kraftigt.

SEC-rapporten redovisar dessutom 4,9 miljarder dollar i återstående prestationsåtaganden, RPO. Palantir väntar sig att redovisa omkring 44 procent under de följande tolv månaderna och ytterligare 37 procent under månaderna 13–36. RPO är inte kontanter och inte en ovillkorlig garanti för framtida intäkter. Bolaget anger att många kundavtal kan sägas upp med mindre än tolv månaders varsel; den uppsägningsbara delen ingår inte i RPO.

En annan siffra säger något om leverantörskedjan. I mars 2026 ändrade Palantir ett avtal om tredjepartsbaserade molntjänster. Enligt not 7 i Form 10-Q har bolaget därmed åtagit sig att köpa molntjänster för minst 5,6 miljarder dollar över tio avtalsår till och med den 29 februari 2036. De årliga minimiåtagandena varierar mellan 268 och 979 miljoner dollar. SEC-noten namnger inte leverantören.

Detta är ett långsiktigt inköpsåtagande, inte en omedelbart förfallen skuld och inte belägg för att leverantören är AWS, Google eller Microsoft. Men det gör den externa infrastrukturen till en strategisk del av Palantirs leveransförmåga. En offentlig kund som köper en plattform köper därför inte bara programvara; den blir också beroende av en kedja av molnkapacitet, underleverantörer, säkerhetsvillkor och exitmöjligheter.

Palantir redovisade samtidigt att en anonymiserad kund, Customer I, stod för 27 procent av kundfordringarna den 30 september. Det är en koncentration av utestående fordringar – inte 27 procent av intäkterna. Ingen enskild kund stod för mer än tio procent av periodens intäkter. Kundens identitet och fordringarnas åldersfördelning framgår inte av rapporten.

## Vem kontrollerar själva bolaget?

Palantirs Form 10-Q beskriver också en bolagsstyrningsstruktur som koncentrerar röstmakt till grundarna och deras närstående. Bolaget pekar särskilt ut Stephen Cohen, Alexander Karp och Peter Thiel samt deras närstående genom en flerklassig aktiestruktur, ett Founder Voting Trust Agreement och ett Founder Voting Agreement.

Bolaget skriver att grundarna genom dessa arrangemang kan utöva effektiv kontroll över frågor som läggs fram för aktieägarna, bland annat styrelseval och större bolagstransaktioner. Avtalet innebär att aktierna i Class F och vissa aktier som omfattas av röstningsavtalet röstas enligt instruktion från en majoritet av de grundare som omfattas av avtalet.

Detta ska beskrivas korrekt: SEC-handlingen visar koncentrerad grundarkontroll, men den visar inte att en enskild grundare ensam bestämmer varje bolagsbeslut. Det är en fråga om bolagsstyrning och investerarmakt. Den blir relevant för offentlig sektor eftersom myndigheter som köper in kritisk infrastruktur måste förstå vem som ytterst kan påverka leverantörens långsiktiga strategi och styrning.

## NHS: en plattform, flera datakontroller och ett beslut före mars 2027

NHS England tilldelade i november 2023 ett konsortium lett av Palantir Technologies UK kontraktet för Federated Data Platform, FDP. Konsortiet omfattar även Accenture, PwC, NECS och Carnall Farrar. Det sammanlagda kontraktsvärdet kan uppgå till 330 miljoner pund över högst sju år.

FDP är inte beskrivet som en enda central databas som samlar alla patientjournaler på ett ställe. House of Commons Library beskriver plattformen som ett lager ovanpå befintliga system. Varje deltagande NHS-trust och Integrated Care Board har en egen instans och är datakontrollant för sin instans; NHS England driver en nationell instans. När lokala organisationer delar uppgifter med den nationella instansen ska direkt identifierande information, exempelvis namn och NHS-nummer, tas bort.

Det är en viktig skillnad mellan att leverantören tillhandahåller programvaran och att leverantören äger eller själv bestämmer över patientuppgifterna. I ett skriftligt parlamentsbesked den 25 juni 2026 uppgav regeringen att Palantir Technologies UK Ltd är personuppgiftsbiträde för NHS England, som är personuppgiftsansvarig för den nationella avtalsrelationen. Svaret säger också att olika Foundry-tenants är separata miljöer, att interoperabilitet mellan olika tenants är avstängd som standard och att ingen NHS FDP-produkt använder Gotham.

Detta är regeringens redovisning av avtals- och systemskydden – inte en oberoende teknisk revision av varje instans. Samma svar säger att data bara får behandlas för avtalade hälso- och vårdändamål, att överföring till andra system kräver uttryckligt godkännande från NHS England och att en framtida begäran om att lägga till en ny datakategori måste genomgå informationsstyrning och en laglighetsbedömning.

Den ursprungliga skriftliga ministerförklaringen från 21 november 2023 slog fast att ingen ny data skulle samlas in och att GP-data inte skulle ingå i den nationella plattformen. Den sade också att leverantören inte skulle kontrollera NHS-data eller använda dem för egna ändamål. Dessa löften utgör en viktig del av den offentliga kontraktsramen.

Avtalet började löpa i mars 2024. Den första avtalsperioden är tre år och löper till mars 2027. Därefter finns förlängningsoptioner som kan föra den sammanlagda löptiden upp till sju år. House of Commons Library skrev den 29 oktober 2026 att regeringen måste ta ställning före december om den ska förlänga avtalet efter den första perioden.

I förhöret med Health and Social Care Committee den 4 november sade hälsominister Yvette Cooper att kontraktsöversynen fortfarande pågick och att hon inte ville föregripa processen. Hon sade att regeringen hade detaljerade planer för olika utfall, inklusive exit. När ledamoten Ben Coleman frågade om avtalet hade en break clause korrigerade han själv terminologin: den första perioden löper ut i mars och frågan är om regeringen ska förlänga; det är inte en vanlig förtida uppsägningsklausul.

The Times rapporterade den 6 november att ministrar hade beslutat att behålla avtalet genom en tvåårig förlängning och därefter förbereda en ny upphandling. Vid faktakontrollen den 12 november hade ingen formell offentlig avtalsändring eller regeringsbekräftelse av förlängningen identifierats. Den uppgiften ska därför fortsatt beskrivas som medierapportering. Parlamentets offentliga underlag den 4 november beskrev fortfarande översynen som pågående.

## Nyttan: anslutning är inte samma sak som användning eller bevisad effekt

NHS England redovisar att 142 av 202 relevanta NHS-truster var i live operational use på FDP i augusti 2026, och att 170 hade undertecknat ett samförståndsavtal om att ansluta sig. House of Commons Library anger samtidigt att 35 av 36 Integrated Care Boards hade skrivit under ett sådant avtal och var i live operational use.

En annan mätning har blivit omstridd. The Guardian rapporterade den 2 november, efter mer än hundra informationsförfrågningar, att 29 av de 137 truster som NHS England listat som att de “realising benefits” uppgav att plattformen inte var live eller att de inte använde dess appar. Flera truster beskrev att de ännu inte hade gått live eller saknade en tidsplan för införande.

NHS England invände att dess redovisning av nytta kan omfatta mer än klinisk användning. En trust kan exempelvis ha infrastruktur på plats för dataöverföring eller använda en begränsad administrativ funktion utan att personalen använder de kliniska applikationerna i det dagliga arbetet. Guardian beskrev också Torbay and South Devon som ett exempel där NHS England räknade en organisation som live för dataöverföring trots att den inte använde FDP operativt.

Därför måste fyra olika nivåer hållas isär: att en organisation har tecknat ett anslutningsavtal, att en teknisk instans är live, att personal faktiskt använder en applikation i arbetet och att användningen har orsakat en mätbar förbättring för patienter. De är inte utbytbara mått.

NHS England har hänvisat till 117 539 fler operationer vid truster som använder FDP. Office for Statistics Regulation, OSR, konstaterade den 22 juli att flera av de redovisade nyttomåtten bygger på före- och efterjämförelser. Eftersom andra variabler inte har kontrollerats kan sådana jämförelser inte visa orsak och verkan. OSR välkomnade att NHS lade till denna reservation och krävde tydligare märkning av sådana mått i offentlig kommunikation.

OSR noterade även att de publicerade fallstudierna är skrivna av organisationer som använder FDP och inte är författade eller verifierade av NHS England. En separat analys från Health Foundation av applikationen OPTICA fann inga mätbara förbättringar i utskrivningsutfall bland de truster som analyserades; OSR återgav detta resultat i sin korrespondens i augusti. Underlaget är inte en fullständig offentlig effektutvärdering, och det ska inte framställas som ett slutgiltigt bevis för att FDP saknar nytta.

Den oberoende nationella utvärdering som NHS England beställt från Imperial College Projects väntas enligt House of Commons Library publiceras efter beslutet om avtalsförlängning. Det skapar en tydlig ordningsfråga: regeringen ska fatta ett viktigt avtalsbeslut innan den fullständiga oberoende utvärderingen har publicerats.

## GP-journalerna: dokumenterad lobbying, inte dokumenterad överföring

The Guardian publicerade den 9 november en granskning baserad på WhatsApp-meddelanden som Foxglove fått ut genom en begäran enligt Freedom of Information Act och delat med tidningen. Meddelandena sträcker sig från juli 2025 till mars 2026 och tycks visa kontakt mellan Palantirs brittiske chef Louis Mosley och den dåvarande hälsoministern Zubir Ahmed.

I februari 2026 argumenterade Palantirs brittiska ledning för att primärvårdsdata och sjukhusdata borde kopplas samman och beskrev Foundry som lämplig för uppgiften. Det är en dokumenterad lobby- och policykontakt. Den är särskilt relevant eftersom regeringen 2023 uttryckligen hade sagt att GP-data inte skulle ingå i den nationella FDP-plattformen.

Palantir svarade till Guardian att datadelning kan förbättra NHS, att vårdorganisationerna behåller lokal kontroll över sina data och att det är regeringen som beslutar hur programvaran ska rullas ut. Department of Health and Social Care avböjde att kommentera.

Den parlamentariska skriftliga frågan den 25 juni 2026 ger en viktig juridisk avgränsning: om en framtida produkt skulle begära att inkludera denna datatyp måste NHS Englands informationsstyrningsprocess genomföras, inklusive en grundlig bedömning av om behandlingen är laglig. Den ger inte stöd för att GP-journaler redan har lagts till i FDP.

Det finns alltså belägg för att bolaget ville diskutera en utvidgning. Det finns inte i det granskade materialet belägg för att GP-journaler faktiskt har förts in i den nationella plattformen, att ett sådant beslut har fattats eller att NHS England har godkänt en sådan överföring.

## Polisen: ett nytt avtal i östra England och en omprövning i London

Den 6 november publicerades en upphandlingsnotis för **BCH Palantir Foundry Platform**. Den anger ett avtalsvärde på 10 093 202 pund exklusive moms, ett tilldelningsdatum den 8 oktober 2026 och en femårig period till oktober 2031. Det är ett avrop från ett ramavtal, inte en ny öppen upphandling. Den angivna köparen är Police and Crime Commissioner for Cambridgeshire.

The Bureau of Investigative Journalism rapporterade den 10 november att avtalet är avsett för polisstyrkorna i Bedfordshire, Cambridgeshire och Hertfordshire och följer på ett tidigare pilotprojekt kallat Project Nectar. Den offentliga upphandlingssammanfattningen beskriver en plattform för att integrera, länka och analysera data från flera polisiära system. Den visar inte i sig att systemet fattar automatiserade beslut eller att alla sju polisstyrkor som den gemensamma upphandlingsfunktionen arbetar för omfattas av avtalet.

Det fullständiga avropsavtalet, dess dataskyddskonsekvensbedömning, datakategorier, åtkomstroller, lagringstider, underleverantörer och exitvillkor har inte kunnat granskas i det material som finns tillgängligt för denna artikel. Det är avgörande dokument för att bedöma vad den nya plattformen faktiskt får göra.

I London har en annan upphandling fått ett annat förlopp. Mayor’s Office for Policing and Crime, MOPAC, och Palantir nådde i oktober en förlikning efter en rättslig tvist om den planerade Unified Operational Analytics-upphandlingen för Metropolitan Police. I sitt offentliga uttalande den 14 oktober sade MOPAC att båda parter drog tillbaka sina anklagelser i processen.

MOPAC klargjorde samtidigt att beslutet i maj 2026 att inte gå vidare med den ursprungliga tilldelningen inte grundades på Palantirs värderingar eller etik, utan på den lagstadgade prövningen av upphandling, styrning, överkomlighet och value for money. En ny upphandling pågår och Palantir är välkommet att delta på samma villkor som andra leverantörer. Det vore därför fel att beskriva Londonbeslutet som ett formellt förbud mot Palantir.

## Den offentliga sektorns rekryteringsvägar

The Bureau of Investigative Journalism rapporterade den 10 november att tidigare Metropolitan Police Commissioner Dame Cressida Dick har varit betald rådgivare åt Palantir sedan september 2025. Palantir bekräftade för tidningen rådgivarrollen och sade att hon ger råd om hur bolagets produkter kan förbättra offentlig service. Dick sade att hennes uppdrag är begränsat till sådana råd och förnekade att hon har lobbat för Palantir eller introducerat bolaget till sina kontakter.

Detta är relevant för granskningen av relationer mellan offentlig sektor och leverantörer, men det är inte i sig bevis för otillbörlig påverkan. Det offentligt tillgängliga materialet i denna kontroll fastställer inte ersättningens storlek, rådgivaravtalets fullständiga villkor eller om några särskilda jävs- eller karensregler aktualiserats.

En parallell fråga har uppstått i USA. Vita huset nominerade den 9 november Palantirs Chief Information Security Officer Michael LoSapio till chef för Cybersecurity and Infrastructure Security Agency, CISA, inom Department of Homeland Security. Senatens Committee on Homeland Security and Governmental Affairs registrerade den 9 november att nomineringen mottagits och hänvisats till utskottet. Han är nominerad, inte bekräftad eller installerad som direktör.

CISA ansvarar för skyddet av civila nätverk och kritisk infrastruktur mot cyberhot. En kandidat som kommer direkt från en stor teknikleverantör väcker legitima frågor om ekonomiska intressen, jävsregler, recusal, tidigare kundrelationer och myndighetens oberoende. Nomineringen bevisar inte att en intressekonflikt föreligger, och den innebär inte att CISA har tilldelat Palantir ett nytt kontrakt. Den gör däremot offentlig redovisning av etik- och jävsarrangemang särskilt viktig inför senatens prövning.

## Militär användning: TITAN går till produktion

Den amerikanska armén meddelade den 1 september 2026 att programmet Tactical Intelligence Targeting Access Node, TITAN, går från prototypfas till produktion. Två leveransorder uppgick tillsammans till 192 miljoner dollar: 127 miljoner till Palantir och 65 miljoner till Anduril. De omfattar åtta första produktionssystem, fyra TITAN Advanced och fyra TITAN Basic, med planerad leverans över 18 månader.

Armén beskriver TITAN som en AI-aktiverad mobil underrättelseplattform som samlar in och analyserar information från flera sensorer och kan skapa automatiserade målnomineringar. DefenseScoop rapporterade att arméns företrädare beskrev analytikern som den som kan godkänna eller avvisa mål som systemet rekommenderar innan de skickas vidare till förband som kan bekämpa dem.

Detta är en konkret militär användning av Palantirs mjukvara i en sensor-till-besluts- och målnomineringskedja. Det är däremot inte belägg för att TITAN självständigt väljer och avfyrar vapen. Någon offentlig oberoende testmatris med felutfall, operativ tillförlitlighet och detaljerad användningsstatistik har inte identifierats i denna kontroll.

## Var ligger den offentliga makten?

Palantirs växande roll bör inte reduceras till en fråga om ett amerikanskt bolag som “äger” offentliga data. Den dokumenterade avtalsmodellen för NHS säger att NHS är personuppgiftsansvarigt och Palantir personuppgiftsbiträde. Lokala NHS-organisationer har egna instanser och egna kontrollansvar. Myndigheterna bestämmer ändamålen och ska godkänna åtkomst och användning.

Men formell datakontroll besvarar inte hela frågan. En myndighet kan vara juridisk ägare till data och samtidigt bli tekniskt och organisatoriskt beroende av en leverantörs datamodeller, applikationer, integrationer, arbetsflöden, personalutbildning och molnkapacitet. Om det blir dyrt eller riskfyllt att byta plattform kan den offentliga beställaren i praktiken få mindre handlingsutrymme än avtalet antyder.

Det är därför granskningen måste följa hela kedjan:

1. **Ändamål:** Vem beslutar vilka offentliga data som får kopplas samman och för vilka syften?
2. **Åtkomst:** Vilka anställda, underleverantörer och tekniska administratörer kan se eller behandla uppgifter?
3. **Beslut:** Vilka rekommendationer genereras av systemet, och vem fattar det slutliga myndighets- eller militärbeslutet?
4. **Bevisad nytta:** Kan påstådda förbättringar mätas oberoende, med tydliga baslinjer och kontroller för andra faktorer?
5. **Granskning:** Kan en myndighet eller extern revisor följa datakällor, ändringar, åtkomstloggar och modellernas begränsningar?
6. **Utträde:** Kan data, applikationer och arbetsflöden flyttas till en annan leverantör utan att den offentliga verksamheten bryter samman?

Palantir har rätt att framhålla att dess plattformar kan ge bättre samordning, snabbare analys och effektivare arbetsflöden. De fördelarna måste prövas på samma sätt som andra leverantörers påståenden. Ett offentligt kontrakt är inte ett demokratiskt mandat att utvidga användningen av data. Ett företags tekniska förmåga är inte heller i sig ett bevis på att myndighetens kontroll har försvunnit.

Den avgörande prövningen är om staten kan visa att den fortfarande bestämmer över ändamål, åtkomst, granskning och utträde – även efter att leverantörens system blivit en del av vardagens infrastruktur.

## Slutsats

Palantirs Q3-rapport visar ett bolag med snabb tillväxt, stora offentliga och kommersiella kundrelationer och ett långsiktigt beroende av extern molninfrastruktur. I Storbritannien har bolagets plattform blivit en del av NHS:s digitala struktur och en växande del av polisens dataanalys. Samtidigt visar de dokumenterade GP-kontakterna hur en leverantör kan försöka påverka systemets framtida räckvidd utan att ett formellt databeslut ännu har fattats.

De offentliga dokumenten visar också att kontrollen inte är enkelriktad: NHS har rollen som personuppgiftsansvarig, lokala organisationer har egna instanser, MOPAC har kunnat stoppa en upphandling på grund av styrning och värde för pengarna, och militärens målrekommendationer har enligt offentlig redovisning en mänsklig godkännandepunkt. Dessa motbilder är lika viktiga som kritiken.

Den verkliga frågan är därför inte om Palantir redan har tagit över staten. Den är om offentliga institutioner har tillräcklig insyn, kompetens, avtalsmakt och teknisk portabilitet för att kunna styra de system de köper – och lämna dem när de inte längre tjänar allmänheten.

---

## Primärkällor

1. **Palantir Technologies, Form 10-Q**, kvartalet avslutat 30 september 2026, inlämnad 3 november 2026. Innehåller segmentintäkter, kundfordringar, molnåtagandet, kreditfaciliteten och grundarnas röstningsstruktur: https://www.sec.gov/Archives/edgar/data/1321655/000132165526000048/pltr-20260930.htm
2. **UK Parliament, Health and Social Care Committee**, muntlig bevisning om Department for Health and Social Care, 4 november 2026, särskilt frågor 235–250: https://committees.parliament.uk/oralevidence/18242/html
3. **House of Commons Library**, *What’s happening with the NHS Federated Data Platform?*, 29 oktober 2026: https://commonslibrary.parliament.uk/research-briefings/cbp-12264/
4. **UK Parliament**, skriftligt ministeruttalande om FDP och GP-data, 21 november 2023: https://questions-statements.parliament.uk/written-statements/detail/2023-11-21/hlws54
5. **UK Parliament**, skriftligt svar om NHS FDP, Foundry-tenants, datakontroll och framtida datakategorier, besvarat 25 juni 2026: https://questions-statements.parliament.uk/written-questions/detail/2026-06-11/9247
6. **Office for Statistics Regulation**, granskning av NHS Englands presentation av FDP-nyttor och prestationsmått, 22 juli 2026: https://osr.statisticsauthority.gov.uk/news/nhs-england-federated-data-platform-fdp-presentation-and-communication-of-information-and-performance-metrics/
7. **MOPAC / Mayor of London**, offentligt uttalande om förlikningen och den nya UOA-upphandlingen, 14 oktober 2026: https://www.london.gov.uk/statement-mopac-and-palantir
8. **Contracts Finder**, BCH Palantir Foundry Platform, tilldelningsnotis publicerad 6 november 2026: https://www.contractsfinder.service.gov.uk/Notice/d7a7acf6-a793-427d-a674-ee989e704974-920813
9. **U.S. Army Capability Program Executive – Intelligence and Spectrum Warfare**, *Army Announces Move to Production for TITAN*, 1 september 2026: https://cpeisw.army.mil/2026/09/01/army-announces-move-to-production-for-titan/
10. **U.S. Senate Committee on Homeland Security and Governmental Affairs**, nomineringar, Michael LoSapio registrerad 9 november 2026: https://www.hsgac.senate.gov/legislation/nominations/

## Oberoende rapportering och kompletterande källor

1. **The Guardian**, 2 november 2026, FOI-granskningen av 29 NHS-truster som uppgav att FDP inte var live eller att de inte använde apparna: https://www.theguardian.com/technology/2026/nov/02/palantir-unused-nhs-hospital-trusts
2. **The Guardian**, 9 november 2026, granskningen av Palantirs kontakter med dåvarande hälsoministern om GP-journaler: https://www.theguardian.com/technology/2026/nov/09/revealed-palantir-lobbied-minister-to-stretch-ai-tools-reach-to-nhs-gp-records
3. **The Bureau of Investigative Journalism**, 10 november 2026, om Dame Cressida Dick som betald rådgivare och det nya polisavtalet: https://www.thebureauinvestigates.com/stories/2026-11-10/revealed-palantir-employing-cressida-dick-as-paid-adviser
4. **Reuters**, 9 november 2026, om Michael LoSapios nominering till CISA: https://www.reuters.com/world/white-house-nominates-palantirs-losapio-lead-homeland-securitys-cyber-agency-2026-11-09/
5. **DefenseScoop**, 1 september 2026, om TITAN:s produktionsorder och analytikerns roll vid godkännande av målnomineringar: https://defensescoop.com/2026/09/01/army-titan-platform-production-awards-palantir-anduril/
6. **The Times**, 6 november 2026, rapportering om en möjlig tvåårig förlängning av NHS-kontraktet: https://www.thetimes.com/uk/healthcare/article/palantir-nhs-contract-f7mcmrm0b
7. **Reuters**, 2 november 2026, Palantirs Q3-resultat och efterfrågan på AI-programvara: https://www.reuters.com/technology/palantir-tops-third-quarter-revenue-estimates-strong-ai-software-demand-2026-11-02/

## Bildförslag

**Huvudbild:** En redaktionellt producerad, neutral illustration av den offentliga datakedjan: NHS-trustar, polis och försvar som separata institutioner; en gemensam analysplattform i mitten; molninfrastruktur och underleverantörer som ett eget lager. Visa tydligt att dataansvar och beslutsrätt ligger hos olika aktörer. Använd inga verkliga patientuppgifter, inga påhittade skärmbilder och ingen bild som antyder att Palantir har direkt tillgång till samtliga offentliga databaser.

**Kompletterande bild:** Utsidan av brittiska parlamentet eller en bild från Health and Social Care Committee, med korrekt bildlicens och bildtext som anger datum och sammanhang.

## Faktakontroll

- **BEKRÄFTAT I SEC:** Q3-omsättning 2,313 md USD; global kommersiell intäkt 1,168 md USD; myndighetsintäkt 1,146 md USD; nio månaders myndighetsintäkt 2,994 md USD mot 2,887 md USD kommersiellt.
- **BEKRÄFTAT I SEC:** minst 5,6 md USD i inköpsåtagande för tredjepartsbaserad molnhosting över tio avtalsår till februari 2036. Leverantören namnges inte i noten. Beloppet är inte en omedelbar skuld.
- **BEKRÄFTAT I SEC:** Customer I stod för 27 procent av kundfordringarna, inte 27 procent av intäkterna. Ingen kund stod för mer än 10 procent av periodens intäkter.
- **BEKRÄFTAT I SEC:** bolagets flerklassiga aktiestruktur och grundarnas röstningsavtal koncentrerar röstmakt till grundarna och deras närstående. Formulera inte detta som att en enda grundare ensam kontrollerar bolaget.
- **BEKRÄFTAT I OFFENTLIGA NHS-/PARLAMENTSHANDLINGAR:** NHS England är personuppgiftsansvarig för den nationella avtalsrelationen och Palantir personuppgiftsbiträde. Lokala truster och ICB:er har egna instanser och egna kontrollansvar. Regeringen säger att olika tenants är separata och att överföring kräver uttryckligt godkännande.
- **BEKRÄFTAT I 2023 års ministeruttalande:** GP-data skulle inte ingå i den nationella FDP-plattformen. Detta är den offentligt angivna kontrakts- och policypositionen vid tilldelningen.
- **BEKRÄFTAT AV GUARDIANS DOKUMENTBASERADE GRANSKNING:** meddelanden visar att Palantirs brittiska ledning ville diskutera att koppla samman primärvårds- och sjukhusdata. De visar inte att GP-journaler faktiskt har integrerats.
- **BEKRÄFTAT AV OSR:** före- och efterjämförelser utan kontroll för andra variabler visar inte orsak och verkan. NHS:s egna nyttomått måste beskrivas med denna reservation.
- **BEKRÄFTAT I PARLAMENTETS OFFENTLIGA REGISTER:** CISA-nomineringen av Michael LoSapio har hänvisats till senatens utskott. Han är inte bekräftad genom detta besked.
- **BEKRÄFTAT AV ARMÉN:** TITAN har gått till produktionsfas med order på totalt 192 mn USD. Armén anger automatiserade målnomineringar; DefenseScoop beskriver en mänsklig analytiker som godkännare. Inget här belägger ett självständigt autonomt vapenbeslut.
- **INTE FASTSTÄLLT:** att The Times rapporterade tvåårig förlängning är ännu inte samma sak som en offentlig, bindande avtalsändring. Ingen sådan handling har identifierats per 12 november.
- **INTE FASTSTÄLLT:** att samtliga sju polisstyrkor som omfattas av den gemensamma upphandlingsfunktionen är användare av BCH-avtalet. TBIJ beskriver tre styrkor; det fullständiga avropsavtalet behövs för att fastställa omfattningen.
- **INTE FASTSTÄLLT:** att Cressida Dicks rådgivarroll inneburit lobbying eller otillbörlig påverkan. Hon förnekar lobbying; ersättning och fullständiga uppdragsvillkor är inte redovisade i det granskade materialet.
- **INTE FASTSTÄLLT:** att CISA-nomineringen innebär en intressekonflikt eller ett nytt Palantir-kontrakt med CISA.

## Öppna frågor före publicering

1. Hämta det fullständiga FDP-avtalet, optionsschemat, ändringar, exitbilagor och den aktuella migreringsplanen.
2. Begär den slutliga kontraktsöversynen, regeringens beslut och eventuella formella avtalsändringar.
3. Få ut de fullständiga FOI-handlingarna om GP-data och jämför med NHS Englands informationsstyrningsbeslut.
4. Begär den aktuella listan över truster som är anslutna, live, använder appar operativt respektive redovisar verifierade kliniska effekter.
5. Begär den oberoende Imperial College-utvärderingen och metodunderlagen för NHS:s nyttopåståenden när de blir offentliga.
6. Hämta fullständigt BCH-avropsavtal, DPIA, databehandlingsbilagor, underleverantörslista, åtkomstroller och exitvillkor.
7. Begär Palantirs och Dame Cressida Dicks rådgivaravtal eller offentlig redovisning av ersättning och eventuella jävsarrangemang.
8. Följ Michael LoSapios senatsförhör, ekonomiska redovisning, etikavtal och recusalplan.
9. Begär oberoende test- och användningsunderlag för TITAN: felutfall, operativ begränsning, mänskliga godkännandesteg och revisionsspår.
10. Försök identifiera den externa molnleverantören bakom 5,6 md USD-åtagandet genom ytterligare offentliga avtals- eller leverantörsdokument. Dra ingen slutsats utifrån partnerskap med Nebius eller andra molnbolag utan direkt belägg.

**Redaktionell status:** Komplett sammanhållet granskningsutkast uppdaterat 12 november 2026. Ligger i chefredaktörens godkännandekö som PR #7. Inte godkänt för publicering, inte mergat och inte LIVE.


## Breaking Watch update – 13 November 2026, 18:44 EET: NHS adoption claims and exit readiness

**OBEROENDE BEKRÄFTELSE – The Guardian, 12 November 2026:** NHS England removed the webpage that had listed 137 hospital trusts as live with and benefiting from the Federated Data Platform. The Guardian's underlying FOI investigation found that 29 listed trusts said they were not using all or most of the platform's tools; some said it was not live locally or that they used none of its applications. This does **not** mean that all 29 used no FDP component, nor that all 137 were inactive. The replacement page reportedly retains broader claims about early-user benefits.

**Källstatus:** The removal and the 29-trust responses are reported by the Guardian; NHS England's original page and a preserved snapshot were not retrieved directly in this check because the NHS site returned a bot-verification challenge. Treat the page-removal fact as independently reported, not as a fresh primary-source capture. The Office for Statistics Regulation's prior work remains the relevant methodological control: before/after comparisons do not establish causation without controlling for other variables, and the separate claim about 117,539 additional operations was not supported by the evidence reviewed.

**PRIMÄRKÄLLA – UK Parliament, written question 31436, answered 19 October 2026:** Asked what estimate DHSC had made of the time needed to port the FDP from Palantir to another supplier, the minister gave no time estimate and said the department does not provide a running commentary outside contract-management milestones.

**PRIMÄRKÄLLA – UK Parliament, written question 30140, answered 12 October 2026:** Asked what continuity, knowledge-transfer and capability-transfer arrangements would apply if the contract ended or was not extended, DHSC referred the MP to the published contract explainer and said it does not generally answer hypothetical scenarios. This is not proof that no exit plan exists; it means the cited public answer does not disclose a porting timetable or transition plan.

**Why it matters:** The public debate now has two separate accountability tests: whether NHS England can substantiate its adoption/benefit claims, and whether the NHS can demonstrate a credible, costed exit path before the contract's break/extension decision. The reported £330m contract extension to 2029 remains a proposal under consideration, not a completed extension.

**Open checks before publication:** preserve the removed and replacement webpages via an independent web archive; obtain the complete 137-trust list and underlying FOI responses; obtain the FDP termination-assistance and data-portability schedules; request a costed migration plan, including data formats, application dependencies, knowledge transfer and operational continuity; obtain OSR's final casework conclusion.

**Sources:**  
- The Guardian, 12 Nov 2026: https://www.theguardian.com/technology/2026/nov/12/nhs-england-deletes-misleading-claim-137-trusts-benefiting-from-palantir-ai-tools  
- UK Parliament WQ 31436, answered 19 Oct 2026: https://questions-statements.parliament.uk/written-questions/detail/2026-10-09/31436  
- UK Parliament WQ 30140, answered 12 Oct 2026: https://questions-statements.parliament.uk/written-questions/detail/2026-09-15/30140  
