import type { CountryGuide } from "../types";

export const france: CountryGuide = {
  slug: "france",
  country: "France",
  flag: "🇫🇷",
  continent: "Europe",
  capital: "Paris",
  currency: "EUR",
  language: "French",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2400,
  seoTitle: "Working in France: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in France or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Strong infrastructure in major metros",
    "Passeport Talent for qualifying employees and founders",
    "World-class food, rail, and weekend travel",
    "Freelance auto-entrepreneur regime for smaller turnovers",
    "Regional cities offer better rent than Paris",
  ],
  visaOptions: [
    {
      name: "Passeport Talent — Salarié qualifié",
      duration: "Up to 4 years renewable",
      cost: "€225+ in timbres",
      requirements: "Job meeting salary/skill criteria with sponsoring employer",
    },
    {
      name: "Visa visiteur (long-stay)",
      duration: "1 year",
      cost: "€99+",
      requirements: "Proof of means, insurance — working locally usually not allowed",
    },
  ],
  cities: [
    {
      name: "Paris",
      vibe: "Global city, dense networking",
      avgRent: "$1,400–$2,600/month",
      coworkingSpaces: "WeWork, Morning, Anticafé",
    },
    {
      name: "Lyon",
      vibe: "Food, rivers, growing tech scene",
      avgRent: "$900–$1,500/month",
      coworkingSpaces: "La Cordée, Le Périscope hubs",
    },
    {
      name: "Toulouse",
      vibe: "Aerospace, student energy, sunnier south",
      avgRent: "$800–$1,300/month",
      coworkingSpaces: "Coworking Toulouse, Regus",
    },
  ],
  costBreakdown: {
    rent: "$800–$2,600/month (Paris premium)",
    food: "$350–$550/month",
    transport: "$80–$100/month (Navigo-style passes in Île-de-France)",
    coworking: "$160–$320/month",
  },
  taxInfo:
    "Residents taxed on worldwide income; social contributions are substantial. Auto-entrepreneur status caps contributions but limits turnover — get French accountant advice.",
  communityTips:
    "Join local French-American / tech Slack groups, Station F events if in Paris, and language exchanges to settle admin faster.",
  bestFor: ["Culture & food", "Rail travel", "Healthcare", "EU hub"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
France's immigration system prioritises sponsored employment (Passeport Talent) and specific categories such as founders, investors, and researchers. Non-EU remote workers cannot simply "work from France" for a foreign employer without a permit that matches their activity—tourist Schengen stays do not authorise work.

Passeport Talent (qualified employee) typically requires a French employer to file a work authorisation and a consulate visa application. You need a qualifying salary, role, and sometimes a recognised diploma. After approval you validate your visa online (OFII process), obtain a titre de séjour, and register with CPAM or your chosen health path.

Visa visiteur (long-stay visitor) suits those who can prove stable passive income or savings and do not intend to work in France—remote work for a foreign employer may still fall into a grey zone; consult a French immigration lawyer before relying on this route.

Documents often include passport, criminal record checks, proof of address, insurance, employment contract or business plan, and translations. Processing times vary by consulate—plan several months for first appointments.

Renewals require showing continued eligibility, tax compliance, and integration where applicable. Rejections often stem from mismatched job categories, insufficient salary, or incomplete OFII medical steps—complete every étape administratif promptly.
`.trim(),

  bankingTips: `
Major retail banks include BNP Paribas, Crédit Agricole, Société Générale, and online players like BoursoBank and Hello bank!. Opening a compte courant usually requires ID, proof of French address (justificatif de domicile), visa/residence status, and sometimes a payslip—non-residents face stricter onboarding.

IBAN discrimination is illegal within the SEPA zone; nonetheless landlords expect French IBANs for rent. Wise and Revolut help receive USD/GBP and convert to euros, but URSSAF and social charges are best paid from a French account once you are established.

Carte bancaire contactless is universal; cheques still appear for rent deposits in some regions. ATM fees: use your bank's network; avoid Euronet with poor FX.

Declare foreign accounts if required (foreign account reporting rules exist—consult a fiscaliste). Separate business and personal flows if you are auto-entrepreneur.
`.trim(),

  healthcareInfo: `
France's Assurance Maladie (via CPAM or local caisse) delivers excellent care once you are affiliated—often through employment or self-employment registration. Complementary mutuelle insurance covers co-pays and dental/optical—budget roughly €30–€80/month depending on age and coverage.

Emergency dial 15 (SAMU) or 112. A&E (urgences) can triage quickly; GP (médecin traitant) referrals unlock specialist reimbursements.

Private clinics exist in Paris and Lyon for faster access; costs vary. Pharmacies are highly professional—many prescriptions are reimbursable.

Before affiliation, travel insurance must bridge visa requirements—ensure wording matches préfecture expectations.
`.trim(),

  culturalTips: `
French professional life values formal greetings (bonjour in every shop), structured lunch breaks, and written precision—email tone matters. Meetings may start with context before decisions; hierarchy is real in grandes écoles alumni circles.

Parisian directness differs from Lyon warmth—adapt. Bureaucracy is legendary: keep dossiers, duplicate documents, and use registered letters (lettre recommandée) when needed.

Tipping is modest—round up cafés; 5–10% in restaurants if service not included (check service compris). August empties many offices—plan projects around les vacances.

Learn French to B1+ for daily life outside Paris expat bubbles. Join clubs (sport, wine), neighbourhood associations, and language exchanges—integration unlocks better rents and friendships.
`.trim(),

  realMonthlyCost: `
Example month for a single remote worker in Lyon (more affordable than Paris, strong quality of life):

Rent (one-bed, centre or Croix-Rousse): $1,050
Utilities + fibre: $130
Transport (TCL monthly + occasional train): $75
Groceries + markets: $380
Restaurants / coffee twice weekly: $240
Coworking flex: $175
Mutuelle + pharmacy reserve: $55
Phone + software: $45
Entertainment / gym: $90
Miscellaneous: $120

Indicative total: about $2,360.

Paris adds roughly 40–60% on rent for comparable arrondissements; Toulouse often lands 15–25% below Lyon for housing. Navigo passes in Île-de-France add cost but replace car need.
`.trim(),

  expatCommunities: [
    "Internations Paris & Lyon",
    "Americans in France Facebook",
    "r/france and r/paris expat threads",
    "Station F founder community Paris",
    "Meetup France — remote work & tech",
    "French Tech Slack",
    "Lyon English Speaking Club",
    "Toulouse Expats Facebook",
  ],

  prosAndCons: {
    pros: [
      "World-class healthcare and rail network",
      "Passeport Talent for skilled sponsored roles",
      "Regional cities offer culture without Paris rents",
      "EU Schengen mobility with valid titre de séjour",
      "Food, wine, and work-life balance norms",
      "Strong startup ecosystem in Paris",
      "Excellent childcare and family policies in many sectors",
      "Digital infrastructure in major cities",
      "Weekend travel across Europe by train",
      "Strong tenant protections once in lease",
    ],
    cons: [
      "Paris rental market extremely competitive",
      "High payroll taxes and social charges",
      "Administration heavy—French language essential",
      "Visitor visa not suitable for active remote work",
      "Slow appointments in some préfectures",
      "August slowdown for business",
      "Income tax declarations complex for newcomers",
      "Banking onboarding can be slow for non-residents",
      "Strikes affect transport occasionally",
      "Noise and density in central Paris",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Paris",
      neighbourhood: "Le Marais",
      description: "Central, walkable, LGBTQ+ friendly, strong café culture—premium rents ($1,600–$2,400+ for one-bed).",
    },
    {
      city: "Paris",
      neighbourhood: "Belleville / Ménilmontant",
      description: "More affordable, creative, multicultural—verify building condition; often $1,200–$1,800.",
    },
    {
      city: "Lyon",
      neighbourhood: "Croix-Rousse",
      description: "Hilltop village feel, traboules, popular with creatives—one-beds often $900–$1,400.",
    },
    {
      city: "Toulouse",
      neighbourhood: "Capitole / Saint-Étienne",
      description: "Heart of the pink city, student energy, walkable—rents $800–$1,200 typical.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely in France on a tourist visa?",
      answer:
        "No—Schengen tourism does not authorise remote work for your employer. You need an appropriate long-stay visa and work authorisation that matches your situation; verify with a French consulate and lawyer.",
    },
    {
      question: "Is Paris mandatory for remote workers?",
      answer:
        "No—Lyon, Toulouse, Nantes, and Bordeaux offer lower rents and strong infrastructure. Paris suits those who need maximum networking density.",
    },
    {
      question: "Do I need French for daily life?",
      answer:
        "English works in multinationals and tech, but préfecture, banking, and landlords expect French. B1 level transforms outcomes.",
    },
    {
      question: "How is healthcare funded?",
      answer:
        "Through social security contributions once affiliated, plus a complementary mutuelle. Employees are often auto-enrolled—self-employed register via URSSAF.",
    },
    {
      question: "Are taxes high?",
      answer:
        "Income tax is progressive and social contributions are substantial—effective rates can surprise newcomers. Plan with a French accountant before moving.",
    },
    {
      question: "Is France safe for expats?",
      answer:
        "Generally yes—standard urban awareness in large cities. Suburban transport late at night varies by line—check local advice.",
    },
  ],

  updated: "April 2026",
  wordCount: 2100,
};
