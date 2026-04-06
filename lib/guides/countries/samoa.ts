import type { CountryGuide } from "../types";

export const samoa: CountryGuide = {
  slug: "samoa",
  country: "Samoa",
  flag: "🇼🇸",
  continent: "Oceania",
  capital: "Apia",
  currency: "WST",
  language: "Samoan / English",
  timezone: "WST (UTC+13)",
  visaDifficulty: "Medium",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1300,
  seoTitle: "Working in Samoa: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Samoa or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Independent Samoa (not American Samoa)—Apia hub",
    "Tourism, fisheries, and remittance-linked economy",
    "English widely used in business and government",
    "Faʻa Sāmoa culture—hierarchy and church central",
    "Scenic volcanic islands—cyclone season November–April",
  ],
  visaOptions: [
    {
      name: "Temporary resident permit (employment)",
      duration: "1 year renewable typical",
      cost: "WST fees",
      requirements: "Employer sponsorship, police clearance, medical",
    },
    {
      name: "Investor permits",
      duration: "Case-based",
      cost: "Legal fees",
      requirements: "Business plan and capital—verify thresholds",
    },
    {
      name: "Visitor permits",
      duration: "Short stay",
      cost: "Fees",
      requirements: "No work without authorisation",
    },
  ],
  cities: [
    {
      name: "Apia",
      vibe: "Harbour capital, markets, government",
      avgRent: "$600–$1,400/month",
      coworkingSpaces: "Hotel and library Wi‑Fi—informal hubs",
    },
    {
      name: "Vaitele / industrial belt",
      vibe: "Factories and logistics",
      avgRent: "$450–$900/month",
      coworkingSpaces: "N/A",
    },
  ],
  costBreakdown: {
    rent: "$500–$1,300/month",
    food: "$280–$500/month",
    transport: "$80–$180/month",
    coworking: "$100–$250/month",
  },
  taxInfo:
    "PAYE on employment; VAT on goods—remote income sourcing rules need local adviser if structuring offshore.",
  communityTips:
    "Sunday observance—most commerce stops; respect matai (chief) protocols in villages.",
  bestFor: ["Tourism & hospitality", "Development", "Pacific lifestyle"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Employer files for permits—arrive only after approval unless explicitly cleared as business visitor.

Cyclone repairs can disrupt utilities—backup power plans for remote work.

Bank references needed for housing—land tenure often customary—leases via formal titles preferred.

Driving on left—import vehicles costly; second-hand market active.

Renew permits annually—police certificates updated.
`.trim(),

  bankingTips: `
BSP Samoa, ANZ, National Bank of Samoa—WST accounts. ATMs in Apia; cash in villages.

Remittance corridors strong—fees compare before recurring sends.

Cards growing—carry cash for markets.

Wise may help with currency conversion from abroad.
`.trim(),

  healthcareInfo: `
Tupua Tamasese Meaole hospital in Apia—specialists limited.

Dengue outbreaks—mosquito control.

Medevac to NZ or Australia for complex cases—insurance critical.

Typhoid and hygiene—drink treated water.
`.trim(),

  culturalTips: `
Dress modestly—sulu common for formal settings.

Village visits require permission—bring small gifts as guided.

Rugby passion—social life orbits matches and church.

Heat and humidity—schedule outdoor work mornings.
`.trim(),

  realMonthlyCost: `
Example month Apia (single):

Rent: $950
Utilities: $110
Groceries: $360
Transport (bus + taxi): $120
Eating out: $200
Phone + data: $65
Insurance: $95
Weekend Savai'i trip: $150

Indicative total: ~$2,050 WST equivalent.
`.trim(),

  expatCommunities: [
    "Apia expat Facebook",
    "Regional Pacific forums",
    "Rugby and sailing clubs",
  ],

  prosAndCons: {
    pros: [
      "Welcoming culture",
      "English bureaucracy",
      "Natural beauty",
      "Lower pressure than global megacities",
      "Strong diaspora connections",
    ],
    cons: [
      "Limited high-salary private sector",
      "Cyclone disruption",
      "Import costs",
      "Sunday quiet limits commerce",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Apia",
      neighbourhood: "Vaiala / Vailima road",
      description: "Elevated breezes—check drainage in heavy rain.",
    },
  ],

  faqs: [
    {
      question: "How is internet for video calls?",
      answer:
        "Apia fibre improving—outer islands patchy; test connection before committing to remote-heavy roles.",
    },
  ],

  updated: "April 2026",
  wordCount: 1280,
};
