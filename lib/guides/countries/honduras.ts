import type { CountryGuide } from "../types";

export const honduras: CountryGuide = {
  slug: "honduras",
  country: "Honduras",
  flag: "🇭🇳",
  continent: "North America",
  capital: "Tegucigalpa",
  currency: "HNL (USD sometimes in tourism)",
  language: "Spanish; Garifuna and Indigenous languages regionally",
  timezone: "CST (UTC−6)",
  visaDifficulty: "Easy",
  internetSpeed: "Average",
  costOfLiving: "Low",
  avgMonthlyCost: 1000,
  seoTitle: "Working in Honduras: Remote Worker & Expat Guide (2026)",
  seoDescription:
    "Honduras for remote workers: Tegucigalpa, San Pedro Sula, Roatán, visas, safety context, and island vs mainland trade-offs.",
  highlights: [
    "Bay Islands — Roatán diving and cruise tourism — different world from mainland",
    "Mainland cities are business hubs — research current neighbourhood safety carefully",
    "Copán Maya ruins — weekend cultural trips",
    "Affordable — but infrastructure and governance vary",
    "Spanish essential — English stronger on Roatán",
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
      requirements: "Official immigration categories — verify with embassy",
    },
  ],
  cities: [
    {
      name: "Tegucigalpa",
      vibe: "Mountain capital — traffic, cooler air, government and NGO presence",
      avgRent: "$450–$1,000/month",
      coworkingSpaces: "Limited — business cafés — verify fibre",
    },
    {
      name: "San Pedro Sula",
      vibe: "Industrial and logistics hub — hot lowlands — business travellers",
      avgRent: "$400–$950/month",
      coworkingSpaces: "Sparse — serviced offices in commercial zones",
    },
    {
      name: "Roatán",
      vibe: "Island diving — expat dive pros, cruise crowds, humid",
      avgRent: "$600–$1,500/month",
      coworkingSpaces: "Minimal — resort Wi‑Fi varies — test before signing",
    },
  ],
  costBreakdown: {
    rent: "$400–$1,500/month",
    food: "$200–$380/month",
    transport: "$30–$100/month",
    coworking: "$60–$140/month",
  },
  taxInfo:
    "Tax residency applies if you become resident — remote workers on short stays rarely trigger obligations — long-term bases need a Honduran accountant familiar with international income.",
  communityTips:
    "Mainland safety requires hyper-local advice — vary routines, avoid displaying valuables, use trusted transport. Roatán is tourism-oriented — still use common sense. Garifuna culture on coast — respect drumming and festivals.",
  bestFor: ["Diving", "Value", "NGO / development circles", "Island vs mainland choice"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration extensions — queue early, carry copies. Overstays risk fines — settle before flights.

ZEDE history on Roatán — legal landscape changed — verify property and visa rules with current counsel before investing.

Medical evacuation insurance — island diving injuries and mainland care gaps. Private hospitals in major cities.

Dengue — repellent. Tap water — filter in doubt.
`.trim(),

  bankingTips: `
Banco Atlántida, BAC, etc. — residents with ID — tourists use foreign cards. ATMs in cities — fees vary — carry lempiras for buses.

Island ATMs may run dry — cash buffer. Inform banks before travel.
`.trim(),

  healthcareInfo: `
Private hospitals in San Pedro Sula and Tegucigalpa — pay or insure. Roatán clinics for basics — serious cases may airlift.

Hyperbaric chamber access for divers — confirm location. Emergency numbers — verify locally — response varies.

Mental health resources limited — telehealth abroad may supplement.
`.trim(),

  culturalTips: `
Football passion — join conversations carefully. Baleadas culture — enjoy local food. Punctuality flexes — government offices painfully slow — bring water and patience.

Hurricane season — September–November — island infrastructure risk — insurance and backup plans.
`.trim(),

  realMonthlyCost: `
Example month — Roatán, modest dive-town profile:

Rent: $900
Utilities + backup internet: $120
Scooter / taxi: $100
Groceries + imports: $340
Eating out: $220
Dive gear / maintenance: $100
Insurance: $95
Misc: $90

Indicative total: ~$1,965. Mainland cities can be 30–50% lower excluding security transport costs.
`.trim(),

  expatCommunities: [
    "Roatán expat forums",
    "Bay Islands Facebook groups",
  ],

  prosAndCons: {
    pros: [
      "Affordable",
      "World-class diving on Roatán",
      "Garifuna culture",
    ],
    cons: [
      "Mainland safety requires research",
      "Infrastructure uneven",
      "Island costs and hurricane risk",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Roatán",
      neighbourhood: "West End vs West Bay",
      description:
        "West Bay quieter beaches — West End more social — test Wi‑Fi and generator noise before leases.",
    },
  ],

  faqs: [
    {
      question: "Mainland or island?",
      answer:
        "Islands for diving and tourism services — mainland for regional business — totally different risk and lifestyle profiles.",
    },
  ],

  updated: "April 2026",
  wordCount: 1750,
};
