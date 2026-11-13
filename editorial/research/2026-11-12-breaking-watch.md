# FOLKTRIBUNALEN – Breaking Watch
## Intern arbetslogg och täckningsmatris | 12 november 2026

**Dokumenttyp:** intern OSINT-arbetslogg, inte publiceringsartikel.  
**Status:** researchutkast för redaktionell granskning. Ingen artikel publiceras eller mergas genom detta dokument.

## Samlad bedömning

Denna cykel gav substantiella uppdateringar i spåren **A, B, E, F, K, N, O, P, Q och R**. Övriga spår har kontrollerats och redovisas i täckningsmatrisen utan att fyllas med spekulativa notiser.

Viktigaste nya utveckling:
1. NHS England har tagit bort en tidigare publicerad lista över 137 truster som uppgavs rapportera fördelar av Palantirs Federated Data Platform. Guardian har fått svar från 29 truster som säger att de inte använder alla eller merparten av plattformens applikationer.
2. EuroHPC har ändrat inlämningsförfarandet för AI-gigafabrikerna. Tidigare utkast och redan inskickade anbud kommer inte att beaktas och måste skickas in på nytt. Lot 1 har fått förlängd tidsfrist till 4 februari 2027; Lot 2 har tidsfrist 3 december 2026.
3. Finland har öppet gränsöverskridande samråd till 20 november om Kaunis Irons planerade Tapuli K nr 4. Den angivna järnresursen är en mineralresurs, inte en mineralreserv; en eventuell koncession ersätter inte separat miljötillstånd.
4. NVIDIA har meddelat att Jensen Huang lämnar vd-posten och styrelsen med omedelbar verkan. Colette Kress är interim-vd. Senatorerna Warren och Coons har begärt att amerikanska myndigheter bevarar dokument om chipexport till Kina och den rapporterade underrättelseoperationen. Anklagelserna är inte fastslagna genom någon offentlig utredningsslutsats.
5. Nya UKMTO-incidenter 201–204 har rapporterats kring Hormuz och Persiska viken. UKMTO tillskriver inte angreppen någon stat eller grupp. Reuters kan inte oberoende bekräfta det iranska påståendet om fyra tankfartyg som träffats av minor.
6. Den amerikanska senaten har tagit procedursteg för BAAJA. Den föreslagna ersättningstexten innehåller särskilda kostnadsregler för stora beräkningslaster/datacenter, men lagförslaget är inte antaget.
7. NRC har utfärdat byggtillstånd för fyra Xe-100-reaktorer vid Dow Long Mott i Texas. Det är ett byggtillstånd, inte ett slutligt investeringsbeslut eller en driftlicens. X-energys nya Q3-information om AEP/Amazon i Indiana gäller ett utvecklingsavtal och genomförbarhetsarbete, inte en byggbeställning.

---

## Betydande uppdateringar

### A. Palantir, offentlig makt och algoritmisk styrning

**12 november 2026 – NHS England tar bort detaljerad uppgift om 137 truster.**

- **OBEROENDE BEKRÄFTELSE:** The Guardian rapporterar att NHS England tagit bort en lista över 137 truster som tidigare beskrivits som live och rapporterande nytta från Federated Data Platform. Efter en begäran från Medact svarade 29 truster att de inte använde alla eller merparten av plattformens applikationer.
- **Viktig sifferdistinktion:** NHS snapshot från juni skilde mellan 139 truster som var live och 137 som rapporterade någon form av nytta. Det är inte samma sak som att 137 truster använder hela plattformen eller att varje redovisad effekt är kausalt orsakad av FDP.
- **PRIMÄRKÄLLA:** Health and Social Care Committees muntliga utfrågning den 4 november innehåller frågor till NHS Englands ledning om vem som får göra effektpåståenden om FDP, hur Palantir ska godkänna eller korrigera påståenden och hur NHS ska säkra öppna standarder och en fungerande exit.
- **PRIMÄRKÄLLA:** Office for Statistics Regulation (OSR), 22 juli 2026, förklarar att före/efter-jämförelser inte i sig visar att FDP orsakat förändringar i operationsvolym eller väntetider. Oberoende utvärdering och tillgång till underliggande data är därför centrala.
- **OBEROENDE BEKRÄFTELSE:** Guardian rapporterade den 9 november att Palantir argumenterat för att GP-data skulle kunna inkluderas. GP-journaler ingår inte i den nuvarande FDP-omfattningen; ingen beslutad utvidgning har identifierats.
- **PRIMÄRKÄLLA:** Palantirs 10-Q för kvartalet till 30 september, inlämnad 3 november, visar cirka USD 2,31 md i kvartalsintäkter (+96 % år/år). Global government revenue var cirka USD 1,146 md och commercial revenue cirka USD 1,168 md under kvartalet. För årets första nio månader var government revenue fortfarande något högre än commercial revenue.
- **PRIMÄRKÄLLA:** Samma 10-Q anger en minsta inköpsförpliktelse om cirka USD 5,6 md för tredjeparts molntjänster till och med februari 2036. Leverantören anges inte i den aktuella upplysningen. Beloppet är en långsiktig inköpsförpliktelse, inte omedelbar skuld eller bevis för att en viss molnleverantör är ensam motpart.

