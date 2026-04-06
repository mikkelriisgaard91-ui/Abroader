import type { CountryGuide } from "../types";

export const ecuador: CountryGuide = {
  slug: "ecuador",
  country: "Ecuador",
  flag: "🇪🇨",
  continent: "South America",
  capital: "Quito",
  currency: "USD (official dollarisation)",
  language: "Spanish; Kichwa in many regions",
  timezone: "ECT (UTC−5) — Galápagos UTC−6",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Low",
  avgMonthlyCost: 1100,
  seoTitle: "Working in Ecuador: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Ecuador for remote workers: Quito, Cuenca, Guayaquil, rentista-style visas, dollar economy tips, and life straddling the Andes and coast.",
  highlights: [
    "Uses the US dollar — no currency conversion headaches for Americans",
    "Quito: high-altitude capital — historic centro UNESCO, valley suburbs",
    "Cuenca: colonial architecture, expat retiree scene, mild weather",
    "Guayaquil: coastal business hub — heat, humidity, port economy",
    "Galápagos entry is regulated — separate permits and flights",
  ],
  visaOptions: [
    {
      name: "Tourist stamp",
      duration: "90 days typically; extensions possible — verify for nationality",
      cost: "Usually low or free",
      requirements: "Passport validity, onward ticket sometimes",
    },
    {
      name: "Temporary residence (rentista, investor, professional, etc.)",
      duration: "2 years renewable patterns — category-dependent",
      cost: "Fees + translations + legal help common",
      requirements:
        "Income or investment proof, background checks, health insurance — Ministerio de Gobierno / migración guidance",
    },
  ],
  cities: [
    {
      name: "Quito",
      vibe: "Mountain capital — Mariscal vs valley suburbs; altitude 2,850m — acclimatise",
      avgRent: "$450–$1,100/month",
      coworkingSpaces: "Impaqto, Workup, cafés in La Floresta",
    },
    {
      name: "Cuenca",
      vibe: "Walkable colonial core — rivers, arts, slower pace — popular with North Americans",
      avgRent: "$400–$950/month",
      coworkingSpaces: "Small hubs — Work from Cuenca style spaces",
    },
    {
      name: "Guayaquil",
      vibe: "Tropical business city — Malecón riverfront; gateway to coast",
      avgRent: "$450–$1,000/month",
      coworkingSpaces: "Spaces, local cowork brands in Puerto Santa Ana",
    },
  ],
  costBreakdown: {
    rent: "$400–$1,100/month",
    food: "$200–$380/month — produce cheap in mercados",
    transport: "$25–$50/month — buses cheap; taxis negotiate or use apps",
    coworking: "$70–$160/month",
  },
  taxInfo:
    "Ecuador taxes residents on foreign-source income in some categories — rules shifted historically toward worldwide inclusion for residents. Establishing tax residency vs tourist presence requires professional advice. The dollar economy simplifies cash flow but not tax law — consult an Ecuadorian CPA if you exceed casual stays.",
  communityTips:
    "GringoTree and Facebook groups in Cuenca; hiking clubs in Quito for acclimatisation. Volcano and crater lakes weekends. Learn Spanish — indigenous markets reward courtesy. Cotopaxi and Baños trips are weekend norms.",
  bestFor: ["Dollar economy", "Nature & volcanoes", "Value", "Retiree-friendly Cuenca"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Ecuador's visa system is administered through consulates abroad and the Coordinación Zonal offices domestically — digital appointments fluctuate — monitor official sites.

Temporary residence categories include rentista (passive or remote income proof), inversionista, and work contracts — each lists income multiples of basic salaries — verify current SBU (salario básico) math.

Documents often need apostille and Spanish translation — FBI checks common for US citizens. Health insurance must meet minimums — local policies sold to migrants.

After approval, obtain cédula — required for contracts, bank accounts beyond basic, and some utilities. Register with municipal authorities as directed.

Overstay fines exist — regularise or pay on exit. Border hopping was common historically — immigration scrutiny has tightened — prefer legal status.

Galápagos requires INGALA transit control card and return flights — plan separately from mainland residence.
`.trim(),

  bankingTips: `
Dollar economy — withdraw USD from ATMs; fees vary by bank. Banco Pichincha, Produbanco, and others open accounts with cédula — tourist banking is tight.

Carry small bills — $20 and below work better in taxis and markets — $50/$100 can be refused or scrutinised.

Mobile payments growing — ask for local app preferences. Wire transfers from the US are straightforward in dollars — watch receiving bank fees.

Safe deposit strategy — petty theft in crowded markets — use neck pouches minimally visible. Card skimming rare but possible — prefer chip inside banks.
`.trim(),

  healthcareInfo: `
Major cities have private hospitals (Hospital Metropolitano Quito, etc.) — quality varies by specialty. Cuenca has strong expat-serviced clinics.

Public IESS exists — affiliation ties to employment or voluntary buy-in for residents — queues exist.

Altitude sickness in Quito — hydrate, ascend to hikes gradually. Coast: dengue risk — repellent. Amazon: yellow fever and malaria prophylaxis per travel clinic.

Emergency: 911 unified in many zones — verify. Mental health: psychologists available — Spanish-first.

Earthquakes — know exit routes; many buildings retrofitted post-2016 lessons.
`.trim(),

  culturalTips: `
Indigenous dress in markets — ask before photos. Bargaining gentle in artisan fairs — fixed in supermarkets.

Lunch is heavy; dinner lighter. Pan de yuca and hornado street food — judge hygiene busy stalls.

Punctuality flexes for social events; government offices demand early arrival and every photocopy.

Volcano etiquette — respect páramo ecosystems — pack out trash. Football unites — avoid mocking local teams lightly.
`.trim(),

  realMonthlyCost: `
Example month — Cuenca, solo:

Rent (furnished one-bed): $550
HOA + utilities + fibre: $90
Transport (bus + occasional taxi): $35
Groceries: $240
Eating out: $150
Coworking: $85
Spanish tutor: $80
Private health visits + insurance: $110
Weekend trips (Baños, Cajas): $140
Misc: $70

Indicative total: ~$1,550. Quito similar rent band with more flight options; Guayaquil adds AC electricity costs.
`.trim(),

  expatCommunities: [
    "GringoPost / local English classifieds",
    "Cuenca Expats Facebook",
    "Quito hiking Meetup",
    "Internations Quito",
    "Birdwatching clubs — cloud forest trips",
  ],

  prosAndCons: {
    pros: [
      "No currency conversion for USD earners",
      "Affordable housing outside prime Quito",
      "Diverse geography — Andes, Amazon, coast",
      "Growing fibre in cities",
      "Mild climates in Quito and Cuenca",
    ],
    cons: [
      "Altitude adjustment in Quito",
      "Bureaucracy and appointment queues",
      "Earthquake risk — check building age",
      "Slower pace can frustrate Type-A planners",
      "English limited outside expat bubbles",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Quito",
      neighbourhood: "La Floresta",
      description:
        "Arts, cafes, safer evening strolls than centro — popular with younger expats; verify taxi home late.",
    },
    {
      city: "Cuenca",
      neighbourhood: "El Centro histórico",
      description:
        "Walkable UNESCO streets — noise echoes; check wifi in thick walls — lower rents on river edges.",
    },
    {
      city: "Guayaquil",
      neighbourhood: "Urdesa",
      description:
        "Dining, tree-lined — family-oriented; compare security vs Puerto Santa Ana high-rises.",
    },
  ],

  faqs: [
    {
      question: "Is Ecuador cheap?",
      answer:
        "Often yes for housing and services vs North America — imported goods and cars carry premiums. Budget depends on city and expat vs local lifestyle choices.",
    },
    {
      question: "Can I work remotely on a tourist visa?",
      answer:
        "Legally murky long-term — many do short stays; for multi-year bases pursue appropriate temporary residence — consult Ecuadorian immigration counsel.",
    },
    {
      question: "Galápagos as a nomad base?",
      answer:
        "Not practical — strict residency controls, high costs, tourism focus — visit as a trip from mainland hubs.",
    },
  ],

  updated: "April 2026",
  wordCount: 2280,
};
