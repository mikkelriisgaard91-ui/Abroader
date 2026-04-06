import type { CountryGuide } from "../types";

export const colombia: CountryGuide = {
  slug: "colombia",
  country: "Colombia",
  flag: "🇨🇴",
  continent: "South America",
  capital: "Bogotá",
  currency: "COP",
  language: "Spanish",
  timezone: "COT (UTC−5) — no DST",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 1200,
  seoTitle: "Working in Colombia: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Colombia for remote workers: Medellín vs Bogotá vs Cartagena, visas, safety tips, cost of living, and coworking culture in 2026.",
  highlights: [
    "Digital nomad visa (V Digital Nomad) pathway — confirm income thresholds with Cancillería",
    "Medellín: spring climate in El Poblado / Laureles — huge foreign resident scene",
    "Bogotá: altitude, business, museums — cooler, more formal",
    "Cartagena: Caribbean heat — tourism-heavy, different pace",
    "Coffee region weekend trips — culture and landscapes within a short flight",
  ],
  visaOptions: [
    {
      name: "Visa V Digital Nomad",
      duration: "Up to 2 years in policy announcements — verify current terms",
      cost: "Government fee + migration tax + health insurance",
      requirements:
        "Remote income from abroad above minimum, passport validity, insurance — official checklist on Cancillería portal",
    },
    {
      name: "Tourist entry",
      duration: "90 days extendable in many cases to 180 — verify stamp rules",
      cost: "Often free for many passports",
      requirements: "Return ticket sometimes asked; proof of funds occasionally",
    },
  ],
  cities: [
    {
      name: "Medellín",
      vibe: "Eternal spring, metro + cable cars, nomad cafés — learn barrio safety layers",
      avgRent: "$500–$1,300/month",
      coworkingSpaces: "Selina, Atom House, Global Express tiers",
    },
    {
      name: "Bogotá",
      vibe: "Andean capital — Chapinero, Usaquén pockets; business dress more common",
      avgRent: "$450–$1,200/month",
      coworkingSpaces: "WeWork, HubBO, local cowork chains",
    },
    {
      name: "Cartagena",
      vibe: "Walled city romance + Bocagrande high-rises — humid, tourist economy",
      avgRent: "$550–$1,400/month",
      coworkingSpaces: "Beach-zone hubs — verify AC in workspace",
    },
  ],
  costBreakdown: {
    rent: "$450–$1,400/month — Medellín Poblado premium vs Laureles value",
    food: "$180–$350/month — fruits absurdly cheap in mercados",
    transport: "$25–$50/month (Metro Medellín + occasional taxi)",
    coworking: "$80–$200/month",
  },
  taxInfo:
    "Tax residency for individuals follows days and economic ties — DIAN rules apply if you become resident. Nomad visa tax treatment has been debated — do not rely on forum posts; hire a Colombian accountant if you stay long-term or earn locally. Invoicing foreign clients from a Colombian entity is a different structure entirely.",
  communityTips:
    "Language exchanges thrive; salsa and cycling culture in Medellín; Bogotá rock and theatre. Learn graceful Spanish — pace is warm. Avoid narco tropes — locals are tired of stereotypes. Use WhatsApp for everything including apartment hunts.",
  bestFor: ["Nomad community", "Value", "Coffee culture", "US time zones"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Colombia's Cancillería handles visa applications online — create an account, upload PDFs, pay fees, and schedule if an interview is required. The V Digital Nomad category asks for proof of remote work, minimum income in multiples of monthly legal minimums (UMLV — verify current multiplier), health insurance with specific coverage, and passport validity beyond stay.

Processing can take several weeks — apply before flights. After approval, register with Migración Colombia on arrival, obtain cédula if required, and keep migration stamps orderly — hotels report stays in some regions.

Extensions for tourist stays follow Migración offices — queues exist — go mornings with full document sets.

Overstays incur fines — pay before exit. Border runs are a grey habit — prefer compliant visa status if Colombia is your long hub.

Apostilled criminal records and civil docs may be needed for certain visa types — plan international courier time.
`.trim(),

  bankingTips: `
Nequi and Daviplata revolutionised instant payments — but you need a cédula-linked account for full features. Bancolombia, Davivienda, BBVA serve expats with proper docs.

Foreign cards work; withdraw COP at ATMs — fees vary. Avoid street money changers — use casas de cambio or bank.

Carry small bills for buses and tiendas — change is scarce. US dollars not everyday tender — pesos rule.

Wise may not offer COP receiving for all users — check. For large rent, landlords often want wire or deposit to local account — build trust slowly and verify identity.
`.trim(),

  healthcareInfo: `
Private hospitals in major cities (Medellín: Pablo Tobón Uribe; Bogotá: Fundación Santa Fe) are strong — insurance or pay out of pocket.

EPS public-private insurance ties to employment or visa — nomads often use travel insurance plus private clinics for speed.

Altitude in Bogotá — hydrate first days. Dengue and Zika risk in coastal/lowland — repellent. Yellow fever for some Amazon trips — carry certificate.

Emergency: 123 in Bogotá integrated system — confirm local numbers. Mental health apps and English therapists exist in big cities at cost.
`.trim(),

  culturalTips: `
Regional identity is strong — costeño vs paisa banter is friendly rivalry. Dress slightly sharper in Bogotá business settings; more casual in Medellín tech circles.

Personal questions arrive early — it's rapport, not rudeness. Coffee is sweet by default — ask 'tinto sin azúcar' if you prefer black.

Tipping small change rounding in taxis; 10% restaurants if service not included. Learn salsa basics — social life rewards it.

Noise: cities are loud — test apartment windows before lease. Pets everywhere — allergies note.
`.trim(),

  realMonthlyCost: `
Example month — Medellín, Laureles profile:

Rent two-bed share vs one-bed: $750
Utilities + fibre: $55
Transport (Metro + Metroplus): $35
Groceries: $220
Eating out / social: $200
Coworking: $110
Spanish classes: $100
Travel insurance: $65
Weekend coffee country: $120
Misc: $90

Indicative total: ~$1,745. El Poblado adds 20–40% rent; Cartagena AC electricity spikes bills.
`.trim(),

  expatCommunities: [
    "Medellin Digital Nomads Facebook",
    "Colombia Reddit r/Colombia",
    "Internations Bogotá / Medellín",
    "Language exchanges — Couchsurfing hangouts",
    "Cycling clubs — Ciclovía Sundays in Bogotá",
  ],

  prosAndCons: {
    pros: [
      "Strong nomad infrastructure in Medellín",
      "Affordable lifestyle on USD/EUR",
      "Direct US flights",
      "Diverse geography — beach, mountain, Amazon",
      "Warm culture when respect is mutual",
    ],
    cons: [
      "Safety requires neighbourhood discipline",
      "Traffic and pollution in Bogotá",
      "Humidity in Cartagena",
      "Bureaucracy queues at Migración",
      "Spanish needed for depth",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Medellín",
      neighbourhood: "Laureles-Estadio",
      description:
        "Tree-lined, café culture, more local than Poblado — popular with long-stay nomads; still verify street safety at night.",
    },
    {
      city: "Medellín",
      neighbourhood: "El Poblado",
      description:
        "Upscale, English-friendly services — higher rents; nightlife noise in pockets — scout building location.",
    },
    {
      city: "Bogotá",
      neighbourhood: "Chapinero Alto",
      description:
        "Restaurants, walkable hills — cooler; commute to financial centre manageable by TransMilenio or ride-hail.",
    },
  ],

  faqs: [
    {
      question: "Is Medellín safe?",
      answer:
        "Many foreigners live safely with sensible habits — no flashy jewellery on Metro, Uber at night, learn which barrios to avoid. Crime exists — stay informed, not paranoid.",
    },
    {
      question: "Nomad visa income minimum?",
      answer:
        "Tied to legal monthly minimum wage multiples — government updates annually — check Cancillería PDF for the current year.",
    },
    {
      question: "Bogotá or Medellín for remote work?",
      answer:
        "Medellín: climate, nomad density. Bogotá: more corporate flights, cooler weather, bigger city muscle. Try both short-term before committing.",
    },
  ],

  updated: "April 2026",
  wordCount: 2480,
};