**Öppna frågor:** Vilka applikationer används faktiskt i varje trust? Vilka resultat kan oberoende reproduceras? Vilken part är personuppgiftsansvarig för varje databehandling? Vilka rättigheter har NHS till data, metadata, kod, modeller och loggar vid avtalsutgång? Vilken del av den långsiktiga molnförpliktelsen är knuten till en identifierbar leverantör?

**Artikelspår:** Fortsätt huvudspår A i befintligt utkast PR #55 och den separata finansiella fördjupningen PR #7.

Källor:
- Guardian, 12 november: https://www.theguardian.com/technology/2026/nov/12/nhs-england-deletes-misleading-claim-137-trusts-benefiting-from-palantir-ai-tools
- Health and Social Care Committee, muntlig evidens 4 november: https://committees.parliament.uk/oralevidence/18242/html/
- OSR, 22 juli: https://osr.statisticsauthority.gov.uk/news/nhs-england-federated-data-platform-fdp-presentation-and-communication-of-information-and-performance-metrics/
- Palantir SEC-filings: https://www.sec.gov/edgar/browse/?CIK=1321655&owner=exclude

### B. Europas AI-datacenter och digitala industri

**5 november 2026 – EuroHPC ändrar anbudsförfarandet för AI-gigafabriker.**

- **PRIMÄRKÄLLA:** EuroHPC meddelar att tidigare utkast och redan inskickade anbud inte kommer att beaktas, oavsett del (lot). Anbudsgivare måste skapa nya inlämningar och skicka in dem via de nya länkarna.
- **PRIMÄRKÄLLA:** Lot 1 har fått ny sista dag 4 februari 2027. Lot 2 har fortsatt sista dag 3 december 2026.
- **PRIMÄRKÄLLA:** EuroHPC anger att förlängningen av Lot 1 beror på nationella budgetförfaranden. Den publicerade informationen ger inte stöd för att tolka detta som att någon viss anläggning eller konsortieansökan redan har valts.
- **Betydelse:** Upphandlingen är en central offentlig efterfråge- och finansieringsmekanism för Europas AI-kapacitet. En omstart av inlämningarna flyttar tidplanen och skapar osäkerhet för konsortier, mark, elanslutning, kylning och privat medfinansiering.

**Öppna frågor:** Vilka konsortier lämnar in på nytt? Vilka länder säkrar nationell medfinansiering? Hur ska el-, vatten- och nätkostnader fördelas mellan anläggningarna, staten och övriga elkunder? Inga nya platsvisa bygglov eller driftsatta kapaciteter har identifierats i denna cykel.

Källa: EuroHPC, uppdatering 5 november 2026: https://eurohpc-ju.europa.eu/call-tenders-selection-artificial-intelligence-gigafactory-consortia-and-establishment-ai_en

### C. Synkronicitetsprotokollet

**Forskningskontroll – två teoretiska bidrag under hösten 2026.**

- **OBEROENDE BEKRÄFTELSE:** Angus McCoss, *Synchronistic Experience as Salience Alignment in Biosemiotic Feedback Systems*, publicerad 21 september 2026 i Biosemiotics. Artikeln föreslår en kvalitativ modell med meningsmässig anpassning, överraskning och kausal opacitet. Den är heuristisk och ännu inte ett kvantitativt eller empiriskt validerat instrument.
- **OBEROENDE BEKRÄFTELSE:** En översiktsartikel i *Neuroscience of Consciousness* (DOI 10.1093/nc/niag063) diskuterar möjliga kopplingar mellan synkronicitetsupplevelser, perception och kognitiva processer. Den är inte belägg för en acausal mekanism.
- **HYPOTES:** Rekommendationssystem, sociala nätverk, arkiv och digitala spår kan skapa dolda återkopplingsvägar som får en händelse att upplevas som oväntat meningsfull. Detta kan testas genom förregistrerade dagboksstudier, exponeringsloggar, blind kodning av meningsfullhet och jämförelser mot basfrekvenser.

**Öppna frågor:** Vilka hypoteser i protokollet kan förregistreras? Vilka variabler kan mätas utan att reducera subjektiv mening till en enkel likhetspoäng? Vilka resultat skulle falsifiera respektive hypotes?

Källor:
- Springer/Biosemiotics: https://link.springer.com/article/10.1007/s12304-026-09663-z
- DOI: https://doi.org/10.1093/nc/niag063

### D. Sofia – staden under staden

**Statusuppdatering – 3 oktober 2026.**

- **PRIMÄRKÄLLA:** Bulgarien tog emot de kvarlevor som tillskrivs Tsar Samuil och placerade dem i en ny marmorsarkofag i basilikan St Sofia. Avtalet med Grekland omfattar samtidigt återlämnande av 48 religiösa föremål till Grekland.
- **OBEROENDE BEKRÄFTELSE:** AP och bulgariska BTA rapporterar att kvarlevorna upptäcktes 1965 av den grekiske arkeologen Nikolaos Moutsopoulos vid basilikan St Achilles på en ö i Prespasjön. St Sofia i Sofia är alltså den nya viloplatsen och minnesplatsen, inte fyndplatsen för kvarlevorna.
- **ÖPPEN FRÅGA:** Den historiska och antropologiska grunden för identifieringen bör granskas mot Moutsopoulos ursprungliga dokumentation. Ingen ny DNA-analys eller ny arkeologisk utgrävningsrapport har identifierats i denna cykel.

