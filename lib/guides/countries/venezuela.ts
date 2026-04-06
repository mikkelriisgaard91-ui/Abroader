import type { CountryGuide } from "../types";

export const venezuela: CountryGuide = {
  slug: "venezuela",
  country: "Venezuela",
  flag: "🇻🇪",
  continent: "South America",
  capital: "Caracas",
  currency: "VES (USD widely used informally for rents and savings — verify legal context)",
  language: "Spanish",
  timezone: "VET (UTC−4)",
  visaDifficulty: "Medium",
  internetSpeed: "Average",
  costOfLiving: "Low",
  avgMonthlyCost: 800,
  seoTitle: "Working in Venezuela: Remote Worker Context Guide (2026)",
  seoDescription:
    "Practical context for Venezuela: Caracas and regional hubs, visas, currency realities, safety planning, and why many remote workers treat stays as short and researched.",
  highlights: [
    "Dramatic landscapes — Andes, Los Roques, Angel Falls access (logistics-dependent)",
    "Caracas remains the main services hub — altitude milder than Bogotá pockets",
    "Currency duality — USD pricing alongside bolívares — rules shift; professional advice essential",
    "Infrastructure strain — power, water, and internet vary sharply by zone and building",
    "Large diaspora — on-the-ground reality changes faster than guidebooks; verify everything",
  ],
  visaOptions: [
    {
      name: "Tourist visa / visa-free entry",
      duration: "Highly nationality-dependent — confirm with Venezuelan consulate serving your jurisdiction",
      cost: "Varies — fees change with policy",
      requirements: "Passport validity, itinerary, funds — documentation lists update frequently",
    },
    {
      name: "Other categories",
      duration: "Business, family, residence — case-specific and paperwork-heavy",
      cost: "Fees + translations + often legal support",
      requirements:
        "SAIME appointments, apostilles, police certificates — use official SAIME / consulate guidance only",
    },
  ],
  cities: [
    {
      name: "Caracas",
      vibe: "Mountain-edge capital — micro-climates by altitude; services cluster in eastern municipios",
      avgRent: "$350–$1,000/month USD-equivalent — neighbourhood-dependent",
      coworkingSpaces: "Limited vs regional peers — private offices and resilient home setups",
    },
    {
      name: "Valencia",
      vibe: "Industrial heartland — lower altitude heat, more spread-out than Caracas core",
      avgRent: "$280–$750/month",
      coworkingSpaces: "Sparse — verify fibre and backup power before signing",
    },
    {
      name: "Mérida",
      vibe: "Andean university city — cooler air, outdoor culture — smaller infrastructure footprint",
      avgRent: "$250–$650/month",
      coworkingSpaces: "Café + home office culture — confirm speeds seasonally",
    },
  ],
  costBreakdown: {
    rent: "$250–$1,000/month — often quoted in USD in expat-facing listings",
    food: "$150–$350/month — local mercados vs imported premiums",
    transport: "$20–$60/month — metro/bus where safe; private drivers common for night moves",
    coworking: "$50–$130/month where available",
  },
  taxInfo:
    "Tax and currency regulations are complex and volatile — residents may face obligations on local-sourced income; foreign remote work raises interpretive issues. Exchange controls have a long history — do not move large sums based on chat advice. Engage a Venezuelan accountant and follow official BCV / SENIAT notices if you establish presence beyond tourism.",
  communityTips:
    "Hyper-local knowledge beats headlines — talk to residents about which zones and times feel workable. WhatsApp groups coordinate basics when services dip. Carry patience and redundancy for power and connectivity. Many long-term foreigners maintain exit flexibility — keep documents current.",
  bestFor: ["Family ties", "Spanish fluency", "Experienced emerging-market operators", "Short research visits"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Venezuelan consulates and SAIME handle visas and passport extensions — appointment systems and required documents change — download PDFs from official sites the week you apply, not months-old screenshots.

Overstays and irregular status create exit and re-entry risk — avoid informal advice from fixers promising guarantees.

If pursuing residence categories beyond tourism, expect apostilled criminal records, civil documents, medical exams, and multiple in-person steps — timelines stretch — budget accordingly.

Upon arrival, register stays as regulations require — SIM registration and address declarations can matter for services.

Border areas and remote states carry distinct security and permit issues — research current travel advisories from your government and local partners before road trips.
`.trim(),

  bankingTips: `
Formal banking access for non-residents is constrained — many visitors rely on foreign cards, cash USD held securely, and trusted local settlement networks for rent — always assess legal and safety dimensions.

Digital payment apps fluctuate — ask trusted locals which platforms work week-to-week. Avoid street money changers — scams and counterfeit risk are real.

Keep small bolívare notes for tips and micro-purchases — large USD spreads invite scrutiny — use discretion and receipts where tax-resident.

Inform your home bank — transactions can flag fraud departments. Split cards across bags — loss recovery is harder than in regional peers.
`.trim(),

  healthcareInfo: `
Private clinics in major cities still house skilled professionals — equipment and supply chains vary — pay cash or insure with policies that actually pay locally. Public hospitals face shortages — many residents self-fund medicines.

Travel insurance with medical evacuation may exclude certain regions — read exclusions carefully. Vaccinations should be current; regional disease patterns shift — consult WHO and your clinic.

Mental health strain is societal — therapists exist in cities — Spanish primary. Ambulance reliability varies — private transport plans for emergencies help.

Altitude in Mérida — mild for Andes but hydrate; coasts add heat stress — AC quality in rentals matters.
`.trim(),

  culturalTips: `
Venezuelans are famously warm — music, baseball, and arepas are social glue — accept invitations when safety allows. Politics is deeply personal — listen more than you debate until trust exists.

Personal safety: vary routines, avoid displaying phones in traffic jams, choose trusted drivers at night — neighbourhoods differ block by block — expat Facebook groups are starting points, not gospel.

Dress for climate layers in Caracas — microclimates surprise newcomers. Time perception flexes — government queues do not reward impatience; carry water and documents in triplicate.

Respect for diaspora families is huge — many locals maintain transnational lives — be sensitive about migration stories.
`.trim(),

  realMonthlyCost: `
Example month — varies enormously by neighbourhood, USD vs VES settlement, and backup spending on private services. Illustrative Caracas (eastern municipio, cautious profile):

Rent (secure building, backup plant): $700
Utilities + starlink/mobile redundancy: $120
Private transport buffer: $150
Groceries + filtered water: $280
Eating out selective: $200
Security building / concierge premium: $100
Health out-of-pocket buffer: $150
Contingency (power, meds, taxis): $200

Indicative total: ~$1,900 with wide error bars — Valencia and Mérida can run lower on rent but add travel unpredictability. Treat every budget line as scenario-based.
`.trim(),

  expatCommunities: [
    "City-specific WhatsApp safety and housing groups (vet carefully)",
    "Baseball fan clubs — surprising networking venues",
    "University town circles in Mérida",
    "Diaspora returnee forums — nuanced ground truth",
  ],

  prosAndCons: {
    pros: [
      "Stunning geography and cultural warmth when context allows",
      "Spanish immersion at high velocity",
      "Potential for very low local-currency costs when structured carefully — with legal awareness",
      "Regional flights when schedules stabilise can unlock nature",
    ],
    cons: [
      "Infrastructure and service reliability uneven",
      "Safety planning non-negotiable — varies by zone and season",
      "Currency and banking friction for foreigners",
      "Visa and paperwork volatility",
      "Not a default first nomad hub — research-heavy",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Caracas",
      neighbourhood: "Eastern municipios (e.g. Chacao / Baruta pockets)",
      description:
        "Services and expat-adjacent infrastructure cluster here — still verify building security, water tanks, and plant noise — rents swing with USD listing norms.",
    },
    {
      city: "Mérida",
      neighbourhood: "Centro / student-adjacent zones",
      description:
        "Walkable, cooler — evaluate internet for your building — student noise vs mountain views trade-offs.",
    },
  ],

  faqs: [
    {
      question: "Should beginners choose Venezuela as a nomad base?",
      answer:
        "Most first-time nomads pick more predictable infrastructure — if you have strong Spanish, local ties, and risk tolerance, short exploratory stays with backup plans make more sense than open-ended moves without counsel.",
    },
    {
      question: "How do people handle power and internet outages?",
      answer:
        "UPS batteries, generator buildings, redundant SIMs, and scheduling calls around peak stability — test your exact address before long leases.",
    },
    {
      question: "Is USD cash still king?",
      answer:
        "Often in practice for many transactions — legal and reporting context matters — do not carry large cash casually; use banked paths when resident and advised.",
    },
  ],

  updated: "April 2026",
  wordCount: 2400,
};
