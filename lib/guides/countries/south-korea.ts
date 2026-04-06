import type { CountryGuide } from "../types";

export const southKorea: CountryGuide = {
  slug: "south-korea",
  country: "South Korea",
  flag: "🇰🇷",
  continent: "Asia",
  capital: "Seoul",
  currency: "KRW",
  language: "Korean; English uneven outside Seoul",
  timezone: "KST (UTC+9)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2200,
  seoTitle: "Working in South Korea: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "South Korea for remote workers: Seoul, Busan, Jeju — K-ETA, housing, tax, healthcare, and practical tips for 2026.",
  highlights: [
    "K-ETA or visa-free windows — verify passport list — Jeju visa-free zone rules for some nationalities",
    "World-class internet — PC bang culture — delivery apps dominant",
    "Seoul deposit culture — jeonse vs wolse — agent fees",
    "Busan coastal — lower rent than Gangnam — humid summers",
    "Jeju island pace — growing remote crowd — typhoon season",
  ],
  visaOptions: [
    {
      name: "K-ETA / visa-free tourist entry",
      duration: "30–90 days — passport-dependent",
      cost: "K-ETA fee where applicable",
      requirements: "Onward ticket — no local employment on wrong visa",
    },
    {
      name: "Digital nomad / remote work visa (where active)",
      duration: "Check MOJ announcements — income thresholds",
      cost: "Application fee",
      requirements: "Remote employer abroad — insurance — verify embassy circular",
    },
    {
      name: "Work visas (E-series) employer-sponsored",
      duration: "Role-specific",
      cost: "Employer processing",
      requirements: "Korean entity — qualifications",
    },
  ],
  cities: [
    {
      name: "Seoul",
      vibe: "Gangnam / Hongdae energy — metro dense — winter dry cold — spring pollen",
      avgRent: "$900–$2,400/month",
      coworkingSpaces: "WeWork, FastFive, Maru180, study cafés",
    },
    {
      name: "Busan",
      vibe: "Beach city — Haeundae — film festival — seafood — humid",
      avgRent: "$600–$1,600/month",
      coworkingSpaces: "Seomyeon hubs — beach cafés with fibre checks",
    },
    {
      name: "Jeju",
      vibe: "Island — Hallasan hikes — slower — flight delays in weather",
      avgRent: "$500–$1,300/month",
      coworkingSpaces: "Jeju City coworking — café LTE — power stable in city",
    },
  ],
  costBreakdown: {
    rent: "$500–$2,400/month — Seoul core premium",
    food: "$300–$550/month — gimbap vs restaurants",
    transport: "$50–$100/month — T-money + occasional taxi",
    coworking: "$100–$220/month",
  },
  taxInfo:
    "Korean tax residency generally 183+ days in calendar year — worldwide reporting for residents — treaty relief depends on home country — remote workers on short stays rarely file — long bases need a Korean tax accountant — social insurance if employed locally.",
  communityTips:
    "KakaoTalk runs life — Naver Maps — Coupang Eats — learn Hangul basics — business card etiquette — soju culture — quiet trains — air quality spring — arcades for late work — VPN sometimes needed for services.",
  bestFor: ["Internet", "Food", "Night culture", "Regional travel"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
K-ETA online — print approval — immigration queues — address registration for longer stays — Alien Registration Card if applicable — bank account needs ARC often.

Housing: jeonse deposit large — wolse monthly — real estate agents — read contract Korean + translation — utility transfers.
`.trim(),

  bankingTips: `
Shinhan, Hana, KB — ARC + phone — foreigner-friendly branches in Itaewon — Wise inbound — cash rare — Samsung Pay / Kakao Pay ubiquitous.

Exchange at banks — passport for large FX — ATM global cards in 7-Eleven.
`.trim(),

  healthcareInfo: `
Severance, Asan — NHI after registration — predictable copays — mental health stigma improving — English in international clinics.

Emergency: 119 — ambulance — pharmacy chains — travel insurance for first weeks.
`.trim(),

  culturalTips: `
Bow greetings — two-hand giving elders — shoes off homes — age hierarchy — drinking etiquette — no feet on seats — photo permission in palaces — avoid loud phone calls on transit — respect division sensitivities in mixed company — keep topics pragmatic.
`.trim(),

  realMonthlyCost: `
Example month — Busan, Haeundae fringe:

Rent: $950
Utilities + internet: $130
T-money: $70
Food + delivery: $380
Coworking: $140
Insurance: $85
Weekend Seoul KTX: $90
Misc: $110

Indicative total: ~$1,955 — Seoul Gangnam +40–60% rent.
`.trim(),

  expatCommunities: [
    "Seoul Global Center",
    "Busan Haps",
    "Jeju Foreigners",
  ],

  prosAndCons: {
    pros: [
      "Infrastructure",
      "Food and culture",
      "Safety",
      "Healthcare quality",
    ],
    cons: [
      "Language barrier",
      "Housing deposits",
      "Air quality spring",
      "Work culture intensity",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Seoul",
      neighbourhood: "Mapo / Yeonnam",
      description:
        "Cafés — parks — quieter than Hongdae core — verify officetel ventilation.",
    },
    {
      city: "Busan",
      neighbourhood: "Haeundae / Marine City",
      description:
        "Sea views — premium — typhoon shutters — fibre building checks.",
    },
  ],

  faqs: [
    {
      question: "Seoul or Busan for nomads?",
      answer:
        "Seoul for scale and English pockets — Busan for coast and lower rent — both have fibre — choose climate preference.",
    },
  ],

  updated: "April 2026",
  wordCount: 2350,
};
