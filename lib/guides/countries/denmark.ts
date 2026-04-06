import type { CountryGuide } from "../types";

export const denmark: CountryGuide = {
  slug: "denmark",
  country: "Denmark",
  flag: "🇩🇰",
  continent: "Europe",
  capital: "Copenhagen",
  currency: "DKK",
  language: "Danish",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Hard",
  internetSpeed: "Excellent",
  costOfLiving: "Very High",
  avgMonthlyCost: 3000,
  seoTitle: "Working Remotely in Denmark 2026 — Pay Limit Scheme & Copenhagen",
  seoDescription:
    "Denmark remote work: positive list / pay limit schemes, Copenhagen and Aarhus costs, hygge lifestyle and taxes.",
  highlights: [
    "Strong work-life balance and bike culture",
    "English widely spoken professionally",
    "Pay Limit Scheme for high earners",
    "Excellent healthcare when registered",
    "Design and green energy leadership",
  ],
  visaOptions: [
    {
      name: "Pay Limit Scheme",
      duration: "4 years pathway",
      cost: "DKK fees",
      requirements: "Salary above high threshold with Danish employer",
    },
    {
      name: "Positive list (shortage jobs)",
      duration: "Job-linked",
      cost: "Fees",
      requirements: "Offer in shortage occupation",
    },
  ],
  cities: [
    {
      name: "Copenhagen",
      vibe: "Canals, Michelin dining, cycling",
      avgRent: "$1,500–$2,600/month",
      coworkingSpaces: "Republikken, Spaces, SOHO",
    },
    {
      name: "Aarhus",
      vibe: "Second city, younger crowd",
      avgRent: "$1,000–$1,800/month",
      coworkingSpaces: "INCUBA, The Kitchen",
    },
    {
      name: "Odense",
      vibe: "Smaller, robotics hub",
      avgRent: "$850–$1,400/month",
      coworkingSpaces: "Storm P",
    },
  ],
  costBreakdown: {
    rent: "$850–$2,600/month",
    food: "$400–$620/month",
    transport: "$70–$90/month (Rejsekort)",
    coworking: "$230–$420/month",
  },
  taxInfo:
    "High taxes fund services; 8% labour market contribution then progressive rates — get SKAT guidance.",
  communityTips:
    "Join sports clubs (forening) for friends, learn Danish for integration points, start housing search early.",
  bestFor: ["Work-life balance", "Design", "Cycling cities", "Family benefits"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Non-EU/EEA nationals usually need a concrete job offer from a Danish employer that fits a residence scheme—Pay Limit Scheme (high salary), Positive List (shortage occupations), Fast Track company routes, or other specialised categories. The employer often initiates SIRI (Danish Agency for International Recruitment and Integration) workflows; you submit biometrics, passport, contract, and education proofs.

EU citizens register under EU rules after arrival with proof of work or sufficient means.

After approval, obtain CPR number (central person register), MitID digital identity, health insurance card (yellow card), and bank account—order matters; employers often help.

Renew or extend before expiry; job loss can affect permit—check grace rules.

Remote work for non-Danish employers without local sponsorship is not the norm for these permits—verify legal basis.

Study-to-work transitions exist for graduates—separate rules apply.
`.trim(),

  bankingTips: `
Danske Bank, Nordea, Jyske Bank, and Lunar serve retail. MitID unlocks banking and tax—obtain after CPR.

MobilePay dominates P2P—Danish phone number helps.

DKK not euro—budget FX. Wise for receiving USD/GBP—declare if tax resident.

Cash rare; cards and MobilePay universal.

Housing deposits often three months—liquidity plan early.

Cross-border workers from Sweden/Germany have special tax rules—adviser needed.
`.trim(),

  healthcareInfo: `
Tax-funded healthcare with GP (almen praktiserende læge) gatekeeping once registered—yellow card is key.

Emergency: 112. Private insurance uncommon—public quality high; waits for elective procedures exist.

Dental: expensive for adults—supplemental insurance or budget.

Mental health: improving—GP referral for psychologist.

Pharmacies (apotek) strong; prescriptions digital.

Bike injuries common—helmets and lights mandatory by culture if not always law everywhere—ride defensively in Copenhagen rain.
`.trim(),

  culturalTips: `
Hygge (coziness) is not a joke—candles, friends, cake. Punctuality matters; meetings end on time for daycare pickup.

Bikes rule—learn hand signals and don't block cargo bike lanes. Janteloven similar to Sweden—modesty valued.

Danish humour is dry—embrace irony. Friday beer (fredagsbar) in workplaces builds bonds.

Learn Danish for integration points and deeper belonging—free kommune courses exist.

Tipping not expected—service included. Christmas markets and Tivoli anchor winter joy.
`.trim(),

  realMonthlyCost: `
Example month in Copenhagen (single, non-luxury):

Rent (one-bed): $1,850
Utilities + internet: $145
Rejsekort transport: $85
Groceries: $450
Eating out / smørrebrød: $300
Coworking: $250
Phone + software: $52
Gym / swimming: $80
Miscellaneous: $140

Indicative total: about $3,352.

Aarhus and Odense often 20–30% lower rent; DKK rate affects USD totals.
`.trim(),

  expatCommunities: [
    "Internations Copenhagen & Aarhus",
    "Americans in Denmark Facebook",
    "r/Denmark",
    "Meetup Denmark — cycling & design",
    "Copenhagen International Hub",
    "Aarhus Internationals",
    "Danish language study groups",
    "Green energy sector meetups",
  ],

  prosAndCons: {
    pros: [
      "World-class work-life balance",
      "Bike infrastructure and flat cities",
      "English in professional life",
      "Strong healthcare and parental systems",
      "Design and sustainability leadership",
      "Compact cities—short commutes",
      "Low corruption and high trust",
      "EU access for EU citizens",
      "Growing tech and life sciences",
      "Hygge culture supports wellbeing",
    ],
    cons: [
      "Very high taxes and living costs",
      "Housing shortage in Copenhagen",
      "Weather grey and windy",
      "Permits require Danish employer schemes",
      "Integration can feel slow without Danish",
      "High car taxes if you need one",
      "Remote foreign employment rarely fits permits",
      "Long winter nights",
      "Competitive rental references",
      "Strict tenancy rules—read contracts",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Copenhagen",
      neighbourhood: "Nørrebro",
      description: "Diverse, food scene, creative—$1,400–$2,200 one-bed.",
    },
    {
      city: "Copenhagen",
      neighbourhood: "Østerbro",
      description: "Families, waterfront, calmer—$1,600–$2,500.",
    },
    {
      city: "Aarhus",
      neighbourhood: "Latinerkvarteret",
      description: "Cafés, students, compact—$1,000–$1,700.",
    },
  ],

  faqs: [
    {
      question: "Is Copenhagen cheaper than London?",
      answer:
        "Often similar or higher for rent—salaries and taxes differ; model net disposable income carefully.",
    },
    {
      question: "Do I need Danish?",
      answer:
        "Professionally often no initially; long-term life and citizenship integration require Danish courses and exams.",
    },
    {
      question: "Can EU citizens move easily?",
      answer:
        "Yes—register under EU rules; obtain CPR and MitID.",
    },
    {
      question: "How hard is housing?",
      answer:
        "Very in Copenhagen—start early, use reputable sites, watch scams.",
    },
    {
      question: "Are taxes really high?",
      answer:
        "Yes—top rates are steep but services and benefits are comprehensive—many residents accept the trade-off.",
    },
    {
      question: "Is Denmark safe?",
      answer:
        "Among the safest globally—bike theft is common urban nuisance.",
    },
  ],

  updated: "April 2026",
  wordCount: 1960,
};
