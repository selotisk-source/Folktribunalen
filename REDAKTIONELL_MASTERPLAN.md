# FOLKTRIBUNALEN – Redaktionell masterplan och status

**Version:** 8 november 2026, 08.08 Europe/Sofia  
**Arbetsregel:** En artikel åt gången: research → komplett utkast → faktakontroll → redigering → godkännandekö. Ingen automatisk publicering. Endast chefredaktörens uttryckliga godkännande får föra en artikel till LIVE.

## Publicerings- och systemstatus

- GitHub-repo: https://github.com/selotisk-source/Folktribunalen
- Render-webb: https://folktribunalen-editorial.onrender.com
- Redaktion/admin: https://folktribunalen-editorial.onrender.com/admin.html
- Databas: `folktribunalen-db`, status `available`, kostnadsfri instans med nuvarande utgångsdatum 4 december 2026.
- **Blockerare:** Databasens egen IP-allowlist är tom. En ny read-only SQL-anslutning den 8 november avvisades uttryckligen av Render på grund av den tomma allowlisten. Den hostade Render-anslutningen har ingen IP-adress som kan tillåtas; Render anger att en lokal Render MCP-anslutning behövs eller att en tillåten IP måste läggas till i databasens Networking-inställning. Webbservicens IP-allowlist är separat och ändrar inte databasens lista. DATABASE_URL-mappningen är fortfarande inte bekräftad. Admin/API-vägarna har inte testats end-to-end.
- Senaste deployment som finns i Render-listan: 4 november 2026, commit `6a835783553565f239864a9da7160d9f79f692b2`. Nya GitHub-ändringar efter denna commit har inte kunnat bekräftas som live.
- **LIVE-status:** Ingen artikel är dokumenterad som LIVE i redaktionens aktuella arbetsregister.
- **Godkännandekö:** Hormuz ligger i GitHub som separat draft-PR #3. Det är en tillfällig granskningspost, inte webbplatsens databasbaserade godkännandekö. Köinläggning kan inte genomföras förrän databasåtkomst och admin/API har testats.

## Aktiva huvudspår

| Nr | Spår | Egen artikel / arbetstitel | Artikeltyp | Status |
|---|---|---|---|---|
| 1 | Palantir och den offentliga makten | Vem mäter nyttan – och vem kontrollerar den offentliga statens digitala nervsystem? | Granskning | Långt delutkast finns: 2026-11-05-palantir-nhs-offentlig-makt.md. Q3 2026/SEC 10-Q är separat research. Behöver ingress, primär avtalsdokumentation, bildförslag och slutlig faktakontroll. |
| 2 | Vem bygger Europas AI-datacenter? | Europas AI-infrastruktur: vem finansierar, äger och kontrollerar den? | Granskning | Flera separata delutkast finns om gigafabriker, marknadstest, Anthropic och kreditkedjan. Ingen sammanhållen huvudartikel ännu; skilj europeiska projekt från amerikanska jämförelsefall. |
| 3 | Synkronicitetsprotokollet | Synkronicitet under lupp: från meningsfull slump till prövbar hypotes | Metod/essä | Långt utkast finns: 2026-11-05-synkronicitet-två-nya-teoretiska-modeller.md. Kräver tydlig ingress, reproducerbar metod, alternativförklaringar och bildförslag. |
| 4 | Sofia – staden under staden | Sofia före Sofia: stadens arkeologiska och religiösa lager | Kulturhistorisk granskning | Två delutkast finns: utställningen med 213 föremål och Samuil/Prespa. Måste sammanföras utan att flytta Samuils ursprungliga gravplats från Sankt Achillios vid Prespasjön till Sofia. |
| 5 | Europas strategiska råvaror | Urbergsskölden: Europas råvarusuveränitet, avfall och energiberoende | Granskning | Stort Urbergsskölden-utkast samt separat Arctial/Viscaria-case finns. Behöver en egen huvudartikel som skiljer CRMA-status, tillstånd, finansiering, nätanslutning och produktion. |
| 6 | NVIDIA – när aktier blir säkerhet för lån | NVIDIA som säkerhet: var går gränsen mellan aktiepant och GPU-finansiering? | Finansgranskning | AI-finansieringsutkast finns om IREN, leasing, kredit och NVIDIA:s molnpolicy. Den specifika dokumenterade kedjan för NVIDIA-aktier som pant saknas fortfarande. |
| 7 | Det stora och det lilla fängelset | Libanons kristna mellan två fängelser: Geagea, Gemayel, Syrien och kyrkan | Historisk/politisk granskning | Ett UNIFIL-/sydlibanesiskt delutkast finns. Den sammanhängande historiska huvudartikeln om Samir Geagea, Gemayel-familjen, Syriens närvaro och kyrkans roll återstår. |
| 8 | Europa: Kyrkorna som överlevde imperierna | Kyrkorna som överlevde imperierna: Wiesbaden, Warszawa och Prag | Kulturhistorisk serie | Inget komplett huvudutkast i dokumentbanken. Byggnadsakter och församlingarnas primärhistorik måste samlas separat för varje stad; Sofia och Varna möjliga fortsättningar. |
| 9 | Fennoskandien – urberget, skogen och hästen | Fennoskandien: urberg, skog och häst som landskapets infrastruktur | Kulturhistorisk/ekonomisk essä | Arctial/Kvikant-utkast finns som lokalt delcase. Den breda fennoskandiska huvudartikeln om geologi, skogsbruk, markrätt och hästkultur återstår. |

