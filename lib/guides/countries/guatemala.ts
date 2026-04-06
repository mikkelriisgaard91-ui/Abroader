import type { CountryGuide } from "../types";

export const guatemala: CountryGuide = {
  slug: "guatemala",
  country: "Guatemala",
  flag: "🇬🇹",
  continent: "North America",
  capital: "Guatemala City",
  currency: "GTQ",
  language: "Spanish; 20+ Indigenous languages widely spoken",
  timezone: "CST (UTC−6)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 1100,
  seoTitle: "Working in Guatemala: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Guatemala for remote workers: Antigua, Lake Atitlán, Guatemala City, visas, cost of living, and cultural respect in 2026.",
  highlights: [
    "Antigua and Lake Atitlán — long-standing nomad favourites",
    "Maya heritage — markets, textiles, languages — respect Indigenous leadership",
    "Volcanoes and coffee highlands — altitude varies by base",
    "Tourist visa extensions common — confirm current immigration rules",
    "Earthquake country — building safety matters",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 90 days — extensions per immigration",
      cost: "Low",
      requirements: "Passport, onward ticket sometimes",
    },
    {
      name: "Residence categories",
      duration: "Investment, work, family — case-specific",
      cost: "Fees + legal support often used",
      requirements: "Police certificates, translations — immigration publishes lists",
    },
  ],
  cities: [
    {
      name: "Guatemala City",
      vibe: "Business and traffic — Zona 10/14 pockets — services hub",
      avgRent: "$600–$1,400/month",
      coworkingSpaces: "Impact Hub, Regus, café bandwidth in business zones",
    },
    {
      name: "Antigua Guatemala",
      vibe: "Colonial UNESCO town — volcanoes, language schools, tourist economy",
      avgRent: "$550–$1,300/month",
      coworkingSpaces: "Small hubs — many nomads café-hop",
    },
    {
      name: "Panajachel",
      vibe: "Lake Atitlán transport hub — village hopping by boat",
      avgRent: "$400–$1,000/month",
      coworkingSpaces: "Limited — fibre in newer guesthouses",
    },
  ],
  costBreakdown: {
    rent: "$400–$1,400/month",
    food: "$200–$380/month",
    transport: "$30–$90/month",
    coworking: "$70–$160/month",
  },
  taxInfo:
    "Tax residency tests apply if you centre life in Guatemala — remote workers on tourist stays rarely trigger obligations; long-term bases need a local CPA. Invoice structures for foreign clients should be reviewed professionally.",
  communityTips:
    "Ask permission before photographing Indigenous ceremonies — support ethical textile purchases. Chicken buses are cultural experience — not for laptops. Spanish essential — Mayan language classes deepen respect.",
  bestFor: ["Value", "Culture & volcanoes", "Spanish learning", "Lake life"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Immigration offices handle extensions — queues are real — arrive early with complete folders. Overstays risk fines — pay before airport exit.

Residence applications require apostilled criminal records and translations — plan international courier time.

Altitude: Antigua and Atitlán sit high — hydrate first days. Road travel — private shuttles safer than night buses on some routes — ask locals current advice.

After-hours security varies — trusted drivers at night in capital.
`.trim(),

  bankingTips: `
Banco Industrial, BAC, etc. — accounts with DPI — tourists use foreign cards. ATMs in cities — fees vary — carry GTQ smalls for markets.

Wise may not offer GTQ balances — plan USD settlement. Cash still king in villages — card in Antigua more accepted.

Notify banks before travel — Guatemala triggers fraud blocks.
`.trim(),

  healthcareInfo: `
Private hospitals in Guatemala City — pay or insure. Antigua clinics for minor issues — serious cases to capital.

Dengue and intestinal bugs — bottled water habit. Altitude sickness in high towns — acclimatise.

Emergency: 122/123 — verify numbers — private ambulance in cities faster.
`.trim(),

  culturalTips: `
Semana Santa in Antigua is world-class — book housing months ahead. Personal space norms differ — patience is practical.

Tipping ~10% sit-down restaurants if not included. Bargain in markets gently — fixed prices in supermarkets.

Learn about land and water rights conflicts in some regions — avoid careless commentary online.
`.trim(),

  realMonthlyCost: `
Example month — Antigua, shared housing skew:

Rent: $700
Utilities + fibre: $70
Shuttle + tuk-tuk: $80
Groceries: $230
Eating out: $200
Coworking: $90
Spanish school: $120
Travel insurance: $75
Weekend lake trips: $100
Misc: $85

Indicative total: ~$1,750. Pana lakeside can be cheaper with trade-offs in services.
`.trim(),

  expatCommunities: [
    "Antigua expat Facebook",
    "Lake Atitlán community boards",
  ],

  prosAndCons: {
    pros: [
      "Stunning highland landscapes",
      "Affordable",
      "Rich Indigenous culture",
      "Strong coffee",
    ],
    cons: [
      "Traffic and road safety",
      "Bureaucracy",
      "Some regions need security homework",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Antigua Guatemala",
      neighbourhood: "North of central park",
      description:
        "Quieter nights — still cobblestone — verify wifi in thick walls.",
    },
  ],

  faqs: [
    {
      question: "Antigua or the lake?",
      answer:
        "Antigua for services and classes; Atitlán for nature immersion — boat logistics for daily groceries.",
    },
  ],

  updated: "April 2026",
  wordCount: 1950,
};
