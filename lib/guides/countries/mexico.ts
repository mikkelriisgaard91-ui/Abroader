import type { CountryGuide } from "../types";

export const mexico: CountryGuide = {
  slug: "mexico",
  country: "Mexico",
  flag: "🇲🇽",
  continent: "North America",
  capital: "Mexico City",
  currency: "MXN (USD in some border/tourism zones)",
  language: "Spanish; Indigenous languages regionally",
  timezone: "Multiple (PT–ET across regions)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Medium",
  avgMonthlyCost: 1600,
  seoTitle: "Working in Mexico: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Mexico for remote workers: Mexico City, Guadalajara, Playa del Carmen, temporary resident visa, cost of living, and taxes in 2026.",
  highlights: [
    "Huge nomad scene — CDMX, Oaxaca, Playa, Mérida, etc.",
    "Temporary resident visa (residente temporal) for income or savings thresholds — verify INM figures",
    "FMM tourist stays — do not work locally without permission",
    "Regional diversity — mountains, coast, desert — climate and cost vary wildly",
    "RFC tax ID if you become tax-resident — accountant essential",
  ],
  visaOptions: [
    {
      name: "Residente temporal (remote income / savings)",
      duration: "1–4 years renewable — categories vary",
      cost: "Fees + photos + translations",
      requirements:
        "Income or savings multiples of UMA — INM consulate checklist — police certificates",
    },
    {
      name: "FMM tourist / business visitor",
      duration: "Typically 180 days for many passports — officer discretion",
      cost: "Low",
      requirements: "No Mexican employment — remote interpretation debated — stay legal",
    },
  ],
  cities: [
    {
      name: "Mexico City",
      vibe: "Altitude, food capital, traffic — Roma, Condesa, Polanco nomad pockets",
      avgRent: "$600–$1,800/month",
      coworkingSpaces: "WeWork, WeWork alternatives, hundreds of cafés",
    },
    {
      name: "Guadalajara",
      vibe: "Tech and mariachi — more affordable than CDMX — expat growth",
      avgRent: "$450–$1,200/month",
      coworkingSpaces: "Nevería, local hubs, strong café scene",
    },
    {
      name: "Playa del Carmen",
      vibe: "Caribbean coast — humidity, tourism, beach coworking",
      avgRent: "$700–$1,800/month",
      coworkingSpaces: "Selina, beach cafés — test speeds in summer heat",
    },
  ],
  costBreakdown: {
    rent: "$450–$1,800/month — CDMX Roma vs smaller cities",
    food: "$250–$450/month",
    transport: "$40–$100/month — Metro + Uber",
    coworking: "$100–$250/month",
  },
  taxInfo:
    "Mexican tax residency can trigger worldwide income reporting for residents — SAT rules apply. Remote workers with Mexican residence and RFC should model foreign-source income with a Mexican CPA. US persons also face FATCA — coordinate filings.",
  communityTips:
    "Learn Spanish — life opens up. Safety is neighbourhood-specific — ask locals, not forums alone. Water: filter in CDMX. Tip ~10–15% in restaurants if not included. Día de Muertos and regional holidays — book travel early.",
  bestFor: ["Food", "Nomad infrastructure", "Value", "US time zones"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
INM appointments at consulates or in-country for changes of status — book early — slots vanish. Temporary resident bundles need apostilled FBI/police checks, civil docs, photos, and fee payments — translations by sworn translators.

After approval, CURP and RFC if required — bank accounts with residence easier — HSBC, BBVA, Banorte, etc.

Driving: foreign licence limited time — state rules differ. Vehicle imports — complex — research before driving US-plated cars long-term.

Overstay fines exist — regularise or pay on exit. Border hopping as a lifestyle risks scrutiny — prefer compliant visa.
`.trim(),

  bankingTips: `
SPEI transfers dominate — CLABE numbers for rent. Cash still huge — small bills for tiendas. Mercado Pago and bank apps ubiquitous — link after ID.

ATMs — Santander, BBVA — fees vary — withdraw in daylight in safe areas. DCC at terminals — decline and choose MXN.

Wise may offer MXN receiving for some — check. Notify banks — Mexico triggers fraud alerts.
`.trim(),

  healthcareInfo: `
Private hospitals in major cities — excellent value — IMSS/INSABI if you qualify through employment. Travel insurance for beach towns — dengue in wet seasons.

Altitude: CDMX — hydrate. Pacific coast heat — AC costs bite. Emergency: 911 in many states — private ambulance apps in cities.

Dental tourism strong — research clinics.
`.trim(),

  culturalTips: `
Regional identities — CDMX vs norteño banter — humour lightly. Personal space closer — greetings linger. Mañana culture — bureaucracy rewards patience and copies.

Noise: street vendors and neighbours — headphones for calls. Earthquake drills — know exits.
`.trim(),

  realMonthlyCost: `
Example month — CDMX, Roma Norte profile:

Rent one-bed: $1,100
Utilities + fibre: $95
Transport + Uber: $120
Groceries: $280
Eating out: $320
Coworking: $160
Gym: $55
Cleaning: $80
Insurance: $70
Misc: $150

Indicative total: ~$2,430. Guadalajara often 15–25% lower on rent; beach towns swing seasonal.
`.trim(),

  expatCommunities: [
    "Mexico City Digital Nomads",
    "Onward Abroad",
    "Reddit r/MexicoCity",
  ],

  prosAndCons: {
    pros: [
      "Food and culture",
      "Nomad scene",
      "Domestic flights network",
      "Value vs US",
    ],
    cons: [
      "Bureaucracy",
      "Some regions need security homework",
      "Pollution in CDMX",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Mexico City",
      neighbourhood: "Roma + Condesa",
      description:
        "Walkable, dining — premium rents — verify earthquake retrofit on older buildings.",
    },
  ],

  faqs: [
    {
      question: "CDMX or beach?",
      answer:
        "CDMX for culture and services — beaches for climate — humidity and hurricane season trade-offs.",
    },
  ],

  updated: "April 2026",
  wordCount: 2300,
};
