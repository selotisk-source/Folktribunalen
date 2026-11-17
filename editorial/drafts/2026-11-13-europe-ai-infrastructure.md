# Vem bygger Europas AI-infrastruktur – och vem betalar elräkningen?

**Artikeltyp:** Undersökande granskning · AI-infrastruktur · energi · offentlig finansiering · regional utveckling  
**Faktaläge:** 13 november 2026  
**Huvudspår:** 2 – Europas AI-datacenter  
**Redaktionell status:** CHEFREDAKTÖRSGODKÄND 15 november 2026 (PR-kommentar 6898229000). PR #64 mergades 15 november 2026 kl. 22:57:44 UTC, merge-commit `45a9b8c2cc295b708afddcb739eb180318fd3052`. Statisk frontend-kod innehåller artikelkroppen, men kortet för `europas-ai-infrastruktur` är felmärkt som Meta/Ofcom i den senaste Render-deployen. Den publika artikelrouten har inte HTTP-testats. Redaktionell backend/databasåtkomst är blockerad av tom Postgres-IP-allowlist; artikeln ska därför inte markeras LIVE-verifierad.

## Ingress

Europa vill bygga ut sin kapacitet för artificiell intelligens. Men bakom varje nytt datacenter finns en kedja av markköp, nätanslutningar, kraftproduktion, kylsystem, lån, offentliga garantier och tillstånd. Den kedjan är ofta mer avgörande än själva serverhallen.

I Amsterdam möter ett Microsoft-leasat datacenter med 99 megawatt anslutning en äldre tillståndshistoria och nya frågor om lokal insyn. Norge har pausat nya reservationer av nätkapacitet för datacenter och vill införa en licensordning. I Finland har miljömyndigheten krävt att betydande förberedelsearbeten vid två planerade Google-anläggningar avbryts tills miljöbedömningarna är klara. I Skottland har en offentlig garanti på 202 miljoner pund hjälpt till att låsa upp ett finansieringspaket på omkring 300 miljoner pund – samtidigt som projektets egen webbplats nu beskriver anläggningarna som helt nätförsörjda.

Samtidigt byggs Europas egna beräkningsmiljöer: BRAIN++ i Sofia, en planerad gigawattcampus i Skellefteå och ett fransk-tyskt samarbete mellan Bull och Schwarz Digits. Men ett politiskt mål, en finansieringsram, en nätreservation och en anläggning i drift är fyra olika saker.

Den centrala frågan är därför inte bara vem som bygger Europas AI-infrastruktur. Det är vem som får tillgång till elen, vem som tar investeringsrisken och vem som i slutänden betalar när planerna inte går ihop.

---

## 1. Serverhallen är den korta delen av byggtiden

En datacentertomt kan utvecklas snabbt jämfört med den infrastruktur som måste försörja den. International Energy Agency beskriver hur en datacenteranläggning typiskt kan byggas på ett till två år, medan utbyggnad av elnätet tar betydligt längre tid. I Europas största datacenterkluster – Frankfurt, London, Amsterdam, Paris och Dublin – har utvecklare mött genomsnittliga anslutningsköer på omkring sju till tio år enligt IEA:s analys från 2025.

IEA:s modellering anger att datacenter kan svara för omkring tio procent av EU:s tillväxt i elförbrukning fram till 2030, givet dåvarande politiska förutsättningar. Det är en prognos, inte uppmätt framtida förbrukning. Samma analys pekar på att den annonserade projektportföljen motsvarar mycket mer kapacitet än vad som sannolikt hinner anslutas och byggas ut under perioden.

EU-kommissionen beskriver datacenter som en snabbt växande del av Europas digitala infrastruktur och anger att unionen vill tredubbla sin datacenterkapacitet till 2035. Ambitionen gäller kapacitet – den är inte ett bevis på att motsvarande elproduktion, nät, vatten, kylning eller projektfinansiering redan finns.

ACER:s övervakningsrapport för 2026 visar samtidigt hur kostsamt det är att bygga ut Europas elnät. De årliga investeringarna i elöverföring ökade från 10,4 miljarder euro 2019 till 30,5 miljarder euro 2025. I genomsnitt försenas 22 procent av EU:s gränsöverskridande elöverföringsprojekt av gemensamt eller ömsesidigt intresse varje år. ACER uppskattar att ett års försening kan motsvara omkring fyra miljarder euro i förlorad samhällsekonomisk nytta.

Åtgärder för att hantera flaskhalsar i elnätet kostade Europas elkonsumenter 5,4 miljarder euro under 2025, mer än 25 procent över 2024. Hushållens nätkostnader steg med 40 procent mellan 2019 och 2025 och nådde 84 euro per megawattimme.

Detta är kostnader för elsystemet i stort. ACER fördelar inte dessa belopp på datacenter ensamma. Myndigheten pekar på att efterfrågan drivs av flera faktorer – bland annat datacenter, värmepumpar och elfordon – och att nätet samtidigt måste hantera förändringar i var elen produceras och förbrukas.

### Sex mått som inte får blandas ihop

I debatten används ofta ordet kapacitet som om alla siffror betydde samma sak. De gör de inte.

- **IT-effekt (MW):** den effekt som servrar och annan IT-utrustning kan använda.
- **Anslutningseffekt (MW):** den maximala effekt som anläggningen har rätt eller möjlighet att ta från elnätet.
- **Produktionskapacitet (MW):** den effekt som ett kraftverk eller en lokal generator kan producera.
- **Reserverad nätkapacitet (MW):** kapacitet som har reserverats för ett projekt, men som inte nödvändigtvis används.
- **Kö eller förfrågan (MW):** ett projekt som söker anslutning eller väntar på fortsatt prövning.
- **Faktisk förbrukning (MWh eller TWh):** den el som mätare visar att anläggningen verkligen har använt över en viss tidsperiod.

En anläggning som marknadsförs med en framtida kapacitet på en gigawatt använder inte automatiskt en gigawatt i dag. En anslutningsreservation är inte en produktionsanläggning. Och en kraftverksportfölj är inte en datacenterhall.

Det är i dessa skillnader som den verkliga ekonomin bakom Europas AI-utbyggnad går att läsa.

---

## 2. Amsterdam: 99 MW och en rättighet som föregår dagens nätdebatt

Den 6 november 2026 tog sig mer än hundra aktivister in på byggområdet för ett Microsoft-leasat datacenter i Amsterdams hamnområde. Reuters rapporterade att demonstranter tog sig upp på byggkranar och att polis ingrep. Aktionen blev en del av en bredare europeisk mobilisering mot datacenterutbyggnad.

Men projektets mest intressanta uppgifter finns i den nederländska regeringens tidigare svar till parlamentet.

Anläggningen vid Plimsollweg består av tre torn. Varje torn har 33 megawatt anslutningskapacitet – sammanlagt 99 MW. Den sammanlagda bebyggda ytan är däremot mindre än tio hektar. Nederländernas nationella definition av ett hyperscale-datacenter kräver både mer än tio hektar bebyggd golvyta och minst 70 MW anslutningseffekt. Projektet når effekttröskeln men inte areatröskeln. Regeringen säger därför att det inte är ett hyperscale-datacenter enligt den nationella definitionen.

Det finns alltså inte belägg för att projektet genom att delas i tre torn skulle ha kringgått en regel som annars hade gällt. Den rättsliga skillnaden följer av den nationella definitionens två kriterier.

Regeringen uppger att Microsoft ska använda hela den tillgängliga kapaciteten. Vid kontinuerlig full belastning skulle 99 MW motsvara ungefär 0,87 TWh per år. Det är en teoretisk beräkning – inte uppmätt konsumtion. Den faktiska förbrukningen beror på hur mycket av anläggningen som används, kylningen, driftmönstret och den belastning som verkligen tas ut.

Tidslinjen är också viktig. Bygglovsansökan lämnades in 2019 och bygglov beviljades 2020. De tre miljötillstånden utfärdades 2025. Regeringen uppgav i sitt svar från april 2026 att projektet hade säkrat transportkapacitet innan dagens mer begränsade nätläge och anslutningsköer hade införts. Det visar hur gamla tillstånd och nätavtal kan leva vidare när den politiska och tekniska situationen förändras.

Den nederländska regeringen uppgav dessutom att myndigheterna inte hade information om vilka specifika ändamål eller datatyper som Microsoft skulle behandla i anläggningen. Det är en särskild fråga om insyn: ett land kan känna till en anläggnings effekt och tillstånd men ändå sakna en tydlig offentlig bild av vilken typ av digital verksamhet som ska bedrivas där.

### När lokal kapacitet blir en nationell fråga

Protesten i Amsterdam bevisar inte att projektet bryter mot tillstånd eller att Microsofts databehandling är olaglig. Den visar däremot att datacenter inte längre uppfattas som en rent teknisk etablering. De blir en fråga om el, mark, vatten, lokalt inflytande och vilken information en kommun eller stat har rätt att kräva av en stor kund.

Finland har föreslagit en annan modell för insyn: ett nationellt datacenterregister med uppgifter om ägare, plats, syfte, kapacitet, tidplan samt el- och vattenanvändning. Förslaget är ännu inte gällande lag och registret skulle inte i sig ersätta miljö- eller bygglov. Men det illustrerar hur frågan om att mäta datacentersektorn håller på att bli en del av energipolitiken.

### Protester och EU:s nya transparensregler

Helgen 6–7 november utlöste en samordnad protestvåg mot datacenter i flera europeiska länder. Le Monde rapporterade den 9 november om demonstrationer i omkring 15 länder. Uppgiften om 90 evenemang kommer från arrangörskoalitionen Stop Dirty Data Centres och är därför en arrangörssiffra, inte en myndighetsverifierad totalsiffra. I Zaragoza rapporterade tidningen omkring 2 000 deltagare. Vid byggarbetsplatsen i Amsterdam-Sloterdijk uppgav nederländsk polis enligt Le Monde att 150–200 personer frihetsberövats efter att aktivister tagit sig in på området.

Protesterna visar att datacenterutbyggnaden har blivit en lokal fråga om el, vatten, markanvändning, reservkraft, buller och insyn. De bevisar däremot inte att ett visst projekt bryter mot miljötillstånd eller använder resurser olagligt. Sådana påståenden måste prövas mot projektets egna tillstånd, mätdata och miljöhandlingar.

Den 21 september 2026 föreslog EU-kommissionen ett gemensamt märkningssystem för datacenter och öppnade en konsultation om minimistandarder. Märkningsförslaget avser anläggningar över 500 kW och ska göra bland annat energi- och vattenanvändning, spillvärme och flexibilitet mot elnätet mer jämförbara. Konsultationen om minimiprestanda är öppen till 14 december 2026; ett lagstiftningsförslag planeras till andra kvartalet 2027. Det är två skilda processer. Förslagen är inte redan gällande minimikrav.

