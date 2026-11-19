# Algoritmen sorterar arbetssökande – IMY granskar Arbetsförmedlingens profilering

*Arbetsförmedlingens statistiska bedömningsstöd använder bland annat födelseland, kön, ålder och en funktionsnedsättningskod för att uppskatta arbetssökandes jobbchanser. Myndigheten säger att en arbetsförmedlare fattar det slutliga beslutet. Integritetsskyddsmyndigheten granskar nu om behandlingen är laglig och nödvändig – och om det i praktiken förekommer automatiserat beslutsfattande.*

## Händelsen

**5 november 2026 – publicerings-/uppdateringsdatum för IMY:s tillsynssida.** Integritetsskyddsmyndigheten (IMY) anger att tillsynen mot Arbetsförmedlingen är aktiv i steg 2 av 3. Granskningen gäller myndighetens behandling av personuppgifter i ett statistiskt bedömningsstöd, beskrivet av IMY som ett AI-system, när arbetssökande handläggs för insatser inom programmet Rusta och matcha.

IMY ska granska:
- om personuppgiftsbehandlingen är laglig och nödvändig;
- vilka personuppgifter som behövs;
- om det förekommer automatiserat beslutsfattande;
- vilken information de registrerade får om behandlingen.

Det finns ännu inget publicerat slutligt tillsynsbeslut. IMY:s granskning är alltså inte ett konstaterande av lagbrott.

