# FOLKTRIBUNALEN – Redaktionell masterplan och levande status

**Version:** 6 november 2026, 08.12 Europe/Sofia  
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

1. **Hormuz – separat artikelgranskning:** [PR #3 – öppna utkastet](https://github.com/selotisk-source/Folktribunalen/pull/3). En enda konsoliderad artikel, faktaläge 6 november. Draft-PR; inte mergad, inte publicerad och inte LIVE.
2. **Äldre dokumentbank:** [PR #1 – 26 äldre utkast](https://github.com/selotisk-source/Folktribunalen/pull/1). Den är uttryckligen markerad som arkiv och får inte mergas som en batch. Enskilda artiklar måste lyftas till separata granskningsärenden.
3. Webbplatsens databasbaserade godkännandekö är **inte tillgänglig ännu**. GitHub-PR #3 är en tillfällig, separat granskningspost – inte en bekräftad webbplatskö.

## 2. Aktiva huvudspår – nio egna artikelkrav

| Nr | Huvudspår | Utkast som finns | Vad som återstår innan spåret har en färdig egen artikel |
|---|---|---|---|
| 1 | **Palantir och den offentliga makten** | `2026-11-05-palantir-nhs-offentlig-makt.md` i PR #1 | Granska NHS-kontrakt, upphandlingsvillkor, datakontroll, exitvillkor och oberoende kritik. En separat artikel om Palantirs senaste kvartalsrapport är ännu inte färdig. |
| 2 | **Vem bygger Europas AI-datacenter?** | Gigafabriker, AI-marknadstest, Anthropic/R&D och kreditkedjan finns som separata utkast i PR #1 | Sammanför inte planerade investeringar, kreditåtaganden och utbetalt kapital. Huvudartikeln måste kartlägga ägare, operatörer, el, nät, kylning, chip, finansiering och offentliga stöd. |
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
| **Hormuz och sjöfarten** | Konsoliderat utkast i PR #3 | IMO anger per 5 november 129 regionalt bekräftade incidenter och 24 dödsfall; VELOS SAPPHIRE är skadat norr om Qatar och en sjöman saknas enligt IMO. IRGC:s uppgifter om andra fartyg är partsuppgifter. Sydkoreas plan söder om Oman är planerad, inte en redan genomförd minröjningsinsats i Hormuz. |
| **Maktförskjutningen i USA:s kongress** | `2026-11-05-kongressen-teknisk-makt-starshield-nvidia.md` finns i dokumentbanken | Kontrollera mandatfördelning, certifierade valresultat, talmans-/senatsprocesser och vilka befogenheter som faktiskt flyttas. Skilj kongressens kontrollmakt från presidentens exekutiva befogenheter. |
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
