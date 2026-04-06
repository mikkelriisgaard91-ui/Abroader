import type { CountryGuide } from "../types";

export const singapore: CountryGuide = {
  slug: "singapore",
  country: "Singapore",
  flag: "🇸🇬",
  continent: "Asia",
  capital: "Singapore",
  currency: "SGD",
  language: "English, Mandarin, Malay, Tamil — English dominant in business",
  timezone: "SGT (UTC+8)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Very High",
  avgMonthlyCost: 3200,
  seoTitle: "Working in Singapore: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Singapore for remote workers: Central, Orchard, East Coast — passes, housing, tax, healthcare, and cost of living for 2026.",
  highlights: [
    "No generic digital nomad visa — Short Term Visit Pass / work passes (EP, PEP) employer-led",
    "World-class infrastructure — hawker culture — humidity year-round",
    "Rent high — HDB not for short visitors — condo premiums",
    "Strict laws — drug penalties — chewing gum rules folklore — follow posted rules",
    "Regional hub — Changi connectivity — weekend hops to region",
  ],
  visaOptions: [
    {
      name: "Short Term Visit Pass (tourism)",
      duration: "Typically 30–90 days — passport-dependent",
      cost: "Free entry often",
      requirements: "Onward ticket — accommodation — no local employment",
    },
    {
      name: "Employment Pass / PEP / Dependant passes",
      duration: "1–2 years renewable — role-linked",
      cost: "Employer processing",
      requirements: "Sponsor company — salary thresholds — qualifications",
    },
  ],
  cities: [
    {
      name: "Central / CBD",
      vibe: "Finance towers — Marina Bay — fast pace — MRT excellent",
      avgRent: "$2,200–$4,500/month",
      coworkingSpaces: "WeWork, JustCo, CapitaGreen hubs",
    },
    {
      name: "Orchard",
      vibe: "Retail core — condos — central line — tourist density",
      avgRent: "$2,000–$4,200/month",
      coworkingSpaces: "Orchard Road serviced offices — hotel business centres",
    },
    {
      name: "East Coast",
      vibe: "Coastal — family — slightly better value — airport access",
      avgRent: "$1,800–$3,800/month",
      coworkingSpaces: "Siglap / Katong cafés — verify fibre building",
    },
  ],
  costBreakdown: {
    rent: "$1,800–$4,500/month — room share lowers band",
    food: "$400–$800/month — hawker vs restaurants",
    transport: "$80–$120/month — EZ-Link + occasional Grab",
    coworking: "$250–$450/month",
  },
  taxInfo:
    "Singapore tax residency generally if ordinary resident 183+ days — progressive rates — overseas income rules depend on remittance and role — Not Ordinarily Resident schemes limited — consult a Singapore tax advisor before structuring remote income.",
  communityTips:
    "Singpass for residents — PayNow ubiquitous — Grab reliable — umbrella always — air-con jacket indoors — queue culture — hawker chope seats — housing agents fees — stamp duty rules for purchases — read MOM pass rules before any local work.",
  bestFor: ["Infrastructure", "Safety", "Business", "Regional hub"],
  jobLink: "/remote-jobs?location=asia-pacific",

  applicationProcess: `
ICA for visit passes — EP via employer EP Online — medical insurance mandatory for pass holders — timelines published on MOM — do not start work before approval.

Renting: stamp duty on leases — diplomatic clauses — landlord registration — open banking for deposits.
`.trim(),

  bankingTips: `
DBS, OCBC, UOB — multi-currency accounts — PayNow phone transfers — Wise inbound — credit cards for miles — cash rare except hawkers.

CPF for PRs/citizens — foreigners without CPF — plan retirement separately.
`.trim(),

  healthcareInfo: `
Private hospitals — insurance mandatory — Medisave for citizens — dengue — heat stress — mental health access good English.

Emergency: 995 — ambulance — public hospitals subsidised for citizens — foreigners pay private rates.
`.trim(),

  culturalTips: `
Multicultural respect — hawker return trays — MRT no durian — fines for littering — racial harmony sensitivities — business formal — punctuality valued — modest dress government buildings.
`.trim(),

  realMonthlyCost: `
Example month — East Coast room in condo share:

Rent: $2,400
Utilities + fibre: $150
EZ-Link + Grab: $120
Hawker + restaurants: $550
Coworking: $320
Insurance: $120
Weekend regional flight: $250
Misc: $200

Indicative total: ~$4,110 — solo CBD studio pushes higher.
`.trim(),

  expatCommunities: [
    "Singapore Expats Facebook",
    "Tech in Asia meetups",
  ],

  prosAndCons: {
    pros: [
      "Safety and efficiency",
      "Air connectivity",
      "Food diversity",
      "English business",
    ],
    cons: [
      "High rent",
      "Humidity",
      "Pass friction for nomads",
      "Small living space",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Singapore",
      neighbourhood: "Tanjong Pagar / Outram",
      description:
        "Hawker heritage — MRT — CBD walk — premium rent — verify building age.",
    },
  ],

  faqs: [
    {
      question: "Can I stay long-term without an employer?",
      answer:
        "Tourism passes are short — long bases usually need an eligible pass or family tie — do not work locally without MOM approval — plan exits before overstay.",
    },
  ],

  updated: "April 2026",
  wordCount: 2300,
};