Detta ger en möjlig väg från lokal konflikt till gemensam europeisk uppföljning: först måste operatörerna rapportera jämförbara data, därefter kan myndigheter och kommuner pröva om de faktiska resultaten motsvarar löften och villkor.


---

## 3. Norge: kön är inte kraft, och kraft är inte nät

Norge har länge setts som en attraktiv plats för datacenter tack vare vattenkraft, relativt låg elintensitet i ekonomin och tillgång till förnybar energi. I november 2026 blev det tydligt att även ett land med stor elproduktion har gränser för hur snabbt nya stora laster kan anslutas.

Statnett beslutade den 9 november om en tillfällig paus för nya reservationer av nätkapacitet till datacenter. Pausen väntas upphöra senast den 1 augusti 2027, när nya tekniska krav och kontrollmekanismer ska ha utvecklats. Det är inte ett generellt byggförbud och innebär inte att redan anslutna anläggningar stängs.

Dagen efter, den 10 november, meddelade den norska regeringen att den vill införa en licensordning för både befintliga och framtida datacenter. Regeringen vill presentera huvudprinciperna hösten 2027. Det är en aviserad reform, inte en redan antagen licenslag.

Regeringen anger fyra olika statusnivåer för anslutningskapacitet:

| Status | Effekt |
|---|---:|
| Datacenter redan anslutna till elnätet | 800 MW |
| Reserverad nätkapacitet | 4 200 MW |
| Projekt i anslutningskön | 9 100 MW |
| Ytterligare anslutningsförfrågningar | 18 000 MW |

Norges toppefterfrågan på el anges i samma besked till strax över 25 000 MW. Men de fyra siffrorna är skilda steg i projektkedjan. De får inte summeras och beskrivas som byggd, ansluten eller driftsatt datacenterkapacitet. En förfrågan är inte en reservation, och en reservation är inte faktisk förbrukning.

Regeringen säger också att den inte vill att alla typer av datacenter ska etableras i landet. Datacenter som bedriver kryptovalutarelaterad verksamhet ska inte betraktas som samhällsnyttiga i den föreslagna ordningen. Regeringen vill att nya stora elkonsumenter ska bidra mer till kostnaderna för nätutbyggnad och systemdrift.

### Statnett pekar på en djupare begränsning

I en separat rapportering till den norska tillsynsmyndigheten RME om elområde NO3 skriver Statnett att planerade nätinvesteringar kan möjliggöra en konsumtionsökning på upp till omkring 60 procent. Men varken planerade nätinvesteringar eller de ytterligare nätåtgärder som analyserats räcker för att möta alla mogna förfrågningar.

Statnett gör en viktig åtskillnad: ett starkare överföringsnät kan flytta mer el till ett område, men det skapar inte i sig mer energi. Enligt bolagets analys är ökad lokal kraftproduktion den enda enskilda åtgärd som ensam kan ge tillräcklig försörjningsförmåga för alla mogna förbrukningsplaner i NO3.

Den norska frågan handlar därmed inte bara om vem som får en plats i nätkön. Den handlar om vem som finansierar ny produktion, var den byggs och om den lokala energin ska användas till datacenter, annan industri eller samhällskritiska funktioner.

Den 12 november publicerade Statnett också en skrivelse till den norska tillsynsmyndigheten RME om elområde NO3. Statnett bad myndigheten att stänga två avvikelsepunkter från ett tidigare tillsynsbeslut. Det är Statnetts begäran – inte ett beslut från RME om att avvikelserna är åtgärdade.

Statnetts underlag beskriver 42 mogna nya förbrukningsprojekt i NO3 med sammanlagt omkring 2 800 MW och ytterligare cirka 3 800 MW i förfrågningar som ännu inte bedömts som mogna. Dessa siffror gäller all ny förbrukning, inte enbart datacenter. I de analyserade scenarierna skulle planerade nätförstärkningar kunna öka försörjningsförmågan med omkring 1 400–1 800 MW runt 2030, men Statnett bedömer att nätåtgärderna inte ensamma räcker för alla mogna förfrågningar. Lokal kraftproduktion är en separat begränsning.

En rapport från Menon Economics, beställd av det norska digitaliseringsdepartementet och publicerad den 29 oktober, räknar 87 aktiva datacenter i Norge vid mitten av 2026. Av dessa var 49 kommersiella anläggningar med sammanlagt 761 MW kapacitet. Det måttet beskriver en befintlig marknad och ska inte blandas ihop med Statnetts reservations- och kötal.


---

## 4. Finland: miljöprövningen kommer före markarbetet

I oktober 2026 ingrep Finlands tillstånds- och tillsynsmyndighet Lupa- ja valvontavirasto (LVV) mot Tuike Finland Oy, det bolag som ansvarar för planerade datacenterprojekt i Muhos och Kajaani-Otanmäki.

Den 6 oktober uppmanade LVV bolaget att avbryta miljömässigt betydande förberedelsearbeten vid båda projektområdena tills miljökonsekvensbedömningarna hade slutförts. Uppmaningen omfattade bland annat trädfällning, borttagning av ytjord, grävning, sprängning, dränering, arbetsvägar och upplagsytor. Planering, mätningar och andra åtgärder med liten och lätt återställbar påverkan omfattades inte.

I sin uppföljning den 22 oktober uppgav LVV att Tuike den 14 oktober hade svarat att bolaget följde uppmaningen och hade stoppat förberedelsearbetena vid båda områdena. Det är bolagets redovisning till myndigheten; den ska skiljas från en oberoende platsinspektion.

### Muhos: vattenhantering och svartskiffer

LVV:s granskning av Tuikes dräneringsanmälan för Muhos visar varför markarbetena blivit en separat tillståndsfråga. Enligt anmälan, som bolaget lämnade in den 18 september, planerades omkring nio kilometer nya diken. Myndigheten uppgav den 22 oktober att merparten redan hade byggts. LVV påpekade att en dräneringsanmälan normalt ska lämnas minst 60 dagar innan arbetet inleds.

Myndigheten bedömer att området ligger inom ett svartskifferområde. När sulfidförande jord grävs upp och exponeras för syre kan surt lakvatten och förhöjda metallhalter uppstå. LVV uppgav att de övervakningsresultat som bolaget självt lämnat in redan visade förändringar som tyder på försurning. Myndigheten ansåg samtidigt att underlaget inte med tillräcklig säkerhet visade att vattenpåverkan kunde förebyggas och hanteras med de föreslagna metoderna.

LVV krävde därför en detaljerad vattenhanteringsplan senast den 5 november 2026. Planen skulle redovisa konstruktioner, placering, tidplan och oberoende vattenövervakning samt hantera extrema flöden vid kraftigt regn och snösmältning. Myndigheten bedömde också att dräneringsåtgärderna i Muhos kräver tillstånd enligt vattenlagen. Ett eventuellt administrativt tvångsförfarande och vite beskrevs som möjliga följder om nödvändiga åtgärder uteblir – inte som redan utdömda sanktioner.

### Brottsutredningen är separat från tillståndsprövningen

Den 29 oktober meddelade Oulupolisen att en förundersökning hade inletts efter fem separata begäranden om utredning som samlas i ett ärende. Brottsrubriceringen är miljöförstöring. Polisen sade att de preliminära uppgifterna pekade på oklarheter och brister i dränering och vattenhantering vid Muhosområdet. Utredningen väntas ta tid och polisen siktar på att slutföra den under 2027; ytterligare information aviserades till december 2026.

Förundersökningen gäller Muhos. Den är inte ett konstaterande av skuld och ska inte blandas ihop med LVV:s separata stoppuppmaning för både Muhos och Kajaani-Otanmäki. Det finns inte i de offentliga källor som kontrollerats den 17 november någon bekräftelse på att LVV har godkänt vattenhanteringsplanen som skulle lämnas in den 5 november, att vattenlagstillstånd har beviljats eller att de stoppade arbetena har fått återupptas.

Fallet visar att mark, vatten och natur inte bara är sidoeffekter som hanteras efter att datacenterbeslutet är fattat. De kan avgöra när ett projekt över huvud taget får gå vidare från planering till byggförberedelser. Samtidigt måste myndigheternas preliminära bedömningar, bolagets uppgifter och polisens ännu pågående utredning hållas isär.

## 5. Skottland: offentlig garanti, privat skuld och ett nätanslutet projekt

Den brittiska regeringens AI Growth Zone i Lanarkshire visar hur offentlig finansiering kan hjälpa till att mobilisera privat kapital för datacenter.

I augusti 2026 meddelade regeringen ett finansieringspaket på omkring 300 miljoner pund för DataVitas expansion i North Lanarkshire. Paketet omfattar en garanti på 202 miljoner pund från National Wealth Fund och lån från bland andra ING, ABN AMRO, Santander, Scottish National Investment Bank och Siemens Financial Services.

Det är viktigt att beskriva konstruktionen korrekt. Garantin är inte ett kontantbidrag på 202 miljoner pund till DataVita. Den är ett offentligt garantiåtagande som hjälper till att låsa upp kommersiell lånefinansiering. Den offentliga sektorn tar därmed en del av kreditrisken, medan anläggningarna ska byggas och drivas av ett privat bolag.

Regeringens besked kopplade projektet till en förväntan om mer än 3 400 arbetstillfällen i området. Det är en prognos för den bredare utvecklingen, inte redan anställda personer eller garanterade långsiktiga arbeten.

### En ändrad bild av elförsörjningen

Den 7 november rapporterade The Guardian att DataVitas planerade datacenterutveckling på omkring 500 MW i Chapelhall skulle vara helt nätförsörjd, trots tidigare kommunikation om direktanslutningar till närliggande vind- och solkraft.

DataVitas egen FAQ, uppdaterad i november 2026, säger nu uttryckligen att datacentren är fullt nätförsörjda. Bolaget skriver att närliggande förnybar elproduktion kan komma att försörja campus direkt i framtiden, men att detta i så fall ska hanteras i en separat ansökan efter miljöbedömning och lokal konsultation.

Skillnaden mellan dessa modeller är betydande. Ett datacenter som tar el från det allmänna nätet och köper förnybar el genom ett avtal är inte samma sak som en anläggning som får el genom en egen fysisk ledning från en närliggande vind- eller solpark.

DataVita beskriver också sina kylsystem som slutna och anger att de inte ska förbruka vatten genom avdunstning. Det är bolagets egen tekniska beskrivning och bör senare jämföras med de miljö- och planeringshandlingar som faktiskt godkänns.

Lanarkshire visar hur offentliga garantier, privata lån, jobbprognoser, nätanslutning och förnybarhetslöften kan ingå i samma projekt – men ändå vara skilda saker som måste kontrolleras var för sig.

