import type { CountryGuide } from "../types";

export const switzerland: CountryGuide = {
  slug: "switzerland",
  country: "Switzerland",
  flag: "🇨🇭",
  continent: "Europe",
  capital: "Bern",
  currency: "CHF",
  language: "German / French / Italian / Romansh",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Hard",
  internetSpeed: "Excellent",
  costOfLiving: "Very High",
  avgMonthlyCost: 3800,
  seoTitle: "Working in Switzerland: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Switzerland or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Highest salaries in Europe for many roles",
    "Cantonal tax competition — choose wisely",
    "Alpine lifestyle and precision infrastructure",
    "Central for EU business travel (non-EU permits harder)",
    "Multilingual regions in one country",
  ],
  visaOptions: [
    {
      name: "L / B residence permits (employed)",
      duration: "Linked to contract / quota",
      cost: "Cantonal fees",
      requirements: "Swiss or EU employer — non-EU subject to quotas",
    },
    {
      name: "Lump-sum taxation cantons",
      duration: "Negotiated",
      cost: "High wealth entry",
      requirements: "HNWI route — specialist advice only",
    },
  ],
  cities: [
    {
      name: "Zurich",
      vibe: "Finance, lake, expensive",
      avgRent: "$2,000–$3,500/month",
      coworkingSpaces: "Impact Hub, Spaces, Kraftwerk",
    },
    {
      name: "Geneva",
      vibe: "UN city, French influence",
      avgRent: "$1,900–$3,200/month",
      coworkingSpaces: "Impact Hub, Voisins",
    },
    {
      name: "Basel",
      vibe: "Pharma tri-border",
      avgRent: "$1,600–$2,800/month",
      coworkingSpaces: "Impact Hub Basel",
    },
  ],
  costBreakdown: {
    rent: "$1,600–$3,500/month",
    food: "$500–$800/month",
    transport: "$70–$90/month (Halbtax)",
    coworking: "$300–$550/month",
  },
  taxInfo:
    "Taxes vary dramatically by canton and Gemeinde; withholding for cross-border workers — mandatory Swiss tax advice.",
  communityTips:
    "Learn local language of your canton, join Alpine clubs, use comparis.ch for insurance.",
  bestFor: ["High salaries", "Mountains", "Stability", "Multilingual careers"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Switzerland does not offer a generic digital nomad visa. Non-EU/EFTA nationals usually need a job offer from a Swiss employer who can secure quota approval (annual federal limits) and cantonal authorisation. Permits: L short-term, B residence, C settlement after long stay—eligibility depends on nationality, salary, and role.

EU/EFTA citizens access simplified hiring but still register with commune and employer declarations.

After approval, register at Gemeinde, obtain health insurance within three months (mandatory), open bank account, and get residence permit card.

Lump-sum taxation exists in select cantons for wealthy individuals—requires significant assets and professional structuring only.

Cross-border workers from France/Germany/Italy follow special regimes—payroll often withholds at source.

Renewals tied to employment; losing job can trigger permit countdown—plan with HR.

Non-EU remote workers without Swiss employer generally cannot settle long-term without a qualifying business or family route—verify with SEM and cantonal migration offices.
`.trim(),

  bankingTips: `
UBS, Credit Suisse (now UBS), PostFinance, Raiffeisen, and cantonal banks dominate. Accounts need residence permit, ID, and proof of address—non-residents face strict onboarding.

CHF is strong—budget FX when receiving USD/EUR. Wise and Revolut help but large Swiss landlords expect local references.

Twint is ubiquitous for P2P; cash still used in mountain kiosks.

Wealth reporting is serious—coordinate with a Treuhänder. US persons face FATCA friction—choose banks experienced with US clients.

Mortgages require stable Swiss income—remote foreign employers rarely qualify without local contract.
`.trim(),

  healthcareInfo: `
Mandatory basic health insurance (Krankenversicherung) must be chosen within three months of residence—companies include Helsana, Swica, CSS, and others—franchise (Franchise) choices affect premiums (typically CHF 300–2,500 deductible bands).

Quality is world-leading; waiting times low for insured care. Emergency: 144 or 112.

GP gatekeeping varies by insurer model—Telmed vs standard.

Dental and vision often supplemental—budget for kids orthodontics.

Pharmacies professional; generics cheaper than US equivalents.

Supplemental insurance unlocks private hospitals—compare on comparis.ch.
`.trim(),

  culturalTips: `
Punctuality is sacred—miss a train by seconds and it is gone. Quiet hours Sunday—no loud laundry. Recycling rules are strict—learn Gemeinde guides.

German Swiss (Schweizerdeutsch) sounds tough—High German works in formal settings; French in Romandie; Italian in Ticino.

Networking is formal—dress well for finance interviews. Apéro culture builds trust—accept cheese and wine politely.

Outdoor life is mandatory—ski, hike, swim—join SAC alpine club. Direct feedback is respectful—consensus-driven but efficient.

Tipping: round francs in restaurants; service often included.
`.trim(),

  realMonthlyCost: `
Example month in Zurich (single, modest lifestyle, CHF shown as USD equiv.):

Rent (small one-bed): $2,400
Health insurance (with franchise): $380
Transport (GA or half-fare + zones): $85
Groceries (Migros/Coop): $520
Eating out twice: $320
Coworking: $380
Phone + software: $55
Gym / outdoor pass: $95
Miscellaneous: $200

Indicative total: about $4,435.

Geneva similar; Zug and Schwyz cantons lower tax but housing competitive; rural cantons cut rent but need car.
`.trim(),

  expatCommunities: [
    "Internations Zurich & Geneva",
    "American International Club Zurich",
    "Geneva English Speaking Network",
    "Meetup Switzerland — hiking & tech",
    "r/Switzerland",
    "Basel Expats",
    "Lausanne Mums / families groups",
    "Swiss startup events",
  ],

  prosAndCons: {
    pros: [
      "Top salaries and infrastructure quality",
      "Stunning nature and outdoor access",
      "Safe, clean, efficient cities",
      "Central Europe travel hub",
      "Low headline crime",
      "Excellent healthcare outcomes",
      "Strong schools (international options)",
      "Multilingual career paths",
      "Tax competition between cantons",
      "Precision and reliability culture",
    ],
    cons: [
      "Very high cost of living",
      "Non-EU permits quota-limited",
      "Complex tax residency rules",
      "Housing shortage in Zurich and Geneva",
      "Sunday quiet laws",
      "Schweizerdeutsch learning curve",
      "Remote-only foreign jobs rarely qualify for permits",
      "Insurance and healthcare mandatory costs",
      "Banking strict for non-residents",
      "Can feel isolating for newcomers without clubs",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Zurich",
      neighbourhood: "Kreis 4 / Aussersihl",
      description: "Trendy, bars, less stiff than Seefeld—$2,000–$3,000 for one-bed.",
    },
    {
      city: "Geneva",
      neighbourhood: "Eaux-Vives",
      description: "Lake walks, UN-adjacent, premium—$2,200–$3,500.",
    },
    {
      city: "Basel",
      neighbourhood: "Grossbasel Altstadt",
      description: "Rhine proximity, pharma crowd—$1,800–$2,600.",
    },
  ],

  faqs: [
    {
      question: "Can I live in Switzerland on a remote job from abroad?",
      answer:
        "Non-EU nationals typically need a Swiss employer and quota-backed permit—pure remote foreign employment rarely qualifies. EU citizens have easier access but must still register and comply with reporting.",
    },
    {
      question: "Which canton has lowest tax?",
      answer:
        "Varies by income and Gemeinde—Zug, Schwyz, and Nidwalden often cited, but housing and commute matter—model with a tax adviser.",
    },
    {
      question: "Is German required?",
      answer:
        "Depends on region—Swiss German dominates socially; French/Romandie for Geneva. English works in multinationals but integration needs local language.",
    },
    {
      question: "How expensive is health insurance?",
      answer:
        "Mandatory basic insurance runs roughly CHF 300–500+ monthly before franchise choice—children cheaper; compare annually.",
    },
    {
      question: "Can I drive with my licence?",
      answer:
        "Many licences convertible within deadlines—check SEM/road office rules for your country.",
    },
    {
      question: "Is Switzerland family-friendly?",
      answer:
        "Yes—outdoor safety, schools, activities—if you can afford housing and childcare in cities.",
    },
  ],

  updated: "April 2026",
  wordCount: 2080,
};
