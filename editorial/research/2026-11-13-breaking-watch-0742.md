# FOLKTRIBUNALEN – Breaking Watch
## Kontrolljournal 13 november 2026, 07:42 EET

### Sammanfattning

19 huvudspår A–S delta-screenade mot tidigare kontrollmatris. Tre substantiella uppdateringar i denna cykel: A (lokal NHS GP-data/FDP-pilot), N (Home Office-enkät om retrospektiv ansiktsigenkänning) och B/R (Statnetts norska nätkapacitet och NO3). P har en nära förestående svarstid från House Foreign Affairs Committee. Nscale/SEC-underlaget i B/F är redan infört i PR #64 från föregående kontroll och har ingen ny materiell delta i denna cykel.

### A – Palantir, NHS och GP-data

**Ny primärkälla:** Cheshire & Merseyside ICB:s 37-sidiga Tier Two DSA, uppdaterad juli 2026 för en FDP-pilot med GP-praktiker. Annex A anger ICB som controller för en lokal FDP-tenant med Local Analytical Hub. Datafält omfattar aktivitet, diagnoser, livsstil, riskpoäng, observationer och läkemedel.

**Källkedja:**
- DSA: https://www.cheshireandmerseyside.nhs.uk/media/10mh4qyg/ics-tier-two-dsa-population-health-october-2025-fdp-annex-v20-shared.pdf
- DPIA: https://www.cheshireandmerseyside.nhs.uk/media/wgsec1nm/dpia-population-health-october-2025-fdp-v11-nhs-cheshire-and-merseyside.pdf
- LAH privacy notice: https://www.cheshireandmerseyside.nhs.uk/media/zlkftf3g/lah-fdp-privacy-notice-v10.pdf
- Strategic Commissioning Tool privacy notice: https://www.cheshireandmerseyside.nhs.uk/media/bbfmovrx/strategic-commissioning-privacy-notice-cm-icb.pdf
- NHS England Check & Challenge minutes, 15 Dec 2023: https://www.england.nhs.uk/long-read/fdp-check-and-challenge-group-minutes-15-december-2023/
- FT, 13 Sep 2026 (uppgiften om fem praktiker): https://www.ft.com/content/5d15de64-49cc-4b6a-a2ea-51061f1cddc7

**Viktiga avgränsningar:** DSA:n bekräftar pilot med GP-praktiker men inte antalet fem. Den publicerade signatursidan har tomma partnerfält. DSA/DPIA beskriver Graphnet/System C, AGEMCSU och MLCSU i CIPHA-flödet; LAH privacy notice anger Palantir som plattformsprocessor och AGEMCSU för lokala flöden. Exakta dataflöden, DPA Annex II och tekniska åtkomsträttigheter behöver klarläggas. Dokumenten visar inte att GP-data har lagts i den nationella FDP-instansen och bevisar inte att Palantir haft åtkomst till identifierbara GP-journaler i den lokala piloten.

**Källstatus:** DSA/DPIA/privacy notices = PRIMÄRKÄLLA; FT:s fem-praktikuppgift = OBEROENDE BEKRÄFTELSE; orsakssamband mellan lobbykontakten i februari och lokal pilot = HYPOTES. Separat nationell fråga: NDG:s uppdatering 28 juli säger att vissa externa leverantörsanställda kan få åtkomst till identifierbara uppgifter i NDIT för tekniska ändamål under NHS:s instruktion; detta är inte bevis om den lokala GP-piloten. Källa: https://www.gov.uk/government/news/national-data-guardian-statement-on-nhs-federated-data-platform-data-access-in-response-to-the-not-with-my-nhs-data-campaign.

### N – Retrospektiv ansiktsigenkänning

Home Office publicerade 12 november 2026 en användarundersökning:
- 6 012 identifierade användare i 45 styrkor/organisationer.
- Över 300 000 sökningar under februari 2025–januari 2026.
- 779 giltiga svar, cirka 13 procent av populationen.
- 34 procent trodde felaktigt eller var osäkra på om en PND-matchning uppfyller beviskravet för igenkänning enligt PACE Code D.
- 65 procent mindes inte utbildning under det senaste året; 14 procent mindes ingen utbildning alls.
- 53 procent uppfattade åtminstone viss demografisk variation i prestanda; detta är uppfattning, inte tekniskt test.

**Källa:** https://www.gov.uk/government/publications/police-user-insights-on-retrospective-facial-recognition-2026/police-user-insights-on-retrospective-facial-recognition-2026

**Avgränsning:** Enkäten mäter användarnas kunskap/uppfattningar, inte algoritmens felkvot. Den ska hållas åtskild från HMICFRS-inspektionen; HMICFRS-originalet har inte hämtats direkt i denna kontroll.

