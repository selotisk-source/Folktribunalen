# FOLKTRIBUNALEN – Redaktionell masterplan och status

**Version:** 9 november 2026, 09.18 Europe/Sofia  
**Arbetsregel:** En artikel åt gången: research → komplett utkast → faktakontroll → redigering → godkännandekö. Ingen automatisk publicering. Endast chefredaktörens uttryckliga godkännande får föra en artikel till LIVE.

## Publicerings- och systemstatus

- GitHub-repo: https://github.com/selotisk-source/Folktribunalen
- Publik statisk webbplats: https://folktribunalen.onrender.com (Render service folktribunalen, ID srv-dblpumgm7kps73bv55e0).
- Redaktionell backend/admin: https://folktribunalen-editorial.onrender.com och https://folktribunalen-editorial.onrender.com/admin.html (Render service ID srv-dblq2r0n74is73cchqh0).
- Databas: folktribunalen-db, status available, kostnadsfri instans med nuvarande utgångsdatum 4 december 2026.
- **Publik LIVE-version:** Chefredaktören skrev uttryckligen “Ok Publish” den 8 november kl. 00.04 UTC. Därefter publicerades en kort Hormuzversion på main; commit 8e46f91e643be55cce6afed9ed6d05d5c9aae707, Render deployment dep-dbo6g9rrjlhs73ai5500, status live, färdig 8 november kl. 12.16.54 UTC. Den publika koden innehåller kortartikeln på #/artikel/hormuz-sjofart med fyra huvudstycken och källhänvisningar. Render bekräftar deploymentstatus live och route finns i den deployade källkoden; direkt HTTP-rendering från denna arbetsmiljö kunde inte hämtas, så faktisk visuell rendering i användarens webbläsare är inte separat kontrollerad.
- **Nuvarande fullständiga uppdatering:** PR #3 innehåller en ny, längre version med faktaläge 9 november. Den är fortfarande draft och inte mergad; den tidigare “Ok Publish” avsåg den korta huvudversionen, inte denna nya uppdatering. Den utökade versionen kräver separat chefredaktörsgodkännande innan den ersätter den publika kortversionen.
- **Blockerare för redaktionell backend:** Databasens egen IP-allowlist är tom. En read-only SQL-fråga avvisades av Render eftersom den hostade anslutningen saknar IP-adress som kan tillåtas. Render anger lokal Render MCP-anslutning eller en tillåten klient-IP i databasens Networking-inställning. Webbservicens IP-allowlist är separat. DATABASE_URL-mappningen är inte bekräftad och admin/API är inte testade end-to-end.
- Senaste deployment för backend folktribunalen-editorial: 4 november 2026, commit 6a835783553565f239864a9da7160d9f79f692b2; den har inte fått de senaste redaktionella backendändringarna.
- **Godkännandekö:** PR #3 är en tillfällig GitHub-granskningspost, inte webbplatsens databasbaserade kö. Köinläggning kräver att databasåtkomst och admin/API först fungerar.

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

| Spår | Artikelvinkel | Status 8 nov 2026 |
|---|---|---|
| Hormuz och sjöfarten | Hormuz: Irak söker en egen väg – men farleden är fortfarande osäker | **Kortversion godkänd och deployad 8 november; fullständig uppdaterad version i PR #3, faktaläge 9 november.** IMO:s aktuella lista anger 130 bekräftade incidenter och 25 dödsfall. Den identifierar en skadad enhet med IMO 9234654 som VIEILA; flera fartygsdatabaser anger samma IMO-nummer som VIEIRA, varför namnfrågan är öppen och texten använder IMO-numret tills flaggstatskontroll finns. UKMTO 197-26 matchar datum/position starkt men namnger inte fartyget. CENTCOM:s Huda-uppgift hålls som partsuppgift om hamnbesök och blockadbrott; ClassNK styrker registeridentiteten. Reuters 9 november rapporterar Trumps mer återhållsamma uttalande, irakiske utrikesministerns uppgift om en särskild exportväg nära Oman och en iransk uppgift om förstörda navigationshjälpmedel. Edison uppger 38 LNG-laster/ca 5 bcm under force majeure till 31 december och 27 ersatta per 27 oktober. JMIC Update 112:s 177-tal och Huda-koppling hålls som sekundärt återgiven uppgift tills original-PDF granskats. PR #3 är draft, inte mergad; fullversionen kräver separat godkännande. |
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


## Redaktionsinventering – 9 november 2026, 09.05 Europe/Sofia

PR #1 innehåller 26 äldre utkast och en täckningsmatris med 19 bevakningsspår. Filinventeringen visar att många utkast har lång brödtext, källor och en faktastatus, men flera saknar en uttrycklig ingress, bildförslag eller separat sektion för öppna frågor. De räknas därför som arbetsutkast/delutkast, inte som färdiga artiklar i godkännandekön.

