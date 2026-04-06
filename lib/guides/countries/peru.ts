import type { CountryGuide } from "../types";

export const peru: CountryGuide = {
  slug: "peru",
  country: "Peru",
  flag: "🇵🇪",
  continent: "South America",
  capital: "Lima",
  currency: "PEN",
  language: "Spanish; Quechua in Andean regions",
  timezone: "PET (UTC−5)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 1000,
  seoTitle: "Working in Peru: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Peru for remote workers: Lima, Cusco, Arequipa, visas, cost of living, altitude, and practical tips for nomads exploring the Andes and Pacific coast.",
  highlights: [
    "World-class food scene in Lima — from cevicherías to Maido-level dining",
    "Coastal desert climate in Lima — grey winters, mild summers; very different from high Andes",
    "Cusco: Machu Picchu gateway — altitude and tourism economy",
    "Arequipa: white volcanic stone architecture — milder altitude than Cusco",
    "Remote worker visa categories have been discussed — verify Migraciones for current nomad-specific options",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 90–183 days total depending on nationality and discretion — confirm stamp",
      cost: "Low",
      requirements: "Passport, onward ticket sometimes; Andean migration card kept safe",
    },
    {
      name: "Residencia temporal categories",
      duration: "1 year renewable patterns — work, family, investment, etc.",
      cost: "Fees + SUNARP / Interpol checks + translations",
      requirements:
        "Varies — Migraciones publishes PDFs; lawyer often used for first application",
    },
  ],
  cities: [
    {
      name: "Lima",
      vibe: "Pacific capital — Miraflores/Barranco cliff views; traffic intense; culinary capital",
      avgRent: "$450–$1,200/month",
      coworkingSpaces: "Comunal, WeWork, many café-offices with fibre",
    },
    {
      name: "Cusco",
      vibe: "Inca walls meet Spanish plazas — altitude 3,400m — nomads acclimate before hikes",
      avgRent: "$350–$900/month",
      coworkingSpaces: "Nexo, Selina, smaller hubs — verify speeds",
    },
    {
      name: "Arequipa",
      vibe: "Sunny highland city — volcanoes, slower than Lima, university energy",
      avgRent: "$320–$850/month",
      coworkingSpaces: "Limited — home office common; cafés on Plaza de Armas",
    },
  ],
  costBreakdown: {
    rent: "$320–$1,200/month — Lima coastal premium",
    food: "$180–$350/month — markets cheap; dining out ranges wide",
    transport: "$25–$55/month — Metropolitano + Uber in Lima",
    coworking: "$70–$180/month",
  },
  taxInfo:
    "Peruvian tax residency tests involve domicile or 183+ days — worldwide taxation concepts apply for residents. Remote workers on short stays often remain non-resident; multi-year bases need SUNAT advice. Double taxation treaties are limited — plan with a local CPA if you open local accounts or hire locally.",
  communityTips:
    "Lima has strong foodie and surf scenes; Cusco offers spiritual tourism — respect indigenous culture. Learn salsa and basic Quechua greetings in highlands. Uber works in cities; combi vans are cheap but hectic. Pollution in Lima winter — air purifier helps indoors.",
  bestFor: ["Food", "History & hikes", "Value", "Coast or mountains — pick your climate"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Peru's Superintendencia Nacional de Migraciones handles permits — online tramites expanded — create a user, upload scans, pay boletas.

Tourist extensions or cambios de calidad migratoria follow specific forms — overstays fineable — pay at Banco de la Nación before airport exit.

Residence pathways require Interpol clearance, antecedentes policiales, medical certs in some categories, and proof of income or work contract apostilled. Processing times vary — months — keep migratory card (tarjeta Andina) safe when flying domestically.

Digital nomad visa policies have been piloted — verify whether a dedicated category exists and minimum income — rules change; download the latest resolución ministerial.

After approval, obtain carné de extranjería — required for bank accounts, contracts, and some SIM registrations.

Altitude: fly to Cusco with acclimatisation buffer — severe AMS needs clinic oxygen — don't rush Sacred Valley treks day one.
`.trim(),

  bankingTips: `
Soles (PEN) for daily life — exchange at casas or withdraw ATMs inside malls — avoid street traders. Interbank, BBVA, Scotiabank Perú serve residents with carné.

Foreign cards work in cities — notify bank before travel. US dollars accepted in tourism zones sometimes — soles preferred for fairness.

Yape and Plin instant transfer apps dominate — link once you have a local number and ID.

Keep small coins for markets — vendors short on change. Safeguard phone on buses — petty theft in crowded Lima districts.
`.trim(),

  healthcareInfo: `
Lima private clinics (Clínica Ricardo Palma, San Felipe) handle expats — insurance or cash. Cusco oxygen clinics common for tourists — not a substitute for acclimatisation.

Yellow fever for Amazon — certificate for some border crossings. Altitude meds (acetazolamide) — doctor consult. Stomach hygiene — choose busy ceviche lunch spots (morning fish rule).

Emergency: 116 SAMU in Lima — verify. Dental tourism moderate quality — research reviews.

Mental health: psychologists available — Spanish primary; English in Lima premium practices.
`.trim(),

  culturalTips: `
Food is pride — insulting ceviche etiquette triggers side-eye (don't stir rice into ceviche). Pisco politics — both Peru and Chile claim origin — humour carefully.

Personal space moderate; greetings handshake or single cheek in cities. Indigenous Quechua communities — ask permission for photos; support ethical tour operators.

Time flexes — government offices painfully slow — bring duplicates. Earthquake drills — know stairs.

Soccer: Alianza vs Universitario rivalry runs deep — neutral banter only until you pick a side knowingly.
`.trim(),

  realMonthlyCost: `
Example month — Lima, Barranco profile:

Rent one-bed: $750
Utilities + fibre: $70
Transport (Uber + Metropolitano mix): $85
Groceries: $230
Eating out (mix local + mid): $280
Coworking: $120
Surf lessons / gym: $90
Travel insurance: $60
Weekend Ica / Paracas: $120
Misc: $85

Indicative total: ~$1,890. Cusco can be cheaper rent but higher tourist pricing in centro; Arequipa mid-pack.
`.trim(),

  expatCommunities: [
    "Lima Expats Facebook",
    "Peru Reddit r/PERU",
    "Cusco nomad WhatsApp circles",
    "Foodie meetups — Maido / Central alumni tours",
    "Hiking clubs — Huaraz weekend trips",
  ],

  prosAndCons: {
    pros: [
      "Exceptional cuisine and produce",
      "Rich history — weekend travel endless",
      "Affordable outside luxury dining",
      "Growing fibre in major cities",
      "Friendly when respect is mutual",
    ],
    cons: [
      "Lima traffic and winter greyness",
      "Altitude in highland bases",
      "Bureaucracy for residence",
      "Street safety requires neighbourhood IQ",
      "Water potability varies — filter or bottle",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Lima",
      neighbourhood: "Miraflores",
      description:
        "Cliff parks, malls, safer evening runs — higher rent; verify earthquake retrofit in older towers.",
    },
    {
      city: "Lima",
      neighbourhood: "Barranco",
      description:
        "Bohemian, art, nightlife — popular with creatives — noise weekends — test apartment soundproofing.",
    },
    {
      city: "Cusco",
      neighbourhood: "San Blas",
      description:
        "Steep streets, artisan shops — altitude climbs — stunning views — wifi check before lease.",
    },
  ],

  faqs: [
    {
      question: "Lima or Cusco for nomads?",
      answer:
        "Lima: food, flights, sea-level comfort, better healthcare density. Cusco: culture and hikes but altitude and tourist price swings — many split time.",
    },
    {
      question: "Is tap water safe?",
      answer:
        "Generally no — filter or bottled even for brushing in many areas — ice in reputable restaurants usually filtered.",
    },
    {
      question: "How is internet?",
      answer:
        "Lima fibre common in modern buildings — 100–600 Mbps packages. Cusco variable — always run speed tests before signing long leases.",
    },
  ],

  updated: "April 2026",
  wordCount: 2320,
};
