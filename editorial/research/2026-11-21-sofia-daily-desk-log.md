# FOLKTRIBUNALEN Daily Desk – 21 november 2026

## Masterplan och kö

- Lästa källor: `REDAKTIONELL_MASTERPLAN.md` på `main` (version 18 november 2026) och den nyare dokumentationsversionen i PR #73 (version 21 november 2026).
- Aktiv huvudartikel: **Europas AI-infrastruktur**, PR #71, Open/Draft.
- Exakt aktuell PR #71-head vid kontroll: `95e7584ab81b7d94b8b5493b6e89ae7faa024b79`.
- PR #71 har två filer: komplett artikelutkast och internt dossier. Ingen separat chefredaktörsapproval av denna head har identifierats. PR #64:s äldre godkännande gäller inte den materiellt ändrade versionen.
- Nästa huvudartikel i godkänd ordning: **Synkronicitetsprotokollet**, PR #38. Fortsatt parkerad tills PR #71 har godkänts, gått genom ansluten adminväg och klarat faktisk publik route- och innehållskontroll.
- Föregående dagliga leveranser 20 november: Athos/MOmA i PR #76 och kompletterande Skaga-källarbete i PR #75. Dessa leveranser återanvänds inte som dagens primära rotationsval.
- Dagens portföljval: **Sofia – staden under staden**, som separat researchpaket. PR #8 om Samuil har inte ändrats.

## Dagens arbete

- Skapade ett avgränsat researchpaket om Serdicas romerska stadsplan, den östra nekropolen under Sankt Sofia, Sankt Georgs rotunda, Västra porten, Lozenets/Yuzhen Park och Boyana.
- Skapade nio separata provenance-linked evidensnoter. Varje not har källa, källtyp, datum, dedupliceringsnyckel, faktastatus och redaktionell klassificering.
- Skilde museets institutionsbeskrivningar från sakkunniggranskad forskning, hypoteser och källspår som inte kunde öppnas.
- Markerade kyrkomötet i Serdica 343 och Protogenes-basilikans identifiering som en öppen platsfråga. Skilde kyrkomötet från den civila byggnaden *bouleuterion*.
- Slatina-uppgiften är endast ett källspår eftersom kommunens direkta sida avvisade hämtning; den används inte som fastslaget påstående.
- 2026 års numismatiska workshop behandlas som institutions- och metodkontext, inte som ett nytt fynd.

## Portföljstatus efter dagens leverans

- **Avancerat:** Sofia – staden under staden.
- **Nästa sidospår i rotation:** Varna/Svarta havet, med BETUL 8 och regional sjöfart som separata evidenslinjer. BETUL 8 får inte blandas ihop med Hormuz eller Sulina-händelser.
- **Huvudartikelkön:** PR #71 → PR #38, oförändrad.
- **Hormuz:** ingen ny huvudartikel eller omprioritering. Endast supplemental bevakning i den befintliga separata strömmen; dagens Sofia-leverans bygger inte på Hormuz.

## PR-spärr

- Denna leverans ska öppnas som GitHub Draft.
- Ingen Ready for review, merge, cherry-pick till main, deploy, DB-ändring, frontendändring eller publicering.
- PR #71:s exakta commit väntar fortfarande på separat artikelbundet chefredaktörsgodkännande.
- PR #73 är dokumentations- och hyllningsmodul-PR, Open/Draft. Den är inte mergad.
- GitHub API-kontrollen av öppna PR:er gav 63 öppna PR:er; samtliga hade `draft=true`. Ingen öppen PR behövde återställas från Ready for review.

## Blockerade beroenden

- **Publik route:** senaste dokumenterade kontroll i PR #73 anger DNS-felet `Could not resolve host` för `folktribunalen.onrender.com`. Ingen HTTP-status, rubrik, ingress eller fulltext har kunnat fastställas.
- **Render:** tjänsterna är kopplade till `main` med auto-deploy enligt den senaste dokumenterade inventeringen. Ingen ny deploy har initierats.
- **Redaktionell backend/Postgres:** senaste dokumenterade kontroll anger tom IP-allowlist och nekad extern read-only-anslutning. Ingen DB-skrivning har gjorts.
- **Hermes:** ingen aktiv Hermes-tjänst eller deployment har identifierats i den senaste dokumenterade inventeringen.
- **Firecrawl:** anslutna Firecrawl-credits var slut under denna körning; extern research slutfördes därför med tillgänglig webbsökning och direktöppnade institutions-/forskningssidor.
- **Källåtkomst:** Sofia History Museum, NAIM-BAS:s öppna publikationssidor, Bulgarian e-Journal of Archaeology och UNESCO kunde läsas. Kommunens Slatina-sida avvisade direkt hämtning och ligger endast som källspår.

## Återkommande hyllning

Utgåvemodulen i PR #73 innehåller Johannes Gutenberg, Carl von Linné, Voltaire, Sankta Paraskevi, Sankt Charbel och Vasil Levski. Levski-avsnittet ska i varje utgåva länka både National Museum Vasil Levski – Documentary Heritage (https://vlevskimuseum-bg.org/en/documentary-heritage/) och National Library of Bulgaria – Levski's Notebook (https://www.nationallibrary.bg/levski/). Inga citat tillskrivs Levski utan kontroll mot originaltext eller kontrollerad transkription.

## Nästa bevissteg

1. Hämta fulltexten till Ivanov 2014 om platsen för kyrkomötet i Serdica.
2. Begär eller lokalisera utgrävnings- och stratigrafirapporterna för Protogenes-basilikan och Sankt Georgs närmiljö.
3. Hämta kommunens/NAIM-BAS:s direkta primärmaterial om Slatina.
4. Fortsätt nästa rotation med Varna/Svarta havet, utan att öppna en andra huvudartikel.
