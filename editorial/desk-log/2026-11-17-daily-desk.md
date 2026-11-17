# FOLKTRIBUNALEN Daily Desk – 17 november 2026
**Kontrolltid:** 08:42 EET  
**Branch:** research/2026-11-17-skaga-daily-desk  
**Leverans:** Draft PR #69  
**Publiceringsstatus:** Ingen merge, ingen driftsättning, ingen publicering.

## Masterplan och kö
Den aktuella REDAKTIONELL_MASTERPLAN.md på main har lästs i sin helhet.

- **Aktiv huvudartikel:** huvudspår 2, Europas AI-infrastruktur. PR #64 är mergad till main; den publika route- och innehållskontrollen är inte avslutad.
- **Aktuell faktauppdatering:** PR #68, “Faktauppdatering: Europas AI-infrastruktur – 17 november 2026”, skapad 17 november 00:41 UTC, 9 commits, Open/Draft, inte mergad. Den behandlas som pågående uppdatering av huvudspår 2, inte som en ny huvudartikel.
- **Nästa artikel i godkänd huvudordning:** huvudspår 3, Synkronicitetsprotokollet, PR #38. Den öppnas inte som aktiv huvudartikel före avslutad kontroll av huvudspår 2.
- **Föregående desk:** PR #67, Open/Draft, innehåller Frölunda-ortnamnshistoria, Sulina 13–14 november, separata Hormuz-noter 14 och 15 november samt Bahrain no-action. Frölunda och Sulina återstartas inte som om de vore nya ämnen.

## Pågående portfölj
- Nio huvudspår: Palantir/offentlig makt; Europas AI-infrastruktur; Synkronicitetsprotokollet; Sofia/staden under staden; strategiska råvaror; NVIDIA som säkerhet; Libanon; kyrkorna som överlevde imperierna; Fennoskandien.
- Separata serier: ODJURET UR DJUPET; Storsjö kapell/Cladonia; Skaga kapell (åtta delar); Böckernas väg till Athos; Från skrift till storebror.
- Portföljutvidgningen Religion, Folket och Tradition samt dess tre researchbankar är dokumenterade i masterplanen 17 november: Boyanakyrkan i Sofia (UNESCO-faser/freskerna 1259); British Library EAP500 och fotografiska samlingar från Bulgariens minoritetsgemenskaper (bildrättigheter återstår); Kukeri/Surva som bulgariskt immateriellt kulturarv (bildkandidat identifierad). Dessa researchbankar har inte startats om.
- Frölunda: senast avancerat 16 november i PR #67 enligt masterplanens egen brief – Västra Frölunda: Frølanda 1436, frö + land och senare -lunda-utveckling; Östra Frölunda: separat Frølvnda songh 1402. 1313 är endast en möjlig parallell. Västra och Östra hålls åtskilda; ingen ny Frölunda-vinkel hittas på i denna körning.
- Varna/Svarta havet: Sulina-noteringen ligger i PR #67; dagens BETUL 8 är en separat händelse.
- Cyprus: ingen ny källbunden leverans i denna körning. Det blir nästa geografiska sidospår efter Skaga enligt masterplanens brief: Palaipafos och övergången från lokala fruktbarhetskulter till Afroditekulten; Geroskipou/Hieros Kipos; Asklepieion i Nea Pafos; Kungagravarna; Commandaria. Ingen obruten kultkontinuitet förutsätts.
- Hormuz: endast en bevakad nyhetsström, inte en separat huvudartikel.

## Dagens icke-Hormuz-arbete
**Skaga kapell – del 1: Ursprung.** Skaga var nästa sidospår i föregående desklogg. Ett källbundet researchpaket har skapats, tillsammans med fem separata evidensnoteringar:
1. dendrokronologisk konflikt 1137/1210;
2. offerpraktik, förfall och rivning 1825/1826;
3. 1957 års arkeologiska undersökning och mynt;
4. minnesplatsen och byggnadslagren 1916–2001;
5. Ramunder/Skaga som sägen, inte byggnadsbelägg.

