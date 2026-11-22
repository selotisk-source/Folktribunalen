# Evidensnotering – Publik AI-infrastruktur-route svarar HTTP 200 men visar fel rubrik

**Registrerad:** 22 november 2026, 08:53 EET  
**Kontrolldatum:** 22 november 2026  
**ID:** EV-FT-2026-11-22-ROUTE-01  
**Dedupliceringsnyckel:** folktribunalen.onrender.com|europas-ai-infrastruktur|public-route-check|2026-11-22  
**Klassificering:** Daterad teknisk statusuppdatering till aktiv huvudartikel PR #71; publicerings-/route-avvikelse, inte ny artikel.

## Observerat svar

Den publika routen hämtades:
https://folktribunalen.onrender.com/#/artikel/europas-ai-infrastruktur

Hämtningen returnerade **HTTP 200** och HTML-text för en artikelsida. Sidan visar följande kombination:

- **Rubrik:** “Meta lämnade fel WhatsApp Business-data till Ofcom”
- **Ingress:** börjar “Europa vill bygga ut sin kapacitet för artificiell intelligens…”
- **Brödtext:** börjar med AI-infrastrukturtexten om datacenter, elnät, anslutningsköer och investeringar.
- **Sidans publiceringsetikett:** “PUBLICERAD 16 NOVEMBER 2026”.

Rubrik/metadata tillhör alltså Meta/Ofcom-ämnet, medan ingressen och den hämtade brödtexten tillhör AI-infrastrukturartikeln. Detta bekräftar en route-/innehållsmismatch vid kontrolltillfället.

## Käll- och faktastatus

- **DIREKT ROUTE-OBSERVATION:** HTTP 200 och sidans returnerade rubrik, ingress och inledande brödtext observerades 22 november 2026.
- **KOPPLING TILL KODAVVIKELSE:** masterplanens 22-novemberkontroll beskriver redan en mismatch i `main/src/app.js` mellan Meta/Ofcom-kortmetadata och AI-infrastrukturens body-mappning under sluggen `europas-ai-infrastruktur`.
- **AKTIV PR:** PR #71 är Open/Draft på exakt head `3eeb2e4c34e4790eb2771ffddb3a5ae782646c4b`, utan review submissions eller inline review threads enligt GitHub-kontrollen 22 november.
- **GODKÄNNANDE:** inget separat chefredaktörsgodkännande av PR #71:s aktuella head har påträffats. Äldre godkännande av PR #64 gäller inte den materiellt uppdaterade versionen.
- **EJ FASTSTÄLLT:** fullständig textlikhet mellan den publika brödtexten och PR #71:s aktuella artikelutkast har inte jämförts rad för rad. Ingen korrekt LIVE-publicering av PR #71 kan därför hävdas.

## Redaktionell åtgärd

Registrera detta som en bekräftad publik route-avvikelse. Den publika sidan är nåbar men visar inte rätt rubrik/metadata för AI-infrastrukturartikeln. Huvudartikel PR #71 förblir aktiv och Draft. PR #38 förblir parkerad tills den aktuella AI-versionen får separat artikelbundet godkännande, passerar redaktionens anslutna adminväg och därefter kontrolleras mot HTTP-status, korrekt rubrik, ingress och fulltext.

Ingen frontendändring, deploy, databasändring, merge eller publicering utfördes i denna kontroll.

## Källor

- Publik route, hämtad 22 november 2026: https://folktribunalen.onrender.com/#/artikel/europas-ai-infrastruktur
- Aktiv artikel-PR #71: https://github.com/selotisk-source/Folktribunalen/pull/71
- Masterplanens senaste statusversion i PR #73: https://github.com/selotisk-source/Folktribunalen/pull/73

## Nästa bevissteg

1. Jämför den publika sidans fullständiga brödtext med den exakta PR #71-versionen.
2. Kontrollera slug-/kortmetadata och body-mappning i main, utan att ändra dem före separat godkännande.
3. Efter artikelbundet godkännande av exakt PR-head: använd endast redaktionens adminväg och upprepa HTTP-, rubrik-, ingress- och fulltextkontrollen.