## Separata projekt och serier

| Projekt | Planerad leverans | Status |
|---|---|---|
| ODJURET UR DJUPET | Uppenbarelsebokens odjur ur havet, Storsjöodjuret, Frösöstenen och Peter Thiels egna föreläsningar om Antikrist | Långt utkast finns (2026-11-05-storsjo-thiel-antichrist-folklore.md). Kräver primärtext från Thiel, runologisk faktakontroll, bildförslag och formell faktasektion. Symbolisk parallell central; historisk påverkan får inte påstås utan belägg. |
| Storsjö kapell, Härjedalen – markförvärv | Undersök rapporterade cirka 15 000 hektar kring Storsjö kapell och Cladonia Skog AB/Alex Karp-uppgiften | Långt utkast finns, men ägaruppgift och areal är inte fastställda i lagfart/fastighetsregister. Jämför fastighetsgränser med Fornsök, gravar, bronsålderslämningar, depåfynd, samfälligheter och lokala rättigheter. Håll helt åtskilt från Storsjön vid Östersund/Frösön. |
| Skaga kapell | Åtta delar: ursprung; Johannes Döparens huvud; björnfällarna; silverlöjan; jätten Skagas dotter/Ramunder; offerplatsen; rivningen; återuppbyggnad, brand och återinvigning | Åttadelad struktur definierad; komplett del 1 och arkivkällor återstår. Sägner ska märkas som lokal tradition, inte arkivfakta. |
| Böckernas väg till Athos | Serien om Sofia, klostren, bokhandel, Zograf och ortodox bildningstradition | Fyra separata utkast uppgavs ha skapats 5 november, men titlar/fulltexter har inte återfunnits i GitHub eller Library-sökningen. Äldre redaktionellt beslut: huvudplacering SVART HAV, korsreferens RÖD JORD. Återskapa inte från minnet; inventera och återfinna källunderlag först. |
| Från skrift till storebror | Skrift, register, statistik, databaser och övervakning som maktens minne | Två brittiska delutkast finns om Met Police/Auror och biometrisk ansiktsigenkänning. En sammanhängande huvudartikel krävs; skilj lagstöd, pilot, faktisk driftsättning och tillsyn. |

## Aktuella nyhetsspår

| Spår | Artikelvinkel | Status 5 nov 2026 |
|---|---|---|
| Hormuz och sjöfarten | Hormuzkrisen: USA slår ut M/V Huda – UAE räddar 22 från okänt fartyg | **Sammanhängande artikeltext uppdaterad 8 november kl. 08.08** i PR #3. Integrerar Huda, UKMTO Advisory 198-26 och WAM:s räddningsuppgift. Fartyget som UAE räddade är inte namngivet; koppling till Huda är obekräftad. PR #3 fortsatt draft, inte mergad eller LIVE; väntar på chefredaktörens uttryckliga godkännande. |
| Maktförskjutningen i USA:s kongress | Kongressen byter färg – men vem kontrollerar den tekniska makten? | Långt delutkast finns i PR #1; måste uppdateras med certifierade mandat, ledarskap, utskott och faktisk maktövergång. |
| Palantirs kvartalsrapport och AI-infrastruktur | Palantir Q3: tillväxt, offentliga kontrakt och datacenterberoenden | Q3/SEC 10-Q-underlag finns; separat artikel behöver färdig ingress, fullständig text, primärkällor, oberoende källor, bildförslag, faktakontroll och öppna frågor. |
| Svenska Gripen över Polen | Fyra timmar i polskt luftrum – vad gjorde den svenska insatsen? | Expressen-underlag 4 november och Försvarsmaktens bakgrund finns. Separat artikel ännu inte påbörjad; nästa nyhetsartikel efter att Hormuz är godkänd och publicerad/LIVE. Kräver polsk generalstabs originalpost, svensk Försvarsmaktskommentar och tydlig skillnad mellan patrull, incidentberedskap och stridskontakt. |

