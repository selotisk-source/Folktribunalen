# FOLKTRIBUNALEN – Daily Desk, 21 november 2026

**Körtid:** 09:17 EET  
**Leverans:** [PR #78 – ODJURET UR DJUPET](https://github.com/selotisk-source/Folktribunalen/pull/78), 11 filer, 499 tillägg; fem projektrelaterade evidensnoter och fyra separata Hormuz-noter.  
**Publiceringsläge:** allt nytt material är Draft.

## Masterplan och kö

- Huvudgrenen main innehåller en äldre version av REDAKTIONELL_MASTERPLAN.md daterad 18 november.
- Den nyare statusversionen ligger i PR #73 och är fortfarande Draft. Den användes för att läsa den senaste projektrotationen utan att behandla den som ersatt main.
- **Aktiv huvudartikel:** Europas AI-infrastruktur, PR #71, fortsatt Open/Draft.
- **Nästa huvudartikel i godkänd ordning:** Synkronicitetsprotokollet, PR #38, fortsatt parkerad.
- **Aktuellt sidospår:** ODJURET UR DJUPET, PR #28, senast dokumenterad aktivitet 12 november. Detta körs som researchpaket och inte som ny huvudartikel.
- **Befintlig Thiel-text:** PR #28 lämnas oförändrad.
- **Föregående dokumenterade leveranser:** PR #77 Sofia – staden under staden; PR #76 Böckernas väg till Athos; PR #75 Skaga kapell. Dessa återstartas inte.

## Ongoing portfolio

### Huvudspår
1. Palantir och offentlig makt.
2. Europas AI-infrastruktur.
3. Synkronicitetsprotokollet.
4. Sofia – staden under staden.
5. Strategiska råvaror.
6. Finans och kapitalmarknader.
7. NVIDIA som säkerhet för lån.
8. Libanons kristna historia / The Great Prison.
9. Kyrkorna som överlevde imperierna.
10. Fennoskandien – urberg, skog och häst.

### Serier och separata projekt
- ODJURET UR DJUPET: Uppenbarelsebokens havsodjur, Storsjöodjuret, Frösöstenen och Peter Thiels föreläsningar.
- Storsjö kapell, Härjedalen: mark, rättigheter, kulturmiljö och dokumenterade projektbriefar.
- Skaga kapell: ursprung, Johannes Döparens huvud, björnfällarna, silverlöjan, Ramunder och Skagas dotter, offerplats, rivning, återuppbyggnad, brand och återinvigning.
- Böckernas väg till Athos: kloster, manuskript, bokhandel och ortodox bildning.
- Från skrift till storebror: register, statistik, databaser, biometrik, AI-profilering och övervakning.
- Frölunda: separat ortnamnsundersökning av Västra och Östra Frölunda; använd projektbriefen, dra inte slutsats om gudanamn utan belägg.
- Cypern: Palaipafos, Geroskipou, Asklepieion, Kungagravarna och Commandaria.
- Varna/Svarta havet: hamnar, sjöfart, regional historia, kyrkor och kulturarv.
- Religion/Folket/Tradition: etablerade redaktionella serier.
- Övriga researchbankar: Boyanakyrkan, British Library EAP500, Kukeri/Surva.
- Parkerade utkast: markrätt, Norrsundet/SMR, JEF:s nordliga flottor, ansiktsigenkänning, Hormuz och Siemens Energy.

## Rotation

- **Framflyttat idag:** ODJURET UR DJUPET. Fokus på Frösöstenens runtext, Storsjöodjurets källhistoria och den nya rättshistoriska forskningen.
- **Nästa sidospår:** Varna/Svarta havet, enligt senaste dokumenterade rotationsnotering i PR #77.
- **Nästa huvudartikel:** Synkronicitetsprotokollet, men först efter att aktiv AI-infrastrukturartikel fått separat godkännande och genomgått ansluten adminväg och routekontroll.
- **Hormuz:** fyra separata evidensnoter, samtliga supplement. Ingen huvudartikel öppnad och ingen omordning av kö.

## Evidensklassificering

### ODJURET UR DJUPET
- Frösöstenen: input till serien; officiell runtext och ornamentik dokumenterad.
- 1635/1643: källkonflikt; kandidat för en senare källhistorisk artikel. Originalmanuskript saknas.
- Fridlysningen 1986/2005: daterad uppdatering och stark kandidat för en egen rättshistorisk artikel.
- Uppenbarelseboken 13: textkritisk avgränsning inför symbolisk jämförelse.
- Thiel: källhierarki till befintligt PR #28; ingen omskrivning.

### Hormuz – endast supplement
- 20 nov: tankerbrand efter okänt projektilföremål norr om Khasab; IRGC:s minuppgift är ett partsuttalande.
- 18/20 nov: CENTCOM:s varning om ship-to-ship-överföringar.
- 20 nov: uppgifter om en möjlig tanker-konvoj från Kharg Island; avgång eller passage är inte belagd.
- 21 nov: AP om Lewis Pughs simning och miljörisk; observationer och riskbedömning är inte oberoende utsläppsmätningar.

## PR-spärr

- Ny PR skapas som Draft.
- Inga PR:er görs Ready for review.
- Ingen merge, cherry-pick till main, deploy, databasändring, publicering eller frontendändring genomförs.
- PR #71 och PR #28 lämnas i befintligt Draft-läge.
- Inget publikt artikelroute-test påstås; ingen artikel har publicerats i denna körning.

## Tekniska beroenden och blockeringar

- **GitHub:** åtkomst fungerade. Efter skapandet av PR #78 fanns 65 öppna PR:er; 0 var icke-Draft. PR #78 är Open/Draft, inte mergad.
- **Källåtkomst:** offentliga webbkällor gick att läsa. Firecrawl-sökningen returnerade inga användbara resultat i denna körning; källresearchen gjordes via offentlig webbsökning. Runor-sidan visar text och metadata men varnar att JavaScript krävs för full funktionalitet. Doktorsavhandlingens PDF är 178 MB; metadata och abstract var åtkomliga, full-PDF:en öppnades inte.
- **Hermes:** ingen Hermes-tjänst finns i Railway-projektets tjänsteinventering. Agent-connector/tunnel-inventering kunde inte köras eftersom connector tunnels inte är tillgängliga för kontot. Separat Hermes-installation utanför projektet är därför inte testad.
- **Railway:** produktionsmiljön har fem tjänster – Cognee Memory, browser-use-runner, browser-chromium, mindcloud-osiris och Osiris-mindcloud-ui. Samtliga rapporteras Offline; två har senaste FAILED-deployment i oktober. Ingen Postgres-tjänst finns i den inventerade miljön och inga väntande deployer finns.
- **Render:** kontot visar “My Workspace”, men ingen workspace är vald. Ingen databas- eller tjänstekontroll utfördes där, eftersom workspace måste väljas uttryckligen.
- **Redaktionell backend/databas:** ingen fungerande backend-/Postgres-anslutning testades. Ingen databasändring har gjorts.

## Återkommande hyllning i denna utgåva

- **Johannes Gutenberg:** tryck med rörliga metalltyper och boktryckarkonstens genomslag. Källa: [Gutenberg-Museum, Mainz](https://mainz.de/en/microsite/gutenberg-museum/Museum/ueber_das_Museum).
- **Carl von Linné:** Systema Naturae publicerades 1735; Linnés binära artnamnssystem blev ett bestående vetenskapligt redskap. Källa: [Uppsala universitet](https://www.uu.se/en/about-uu/history/prominent-people/carl-linnaeus).
- **Voltaire:** den kritiska utgåvan av Œuvres complètes färdigställdes i 205 volymer. Källa: [Voltaire Foundation, Oxford](https://www.voltaire.ox.ac.uk/oeuvres-completes-de-voltaire/).
- **Sankta Paraskevi / Petka av Epivatos:** den bulgariska ortodoxa kyrkan firar hennes minne den 14 oktober; uppgifter om hennes liv och reliker återges som hagiografisk och kyrklig tradition. Källa: [Bulgariska patriarkatet](https://bg-patriarshia.bg/sv-petka).
- **Sankt Charbel Makhlouf:** maronitisk munk och eremit, 1828–1898; hans grav i Annaya är ett viktigt pilgrimscentrum. Mirakel anges som sådana som tillskrivs hans förbön. Källa: [Vatican News](https://www.vaticannews.va/en/church/news/2025-11/pope-leo-xiv-lebanon-saint-charbel-monastery-annaya.html).
- **Vasil Levski (Васил Левски; Vasil Ivanov Kunchev, 1837–1873):** Nationalmuseet redovisar mindre än 200 bevarade dokumentenheter skrivna eller undertecknade av honom; Nationalbiblioteket tillgängliggör hans anteckningsbok, skriven under hans två sista levnadsår. Inga citat tillskrivs honom utan kontroll mot originaltext. Källor: [National Museum Vasil Levski – Documentary Heritage](https://vlevskimuseum-bg.org/en/documentary-heritage/) och [Bulgariska nationalbiblioteket – Levski’s notebook](https://www.nationallibrary.bg/levski/).

## Nästa cykel

Fortsätt med Varna/Svarta havet som nästa sidospår. Återgå inte till ODJURET UR DJUPET förrän rotationsordningen ger skäl för det eller en konkret ny primärkälla kräver komplettering. Håll AI-infrastrukturartikeln som enda aktiva huvudartikel.