---

## 6. Sofia: BRAIN++ är konkret – gigafabriken är en annan idé

Bulgariens BRAIN++ är ett av Europas mer konkreta AI-fabriksprojekt. EuroHPC beskriver BRAIN++ som ett initiativ under ledning av Sofia Tech Park, med stöd från INSAIT och teamet bakom den befintliga superdatorn Discoverer.

Sofia Tech Park och INSAIT har presenterat den övergripande projektbudgeten till 90 miljoner euro. Den bulgariska regeringen har enligt presentationen åtagit sig att stå för hälften av den nationella finansieringen från 2026. Det är ett offentliggjort finansieringsåtagande – inte bevis för att hela budgeten redan betalats ut.

En central del är Discoverer++, en AI-optimerad superdator som enligt EuroHPC ska installeras vid Sofia Tech Parks superdatorcenter och ägas av EuroHPC JU.

Upphandlingen för anskaffning, leverans, installation och underhåll av Discoverer++ hade ett uppskattat värde på 54 228 600 euro. Sista anbudsdag var den 16 oktober 2026. EuroHPC:s projektsida markerar upphandlingen som stängd och anger att maskinen planeras installeras före utgången av 2026.

Upphandlingens värde ska inte läggas ovanpå BRAIN++-budgeten som om det vore ett andra fristående projekt. Det gäller anskaffningen av superdatorsystemet inom den bredare AI-fabrikssatsningen.

Vid kontrollen den 13 november har jag inte identifierat någon offentlig tilldelningsnotis som fastställer vinnande leverantör, slutligt kontraktsvärde eller undertecknat avtal. Det betyder inte att tilldelning saknas; det betyder att upphandlingsutfallet måste kontrolleras mot EuroHPC:s och EU:s avtalsmeddelanden innan leverantör eller leveransstatus kan anges som fastställd.

### En separat gigafabriksidé

Bulgariens ministerium för innovation och digital omställning beskrev i oktober 2025 möjligheten att undersöka en större AI-gigafabrik i samarbete med IBM och Europeiska kommissionen. Ministeriet nämnde en möjlig första fas på minst 70 MW och ett tänkbart totalbehov på upp till 500 MW.

Detta är en separat idé som regeringen då sade sig undersöka. Den ska inte blandas ihop med BRAIN++ eller Discoverer++: ingen vald plats, finansierad byggplan, bindande IBM-order eller nätanslutning har identifierats i det underlag som kontrollerats.

Sofia visar därför både vad som händer när EU-finansiering och nationell medfinansiering omsätts i en konkret superdatorupphandling – och hur lätt en separat politisk ambition kan förväxlas med ett beslutat infrastrukturprojekt.

---

## 7. Skellefteå: en gigawatt är en möjlig framtid – men bygglov och nät är separata steg

Det tidigare Northvolt-området i Bergsbyn i Skellefteå håller på att få en ny industriell roll. Lyten förvärvade Northvolts svenska tillgångar i februari 2026. EdgeConneX har presenterat planer på ett datacentercampus med en potentiell kapacitet på upp till en gigawatt, under förutsättning att nödvändiga administrativa och regulatoriska processer slutförs.

Projektet har sedan dess passerat två konkreta kommunala steg. Skellefteå kommuns kungörelse, daterad den 28 september 2026, anger att bygg- och miljönämnden den 24 september beviljade bygglov för nybyggnad av datacentret DC02 och ändrad användning av de befintliga byggnaderna DS4 och FA03 till datacentret DC01 på fastigheten Ackumulatorn 3. Kungörelsen har diarienummer 2026-3140. Bygglovet gäller de två första byggnaderna – inte hela den planerade sjuhallsutbyggnaden.

SVT rapporterade den 28 september, med hänvisning till samrådshandlingar, att EdgeConneX planerar sju byggnader på mellan 96 och 150 MW vardera. Det motsvarar en sammanlagd planerad effekt på cirka 672–1 050 MW i handlingarnas projekterade skala. Enligt samma rapport ska de två byggnaderna i första fasen vara färdiga i början av 2028; ytterligare fem byggnader är tänkta till början av 2031. Dessa är planeringsuppgifter, inte beviljad nätanslutning, installerad IT-last eller uppmätt elförbrukning. Bolagets uppgift om upp till en gigawatt är en separat campusambition och ska inte behandlas som ett kontrakterat effektuttag.

Ett ytterligare steg rapporterades av Norran den 9 november: kommunen ska den 29 oktober ha gett ett delstartbesked som endast omfattar grundläggningsarbeten för den första etappen. DataCenterSweden återger Norrans rapport och uppger att själva delstartbeskedet inte har publicerats. Något startbesked för övriga byggnadsarbeten har inte identifierats. Det är därför korrekt att säga att grundläggningen har fått ett rapporterat delstartbesked – inte att hela datacentret har fått klartecken för byggstart.

Skellefteå kommuns FAQ beskriver etableringen som ett projekt i ett tidigt utvecklingsskede och återger kommunens bedömning att den diskuterade energianvändningen redan fanns med i planeringen för batterifabriken. Det är kommunens bedömning, inte ett oberoende besked om den faktiska framtida lastprofilen. Skellefteå Kraft har inte offentliggjort den avtalade nätkapaciteten för EdgeConneX. Det är inte heller offentligt klarlagt hur tidigare Northvoltanslutningar fördelas mellan EdgeConneX och Lyten.

Den konkreta statusen är därmed mer långt gången än en ren avsiktsförklaring: bygglov finns för DC01 och DC02 och ett delstartbesked för grundläggningen har rapporterats. Men campusets fulla omfattning är fortfarande inte byggd eller nätmässigt klarlagd. Det som återstår att fastställa är bygglovets laga kraft, startbesked för återstående arbeten, avtalad nätkapacitet och effektprofil, faktisk IT-last, vatten- och kylsystem, reservkraft, kundavtal och finansiering.

### Europeisk hårdvara och moln – men ännu ingen offentlig kapacitetsorder

En annan del av Europas AI-infrastruktur är försöket att bygga en mer självständig leveranskedja för servrar, moln och programvara.

Den 3 november 2026 offentliggjorde franska Bull och tyska Schwarz Digits ett memorandum of understanding om ett europeiskt AI- och molnekosystem. Schwarz Digits ska bidra med molninfrastruktur genom STACKIT, medan Bull bidrar med AI- och HPC-kompetens och tillverkning. BullSequana AI är tänkt att bli tillgänglig i STACKIT Marketplace.

Det är ett intressant industriellt samarbete, men det är fortfarande ett MoU. Reuters beskriver överenskommelsen som preliminär. Inga offentliga finansiella villkor, specifika datacenterlokaliseringar, MW-tal eller bindande kundbeställningar har offentliggjorts i underlaget.

Samarbetet illustrerar en viktig skillnad: europeisk jurisdiktion och europeisk slutmontering kan stärka kontrollen över vissa delar av infrastrukturen, men de bevisar inte i sig att hela kedjan – chip, minnen, nätverksutrustning, mjukvara, energi och drift – är europeisk eller oberoende av globala leverantörer.

---

## 8. Vem betalar – och vem har möjlighet att säga nej?

De europeiska exemplen visar olika finansierings- och riskmodeller:

- I Amsterdam har en stor datacenterkund reserverat hela kapaciteten i en anläggning vars tillstånds- och nätavtal går tillbaka till en tidigare period.
- I Norge vill staten styra vilka projekt som ska få tillgång till elnätet och överväger att låta stora nya kunder bära en större del av nätkostnaderna.
- I Skottland har en offentlig garanti bidragit till att låsa upp privat lånefinansiering för ett datacenterprojekt.
- I Sofia kombineras EU-struktur, nationell medfinansiering och en offentlig superdatorupphandling.
- I Skellefteå försöker en privat utvecklare omvandla ett tidigare industriområde till en möjlig digital campusplats.
- I det fransk-tyska Bull/Schwarz-samarbetet byggs ett tänkt europeiskt hårdvaru- och molnerbjudande, men kommersiella villkor och leveransvolymer är ännu inte offentliga.

Det är olika modeller. En offentlig garanti är inte samma sak som ett bidrag. En nätreservation är inte samma sak som en färdig elanslutning. Ett politiskt mål är inte ett byggbeslut. Och ett MoU är inte en order.

Den politiska kärnfrågan blir därmed hur kostnader och risker fördelas. Datacenter kan skapa arbetstillfällen, stärka digital kapacitet och ge nya intäkter till kommuner och leverantörer. Men de kan också kräva nätinvesteringar, mark, vatten, reservkraft och offentliga garantier långt innan de betalar skatt eller levererar de jobb som nämns i en investeringspresentation.

ACER:s siffror visar att nätkostnader och flaskhalsar redan har en stor ekonomisk betydelse för Europas elsystem. De visar inte att datacenter ensamma orsakat kostnadsökningen. Men när nya stora laster tillkommer måste den som vill bygga kunna redovisa vilken effekt som behövs, när den behövs, varifrån energin ska komma och hur kostnaden ska fördelas mellan projektet och övriga elkunder.

Det är där den verkliga frågan om digital suveränitet börjar. Suveränitet handlar inte bara om var servrarna står eller vilken jurisdiktion molnleverantören lyder under. Den handlar också om vem som kontrollerar marken, nätet, elproduktionen, finansieringen, hårdvaran och möjligheten att säga nej när ett projekt inte längre är samhällsekonomiskt hållbart.


## 9. Nscale: kontrakt är inte samma sak som levererad kapacitet

Nscale visar hur ett europeiskt bolags datacenterplaner kan vara beroende av både nätanslutning och finansiering över flera jurisdiktioner. I en ändring av bolagets amerikanska börsregistrering, inlämnad till SEC den 12 november 2026, redovisar Nscale plc flera villkorade kundåtaganden och betydande kapitalbehov. Dokumentet är bolagets eget preliminära prospektunderlag, inte en oberoende revision och inte bevis för att en planerad anläggning är i drift.

### Kontrakterat värde, faktisk omsättning och finansieringsgap

Nscale:s S-1/A skiljer mellan 6,4 miljarder dollar i *active TCV* och 105,8 miljarder dollar i *active and contracted TCV* vid prospektdatumet. Bolaget uppger att avtalen omfattar omkring 461 000 GPU:er som är aktiva eller kontrakterade. Det senare talet är inte omsättning som redan har bokförts eller pengar som redan har betalats. Nscale definierar TCV som kontrakterat intäktsvärde över avtalens fulla bindande löptid; bolaget anger också att avtalens tjänsteperiod börjar när GPU-kluster har levererats och accepterats.