## Återkommande hyllning i varje utgåva

- Johannes Gutenberg – tryckkonst och spridning av skrift.
- Carl von Linné – vetenskaplig klassifikation och naturkunskap.
- Voltaire – filosofi, kritik och bildning.
- Sankta Paraskevi – andligt och kulturellt arv.
- Sankt Charbel – andligt och kulturellt arv.
- Vasilevski – **identiteten måste fastställas innan namn eller hyllning publiceras.**

## Nästa arbetsordning

1. Hormuz: färdigställande och redaktionell faktakontroll är genomförda i huvudtexten; inväntar chefredaktörens uttryckliga godkännande. Därefter webbkö, publicering och LIVE-kontroll när databas/admin fungerar.
2. Gripen över Polen blir nästa artikel efter Hormuzs godkännande och LIVE-kontroll: inhämta polsk generalstabs originalpost, Försvarsmaktens svar, uppdragets mandat, ledningskedja och vad som är/inte är offentligt.
3. Separat artikel om maktförskjutningen i USA:s kongress.
4. Palantirs senaste kvartalsrapport och AI-infrastruktur.
5. Återgå till de nio huvudspåren och säkerställ en fullständig egen artikel för varje spår, ett i taget.

## Redaktionell standard

- Primärkällor först: myndighetsbeslut, lagtext, domar, avtal, bolagsregister, upphandlingar, årsredovisningar, prospekt, originaldata och dokument.
- Oberoende källor ska pröva primärkällornas uppgifter; pressmeddelanden är avsändarens uppgifter, inte automatiskt oberoende bevis.
- Märk varje central uppgift som **belagt faktum**, **analys** eller **obekräftat/hypotes**.
- Ange datum, metod, källans begränsningar, öppna frågor och rättelser.
- Ge berörda parter möjlighet att bemöta konkreta uppgifter.
- Skilj Storsjö kapell i Härjedalen från Storsjön vid Östersund/Frösön.
- Ingen automatisk publicering. Varje artikel måste uttryckligen godkännas av chefredaktören och kontrolleras LIVE efter publicering innan nästa artikel påbörjas.


## Redaktionsinventering – 8 november 2026, 08.08 Europe/Sofia

PR #1 innehåller 26 äldre utkast och en täckningsmatris med 19 bevakningsspår. Filinventeringen visar att många utkast har lång brödtext, källor och en faktastatus, men flera saknar en uttrycklig ingress, bildförslag eller separat sektion för öppna frågor. De räknas därför som arbetsutkast/delutkast, inte som färdiga artiklar i godkännandekön.

- Fullständigt artikelpaket krävs för varje artikel: artikeltyp, rubrik, ingress, komplett sammanhängande text, primärkällor, oberoende källor, bildförslag, faktakontroll, öppna frågor och tydlig status.
- PR #1: arkiv/dokumentbank, 26 äldre utkast; får inte batch-mergas.
- PR #3: enda aktiva granskningsärendet, Hormuz. Kanonisk fil: editorial/drafts/2026-11-05-hormuz.md. Filen innehåller nu en sammanhängande huvudtext och separat revisionshistorik.
- Böckernas väg till Athos: fyra tidigare utkast uppgavs ha skapats 5 november; fulltexterna återfanns inte i GitHub-inventeringen eller Library-sökningen. Äldre beslut om placering i SVART HAV med korsreferens till RÖD JORD bevaras.
- Nästa artikel: Gripen över Polen efter att Hormuz är godkänd och LIVE. Övriga huvudspår färdigställs därefter ett i taget.

## Hormuz – teknisk publiceringsspärr

En read-only SQL-fråga den 8 november avvisades av Render: databasens IP-allowlist är tom. Render anger att den hostade MCP-anslutningen inte har en tillgänglig IP-adress att tillåta; anslutning kräver lokal Render MCP-server eller en giltigt tillåten klient-IP via databasens Networking-inställning. DATABASE_URL och admin/API är fortfarande inte end-to-end-testade. Senaste deploymentlistan innehåller fortfarande endast den äldre live-deploymenten från 4 november. Ingen artikel har förts in i webbplatsens databasbaserade godkännandekö eller kontrollerats LIVE.
