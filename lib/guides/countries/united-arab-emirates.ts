import type { CountryGuide } from "../types";

export const unitedArabEmirates: CountryGuide = {
  slug: "united-arab-emirates",
  country: "United Arab Emirates",
  flag: "🇦🇪",
  continent: "Asia",
  capital: "Abu Dhabi",
  currency: "AED",
  language: "Arabic (official); English dominant in business",
  timezone: "GST (UTC+4)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2800,
  seoTitle: "Working in the UAE: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "United Arab Emirates for remote workers: Dubai, Abu Dhabi, Sharjah — remote work visa, housing, tax-free framing, healthcare, and cost of living for 2026.",
  highlights: [
    "Remote work visa programmes — verify ICP / GDRFA announcements",
    "World-class infrastructure — summer heat extreme — indoor life",
    "Dubai free zones — Abu Dhabi government corridor — Sharjah rent value",
    "No personal income tax for most employees — corporate tax landscape evolving — professional advice",
    "Respectful dress — Ramadan hours — alcohol licenced venues only — strict laws online",
  ],
  visaOptions: [
    {
      name: "Tourist visa / visa on arrival",
      duration: "30–90 days depending on nationality — extensions policy cycles",
      cost: "Sponsor or airline packages",
      requirements: "Onward ticket — insurance — no local employment",
    },
    {
      name: "Remote work visa",
      duration: "Typically 1 year renewable — programme rules",
      cost: "Package fee + insurance",
      requirements: "Remote employer abroad — income thresholds — medical insurance",
    },
    {
      name: "Employment residence visa",
      duration: "Employer-sponsored — 2–3 year renewals",
      cost: "Employer processing",
      requirements: "Labour contract — medical fitness — Emirates ID",
    },
  ],
  cities: [
    {
      name: "Dubai",
      vibe: "Marina / Downtown / JVC — events — desert heat — metro expanding",
      avgRent: "$1,200–$3,500/month",
      coworkingSpaces: "AstroLabs, WeWork, Nasab, hotel business lounges",
    },
    {
      name: "Abu Dhabi",
      vibe: "Government and oil — Corniche — Saadiyat culture — calmer than Dubai",
      avgRent: "$1,000–$3,000/month",
      coworkingSpaces: "Hub71, Regus, Sowwah Square hubs",
    },
    {
      name: "Sharjah",
      vibe: "Lower rent — family culture — stricter alcohol rules — commute to Dubai",
      avgRent: "$650–$1,800/month",
      coworkingSpaces: "Sharjah Research hubs — university cafés",
    },
  ],
  costBreakdown: {
    rent: "$650–$3,500/month — Dubai Marina premium",
    food: "$350–$650/month — grocery delivery vs restaurants",
    transport: "$80–$200/month — Nol + Salik + occasional taxi",
    coworking: "$200–$400/month",
  },
  taxInfo:
    "Most employees pay no personal income tax — corporate tax now applies to certain entities — free zone rules evolving — remote workers on visit visas should not assume tax residency — consult a UAE tax advisor for structuring and reporting.",
  communityTips:
    "Emirates ID for residents — DEWA + cooling bills — summer car survival — Ramadan etiquette — Friday–Saturday weekend — alcohol licence rules by emirate — respectful public behaviour — social media laws strict — WhatsApp housing agents — verify Ejari / tenancy contracts.",
  bestFor: ["Infrastructure", "Safety", "Business", "Winter sun"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
GDRFA / ICP portals — medical fitness — visa stamping — Emirates ID biometrics — health insurance mandatory — employer PRO workflow if employed.

Tenancy: Ejari in Dubai — security deposit — cooling included or separate — read service charge clauses.
`.trim(),

  bankingTips: `
Emirates NBD, ADCB — accounts with residence — Wise inbound — cash rare — Apple Pay / Samsung Pay — remittance corridors for salaries.

VAT on services — 5% on many goods — corporate tax separate — keep receipts for business.
`.trim(),

  healthcareInfo: `
Cleveland Clinic Abu Dhabi, Mediclinic — insurance mandatory — heatstroke — sandstorms — mental health in English available.

Emergency: 998 / 999 — ambulance — private faster if insured — public hospitals for emergencies.
`.trim(),

  culturalTips: `
Modest dress public — Ramadan fasting respect — mosque etiquette — Friday prayer traffic — right hand — avoid loud arguments — photography of government sites restricted — LGBTQ+ legal risks — public affection minimal — alcohol only licenced venues.
`.trim(),

  realMonthlyCost: `
Example month — Dubai JVC shared:

Rent: $1,600
Utilities + DEWA: $220
Nol + Salik + fuel: $180
Groceries + delivery: $450
Coworking: $280
Insurance: $120
Weekend desert / beach: $200
Misc: $150

Indicative total: ~$3,200 — Abu Dhabi similar; Sharjah rent −20–30%.
`.trim(),

  expatCommunities: [
    "Dubai Expats",
    "Abu Dhabi Message Board",
  ],

  prosAndCons: {
    pros: [
      "Infrastructure",
      "Tax-free salaries (typical)",
      "Air connectivity",
      "Safety",
    ],
    cons: [
      "Summer heat",
      "High rent Dubai",
      "Legal strictness",
      "Car dependence many areas",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Dubai",
      neighbourhood: "JBR / Marina",
      description:
        "Walkable — beach — premium — verify tower chiller fees — metro access.",
    },
    {
      city: "Abu Dhabi",
      neighbourhood: "Al Reem Island",
      description:
        "Sea views — newer towers — schools — commute to downtown.",
    },
  ],

  faqs: [
    {
      question: "Dubai or Abu Dhabi for remote work?",
      answer:
        "Dubai for networking and events — Abu Dhabi for government-linked sectors and calmer pace — both have fibre — choose rent vs commute.",
    },
  ],

  updated: "April 2026",
  wordCount: 2400,
};
