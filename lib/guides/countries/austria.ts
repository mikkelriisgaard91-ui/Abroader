import type { CountryGuide } from "../types";

export const austria: CountryGuide = {
  slug: "austria",
  country: "Austria",
  flag: "🇦🇹",
  continent: "Europe",
  capital: "Vienna",
  currency: "EUR",
  language: "German",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2300,
  seoTitle: "Working in Austria: The Complete Expat Guide (2026)",
  seoDescription:
    "Thinking about working in Austria or moving there? Our expat guide covers visas, jobs, salaries, cost of living, and everything you need to know before you go.",
  highlights: [
    "Red-White-Red Card for skilled third-country workers",
    "Vienna: liveable, cultural, coffee house tradition",
    "Ski weekends from major cities",
    "Strong healthcare and transport",
    "German helps with admin",
  ],
  visaOptions: [
    {
      name: "Red-White-Red Card (very highly qualified)",
      duration: "2 years renewable",
      cost: "€120+",
      requirements: "Points system — education, salary, language",
    },
    {
      name: "EU Blue Card Austria",
      duration: "Linked to job",
      cost: "€120+",
      requirements: "Salary threshold, recognised degree",
    },
  ],
  cities: [
    {
      name: "Vienna",
      vibe: "Imperial, music, affordable-for-quality",
      avgRent: "$1,000–$1,800/month",
      coworkingSpaces: "Talent Garden, Spaces, Stockwerk",
    },
    {
      name: "Graz",
      vibe: "Student town, southern slower pace",
      avgRent: "$750–$1,300/month",
      coworkingSpaces: "Impact Hub",
    },
    {
      name: "Salzburg",
      vibe: "Mozart, Alps gateway",
      avgRent: "$900–$1,600/month",
      coworkingSpaces: "Coworking Salzburg",
    },
  ],
  costBreakdown: {
    rent: "$750–$1,800/month",
    food: "$320–$520/month",
    transport: "$50–$90/month (annual pass)",
    coworking: "$160–$320/month",
  },
  taxInfo:
    "Progressive income tax; social insurance via employer for employees — self-employed need SVS registration.",
  communityTips:
    "Coffee houses for quiet work, ski clubs, learn German B1 for long-term integration.",
  bestFor: ["Culture", "Alps", "Central EU", "Healthcare"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
The Red-White-Red Card (Rot-Weiß-Rot – Karte) uses a points system for very highly qualified workers, shortage occupations, self-employed key workers, and other tracks. You typically need a job offer or clear business case, recognised qualifications, German or English at required levels depending on category, accommodation, and health insurance.

Employers often file the Arbeitgebererklärung; you submit biometrics and documents at the Austrian embassy or MA35 in Vienna for residence processing. EU Blue Card route parallels Germany with Austrian salary floors—compare eligibility.

After approval, register residence (Meldezettel), obtain e-card health insurance, and start SVS or GKK contributions as applicable.

Renewal requires continued employment or business viability, language progression in some tracks, and integration module completion where mandated.

Common pitfalls: insufficient points, salary below threshold, wrong RWR category—use official AMS checklists and a lawyer for first applications.
`.trim(),

  bankingTips: `
Erste Bank, Bank Austria, Raiffeisen, and easybank serve residents. You need Meldezettel, passport, residence title, and proof of income—appointments often required.

SEPA transfers dominate; contactless cards universal. Wise/Revolut for foreign income—declare to Finanzamt if tax resident.

Cash still popular in rural valleys; cities card-first.

Self-employed: separate business account for SVS and Umsatzsteuer clarity—Steuerberater early.
`.trim(),

  healthcareInfo: `
Austria's statutory health insurance (GKK via employer or SVS for self-employed) delivers excellent outcomes—choose a Hausarzt for gatekeeping in many cases.

Emergency: 144 (ambulance) or 112. Private hospitals in Vienna add speed for elective care.

Dental basics covered partially—supplement for orthodontics. Mental health therapy access improving—expect waits for public psychologists.

Pharmacies strict but helpful—bring prescriptions from EU doctors.

Mountain sports: consider supplemental accident insurance if you ski off-piste frequently.
`.trim(),

  culturalTips: `
Viennese coffee house culture is UNESCO-worthy—linger with newspaper and Apfelstrudel. Punctuality matters; titles (Herr Doktor) persist in formal settings.

Alpine regions differ from urban Vienna—learn local dialect niceties. Sundays are quiet—no loud DIY.

Direct communication without British small talk—feedback is factual. Seasonal markets (Christkindl, Ostermarkt) anchor social life.

Learn German B1+; English works in tech but Behörde and landlords prefer German. Join ski clubs, Wanderverein hiking, and classical concerts—integration is cultural as much as linguistic.
`.trim(),

  realMonthlyCost: `
Example month for a single employed person in Vienna (districts 5–9, non-luxury):

Rent (one-bed Altbau): $1,280
Utilities + internet: $165
Annual transit pass (Wiener Linien): $52 (monthly equiv.)
Groceries: $340
Eating out / Heuriger: $230
Coworking: $185
Health + dental reserve: $70
Phone + software: $42
Culture / gym: $85
Miscellaneous: $115

Indicative total: about $2,564.

Graz often 15–20% lower rent; Salzburg tourist pressure raises short lets—long leases differ.
`.trim(),

  expatCommunities: [
    "Internations Vienna & Salzburg",
    "Austria Expats Facebook",
    "r/Austria English threads",
    "Meetup Vienna — startups & language",
    "American Women's Association Vienna",
    "Vienna Business Agency events",
    "Graz International",
    "Alpine sports clubs (ÖAV)",
  ],

  prosAndCons: {
    pros: [
      "High quality of life and safety rankings",
      "Excellent healthcare and public transport",
      "Alps on the doorstep",
      "Central EU location",
      "Strong education and childcare options",
      "Clear immigration categories for skilled workers",
      "Vienna culture affordable vs other capitals",
      "Outdoor lifestyle year-round",
      "Reliable infrastructure",
      "Growing English in tech",
    ],
    cons: [
      "German essential for long-term ease",
      "Bureaucracy can be formal and slow",
      "High tax burden on income",
      "Vienna rental competition for prime districts",
      "Sunday trading restrictions",
      "Cold dark winters—plan light and sport",
      "Self-employment SVS costs can surprise",
      "Points system confusing without adviser",
      "Airbnb regulation in cities",
      "Mountain isolation if remote rural",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Vienna",
      neighbourhood: "Neubau",
      description: "Creative, MuseumsQuartier, younger—popular; one-beds $1,100–$1,700.",
    },
    {
      city: "Vienna",
      neighbourhood: "Döbling",
      description: "Leafy, wine hills, quieter—premium; $1,200–$1,900.",
    },
    {
      city: "Graz",
      neighbourhood: "Lend",
      description: "Hip, Mur river, student vibe—$750–$1,150.",
    },
  ],

  faqs: [
    {
      question: "Is Vienna expensive?",
      answer:
        "Versus London or Zurich, often no—rent and culture are reasonable; taxes and dining add up. Compare districts carefully.",
    },
    {
      question: "Do I need German for the Red-White-Red Card?",
      answer:
        "Depends on category—some tracks require A1/A2 German; highly qualified roles may waive initially. Check AMS guidance.",
    },
    {
      question: "Can freelancers get a Red-White-Red Card?",
      answer:
        "Yes under specific self-employed key worker criteria—investment, job creation, or innovation thresholds apply; legal advice essential.",
    },
    {
      question: "How is healthcare funded?",
      answer:
        "Through GKK or SVS contributions as employee or self-employed—low co-pays for covered care.",
    },
    {
      question: "Is Austria good for families?",
      answer:
        "Yes—safe cities, strong schools, outdoor access; Vienna especially ranks highly for family quality of life.",
    },
    {
      question: "Ski every weekend?",
      answer:
        "Possible from Vienna/Salzburg/Innsbruck corridors—budget time, passes, and winter tyres if driving.",
    },
  ],

  updated: "April 2026",
  wordCount: 2000,
};
