import type { CountryGuide } from "../types";

export const thailand: CountryGuide = {
  slug: "thailand",
  country: "Thailand",
  flag: "🇹🇭",
  continent: "Asia",
  capital: "Bangkok",
  currency: "THB",
  language: "Thai; English in tourist and business areas",
  timezone: "ICT (UTC+7)",
  visaDifficulty: "Medium",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 1200,
  seoTitle: "Working in Thailand: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Thailand for remote workers: Bangkok, Chiang Mai, Phuket — DTV, tourist extensions, cost of living, tax context, and practical tips for 2026.",
  highlights: [
    "Destination Thailand Visa (DTV) and long-stay categories — verify Royal Thai Immigration circulars",
    "Bangkok as regional hub — BTS/MRT expanding — traffic still painful",
    "Chiang Mai dry season smoke — air purifiers — nomad community mature",
    "Phuket west-coast seasonality — Patong noise vs quieter beaches",
    "Respect for monarchy and Buddhism — dress at temples — lese majeste laws strict",
  ],
  visaOptions: [
    {
      name: "Tourist visa / visa exemption",
      duration: "30–60 days depending on entry — extensions at immigration",
      cost: "Visa fee + extension stamps",
      requirements: "Funds proof sometimes — onward ticket — TM30 landlord reporting",
    },
    {
      name: "DTV (Destination Thailand Visa) where eligible",
      duration: "Long-stay pathway — categories evolve — official checklist",
      cost: "Visa fee + insurance",
      requirements: "Remote income or other qualifying routes — insurance minimums",
    },
    {
      name: "Non-B / work permits (local employer)",
      duration: "Tied to employer — renewals",
      cost: "Work permit fees",
      requirements: "Thai company sponsorship — quota rules",
    },
  ],
  cities: [
    {
      name: "Bangkok",
      vibe: "Megacity — Sukhumvit / Thonglor nomad pockets — river and malls",
      avgRent: "$450–$1,400/month",
      coworkingSpaces: "The Hive, Common Ground, Glowfish, hotel lobbies",
    },
    {
      name: "Chiang Mai",
      vibe: "Mountains — cafés — slower — burning season air quality issue",
      avgRent: "$350–$900/month",
      coworkingSpaces: "Punspace, Alt_ChiangMai, Nimman lanes",
    },
    {
      name: "Phuket",
      vibe: "Island infrastructure — beaches — rainy season — Patong vs Rawai trade-offs",
      avgRent: "$400–$1,100/month",
      coworkingSpaces: "Hatch, Regus, beach cafés with fibre checks",
    },
  ],
  costBreakdown: {
    rent: "$350–$1,300/month — Bangkok core vs island",
    food: "$200–$400/month — street vs imports",
    transport: "$40–$100/month — BTS/MRT + Grab",
    coworking: "$80–$200/month",
  },
  taxInfo:
    "Thai tax residency can arise after 180 days in a tax year — rules on foreign-sourced income remitted in year of receipt — remote workers on tourist visas rarely formalise — long-stay passes require a Thai tax advisor — PND forms if you trigger residency.",
  communityTips:
    "90-day reporting if on long visa — queue apps — TM30 headaches — choose landlords who know process. Songkran — waterproof phone — Loy Krathong — fireworks. Smile culture — calm avoids conflict — scooter licence checkpoints.",
  bestFor: ["Value", "Food", "Community", "Regional travel"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Royal Thai Immigration — extensions — dress respectfully — copies of passport, photos, landlord docs — queues long — VIP queues sometimes available — agents vary in quality.

DTV — embassy vs e-visa portals — insurance from approved lists — income evidence notarisation — translations.

Bank accounts — some banks require work permit or long-stay — Bangkok Bank / Kasikorn — Wise + foreign cards common for short stays.
`.trim(),

  bankingTips: `
PromptPay QR with local account — tourists use Wise + ATM withdrawals — ATM fees ~220 THB — maximise withdrawal size.

TrueMoney, Rabbit LINE Pay — KYC with local number — cash still king in markets.

Avoid card skimming — use bank lobby ATMs — notify bank of travel.
`.trim(),

  healthcareInfo: `
Bangkok Hospital, Bumrungrad — insurance mandatory — dental tourism — dengue — motorbike trauma — helmet discipline.

Chiang Mai smoke — HEPA filters — N95 — consider November–February only if asthma.

Emergency: 1669 — private ambulance if insured — Grab not always accepted at hospitals — cash deposit sometimes.
`.trim(),

  culturalTips: `
Wai greeting — feet away from heads — temples covered shoulders/knees — monks — women do not touch — quiet on public transport — royal imagery respect — alcohol hours vary by province — Buddhist holidays quiet commerce.
`.trim(),

  realMonthlyCost: `
Example month — Chiang Mai, Nimman:

Rent: $550
Utilities + fibre: $90
Scooter + fuel: $70
Food + markets: $280
Coworking: $110
Insurance: $70
Weekend trip: $120
Misc: $90

Indicative total: ~$1,380 — Bangkok Thonglor or Phuket west-coast +30–50%.
`.trim(),

  expatCommunities: [
    "Chiang Mai Digital Nomads",
    "Bangkok Expats Facebook",
    "Phuket Nomads boards",
  ],

  prosAndCons: {
    pros: [
      "Affordable lifestyle",
      "Food and culture",
      "Nomad infrastructure",
      "Domestic flights cheap",
    ],
    cons: [
      "Visa admin churn",
      "Air quality seasonal",
      "Traffic and heat",
      "Scooter risk",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Bangkok",
      neighbourhood: "Thonglor / Ekkamai",
      description:
        "Cafés — international schools — BTS-linked — higher rent — flood pockets rare but check.",
    },
    {
      city: "Chiang Mai",
      neighbourhood: "Nimman / Suthep foothills",
      description:
        "Nomad dense — fibre map — burning season AQI — choose building with sealed windows.",
    },
  ],

  faqs: [
    {
      question: "Chiang Mai or Bangkok?",
      answer:
        "Bangkok for flights and scale — Chiang Mai for cost and community — air quality swings CM — choose health sensitivity.",
    },
    {
      question: "Can I work remotely on a tourist visa?",
      answer:
        "Immigration focuses on local employment — remote work exists in grey zones — long bases should align visa category — get professional advice.",
    },
  ],

  updated: "April 2026",
  wordCount: 2400,
};