Källor:
- AP, 3 oktober: https://apnews.com/article/5acf2293fc67336678ad04035a3f0698
- BTA, 29 september: https://www.bta.bg/en/news/bulgaria/1214109-greece-to-return-tsar-samuel-s-remains-bulgarian-government-and-opposition-welc
- Befintligt arbetsutkast: PR #8.

### E. Strategiska råvaror och mineraler

**19 oktober–20 november 2026 – Tapuli K nr 4 i gränsöverskridande samråd.**

- **PRIMÄRKÄLLA:** Finlands miljöcentral (Syke) publicerar samråd om Kaunis Iron AB:s planerade utvidgning i Tapuli K nr 4. Synpunkter i Finland kan lämnas till 20 november 2026.
- **PRIMÄRKÄLLA – bolagets MKB:** ansökan om bearbetningskoncession gäller cirka 30 hektar. MKB:n anger en indikerad och känd mineralresurs om 6,5 miljoner ton med 22,7 % Fe. Det är inte en mineralreserv. En koncession skulle inte i sig ge rätt att börja bryta; separat miljötillstånd krävs.
- **PARTSUPPGIFT:** Bolagets MKB bedömer påverkan som begränsad. Den bedömningen måste vägas mot oberoende vatten- och naturdata, remissvar och Muonio samebys renskötsel. Området ligger nära Kokkovuoma och i ett avrinningssystem med koppling till Torne och Kalix älvar.
- **ÖPPEN FRÅGA:** Remissvaren från Finland, den pågående rättsliga prövningen av det befintliga miljötillståndet och senare beslut om K4.

**10 november 2026 – Kiltivaara.** Bergsstatens offentliga underrättelse om Kiltivaara nr 1001 publicerades 10 november; ansökan hade kommit in 2 juli. Den publicerade underrättelsen identifierar inte i sig någon bekräftad mineralreserv eller kommersiell fyndighet. Den ska behandlas som en ansökan/underrättelse, inte ett beviljat tillstånd.

Källor:
- Syke, Tapuli K nr 4: https://www.ymparisto.fi/sv/medverka/miljokonsekvensbedomning/kaunis-iron-abs-projekt-utvidgning-av-gruvverksamheten-sverige
- MKB, 21 januari 2026: https://www.ymparisto.fi/sites/default/files/documents/Milj%C3%B6konsekvensbeskrivning%20Kaunis%20Iron%20AB%20Tapuli%20K%20nr%204_1_0_0_0.pdf
- Befintligt arbetsutkast: PR #9.

### F. NVIDIA, AI-finansiering och säkerheter

**11–12 november 2026 – ledningsskifte och exportkontrollfrågor.**

- **PRIMÄRKÄLLA:** NVIDIA meddelade 12 november att Jensen Huang avgår som president, vd och styrelseledamot med omedelbar verkan. Styrelsen accepterade avgången 11 november. CFO Colette Kress blir interim-vd och fortsätter som CFO; Harvey C. Jones blir bolagets första styrelseordförande. Bolagets pressmeddelande anger inget skäl.
- **PRIMÄRKÄLLA:** NVIDIA-styrelsen hade 8 november meddelat en oberoende granskning efter rapportering om att Huang skulle ha varit mål för en utländsk underrättelseoperation. Styrelsen sade då att den inte hade skäl att tro att nationell säkerhet eller NVIDIA-hemligheter hade komprometterats. Granskningen är inte ett färdigt konstaterande.
- **PRIMÄRKÄLLA:** Senatorerna Elizabeth Warren och Chris Coons begärde 11 november att Commerce, State och Vita huset bevarar dokument om NVIDIA:s chipexporter till Kina, relaterade myndighetskontakter och den rapporterade underrättelseoperationen. De begärde skriftlig bekräftelse senast 17 november. Detta är en begäran om bevarande av handlingar och briefing, inte en fällande slutsats eller dom.
- **PRIMÄRKÄLLA:** NVIDIA:s 10-Q för kvartalet som slutade 26 juli redovisar en maximal potentiell garantiexponering på cirka USD 105 md kopplad till SB Energy/PORTS Technology Campus i Ohio, cirka 4,25 GW och nio faser med långa leasingperioder. Ytterligare garantier om cirka USD 3,5 md ger en sammanlagd bruttomaximal exponering på cirka USD 108,5 md.
- **Viktig redovisningsskillnad:** Beloppen är maximal potentiell garanti-/åtagandeexponering, inte omedelbart utbetalda lån eller befintlig skuld. Exponeringen är villkorad av framtida faser och avtalsutfall. Det är avgörande att inte summera annonserad finansiering, tillgänglig kredit, leasingåtaganden och faktisk utbetalning som om de vore samma sak.
- **Nästa kontrollpunkt:** NVIDIA:s Q3 FY2027-resultat är fortsatt planerat till 17 november 2026. Granska då garantiupplysningar, kundkoncentration, kassaflöde, investeringar i kunder och eventuella förändringar i lednings- eller kapitalallokering.

