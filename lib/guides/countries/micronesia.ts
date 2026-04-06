import type { CountryGuide } from "../types";

export const micronesia: CountryGuide = {
  slug: "micronesia",
  country: "Federated States of Micronesia",
  flag: "🇫🇲",
  continent: "Oceania",
  capital: "Palikir (Pohnpei)",
  currency: "USD",
  language: "English / local languages",
  timezone: "Chuuk +10 / Pohnpei +11 / Kosrae +11 / Yap +10",
  visaDifficulty: "Medium",
  internetSpeed: "Average",
  costOfLiving: "Medium",
  avgMonthlyCost: 1300,
  seoTitle: "Working in the Federated States of Micronesia: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in the Federated States of Micronesia or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Four states—Chuuk, Kosrae, Pohnpei, Yap—each distinct",
    "Compact of Free Association with US shapes visas and aid flows",
    "English official—government and education roles common for expats",
    "Tourism niche in Yap and diving—limited scale",
    "Logistics and shipping cycles define daily life",
  ],
  visaOptions: [
    {
      name: "Entry permit / employment authorisation",
      duration: "Employer-linked",
      cost: "USD fees",
      requirements: "Employer sponsorship; police and medical checks",
    },
    {
      name: "Business visitor extensions",
      duration: "Short",
      cost: "Fees",
      requirements: "No unauthorised work—consult immigration office",
    },
  ],
  cities: [
    {
      name: "Pohnpei",
      vibe: "Administrative centre, rainforests, ruins",
      avgRent: "$600–$1,400/month",
      coworkingSpaces: "Limited—hotel lobbies",
    },
    {
      name: "Chuuk (Weno)",
      vibe: "Lagoon diving, shipwrecks—tourism micro",
      avgRent: "$500–$1,000/month",
      coworkingSpaces: "N/A",
    },
    {
      name: "Yap",
      vibe: "Traditional culture strong, stone money",
      avgRent: "$500–$1,100/month",
      coworkingSpaces: "N/A",
    },
  ],
  costBreakdown: {
    rent: "$500–$1,300/month",
    food: "$300–$550/month",
    transport: "$60–$150/month",
    coworking: "Minimal",
  },
  taxInfo:
    "Formal employment often FICA-like deductions under Compact rules for US-linked payroll—confirm with employer HR.",
  communityTips:
    "State-level customs differ—learn local leadership protocols before meetings.",
  bestFor: ["US-affiliated contractors", "Dive industry", "Development"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Most expatriates arrive via federal/state government programmes, education placements, or NGOs. Obtain written clearance before working.

Inter-island travel is flight-dependent—weather delays common.

Medical facilities basic—serious cases refer to Guam or Hawaii.

Driver licences and vehicle import costly—budget accordingly.

Renew permits through employer—maintain valid passport.
`.trim(),

  bankingTips: `
Bank of Guam, Bank of FSM—USD economy. ATMs limited outside main towns.

Carry cash backup for outer islands.

International wires can take days—plan payroll buffers.
`.trim(),

  healthcareInfo: `
State hospitals on main islands—specialists scarce.

Dengue and typhoid risks—vaccinations per travel clinic.

Dive medical kits if working on boats—decompression planning critical.

Insurance with evacuation coverage essential.
`.trim(),

  culturalTips: `
Respect traditional leaders—ask permission before entering villages.

Alcohol rules vary—some areas dry Sundays.

Conservative dress; photography may need consent at cultural sites.

Typhoon exposure—track seasonal forecasts.
`.trim(),

  realMonthlyCost: `
Example month Pohnpei (single):

Rent: $1,000
Utilities: $150
Groceries: $420
Eating out: $180
Transport: $120
Phone + data: $80
Insurance: $110
Travel between states: $200

Indicative total: ~$2,260 USD.
`.trim(),

  expatCommunities: [
    "FSM education and health sector expats",
    "Dive operator networks",
  ],

  prosAndCons: {
    pros: [
      "USD stability",
      "Stunning diving and nature",
      "English bureaucracy",
      "Community-oriented life",
    ],
    cons: [
      "Inter-island travel cost",
      "Limited high-bandwidth connectivity",
      "Healthcare gaps",
      "Narrow private sector",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Pohnpei",
      neighbourhood: "Kolonia area",
      description: "Services and harbour—check flooding in heavy rain.",
    },
  ],

  faqs: [
    {
      question: "Which state is best for tech workers?",
      answer:
        "Pohnpei has the most admin infrastructure, but remote tech roles are rare—expect government/NGO or offline-heavy work.",
    },
  ],

  updated: "April 2026",
  wordCount: 1260,
};
