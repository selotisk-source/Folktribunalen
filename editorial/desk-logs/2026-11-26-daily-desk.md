# Daily Desk – 26 november 2026

## Kö och kontinuitet
- Aktuell master på `main` är daterad 18 november 2026; den är inte den senaste arbetsversionen.
- Senaste dokumenterade masterplanförslag ligger i PR #73, Draft, head `cf253787cc430ecdc3597dc7b36b48ae99b1c43f0`; dess innehåll kontrollerades. Ingen ändring gjordes på main eller PR #73:s gren.
- Aktiv huvudartikel: PR #71, Europas AI-infrastruktur, Open/Draft, exakt head `e604b54471a563b019251a2ae6fe567b84e73364`. Endast äldre commit `d7a9d7e907f6e3bccfb2a6e212402ca297d06b7a` har separat versionsbundet godkännande. Aktuell head saknar godkännande.
- Nästa huvudartikel: PR #38, Synkronicitetsprotokollet, parkerad.
- Föregående dokumenterade leverans: PR #71:s Prague Gateway-tillägg och masterplanstatus 26 november; sidospår Storsjö/Cladonia PR #32 var kontrollerat utan ny evidensnot.
- Senaste sidospår före idag: Frölunda PR #74 den 24 november; Varna/Svarta havet PR #80 den 22–24 november; Cypern PR #81 den 23 november.
- Dokumenterad rotationsordning i PR #73 anger Libanon PR #22/#39 som nästa sidospår efter Storsjö. Dagens körning följer detta.

## Dagens icke-Hormuz-leverans – Libanon
- Skapad PR #82 som Open/Draft på egen researchgren.
- Ny evidensnot: `editorial/evidence-notes/2026-11-26-lebanon-unifil-handover.md`.
- Researchpaket: `editorial/research/2026-11-26-lebanon-unifil-transition.md`.
- Händelsesignaler: Guterres kvartalsrapport återgiven 20 november; UNIFIL:s partiella positionsöverlämning till libanesiska armén rapporterad 21 november.
- Klassificering: daterad uppdatering till befintligt PR #22, inte ny huvudartikel.
- Nästa sidospår i rotation efter dagens Libanon-leverans ska väljas vid nästa körning utifrån masterplanens ordning och senast avancerade datum; finans PR #49 och strategiska råvaror PR #65 är dokumenterade äldre kandidater.

## Hormuz
Ingen ny Hormuz-evidensnot i dagens körning. Senaste separat registrerade UKMTO/IMO-signal finns i PR #79 från 25 november. Den har inte påverkat rotationen.

## Huvudartikelordning
PR #71 fortsatt aktiv; PR #38 fortsatt parkerad. Ingen artikelgodkännande-, merge-, deploy- eller publiceringsåtgärd.

## Teknisk status och blockerare
- GitHub: PR #82 skapad som Draft; PR #71 och PR #73 är dokumenterade Open/Draft. Sökning efter öppna PR:er utanför Draft gav inga träffar.
- Hermes: ingen bekräftad tjänst i senaste dokumenterade inventering; ingen ny endpointkontroll.
- Källåtkomst: FN:s säkerhetsrådsresolution och publicerade UNIFIL/nyhetskällor hämtade. Originalrapportens fullständiga tabeller, NNA:s originalnotis och detaljerade överlämningsprotokoll återstår.
- Backend/databas: ingen ny end-to-end-kontroll. Senast dokumenterade blockerare kvarstår: adminflödet binder inte PR-fulltext till exakt GitHub-commit; Postgres har tom IP-allowlist och extern read-only-anslutning har nekats.
- Publik artikelroute: ingen ny HTTP-kontroll. PR #71 är inte LIVE-kontrollerad.
- Render auto-deploy från main; dagens arbete ligger endast i en Draft-PR-branch och har inte ändrat main.

## Återkommande hyllningar
Utgåvan ska ha plats för Johannes Gutenberg, Carl von Linné, Voltaire, Sankta Paraskevi, Sankt Charbel och Vasil Levski. Levski-dokumentationen ska länka till:
- https://vlevskimuseum-bg.org/en/documentary-heritage/
- https://www.nationallibrary.bg/levski/
Inga Levski-citat utan originalkontroll.

## PR-spärr
PR #82 ska förbli Draft. Ingen Ready for review, merge, cherry-pick, main-ändring, deploy, databasändring, frontendändring eller publicering. Historiska avvikelser PR #56/#66 förblir dokumenterade och får inte utökas.
