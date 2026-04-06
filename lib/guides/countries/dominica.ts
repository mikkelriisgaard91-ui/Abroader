import type { CountryGuide } from "../types";

export const dominica: CountryGuide = {
  slug: "dominica",
  country: "Dominica",
  flag: "🇩🇲",
  continent: "Caribbean",
  capital: "Roseau",
  currency: "XCD (USD widely used)",
  language: "English; French Creole widely spoken",
  timezone: "AST (UTC−4)",
  visaDifficulty: "Easy",
  internetSpeed: "Average",
  costOfLiving: "Low",
  avgMonthlyCost: 1400,
  seoTitle: "Working in Dominica: Remote Worker Guide (2026)",
  seoDescription:
    "Dominica (Nature Island) for remote workers: Roseau, rainforests, geothermal context, citizenship-by-investment history, and island logistics.",
  highlights: [
    "Lush volcanic island — hiking, rivers, less beach-focused than neighbours",
    "Small population — tight-knit — relationships matter",
    "Hurricane history — resilience infrastructure improving — still plan insurance",
    "Citizenship-by-investment programme exists — distinct from living as tourist",
    "Internet improving but not Barbados-tier — mobile backup essential",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 21–90 days — verify stamp",
      cost: "Low",
      requirements: "Onward ticket sometimes",
    },
    {
      name: "Long-stay / work",
      duration: "Case-specific",
      cost: "Fees + legal support",
      requirements: "Employer or investment — immigration office",
    },
  ],
  cities: [
    {
      name: "Roseau",
      vibe: "Capital between mountains and sea — cruise days busy",
      avgRent: "$500–$1,100/month",
      coworkingSpaces: "Minimal — café work",
    },
    {
      name: "Portsmouth",
      vibe: "North — quieter — Indian River tours",
      avgRent: "$450–$950/month",
      coworkingSpaces: "Home office",
    },
    {
      name: "Calibishie",
      vibe: "Village — Atlantic side — slower",
      avgRent: "$400–$850/month",
      coworkingSpaces: "Rare",
    },
  ],
  costBreakdown: {
    rent: "$400–$1,100/month",
    food: "$250–$420/month",
    transport: "$40–$100/month",
    coworking: "$60–$130/month",
  },
  taxInfo:
    "Tax residency rules apply if you become resident — short tourists rarely trigger — consult local advisor for investment or long stays.",
  communityTips:
    "Creole culture — respect bouyon festivals. Roads wind — motion sickness possible. Boiling Lake hikes — use guides — weather changes fast.",
  bestFor: ["Nature", "Hiking", "Quiet", "Value"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration extensions — Roseau — carry documents — overstays risk fines.

Landslide and storm protocols — follow NEMO advisories — emergency kit at home.
`.trim(),

  bankingTips: `
Eastern Caribbean banks — cards in Roseau — cash on country roads — small XCD bills.

ATMs limited outside capital — plan cash buffers.
`.trim(),

  healthcareInfo: `
Princess Margaret Hospital — basic to moderate — serious cases may evacuate — insurance essential.

Chikungunya/dengue history — repellent. Leptospirosis in rivers — follow local warnings.

Emergency: 999 — verify — response times vary in interior.
`.trim(),

  culturalTips: `
Not Dominican Republic — locals correct confusion politely — listen. Sunday quiet — church influence. Modest dress in Roseau centre.
`.trim(),

  realMonthlyCost: `
Example month — Roseau area:

Rent: $700
Utilities + LTE backup: $100
Transport: $70
Groceries: $280
Eating out: $180
Insurance: $85
Hiking / tours: $120
Misc: $80

Indicative total: ~$1,615.
`.trim(),

  expatCommunities: ["Dominica expat Facebook"],

  prosAndCons: {
    pros: ["Nature", "Affordable", "Authentic island life"],
    cons: ["Limited services", "Weather risk", "Average internet"],
  },

  bestNeighbourhoods: [
    {
      city: "Roseau",
      neighbourhood: "Pottersville",
      description: "Hillside breezes — verify road access in rains.",
    },
  ],

  faqs: [
    {
      question: "Dominica vs Dominican Republic?",
      answer:
        "Different country — different language mix — Dominica is English Creole — much smaller — nature-first not resort-first.",
    },
  ],

  updated: "April 2026",
  wordCount: 1500,
};
