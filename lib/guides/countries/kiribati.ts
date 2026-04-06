import type { CountryGuide } from "../types";

export const kiribati: CountryGuide = {
  slug: "kiribati",
  country: "Kiribati",
  flag: "🇰🇮",
  continent: "Oceania",
  capital: "South Tarawa",
  currency: "AUD / KID",
  language: "English / Gilbertese",
  timezone: "UTC+12 / +13 (Phoenix Islands)",
  visaDifficulty: "Medium",
  internetSpeed: "Poor",
  costOfLiving: "Low",
  avgMonthlyCost: 900,
  seoTitle: "Working in Kiribati: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Kiribati or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Public sector, NGOs, and fisheries are main employers",
    "Unique atoll geography—climate adaptation on global agenda",
    "English official—Gilbertese dominant daily",
    "Limited private sector—roles often tied to aid projects",
    "Extremely remote—supply chains and healthcare constrained",
  ],
  visaOptions: [
    {
      name: "Work authorisation (employer / project-based)",
      duration: "Contract-linked",
      cost: "Government fees",
      requirements: "Sponsorship from government agency or approved employer",
    },
    {
      name: "Residence permits",
      duration: "Case-by-case",
      cost: "Fees",
      requirements: "Long-term roles rare—verify with Immigration",
    },
  ],
  cities: [
    {
      name: "Tarawa (South Tarawa)",
      vibe: "Main population corridor, narrow atoll road",
      avgRent: "$300–$800/month",
      coworkingSpaces: "None formal—NGO offices",
    },
    {
      name: "Kiritimati (Christmas Island)",
      vibe: "Sparse, fishing and logistics",
      avgRent: "Subsidised housing common",
      coworkingSpaces: "N/A",
    },
  ],
  costBreakdown: {
    rent: "$250–$700/month",
    food: "$200–$400/month",
    transport: "$40–$100/month",
    coworking: "Minimal",
  },
  taxInfo:
    "Public sector payroll deductions typical; expatriate packages often structured offshore—consult employer and local finance unit.",
  communityTips:
    "Church and family networks dominate; patience with logistics essential—import delays normal.",
  bestFor: ["Development professionals", "Adventure", "Pacific specialists"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Most foreign workers arrive via signed contracts with government ministries, regional organisations, or NGOs. Permits are not casual—do not arrive expecting to job hunt on a tourist entry.

Medical clearance and police certificates usually required. Housing may be employer-provided on narrow atolls.

Climate displacement and coastal erosion are policy priorities—roles in environment and infrastructure exist.

Renewal tied to contract extensions—keep passports valid beyond contract end.
`.trim(),

  bankingTips: `
Bank of Kiribati and limited services—cash culture strong. International cards patchy outside main strip.

Wire transfers can be slow—plan liquidity.

Limited ATMs—carry cash discipline.
`.trim(),

  healthcareInfo: `
Tungaru Central Hospital in Tarawa—complex cases evacuate to Fiji or further.

Bring prescription supplies; dengue present—nets and repellent.

Emergency transport constrained—insurance with medevac essential for expats.
`.trim(),

  culturalTips: `
Respect elders; shoes off in homes; modest dress in villages.

Noise and crowding on South Tarawa—personal space concepts differ.

Heat and humidity extreme—hydrate; coral cuts need antiseptic care.

Limited nightlife—community events replace bars.
`.trim(),

  realMonthlyCost: `
Example NGO/contractor package month (indicative if housing subsidised):

Rent (if paid): $500
Food (import-heavy): $350
Power / water: $80
Transport (fuel): $90
Phone (satellite backup): $70
Insurance: $120
Social: $80

Indicative total: ~$1,290 — many costs employer-covered in practice.
`.trim(),

  expatCommunities: [
    "Small diplomatic and NGO circles Tarawa",
    "Regional Pacific forums",
  ],

  prosAndCons: {
    pros: [
      "Meaningful development impact",
      "Unique culture and environment",
      "English administrative language",
      "Tight-knit expat community",
    ],
    cons: [
      "Very limited infrastructure",
      "Poor internet for remote-heavy work",
      "Healthcare limitations",
      "Isolation and import dependence",
      "Climate risk long-term",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "South Tarawa",
      neighbourhood: "Bairiki / Ambo area",
      description: "Services clustered—check king tide flooding zones.",
    },
  ],

  faqs: [
    {
      question: "Is Kiribati suitable for digital nomads?",
      answer:
        "Generally no—connectivity and housing stock make long online work difficult; it is a mission-driven destination more than a nomad hub.",
    },
  ],

  updated: "April 2026",
  wordCount: 1180,
};
