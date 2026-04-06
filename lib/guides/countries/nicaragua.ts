import type { CountryGuide } from "../types";

export const nicaragua: CountryGuide = {
  slug: "nicaragua",
  country: "Nicaragua",
  flag: "🇳🇮",
  continent: "North America",
  capital: "Managua",
  currency: "NIO (USD widely accepted)",
  language: "Spanish",
  timezone: "CST (UTC−6)",
  visaDifficulty: "Easy",
  internetSpeed: "Average",
  costOfLiving: "Low",
  avgMonthlyCost: 950,
  seoTitle: "Working in Nicaragua: Remote Worker & Expat Guide (2026)",
  seoDescription:
    "Nicaragua for remote workers: Granada, San Juan del Sur, political context, visas, and affordable living in 2026.",
  highlights: [
    "Colonial Granada and surf town San Juan del Sur — long-standing nomad stops",
    "Very affordable — infrastructure simpler than Costa Rica",
    "Political climate affects civil space — research current conditions before long stays",
    "Volcanoes and Pacific coast — compact geography",
    "Spanish essential — English limited outside tourism",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 90 days — extensions per immigration",
      cost: "Low",
      requirements: "Passport validity, onward ticket sometimes",
    },
    {
      name: "Residence / investment",
      duration: "Case-specific — legal counsel recommended",
      cost: "Fees + documentation",
      requirements: "Official immigration categories — verify embassy guidance",
    },
  ],
  cities: [
    {
      name: "Managua",
      vibe: "Sprawling capital — business services, traffic, heat",
      avgRent: "$400–$900/month",
      coworkingSpaces: "Limited — serviced offices — café work",
    },
    {
      name: "Granada",
      vibe: "Colonial architecture, volcano views, expat retirees",
      avgRent: "$450–$1,000/month",
      coworkingSpaces: "Small hubs — test bandwidth",
    },
    {
      name: "San Juan del Sur",
      vibe: "Surf town — backpacker and nomad mix — seasonal",
      avgRent: "$500–$1,200/month",
      coworkingSpaces: "Beach cafés — power backup matters",
    },
  ],
  costBreakdown: {
    rent: "$400–$1,200/month",
    food: "$200–$360/month",
    transport: "$30–$80/month",
    coworking: "$60–$140/month",
  },
  taxInfo:
    "Tax residency applies if you become resident — remote workers on short stays rarely trigger obligations — long-term bases need a Nicaraguan accountant.",
  communityTips:
    "Political discourse is sensitive — follow local news. Surf culture — respect lineups. Cash economy — small bills. Ferry to Ometepe — schedule around winds.",
  bestFor: ["Value", "Colonial towns", "Surf", "Budget lifestyle"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration extensions — queue early — carry copies. Overstays risk fines — settle before exit.

Residence categories require documentation — processing times vary — legal support common for investors.

Road travel — avoid night buses on some routes — ask locals current advice. Medical evacuation insurance — private hospitals in Managua.

Earthquake country — know exits.
`.trim(),

  bankingTips: `
BAC, Lafise, etc. — residents with documentation — tourists use foreign cards. ATMs in cities — fees vary — carry córdobas for buses.

USD often accepted — clarify exchange rate. Inform banks before travel.
`.trim(),

  healthcareInfo: `
Private hospitals in Managua — pay or insure. Coastal towns — clinics for basics — serious cases to capital.

Dengue — repellent. Tap water — filter in doubt.

Emergency: 128 ambulance — verify — response varies.
`.trim(),

  culturalTips: `
Warm greetings — family-first. Gallo pinto breakfast culture — enjoy local food. Punctuality flexes — government offices slow — patience and copies.

Respect for civil society — avoid careless hot takes online about local politics.
`.trim(),

  realMonthlyCost: `
Example month — Granada:

Rent: $600
Utilities + fibre: $65
Transport: $80
Groceries: $220
Eating out: $160
Coworking: $80
Spanish: $80
Insurance: $70
Misc: $90

Indicative total: ~$1,445. San Juan del Sur surfer season can raise rents.
`.trim(),

  expatCommunities: [
    "Nicaragua expat Facebook",
    "Granada community boards",
  ],

  prosAndCons: {
    pros: [
      "Very affordable",
      "Colonial charm",
      "Pacific surf",
    ],
    cons: [
      "Political context",
      "Infrastructure limits",
      "English rare",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Granada",
      neighbourhood: "Near calle la calzada",
      description:
        "Restaurant strip — tourist noise — scout nights before signing.",
    },
  ],

  faqs: [
    {
      question: "Nicaragua vs Costa Rica?",
      answer:
        "Nicaragua cheaper — fewer services — research current political climate before committing long-term.",
    },
  ],

  updated: "April 2026",
  wordCount: 1700,
};
