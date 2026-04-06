import type { CountryGuide } from "../types";

export const tonga: CountryGuide = {
  slug: "tonga",
  country: "Tonga",
  flag: "🇹🇴",
  continent: "Oceania",
  capital: "Nukuʻalofa",
  currency: "TOP",
  language: "Tongan / English",
  timezone: "TOT (UTC+13)",
  visaDifficulty: "Medium",
  internetSpeed: "Average",
  costOfLiving: "Medium",
  avgMonthlyCost: 1200,
  seoTitle: "Working in Tonga: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Tonga or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Pacific kingdom—constitutional monarchy",
    "Agriculture, fisheries, and tourism",
    "English in schools and government",
    "Volcanic eruption recovery influenced housing stock—check current conditions",
    "Strong church and family hierarchy—Sunday rest sacred",
  ],
  visaOptions: [
    {
      name: "Work permit",
      duration: "1 year renewable",
      cost: "TOP fees",
      requirements: "Employer sponsorship, police clearance, medical",
    },
    {
      name: "Business licences",
      duration: "Varies",
      cost: "Legal fees",
      requirements: "Registered entity—lawyer recommended",
    },
    {
      name: "Visitor visas",
      duration: "Short",
      cost: "Fees",
      requirements: "No employment without permit",
    },
  ],
  cities: [
    {
      name: "Nukuʻalofa",
      vibe: "Main island Tongatapu—port and markets",
      avgRent: "$500–$1,200/month",
      coworkingSpaces: "TBC / hotel Wi‑Fi",
    },
    {
      name: "Neiafu (Vavaʻu)",
      vibe: "Yachting and whale season",
      avgRent: "$450–$1,000/month",
      coworkingSpaces: "Marina cafés",
    },
  ],
  costBreakdown: {
    rent: "$450–$1,100/month",
    food: "$250–$480/month",
    transport: "$70–$160/month",
    coworking: "$80–$200/month",
  },
  taxInfo:
    "Employment income withholding—business taxes apply to enterprises—consult local accountant for offshore clients.",
  communityTips:
    "Respect nobility titles—modest dress; women culturally expected to cover in certain settings—ask hosts.",
  bestFor: ["Yacht services", "Tourism", "Development"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Employer-led permits required—do not work on arrival visas without clearance.

Post-disaster rebuilding may affect housing—inspect structures carefully.

Inter-island ferries and flights—weather cancellations common.

Bank references for rentals—leases often cash-heavy quarterly.

Medical clearance standard—dengue risk—mosquito nets.
`.trim(),

  bankingTips: `
BSP Tonga, ANZ, MBf Bank—TOP accounts. ATMs in Nukuʻalofa; cash outer islands.

International transfers can take days—plan payroll.

Cards limited outside main town—carry cash.

Remittance fees compare before sending home.
`.trim(),

  healthcareInfo: `
Vaiola Hospital Tongatapu—specialists limited.

Medevac to NZ or Fiji for major issues—insurance essential.

Water quality variable—filter or bottled.

Snorkelling and boat safety—respect currents.
`.trim(),

  culturalTips: `
Sunday nearly everything closed—plan groceries Saturday.

Kava evenings—pace consumption; respect seating order.

Rugby unites—matches are social peaks.

Cyclone season—keep emergency kit and insurance updated.
`.trim(),

  realMonthlyCost: `
Example month Nukuʻalofa (single):

Rent: $850
Utilities: $100
Groceries: $320
Transport: $100
Phone + data: $60
Insurance: $90
Boat weekend Vavaʻu: $180

Indicative total: ~$1,700 TOP equivalent.
`.trim(),

  expatCommunities: [
    "Small yachting community Vavaʻu",
    "Regional development workers",
  ],

  prosAndCons: {
    pros: [
      "Authentic Polynesian culture",
      "English official",
      "Whale watching seasonal",
      "Community cohesion",
    ],
    cons: [
      "Limited private sector salaries",
      "Infrastructure fragility to disasters",
      "Internet not always fibre",
      "Import dependence",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Nukuʻalofa",
      neighbourhood: "Kolovai / waterfront",
      description: "Sea breeze—check drainage.",
    },
  ],

  faqs: [
    {
      question: "Is Tonga good for remote tech workers?",
      answer:
        "Only if you accept lower bandwidth and occasional outages—better for tourism or mission-driven roles than heavy video stacks.",
    },
  ],

  updated: "April 2026",
  wordCount: 1180,
};
