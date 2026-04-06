import type { CountryGuide } from "../types";

export const slovakia: CountryGuide = {
  slug: "slovakia",
  country: "Slovakia",
  flag: "🇸🇰",
  continent: "Europe",
  capital: "Bratislava",
  currency: "EUR",
  language: "Slovak",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Low",
  avgMonthlyCost: 1100,
  seoTitle: "Working in Slovakia: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Slovakia or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Affordable vs Vienna just across the river",
    "Carpathian mountains and hiking",
    "Growing shared services and automotive",
    "Fast internet in cities",
    "Euro currency",
  ],
  visaOptions: [
    {
      name: "National visa type D + residence",
      duration: "1–3 years",
      cost: "€100+",
      requirements: "Employment, business, study — standard documentation",
    },
    {
      name: "EU Blue Card",
      duration: "Job-linked",
      cost: "Fees",
      requirements: "Salary threshold, recognised education",
    },
  ],
  cities: [
    {
      name: "Bratislava",
      vibe: "Castle hill, Danube, day trip to Vienna",
      avgRent: "$700–$1,200/month",
      coworkingSpaces: "Impact Hub, Connect, Regus",
    },
    {
      name: "Košice",
      vibe: "Eastern tech growth, cheaper",
      avgRent: "$500–$850/month",
      coworkingSpaces: "Techbox, Coworking Košice",
    },
    {
      name: "Žilina",
      vibe: "Car industry, gateway to north",
      avgRent: "$450–$800/month",
      coworkingSpaces: "Local hubs",
    },
  ],
  costBreakdown: {
    rent: "$450–$1,200/month",
    food: "$220–$380/month",
    transport: "$25–$35/month",
    coworking: "$80–$180/month",
  },
  taxInfo:
    "19% flat tax on some business income types for micro companies — verify current rules with Slovak adviser.",
  communityTips:
    "Weekend trips to Vienna, High Tatras skiing, learn Slovak for local landlords.",
  bestFor: ["Value", "Mountains", "Central EU", "Fast internet"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Non-EU nationals typically secure a job offer or business case, obtain work permit where required, apply for national D visa, then collect temporary residence card at Foreign Police—Bratislava queues can be long.

EU Blue Card suits qualified employment meeting salary thresholds—compare with standard permit.

EU citizens register after three months—simple.

After arrival, obtain rodné číslo-style identity number for tax, health insurance via employer or self-payment, bank account.

Renew residence before expiry—track appointment slots online.

Remote foreign employment without Slovak entity is complex—work permits assume local contract or EU Blue Card rules.

Mountains weekend—remember Schengen clock if visa-national visiting neighbours.
`.trim(),

  bankingTips: `
Tatra banka, Slovenská sporiteľňa, VUB, and mBank serve retail. Euro accounts—no currency confusion with Austria.

Google Pay widespread; cash in villages.

Wise for USD income—declare if tax resident.

Mortgages need stable local income.

Landlords may want Slovak IBAN—open early.
`.trim(),

  healthcareInfo: `
Employer health insurance (public system) after registration—quality adequate; private clinics in Bratislava for English.

Emergency: 112. Ambulance service improving.

Dental: affordable private vs US.

Tatras hiking—injury insurance smart.

Pharmacies solid—EU prescriptions often accepted.
`.trim(),

  culturalTips: `
Slovak is close to Czech—politeness matters. Wine culture in south; beer in north.

Direct communication; hospitality generous when invited home.

Learn Slovak—English weaker outside Bratislava expat bubble.

Vienna day trips—use train. Tatras skiing—book early.

Tipping 10% restaurants; round taxis.

Historical ties sensitive—avoid lazy Czechoslovakia jokes unless invited banter.
`.trim(),

  realMonthlyCost: `
Example month in Bratislava (Petržalka / Ružinov):

Rent (one-bed): $850
Utilities + internet: $125
Transport pass: $30
Groceries: $240
Eating out: $170
Coworking: $95
Health insurance / co-pays: $50
Phone + software: $38
Weekend Vienna / culture: $100
Miscellaneous: $85

Indicative total: about $1,783.

Košice often 30% lower rent than Bratislava core.
`.trim(),

  expatCommunities: [
    "Internations Bratislava",
    "Foreigners Bratislava Facebook",
    "r/Slovakia",
    "Meetup Slovakia — hiking & tech",
    "Košice IT community",
    "Vienna-Bratislava commuters",
    "Tatras outdoor clubs",
    "American Chamber Slovakia",
  ],

  prosAndCons: {
    pros: [
      "Affordable vs Vienna 1h away",
      "Euro currency stability",
      "Mountain access High Tatras",
      "Growing IT and shared services",
      "Fast internet",
      "Central Europe travel",
      "Safe cities generally",
      "Good beer and wine",
      "EU Schengen member",
      "Compact—short commutes",
    ],
    cons: [
      "Slovak language needed outside capital",
      "Smaller job market than Prague",
      "Foreign police queues",
      "Public sector wages low—context",
      "Bratislava housing shortage",
      "Some rural brain drain",
      "Political climate debated—stay neutral",
      "Limited flight network vs hubs",
      "Winters cold in mountains",
      "Integration slower without language",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Bratislava",
      neighbourhood: "Staré Mesto",
      description: "Old town, touristy, central—$800–$1,300.",
    },
    {
      city: "Bratislava",
      neighbourhood: "Ružinov",
      description: "Residential, lake, families—$750–$1,150.",
    },
    {
      city: "Košice",
      neighbourhood: "Centrum",
      description: "Walkable, cheaper—$500–$850.",
    },
  ],

  faqs: [
    {
      question: "Day trip to Vienna?",
      answer:
        "Yes—hour by train—many live Bratislava work regionally—check tax implications if cross-border commuting.",
    },
    {
      question: "Is English enough?",
      answer:
        "In Bratislava corporate roles often yes—elsewhere learn Slovak.",
    },
    {
      question: "EU Blue Card benefits?",
      answer:
        "Mobility within EU after holding card—compare salary floors with standard permit.",
    },
    {
      question: "Tatras distance?",
      answer:
        "Few hours north—weekend skiing and hiking world-class for price.",
    },
    {
      question: "Cost vs Vienna?",
      answer:
        "Bratislava significantly cheaper rent—salaries lower too if local job.",
    },
    {
      question: "Safety?",
      answer:
        "Generally high—standard urban awareness.",
    },
  ],

  updated: "April 2026",
  wordCount: 1820,
};