### B/R – Norge, datacenter och kraftsystem

**9 november:** Statnett pausade nya datacenterreservationer och vissa nya ansökningar om anläggningsfunktionalitet. Detta är inte ett generellt byggstopp; befintliga anslutningar och redan godkända anläggningar påverkas inte. Förväntad bortre tidsgräns för pausen är 1 augusti 2027.

**12 november:** Statnett publicerade en redogörelse daterad 11 november till RME och bad att två avvikelsepunkter från RME:s beslut den 13 februari 2026 skulle stängas. RME:s rättelsefrist är 1 december 2026; Statnetts begäran är inte ett slutligt RME-beslut.

**NO3:** 42 mogna projekt i kö om cirka 2 800 MW; ytterligare cirka 3 800 MW i ännu inte mogna förfrågningar. Planerade nätåtgärder kan enligt Statnetts scenarier ge cirka 1 400–1 800 MW ökad försörjningsförmåga runt 2030, men inte möta samtliga mogna projekt. Ny kraftproduktion är central. NO3-kön avser all ny förbrukning, inte enbart datacenter.

**Källor:**
- Statnett 9 Nov: https://www.statnett.no/om-statnett/nyheter-og-pressemeldinger/nyhetsarkiv-2026/midlertidige-tiltak-for-fortsatt-forsvarlig-systemdrift/
- Regeringen 9 Nov: https://www.regjeringen.no/no/aktuelt/regjeringen-vil-ha-en-kontrollert-vekst-av-samfunnsnyttige-datasentre-i-norge/id3192054/
- Statnett 12 Nov: https://www.statnett.no/om-statnett/nyheter-og-pressemeldinger/nyhetsarkiv-2026/anmoder-rme-om-a-lukke-avvik-i-omrade-midt/
- Statnett skrivelse: https://www.statnett.no/globalassets/om-statnett/nyheter-og-pressemeldinger/nyhetsarkiv-2026/skriftlig-redegjorelse-til-rme---oppfolging-og-anmodning-om-a-lukke-avvik.pdf
- NO3-utredning: https://www.statnett.no/globalassets/om-statnett/nyheter-og-pressemeldinger/nyhetsarkiv-2026/utredning-av-tiltak-for-okt-forbruk-i-no3.pdf
- RME beslut 13 Feb: https://www.nve.no/media/19769/_-vedtak-i-tilsyn-med-tilknytningsplikt-5899738_1_1.pdf
- Menon-rapporten: https://www.regjeringen.no/no/aktuelt/ny-rapport-okonomiske-sider-ved-datasentersenternaringen/id3186921/
- Reuters: https://www.reuters.com/business/energy/norways-statnett-pauses-new-grid-capacity-data-centres-protect-power-system-2026-11-09/

### P – USA:s kongress

House Foreign Affairs Committee:s andra begäran 12 november till Jensen Huang och Tim Teter kräver skriftlig bekräftelse senast 20:00 EST den 13 november. Det motsvarar 03:00 EET den 14 november. Vid kontrolltidpunkten 07:42 EET den 13 november hade tidsfristen alltså inte passerat. Ingen offentlig bekräftelse eller subpoena har identifierats i det material som kontrollerats; frånvaro i offentlig sökning bevisar inte att privat acceptans saknas.

### Övriga spår

- B/F: Nscale S-1/A 12 Nov och FT:s finansieringsuppgift är redan införda i PR #64 i föregående kontroll; ingen ny transaktionsbekräftelse i denna cykel.
- C, D, E, G, H, I, J, K, L, M, O, Q och S: ingen ny primärhändelse som passerade rapporttröskeln i denna delta-screening. Befintliga öppna frågor och kontrollpunkter ligger kvar.
- K: inga nya lagfarter/fastighetsbeteckningar har identifierats.
- D: Samuils återförande och sarkofagplacering i oktober är redan dokumenterade; ingen ny arkeologisk rapport.
- S: Posivas driftlicens från 22 oktober kvarstår; ingen ny bekräftad driftstart eller STUK-förhandsinspektion.

### Faktiska redaktionella ändringar i denna cykel

- PR #42: kompletterad med DSA, DPIA och LAH privacy notice; titel bör beskriva lokal/nationell arkitektur utan att påstå att den nationella plattformen fått GP-data.
- PR #57: kompletterad med Home Office-enkätens primärdata och metodbegränsningar.
- PR #64: kompletterad med Statnetts beslut, NO3-kön och RME:s rättelseprocess.
- PR #16: A–S-matrisens delta uppdaterad.
- PR #60: denna kontrolljournal tillagd.
- PR #47: deadline för Huang/Teter tydliggjord; deadline har ännu inte passerat.

**Ingen artikel har mergats eller publicerats i denna kontroll.**
