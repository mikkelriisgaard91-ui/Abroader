import type { CountryGuide } from "../types";

export const uruguay: CountryGuide = {
  slug: "uruguay",
  country: "Uruguay",
  flag: "🇺🇾",
  continent: "South America",
  capital: "Montevideo",
  currency: "UYU (USD cash common in tourism)",
  language: "Spanish",
  timezone: "UYT (UTC−3)",
  visaDifficulty: "Easy",
  internetSpeed: "Excellent",
  costOfLiving: "Medium",
  avgMonthlyCost: 1450,
  seoTitle: "Working in Uruguay: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Uruguay for remote workers: Montevideo, Punta del Este, Colonia, residency-friendly policies, stability, and beach-season planning in 2026.",
  highlights: [
    "Regional stability and strong institutions — high trust society",
    "Montevideo: walkable rambla, café culture, manageable city scale",
    "Punta del Este: summer beach finance crowd — rents spike Dec–Feb",
    "Colonia del Sacramento: UNESCO historic town — slower, tourist day-trips from BA",
    "Tax residency options historically marketed to foreigners — verify current law with a lawyer",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "90 days typical for many passports; extensions possible — verify",
      cost: "Low",
      requirements: "Passport validity, onward ticket occasionally",
    },
    {
      name: "Residencia legal (various)",
      duration: "Multiple paths — rentista, trabajo, familia, etc.",
      cost: "State fees + translations + often legal counsel",
      requirements:
        "Income proof, background checks, health coverage — Dirección Nacional de Migración lists",
    },
  ],
  cities: [
    {
      name: "Montevideo",
      vibe: "River-plate calm — Pocitos/Carrasco rambla runs, tango undertone, startup scene growing",
      avgRent: "$550–$1,300/month",
      coworkingSpaces: "Sinergia, Smart Office, cowork chains in Pocitos",
    },
    {
      name: "Punta del Este",
      vibe: "Summer international — beaches, nightlife — winter quiet and cheaper",
      avgRent: "$700–$2,000/month seasonal swing",
      coworkingSpaces: "Seasonal hubs — many work from cafés off-season",
    },
    {
      name: "Colonia del Sacramento",
      vibe: "Cobblestones, lighthouse sunsets — small-town, tourism-driven",
      avgRent: "$450–$1,000/month",
      coworkingSpaces: "Limited — fibre in newer rentals",
    },
  ],
  costBreakdown: {
    rent: "$450–$2,000/month — Punta summer premium",
    food: "$280–$450/month — asado culture, good dairy",
    transport: "$35–$70/month — bus card + occasional taxi",
    coworking: "$100–$220/month",
  },
  taxInfo:
    "Uruguay taxes residents on worldwide income for those meeting legal residency tests — tax residency promotion programs have seen reforms — do not plan moves on old forum threads. Financial services and crypto reporting rules exist — consult a Uruguayan accountant before establishing 'tax residency' as a nomad. MERCOSUR ties affect some mobility.",
  communityTips:
    "Small country — networks tight. Mate culture is social glue — accept the thermos circle etiquette. Summer in Punta is party + networking; winter Montevideo is mellow. Ferry to Buenos Aires for big-city fixes. Football Nacional vs Peñarol — choose carefully.",
  bestFor: ["Stability", "Beach + city mix", "Lifestyle baseline", "Mercosur mobility"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Uruguay's Dirección Nacional de Migración processes residence — appointments online — upload PDFs, pay tasa, biometric capture scheduled.

Rentista-style residence asks for stable recurring income from abroad or investments — bank certifications apostilled — minimums in UI (unidades indexadas) — verify annually.

Criminal records from countries of prior residence need apostille and Spanish translation — medical exam in Uruguay sometimes — follow checklist PDF exactly — missing comma can delay months.

After approval, obtain cédula — SIM registration, bank onboarding, and property contracts become easier. RUT (tax ID) via DGI when tax obligations trigger — not automatic with every visa.

Border runs are less common than in looser regimes — officers remember faces — prefer compliant status if Uruguay is home base.

Punta rental contracts in peak season — read cancellation clauses — January prices can double short lets.
`.trim(),

  bankingTips: `
Major banks: BROU (state), Santander, Itaú, Scotiabank Uruguay. USD accounts exist for residents — FATCA compliance questions for US persons.

Dollar cash circulates in Punta and border zones — use banks for large exchanges — declare if required.

Mercado Pago and similar apps widespread — link after cédula. Cards tap everywhere in cities — carry cash for small beach kiosks.

Wise may not offer UYU receiving for all — check. ATM withdrawals in UYU — fees vary — BROU sometimes cheaper for local cards.

Stable currency vs Argentina neighbour — but inflation exists — budget in USD mentally if earning abroad.
`.trim(),

  healthcareInfo: `
Mutualista system (private cooperatives) — British Hospital, Mautone, CASMU tiers — monthly fee by age band. Public ASSE exists — waits for non-urgent.

Montevideo and Punta have strong clinics — dental care solid. No tropical diseases — dengue rare vs northern neighbours.

Emergency: 104 SAMU coastal — verify number updates. Mental health: psychologists common — Spanish; English in Punta summer season sometimes.

Beach safety: respect rip currents — lifeguard flags in Punta — learn local rules before swimming alone.
`.trim(),

  culturalTips: `
Pace is slower than Buenos Aires — patience for bureaucracy and social meals. Asado Sundays — meat-forward — vegetarians plan proactively.

Personal questions later than US — trust builds first. Dress neat — Uruguayans value understated style.

Carnival in Montevideo is huge — plan housing early. Tango exists but candombe drums rule February streets.

LGBTQ+ rights advanced regionally — Montevideo and Punta welcoming — still exercise usual urban awareness at night.
`.trim(),

  realMonthlyCost: `
Example month — Montevideo, Pocitos:

Rent one-bed: $900
Utilities + fibre: $95
Transport (bus + bike): $45
Groceries: $320
Eating out / parrilla nights: $300
Coworking: $140
Mutualista mid tier: $110
Gym / beach club: $80
Ferry weekend BA: $140
Misc: $90

Indicative total: ~$2,220. Colonia 15–25% lower; Punta del Este summer short-term can explode — winter bargains inverse.
`.trim(),

  expatCommunities: [
    "Internations Montevideo",
    "Americans in Uruguay Facebook",
    "Reddit r/uruguay",
    "Punta summer networking drinks (seasonal)",
    "Startup Uruguay ecosystem events",
  ],

  prosAndCons: {
    pros: [
      "High social trust and safety vs regional average",
      "Quality of life — beaches, wine, beef",
      "Strong fibre in cities",
      "Political stability relative to neighbours",
      "Manageable country size — low commute stress",
    ],
    cons: [
      "Higher cost than Argentina/Colombia for similar lifestyle tier",
      "Tax residency rules need professional care",
      "Small market — fewer niche services",
      "Winter Montevideo can feel grey",
      "Punta seasonality extremes",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Montevideo",
      neighbourhood: "Pocitos",
      description:
        "Rambla walks, towers with river views — popular with expats; check building maintenance and elevator age.",
    },
    {
      city: "Montevideo",
      neighbourhood: "Carrasco",
      description:
        "Leafy, airport-close — upscale — quieter nights — higher rents — good for families.",
    },
    {
      city: "Punta del Este",
      neighbourhood: "La Barra",
      description:
        "Younger nightlife — summer crowds — winter ghost town — negotiate long winter leases.",
    },
  ],

  faqs: [
    {
      question: "Uruguay vs Argentina for nomads?",
      answer:
        "Uruguay: pricier, calmer institutions, smaller scene. Argentina: bigger cities, lower peso costs, more volatility. Many split time via ferry.",
    },
    {
      question: "Is Montevideo boring?",
      answer:
        "If you need megacity 24/7 energy — maybe. If you want rambla runs, manageable scale, and quick beach access — it's a feature.",
    },
    {
      question: "English spoken?",
      answer:
        "Less than you hope outside Punta tourism — plan Spanish for banks, migration, and healthcare.",
    },
  ],

  updated: "April 2026",
  wordCount: 2300,
};
