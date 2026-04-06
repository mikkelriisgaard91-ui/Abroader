import type { CountryGuide } from "../types";

export const philippines: CountryGuide = {
  slug: "philippines",
  country: "Philippines",
  flag: "🇵🇭",
  continent: "Asia",
  capital: "Manila",
  currency: "PHP",
  language: "Filipino and English (official); regional languages",
  timezone: "PHT (UTC+8)",
  visaDifficulty: "Easy",
  internetSpeed: "Average",
  costOfLiving: "Low",
  avgMonthlyCost: 950,
  seoTitle: "Working in the Philippines: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Philippines for remote workers: Manila, Cebu, Siargao — visa extensions, fibre pockets, cost of living, safety tips, and healthcare for 2026.",
  highlights: [
    "English proficiency — BPO culture — timezone overlap with US teams",
    "Island diversity — typhoon season affects travel — plan redundancy",
    "Internet: fibre in major cities — Siargao improving — verify before lease",
    "Visa: tourist extensions — long-stay routes — BI rules change — official receipts only",
    "Traffic in Metro Manila — Grab — consider Makati/BGC vs sprawl",
  ],
  visaOptions: [
    {
      name: "Visa-free / visa-on-arrival (nationality-dependent)",
      duration: "30 days extendable at BI — fee per extension",
      cost: "Extension fees at Bureau of Immigration",
      requirements: "Onward ticket sometimes asked — no local employment on wrong visa class",
    },
    {
      name: "Long-stay options (retirement, investment, work)",
      duration: "Varies — SRRV, work visas — consult BI-accredited agencies",
      cost: "Program deposits and fees",
      requirements: "Age/income/investment thresholds — strict documentation",
    },
  ],
  cities: [
    {
      name: "Manila",
      vibe: "Megacity — BGC/Makati business bubbles — traffic legendary",
      avgRent: "$400–$1,200/month",
      coworkingSpaces: "KMC, Clock In, Acceler8, café Wi‑Fi in CBDs",
    },
    {
      name: "Cebu",
      vibe: "Second city — beaches nearby — mid-cost hub — IT park fibre",
      avgRent: "$350–$900/month",
      coworkingSpaces: "The Company, AS Fortuna cafés, IT Park",
    },
    {
      name: "Siargao",
      vibe: "Surf island — growing nomad scene — power/internet seasonal stress",
      avgRent: "$350–$800/month",
      coworkingSpaces: "Luna / boutique hubs — LTE backup essential",
    },
  ],
  costBreakdown: {
    rent: "$350–$1,100/month — BGC premium vs provincial",
    food: "$180–$380/month — local vs imported goods",
    transport: "$40–$120/month — Grab + domestic flights",
    coworking: "$60–$150/month",
  },
  taxInfo:
    "Philippine tax residency rules focus on physical presence and economic ties — remote workers on tourist extensions rarely formalise — if you incorporate locally or stay years, obligations change — consult a Philippine CPA — PEZA zones matter for employers.",
  communityTips:
    "Load prepaid data — Globe/Smart — dual SIM common. Typhoon season — backup power — surge protectors. Jeepney etiquette — exact change. Island ferries — weather windows — book flexible tickets.",
  bestFor: ["English", "Value", "Islands", "US timezone overlap"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Bureau of Immigration offices — extensions in person or accredited agents — keep official receipts — avoid fixers without licences — overstays are expensive — airport hold possible.

ACR I-Card for certain long stays — biometric — queue times — plan flights around appointments.

Domestic flights: hand-carry power banks within limits — terminal transfers in Manila — allow 3–4 hour buffers on separate tickets.
`.trim(),

  bankingTips: `
BDO, BPI, UnionBank — accounts need ACR for foreigners — tourists use Wise + foreign cards — ATM limits ~10–20k PHP per withdrawal — fees stack.

GCash / Maya dominate — KYC with local SIM — cash still king in provinces.

USD change in tourist areas — mid-market rates in malls.
`.trim(),

  healthcareInfo: `
Manila has St Luke's, Makati Med — insurance with evacuation — dengue — vaccines current.

Siargao: limited acute care — medevac to Cebu — dive insurance — motorcycle trauma common — helmet discipline.

Emergency: 911 in many cities — verify local rescue — private hospitals faster if insured.
`.trim(),

  culturalTips: `
Respect elders — "po" / "opo" — Catholic holidays move cities — Christmas starts early — noise tolerance — karaoke culture — volume neighbours.

Saving face — calm negotiation — avoid public shaming — tipping not universal — service charge in hotels — Grab tips appreciated.
`.trim(),

  realMonthlyCost: `
Example month — Cebu IT Park:

Rent: $550
Utilities + fibre: $90
Grab + scooter: $80
Groceries + eateries: $280
Coworking: $100
Insurance: $60
Domestic flight weekend: $90
Misc: $80

Indicative total: ~$1,330 — Manila BGC or Siargao surf premium swings ±30%.
`.trim(),

  expatCommunities: [
    "Philippines Foreigners Facebook",
    "Cebu Digital Nomads",
    "Siargao Community boards",
  ],

  prosAndCons: {
    pros: [
      "English + hospitality",
      "Low cost outside prime CBD",
      "Island hopping",
      "Strong remote-work culture",
    ],
    cons: [
      "Infrastructure variability",
      "Manila traffic",
      "Typhoon disruption",
      "Healthcare gaps outside cities",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Manila",
      neighbourhood: "BGC / Makati",
      description:
        "Walkable pockets — security — higher rent — flood check buildings — fibre building certs.",
    },
    {
      city: "Siargao",
      neighbourhood: "General Luna fringe",
      description:
        "Surf access — quieter nights than strip — generator + Starlink questions before signing.",
    },
  ],

  faqs: [
    {
      question: "Cebu or Manila for nomads?",
      answer:
        "Manila for scale and flights — Cebu for calmer pace and beaches — both have fibre hubs — choose traffic tolerance.",
    },
    {
      question: "Is Siargao reliable for calls?",
      answer:
        "Schedule heavy downloads in city hubs — LTE backup — power dips — inform clients about redundancy — test latency week one.",
    },
  ],

  updated: "April 2026",
  wordCount: 2300,
};