Källor:
- NVIDIA CEO transition: https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition
- NVIDIA styrelseuttalande 8 november: https://nvidianews.nvidia.com/news/statement-from-the-nvidia-board-of-directors
- SEC 8-K, 12 november: https://www.sec.gov/Archives/edgar/data/1045810/000104581026000082/0001045810-26-000082-index.htm
- Senate Banking Committee, Warren/Coons, 11 november: https://www.banking.senate.gov/newsroom/minority/senators-warren-and-coons-direct-lutnick-rubio-and-miller-to-preserve-nvidia-records-following-reports-of-foreign-intelligence-operation-targeting-ceo-jensen-huang
- Befintligt arbetsutkast: PR #47.

### G. Libanons kristna historia och regional geopolitik

**29 oktober–4 november 2026 – mordet på den maronitiske prästen Samir Mikhael Daou.**

- **OBEROENDE BEKRÄFTELSE:** Fides rapporterade 4 november att prästen hittades död i Ain Jrain den 29 oktober efter att ha försvunnit 28 oktober. Han tjänstgjorde i Hsoun och Ferhet. Maronitiska patriarken fördömde mordet och begärde en fullständig utredning.
- **PARTSUPPGIFT/OBEKRÄFTAD:** Fides återger lokala medieuppgifter om att en misstänkt säsongsarbetare greps och ska ha erkänt under förhör. Detta är inte samma sak som en offentlig domstolsfastställd gärningsbeskrivning.
- **ÖPPEN FRÅGA:** Offentlig dokumentation om motiv, åtal och domstolsprövning har inte identifierats. Inget belägg i det kontrollerade materialet visar att mordet var sekteristiskt motiverat. Nationalitet eller religiös tillhörighet får inte användas som ersättning för bevis om motiv.

Källa: Fides, 4 november: https://fides.org/es/news/78378

### H. Kyrkor som överlevt imperierna – Wiesbaden, Warszawa, Prag, Sofia och Varna

**Status:** Ingen ny betydande restaurerings-, ägande- eller kulturarvshändelse har identifierats i denna cykel. Fortsatt separat kontroll krävs för St Elisabeth i Wiesbaden och Heliga Maria Magdalenas katedral i Warszawa samt motsvarande ortodoxa och östkristna byggnader i Prag, Sofia och Varna. Nästa kontrollpunkt är kommunala byggnadsarkiv, kulturarvsregister, församlingsprotokoll och finansieringsbeslut.

### I. Fennoskandien – urberg, skog och hästkultur

**Status:** Ingen ny dom eller större markanvändningsförändring som direkt berör skogsbruk, fäbodar, hästkultur eller renskötsel har identifierats i denna cykel. Tapuli K4 ligger i skärningen mellan mineralutvinning, vatten och rennäring och följs i E/S. Skogsstyrelsens aktuella arbete med att minska en ärendebalans är en administrativ kontrollpunkt, inte i sig ett nytt regionalt markbeslut.

### J. Storsjöodjuret – odjuret ur djupet

**Status:** Ingen ny primärkälla, verifierad observation eller ny hydrologisk/biologisk undersökning har identifierats. Frösöstenens runtext handlar om kristnandet av Jämtland och brobygge; den nämner inte ett sjöodjur. Ormmotivet kan analyseras som symbolhistorik och folklig reception, men är inte biologiskt belägg. Inget nytt primäruttalande från Peter Thiel om Antikrist har identifierats i denna cykel.

### K. Cladonia Skog AB / Alex Karp – Storsjö kapell och markförvärv

**10–12 november 2026 – kommunmöte och ny rapportering om tillkommande mark.**

- **OBEROENDE BEKRÄFTELSE:** Le Monde publicerade 12 november en fördjupning om SCA-affären och uppger att Cladonia Skog AB, där Karp enligt tidningen är ensam ägare, även köpte cirka 300 hektar den 16 oktober. Uppgiften bygger på tidigare rapportering i Östersunds-Posten; fastighetsbeteckningar och lagfarter har inte hämtats direkt ur Lantmäteriets register i denna cykel.
- **OBEROENDE BEKRÄFTELSE:** Bergs kommun träffade en representant för Cladonia den 10 november. TT återger kommundirektör Anders Wennerberg och kommunstyrelsens ordförande Therese Kärngård: bolaget beskrev marken som avsedd för rekreation/skidåkning och sade att det inte finns planer på datacenter eller mineralutvinning.
- **PARTSUPPGIFT:** Detta är muntliga uppgifter återgivna av kommunföreträdare, inte ett registrerat åtagande, ett nytt tillstånd eller en bindande planbestämmelse.
- **Viktig juridisk distinktion:** Den rapporterade köparen är Cladonia Skog AB. Alex Karp ska inte tillskrivas enskilda bolagsåtgärder som personliga handlingar utan separat belägg.
- **Öppna frågor:** Fastighetsbeteckningar och lagfarter för både huvudförvärvet och de ytterligare 300 hektaren; skogsbruksplan; avtal om jakt, fiske, vägar och servitut; samråd med samebyar; vilka rättigheter som följer av allemansrätten; eventuella kulturmiljö- och naturvårdsbeslut. Rykten om palladium, datacenter eller bunker är inte belägg för sådana projekt.