**PRIMÄRKÄLLA:** [IMY – Arbetsförmedlingen, tillsyn enligt dataskyddsförordningen, senast uppdaterad 5 november 2026](https://www.imy.se/tillsyner/arbetsformedlingen/).

## Vad systemet faktiskt gör

Arbetsförmedlingen beskriver bedömningsstödet som en komponent i en samlad bedömning. Den statistiska modellen uppskattar sannolikheten för att en arbetssökande ska nå varaktigt arbete eller studier. Utifrån sannolikheten ger verktyget en rekommendation:

1. personen bedöms stå för nära arbetsmarknaden för Rusta och matcha;
2. personen bedöms lämplig för tjänsten, med en nivå för hur mycket stöd som rekommenderas;
3. personen bedöms behöva fördjupat stöd som ska utredas vidare.

Arbetsförmedlingen uppger uttryckligen att rekommendationen endast är ett stöd och att det slutliga beslutet fattas av en arbetsförmedlare. Det är den aktuella myndighetsbeskrivningen och ska återges utan att påstå att systemet automatiskt fattar beslut om deltagande.

Samtidigt är det mer än en vanlig kalkylator. Myndigheten beskriver behandlingen som **profilering**: automatisk behandling av personuppgifter för att bedöma en persons förutsättningar till sysselsättning utifrån hur det gått för andra med motsvarande egenskaper.

**PRIMÄRKÄLLA:** [Arbetsförmedlingen – Så gör vi vår bedömning om Rusta och matcha](https://arbetsformedlingen.se/om-webbplatsen/juridisk-information/sa-har-gor-vi-var-bedomning-om-rusta-och-matcha).

## Vilka uppgifter används?

Arbetsförmedlingen listar följande variabler i bedömningsstödet:

- a-kassatillhörighet och arbetsutbud;
- erfarenhet i sökta yrkesgrupper;
- födelseland, med uppgift från Migrationsverket;
- inskrivningstid och om personen söker arbete över kommungränser;
- kod för funktionsnedsättning som innebär minskad arbetsförmåga;
- kommun, kön, ålder och sökandekategori;
- sökta yrkesgrupper, utbildning och utbildningsinriktning;
- tidpunkt på året då personen skrevs in.

Arbetsförmedlingen anger den rättsliga grunden som **allmänt intresse och myndighetsutövning**. Behandlingen bygger alltså inte på att den arbetssökande samtycker till profileringen.

Att födelseland, kön, ålder och funktionsnedsättningskod ingår betyder inte i sig att systemet är olagligt. Det väcker däremot frågor om ändamålsbegränsning, dataminimering, särskilda kategorier av personuppgifter, modellens felutfall och hur den enskilde kan få en bedömning förklarad eller rättad.

## En viktig detalj: randomisering vid gränsfall

Arbetsförmedlingen uppger att bedömningsstödet innehåller randomisering i vissa ärenden som ligger nära gränsen mellan två rekommendationer. Myndigheten förklarar att utfallet i sådana fall inte helt motsvarar hur långt personen står från arbetsmarknaden. Randomiseringen används för att utvärdera Rusta och matcha.

Det är en väsentlig upplysning. Den betyder inte att slumpen avgör alla anvisningar, men att vissa personer nära en beslutsgräns kan få olika rekommendationsutfall som en del av utvärderingsupplägget. Den enskilde behöver förstå om det har påverkat just den egna bedömningen, och hur en handläggare väger detta mot övrig information.

Arbetsförmedlingen säger samtidigt att en arbetsförmedlare avgör om tjänsten ska erbjudas. Nästa granskningsfråga är därför hur ofta handläggare frångår rekommendationen, vilka skäl som dokumenteras och om randomiseringens utfall syns i beslutsunderlaget.

## Modellen och dess egen redovisning av rättvisa

I rapporten *Arbetsförmedlingens nya modell för bedömning av arbetssökandes stödbehov* (Analys 2023:11, publicerad 5 september 2023) beskriver myndigheten modellen som infördes i samband med Rusta och matcha 2 i april 2023.

Rapporten är ovanligt öppen med ett centralt metodval: olika definitioner av likabehandling kan vara matematiskt oförenliga. Arbetsförmedlingen valde i första hand att säkerställa att en viss beräknad jobbchans i genomsnitt betyder samma sak för olika grupper – så kallad gruppkalibrering. Myndigheten valde alltså inte i första hand ett annat vanligt kriterium som kräver att andelen korrekt klassificerade personer ska vara densamma mellan grupper.

Rapporten beskriver också en konkret konsekvens av variabeln utländsk bakgrund. Allt annat lika kan en utlandsfödd person få en lägre skattad jobbchans än en svenskfödd. Arbetsförmedlingen förklarar att variabeln fångar genomsnittliga faktorer som påverkar arbetsmarknadsutfallet, däribland språkkunskaper och risken att utsättas för diskriminering i rekryteringen. Myndigheten resonerar att en lägre bedömd jobbchans i detta system kan öka möjligheten att få stöd, men medger samtidigt att vissa personer kan anvisas stöd i onödan.

Detta är inte ett bevis för att modellen diskriminerar. Det visar däremot hur historiska skillnader i arbetsmarknadsutfall byggs in i en prognos och sedan används för att fördela offentliga insatser. Frågan är om den valda rättvisedefinitionen är tillräcklig för just den offentliga uppgiften – och om IMY bedömer att databehandlingen är nödvändig och proportionerlig.

**PRIMÄRKÄLLA:** [Arbetsförmedlingen Analys 2023:11 – full teknisk rapport (PDF)](https://arbetsformedlingen.se/download/18.6546760718a1c207b931ed0/1694504706728/arbetsformedlingens-nya-bedomningsmodell.pdf).

## Hur bra säger myndigheten att modellen fungerar?

I sin tekniska rapport redovisade Arbetsförmedlingen bland annat:
- cirka 76 procent korrekt klassificering i ett av rapportens testupplägg, jämfört med cirka 59 procent för den kvalificerade slumpjämförelsen;
- ROC-AUC omkring 79–81 procent beroende på beräkningssätt;
- god kalibrering på totalen och i analyserade grupper, men mindre avvikelser från perfekt kalibrering.

Detta är myndighetens egen utvärdering av modellen före produktionssättning. Det är inte en oberoende revision av hur den fungerar i dagens handläggning, inte ett mått på om en viss person får rätt stöd och inte ett bevis för att varje rekommendation är korrekt.

Rapporten säger att motsvarande kvalitetskontroll ska göras vid modelluppdateringar. IMY:s aktuella tillsyn gör det relevant att begära ut vilka senare versioner som använts, vilka valideringar som gjorts efter 2023 och om resultaten redovisats uppdelade på relevanta grupper.

## Oberoende kontext – men inte en utvärdering av AI-modellen

IFAU:s rapport 2024:17 utvärderade själva matchningstjänsten Rusta och matcha, inte den nuvarande AI-modellens träffsäkerhet. Studien fann att de arbetssökande som anvisades till tjänsten fick dyrare insatser än jämförelsegrupperna, utan betydande förbättringar i löneinkomster eller varaktig sysselsättning under den studerade perioden.

Detta får inte användas som bevis för att AI-modellen misslyckas. Rapporten gäller programmets effekter och perioden 2020–2022, medan den nya modellen infördes i april 2023. Den är ändå relevant bakgrund när myndigheten motiverar ett profileringssystem med att det ska styra offentliga resurser till personer med större stödbehov.

**OBEROENDE BEKRÄFTELSE – av programmets utfall, inte av AI-modellen:** [IFAU, Rapport 2024:17 – En effektutvärdering av arbetsförmedling med fristående leverantörer](https://www.ifau.se/Forskning/Publikationer/Rapporter/2024/en-effektutvardering-av-arbetsformedling-med-fristaende-leverantorer/).

## Vad tillsynen behöver besvara

Den centrala frågan är inte bara om en människa formellt fattar beslutet. Det handlar också om hur starkt rekommendationen styr handläggningen och om den enskilde kan förstå, ifrågasätta och få den prövad.

Följande handlingar och svar behövs:

1. **Tillsynsskrivelsen:** IMY:s fullständiga skrivelse till Arbetsförmedlingen, inklusive samtliga frågor och begärda underlag.
2. **Konsekvensbedömning:** myndighetens DPIA enligt GDPR, riskanalys och eventuella interna rättsliga utlåtanden.
3. **Versionshistorik:** modellversioner, ändringsloggar, valideringar och datum för produktionssättning sedan april 2023.
4. **Överstyrning:** antal fall där handläggare avvikit från rekommendationen, skälen och hur detta loggas.
5. **Randomisering:** omfattning, urvalsregler, kontrollgruppsupplägg och information till de arbetssökande som berörs.
6. **Grupputfall:** falskt positiva och falskt negativa rekommendationer, kalibrering och faktisk tillgång till stöd uppdelat på relevanta grupper.
7. **Rättigheter:** vilken förklaring den enskilde får, hur felaktiga uppgifter rättas och hur en rekommendation kan bestridas.
8. **Datakällor:** exakt vilka register som används, uppdateringsfrekvens, gallring, åtkomst och eventuell delning med externa leverantörer.

## Aktörskarta

| Aktör | Dokumenterad roll | Vad som återstår att kontrollera |
|---|---|---|
| Arbetsförmedlingen | Personuppgiftsansvarig och användare av bedömningsstödet | DPIA, versionshistorik, överstyrning och intern kontroll |
| IMY | Tillsynsmyndighet; aktiv granskning i steg 2 av 3 | Frågor i tillsynsskrivelsen och kommande beslut |
| Arbetssökande | Registrerade personer som profileras | Information, insyn och möjlighet att få fel rättade |
| Fristående leverantörer | Tar emot deltagare i Rusta och matcha | Hur rekommenderad stödnivå påverkar tjänstens innehåll och ersättning |
| Migrationsverket | Källa till uppgift om födelseland enligt Arbetsförmedlingens beskrivning | Dataflöde, aktualitet och rättelseprocess |

## Tidslinje

| Datum | Händelse | Källstatus |
|---|---|---|
| 2020 | Statistiskt bedömningsstöd börjar användas för anvisningar till Rusta och matcha | PRIMÄRKÄLLA – Arbetsförmedlingens tekniska rapport |
| 17 april 2023 | Den nya modellen tas i bruk enligt rapportens versionsbeskrivning | PRIMÄRKÄLLA |
| 5 september 2023 | Arbetsförmedlingen publicerar Analys 2023:11 med modellbeskrivning och förhandsutvärdering | PRIMÄRKÄLLA |
| 2024 | IFAU publicerar en effektutvärdering av Rusta och matcha; den utvärderar inte den nya AI-modellen | OBEROENDE BEKRÄFTELSE – programnivå |
| 5 november 2026 | IMY uppdaterar tillsynssidan; granskningen är aktiv i steg 2 av 3 | PRIMÄRKÄLLA |

## Faktastatus

- **PRIMÄRKÄLLA:** IMY har inlett tillsyn och granskar laglighet, nödvändighet, personuppgiftsurval, automatiserat beslutsfattande och information till registrerade.
- **PRIMÄRKÄLLA:** Arbetsförmedlingen säger att bedömningsstödet ger rekommendationer och att en arbetsförmedlare fattar det slutliga beslutet.
- **PRIMÄRKÄLLA:** Arbetsförmedlingen redovisar att systemet använder bland annat födelseland, kön, ålder och funktionsnedsättningskod.
- **PRIMÄRKÄLLA:** Myndigheten uppger att randomisering förekommer i vissa gränsfall för att utvärdera tjänsten.
- **PRIMÄRKÄLLA:** 2023 års tekniska rapport redovisar gruppkalibrering som förstahandskriterium för likabehandling och förklarar modellens konsekvenser för utlandsfödda.
- **OBEROENDE BEKRÄFTELSE:** IFAU:s utvärdering gäller programmets utfall, inte modellens träffsäkerhet.
- **HYPOTES:** Rekommendationerna kan i praktiken få stor betydelse även när en handläggare formellt fattar beslutet. Detta måste prövas mot loggar, intervjuer och beslutsdata.
- **OBEKRÄFTAD:** Hur ofta handläggare överstyr modellen, hur många arbetssökande som berörs av randomisering och hur ofta modellen uppdaterats efter 2023.
- **EJ FASTSTÄLLT:** Om IMY kommer att finna behandlingen olaglig eller om automatiserat beslutsfattande förekommer i GDPR:s mening.

## Publiceringsvillkor

Artikeln kräver chefredaktörens uttryckliga godkännande. Före publicering ska tillsynsskrivelsen läsas i sin helhet, Arbetsförmedlingen ges möjlighet att bemöta de centrala frågorna och den aktuella modellversionen jämföras med 2023 års tekniska rapport.
