import type { CountryGuide } from "../types";

export const japan: CountryGuide = {
  slug: "japan",
  country: "Japan",
  flag: "🇯🇵",
  continent: "Asia",
  capital: "Tokyo",
  currency: "JPY",
  language: "Japanese; English signage in cities",
  timezone: "JST (UTC+9)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2400,
  seoTitle: "Working in Japan: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Japan for remote workers: Tokyo, Osaka, Fukuoka — digital nomad visa, housing, tax, healthcare, and cost of living for 2026.",
  highlights: [
    "Digital nomad / remote worker visa programmes — verify MOFA and Immigration announcements",
    "World-class infrastructure — cash still common — IC cards everywhere",
    "Osaka–Kansai and Fukuoka offer lower rent than central Tokyo",
    "Seasonal extremes — humid summers — typhoons — plan backup power",
    "Respectful quiet norms — thin walls — noise complaints real",
  ],
  visaOptions: [
    {
      name: "Tourist visa (visa waiver)",
      duration: "90 days for many nationalities — passport-dependent",
      cost: "Free",
      requirements: "Onward ticket, accommodation — no local employment",
    },
    {
      name: "Digital nomad / remote worker visa (where applicable)",
      duration: "6 months pathways — income thresholds — check current embassy circular",
      cost: "Application fee",
      requirements: "Proof of remote income, insurance — employer outside Japan",
    },
    {
      name: "Work visas (employer-sponsored)",
      duration: "1–5 years renewable",
      cost: "COE + residence card fees",
      requirements: "Japanese employer or intra-company transfer",
    },
  ],
  cities: [
    {
      name: "Tokyo",
      vibe: "Megacity — punctual trains — Shibuya / Meguro / Setagaya nomad pockets",
      avgRent: "$1,200–$2,800/month",
      coworkingSpaces: "WeWork, Regus, H1T, neighbourhood cafés with power",
    },
    {
      name: "Osaka",
      vibe: "Food-forward, Kansai humour — cheaper than Tokyo — humid summers",
      avgRent: "$700–$1,600/month",
      coworkingSpaces: "Osaka Innovation Hub, coworking in Umeda",
    },
    {
      name: "Fukuoka",
      vibe: "Startup city push — compact — beaches nearby — gateway to Kyushu",
      avgRent: "$550–$1,200/month",
      coworkingSpaces: "Fukuoka Growth Next, Tenjin hubs",
    },
  ],
  costBreakdown: {
    rent: "$700–$2,500/month — key money + agency fees upfront",
    food: "$300–$600/month — konbini vs restaurants",
    transport: "$80–$120/month — commuter passes",
    coworking: "$120–$220/month",
  },
  taxInfo:
    "Tax residency generally arises after 183 days in a calendar year — worldwide income reporting rules apply — National Tax Agency guidance — treaty with home country — consult a bilingual tax accountant before long stays.",
  communityTips:
    "Learn hiragana basics — Google Maps transit is gold. Garbage sorting — neighbourhood rules. Avoid loud calls on trains. SIM cards at airport — eSIM common. Earthquake app — prepare go-bag.",
  bestFor: ["Infrastructure", "Food", "Safety", "Regional travel"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Embassies publish visa categories — digital nomad routes require proof of remote employer, insurance, and minimum income — translations may need certified Japanese.

Housing: guarantor companies (e.g. Guarantor services) for foreigners — key money 1–2 months — read fire insurance clauses — gas safety checks.

My Number card — tax and social linkage — register if resident.

Bank account: residence card + phone number — Shinsei, Sony, SMBC Prestia — some online-first banks tightening KYC.
`.trim(),

  bankingTips: `
Major banks: MUFG, SMBC, Mizuho — multilingual counters in big cities. Wise works for receiving JPY sometimes — not a full substitute for local account.

Cash remains king in rural areas — ATMs in 7-Eleven and post offices accept foreign cards.

PayPay and LINE Pay dominate — link after local bank or prepaid card.
`.trim(),

  healthcareInfo: `
National Health Insurance (NHI) after residence registration — 70% coverage — predictable copays. Clinics abundant — English in larger cities — mental health still stigmatised — find English-speaking therapists.

Heatstroke risk — summer — hydrate — air conditioning etiquette. Hay fever — pollen season brutal — plan meds.
`.trim(),

  realMonthlyCost: `
Example month — Fukuoka, 1K apartment:

Rent: $850
Key money amortised: $120
Utilities + Internet: $140
Transport: $90
Groceries + konbini: $400
Coworking: $150
Insurance: $80
Social / weekend: $200
Misc: $120

Indicative total: ~$2,150 — central Tokyo adds 40–60%.
`.trim(),

  expatCommunities: [
    "Tokyo Dev / Japan Nomads Slack",
    "Fukuoka Startup Meetups",
    "Osaka International Meetup",
  ],

  prosAndCons: {
    pros: [
      "Safety and reliability",
      "Food and transport",
      "Healthcare quality",
      "Seasonal travel",
    ],
    cons: [
      "High cost in Tokyo",
      "Housing friction for foreigners",
      "Language barrier outside cities",
      "Earthquake risk",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Tokyo",
      neighbourhood: "Meguro / Nakameguro",
      description:
        "Green canal walks — quieter than Shibuya — still Yamanote-linked — verify building age for quake resilience.",
    },
    {
      city: "Osaka",
      neighbourhood: "Namba / Umeda fringe",
      description:
        "Food access — commute trade-offs — check late-night noise.",
    },
  ],

  faqs: [
    {
      question: "Tokyo vs Fukuoka for nomads?",
      answer:
        "Tokyo for scale and flights — Fukuoka for lower rent and startup ecosystem — both excellent internet — choose based on budget and climate.",
    },
    {
      question: "Can I use Wise as my sole bank?",
      answer:
        "For daily life you need local payment rails — IC recharge, rent, utilities — plan for a Japanese account or a prepaid card stack that landlords accept.",
    },
  ],

  culturalTips: `
Bow greetings — business cards two-handed — remove shoes indoors — onsen etiquette — wash before soaking — tattoos sometimes restricted — ask staff.

Quiet apartments — don't drum at night — use headphones. Recycling days — follow labels. Tipping is not customary — exceptional service is expected — not extra cash.
`.trim(),

  updated: "April 2026",
  wordCount: 2400,
};
