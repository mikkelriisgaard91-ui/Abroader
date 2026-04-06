import type { CountryGuide } from "../types";

export const luxembourg: CountryGuide = {
  slug: "luxembourg",
  country: "Luxembourg",
  flag: "🇱🇺",
  continent: "Europe",
  capital: "Luxembourg City",
  currency: "EUR",
  language: "Luxembourgish / French / German",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Very High",
  avgMonthlyCost: 3100,
  seoTitle: "Working Remotely in Luxembourg 2026 — Finance Hub & Housing",
  seoDescription:
    "Luxembourg remote work: EU worker mobility, high salaries, housing shortage tips, tax and cross-border life.",
  highlights: [
    "Top GDP per capita and finance sector",
    "Easy weekend trips to neighbours",
    "Trilingual workplace norms",
    "Safe, compact country",
    "Cross-border living in France/Germany common",
  ],
  visaOptions: [
    {
      name: "EU free movement / registration",
      duration: "N/A for EU citizens",
      cost: "Registration",
      requirements: "EU passport — address registration",
    },
    {
      name: "Third-country work permit",
      duration: "Employer-led",
      cost: "State fees",
      requirements: "Sponsor employer proves shortage / salary",
    },
  ],
  cities: [
    {
      name: "Luxembourg City",
      vibe: "Cliffs, funds, small walkable core",
      avgRent: "$1,800–$3,000/month",
      coworkingSpaces: "The Office, Regus, Spaces",
    },
    {
      name: "Esch-sur-Alzette",
      vibe: "Second city, cheaper edge",
      avgRent: "$1,200–$2,000/month",
      coworkingSpaces: "Belval campus hubs",
    },
    {
      name: "Differdange",
      vibe: "Cross-border commuters",
      avgRent: "$1,100–$1,800/month",
      coworkingSpaces: "Limited",
    },
  ],
  costBreakdown: {
    rent: "$1,100–$3,000/month",
    food: "$400–$650/month",
    transport: "Free public transport nationwide",
    coworking: "$250–$450/month",
  },
  taxInfo:
    "Progressive tax classes; cross-border workers have special schemes — see ACDF / tax offices with adviser.",
  communityTips:
    "Join internations.org events, live in Arlon/Trier to save rent, expect competitive housing market.",
  bestFor: ["Finance careers", "EU institutions nearby", "Safety", "Multilingual kids"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
EU/EEA citizens register residence at the local commune (déclaration d'arrivée) within required timelines, obtain a national identification number, and start work under free movement—straightforward but paperwork-heavy.

Third-country nationals typically need an employer to file for a work and residence permit before starting—salary thresholds, labour market tests, and qualifications must align with Immigration Directorate (Direction de l'immigration) rules.

After approval, biometric residence cards, social security affiliation (CCSS), and health fund (CNS) registration follow.

Cross-border workers (frontaliers) living in France, Belgium, or Germany work under special tax and social security treaties—payroll often split; get specialist advice before choosing address.

Renew permits before expiry; job changes may require amendments. Rejections involve insufficient salary or failed labour market advertising—employers usually manage process.

Remote-only foreign employers rarely fit standard work permit routes—verify if Luxembourg entity exists.
`.trim(),

  bankingTips: `
BCEE (Spuerkeess), BGL BNP Paribas, ING Luxembourg, and international private banks serve the fund industry. You need residence proof, employment contract, and ID—private banking thresholds higher.

SEPA EUR; cross-border commuters may keep French or German accounts—salary often requires Luxembourg IBAN.

Wealth management is national sport—disclose worldwide assets to tax advisers under CRS rules.

Wise for FX—still declare. Cash less common; cards everywhere.

Mortgages competitive if income stable—rates change—broker advice useful.
`.trim(),

  healthcareInfo: `
CNS (Caisse Nationale de Santé) covers most care once affiliated—GP (médecin traitant) referrals optimise reimbursement. Co-pays exist—mutuelle top-ups common among locals.

Emergency: 112. Hospitals Centre and Kirchberg offer strong care—English in medical staff common.

Dental partial reimbursement—orthodontics check policy.

Pharmacies professional; prescriptions from neighbouring countries often accepted if EU standard.

Cross-border workers may use systems in home country—coordinate cards.

Mental health access improving—private waits shorter.
`.trim(),

  culturalTips: `
Trilingualism is real—Luxembourgish for identity, French often in cafés, German in media, English in finance. Switching languages mid-conversation is normal—don't be shy.

Work culture formal-informal mix—suits in finance, smart casual in tech. Lunch can be long—meetings still punctual.

Housing pressure creates tension—be polite with agencies. Weekends many drive to Moselle wine or Ardennes hiking.

Tipping: round bills modestly; service often included.

Join wine fairs, Schueberfouer funfair, and hiking clubs—integration beats complaining about rent alone.
`.trim(),

  realMonthlyCost: `
Example month for a single finance sector employee in Luxembourg City:

Rent (one-bed Kirchberg / Limpertsberg): $2,200
Groceries: $480
Transport: $0 (free nationwide)
Restaurants: $320
Coworking / office drinks: $200
Health mutuelle + extras: $85
Phone + software: $50
Gym: $70
Weekend travel / misc: $200

Indicative total: about $3,605.

Living in Arlon or Trier cuts rent but adds commute—model net tax with adviser.
`.trim(),

  expatCommunities: [
    "Internations Luxembourg",
    "Luxembourg Expats Facebook",
    "American Chamber of Commerce Luxembourg",
    "Meetup Luxembourg — hiking & wine",
    "r/Luxembourg",
    "Luxembourg City Mums / families",
    "Finance networking drinks Kirchberg",
    "Cross-border commuter groups",
  ],

  prosAndCons: {
    pros: [
      "Very high salaries in finance and EU roles",
      "Safe, multilingual, international schools",
      "Free public transport nationwide",
      "Central to Brussels, Paris, Frankfurt weekend trips",
      "Strong rule of law",
      "EU institutions proximity",
      "Excellent healthcare once affiliated",
      "Compact—short commutes when housing works",
      "Diverse expat bubble",
      "Outdoor options nearby (Ardennes, Moselle)",
    ],
    cons: [
      "Housing shortage and extreme rents in city",
      "Third-country permits employer-dependent",
      "Tax complexity for cross-border setups",
      "Small market—job changes less flexible",
      "Quiet nightlife vs major capitals",
      "Sunday shopping limited",
      "Traffic jams at borders rush hour",
      "Banking compliance heavy",
      "Rainy stretches",
      "Can feel transient—hard to find deep roots without effort",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Luxembourg City",
      neighbourhood: "Limpertsberg",
      description: "Leafy, families, EU schools—premium; $1,900–$2,800 one-bed.",
    },
    {
      city: "Luxembourg City",
      neighbourhood: "Gasperich",
      description: "New builds, Cloche d'Or, expats—$1,800–$2,600.",
    },
    {
      city: "Esch-sur-Alzette",
      neighbourhood: "Belval",
      description: "University, redevelopment, slightly better value—$1,200–$1,900.",
    },
  ],

  faqs: [
    {
      question: "Is Luxembourg only for bankers?",
      answer:
        "No—EU institutions, tech, logistics, and space sectors grow—but finance still dominates salaries.",
    },
    {
      question: "Should I live in France to save rent?",
      answer:
        "Often yes financially, but tax and social security rules shift—model net income with a cross-border adviser before signing a lease.",
    },
    {
      question: "Is English enough?",
      answer:
        "Professionally often yes; French or German unlocks daily life and landlord negotiations.",
    },
    {
      question: "How competitive is housing?",
      answer:
        "Very—use agents, employer help, and prepare deposits; scams exist—verify landlords.",
    },
    {
      question: "Can I bring my car?",
      answer:
        "Yes—register and insure per rules; public transport may suffice in city.",
    },
    {
      question: "Schools for kids?",
      answer:
        "International and European schools popular—apply early, fees apply.",
    },
  ],

  updated: "April 2026",
  wordCount: 1960,
};