**Varna/Svarta havet:** separat evidensnotering för BETUL 8, 16 november. Fartyget kantrade/sjönk i Bulgariens ekonomiska zon; alla 12 besättningsmedlemmar evakuerades. Uppgifter om sjödrönare återges med källreservation. Händelsen blandas inte ihop med Sulina 13–14 november.

## Hormuz – supplemental notes only
Nya signaler:
- UKMTO Warning 207-26, 16 november 05:58 UTC: tanker träffad av okänd projektil, maskinrumsbrand; Company Security Officer som källa; besättningen säker.
- UKMTO Warning 208-26, 16 november 19:00 UTC: tredjepartsrapport om tankerattack cirka 7 nm norr om Khasab; fartyget obrukbart och maskinrumsbrand; besättningen säker.
- Iranska IRGC Navy och reguljära flottan gjorde separata påståenden om tankfartyg som träffat minor. Ej oberoende verifierat och ingen säker koppling till UKMTO 207/208.

Tre separata evidensnoter skapade. Ingen full omskrivning och ingen ändring av huvudartikelordningen. Ingen akut händelse med kvarstående räddningsbehov motiverade att Skaga-rotationen avbröts.

## Nästa rotation
Efter dagens Skaga-leverans är **Cypern** nästa geografiska sidospår att undersöka. Frölunda har en daterad leverans 16 november; Varna/Svarta havet fick en separat BETUL 8-notering i dag. Huvudspår 2 fortsätter parallellt som enda aktiva huvudartikel.

## Käll- och tekniktillgång
- GitHub: åtkomst fungerade; main och PR-statusar kunde läsas.
- Firecrawl: sökkrediterna var slut; ingen ny Firecrawl-körning gjordes. Offentliga webb- och myndighetskällor kunde nås via alternativ webbsökning.
- Render static site: senaste live-deploy som kunde läsas var fortfarande commit a43f1579058824a36ccad6245d4616551505431e från 16 november 00:24 UTC. Main är senare. Public route kunde inte öppnas i webbläsarkontrollen; därför är huvudspår 2 och Genève inte bekräftade som LIVE.
- Render editorial backend: senaste live-deploy från 4 november, commit 6a835783553565f239864a9da7160d9f79f692b2; healthCheckPath är tom.
- Render Postgres: status available, men ipAllowList är tom. Read-only SELECT 1 avvisades eftersom databasen blockerar externa anslutningar. Ingen DB-skrivning gjord.
- Railway: runtime-kontrollen visar att samtliga fem tjänster i projektet lively-nurturing är OFFLINE och att inga aktiva deployment-repliker eller pågående ändringar finns. Tjänsterna är browser-chromium, browser-use-runner, mindcloud-osiris, Cognee Memory och Osiris-mindcloud-ui. Historiken visar tidigare misslyckade deployförsök för Cognee Memory och Osiris-mindcloud-ui. Ingen tjänst heter Hermes.
- Hermes: ingen Hermes-tjänst eller Hermes-deployment identifierad i Railway-projektet.

## Publiceringsspärr
Alla filer i denna leverans är DRAFT. PR #69 ska förbli Draft. Ingen merge, publicering, deploy eller LIVE-markering har utförts.

## Statusavvikelse att rätta i nästa masterplanversion
GitHub visar PR #55, #56 och #66 som stängda och mergade. En äldre statusrad längre ned i den aktuella masterplanen beskriver fortfarande PR #55 som öppen Draft; den raden är inaktuell. PR #56 är också mergad och återfinns som huvudartikel i Render-deployen från 16 november, men masterplanen anger att separat artikelbundet LIVE-godkännande inte har påträffats. PR #66 är mergad men ingår inte i den senaste live-deployen. Ingen av dessa avvikelser ändrar dagens aktiva kö; de ska rättas/avgöras i masterplanen efter chefredaktörens beslut och faktisk route-kontroll.
