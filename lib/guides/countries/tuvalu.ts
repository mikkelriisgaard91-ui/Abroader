import type { CountryGuide } from "../types";

export const tuvalu: CountryGuide = {
  slug: "tuvalu",
  country: "Tuvalu",
  flag: "🇹🇻",
  continent: "Oceania",
  capital: "Funafuti",
  currency: "AUD",
  language: "Tuvaluan / English",
  timezone: "TVT (UTC+12)",
  visaDifficulty: "Medium",
  internetSpeed: "Poor",
  costOfLiving: "Medium",
  avgMonthlyCost: 1100,
  seoTitle: "Working in Tuvalu: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Tuvalu or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "One of the world’s smallest and lowest-lying nations—climate adaptation centre stage",
    "Government, telecom, and regional organisation jobs dominate expat presence",
    "English official—Tuvaluan daily language",
    "Narrow Funafuti atoll—limited land and housing",
    "Internet via satellite—latency affects real-time work",
  ],
  visaOptions: [
    {
      name: "Residence / work permits (employer-based)",
      duration: "Contract-linked",
      cost: "AUD fees",
      requirements: "Government or approved employer sponsorship",
    },
  ],
  cities: [
    {
      name: "Funafuti",
      vibe: "Single lagoon atoll administrative centre",
      avgRent: "$400–$1,000/month",
      coworkingSpaces: "None",
    },
  ],
  costBreakdown: {
    rent: "$400–$950/month",
    food: "$280–$480/month",
    transport: "$30–$80/month",
    coworking: "N/A",
  },
  taxInfo:
    "Public sector payroll common—tax treatment depends on employer structure—confirm for offshore clients.",
  communityTips:
    "Church and falekau (community halls) anchor life—cyclone drills serious business.",
  bestFor: ["Climate policy", "Public administration", "Telecom specialists"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Arrive only with secured contract—housing extremely limited; employer lodging often provided.

Medical clearance required—dengue risk—nets essential.

Supplies arrive by ship—order spares early.

Flights infrequent—book flexible tickets.

Respect data sovereignty discussions—digital nation projects evolving.
`.trim(),

  bankingTips: `
National Bank of Tuvalu—limited services. Cash heavy.

International cards not always accepted—AUD cash useful.

Wire transfers slow—maintain liquidity buffer.
`.trim(),

  healthcareInfo: `
Princess Margaret Hospital—basic services only.

Serious cases evacuate to Fiji or further—insurance mandatory.

Water security critical—rainwater tanks common—boil advisories after storms.

Limited dental—plan abroad visits.
`.trim(),

  culturalTips: `
Quiet island pace—relationships first.

Modest dress; church twice Sunday common.

Sea level rise existential—sensitivity in conversations.

Heat intense—seek shade midday; coral cuts need care.
`.trim(),

  realMonthlyCost: `
Example month Funafuti (single, unsubsidised):

Rent: $750
Food: $380
Power: $100
Bike / scooter fuel: $40
Phone + data: $70
Insurance: $100
Social: $60

Indicative total: ~$1,500 AUD — employer housing lowers sharply.
`.trim(),

  expatCommunities: [
    "Micro expat and diplomatic circle Funafuti",
  ],

  prosAndCons: {
    pros: [
      "Front-row seat on climate diplomacy",
      "Tight community",
      "English",
      "Unique natural environment",
    ],
    cons: [
      "Extreme isolation",
      "Poor connectivity for heavy online work",
      "Limited healthcare",
      "Narrow housing market",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Funafuti",
      neighbourhood: "Fogafale islet strip",
      description: "Main developed area—check king tide flooding.",
    },
  ],

  faqs: [
    {
      question: "Can digital nomads base here?",
      answer:
        "Not practically—latency, housing, and permit rules make it unsuitable for mainstream nomadism.",
    },
  ],

  updated: "April 2026",
  wordCount: 1020,
};
