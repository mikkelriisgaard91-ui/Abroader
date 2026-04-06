import type { CountryGuide } from "../types";

export const china: CountryGuide = {
  slug: "china",
  country: "China",
  flag: "🇨🇳",
  continent: "Asia",
  capital: "Beijing",
  currency: "CNY",
  language: "Mandarin (Putonghua); English in international business districts",
  timezone: "China Standard Time (UTC+8)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Medium",
  avgMonthlyCost: 1800,
  seoTitle: "Working in China: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "China for remote workers: Shanghai, Beijing, Shenzhen — visas, mobile payments, VPN reality, cost of living, and practical tips for 2026.",
  highlights: [
    "Visa categories strict — tourism / business / work — no incidental work on wrong visa class",
    "Mobile payments dominate — WeChat Pay / Alipay — local bank + phone number usually required",
    "Firewall — plan compliant remote access — client security policies",
    "Tier-1 cities expensive — air quality seasonal — metro world-class",
    "Shenzhen hardware ecosystem — Shanghai finance — Beijing policy hub",
  ],
  overviewHighlightIcons: [
    "travel_explore",
    "wb_sunny",
    "vpn_key",
    "hub",
    "developer_board",
  ],
  visaOptions: [
    {
      name: "Tourist (L) / Transit",
      duration: "As stamped — itinerary-linked",
      cost: "Embassy / CVASC fees",
      requirements: "Itinerary — hotel bookings — onward travel — no local employment",
    },
    {
      name: "Business (M) / other non-work categories",
      duration: "Invitation-letter dependent",
      cost: "Visa fee",
      requirements: "Sponsor letters — verify consulate checklist",
    },
    {
      name: "Work permit + residence (employer-sponsored)",
      duration: "Role-specific residence permit",
      cost: "Employer processing",
      requirements: "Chinese entity — qualifications — health checks",
    },
  ],
  cities: [
    {
      name: "Shanghai",
      vibe: "International finance — French Concession lanes — metro dense — humid summers",
      avgRent: "$900–$2,400/month",
      coworkingSpaces: "WeWork, naked Hub, Xintiandi cafés with fibre",
    },
    {
      name: "Beijing",
      vibe: "Government and tech — hutong charm — winter smog — ring-road commutes",
      avgRent: "$800–$2,200/month",
      coworkingSpaces: "SOHO towers, Zhongguancun hubs",
    },
    {
      name: "Shenzhen",
      vibe: "Hardware and startups — Hong Kong adjacency — subtropical — fast pace",
      avgRent: "$700–$1,900/month",
      coworkingSpaces: "Tencent corridor coworking, Sea World cafés",
    },
  ],
  costBreakdown: {
    rent: "$700–$2,300/month — tier-1 core vs fringe",
    food: "$250–$500/month — canteen vs imports",
    transport: "$40–$90/month — metro + occasional Didi",
    coworking: "$120–$280/month",
  },
  taxInfo:
    "Chinese tax residency and worldwide income rules apply to residents — days tests and domicile — treaty relief depends on home country — any long-stay work arrangement requires licensed tax counsel — do not rely on informal forum advice.",
  communityTips:
    "Real-name SIM registration — Alipay/WeChat wallet setup early — carry passport for hotel check-ins — VPN legality is nuanced — follow employer IT policy — pollution masks in winter — high-speed rail for city pairs.",
  bestFor: ["Infrastructure", "Business", "Food regions", "Regional travel"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Chinese embassies and CVASC centres publish category checklists — invitation letters must match itinerary — biometrics — rejections happen — allow buffer before flights.

Residence permits — police registration within 24 hours of address changes — employers handle work permit workflow — do not work before permits clear.
`.trim(),

  bankingTips: `
Major banks: ICBC, Bank of China — accounts need residence documentation — tourists rely on foreign cards in limited contexts — UnionPay dominant.

WeChat / Alipay — link local bank after KYC — cash rare in tier-1 — small vendors may still be cash-only in alleys.
`.trim(),

  healthcareInfo: `
International hospitals in Shanghai (United Family), Beijing — insurance with direct billing — air quality apps — heatstroke in summer.

Emergency: 120 — private ambulance if insured — language barrier outside intl hospitals — carry insurance cards translated.
`.trim(),

  culturalTips: `
Business cards two-handed — hierarchy in meetings — gift-giving etiquette — modest public behaviour — queue forming — national holidays move cities — patience with bureaucracy — avoid sensitive political topics in mixed company.
`.trim(),

  realMonthlyCost: `
Example month — Shanghai, Jing'an fringe:

Rent: $1,400
Utilities + fibre: $140
Metro + Didi: $100
Food + Meituan: $400
Coworking: $180
Insurance: $100
Weekend travel: $200
Misc: $120

Indicative total: ~$2,640 — Shenzhen or Beijing similar bands; tier-2 lower.
`.trim(),

  expatCommunities: [
    "Shanghai Expats WeChat",
    "Beijing Tech Meetups",
    "Shenzhen Makers",
  ],

  prosAndCons: {
    pros: [
      "Infrastructure scale",
      "Food diversity",
      "High-speed travel",
      "Tech convenience",
    ],
    cons: [
      "Visa friction",
      "Firewall / tooling",
      "Air quality cycles",
      "Tier-1 rent",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Shanghai",
      neighbourhood: "Jing'an / Former French Concession",
      description:
        "Walkable — cafés — premium rent — verify landlord registration for police check-in.",
    },
    {
      city: "Shenzhen",
      neighbourhood: "Nanshan / Shekou",
      description:
        "International schools — sea breeze — commute to HK border — fibre building certs.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely on a tourist visa?",
      answer:
        "Chinese visa categories are strict — incidental remote work exists in a grey zone legally — long bases should align with proper permits — consult immigration counsel.",
    },
  ],

  updated: "April 2026",
  wordCount: 2300,
};