Källor:
- Le Monde, 12 november: https://www.lemonde.fr/en/international/article/2026/11/12/why-exactly-did-palantir-ceo-alex-karp-buy-a-swedish-forest_6778477_4.html
- Sveriges Radio/P4 Jämtland: https://next.sr.se/artikel/mote-om-alex-karps-planer-efter-markkop-i-storsjo-kapell
- TT/Göteborgs-Posten, kommunens återgivning av mötet: https://www.gp.se/nyheter/sverige/kommunen-om-miljardärens-markkop-han-ska-aka-skidor.8f7deb15-0a6c-52e0-8d93-52332fc72483
- Befintligt arbetsutkast: PR #4.

### L. Skaga kapell

**Status:** Ingen ny RAÄ-post, länsstyrelseåtgärd, restaureringsfinansiering eller dokumenterad byggnadsarkeologisk upptäckt har identifierats i denna cykel. Fortsatt kontroll av Riksantikvarieämbetets bebyggelseregister, länsstyrelsebeslut och kyrkoarkiv behövs för att skilja byggnadshistoria från lokala traditioner.

### M. Böckernas väg till Athos

**Forskningsspår:** Freie Universität Berlin beskriver ett pågående projekt för att digitalisera omkring 30 000 osmansk-turkiska dokument vid Athosklostren och utveckla handskriftsigenkänning. Projektet kan öppna nya vägar till dokument om donationer, resor, köp, klosterförvaltning och relationer mellan ortodoxa kloster och osmanska myndigheter.
- **OBEROENDE BEKRÄFTELSE:** Projektet är dokumenterat av Freie Universität Berlin. Det ger ännu inte i sig belägg för en specifik bok- eller manuskriptförbindelse mellan Sverige, Bulgarien och Athos.
- **Öppen fråga:** Identifiera dokumenterade donationer, proveniens och översättningskedjor i katalogerna när de blir tillgängliga. Respektera klostrens tillträdes- och publiceringsregler.

Källa: Freie Universität Berlin, 23 mars 2026: https://www.fu-berlin.de/en/featured-stories/research/2026/mount-athos/index.html

### N. Från skrift till Storebror

**9 november 2026 – offentliggörande av rättslig tvist om EU:s Entry/Exit System (EES).**

- **OBEROENDE BEKRÄFTELSE:** The Guardian och Reuters rapporterar att eu-LISA:s årsredovisning offentliggjorde en rättslig process som byrån inledde den 22 december 2025 mot IBM, Atos och Leonardo om utvecklingsförseningar och avtalsuppfyllelse i EES-projektet.
- **Viktig datumdistinktion:** Den nya uppgiften är offentliggörandet/rapporteringen den 9 november 2026. Själva rättsprocessen inleddes 22 december 2025.
- **Viktig sakdistinktion:** Tvisten gäller utveckling och kontraktsprestation. Den ska inte beskrivas som bevis för att den biometriska gränskontrollen i sig är rättsstridig. eu-LISA uppger att EES är fullt operativt.
- **Framåtblick:** Varje medlemsstat ska tillhandahålla minst en EU Digital Identity Wallet senast 24 december 2026 enligt eIDAS-regelverket. Walletens användning är frivillig för individen; vissa offentliga och privata relying parties måste acceptera den under angivna villkor. Nästa granskning gäller faktisk nationell driftsättning, dataminimering, relying-party-registrering, loggning, återkallelse och klagomålsvägar.

Källor:
- The Guardian, 9 november: https://www.theguardian.com/world/2026/nov/09/eu-lawsuit-ibm-atos-leonardo-entry-exit-border-system
- EUR-Lex, Regulation (EU) 2024/1183: https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX%3A32024R1183
- EU-kommissionens EUDI Wallet-översikt: https://digital-strategy.ec.europa.eu/en/policies/eudi-wallet-implementation

### O. Hormuz, sjöfart och energiflöden

**10–11 november 2026 – flera nya UKMTO-varningar.**

- **PRIMÄRKÄLLA:** UKMTO:s varningar 201–204 omfattar flera separata incidenter i Arabiska viken, Hormuzsundet och närliggande vatten. Varning 204 gäller ett tankfartyg nordväst om Ras al-Khaimah vars maskinrum träffades; brandbekämpning rapporterades och besättningen evakuerades. Varning 203 rapporterar ett fartyg med flera skadade/dödsfall. Varning 202 bekräftar att ett fartyg träffats av ett okänt projektilföremål under passage av Hormuz.
- **Viktig attribution:** UKMTO anger inte ansvarig stat eller grupp. Angreppen får inte tillskrivas Iran, Israel, USA eller någon annan aktör utan ytterligare belägg.
- **OBEROENDE BEKRÄFTELSE:** Reuters rapporterar att ett iranskt påstående om fyra tankfartyg som träffats av minor inte kunde verifieras oberoende. Det påståendet ska inte blandas ihop med de separata UKMTO-incidenterna.
- **PRIMÄRKÄLLA:** IMO:s råd fördömde 6 november angreppen mot sjöfarten och angav minst 130 attacker mot handelsfartyg och 25 dödade sjömän sedan konflikten inleddes.
- **OBEKRÄFTAD/PARTSUPPGIFT:** Houthier har hävdat attacker mot delar av Saudiarabiens East-West-pipeline och Yanbu-anläggningar. Saudiarabisk koalition har uppgett att drönare avvärjts; oberoende skadebekräftelse för de nya påståendena saknas. Den saudiska pipelinekorridoren är en viktig alternativ exportväg när Hormuz är hotat.
- **PARTSUPPGIFT/OBEROENDE BEKRÄFTELSE:** Greenpeace har med satellitbilder identifierat över 500 möjliga oljefläckar med sammanlagd möjlig yta omkring 20 000 km². Det är möjliga satellitdetektioner, inte 500 bekräftade oljeutsläpp eller 500 bekräftade attacker.