Samma prospekt redovisar preliminära, ej reviderade niomånaderssiffror till den 30 september 2026: omsättning 307,5 miljoner dollar, rörelseförlust 837,5 miljoner och nettoförlust 1,692 miljarder dollar. Beräknad kassa var 3,576 miljarder dollar och total skuld inklusive kortfristig del 5,516 miljarder. Nscale skriver uttryckligen att siffrorna bygger på interna preliminära register, kan ändras och inte har granskats eller reviderats av KPMG. De ska därför inte beskrivas som slutligt fastställda års- eller kvartalsresultat.

Financial Times rapporterade den 13 november att Nscale behöver ytterligare kapital inför en planerad börsnotering som tidningen värderar till omkring 35 miljarder dollar, och att bolaget har sex månader på sig att ordna finansiering för den första Monarch-byggnaden. SEC-handlingen bekräftar att Nscale vid prospektdatumet saknade bindande åtaganden för de finansieringar som krävs för Anthropic-avtalen, men den offentliga avtalstexten anger bara en ”specified period” och inte uttryckligen sex månader. Sexmånadersuppgiften behandlas därför som Financial Times rapportering, inte som en tidsfrist som självständigt kan utläsas ur prospektet. Själva S-1/A är ett preliminärt prospekt; prisfältet är ännu tomt och registreringen är inte samma sak som en genomförd börsnotering.

Prospektet beskriver även NVIDIA som investerare/part i osäkrade konvertibla finansieringsinstrument. Det är en finansieringsrelation, inte belägg för att NVIDIA-aktier har pantsatts som säkerhet. Den specifika frågan om aktiepant hör till huvudspår 6 och måste utredas separat.

### Loughton: ett brittiskt Microsoft-avtal föll med nätanslutningen

Nscale uppger att bolaget före den senare ändringen hade ingått Microsoft-avtal med möjliga betalningar på upp till 43,8 miljarder dollar genom december 2033, beroende på leverans och tillgänglighet. Därefter avslutades ett separat statement of work värt 3,22 miljarder dollar när den lokala nätleverantören drog tillbaka det planerade anslutningsdatumet och den tillhörande effektallokeringen för Loughton i Storbritannien. Prospektet redovisar inte i samma avsnitt ett nytt, omräknat totalvärde efter avslutandet; 43,8 miljarder ska därför inte presenteras som ett verifierat nettovärde för de kvarvarande avtalen. Nscale säger att övriga Microsoft-avtal inte påverkades och att bolaget undersöker alternativa kraftlösningar för platsen.

Detta är ett konkret exempel på att ett kundavtal och en byggplan inte räcker när den avtalade elanslutningen uteblir. Beloppet 3,22 miljarder dollar avser ett avslutat arbets-/leveransomfattningsavtal, inte en redan utbetald förlust eller en färdig anläggnings värde.

### Kvandal: den norska investeringen

Samma SEC-handling anger att Nscale räknar med investeringar på omkring 2–3 miljarder dollar i datacenter och kraftinfrastruktur vid Kvandal i Norge. Bolaget uppger att omkring 1 miljard dollar hade upparbetats per den 30 september 2026 och att ytterligare cirka 1–2 miljarder dollar väntas fram till färdigställande. Därutöver räknar bolaget med 7–8 miljarder dollar i GPU:er och annan compute-utrustning för Kvandal.

Detta är bolagets investeringsprognoser och upparbetade kostnader, inte en oberoende bekräftelse av installerad IT-last eller faktisk elförbrukning. Siffrorna visar ändå varför nätanslutning, byggkostnad och GPU-finansiering måste granskas som separata delar av samma projekt.

### Monarch i USA: den globala finansieringsrisken

Nscale redovisar fyra avtal med Anthropic om möjliga betalningar på upp till 44,6 miljarder dollar för GPU-tjänster vid Monarch Compute Campus i West Virginia. Den platsen ligger i USA och ska inte räknas som europeisk kapacitet. Den är relevant här därför att den visar hur samma bolag kan bära mycket stora åtaganden på flera marknader samtidigt.

För Monarch Building 1 uppskattar Nscale datacenter- och kraftinvesteringarna till 10–10,5 miljarder dollar, varav cirka 1 miljard uppges ha upparbetats per den 30 september. GPU:er och annan compute-utrustning beräknas kräva ytterligare 21–22 miljarder dollar. SEC-handlingen säger uttryckligen att Nscale vid prospektdatumet ännu inte hade bindande finansieringsåtaganden för någon av de finansieringar som krävs för att fullgöra Anthropic-avtalen. Bolaget säger att finansieringen fortfarande arbetas fram och att det inte finns någon garanti för att den kan säkras på godtagbara villkor.

Prospektet anger att Nscale ska använda bästa ansträngningar för att ordna kvalificerad finansiering inom en avtalad period efter avtalens ikraftträdande, med möjlighet till senare datum genom ömsesidig överenskommelse. Den exakta tidsfristen anges inte i de redovisade avsnitten. Därför används inte en medieuppgift om en viss sexmånadersfrist som fastställd avtalsfrist här.

Nscale-fallet knyter ihop artikelns huvudfråga: kontrakterad efterfrågan är inte kontant betalning, en planerad GPU-installation är inte driftsatt kapacitet och en reserverad effekt är inte säker leverans. För Europa är Kvandal och Loughton de direkta geografiska exemplen; Monarch visar hur finansieringsrisken kan växa när ett bolag binder sig till stora leveransåtaganden i flera länder.

## 10. Uniper: nätanslutningen blir en tillgång

Energibolaget Uniper beskriver nu datacenter som ett nytt användningsområde för äldre kraftverks- och industriområden. I bolagets Capital Markets Day-presentation från november 2026 anges omkring **700 MW säkrad nätkapacitet för datacenterprojekt i avancerad utvecklingsfas**. Kartan på presentationens sida 59 pekar ut projektområden i Storbritannien, Nederländerna, Tyskland och Skandinavien. Uniper lyfter fram brownfield-mark, befintliga produktionsanläggningar och möjligheten att kombinera egna energitillgångar med nätanslutning.

Det är en viktig skillnad mellan att ha en plats, att ha ett nätbesked och att ha en färdig serverhall. Unipers siffra är bolagets egen uppgift om nätkapacitet i projekt under utveckling. Den betyder inte att 700 MW redan är installerade, att samtliga projekt har bygglov eller att elen redan förbrukas av datacenter. Presentationen namnger inte alla enskilda projekt eller kunder.

Financial Times rapporterade den 16 november att Uniper närmade sig ett första avtal och förde avancerade samtal om ytterligare två platser. Det är oberoende rapportering om förhandlingsläget, inte ett offentligt undertecknat kundavtal. De två uppgifterna ska hållas isär: Unipers presentation styrker bolagets egen uppgift om cirka 700 MW i avancerad utveckling; FT beskriver hur nära bolaget enligt tidningens källor är att omsätta delar av portföljen i affärer.

Uniper visar därmed en annan typ av aktör än de vanliga hyperscalers och datacenterutvecklarna. Ett energibolag med mark, kraftverk och tillgång till nät kan bli både platsutvecklare och energipartner. I ett system med långa anslutningsköer kan den befintliga nätpositionen bli en strategisk tillgång i sig. Men det avgörande är fortfarande vilka projekt som når bindande kundavtal, tillstånd, finansiering och faktisk leverans.

## 11. EBRD: elnätsgapet är också ett geografiskt gap

Europeiska banken för återuppbyggnad och utveckling (EBRD) placerar datacenterfrågan i ett bredare konkurrenskraftsperspektiv. I sammanfattningen av *Transition Report 2026–27: Frontiers of Competitiveness* anges att världens datacenter använde uppskattningsvis **485 TWh el under 2025**, motsvarande omkring **1,5 procent av den globala elanvändningen**. Rapporten anger också att USA och Kina väntas stå för **78 procent av den globala ökningen av datacenterkapacitet**.

Reuters sammanfattade den 17 november rapportens regionala varning: i nästan hälften av EBRD:s verksamhetsländer bedöms elnäten inte kunna bära ens ett datacenter. Den uppgiften gäller EBRD:s breda verksamhetsregion – som omfattar länder utanför EU – och får inte återges som ett mått på EU:s medlemsstater. EBRD:s egen kapitelöversikt betonar samtidigt att den största möjligheten för många av dessa ekonomier kan ligga i att använda och utveckla AI-tillämpningar, inte nödvändigtvis i att konkurrera om varje hyperscale-anläggning.

Det förändrar hur Europas karta bör läsas. Tillgång till mark och kapital räcker inte om nätet saknar kapacitet, och ett land kan få större ekonomisk nytta av kompetens, programvara och AI-användning än av att försöka locka till sig en mycket stor serverhall. Det är en regional konkurrensfråga – men också en fördelningsfråga: vilka samhällen får arbetstillfällen och skattebas, vilka får elnätskostnader och miljöbelastning, och vilka blir stående utanför därför att infrastrukturen inte räcker?

EBRD:s globala siffror och regionala bedömning ska inte blandas ihop med en prognos för enskilda europeiska projekt. De ger däremot en nödvändig motvikt till rubriker om annonserade gigawatt: Europas förmåga att bygga AI-infrastruktur avgörs av var elnät, finansiering, kompetens och tillstånd faktiskt möts.

## Slutsats

Europa bygger AI-infrastruktur på flera fronter samtidigt. På vissa platser finns redan tillstånd, äldre nätavtal och stora kunder. På andra finns finansieringspaket, reserverade nätvolymer, planerade superdatorer eller politiska ambitioner som fortfarande väntar på upphandling, miljöprövning och effekt.

Det finns ingen enda europeisk modell. Amsterdam visar hur äldre rättigheter kan forma dagens nätdebatt. Norge visar att tillgång till el och tillgång till nät inte är samma sak. Finland visar att miljöprövning kan stoppa betydande markarbeten utan att projektet därmed är avbrutet. Skottland visar hur offentlig kreditrisk kan hjälpa privat finansiering. Sofia visar hur en EU-superdatorupphandling skiljer sig från en separat gigafabriksvision. Skellefteå visar hur en industriell fastighet kan marknadsföras som framtida AI-campus långt innan kapaciteten är byggd. Uniper visar hur energibolag kan bli plats- och nätaktörer, medan EBRD:s regionala analys visar att elnätskapacitet och kompetens är ojämnt fördelade.

FOLKTRIBUNALENS slutsats är att Europas AI-kapplöpning inte kan mätas i annonserade gigawatt eller miljardbelopp ensamma. Den måste mätas i faktisk levererad beräkningskapacitet, verifierad elförsörjning, fungerande tillstånd, transparent finansiering och den nytta som kan visas för de samhällen som står för marken, infrastrukturen och en del av risken.

Den avgörande frågan är inte bara hur mycket AI Europa kan bygga. Det är om Europa kan visa vem som betalar, vem som bestämmer och vem som får nyttan.

