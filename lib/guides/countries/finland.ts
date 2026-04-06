import type { CountryGuide } from "../types";

export const finland: CountryGuide = {
  slug: "finland",
  country: "Finland",
  flag: "🇫🇮",
  continent: "Europe",
  capital: "Helsinki",
  currency: "EUR",
  language: "Finnish / Swedish",
  timezone: "EET (UTC+2)",
  visaDifficulty: "Hard",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2600,
  seoTitle: "Working in Finland: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Finland or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Top education and safety rankings",
    "Helsinki gaming and tech scene",
    "Nature and lakes everywhere",
    "Excellent English proficiency",
    "Strong public services",
  ],
  visaOptions: [
    {
      name: "Residence permit for employed person",
      duration: "Linked to contract",
      cost: "€490+",
      requirements: "Job offer meeting income rules",
    },
    {
      name: "Startup permit",
      duration: "2 years",
      cost: "€520+",
      requirements: "Innovative business plan, funding, mentor",
    },
  ],
  cities: [
    {
      name: "Helsinki",
      vibe: "Coastal, design, compact centre",
      avgRent: "$1,200–$2,000/month",
      coworkingSpaces: "Maria 01, MOW Supernova",
    },
    {
      name: "Tampere",
      vibe: "Industrial heritage, growing games",
      avgRent: "$800–$1,400/month",
      coworkingSpaces: "Platform6",
    },
    {
      name: "Turku",
      vibe: "Archipelago gateway",
      avgRent: "$750–$1,300/month",
      coworkingSpaces: "SparkUp",
    },
  ],
  costBreakdown: {
    rent: "$750–$2,000/month",
    food: "$380–$580/month",
    transport: "$65–$75/month (HSL)",
    coworking: "$200–$380/month",
  },
  taxInfo:
    "Progressive state and municipal tax; church tax optional — Vero handles filings online with bank IDs.",
  communityTips:
    "Respect personal space, join sauna evenings for bonding, brace for dark winters with bright lamps.",
  bestFor: ["Safety", "Nature", "Gaming industry", "Education"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Non-EU nationals typically apply for a residence permit for an employed person after receiving a Finnish job offer that meets salary thresholds and labour market considerations. Migri (Finnish Immigration Service) handles online applications; biometrics at embassy follow. EU Blue Card thresholds may apply if you choose that track.

Startup permit suits founders with innovative scalable plans, funding, and mentor support—different evidence bundle.

EU citizens register right of residence after three months if working—straightforward.

After approval, obtain Finnish personal identity code, open bank account with strong ID (sometimes challenging before code—employer letters help), register for healthcare (Kela).

Renew permits on time; unemployment benefits have strict conditions for non-citizens.

Remote work for non-Finnish employers without local entity is generally outside standard employment permits—confirm with Migri.

Seasonal note: winter darkness affects mood—plan light therapy and community.
`.trim(),

  bankingTips: `
Nordea, OP, Danske Finland, and S-Pankki serve retail. Strong online banking—bank credentials needed for many services.

Wise for FX—declare if resident. MobilePay Finland popular.

Euro currency—no Nordic krona confusion.

Cash uncommon; cards and apps dominate.

Mortgage needs stable local employment history.

Crypto taxed—Vero guidance evolving.
`.trim(),

  healthcareInfo: `
Public healthcare (municipal health centres) funded by taxes—register after residence. Quality high; non-urgent queues exist.

Emergency: 112. Private clinics in Helsinki for speed.

Kela reimbursements for medicines and travel—register card.

Mental health: therapy access improving—English therapists in capital region.

Sauna is not healthcare but helps wellbeing—respect public sauna etiquette (sit on towel).

Dental: partially subsidised—check Kela tables.
`.trim(),

  culturalTips: `
Silence is comfortable—not rude. Personal space large—don't small-talk on buses. Sauna is bonding—accept invitations; nudity norms differ from Anglo culture—follow locals.

English excellent in tech; Finnish helps in smaller towns and integration.

Winter is long—vitamin D, skiing, and light therapy. Summer is sacred—cottages (mökki) and midnight sun.

Coffee consumption world-class—join for meetings. Tipping minimal—round up sometimes.

Direct communication—yes means yes, no means no.
`.trim(),

  realMonthlyCost: `
Example month in Helsinki (single, modest):

Rent (one-bed): $1,450
Utilities + internet: $130
HSL monthly: $70
Groceries (K/S-market): $390
Eating out: $260
Coworking: $220
Phone + software: $48
Gym + sauna visits: $85
Miscellaneous: $130

Indicative total: about $2,783.

Tampere and Turku often 20–35% lower rent than Helsinki core.
`.trim(),

  expatCommunities: [
    "Internations Helsinki & Tampere",
    "Finland — All About Expats Facebook",
    "r/Finland",
    "Meetup Finland — gaming & nature",
    "Helsinki Business Hub",
    "Slush startup community",
    "International House Helsinki",
    "Winter swimming clubs (avantouinti)",
  ],

  prosAndCons: {
    pros: [
      "Extremely safe and stable",
      "World-class education and digital government",
      "Nature and lakes everywhere",
      "Strong gaming and tech cluster",
      "English widely spoken in cities",
      "Sauna culture and work-life boundaries",
      "EU membership benefits",
      "Clean air and water",
      "Strong parental policies",
      "Honest direct communication",
    ],
    cons: [
      "Long dark winters—mental health planning",
      "High taxes",
      "Housing competition in Helsinki",
      "Permits tied to Finnish employers",
      "Finnish language hard for many",
      "Integration can feel distant without hobbies",
      "Alcohol pricing via state monopoly",
      "Remote foreign jobs rarely fit permits",
      "Some rural isolation",
      "Limited small talk can feel cold initially",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Helsinki",
      neighbourhood: "Kallio",
      description: "Bars, students, edgy—$1,200–$1,900 one-bed.",
    },
    {
      city: "Helsinki",
      neighbourhood: "Punavuori",
      description: "Design, cafés, central—$1,300–$2,000.",
    },
    {
      city: "Tampere",
      neighbourhood: "Tampella",
      description: "Waterfront redevelopment, games studios—$850–$1,350.",
    },
  ],

  faqs: [
    {
      question: "Is Finland really dark in winter?",
      answer:
        "Yes—Helsinki has very short days in December; plan light, exercise, and social routines.",
    },
    {
      question: "Do I need Finnish for work?",
      answer:
        "Often no in tech and gaming; yes for many public-facing roles and long-term citizenship.",
    },
    {
      question: "How is startup permit different?",
      answer:
        "It targets founders with innovation and funding—business plan scrutiny is high; not a generic nomad visa.",
    },
    {
      question: "Is healthcare free?",
      answer:
        "Mostly tax-funded with small user fees—register with municipality after residence.",
    },
    {
      question: "Can I see northern lights?",
      answer:
        "Yes in Lapland winter—Helsinki occasionally; not a daily commute feature.",
    },
    {
      question: "EU citizen process?",
      answer:
        "Register right of residence, obtain Finnish ID number, open life locally.",
    },
  ],

  updated: "April 2026",
  wordCount: 1920,
};