Källor:
- UKMTO, varningar 201–204: https://www.ukmto.org/recent-incidents
- The Guardian, miljöeffekter 12 november: https://www.theguardian.com/world/2026/nov/12/oil-slicks-seen-from-space-the-devastating-impact-of-boat-strikes-on-fragile-gulf-ecosystems
- IMO, rådets uttalande 6 november: https://www.imo.org/zh/mediacentre/pressbriefings/pages/imo-council-c138-urges-stronger-protection-of-seafarers-amid-threats-to-global-shipping-.aspx
- Befintligt arbetsutkast: PR #53.

### P. USA:s kongress och institutionella makt

**3–12 november 2026 – kontrollen över den kommande kongressen och energilagstiftning.**

- **OBEROENDE BEKRÄFTELSE:** AP och Reuters har bedömt att Demokraterna tar kontroll över både representanthuset och senaten i den 120:e kongressen. Den nya kongressen tillträder 3 januari 2027; den nuvarande 119:e kongressen behåller sina mandat fram till dess. Några valresultat är fortfarande under slutlig certifiering.
- **PRIMÄRKÄLLA:** Senatens roll-call 257 den 9 november var 73–25 för cloture på motionen att gå vidare med H.R. 2347. Roll-call 258 den 10 november var 62–21 för att gå vidare.
- **PRIMÄRKÄLLA:** Ersättningsändringen SA 6883 innehåller ett förslag om att ägare/operatörer av definierade stora computational-load sites ska bära inkrementella kostnader för den elproduktion, lagring och överförings-/distributionskapacitet som lasten kräver, samt ställa finansiell säkerhet. Texten innehåller också ett program för att ge delstater, kommuner och tribal governments information om elbehov, nät, vatten, kylning, reservkraft och kostnadsfördelning.
- **Viktig distinktion:** H.R. 2347 används som lagstiftningsfordon; den formella ursprungstiteln i senatens register är inte BAAJA-titeln. SA 6883 är en föreslagen ersättningstext. Procedurvoteringarna innebär inte att lagförslaget är antaget.
- **Öppna frågor:** Slutlig ändringstext, eventuella ytterligare amendments, kammarens slutliga omröstning, representanthusets behandling och presidentens ställningstagande.

Källor:
- Senate roll-call 257: https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00257.htm
- Senate roll-call 258: https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00258.htm
- Congressional Record, 10 november 2026, S5400–S5417, SA 6883.
- Befintligt arbetsutkast: PR #10.

### Q. Svenska Gripen och Europas säkerhet

**23 oktober 2026 – Saab Q3 bekräftar Gripen-orderbokning.**

- **PRIMÄRKÄLLA:** Saab redovisar en orderbokning om cirka SEK 24,6 md för 16 Gripen E till Ukraina. Avtalet undertecknades 30 juni 2026; Q3-rapporten är den nya rapporteringspunkten, inte ett nytt kontrakt som tecknats i oktober. Leveransperioden anges till 2029–2030.
- **OBEROENDE BEKRÄFTELSE:** Reuters rapporterar att Ukraina och Saab undertecknade avtalet 30 juni.
- **OBEROENDE BEKRÄFTELSE:** Den första Gripen E som producerats i Brasilien genomförde sin första flygning 6 oktober 2026 vid Embraer-anläggningen. Det är en produktions- och testmilstolpe, inte en leverans till brasilianska flygvapnet eller bevis på full operativ förmåga.
- **Öppna frågor:** Exporttillstånd, finansiering, leveransschema, industrikapacitet och hur den ukrainska beställningen påverkar svensk och brasiliansk produktion.

Källor:
- Saab Q3 2026, 23 oktober: https://www.saab.com/investors/reports-and-presentations
- Reuters, 30 juni 2026: https://www.reuters.com/business/aerospace-defense/ukraine-signs-deal-with-saab-for-16-gripen-e-fighter-jets-2026-06-30/
- Embraer, första brasilianska flygningen, 6 oktober: https://www.embraer.com/global/en/news?slug=1207482-gripen-e-produced-in-brazil-completes-first-flight
- Befintligt arbetsutkast: PR #12.

### R. Strategisk energi och större bolag

**9 november 2026 – NRC utfärdar byggtillstånd för Dow Long Mott.**