---


## Bildförslag – redaktionellt underlag

1. **Huvudbild:** dokumentärbild av en datacenterhall med högspänningsställverk eller transformatorstation i förgrunden. Bildtext: *Serverhallen är bara en del av infrastrukturen – elanslutningen avgör om kapaciteten kan levereras.*
2. **Amsterdam:** översiktsbild av Plimsollweg-området och hamnens elinfrastruktur. Undvik att använda en bild från en annan Microsoft-anläggning som om den föreställde just denna plats.
3. **Sofia:** Sofia Tech Park eller Discoverer-superdatorns faktiska installation. Märk tydligt om bilden visar Discoverer och inte den ännu ej bekräftade slutliga Discoverer++-leveransen.
4. **Skellefteå:** flygbild av det tidigare Northvolt-området, med tydlig bildtext att 1 GW är en utvecklaruppgift om möjlig framtida campuskapacitet.
5. **Norge:** Statnetts transmissionsnät eller Kvandal-området. Kontrollera plats och bildrättigheter innan publicering.
6. **Uniper:** använd företagets karta på sida 59 i Capital Markets Day-presentationen endast som en tydligt märkt bolagsgrafik; den visar identifierade projektområden, inte färdigbyggda datacenter.

Använd i första hand egna bilder, myndighetsbilder med kontrollerad licens eller uttryckligen licensierat bildmaterial. Bildförslag är inte ett påstående om att en viss anläggning redan är färdig.

## Faktaruta: Europas projekt och kapacitet

| Projekt / plats | Offentliggjord siffra | Vad siffran betyder | Status enligt kontrollerat underlag |
|---|---:|---|---|
| Amsterdam / Plimsollweg | 99 MW | Anslutningskapacitet, tre torn à 33 MW | Under uppförande; inte hyperscale enligt nederländsk definition på grund av areatröskeln |
| Norge | 800 MW | Datacenterlast redan ansluten | Anslutet enligt regeringen; inte samma sak som full förbrukning |
| Norge | 4 200 MW | Reserverad nätkapacitet | Reservationer, inte drift |
| Norge | 9 100 MW | Kapacitet i anslutningskö | Kö, inte beviljad anslutning |
| Norge | 18 000 MW | Ytterligare anslutningsförfrågningar | Förfrågningar, inte projekt i drift |
| DataVita / Lanarkshire | 500 MW | Planerad datacenterutveckling enligt oberoende rapportering | Planerad; fullt nätförsörjd enligt bolagets uppdaterade FAQ |
| BRAIN++ / Sofia | 90 miljoner euro | Övergripande projektbudget enligt Sofia Tech Park/INSAIT | AI-fabriksprojekt |
| Discoverer++ / Sofia | 54,23 miljoner euro | Uppskattat upphandlingsvärde för superdatorsystemet | Upphandlingen stängd; tilldelning behöver kontrolleras |
| EdgeConneX / Skellefteå | Upp till 1 GW | Potentiell framtida campuskapacitet enligt utvecklaren | Plan/utveckling; inte installerad eller ansluten effekt |
| Uniper / flera europeiska platser | Cirka 700 MW | Bolagets uppgift om säkrad nätkapacitet för datacenterprojekt i avancerad utvecklingsfas | Bolagsuppgift; inte driftsatt effekt eller bekräftade kundavtal |

**Viktig måttregel:** siffrorna ovan avser olika saker. De ska inte summeras till en totalsiffra för Europas byggda eller driftsatta AI-kapacitet.

---

## Primärkällor

1. **Europeiska kommissionen – Energy performance of data centres.** EU:s mål och ramverk för energieffektiva datacenter:  
   https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive/energy-performance-data-centres_en

2. **ACER – 2026 Monitoring Report on energy infrastructure development in Europe**, publicerad november 2026:  
   https://www.acer.europa.eu/news/energy-grids-development-keeping-pace-europes-evolving-needs

3. **International Energy Agency – Overcoming energy constraints is key to delivering on Europe’s data centre goals**, 16 november 2025:  
   https://www.iea.org/commentaries/overcoming-energy-constraints-is-key-to-delivering-on-europe-s-data-centre-goals

4. **Nederländska Tweede Kamer – skriftligt regeringssvar om datacentret vid Plimsollweg**, mottaget 2 april 2026:  
   https://www.tweedekamer.nl/kamerstukken/kamervragen/detail?did=2026D15709&id=2026Z01790

5. **Norska regeringen – Government seeks controlled growth of data centres in Norway**, 10 november 2026:  
   https://www.regjeringen.no/en/whats-new/government-seeks-controlled-growth-of-data-centres-in-norway/id3192054/

6. **Statnett – NO3 och försörjningsförmåga**, november 2026:  
   https://www.statnett.no/om-statnett/nyheter-og-pressemeldinger/nyhetsarkiv-2026/anmoder-rme-om-a-lukke-avvik-i-omrade-midt/

7. **Finlands Lupa- ja valvontavirasto – Tuike Finland och förberedelsearbeten i Muhos och Kajaani**, 6 oktober 2026:  
   https://lvv.fi/-/lupa-ja-valvontavirasto-kehottaa-tuike-finland-oy-ta-keskeyttamaan-muhoksen-ja-kajaanin-datakeskushankkeiden-valmistelutoimet

8. **UK Government – Lanarkshire AI Growth Zone secures £300 million investment**, 18 augusti 2026:  
   https://www.gov.uk/government/news/lanarkshire-ai-growth-zone-secures-300-million-investment-as-dell-establishes-scottish-base

9. **National Wealth Fund – DataVita secures £300m financing package**, 2026:  
   https://www.nationalwealthfund.org.uk/news/datavita-secures-300m-financing-package-to-accelerate-ai-growth-zone-in-scotland

10. **DataVita – Lanarkshire AI Growth Zone FAQs**, uppdaterad november 2026:  
    https://www.datavita.co.uk/lanarkshire-ai-growth-zone/faqs

11. **EuroHPC JU – BRAIN++ Bulgaria:**  
    https://www.eurohpc-ju.europa.eu/ai-factories/bulgaria_en

12. **EuroHPC JU – Discoverer++ procurement**, upphandling EuroHPC/2025/OP/0005:  
    https://www.eurohpc-ju.europa.eu/acquisition-delivery-installation-and-maintenance-hardware-and-software-discoverer-ai-optimised_en

13. **Sofia Tech Park och INSAIT – BRAIN++ och projektbudget på 90 miljoner euro:**  
    https://sofiatech.bg/en/news/sofia-tech-park-and-insait-are-selected-for-e90-million-eu-project-bulgaria-will-be-home-to-one-of-six-new-eu-ai-factories/

14. **EdgeConneX – planerat campus i Skellefteå**, 27 februari 2026:  
    https://www.edgeconnex.com/news/press-releases/edgeconnex-looks-to-enter-swedish-market-as-part-of-european-data-center-expansion-strategy/

15. **Lyten – Lyten Sweden Operations**, aktuell bolagsstatus:  
    https://lyten.com/operations/lyten-sweden/

16. **Skellefteå kommun – frågor och svar om Bergsbyns industriområde:**  
    https://skelleftea.se/extraordinara-handelser/bergsbyns-industriomrade/utvecklingen-pa-bergsbyns-industriomrade-i-skelleftea/fragor-och-svar

17. **Bull – Bull and Schwarz Digits: a Franco-German alliance for Europe’s digital sovereignty**, 3 november 2026:  
    https://www.bull.com/en/press-releases/pr-bull-and-schwarz-digits-a-franco-german-alliance-for-europes-digital-sovereign


18. **Statnett – tillfälliga åtgärder för datacenteranslutningar**, 9 november 2026:
    https://www.statnett.no/om-statnett/nyheter-og-pressemeldinger/nyhetsarkiv-2026/midlertidige-tiltak-for-fortsatt-forsvarlig-systemdrift/

19. **Statnett – skriftlig redogörelse till RME om NO3**, daterad 11 november och publicerad 12 november 2026:
    https://www.statnett.no/globalassets/om-statnett/nyheter-og-pressemeldinger/nyhetsarkiv-2026/skriftlig-redegjorelse-til-rme---oppfolging-og-anmodning-om-a-lukke-avvik.pdf

20. **Statnett – utredning av åtgärder för ökad förbrukning i NO3**, november 2026:
    https://www.statnett.no/globalassets/om-statnett/nyheter-og-pressemeldinger/nyhetsarkiv-2026/utredning-av-tiltak-for-okt-forbruk-i-no3.pdf

21. **Menon Economics – ekonomiska sidor av datacenterbranschen i Norge**, beställd av Digitaliserings- og forvaltningsdepartementet, 29 oktober 2026:
    https://www.regjeringen.no/no/aktuelt/ny-rapport-okonomiske-sider-ved-datasentersenternaringen/id3186921/

22. **Europeiska kommissionen, DG Energy – gemensamt märkningssystem och konsultation om minimistandarder för datacenter**, 21 september 2026:
    https://energy.ec.europa.eu/news/minimum-performance-standards-data-centres-europe-public-consultation-launched-2026-09-21_en

23. **SEC – Nscale plc, Amendment No. 1 to Form S-1**, inlämnad 12 november 2026:
    https://www.sec.gov/Archives/edgar/data/2110365/000119312526458722/ck0002110365-20261112.htm
24. **Lupa- ja valvontavirasto – Tuike Finland: vattenhantering, dränering och vattenlagstillstånd i Muhos**, 22 oktober 2026:
    https://lvv.fi/-/lupa-ja-valvontavirasto-vaatii-tuike-finland-oy-lta-toimenpiteita

25. **Polisen i Finland – förundersökning om Tuike Finlands förberedelsearbeten i Muhos**, 29 oktober 2026:
    https://poliisi.fi/-/poliisi-on-aloittanut-rikostutkinnan-tuike-finland-oy-n-muhoksen-datakeskushankkeen-valmisteleviin-toihin-liittyen

26. **EuroHPC JU – aktuell upphandlingssida för AI Gigafactories**, status och nya inlämningslänkar kontrollerade 17 november 2026:
    https://www.eurohpc-ju.europa.eu/call-tenders-selection-artificial-intelligence-gigafactory-consortia-and-establishment-ai_en

27. **Skellefteå kommun – kungörelse om bygglov för DC01 och DC02, Ackumulatorn 3, dnr 2026-3140**, 28 september 2026:
    https://skelleftea.se/download/18.37dfe2e81a0adc9019bf50f/1790595282269/2026-09-28_SAM-2026-3140_96_Kung%C3%B6relse.pdf


