# Daglig redaktionslogg – 19 november 2026

## Masterplan och kö

- Aktuell masterplan på main läst: REDAKTIONELL_MASTERPLAN.md, blob SHA e72c80096b9bb100745ec06ba11c6816cad25e3e, version 18 november 2026 kl. 02:44 EET.
- Aktiv huvudartikel: spår 2, Europas AI-infrastruktur. PR #71 är Open/Draft. Inga review submissions eller review threads hittades.
- Nästa i godkänd ordning: spår 3, Synkronicitetsprotokollet, PR #38. Den ligger kvar parkerad tills spår 2 passerat godkännande, publicering via admin och kontroll av publik route.
- PR #73 är en separat Draft-uppdatering av masterplan/status, inte main.
- Föregående sidospårsarbete: PR #67 Frölunda-källnotering 16 november; PR #69 Skaga 17 november; PR #72 Cypern 18 november. PR #71 har uppdaterat huvudspår 2. PR #73 innehåller en Draft-statusuppdatering.
- Öppen PR-audit: 60 öppna PR:er i den hämtade listan; samtliga markerade Draft. PR #71 och #73 saknar registrerade review submissions; PR #71 saknar review threads.

## Portföljval

Frölunda valdes som dagens sidospår. Senaste konkreta Frölunda-leverans var 16 november; Skaga avancerades 17 november och Cypern 18 november. Huvudspår 2 har samtidigt fortsatt egen aktivitet genom PR #71. Valet följer minst nyligen avancerat-status och den dokumenterade Frölunda-briefen, inte nyhetsvolym.

## Dagens leverans

- Frölunda: ett researchpaket om Västra Frølanda 1436, Östra Frølvnda songh 1402, 1500-talets -lunda-anslutning, 1550 års stavningsuppgift, 1886 års särskiljning, och de skilda 1313-hänvisningarna.
- Separata evidensnoter: Västra 1436/1550; två 1313-uppgifter; Östra 1402.
- Varna/Svarta havet: tidslinjen för GAS HUSKY har kompletterats med NAVWARN 854/26 och Reuters 18 november. Samma fartygshändelse, inte en ny incident.
- Hormuz: separata tillägg för UKMTO 211-26, UKMTO 212-26, ADNOC L&S:s onamngivna fartyg och iranska minepåståenden. De hålls åtskilda från varandra och från tidigare varningar där identiteten inte är fastställd.

## Hormuz-beslut

Hormuz genererade endast kompletterande evidensnoter. UKMTO 211-26 anger en tanker 13 NM norr om Khasab den 17 november, brand släckt och en saknad besättningsmedlem. Tara Gas kan vara en möjlig korsmatch men identiteten är inte fastställd. UKMTO 212-26 gäller en separat utgående tanker 6 NM norr om Khasab den 18 november, med besättningen säker. Reuters rapport om ADNOC L&S gäller ett onamngivet fartyg; det kopplas inte automatiskt till Tara Gas. Iranska uppgifter om tre minträffade tankfartyg hålls som obekräftad partsuppgift.

Ingen händelse i den granskade källmängden motiverade att Frölunda-rotationen avbröts eller att huvudartikelordningen ändrades.

## Övriga serier och projekt bevarade

Nio huvudspår: Palantir/offentlig makt; Europas AI-infrastruktur; Synkronicitetsprotokollet; Sofia – staden under staden; strategiska råvaror; NVIDIA som lånesäkerhet; Libanons kristna mellan två fängelser; kyrkorna som överlevde imperierna; Fennoskandien – urberg, skog och häst.

Separata projekt: ODJURET UR DJUPET; Storsjö kapell/Cladonia; Skaga kapell (åtta delar); Böckernas väg till Athos; Från skrift till storebror; Frölunda; Cypern; Varna/Svarta havet. Portföljområdena Religion, Folket och Tradition fortsätter med sex serier vardera enligt programdokumentet.

## Beroenden och åtkomst

- Firecrawl: sökkrediterna tog slut under körningen. Offentlig webbsökning och direktläsning av flera källor fungerade ändå.
- Riksarkivet SDHK: direktposten för 1436 års belägg kunde inte hämtas; originalbrev och SDHK-ID saknas.
- Isofs PlaceNameService/API: direkt endpoint kunde inte nås i denna miljö. Isofs publicerade lexikonposter var åtkomliga.
- Gammeldansk Seddelsamling: indexträffen för 1402 kunde identifieras i sökresultat, men den fullständiga kortsidan time-outade.
- Railway: projektet lively-nurturing har fem tjänster; samtliga rapporterades offline i environment_status. Två tjänster har senaste deployment FAILED; övriga saknar senaste deployment. Ingen Hermes-tjänst finns i inventeringen.
- Render: arbetsytan My Workspace har inte bekräftats för denna körning. Därför gjordes ingen ny service-, deploy-, route- eller databasfråga.
- Editorial backend/Postgres: senaste dokumenterade status i masterplanen är backend-deployment 4 november och Postgres available men med tom ipAllowList; tidigare read-only SELECT 1 nekades. Detta är inte nykontrollerat i denna körning.

## PR-spärr och status

- Ny researchgren skapad från main.
- Ny PR ska vara Draft från skapandet.
- Ingen Ready for review, merge, cherry-pick, main-ändring, frontendändring, deploy, DB-skrivning eller LIVE-markering har gjorts.
- Exakt PR-head SHA dokumenteras i PR-beskrivningen efter skapandet.

## Nästa rotation

- Nästa geografiska sidospår efter dagens Frölunda: Varna/Svarta havet eller Skaga enligt minst nyligen avancerat-status när nästa körning börjar; GAS HUSKY har fått en daterad komplettering idag.
- Nästa huvudartikel enligt godkänd ordning: Synkronicitetsprotokollet, först efter att Europas AI-infrastruktur passerat hela godkännande- och LIVE-kontrollen.