- **PRIMÄRKÄLLA:** NRC utfärdade byggtillstånd för fyra Xe-100 högtemperatur-gasreaktorer vid Dow:s Long Mott-anläggning i Seadrift, Texas. Reaktorerna är avsedda att leverera processånga till industrin och överskottsel till nätet.
- **Viktig distinktion:** Byggtillstånd är inte driftlicens, bränsletillstånd eller slutligt investeringsbeslut. Separat driftlicens krävs. Ingen offentlig FID från Dow har identifierats i denna cykel.
- **PRIMÄRKÄLLA/PARTSUPPGIFT:** X-energy:s Q3-rapport 12 november beskriver ett joint development agreement med AEP för en föreslagen 960 MW-anläggning i Indiana. Amazon bidrar till projektutveckling/feasibility work. Det är inte en fast beställning eller ett byggbeslut.
- **PARTSUPPGIFT:** X-energy uppger en pipeline på 11,5 GW/144 reaktorer om samtliga villkorade rättigheter utnyttjas fullt ut. Bolagets Q3-intäkter och bidragsintäkter var USD 66,3m, där ökningen huvudsakligen drevs av DOE:s ARDP-avtal. Likviditet var cirka USD 1,805 md och bolaget redovisade ingen skuld; kassaflödet från den löpande verksamheten var samtidigt cirka -USD 215,8m under årets första nio månader.
- **Öppna frågor:** FID och finansiering för Long Mott, separat driftlicens, bränsleförsörjning, leverantörskedja, AEP-projektets nästa beslutspunkt och vilka pipelinevolymer som blir bindande kontrakt.

Källor:
- NRC, 9 november 2026: https://content.govdelivery.com/accounts/USNRC/bulletins/4323d99
- X-energy Q3, 12 november 2026: https://investors.x-energy.com/news-releases/news-release-details/x-energy-reports-third-quarter-2026-results
- Befintligt jämförelseutkast: PR #59.

### S. Fennoskandiska urbergsskölden / Urbergsskölden – tvärgående industri- och infrastrukturskede

**Tvärkopplingar denna cykel:**
- Tapuli K4 visar hur mineralresurs, koncession, miljötillstånd, rennäring och gränsöverskridande vattenpåverkan måste följas som separata processer.
- EuroHPC:s omstart visar hur AI-infrastrukturens offentliga finansiering och nationella budgetförfaranden påverkar tidsplanen.
- X-energy/Dow och AEP/Amazon visar en möjlig industriell koppling mellan AI-efterfrågan, processvärme och elproduktion, men flera projekt befinner sig fortfarande i utvecklings- eller licensfas.
- Ingen ny offentlig statusförändring för Onkalo/Posiva eller ny civil underjordisk energilagringsanläggning har identifierats i denna cykel. Endast offentligt dokumenterad civil infrastruktur följs; inga känsliga åtkomst- eller skyddsobjektsuppgifter förs in.

---

## Täckningsmatris A–S

| Spår | Status denna cykel | Senaste relevanta kontroll | Nästa kontrollpunkt |
|---|---|---|---|
| A Palantir/offentlig makt | **NYTT** – NHS trust-användning, parlamentariskt ansvar, Q3-åtaganden | Guardian 12 nov; Parliament 4 nov; SEC 3 nov | Trust-för-trust-data, OSR, kontrakt/exit, datatillgång |
| B AI-datacenter | **NYTT** – EuroHPC-anbud omstartade | EuroHPC 5 nov | Nya anbud, nationell medfinansiering, el/vatten/mark |
| C Synkronicitet | **FÖLJNING** – teoretiska bidrag, ingen empirisk bekräftelse | Springer 21 sep; OUP 2026 | Förregistrerade tester, öppna dataset, reproducerbarhet |
| D Sofia | **FÖLJNING** – Samuils kvarlevor i St Sofia sedan 3 okt | BTA/AP 3 okt | Ursprunglig dokumentation från St Achilles/Prespa; nya arkeologiska rapporter |
| E Mineraler | **NYTT** – Tapuli K4-samråd till 20 nov; Kiltivaara underrättelse | Syke 19 okt; Bergsstaten 10 nov | Remissvar, resursklass, koncession, separat miljötillstånd |
| F NVIDIA/finansiering | **NYTT** – vd-byte och exportkontrollgranskning | NVIDIA/SEC 12 nov; Senate Banking 11 nov; SEC 10-Q | Q3 17 nov; garantier, likviditet, exportkontroll |
| G Libanon | **FÖLJNING** – prästmord, motiv ej fastställt | Fides 4 nov | Officiell ISF-/domstolsinformation, motiv, rättsprocess |
| H Kyrkor | **INGEN NY SUBSTANSIELL HÄNDELSE** | Wiesbaden, Warszawa, Prag, Sofia, Varna | Kommunala kulturarvs- och restaureringsbeslut |
| I Fennoskandien | **INGEN NY SUBSTANSIELL HÄNDELSE** | Skogsstyrelsen, mark- och rättighetsfrågor | Skogsbeslut, rennäring, fornminnen, häst- och fäbodarkiv |
| J Storsjöodjuret | **INGEN NY PRIMÄRKÄLLA** | Folklore/Frösöstenen/Thiel | Nya arkivbelägg, hydrologi, primärcitat |
| K Cladonia/Storsjö | **NYTT** – kommunmöte 10 nov och rapporterad ytterligare 300 ha | Le Monde 12 nov; P4/TT 10–11 nov | Lantmäteriet, Bolagsverket, skogsbruksplan, jakt/fiske/servitut |
| L Skaga kapell | **INGEN NY SUBSTANSIELL HÄNDELSE** | RAÄ/kyrkoarkiv | Restaureringsbeslut, inventarier, byggnadsarkeologi |
| M Athos | **FÖLJNING** – digitaliseringsprojekt 30 000 osmanska dokument | FU Berlin 23 mars | Katalog, proveniens, svenska/bulgariska donationsspår |
| N Skrift till Storebror | **NYTT** – EES-rättsprocess offentliggjord; EUDI-deadline närmar sig | Reuters/Guardian 9 nov; EU-kommissionen | eu-LISA-process, wallet-utrullning, relying parties, loggning |
| O Hormuz | **NYTT** – UKMTO 201–204; IMO:s dödstal; oljeutsläppsindikatorer | UKMTO 10–11 nov; IMO 6 nov; Guardian/Reuters 12 nov | Fartygsidentitet, försäkring, last, ansvar, AIS och oljepriser |
| P USA:s kongress | **NYTT** – ny majoritet från januari; BAAJA i senatens procedur | AP/Reuters 3–12 nov; Senate 9–10 nov | Slutlig lagtext, utskottskontroll, NDAA, AI/exportregler |
| Q Gripen | **NYTT** – Q3-orderbokning och brasiliansk första flygning | Saab 23 okt; Embraer 6 okt | Exporttillstånd, leveranser, produktionskapacitet |
| R Energi/större bolag | **NYTT** – Long Mott byggtillstånd; X-energy Q3/AEP | NRC 9 nov; X-energy 12 nov | FID, driftlicens, bränsle, kapital, bindande kundavtal |
| S Urbergsskölden | **TVÄRGÅENDE FÖLJNING** – Tapuli, EuroHPC och industriell energi | Syke 19 okt; EuroHPC 5 nov; NRC 9 nov | CRMA-projekt, GTK/SGU, Onkalo/Posiva, civil lagring |

