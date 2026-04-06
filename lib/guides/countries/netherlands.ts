import type { CountryGuide } from "../types";

export const netherlands: CountryGuide = {
  slug: "netherlands",
  country: "Netherlands",
  flag: "🇳🇱",
  continent: "Europe",
  capital: "Amsterdam",
  currency: "EUR",
  language: "Dutch",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "High",
  avgMonthlyCost: 2600,
  seoTitle: "Working Remotely in the Netherlands 2026 — DAFT, Housing & Taxes",
  seoDescription:
    "Guide to remote work in NL: highly skilled migrant route, DAFT for US citizens, Amsterdam and Rotterdam costs, 30% ruling context.",
  highlights: [
    "Excellent English in business",
    "World-class cycling and public transport",
    "Highly skilled migrant scheme for qualifying salaries",
    "DAFT treaty route for US entrepreneurs",
    "Dense coworking scene in Randstad",
  ],
  visaOptions: [
    {
      name: "Highly Skilled Migrant (employer-sponsored)",
      duration: "Up to 5 years",
      cost: "Employer-led",
      requirements: "Recognised sponsor employer, salary above threshold",
    },
    {
      name: "DAFT (Dutch-American Friendship Treaty)",
      duration: "2 years renewable",
      cost: "€300+",
      requirements: "US citizenship, viable business plan, €4,500+ capital",
    },
  ],
  cities: [
    {
      name: "Amsterdam",
      vibe: "Canals, international, brutally tight housing",
      avgRent: "$1,600–$2,800/month",
      coworkingSpaces: "Tribes, Spaces, WeWork",
    },
    {
      name: "Rotterdam",
      vibe: "Modern architecture, port logistics, more space per euro",
      avgRent: "$1,100–$1,900/month",
      coworkingSpaces: "CIC, 42Workspace",
    },
    {
      name: "The Hague",
      vibe: "Government, NGOs, beach at Scheveningen, expat families",
      avgRent: "$1,200–$2,100/month",
      coworkingSpaces: "Tribes, Mindspace",
    },
  ],
  costBreakdown: {
    rent: "$1,100–$2,800/month",
    food: "$350–$550/month",
    transport: "$100–$120/month (OV-chipkaart)",
    coworking: "$200–$380/month",
  },
  taxInfo:
    "30% ruling offers partial tax relief for qualifying inbound hires but eligibility tightened—minimum salary floors and distance-from-border tests matter. Box 3 wealth tax rules are in flux—consult a Dutch adviser. DAFT entrepreneurs file BTW and income tax like other ZZP structures.",
  communityTips:
    "Meetup.com tech events, expat centres, LinkedIn housing alerts, and Facebook groups—start searching months before arrival; scams exist.",
  bestFor: ["English-friendly", "Cycling life", "EU logistics", "Design & tech"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
The Netherlands does not offer a one-size-fits-all “digital nomad visa” comparable to Croatia or Spain. Most remote workers either enter as highly skilled employees sponsored by Dutch entities, start a Dutch business under DAFT (US citizens) or standard self-employment rules (EU/EEA), or use intra-corporate transfers. Understanding which box you fit avoids rejected IND filings.

Highly Skilled Migrant (kennismigrant)

If you sign a Dutch employment contract with a recognised sponsor above the gross salary threshold (higher for under-30s in some years), the IND issues a combined permit. Remote foreign employers rarely qualify unless they establish Dutch payroll—consult an employer of record.

DAFT for US entrepreneurs

The Dutch-American Friendship Treaty lets US nationals run an innovative Dutch company with meaningful capital (traditionally at least €4,500 in business bank balance) and a solid business plan. You register with KvK, open accounts, obtain insurance, and prove economic benefit to the Netherlands. Renewals require showing activity—not passive shelf companies.

Self-employed (ZZP) for EU citizens

EU/EEA freelancers can relocate under free movement but must register locally, get health insurance, and pay income tax/BTW. Non-EU freelancers face tougher “essential to Dutch economy” tests unless married to EU partners or other exceptions apply.

Processing

IND standard decision windows are often quoted around 90 days for many permits; expedited options exist for certain sponsors. Fees update annually—budget legal support for DAFT to avoid undercapitalised plans.

After arrival

Register at gemeente, get BSN, open bank, choose Dutch health insurance within four months, swap driving licence if eligible, and join a fiets lease if commuting.

Common rejections

Undercooked business plans for DAFT, sponsor salary below threshold, or missing antecedents certificates—double-check apostilles.
`.trim(),

  bankingTips: `
Dutch banking is modern—ING, ABN AMRO, Rabobank, bunq, and Revolut Business compete. IBAN discrimination is illegal within EU payments; nonetheless landlords prefer Dutch IBANs for rent. Non-residents may need BSN + address proof to open accounts; some neo-banks onboard faster.

iDEAL dominates online checkouts—link it to your Dutch account. Contactless tap rules; cash is rare in Amsterdam supermarkets.

Wise remains excellent for USD/GBP client income landing in euros, but DDU tax reporting stays your job. Business owners must separate BTW, income tax, and private draws—accountants (boekhouder) are common.

Mortgages require stable Dutch income history—remote workers on foreign payrolls face scrutiny. Credit cards are less ubiquitous than US—debit rules daily life.

Watch for US FATCA extra forms at banks if you are American—choose institutions experienced with US persons.
`.trim(),

  healthcareInfo: `
The Netherlands mandates basic health insurance for residents—every adult picks a policy from competing providers (Zilveren Kruis, CZ, VGZ, etc.) with mandatory deductible (eigen risico) traditionally €385 unless you pay higher premiums to reduce it. Children under 18 ride on parents' policies without extra basic premiums.

GPs (huisarts) gate referrals—register early; English-speaking practices exist in Amsterdam, Rotterdam, The Hague. Specialists require referrals except emergencies.

Mental health waits can stretch—international clinics offer private pay options. Dental basic insurance is limited; add a tandarts package.

Emergency: 112 for life threat; for GP after hours call huisartsenpost. Pharmacies (apotheek) coordinate prescriptions.

Pregnancy care ranks among the world's best—midwife-led unless risk factors intervene.

Supplement with travel insurance only for short visits—residents must maintain Dutch basic cover.
`.trim(),

  culturalTips: `
Dutch directness (bespreekbaarheid) surprises newcomers—feedback is blunt but aims at efficiency. Meetings start on time; agendas are real. Consensus (polderen) slows decisions but builds buy-in—expect multi-stakeholder alignment.

Work-life boundaries are strong—9–5 is respected; overtime is not a badge. Cycling is identity: invest in rain gear, lights, and lock etiquette—never park in pedestrian zones.

English proficiency is among the world's highest for non-native countries—yet Dutch integration courses loom for long-stayers. Learn pleasantries; locals appreciate tries.

Weather is grey November–March—plan hygge lamps, skating on canals when safe, and weekend trips to Texel or Maastricht.

Housing queues reward stable income and polite applications—write short Dutch intro letters even if imperfect. Social life clusters around borrels (Friday drinks), King’s Day orange madness, and club sports (hockey, rowing).

Tipping is modest—round up in taxis; service often included.
`.trim(),

  realMonthlyCost: `
Example month for a single highly skilled employee in Amsterdam (excludes 30% ruling scenarios):

Rent (one-bed, non-centre but Ring-friendly): $2,050
Utilities + internet: $175
Health insurance + eigen risico reserve: $165
Transport (OV-chip unlimited-ish + occasional NS): $115
Groceries (Albert Heijn, markets): $380
Eating out twice weekly: $260
Gym / climbing: $55
Coworking hot-desk: $220
Phone + software: $45
Miscellaneous (clothing, weekend trip): $200

Indicative total: about $3,665.

Rotterdam or Utrecht might shave 15–25% off rent. The Hague offers diplomatic expat density with beach proximity—mid pricing. Student cities (Groningen, Eindhoven) cheaper but fewer international roles.
`.trim(),

  expatCommunities: [
    "Internations Amsterdam & Rotterdam",
    "Expats Amsterdam Facebook",
    "American Netherlands Facebook",
    "DAFT USA Netherlands Facebook",
    "TechNL meetups",
    "Women in Tech NL",
    "NL Reddit r/Netherlands",
    "Housing groups (watch scams—never wire deposits blindly)",
  ],

  prosAndCons: {
    pros: [
      "Near-universal English in professional life",
      "Best-in-class cycling and public transport",
      "Strong rule-of-law and social safety nets",
      "International business hub (Schiphol logistics)",
      "DAFT unlocks US entrepreneurs",
      "30% ruling still helps qualifying inbound hires",
      "High digital government services (DigiD)",
      "Excellent healthcare outcomes",
      "Diverse food and culture in Randstad",
      "EU base with strong salaries",
    ],
    cons: [
      "Amsterdam housing shortage and extreme rents",
      "Grey wet winters",
      "Competitive rental market—landlord references tough for newcomers",
      "Tax burden high without ruling",
      "Box 3 wealth tax complexity",
      "Car ownership expensive—parking permits scarce",
      "ZZP/self-employed route hard for non-EU",
      "Immigration paperwork meticulous",
      "Noise in city centre short-term lets",
      "Energy prices volatile historically",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Amsterdam",
      neighbourhood: "Jordaan",
      description:
        "Canals, indie shops, tourist pressure but iconic—quiet side streets vs noisy main drags. One-beds often €1,800–€2,600.",
    },
    {
      city: "Amsterdam",
      neighbourhood: "De Pijp",
      description:
        "Foodie heaven, Albert Cuyp market, younger crowd, decent tram links. Rents competitive with Jordaan—€1,700–€2,400.",
    },
    {
      city: "Rotterdam",
      neighbourhood: "Kralingen",
      description:
        "Leafy, near Erasmus University, lake Kralingse Plas runs, family-friendly. One-beds €1,200–€1,800.",
    },
  ],

  faqs: [
    {
      question: "What is the 30% ruling?",
      answer:
        "A tax facility where employers may pay part of salary as untaxed reimbursement for extraterritorial costs for qualifying incoming employees—subject to salary minimums, distance-from-border history, and other tests. Rules tightened in recent years; verify with payroll.",
    },
    {
      question: "Can US citizens move without a job offer?",
      answer:
        "DAFT allows eligible US entrepreneurs to start Dutch businesses without traditional employment sponsorship if they meet capital and business substance tests—lawyers strongly recommended.",
    },
    {
      question: "Amsterdam vs Rotterdam vs The Hague?",
      answer:
        "Amsterdam: finance, tech, tourism, highest rents. Rotterdam: logistics, architecture, port startups, space. The Hague: government, NGOs, international law, beach—popular with families.",
    },
    {
      question: "Do I need a car?",
      answer:
        "Rarely in Randstad—bike + train covers most. Cars help for rural clients or Belgium commutes; budget parking and road tax.",
    },
    {
      question: "Is healthcare expensive?",
      answer:
        "Basic insurance runs roughly €120–€150 before deductibles; you pay eigen risico until threshold. Overall costs align with high service quality.",
    },
    {
      question: "How bad is the housing search?",
      answer:
        "Brutal in Amsterdam—start early, use agents cautiously, prepare income proof, consider satellite cities (Haarlem, Utrecht) with NS commutes.",
    },
  ],

  updated: "April 2026",
  wordCount: 2650,
};