28. **Uniper – Capital Markets Day Presentation, November 2026**, särskilt s. 13 och 59: bolagets uppgift om cirka 700 MW säkrad nätkapacitet för datacenterprojekt i avancerad utveckling och kartan över identifierade projektområden.  
    https://www.uniper.energy/system/files/2026-11/Uniper_Capital%20Markets%20Day%20Presentation_November_2026.pdf
29. **EBRD – Transition Report 2026–27, kapitelöversikt, särskilt kapitel 3 “Building the AI economy”**, global elförbrukning för datacenter och fördelningen av förväntad kapacitetsökning.  
    https://www.ebrd.com/home/news-and-events/publications/economics/transition-reports/transition-report-2026-27/chapters.html

## Oberoende rapportering och kompletterande källor

1. **Reuters – protest vid Microsoft/Pure Data Centres i Amsterdam**, 6 november 2026:  
   https://www.reuters.com/world/europe/activists-breach-microsoft-data-centre-construction-site-protests-spread-europe-2026-11-06/

2. **The Guardian – Lanarkshire AI datacentre to fully rely on National Grid**, 7 november 2026:  
   https://www.theguardian.com/uk-news/2026/nov/07/lanarkshire-ai-datacentre-to-fully-rely-on-national-grid-despite-renewables-claim

3. **Yle – police open preliminary probe into Google’s data centre site activities in Muhos**, 29 oktober 2026:  
   https://yle.fi/a/74-20254086

4. **Reuters – Bull and Schwarz Digits partner to build European AI computing services**, 3 november 2026:  
   https://www.reuters.com/business/retail-consumer/schwarz-digits-bull-partner-up-build-european-ai-computing-services-2026-11-03/

5. **Reuters – protester vid datacenter i Amsterdam**, 6 november 2026, kompletterande internationell rapportering:  
   https://www.reuters.com/world/europe/activists-breach-microsoft-data-centre-construction-site-protests-spread-europe-2026-11-06/


6. **Le Monde – protests against data centres held across Europe**, 9 november 2026:
   https://www.lemonde.fr/en/economy/article/2026/11/09/protests-against-data-centers-held-across-europe_6775706_19.html

7. **Reuters – Norway reins in data centre industry after Statnett pauses new grid reservations**, 9 november 2026:
   https://www.reuters.com/business/energy/norways-statnett-pauses-new-grid-capacity-data-centres-protect-power-system-2026-11-09/

8. **Reuters – Microsoft pulls out of UK data centre deal with Nscale**, 18 oktober 2026:
   https://www.reuters.com/business/media-telecom/microsoft-pulls-out-uk-data-center-deal-with-nscale-telegraph-reports-2026-10-18/

9. **Financial Times – Nscale warns it needs more cash ahead of $35bn IPO**, 13 november 2026 (bakom betalvägg; används för den uttryckligt attribuerade uppgiften om sexmånadersfönstret):
   https://www.ft.com/content/8d5a8642-d0a1-458d-aaa4-c1e7d344fe47

10. **SVT Nyheter Västerbotten – sju planerade datacenterbyggnader i Skellefteå**, 28 september 2026:
    https://www.svt.se/nyheter/lokalt/vasterbotten/nya-uppgifter-om-datacentret-i-skelleftea-planerar-sju-byggnader

11. **DataCenterSweden – återger Norrans rapport om delstartbesked för grundläggning i Skellefteå**, 9 november 2026:
    https://www.datacentersweden.se/news/edgeconnex-skelleftea-partial-start-notice-2026-11/

12. **2EU Brussels – EuroHPC kräver återskapade anbud och rapporterar uppdaterade testkrav**, 11 november 2026:
    https://2eu.brussels/en/news/eurohpc-extends-deadline-for-medium-scale-ai-gigafactories-and-requires-resubmission-for-both-lots

13. **MLCommons – MLPerf i EU:s AI Gigafactories-upphandling**, oktober 2026:
    https://mlcommons.org/2026/10/open-submissions-endpoints-v1-0/


14. **Financial Times – Uniper in talks to develop data centres at 10 sites across Europe**, 16 november 2026. Uppgiften om ett första nära förestående avtal och två ytterligare avancerade samtal tillskrivs tidningens rapportering; det är inte ett publicerat undertecknat avtal.  
    https://www.ft.com/content/74756c50-cedb-4ff9-9cad-43abd5b0646d
15. **Reuters – EBRD varnar för att utvecklingsekonomier kan missa AI- och försvarsboomen**, 17 november 2026. Återger rapportens bedömning om elnätskapacitet i nästan hälften av EBRD:s verksamhetsländer.  
    https://www.reuters.com/business/finance/developing-economies-risk-missing-out-defence-ai-boom-ebrd-warns-2026-11-17/

---

## Faktastatus

- **BEKRÄFTAT I EU- OCH ACER-DOKUMENT:** EU:s kapacitetsambition, elnätsinvesteringar, projektförseningar och kostnader för nätträngsel.
- **BEKRÄFTAT I NEDERLÄNDSKA PARLAMENTSHANDLINGAR:** Amsterdamprojektets tre torn, 99 MW anslutning, areatröskeln i hyperscale-definitionen, Microsofts reserverade kapacitet och regeringens beräkning på 0,87 TWh vid kontinuerlig full belastning.
- **BEKRÄFTAT I NORSKA REGERINGSHANDLINGAR:** 800 MW anslutet, 4 200 MW reserverat, 9 100 MW i kö och 18 000 MW i ytterligare förfrågningar. Dessa är separata statuskategorier.
- **BEKRÄFTAT I NORSKA REGERINGSHANDLINGAR:** regeringen aviserade den 10 november en framtida licensordning. Huvudprinciperna väntas hösten 2027; detta är ännu inte gällande lag.
- **BEKRÄFTAT I LVV:S BESKED 22 OKTOBER:** Tuike uppgav att förberedelsearbetena hade stoppats vid både Muhos och Kajaani-Otanmäki den 14 oktober. LVV uppgav att Muhosanmälan omfattade cirka nio kilometer nya diken, varav merparten redan hade byggts enligt bolagets underlag; myndigheten krävde vattenhanteringsplan senast 5 november och bedömde att dräneringen kräver tillstånd enligt vattenlagen.
- **MYNDIGHETSBEDÖMNING, INTE SLUTLIG SKADEPRÖVNING:** LVV sade att bolagets egna övervakningsresultat visade förändringar som tyder på försurning och att föreslagna åtgärder inte med tillräcklig säkerhet visade att vattenpåverkan kunde hanteras. Det är inte ett slutligt fastställande av omfattningen av vattenförorening eller skuld.
- **BEKRÄFTAT AV POLISEN 29 OKTOBER:** fem utredningsbegäranden hanteras i en förundersökning om misstänkt miljöförstöring vid Muhos. Förundersökningen är preliminär och väntas fortsätta in i 2027; ingen skuld är fastställd.
- **BEKRÄFTAT I UK GOVERNMENT OCH NWF-UNDERLAG:** Lanarkshire-paketet omfattar en garanti på 202 miljoner pund som hjälper till att låsa upp ett finansieringspaket på omkring 300 miljoner pund. Det är inte ett direkt kontantbidrag på 202 miljoner pund.
- **PARTSUPPGIFT:** DataVitas aktuella FAQ säger att datacentren är fullt nätförsörjda och att framtida direktförsörjning från närliggande förnybar produktion kan bli aktuell genom en separat ansökan.
- **BEKRÄFTAT I EUROHPC-DOKUMENT 17 NOVEMBER:** AI Gigafactories-upphandlingen står som Open. Nya inlämningslänkar finns; äldre utkast och inlämnade anbud i det tidigare systemet kommer inte att beaktas. Lot 2 har deadline 3 december 2026 och Lot 1 4 februari 2027 kl. 17.00 CET. Inga vinnande konsortier är fastställda.
- **SEPARAT EUROHPC-UPPHANDLING:** Discoverer++-upphandlingen hade uppskattat värde 54 228 600 euro och sista anbudsdag 16 oktober 2026. Detta ska inte blandas ihop med den öppna AI Gigafactories-upphandlingen.
- **INTE FASTSTÄLLT I KONTROLLERAT MATERIAL:** slutlig Discoverer++-leverantör, undertecknat kontrakt, slutligt kontraktsvärde eller faktisk installation.
- **SEKUNDÄRKÄLLA OM TEKNISKA KRAV:** 2EU Brussels rapporterade den 11 november att EuroHPC den 10 november reviderade testkraven till MLPerf v5.1. MLCommons bekräftar att upphandlingsspecifikationerna använder Training v5.1 och Inference v5.1, men den fullständiga ändringshistoriken för den aktuella tenderbilagan har inte hämtats i denna kontroll.
- **BEKRÄFTAT I KOMMUNAL KUNGÖRELSE:** bygglov beviljades 24 september 2026 för DC02 och ändrad användning av DS4/FA03 till DC01 på Ackumulatorn 3 (dnr 2026-3140). Bygglovet gäller två byggnader, inte hela sjuhallsplanen.
- **OBEROENDE RAPPORTERING:** SVT återger samrådshandlingar med sju planerade byggnader på 96–150 MW vardera; siffrorna är planerad effekt, inte avtalad nätkapacitet.
- **OBEROENDE RAPPORTERING:** Norran rapporterade ett delstartbesked den 29 oktober som endast gäller grundläggning. Själva beslutet har inte hämtats och startbesked för resten av bygget har inte identifierats.
- **PARTSUPPGIFT:** EdgeConneX har beskrivit upp till en gigawatt som potentiell campuskapacitet. Det är inte installerad eller nätansluten effekt.
- **BEKRÄFTAT I BOLAGSKOMMUNIKATION:** Bull och Schwarz Digits ingick ett MoU den 3 november. Finansiella villkor, MW-tal och kundbeställningar har inte offentliggjorts.

- **BEKRÄFTAT I SEC-HANDLING, MEN BOLAGSUPPGIFT:** Nscale:s S-1/A den 12 november redovisar ett avslutat Microsoft-SOW på 3,22 miljarder USD efter att Loughtons nätanslutningsdatum och effektallokering drogs tillbaka. Bolaget säger att övriga Microsoft-SOW inte påverkades.

- **PRELIMINÄR BOLAGSREDOVISNING, EJ REVIDERAD:** Nscale:s S-1/A anger för nio månader till 30 september 2026 omsättning 307,5 miljoner USD, rörelseförlust 837,5 miljoner och nettoförlust 1,6919 miljarder; uppskattad kassa 3,5759 miljarder och total skuld 5,5163 miljarder. KPMG hade inte granskat eller reviderat dessa preliminära uppgifter vid prospektdatumet.
- **BOLAGETS TCV-MÅTT:** Nscale anger 6,4 miljarder USD aktiv TCV och 105,8 miljarder USD aktiv plus kontrakterad TCV, med cirka 461 000 GPU:er aktiva eller kontrakterade. TCV är inte samma sak som redovisad omsättning, kontanter eller levererad kapacitet.
- **OBEROENDE RAPPORTERING:** Financial Times rapporterar ett sexmånadersfönster för att säkra finansiering till Monarch. SEC-handlingen bekräftar att bindande finansieringsåtaganden saknades men anger endast en ospecificerad avtalsperiod; tidsfristen sex månader tillskrivs därför FT.
- **NVIDIA-FINANSIERING:** SEC-handlingen redovisar NVIDIA som part/investerare i osäkrade konvertibla finansieringsinstrument. Detta är inte belägg för att NVIDIA-aktier har pantsatts; huvudspår 6 kräver separat dokumentation av eventuell aktiepant.

