# FOLKTRIBUNALEN – Daily Desk-logg, 16 november 2026

**Körning:** 08:39 Europe/Sofia  
**Status:** DRAFT / intern redaktionell logg  
**Branch:** `research/2026-11-16-daily-desk-evidence`  
**Inga artiklar har mergats, publicerats eller markerats LIVE i denna körning.**

## 1. Huvudartikel och godkännandekö

- **Aktiv huvudartikel: spår 2 – Europas AI-infrastruktur.** PR #64 är chefredaktörsgodkänd och mergad. Den publika artikelsidan är inte korrekt kontrollerad. Frontend har en dokumenterad kort-/route-mismatch och databasen/adminflödet är blockerat.
- **Nästa huvudartikel: spår 3 – Synkronicitetsprotokollet, PR #38.** Den får inte öppnas som aktiv huvudartikel före korrekt route- och innehållskontroll för spår 2.
- **Spår 1 – Palantir/NHS:** PR #55 och publik route HTTP 200 kontrollerad 13 november.
- **PR #56 – Meta/Ofcom:** mergad, men tidigare kontroll fann inget separat artikelbundet LIVE-godkännande. Den senaste live-deployen har ändå Meta/Ofcom som förstasidans huvudartikel. Detta kvarstår som publiceringsavvikelse för chefredaktörens beslut.
- **PR #66 – Genève/autonoma vapen:** mergad och frontendkod finns på `main`, men separat uttryckligt LIVE-godkännande har inte påträffats. Den senaste Render-deployen innehåller inte de senare Genève-commitsen. Håll artikeln utanför LIVE.

## 2. Föregående redaktionella arbete

Senaste avslutade planeringskörning uppdaterade masterplanen och återställde sekundärportföljen samt parkerade utkast. Relevanta commits:
- `f2e4673` – korrigerade godkännande-/publiceringsstatus för AI-infrastruktur, 16 nov 06:19 UTC
- `d8f5c7b` – uppdaterade masterplanen och publiceringsrevisionen, 16 nov 06:19 UTC
- `b5dfa03` – återställde sekundärportföljen och parkerade ärenden, 16 nov 06:21 UTC

Denna körning har fört **Frölunda – ortnamnshistoria** framåt genom ett källbundet forskningspaket. Det är en kandidat för senare artikel, inte en ny aktiv huvudartikel.

## 3. Portföljstatus

### Nio huvudspår
1. Palantir och offentlig makt – publicerad; separat NHS-tillägg efter spår 2.
2. Europas AI-infrastruktur – aktiv; PR #64 godkänd/mergad; route- och innehållskontroll återstår.
3. Synkronicitetsprotokollet – PR #38 Draft; nästa i huvudordningen efter spår 2.
4. Sofia – staden under staden – PR #8 Draft; musei-/utställningsmaterial och byggnadsarkeologi återstår.
5. Europas strategiska råvaror – PR #34 och #51 Draft; PR #65 Kazakstans tungsten Draft.
6. NVIDIA som säkerhet för lån – PR #14, #23 och #47 Draft; faktisk aktiepantkedja saknas.
7. Libanons kristna mellan två fängelser – PR #22 och #39 Draft; håll skild från den publicerade Daou-granskningen PR #36.
8. Europas kyrkor som överlevde imperierna – saknar komplett huvudartikel; byggnadsakter och restaureringsunderlag krävs.
9. Fennoskandien – urberg, skog och häst – PR #4, #32, #37 och #43 innehåller delcase; PR #61 om markrätt är separat Draft.

### Separata serier och projekt
- **ODJURET UR DJUPET:** PR #28 Draft; primärtext för Thiel, runologisk kontroll av Frösöstenen och belägg för Storsjöodjurets tradition återstår.
- **Storsjö kapell, Härjedalen – Cladonia/Alex Karp:** PR #4 och #32 Draft; ägare och areal saknar fastställd lagfarts-/registerkedja. Håll skilt från Storsjön vid Frösön.
- **Skaga kapell:** åtta delar definierade; komplett del 1 och arkivkällor återstår.
- **Böckernas väg till Athos:** PR #26 Draft om osmanska dokument/digitalisering; fyra tidigare påstådda utkast har inte återfunnits och ska inte återskapas från minnet.
- **Från skrift till storebror:** PR #21, #41, #45 och #54 är delutkast; en sammanhållen artikel krävs.

