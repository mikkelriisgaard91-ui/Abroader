import type { CountryGuide } from "../types";

export const nauru: CountryGuide = {
  slug: "nauru",
  country: "Nauru",
  flag: "🇳🇷",
  continent: "Oceania",
  capital: "Yaren (district)",
  currency: "AUD",
  language: "Nauruan / English",
  timezone: "NRT (UTC+12)",
  visaDifficulty: "Medium",
  internetSpeed: "Average",
  costOfLiving: "Medium",
  avgMonthlyCost: 1200,
  seoTitle: "Working in Nauru: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Nauru or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Single island nation—phosphate history shapes economy",
    "Government, regional processing, and utilities employ most expats",
    "English widely used officially",
    "Extremely small housing market—employer-provided common",
    "Limited leisure—tight-knit social scene",
  ],
  visaOptions: [
    {
      name: "Employment clearance (contract-based)",
      duration: "Contract term",
      cost: "AUD fees",
      requirements: "Employer sponsorship—often government or agency",
    },
    {
      name: "Visitor permits",
      duration: "Short",
      cost: "Fees",
      requirements: "No employment without authorisation",
    },
  ],
  cities: [
    {
      name: "Yaren / Aiwo corridor",
      vibe: "Entire island ~21 km²—one coastal ring road",
      avgRent: "$500–$1,200/month",
      coworkingSpaces: "None",
    },
  ],
  costBreakdown: {
    rent: "$500–$1,100/month",
    food: "$300–$500/month",
    transport: "$40–$100/month",
    coworking: "N/A",
  },
  taxInfo:
    "Payroll tax may apply—many packages structured by employer; confirm residency status for worldwide income.",
  communityTips:
    "Football popular; respect church schedules; limited anonymity—everyone knows everyone.",
  bestFor: ["Specialist contractors", "Public sector", "Regional policy"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Do not arrive seeking casual work—permits are tied to named employers. Medical and police checks standard.

Housing stock tiny—negotiate housing in contract.

Imports arrive by sea—stock non-perishables thoughtfully.

Departure tax and flight frequency limited—book tickets early.

Confidentiality rules may apply to certain roles—follow employment terms strictly.
`.trim(),

  bankingTips: `
Bank of Nauru—AUD. Cash culture; limited merchant terminals.

International transfers can be slow—maintain buffer.

ATMs limited—plan cash needs.
`.trim(),

  healthcareInfo: `
Republic of Nauru hospital—complex cases evacuate to Australia.

Non-communicable disease prevalence high—healthy lifestyle focus.

Dengue risk—mosquito protection.

Emergency: local clinic numbers—ambulance capacity limited.
`.trim(),

  culturalTips: `
Pacific friendliness with strong family networks.

Heat and humidity constant—AC prized.

Limited beaches for swimming due to reef and infrastructure—ask locals safe spots.

Respect political sensitivities—small society debates are personal.
`.trim(),

  realMonthlyCost: `
Example month (single, contract housing not included):

Rent: $900
Food (import-heavy): $400
Power: $120
Fuel / scooter: $80
Phone + data: $70
Insurance: $100
Miscellaneous: $100

Indicative total: ~$1,770 AUD — subsidised housing reduces sharply.
`.trim(),

  expatCommunities: [
    "Very small expat circle on island",
  ],

  prosAndCons: {
    pros: [
      "Unique professional experience",
      "English",
      "No commute—short drives",
      "Strong community bonds",
    ],
    cons: [
      "Isolation and limited services",
      "Narrow labour market",
      "Privacy limited",
      "Import dependence",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Nauru",
      neighbourhood: "Coastal districts near airport",
      description: "Breeze helps heat—check noise from flight path.",
    },
  ],

  faqs: [
    {
      question: "Is Nauru suitable for remote workers?",
      answer:
        "Only if your employer posts you there—connectivity and housing make it impractical for self-directed nomads.",
    },
  ],

  updated: "April 2026",
  wordCount: 1050,
};