- **BOLAGSUPPGIFT / PROGNOS:** Nscale uppskattar Kvandal i Norge till 2–3 miljarder USD i datacenter- och kraftinvesteringar samt 7–8 miljarder USD i GPU/compute-utrustning. Upparbetade kostnader per 30 september är bolagets redovisning, inte en oberoende teknisk kontroll.
- **BEKRÄFTAT I SEC-HANDLING:** Nscale uppger att Anthropic-avtalen kan ge upp till 44,6 miljarder USD i betalningar, men att nödvändiga finansieringar inte hade bindande åtaganden vid prospektdatumet. Monarch ligger i West Virginia och räknas inte som europeisk kapacitet.
- **OBEROENDE RAPPORTERING / ARRANGÖRSUPPGIFT:** Le Monde rapporterade protester i omkring 15 länder; uppgiften om 90 evenemang kommer från arrangörskoalitionen och är inte myndighetsverifierad.
- **FÖRSLAG / PÅGÅENDE PROCESS:** EU-kommissionens datacenter-rating och konsultation om minimistandarder från 21 september 2026 är inte samma sak som redan gällande minimikrav.
- **STATNETT-UPPGIFT:** NO3:s 2 800 MW mogna projekt och 3 800 MW omogna förfrågningar gäller all ny förbrukning, inte enbart datacenter. Statnetts begäran till RME om att stänga avvikelsepunkter är inte ett RME-beslut.


- **BOLAGSUPPGIFT – UNIPER, NOVEMBER 2026:** Capital Markets Day-presentationen anger cirka 700 MW säkrad nätkapacitet för datacenterprojekt i avancerad utvecklingsfas och visar projektområden i Storbritannien, Nederländerna, Tyskland och Skandinavien. Detta är inte installerad eller driftsatt effekt och presentationen namnger inte alla kunder eller bindande avtal.
- **OBEROENDE RAPPORTERING – UNIPER:** Financial Times rapporterade 16 november att ett första platsavtal var nära och att två ytterligare platser var i avancerade samtal. Inget undertecknat avtal har hämtats i denna kontroll.
- **EBRD – GLOBALA DATACENTERDATA:** rapportöversikten för 2026–27 anger 485 TWh global datacenterförbrukning 2025 (cirka 1,5 procent av global el) och att USA/Kina väntas stå för 78 procent av den globala kapacitetsökningen.
- **OBEROENDE RAPPORTERING – EBRD-REGIONEN:** Reuters rapporterade 17 november att nästan hälften av EBRD:s verksamhetsländer saknar elnät som kan stödja ett enda datacenter. Detta avser EBRD:s bredare verksamhetsregion, inte enbart EU, och ska inte generaliseras till medlemsstaterna.


## Ny kontrollpunkt – datacenterkraftens fossila reservväg

BloombergNEF publicerade den 11 november 2026 rapporten *Powering the Data Center Boom: How Grid Policy Can Deliver Clean Power Faster*, beställd av Bloomberg Philanthropies. Databasen har brytdatum 5 oktober 2026.

BNEF har identifierat 181 GW annonserad gaseldad kapacitet föreslagen i anslutning till datacenter globalt. 165 GW ligger i USA; rapporten beskriver mindre koncentrationer bland annat i Kanada, Storbritannien och Irland. Omkring 84 GW i tidsfördelningen saknar angivet driftsättningsår. Detta är en annonserad projektpipeline med mycket varierande mognad – inte installerad effekt, inte ett tillståndsregister och inte en prognos för vad som faktiskt byggs.

BNEF:s utsläppsscenario gäller USA: om alla identifierade amerikanska anläggningar byggs och körs vid en antagen kapacitetsfaktor på 60 procent uppskattas utsläppen till cirka 345 Mt CO2e per år, omkring 152 Mt mer än om motsvarande datacenterkapacitet försörjdes med genomsnittlig amerikansk nätel. Siffran får inte tillskrivas Europa. BNEF bedömer att den lägre marginalkostnaden efter byggstart kan göra att gasanläggningar fortsätter leverera efter att nätanslutning har erhållits; flera utvecklare beskriver gasen som en fem–sjuårig brygga, medan kraftverkens ekonomiska livslängd kan vara betydligt längre.

Rapporten ger också en konkret jämförelse av europeiska nätpolicyer. Frankrike har identifierat sex snabbspårsområden med totalt 4,4 GW nätkapacitet; ett av områdena siktar på 700 MW till 2029. Storbritanniens då föreslagna reform innehåller finansiell säkerhet om £237 500–£712 500 per MW vid accepterat anslutningserbjudande och mognadsmilstolpar. Den brittiska modellen var ett förslag, inte en slutligt gällande regel. BNEF beskriver samtidigt Spaniens hållbarhetsbaserade kapacitetstilldelning och Tysklands mognadsbaserade köprocess.

**OBEROENDE BEKRÄFTELSE:** The Guardian rapporterade 11 november om samma BNEF-underlag och om brittiska platsförslag vid Wapseys Wood och Quest Park. De lokala planerings- och miljöakterna för dessa gasanläggningar har inte hämtats i denna kontroll.

**Redaktionell slutsats:** Den centrala europeiska frågan är inte att 181 GW gas redan byggs, utan vilka av de annonserade projekten som når mark, nät, miljötillstånd, turbiner och finansiering – och om ett utpekat reservkraftverk fortsätter att köras när nätanslutningen väl finns.

**Källor:**
- BNEF pressmeddelande: https://about.bnef.com/insights/data-centers/data-center-power-demand-is-set-to-surge-raising-new-climate-challenges-bloombergnef/
- BNEF fullrapport: https://assets.bbhub.io/professional/sites/44/BNEF-BP-Powering-the-Data-Center-Boom-How-Grid-Policy-Can-Deliver-Clean-Power-Faster.pdf
- The Guardian: https://www.theguardian.com/world/2026/nov/11/ai-datacentres-plan-on-site-gas-fired-power-stations


## Öppna frågor före eventuell publicering

1. Hämta den fullständiga Amsterdamakten, inklusive aktuell överklagandestatus för miljötillstånden, nätavtalets datum och villkor, faktisk effektprofil, vattenvillkor och reservkraft.
2. Begär ut Statnetts fullständiga kapacitetsunderlag och den planerade norska licensmodellens övergångsregler, kriterier och kostnadsfördelning.
3. Begär ut Tuikes vattenhanteringsplan som skulle lämnas in 5 november och LVV:s svar; fastställ om vattenlagstillstånd har sökts eller beviljats, om miljöbedömningarna är färdiga och om arbetena får återupptas. Följ polisens aviserade uppdatering i december; förundersökningen gäller Muhos och är inte ett skuldavgörande.
4. Hämta DataVitas fullständiga PPA-villkor, nätanslutningsbeslut och finansieringsavtal. Fastställ också hur många av de 3 400 förväntade arbetstillfällena som avser byggtid respektive permanent drift.
5. Följ AI Gigafactories-upphandlingen mot Lot 2-fristen 3 december 2026 och Lot 1-fristen 4 februari 2027. Hämta den fullständiga ändringshistoriken för MLPerf-testkraven. Separat: hämta EuroHPC:s tilldelningsmeddelande, slutligt kontrakt och acceptansplan för Discoverer++.
6. Begär ut fullständigt bygglovsbeslut och kontrollera laga kraft; hämta delstartbeskedet för grundläggning och senare startbesked för övriga arbeten. Fastställ avtalad nätkapacitet och fördelningen av tidigare Northvoltanslutningar mellan EdgeConneX och Lyten, samt faktisk effektprofil, IT-last och miljövillkor.
7. Begär ut första kommersiella avtal, leveransplan, tekniska specifikationer och eventuella investeringar bakom Bull/Schwarz Digits MoU.
8. Jämför slutligen annonserad MW-kapacitet med faktisk IT-last och uppmätt elförbrukning när de första anläggningarna når drift.

9. Följ Nscale:s Loughton-alternativ och Kvandal-projektets nätanslutning, byggtakt och faktiska kapitalutgifter; skilj bolagets prognoser från externa bekräftelser.
10. Följ finansieringsvillkoren för Anthropic-avtalen och uppdatera endast när nya bindande finansieringsåtaganden eller avtalsändringar offentliggörs.
11. Följ Nscale:s preliminära 9M-resultat mot slutligt reviderade siffror, den rapporterade sexmånadersfristen och villkoren för NVIDIA-relaterade konvertibla instrument.


12. Begär Unipers projektlista med namngivna platser, faktisk nätanslutningsstatus per plats, villkor för kapacitetsreservationerna, bygglov, kund-/hyresavtal och planerade driftsättningsdatum. Skilj 700 MW bolagsuppgift från kapacitet som faktiskt levereras.
13. Hämta EBRD:s fullständiga kapitel 3 och landbilagor för att kontrollera vilka verksamhetsländer som ingår i bedömningen om elnätskapacitet; jämför därefter med EU-ländernas egna anslutningsköer och systemoperatörernas data.


**Historisk redaktionell status per 13 november 2026:** Vid den tidpunkten var utkastet inte godkänt, inte mergat och inte publicerat. Den statusen ersattes när chefredaktören uttryckligen godkände basversionen den 15 november och PR #64 senare mergades. Aktuell status och 17-novemberuppdatering redovisas i den senaste redaktionsloggen längst ned.


### 17 november 2026 – EuroHPC:s upphandling är öppen, men tidigare anbud måste återskapas

**PRIMÄRKÄLLA – EuroHPC Joint Undertaking, aktuell upphandlingssida:** Vid kontroll den 17 november anges upphandlingen EUROHPC-2026-CEI-AIGF-01 fortfarande som **Open**. De nya sista inlämningsdagarna är 3 december 2026 kl. 17.00 CET för Lot 2 och 4 februari 2027 kl. 17.00 CET för Lot 1. Den officiella sidan säger att de nya inlämningslänkarna nu finns tillgängliga och att samtliga utkast och inlämnade anbud i det tidigare systemet – oavsett lot – inte kommer att beaktas. Sökande måste därför återskapa och skicka in sina handlingar via de nya länkarna. Inga vinnande konsortier eller slutliga anläggningsplatser är fastställda i den kontrollerade källan.

