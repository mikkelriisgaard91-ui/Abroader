import type { CountryGuide } from "../types";

export const indonesia: CountryGuide = {
  slug: "indonesia",
  country: "Indonesia",
  flag: "🇮🇩",
  continent: "Asia",
  capital: "Jakarta",
  currency: "IDR",
  language: "Indonesian (Bahasa Indonesia); hundreds of regional languages",
  timezone: "WIB/WITA/WIT (UTC+7 to +9)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 1100,
  seoTitle: "Working in Indonesia: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Indonesia for remote workers: Jakarta, Bali hubs, visa-on-arrival and D-tourist extensions, cost of living, tax context, and practical tips for 2026.",
  highlights: [
    "Bali (Ubud, Canggu) remains a global nomad anchor — fibre and coworking dense",
    "Visa rules change often — VOA, B211A offshore applications, and extension strategies — verify Immigration website",
    "Archipelago logistics — domestic flights and ferries — plan buffers",
    "Halal-majority country — respect Ramadan norms outside tourist strips",
    "Jakarta as business and startup hub — traffic and floods are real",
  ],
  visaOptions: [
    {
      name: "Visa on Arrival / e-VOA (tourism)",
      duration: "30 days extendable in policy cycles — confirm current extension rules",
      cost: "Fee on arrival or online",
      requirements: "Passport validity, onward ticket sometimes — no local employment",
    },
    {
      name: "B211A offshore / social-cultural or business visitor categories",
      duration: "Multi-month pathways — agent-heavy — verify authorised agents and Immigration",
      cost: "Visa fee + sponsor/agent costs",
      requirements: "Sponsor letters, insurance — categories evolve — official checklist only",
    },
  ],
  cities: [
    {
      name: "Jakarta",
      vibe: "Business capital — traffic, malls, startup events — floods in rainy season",
      avgRent: "$400–$1,200/month",
      coworkingSpaces: "CoHive, WeWork, GoWork, café bandwidth in SCBD",
    },
    {
      name: "Ubud",
      vibe: "Rice terraces, yoga, slower — humid — strong creative crowd",
      avgRent: "$350–$900/month",
      coworkingSpaces: "Hubud, Outpost, jungle cafés with fibre",
    },
    {
      name: "Canggu",
      vibe: "Surf, beach clubs, nomad density — scooter culture — noise in Berawa",
      avgRent: "$450–$1,100/month",
      coworkingSpaces: "Dojo, Tribal, Finns-adjacent workspaces",
    },
  ],
  costBreakdown: {
    rent: "$350–$1,200/month — Bali vs Jakarta differs",
    food: "$200–$400/month — warungs vs imports",
    transport: "$40–$100/month — Gojek/Grab + scooter rental",
    coworking: "$80–$220/month",
  },
  taxInfo:
    "Indonesian tax residency can arise on presence and economic ties — remote workers on short tourist stays rarely trigger obligations; long-stay KITAS holders need a local accountant. Offshore income reporting rules are not something to guess from forums — professional advice mandatory.",
  communityTips:
    "Learn basic Bahasa — rapport opens prices. Scooter skills and helmet — police checkpoints. Nyepi in Bali — airport closes — plan work sprints. WhatsApp runs everything — housing scams exist — view in person.",
  bestFor: ["Value", "Surf & nature", "Community", "Regional travel"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
Indonesia's Directorate General of Immigration publishes visa and extension rules online — policies shift with tourism ministry announcements — download the latest circular before you book.

VOA/e-VOA entrants extend through authorised pathways when permitted — overstays incur daily fines — pay at immigration before airport exit. Onshore extensions may require photos, copies, and patience — agents are common but use reputable ones.

KITAS/KITAP pathways for work or family follow employer sponsorship — remote-only foreign employers rarely sponsor — match visa category to actual activity.

Domestic travel: ferry weather delays — volcanic ash — flight cancellations — buffer client deadlines.
`.trim(),

  bankingTips: `
Major banks: BCA, Mandiri, BNI — open with KITAS and local references — tourists rely on Wise cards, foreign Visa/Mastercard, and cash IDR. ATM limits and skimming risk — use bank lobbies in cities.

QRIS payments ubiquitous — link e-wallets once you have local number. Wise may not offer IDR balance — plan USD/EUR settlement abroad.

Carry small notes for warungs — change is scarce on Sundays.
`.trim(),

  healthcareInfo: `
Bali has BIMC and Siloam — Jakarta has international hospitals — pay or insure. Travel insurance for diving and scooter injuries — evac to Singapore for complex cases.

Dengue — daytime mosquito bite prevention — not just evenings. Bali belly — choose busy kitchens — avoid ice from unknown sources.

Emergency: 118/119 varies — save private ambulance numbers in cities.
`.trim(),

  culturalTips: `
Right hand for giving — modest dress at temples — sarong rental. Volume of ceremonies — road closures — patience. Jakarta work culture — hierarchy — punctuality for formal meetings. Bali Hindu offerings on pavement — don't step on canang.
`.trim(),

  realMonthlyCost: `
Example month — Canggu, shared villa skew:

Rent: $650
Utilities + fibre: $90
Scooter + fuel: $70
Groceries + warungs: $280
Coworking: $140
Gym / surf: $100
Travel insurance: $70
Weekend island hop: $150
Misc: $100

Indicative total: ~$1,650 — Jakarta central or Ubud premium can swing ±25%.
`.trim(),

  expatCommunities: [
    "Bali Digital Nomads Facebook",
    "Jakarta Digital Nomads Meetup",
    "Pererenan / Canggu WhatsApp housing",
  ],

  prosAndCons: {
    pros: [
      "Affordable lifestyle on foreign currency",
      "Strong nomad infrastructure in Bali",
      "Domestic tourism diversity",
      "Warm culture when respect is mutual",
    ],
    cons: [
      "Visa uncertainty and agent noise",
      "Traffic and pollution in Jakarta",
      "Scooter accident and insurance gaps",
      "Rainy season logistics",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Canggu",
      neighbourhood: "Berawa / Batu Bolong",
      description:
        "Walkable café density — noisy nights near clubs — verify building soundproofing and flood drainage.",
    },
    {
      city: "Ubud",
      neighbourhood: "Penestanan / Sayan ridge",
      description:
        "Quieter than central — steep roads — fibre check before lease.",
    },
  ],

  faqs: [
    {
      question: "Bali or Jakarta for remote work?",
      answer:
        "Bali for lifestyle and nomad density — Jakarta for corporate scale and flights — totally different visa stress and pace.",
    },
    {
      question: "Can I work on a tourist visa?",
      answer:
        "Indonesian law distinguishes local employment from incidental remote work — enforcement varies — long-term bases should align visa category — consult immigration counsel.",
    },
  ],

  updated: "April 2026",
  wordCount: 2400,
};