### Rotationsspår utanför huvudkön
- **Frölunda:** avancerat 16 nov genom detta evidenspaket.
- **Cypern:** Palaipafos, Geroskipou/Hieros Kipos, Asklepieion, Kungagravarna och Commandaria; ingen ny evidensleverans i denna körning.
- **Varna/Svarta havet:** regional historia, kyrkor, stadsmiljö och sjöfart; ny Sulina-notering skapad som kandidat för senare artikel.
- **Framtid/teknik:** eget spår; huvudspår 2 fortsätter vara aktivt.
- **Hormuz:** separat breaking-news-ström; två daterade tilläggsnoteringar, ingen full omskrivning och ingen prioriteringsändring.

### Övriga parkerade ärenden
PR #61 (SOU 2026:58/markrätt), #59 (Norrsundet/SMR), #58 (JEF:s nordliga flottor), #57 (retrospektiv ansiktsigenkänning), #53 (Hormuz-incidentuppföljning), #52 (Siemens Energy/AI-elnät), #10 (USA:s kongress) och #7 (Palantirs kvartalsrapport) ligger kvar som Draft-underlag. PR #12 är inte ett Gripen-utkast. Vasilevski är fortfarande oidentifierad och får inte användas i hyllningstext före källkontroll.

## 4. Nya evidensnoteringar i denna körning

| Fil | Spår | Klassificering | Redaktionell hantering |
|---|---|---|---|
| `2026-11-16-frolunda-ortnamn.md` | Frölunda | Kandidat för senare artikel | Forskningspaket; två socknar och två namnspår hålls isär |
| `2026-11-16-hormuz-14-nov-iranian-claims.md` | Hormuz | Daterat tillägg till befintlig artikel | Tre fartyg är iransk partsuppgift; ej oberoende bekräftad |
| `2026-11-16-hormuz-15-nov-super-tanker-claim.md` | Hormuz | Daterat tillägg till befintlig artikel | Sänkt supertanker är IRGC-påstående; ej oberoende bekräftat |
| `2026-11-16-black-sea-sulina-ship-strikes.md` | Varna/Svarta havet | Kandidat för senare artikel | Rumänska händelser nära Sulina; ingen direkt Varna-händelse |
| `2026-11-16-bahrain-drone-attack-no-action.md` | Regional bevakning | Ingen åtgärd | Inte en handelsfartygsincident i Hormuz och ingen nuvarande artikelkoppling |

## 5. Rotation och nästa steg

**Spår som avancerade:** Frölunda.  
**Nästa kandidat i rotation:** Skaga kapell. Serien har en definierad åttadelad struktur men saknar fortfarande en komplett del 1; datum för senaste konkreta leverans framgår inte av masterplanen. Cypern och Varna står därefter som separata, ännu ej avancerade rotationsspår.  
**Hormuz:** endast kompletterande evidensnoteringar; ingen tidskritisk bekräftad händelse motiverade att rotationen avbröts.  
**Black Sea:** ny regional signal noterad, men den flyttade inte fram Varna-spåret före Frölunda denna gång.

## 6. Tekniska och källmässiga beroenden

- **Render – publik sajt:** senaste live-deploy vid kontrollen var `dep-dbt4qddg1s2s738p7bmg`, commit `a43f1579058824a36ccad6245d4616551505431e`, avslutad 16 nov 00:24:32 UTC. Ingen senare deploy syntes trots senare commits på `main`. Den publika artikelrouten kunde inte kontrolleras i denna körning.
- **Render – redaktionell backend:** tjänsten `folktribunalen-editorial` har senaste live-deploy 4 november 2026 och saknar konfigurerad health-check path. Inga nya servicehändelser eller applikationsloggar hittades i kontrollfönstret.
- **Render Postgres:** databasen `folktribunalen-db` har status `available`, men dess IP-allowlist är tom. SQL-fråga via den tillgängliga anslutningen kunde därför inte genomföras. Backendens publika IP-allowlist är separat och öppen; ändra inte databasens åtkomst till en generell öppen regel som genväg.
- **Hermes/MindCloud:** inget Hermes-namngivet Railway-service eller Hermes-specifikt verktyg/connector finns i den här körmiljön. Railway-projektet innehåller `mindcloud-osiris`, `browser-use-runner`, `browser-chromium`, `Cognee Memory` och `Osiris-mindcloud-ui`; samtliga rapporteras offline. Hermes-bridge kan därför inte användas som aktiv redaktionell beroendetjänst i denna körning.
- **Källåtkomst:** Firecrawl-sökning returnerade att kontots sökkrediter är slut. Officiella ISOF-sidor, Göteborgs Stadsmuseums PDF och Reuters/Guardian kunde ändå öppnas via alternativ webbkällåtkomst.

## 7. Publiceringsspärr

Denna branch innehåller enbart interna evidensnoteringar och en redaktionell logg. Den får inte mergas eller driftsättas utan separat godkännande. Inga artikelstatusar, huvudartikelordning eller publika rutter har ändrats i denna körning.