**OBEROENDE RAPPORTERING – tekniska testkrav:** 2EU Brussels rapporterade den 11 november att EuroHPC den 10 november även reviderade testkraven till MLPerf v5.1 för träning och inferens. MLCommons beskriver att upphandlingens specifikationer använder MLPerf Training v5.1 och Inference v5.1. Den fullständiga ändringshistoriken för den aktuella upphandlingsbilagan har inte hämtats i denna kontroll; datumet för ändringen den 10 november ska därför tills vidare tillskrivas 2EU:s rapportering, inte framställas som självständigt kontrollerad i den primära ändringsfilen.

**PRIMÄRKÄLLA – Europeiska kommissionen:** Konsultationen om gemensamt märkningssystem och minimiprestandakrav för datacenter är öppen till den 14 december 2026. Kommissionens aviserade lagstiftningsförslag är planerat till andra kvartalet 2027. Konsultationen är inte ett redan gällande minimikrav.

**Källor:** EuroHPC, https://www.eurohpc-ju.europa.eu/call-tenders-selection-artificial-intelligence-gigafactory-consortia-and-establishment-ai_en ; Europeiska kommissionen, https://energy.ec.europa.eu/news/minimum-performance-standards-data-centres-europe-public-consultation-launched-2026-09-21_en ; 2EU Brussels, https://2eu.brussels/en/news/eurohpc-extends-deadline-for-medium-scale-ai-gigafactories-and-requires-resubmission-for-both-lots ; MLCommons, https://mlcommons.org/2026/10/open-submissions-endpoints-v1-0/ .

### 17 november 2026 – Skellefteå: bygglov och begränsat delstartbesked

**PRIMÄRKÄLLA – Skellefteå kommun:** Kommunens kungörelse den 28 september 2026 anger att bygg- och miljönämnden den 24 september beviljade bygglov för nybyggnad av DC02 och ändrad användning av DS4 och FA03 till DC01 på Ackumulatorn 3, diarienummer 2026-3140. Kungörelsen fastställer bygglovet för de två första byggnaderna, inte för hela den planerade campusutbyggnaden.

**OBEROENDE RAPPORTERING – SVT:** SVT rapporterade den 28 september att samrådshandlingar beskriver sju byggnader på 96–150 MW vardera, med två byggnader i första fasen och fem i en senare fas. Uppgifterna är projekterad effekt i samrådsunderlag, inte avtalad nätkapacitet eller uppmätt IT-last.

**OBEROENDE RAPPORTERING – Norran, återgiven av DataCenterSweden:** Norran rapporterade den 9 november att Skellefteå kommun den 29 oktober utfärdade ett delstartbesked som endast gäller grundläggningsarbeten. Själva delstartbeskedet har inte identifierats som publicerad handling och något startbesked för återstående byggnadsarbeten har inte rapporterats.

**Öppna kontrollpunkter:** hämta det fullständiga bygglovsbeslutet och kontrollera laga kraft; begär ut delstartbeskedet och senare startbesked; fastställ avtalad nätkapacitet och hur tidigare Northvoltanslutningar fördelas mellan EdgeConneX och Lyten; begär effektprofil, vatten-/kylsystem, reservkraft och villkor för spillvärme.

**Källor:** Skellefteå kommun, kungörelse om lov, 28 september 2026, https://skelleftea.se/download/18.37dfe2e81a0adc9019bf50f/1790595282269/2026-09-28_SAM-2026-3140_96_Kung%C3%B6relse.pdf ; SVT, 28 september 2026, https://www.svt.se/nyheter/lokalt/vasterbotten/nya-uppgifter-om-datacentret-i-skelleftea-planerar-sju-byggnader ; DataCenterSweden, återgivning av Norrans rapport 9 november 2026, https://www.datacentersweden.se/news/edgeconnex-skelleftea-partial-start-notice-2026-11/ .

## Redaktionell kontroll – 17 november 2026, 02:35 EET

- **Aktiv huvudartikel:** huvudspår 2, Europas AI-infrastruktur. Ingen parallell huvudartikel har startats.
- **Tidigare artikelgodkännande:** chefredaktören godkände basversionen uttryckligen den 15 november 2026 kl. 17:14:29 UTC; beslutet dokumenterades i PR #64:s kommentar 6898229000. PR #64 mergades 15 november kl. 22:57:44 UTC, merge-commit `45a9b8c2cc295b708afddcb739eb180318fd3052`.
- **Denna revision:** faktauppdatering 17 november om Finland, Skellefteå och EuroHPC. Den är en fortsatt redaktionell uppdatering av samma huvudartikel. Den ska ligga i en separat Draft-PR och inte mergas eller driftsättas i denna körning.
- **GitHub:** `main` hade vid kontrollen commit `b5dfa0375780d580bdcc21735f896a7e5cf6638b` (16 november 06:21:02 UTC). Den kanoniska artikeltexten på `main` var 502 rader före denna uppdatering. Frontendens artikelkort har en bekräftad mismatch: posten med ID `europas-ai-infrastruktur` har Meta/Ofcom-rubrik och ingress, medan artikelkroppen under samma slug är Europas AI-infrastruktur.
- **Render – publik statisk sajt:** service `srv-dblpumgm7kps73bv55e0`, auto-deploy från `main`. Senaste live-deploy vid kontrollen: `dep-dbt4qddg1s2s738p7bmg`, commit `a43f1579058824a36ccad6245d4616551505431e`, färdig 16 november 00:24:32 UTC. Denna deploy visar Meta/Ofcom som förstasidans huvudartikel. AI-infrastrukturens route finns i kod med felaktig kortmetadata; den har inte verifierats med korrekt titel och innehåll via HTTP.
- **Render – redaktionell backend:** service `srv-dblq2r0n74is73cchqh0`; senaste live-deploy `dep-dblq3nafngtc73c0l87g`, commit `6a835783553565f239864a9da7160d9f79f692b2`, från 4 november. Ingen end-to-end-kontroll av `/api/health`, autentisering eller artikelstatusflöde har kunnat genomföras. Web- och containerförsök att nå `folktribunalen-editorial.onrender.com` misslyckades med DNS-resolution i denna kontroll.
- **Postgres:** `folktribunalen-db`, ID `dpg-dblq2fqfngtc73c0h9gg-a`, status `available`, men `ipAllowList=[]`. Read-only `SELECT 1` via hostad Render MCP nekas med meddelandet att databasen blockerar alla externa anslutningar när allowlisten är tom. Render anger att hostad MCP inte har en IP-adress som kan allowlistas; åtkomst kräver lokal Render MCP eller en uttryckligen betrodd klient-IP. Ingen databaspost har skrivits. Använd inte `0.0.0.0/0`.
- **Publik route:** direkt HTTP-försök mot `https://folktribunalen.onrender.com/#/artikel/europas-ai-infrastruktur` kunde inte genomföras eftersom hosten inte kunde DNS-upplösas från web- och containerverktygen. Ingen HTTP-status eller sidtext är därför fastställd. Artikeln är inte LIVE-kontrollerad.
- **Publiceringsspärr:** PR #56 (Meta/Ofcom) och PR #66 (Genève/autonoma vapen) är mergade men saknar PR-kommentarer/review-submissions som visar separat artikelbundet LIVE-godkännande. PR #56:s Meta/Ofcom-huvudartikel finns i senaste live-deployen; detta är en publiceringsavvikelse som kräver chefredaktörens beslut. PR #66 och efterföljande Genève-frontendcommits finns på `main` men ingår inte i senaste live-deployen. Ingen rättelse, rollback eller ny driftsättning har gjorts i denna körning.
- **Nästa tillåtna steg:** återställ säker Postgres-åtkomst via lokal Render MCP eller betrodd klient-IP; testa backendens health, inloggning och artikelstatus; hantera den godkända huvudspår-2-artikeln via redaktionens system; kontrollera därefter dess faktiska publika route med HTTP-status och rätt rubrik, ingress, fulltext och källor. Först efter den kontrollen öppnas huvudspår 3.



## Redaktionell kontroll – 17 november 2026, revision 2

- **Aktiv huvudartikel:** huvudspår 2, Europas AI-infrastruktur. Ingen annan huvudartikel har startats. PR #38 (Synkronicitetsprotokollet) ligger kvar som nästa i ordningen men är inte aktiverad.
- **Basversion:** chefredaktören godkände basversionen i PR #64 den 15 november; PR #64 är mergad. Det godkännandet omfattar inte automatiskt denna materiellt uppdaterade version.
- **Aktuell revision:** PR #70, gren `editorial/europe-ai-infrastructure-update-2026-11-17-v2`, baserad på aktuell `main`. Den innehåller tidigare uppdateringar om Finland, Skellefteå och EuroHPC samt nya källkontroller om Unipers cirka 700 MW i avancerad projektutveckling och EBRD:s AI-/elnätsanalys. **PR #70 är Draft, inte mergad och inte publicerad; den här versionen kräver chefredaktörens uttryckliga godkännande.**
- **Äldre PR #68:** faktauppdateringen från 02:35 EET har ersatts av PR #70, som är byggd på aktuell `main` och omfattar samma tidigare sakuppdateringar plus Uniper och EBRD. PR #68 ska inte mergas.
- **Källavgränsning:** Unipers 700 MW är en bolagsuppgift om nätkapacitet i avancerad utveckling, inte drift. FT:s uppgift om nära avtal är attribuerad medieuppgift. EBRD:s 485 TWh och 78 procent är globala data; uppgiften om nästan hälften av EBRD-länderna med otillräckliga nät är Reuters återgivning och avser inte enbart EU.
- **Publiceringsväg:** Render Postgres är fortfarande `available` men har tom `ipAllowList=[]`; hostad Render MCP:s read-only-anslutning nekas. Säker väg är lokal Render MCP eller en uttryckligen betrodd klient-IP. Ingen databaspost har skrivits.
- **Publik kontroll:** Render statisk tjänst har auto-deploy från `main`; senaste kontrollerade live-deploy är fortfarande commit `a43f1579058824a36ccad6245d4616551505431e` från 16 november 00:24 UTC. Direkt route-hämtning har inte gett HTTP-status eller sidinnehåll. Kort-/slug-mismatch kvarstår i koden; artikeln är inte LIVE-kontrollerad.
- **Nästa steg:** återställ säker databasåtkomst, testa adminens health/inloggning/artikelstatusflöde, rätta kort-/route-mismatch i redaktionens system, invänta chefredaktörens godkännande av just PR #70-versionen och kontrollera därefter publik route med HTTP-status samt rätt rubrik, ingress, fulltext och källor. Först efter detta får huvudspår 3 aktiveras.
