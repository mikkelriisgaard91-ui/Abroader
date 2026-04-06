import type { CountryGuide } from "../types";

export const bahamas: CountryGuide = {
  slug: "bahamas",
  country: "Bahamas",
  flag: "🇧🇸",
  continent: "Caribbean",
  capital: "Nassau",
  currency: "BSD (pegged 1:1 with USD)",
  language: "English",
  timezone: "EST (UTC−5) / DST in some islands",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "High",
  avgMonthlyCost: 3200,
  seoTitle: "Working in The Bahamas: Remote Worker Guide (2026)",
  seoDescription:
    "The Bahamas for remote workers: Nassau, Freeport, Exuma, BEADS and investment routes, hurricane season, and island-hopping logistics.",
  highlights: [
    "English official — USD economy — financial services heritage",
    "Island chain — Nassau/Paradise vs Out Islands totally different pace",
    "Hurricane season — insurance and generator culture on some islands",
    "Tourism and second homes — seasonal price swings",
    "Direct US flights — popular with North American remote workers",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 90 days — extensions per immigration",
      cost: "Low",
      requirements: "Passport, onward ticket — yacht arrival rules differ",
    },
    {
      name: "Annual residence / investment categories",
      duration: "Case-specific — BEADS-style programmes evolved — verify current law",
      cost: "Fees + legal counsel standard",
      requirements: "Investment thresholds, background checks — official portal only",
    },
  ],
  cities: [
    {
      name: "Nassau",
      vibe: "New Providence — cruise hub, cable beach resorts, traffic",
      avgRent: "$1,500–$3,500/month",
      coworkingSpaces: "Regus, café work — fibre in newer towers",
    },
    {
      name: "Freeport",
      vibe: "Grand Bahama — slower than Nassau — port and industrial mix",
      avgRent: "$1,000–$2,400/month",
      coworkingSpaces: "Limited — serviced offices",
    },
    {
      name: "George Town (Exuma)",
      vibe: "Out Islands — yachting, turquoise water — limited services",
      avgRent: "$1,200–$2,800/month",
      coworkingSpaces: "Resort Wi‑Fi — satellite backup for heavy calls",
    },
  ],
  costBreakdown: {
    rent: "$1,000–$3,500/month",
    food: "$450–$750/month — imports premium",
    transport: "$80–$200/month — car or inter-island flights",
    coworking: "$150–$300/month",
  },
  taxInfo:
    "Bahamas has no income tax for individuals in the traditional sense — but national insurance, property taxes, and residency programmes have specific rules — professional advice essential before claiming tax outcomes.",
  communityTips:
    "Island time is real — patience with government offices. Boating etiquette — conch seasons and marine park rules. Dorian recovery lessons — ask about building codes and elevation.",
  bestFor: ["USD economy", "Boating", "US proximity", "Warm winters"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration for extensions — Nassau offices — complete folders — overstays risk bans — pay fines before exit.

Yacht in/out formalities — customs and immigration clearance — use official ports of entry.

Property purchases — use reputable attorneys — title insurance matters on Family Islands.
`.trim(),

  bankingTips: `
Major Bahamian banks — international correspondent relationships — KYC strict. Cards work in Nassau — cash on smaller cays — ATM fees on Family Islands.

Wise may not offer BSD — USD settlement straightforward.
`.trim(),

  healthcareInfo: `
Private hospitals in Nassau — serious cases may fly to US — insurance with medevac essential on Out Islands.

Dengue — screens. Sun and dehydration — serious for newcomers.

Emergency: 911/919 — verify island-specific numbers.
`.trim(),

  culturalTips: `
Junkanoo culture — respect as heritage, not costume party prop. Hurricane stories are personal — listen more than you compare. Tipping ~15% in restaurants if not included.
`.trim(),

  realMonthlyCost: `
Example month — Nassau, mid-tier condo:

Rent: $2,200
Utilities + fibre: $200
Car + fuel: $280
Groceries: $520
Eating out: $450
Coworking: $200
Insurance: $150
Boat day / island hop: $200
Misc: $150

Indicative total: ~$4,350 — Exuma or Abacos can differ sharply.
`.trim(),

  expatCommunities: ["Bahamas expat Facebook", "Sailing forums"],

  prosAndCons: {
    pros: ["English", "USD", "Beaches", "US flights"],
    cons: ["Cost", "Hurricane risk", "Island logistics"],
  },

  bestNeighbourhoods: [
    {
      city: "Nassau",
      neighbourhood: "Cable Beach / West Bay Street",
      description: "Resort strip — services — compare flood zones historically.",
    },
  ],

  faqs: [
    {
      question: "Which island to base on?",
      answer:
        "Nassau for services and flights — Out Islands for nature — research ferry/plane costs before committing.",
    },
  ],

  updated: "April 2026",
  wordCount: 1700,
};