- Fullständigt artikelpaket krävs för varje artikel: artikeltyp, rubrik, ingress, komplett sammanhängande text, primärkällor, oberoende källor, bildförslag, faktakontroll, öppna frågor och tydlig status.
- PR #1: arkiv/dokumentbank, 26 äldre utkast; får inte batch-mergas.
- PR #3: enda aktiva granskningsärendet, Hormuz. Kanonisk fil: editorial/drafts/2026-11-05-hormuz.md. Den 9 november skrevs filen om till en ren sammanhängande huvudartikel med primär- och oberoende källor, bildförslag, faktakontroll och öppna frågor. Den innehåller nu IMO 130/25, VIEILA/VIEIRA-namnkonflikten, Huda, UKMTO 199/200, Irak, navigationshjälpmedel, Edison LNG och Sydkoreas plan. Fullversionen är draft och kräver separat godkännande.
- Böckernas väg till Athos: fyra tidigare utkast uppgavs ha skapats 5 november; fulltexterna återfanns inte i GitHub-inventeringen eller Library-sökningen. Äldre beslut om placering i SVART HAV med korsreferens till RÖD JORD bevaras.
- Nästa artikel: Gripen över Polen efter att Hormuz är godkänd och LIVE. Övriga huvudspår färdigställs därefter ett i taget.

## Hormuz – teknisk publiceringsspärr

En read-only SQL-fråga den 8 november avvisades av Render: databasens IP-allowlist är tom. Render anger att den hostade MCP-anslutningen inte har en tillgänglig IP-adress att tillåta; anslutning kräver lokal Render MCP-server eller en giltigt tillåten klient-IP via databasens Networking-inställning. DATABASE_URL och admin/API är fortfarande inte end-to-end-testade. Senaste deploymentlistan innehåller fortfarande endast den äldre live-deploymenten från 4 november. Ingen artikel har förts in i webbplatsens databasbaserade godkännandekö eller kontrollerats LIVE.


## Faktaläge och arbetslogg – 9 november 2026, 09.05 Europe/Sofia

- **IMO:** den aktuella officiella incidentlistan anger 130 bekräftade incidenter och 25 dödsfall per 6 november. Den listar ett fartyg som VIEILA (IMO 9234654), men VesselFinder och Rynda anger samma IMO-nummer som VIEIRA, råoljetankfartyg under Vanuatus flagg. Detta är en olöst namn-/registeravvikelse; texten använder IMO-numret tills flaggstatskontroll är möjlig.
- **VIEIRA/VIEILA och UKMTO 197-26:** IMO:s datum och position 5 november, 16 NM öster om Khasab, matchar UKMTO 197-26 starkt. UKMTO namngav inte fartyget och IMO-sidan anger inte varningsnumret.
- **Huda:** ClassNK bekräftar registerposten HUDA, IMO 9197088, bulkfartyg under St Kitts och Nevis. CENTCOM:s uppgift om iranskt hamnbesök och blockadbrott är fortsatt en partsuppgift. AIS-ögonblicksbilden visar Sohar som senaste registrerade hamnanlöp före positionen den 5 november, men är inte en fullständig färdjournal.
- **Irak:** Reuters 8 november återger utrikesminister Fuad Husseins uppgift om en förståelse med USA för irakisk export via en sjöfartsled nära Oman. Ingen offentlig avtalstext eller verifierad operativ korridor har identifierats.
- **Iran:** Reuters 9 november återger en anonym IRGC-flottkälla om förstörda navigationshjälpmedel och inga obehöriga passager under natten. Ansvarig aktör, tidpunkt och effekt är inte oberoende fastställda.
- **LNG:** Edison uppger 38 laster, cirka 5 bcm, under force majeure till 31 december och 27 ersatta per 27 oktober. Edisons webbsida är daterad 27 oktober, men pressmeddelandets brödtext har dateline 28 september; datumskillnaden redovisas.
- **JMIC Update 112:** en sekundär återgivning uppger 177 incidenter och Huda kopplad till 198-26. Den ursprungliga PDF-filen på UKMTO:s webbplats har inte kunnat granskas direkt i denna körning; dessa detaljer används inte som självständigt bekräftad primärfakta.
- **Publik webbplats:** Render statiska tjänst folktribunalen visar deployment dep-dbo6g9rrjlhs73ai5500 som live, commit 8e46f91e643be55cce6afed9ed6d05d5c9aae707, avslutad 8 november 12.16.54 UTC. Den publika huvudversionen är kort (fyra huvudstycken). Den nya fullständiga texten finns i PR #3 och är inte publicerad.
- **Nästa steg:** chefredaktören granskar fullversionen i PR #3. Efter uttryckligt godkännande kan den ersätta kortversionen på den publika sajten. Därefter kontrolleras den faktiska sidan; först därefter går redaktionen vidare till Gripen över Polen.

- **Källredigering 09.12:** UKMTO:s Weekly Overview No. 14 är nu integrerad i artikelns brödtext med tydlig skillnad mellan veckotalet (11 rapporterade attacker under perioden till 4 november) och IMO:s kumulativa 130 bekräftade incidenter. Reuters om Task Force Iron Gate är flyttad till kompletterande källor; primärkällor och oberoende källor är nu separerade.

- **Källkomplettering 09.18:** WAM:s officiella nyhetsbyråsida om räddningen av 22 personer och den officiella JMIC Update 112-PDF:en har lagts in i primärkällförteckningen med tydlig notering om att sidorna inte kunde hämtas direkt i denna kontroll. AP och en sekundär återgivning används endast som komplettering; JMIC:s 177-tal och Huda-koppling behandlas inte som självständigt bekräftade fakta.
