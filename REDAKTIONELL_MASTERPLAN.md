# FOLKTRIBUNALEN – Redaktionell masterplan och status

**Version:** 5 november 2026  
**Arbetsregel:** En artikel åt gången: research → komplett utkast → faktakontroll → redigering → godkännandekö. Ingen automatisk publicering. Endast chefredaktörens uttryckliga godkännande får föra en artikel till LIVE.

## Publicerings- och systemstatus

- GitHub-repo: https://github.com/selotisk-source/Folktribunalen
- Render-webb: https://folktribunalen-editorial.onrender.com
- Redaktion/admin: https://folktribunalen-editorial.onrender.com/admin.html
- Databas: `folktribunalen-db`, status `available`, kostnadsfri instans med nuvarande utgångsdatum 4 december 2026.
- **Blockerare:** Databasens egen IP-allowlist är tom. Render-databasverktyget kan därför inte ansluta för att läsa eller skriva. Webbservicens IP-allowlist är separat och ändrar inte databasens lista. Adminsession saknas i denna arbetsmiljö. Webbplatsens API-/adminvägar har inte kunnat testas via webbläsaråtkomst i denna körning.
- Senaste deployment som finns i Render-listan: 4 november 2026, commit `6a835783553565f239864a9da7160d9f79f692b2`. Nya GitHub-ändringar efter denna commit har inte kunnat bekräftas som live.
- **LIVE-status:** Ingen artikel är dokumenterad som LIVE i redaktionens aktuella arbetsregister.
- **Godkännandekö:** Hormuz-utkastet är färdigställt i GitHub men inte infört i webbplatsens databasbaserade kö på grund av den tomma IP-allowlisten. Övriga tidigare föreslagna köposter är inte bekräftade som införda i webbplatskön.

## Aktiva huvudspår

| Nr | Spår | Egen artikel / arbetstitel | Artikeltyp | Status |
|---|---|---|---|---|
| 1 | Palantir och den offentliga makten | Vem äger den offentliga statens digitala nervsystem? | Granskning | Research/planering; inget komplett utkast i aktuell kö |
| 2 | Vem bygger Europas AI-datacenter? | Europas AI-infrastruktur: vem finansierar, äger och kontrollerar den? | Granskning | Research/planering; inget komplett utkast i aktuell kö |
| 3 | Synkronicitetsprotokollet | Synkronicitet som metod: från sammanträffande till prövbar hypotes | Metod/essä | Metodspår finns; separat genomarbetad huvudartikel återstår |
| 4 | Sofia – staden under staden | Sofia under ytan: kyrkor, nekropoler och stadens arkeologiska lager | Kulturhistorisk granskning | Research/planering |
| 5 | Europas strategiska råvaror | Europas råvarusuveränitet: gruvor, energi, avfall och kontroll | Granskning | Flera delspår identifierade; huvudartikel återstår |
| 6 | NVIDIA – när aktier blir säkerhet för lån | GPU-eran: när aktier och beräkningskapacitet blir säkerheter | Finansgranskning | Research/planering; krav på att skilja aktiepant från GPU-finansiering |
| 7 | Det stora och det lilla fängelset | Libanons kristna politiska historia: Geagea, Gemayel, Syrien och kyrkan | Historisk/politisk granskning | Research/planering |
| 8 | Europa: Kyrkorna som överlevde imperierna | Wiesbaden, Warszawa och Prag – kyrkor som överlevde regimskiften | Kulturhistorisk serie | Referensmaterial sparat; fullständig artikelserie och källkontroll återstår. Sofia och Varna möjliga fortsättningar |
| 9 | Fennoskandien – urberget, skogen och hästen | Fennoskandien: landskapet som infrastruktur och minne | Kulturhistorisk/ekonomisk essä | Koncept och forskningsspår; komplett artikel återstår |

## Separata projekt och serier

| Projekt | Planerad leverans | Status |
|---|---|---|
| ODJURET UR DJUPET | Uppenbarelsebokens odjur ur havet, Storsjöodjuret, Frösöstenen och Peter Thiels egna föreläsningar om Antikrist | Koncept klart. Symbolisk parallell ska vara central; historisk påverkan får inte påstås utan belägg. Komplett artikel återstår |
| Storsjö kapell, Härjedalen – markförvärv | Undersök rapporterade cirka 15 000 hektar kring Storsjö kapell och Cladonia Skog AB/Alex Karp-uppgiften | Högprioriterad dokumentgranskning. Ägaruppgift och areal måste styrkas i lagfart/fastighetsregister; jämför fastighetsgränser med Fornsök, gravar, bronsålderslämningar, depåfynd och lokala rättigheter |
| Skaga kapell | Åtta delar: ursprung; Johannes Döparens huvud; björnfällarna; silverlöjan; jätten Skagas dotter/Ramunder; offerplatsen; rivningen; återuppbyggnad, brand och återinvigning | Åttadelad struktur definierad; källor och komplett del 1 återstår |
| Böckernas väg till Athos | Separata artiklar om manuskript, översättning, klosterbibliotek, bokvägar och Athos | Fyra utkast skapades i tidigare arbete; behöver inventeras, källkontrolleras och föras in i godkännandeflödet |
| Från skrift till storebror | Skrift, register, statistik, databaser och övervakning som maktens minne | Koncept; komplett artikel återstår |

## Aktuella nyhetsspår

| Spår | Artikelvinkel | Status 5 nov 2026 |
|---|---|---|
| Hormuz och sjöfarten | Marknaden prisar fred – sjöfarten förbereder sig på minhot | **Komplett utkast skapat** i `editorial/drafts/2026-11-05-hormuz.md`; faktakontroll gjord; väntar på chefredaktörens godkännande och teknisk köåtkomst |
| Maktförskjutningen i USA:s kongress | Kongressvalet och Vita husets handlingsutrymme | Researchspår; separat artikel återstår |
| Palantirs kvartalsrapport och AI-infrastruktur | Intäkter, offentliga kontrakt, datacenterberoenden och guidning | Researchspår; separat artikel återstår |
| Svenska Gripen över Polen | Fyra timmar i polskt luftrum – vad gjorde den svenska insatsen? | Läsarunderlag mottaget från Expressen 4 nov; separat artikel ej påbörjad. Nästa prioriterade nyhetsartikel. Kräver polsk generalstabs primärpost och svensk Försvarsmaktskommentar |

## Återkommande hyllning i varje utgåva

- Johannes Gutenberg – tryckkonst och spridning av skrift.
- Carl von Linné – vetenskaplig klassifikation och naturkunskap.
- Voltaire – filosofi, kritik och bildning.
- Sankta Paraskevi – andligt och kulturellt arv.
- Sankt Charbel – andligt och kulturellt arv.
- Vasilevski – **identiteten måste fastställas innan namn eller hyllning publiceras.**

## Nästa arbetsordning

1. Färdigställ och lägg Hormuz-utkastet i webbplatsens godkännandekö när databasåtkomst/admin fungerar.
2. Påbörja Gripen över Polen: inhämta polsk generalstabs originalpost, Försvarsmaktens svar, uppdragets mandat, ledningskedja och vad som är/inte är offentligt.
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