---

## Redaktionell godkännandekö – status och förslag

**Befintliga ärenden att fortsätta, utan att ändra huvudordningen:**
- PR #55 – Palantir/NHS: komplettera med 12 november-uppgiften om 29 truster och tydliggör skillnaden mellan rapporterad nytta och faktisk modul-användning.
- PR #7 – Palantirs Q3/cloud commitment: håll RPO, minimum purchase commitments och intäkt strikt åtskilda.
- PR #53 – Hormuz: lägg UKMTO 201–204 och IMO:s uppdaterade sjömansdödlighet i tidslinjen; håll attribution öppen.
- PR #47 – NVIDIA: komplettera med 12 november-form 8-K och senatorernas dokumentbevarande-begäran; publicera inte spionpåståenden som fastslagna fakta.
- PR #10 – USA:s kongress: behåll BAAJA som lagförslag/procedur, inte antagen lag.
- PR #4 – Cladonia: lägg till kommunmötet 10 november och den rapporterade 300-hektarsaffären; märk uppgifter som saknar fastighetsutdrag.
- PR #9 – Urbergsskölden: lägg till Tapuli K4:s finska samråd och 20 november-deadline.
- PR #59 – Norrsundet: använd X-energy/Dow som jämförelse av licensmognad, men blanda inte ihop teknikerna eller projekten.

**Nya möjliga artikelvinklar – inte ännu egna publiceringsutkast:**
1. *AI-gigafabriken som måste lämnas in på nytt* – EuroHPC:s anbudsreset, offentlig riskdelning, nätkapacitet och privat kapital.
2. *Tapuli K4: järnresursen som måste passera två länders miljöprövning* – resursklass, rennäring, Torne/Kalix avrinningsområde och 20 november-samrådet.
3. *När AI-last får betala sin egen elinfrastruktur* – BAAJA:s föreslagna kostnadsallokering och vad den betyder för datacenter, kraftbolag och elkunder.
4. *NVIDIA efter Huang* – succession, exportkontroll, 108,5 md USD maximal garanti-exponering och skillnaden mellan finansieringslöften och skuld.
5. *Fyra reaktorer, men inget slutligt investeringsbeslut* – Long Mott, AEP/Amazon och skillnaden mellan byggtillstånd, feasibility agreement och kommersiell order.

**Köregel:** Inga nya huvudartiklar flyttas före i ordningen. Detta dokument är endast en intern researchlogg, inte ett publiceringsärende. Alla artiklar förblir utkast tills chefredaktören uttryckligen godkänner dem.

---

## Arbetsflödesstatus

- Researchloggen skapas som ett separat GitHub-utkast för granskning. Den är inte mergad till main och inte publicerad på webbplatsen.
- Kompletterande källkommentarer har lagts till i PR #9 (Tapuli K4), PR #10 (BAAJA) och PR #59 (X-energy/Dow som jämförelse).
- Övriga relevanta PR:er är fortsatt öppna; inget har godkänts eller publicerats genom denna cykel.
- Render rapporterar den statiska webbplatsens senaste deployment som LIVE, commit f52a144. En innehållsnivåkontroll av den specifika artikelsidan kunde inte genomföras via den offentliga hämtningen, så detta dokument gör inget påstående om att en viss artikel visas LIVE.
- Editorial-backendens senaste deployment är 4 november 2026. En read-only PostgreSQL-testfråga (SELECT 1) blockerades eftersom databasens IP-allowlist är tom: “No IP addresses are allowed to connect to this database. Please add your IP address to the allowlist to connect.”
- Ingen CMS-/databaspost skapades och ingen artikel publicerades.
