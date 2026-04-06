import type { CountryGuide } from "../types";

export const belgium: CountryGuide = {
  slug: "belgium",
  country: "Belgium",
  flag: "🇧🇪",
  continent: "Europe",
  capital: "Brussels",
  currency: "EUR",
  language: "Dutch / French / German",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2200,
  seoTitle: "Working in Belgium: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Belgium or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "EU and NATO institutions in Brussels",
    "Excellent trains to London, Paris, Amsterdam",
    "Chocolate, beer, and comic culture",
    "Strong labour protections",
    "Multilingual environment",
  ],
  visaOptions: [
    {
      name: "Single permit (combined work + residence)",
      duration: "Up to 3 years",
      cost: "€350+",
      requirements: "Employer files for shortage or salary criteria",
    },
    {
      name: "EU Blue Card Belgium",
      duration: "Linked to job",
      cost: "Fees",
      requirements: "Salary threshold, degree recognition",
    },
  ],
  cities: [
    {
      name: "Brussels",
      vibe: "Institutional, diverse, bilingual tension fun",
      avgRent: "$1,100–$1,900/month",
      coworkingSpaces: "Factory Forty, Betacowork",
    },
    {
      name: "Antwerp",
      vibe: "Fashion, port, Flemish buzz",
      avgRent: "$950–$1,600/month",
      coworkingSpaces: "Fosbury, Spaces",
    },
    {
      name: "Ghent",
      vibe: "Medieval, student energy",
      avgRent: "$850–$1,400/month",
      coworkingSpaces: "De Hoorn",
    },
  ],
  costBreakdown: {
    rent: "$850–$1,900/month",
    food: "$320–$520/month",
    transport: "$50–$90/month",
    coworking: "$170–$320/month",
  },
  taxInfo:
    "High social contributions; married couples taxed jointly — complex but accountant-navigable.",
  communityTips:
    "Learn French or Dutch depending on region, join beer club networking, expect admin paperwork.",
  bestFor: ["EU institutions", "Rail travel", "Multilingual life", "Food lovers"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Non-EU workers typically need a Belgian employer to sponsor a single permit (gewone arbeidsvergunning / permis unique) combining work authorisation and residence. The employer proves labour market tests or shortage occupation where required, files regionally (Flanders, Brussels, Wallonia rules differ), and you apply for a D visa at the Belgian consulate before entering to collect your residence card.

EU Blue Card route suits highly qualified employment above salary thresholds with recognised degrees—faster mobility after holding it elsewhere in the EU in some cases.

After arrival, register at your commune, obtain a national number, choose mutuelle, and open a bank account—appointments can take weeks in Brussels.

Remote work for a non-Belgian employer without local sponsorship is not automatically covered—do not confuse EU free movement (for EU citizens) with third-country rules.

Renewals tie to continued employment and compliance. Rejections often involve salary floors, wrong regional filing, or incomplete medical insurance—use an employer's immigration counsel where possible.
`.trim(),

  bankingTips: `
ING Belgium, BNP Paribas Fortis, KBC, and Hello bank! serve residents. You need ID, address proof, and often your employment contract—non-EU residence cards must be current.

Bancontact dominates retail payments; credit cards less ubiquitous than US—debit rules.

Wise works for receiving foreign income; Belgian IBAN needed for salary and many landlords.

Cross-border workers living in France or Netherlands while working in Belgium need specialist payroll advice—bank residency may follow tax residency.

ATM: use your bank's network; avoid third-party fees at stations late at night.
`.trim(),

  healthcareInfo: `
Belgium's mandatory health insurance (mutuelle / ziekenfonds) pairs with state reimbursement—employees register via employer; self-employed via social insurance fund.

Care quality is excellent; waiting times for non-urgent specialists vary—mutuelle top-ups speed access. Emergency: 112 or local GP out-of-hours.

Mental health coverage improves but therapists may be private-pay—check mutuelle.

Pharmacies are split French/Dutch by region—bring prescriptions from EU doctors when possible.

Dental and optical often need supplemental insurance—budget extra if you need orthodontics.
`.trim(),

  culturalTips: `
Belgium is linguistically divided—French in Wallonia, Dutch in Flanders, German border community small—Brussels is officially bilingual but English works in EU circles. Avoid Flanders vs Wallonia clichés; appreciate local festivals (carnaval, Gentse feesten).

Work culture balances Northern European structure with long lunches in some sectors. Beer culture is serious—learn your Trappists.

Bureaucracy is multilingual paperwork—scan everything. Housing in Brussels is competitive—start search early, watch rental scams.

Tipping: round up taxis; service included in many restaurants. Direct feedback is diplomatic—consensus matters in teams.
`.trim(),

  realMonthlyCost: `
Example month for a single employed remote worker living in Brussels (Ixelles / Etterbeek style):

Rent (one-bed): $1,450
Utilities + internet: $155
Transport (STIB monthly): $55
Groceries: $360
Eating out / beer twice weekly: $260
Coworking: $195
Mutuelle + medical reserve: $95
Phone + software: $45
Gym: $55
Miscellaneous: $130

Indicative total: about $2,760.

Antwerp and Ghent often shave 10–20% off Brussels rent; cross-border living in Flanders edge can reduce housing if you accept commute.
`.trim(),

  expatCommunities: [
    "Internations Brussels",
    "Brussels Expats Facebook",
    "American Club of Brussels",
    "Meetup Belgium — tech & language",
    "Antwerp Expats",
    "Ghent Expats",
    "r/belgium",
    "EU bubble networking events",
  ],

  prosAndCons: {
    pros: [
      "Heart of EU institutions and NATO",
      "Fast trains to London, Paris, Amsterdam, Cologne",
      "Excellent healthcare and education options",
      "Multilingual career paths",
      "Strong worker protections",
      "Chocolate, beer, and festival culture",
      "Compact country—weekend trips easy",
      "English common in Brussels professional life",
      "Growing startup and fintech scene",
      "Good cycling infrastructure in cities",
    ],
    cons: [
      "High tax and social contributions",
      "Brussels housing shortage and competition",
      "Complex regional rules (three regions)",
      "Weather grey November–March",
      "Traffic and roadworks in Brussels",
      "Third-country work permits employer-dependent",
      "Joint taxation can surprise couples",
      "Admin slow in some communes",
      "Language politics sensitive—learn local norms",
      "Airport noise in Brussels suburbs",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Brussels",
      neighbourhood: "Ixelles",
      description: "Matongé African quarter, cafés, EU-adjacent—popular; one-beds $1,200–$1,900.",
    },
    {
      city: "Brussels",
      neighbourhood: "Saint-Gilles",
      description: "Art nouveau, bars, younger crowd—gentrifying; $1,000–$1,600.",
    },
    {
      city: "Antwerp",
      neighbourhood: "Zuid",
      description: "South district, creative, near museum quarter—$1,000–$1,500.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely for a US company from Belgium?",
      answer:
        "You still need legal residence and work authorisation that matches your activity—typically employer sponsorship or an EU Blue Card pathway. Tourism visas do not authorise work.",
    },
    {
      question: "French or Dutch for Brussels?",
      answer:
        "Both appear officially; English suffices in many EU and tech jobs, but learning one local language helps with landlords and integration.",
    },
    {
      question: "Why are taxes so high?",
      answer:
        "Belgium funds generous social security—expect high payroll taxes but strong benefits; accountants optimise where legal.",
    },
    {
      question: "Is Belgium safe?",
      answer:
        "Generally yes—urban pickpocket awareness in tourist zones; standard precautions on night transport.",
    },
    {
      question: "How hard is housing?",
      answer:
        "Brussels is competitive—use reputable agents, never wire deposits blindly, and prepare references early.",
    },
    {
      question: "Can EU citizens move freely?",
      answer:
        "Yes—register at commune within timelines; obtain national number for healthcare.",
    },
  ],

  updated: "April 2026",
  wordCount: 1980,
};
