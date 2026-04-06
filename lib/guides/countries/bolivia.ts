import type { CountryGuide } from "../types";

export const bolivia: CountryGuide = {
  slug: "bolivia",
  country: "Bolivia",
  flag: "🇧🇴",
  continent: "South America",
  capital: "Sucre (constitutional); La Paz (administrative seat of government)",
  currency: "BOB",
  language: "Spanish; Quechua, Aymara widely spoken",
  timezone: "BOT (UTC−4)",
  visaDifficulty: "Easy",
  internetSpeed: "Average",
  costOfLiving: "Low",
  avgMonthlyCost: 900,
  seoTitle: "Working in Bolivia: Remote Worker & Expat Guide (2026)",
  seoDescription:
    "Visas, cost of living, La Paz vs Santa Cruz, altitude tips, and what digital nomads should know before basing in Bolivia.",
  highlights: [
    "Very low cost of living in regional terms — especially outside prime La Paz",
    "Dramatic geography — Altiplano, Amazon, Salar de Uyuni access",
    "Visa-free or visa-on-arrival for many nationalities (confirm duration)",
    "Santa Cruz: lower altitude, warmer, growing business scene",
    "Indigenous culture woven into daily life — markets, festivals, languages",
  ],
  visaOptions: [
    {
      name: "Tourist entry",
      duration: "Often 30–90 days depending on nationality; extensions possible in-country for a fee",
      cost: "Varies — check Bolivian consulate for your passport",
      requirements: "Passport, onward ticket sometimes, proof of funds — yellow fever cert if arriving from endemic zones",
    },
    {
      name: "Residence / specific-purpose visas",
      duration: "Multi-year paths for work, investment, family — case by case",
      cost: "Consulate fees + legal support recommended",
      requirements:
        "Documentation bundles vary — use Migración Bolivia official lists; Spanish paperwork is the norm",
    },
  ],
  cities: [
    {
      name: "La Paz",
      vibe: "High-altitude bowl city — cable cars with a view, markets, NGO expats — acclimatise slowly",
      avgRent: "$350–$800/month",
      coworkingSpaces: "Nexo, Selina, Impact Hub (verify current operators)",
    },
    {
      name: "Santa Cruz",
      vibe: "Lowland heat, faster growth, business-oriented — less altitude stress",
      avgRent: "$400–$950/month",
      coworkingSpaces: "Hub SCZ, local cowork chains in Equipetrol",
    },
    {
      name: "Cochabamba",
      vibe: "Mild climate, affordable, university town — smaller nomad footprint",
      avgRent: "$280–$650/month",
      coworkingSpaces: "Smaller hubs — café work common",
    },
  ],
  costBreakdown: {
    rent: "$280–$950/month city-dependent",
    food: "$150–$280/month local markets + eating out",
    transport: "$15–$35/month (mi teleférico + buses in La Paz)",
    coworking: "$60–$140/month where available",
  },
  taxInfo:
    "Long-term tax residency triggers depend on days, economic ties, and registration — Bolivian rules should be reviewed with a local accountant if you stay beyond casual tourism or earn locally. Most short-stay remote workers invoice abroad; clarify if you establish a local entity.",
  communityTips:
    "Smaller English footprint than Buenos Aires — Spanish pays dividends. NGO and development circles in La Paz; Santa Cruz has more corporate expats. Respect coca leaf culture as legal traditional use — do not treat it flippantly.",
  bestFor: ["Budget travel", "Altitude & nature", "Spanish immersion", "Low overhead"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Bolivia's migration authority publishes visa categories and extension procedures — available in Spanish. Tourist stamps vary by nationality; overstays incur fines payable often at the airport on exit — avoid by extending in time at Migración offices.

For residence beyond tourism, gather apostilled documents (criminal record, civil status), translations, health certificates as required, and budget multiple visits to offices. Santa Cruz and La Paz processes differ in pace — patience and duplicates of every paper help.

Work permits for local employment are distinct from remote work; remote income from foreign clients is a grey area legally — seek counsel if staying long-term. Investment and rentista-style routes exist but thresholds change — verify annually.

Yellow fever vaccination is required when entering from certain countries — carry the international certificate.
`.trim(),

  bankingTips: `
Bolivian banks (Banco Unión, BISA, etc.) primarily serve residents with carnet de identidad. Tourist banking is limited — ATM withdrawals in BOB with foreign cards are common; fees vary. Carry cash backup in smaller towns.

US dollars are sometimes accepted in tourism zones; exchange at casas de cambio with receipt. Mobile money penetration is growing — ask locals for the current trusted apps.

Avoid relying on a single card — network outages happen. Wise may not offer BOB balance; plan USD/EUR abroad and draw locally. Keep small bills for markets.

Inform your bank before travel — Bolivia can trigger fraud blocks.
`.trim(),

  healthcareInfo: `
Public SNS exists; quality is uneven. Private clinics in La Paz and Santa Cruz handle most expat needs — pay out of pocket or use travel insurance that covers evacuation.

Altitude sickness is real in La Paz and Potosí — ascend gradually, hydrate, avoid heavy alcohol first days. Sorojchi pills help some; severe symptoms need oxygen/clinic.

Emergency numbers vary by city — save local clinic lines. Dental tourism is limited compared to Mexico — stick to reviewed providers.

Yellow fever, hepatitis, typhoid — consult a travel clinic before jungle trips. Dengue in lowlands — repellent and nets.
`.trim(),

  culturalTips: `
Indigenous dress and languages are sources of pride — photograph people only with permission. Bargaining in markets is normal; fixed prices in supermarkets.

Pace is slower — appointments slip. Lunch is the main meal; dinner lighter. Mate de coca is offered for altitude — polite to accept a sip.

Political discourse is passionate — listen respectfully. Road blockades (paros) can disrupt travel — follow local news and have flexible tickets.

Dress modestly in government buildings; carry copies of passport and migration slip when travelling domestically.
`.trim(),

  realMonthlyCost: `
Example month — Santa Cruz, modest lifestyle:

Rent (one-bed, Equipetrol area): $550
Utilities + internet: $45
Transport + moto-taxi: $40
Groceries + markets: $180
Eating out: $120
Coworking: $90
Spanish classes: $80
Travel insurance: $70
Misc: $80

Indicative total: ~$1,255. La Paz can be similar rent but heating layers and oxygen days add costs; Cochabamba runs lower overall.
`.trim(),

  expatCommunities: [
    "Santa Cruz expat Facebook groups",
    "La Paz Couchsurfing / language exchanges",
    "InterNations Bolivia (smaller presence)",
    "Development/NGO networks in La Paz",
  ],

  prosAndCons: {
    pros: [
      "Very affordable by global standards",
      "Stunning landscapes and cultural depth",
      "Growing fibre in major cities",
      "Friendly people when rapport is built",
      "Strategic for exploring South America",
    ],
    cons: [
      "Altitude in La Paz — not for everyone",
      "Average internet outside prime zones",
      "Bureaucracy in Spanish",
      "Political volatility can affect travel",
      "Smaller English-speaking services than regional hubs",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "La Paz",
      neighbourhood: "Sopocachi",
      description:
        "Walkable, cafes, expat-friendly — slightly lower in the bowl than Zona Sur for oxygen adaptation; check slope climbs to your flat.",
    },
    {
      city: "Santa Cruz",
      neighbourhood: "Equipetrol",
      description:
        "Upscale dining, offices, safer evening strolls — rents higher than outer zonas; good fibre.",
    },
    {
      city: "Cochabamba",
      neighbourhood: "Cala Cala",
      description:
        "Leafy, quieter — popular with middle-class families; good balance of price and amenities.",
    },
  ],

  faqs: [
    {
      question: "Can I handle La Paz altitude?",
      answer:
        "Many can — rest the first 48 hours, hydrate, eat light. If you have heart/lung conditions, consult a doctor; some people base in Cochabamba or Santa Cruz instead.",
    },
    {
      question: "Is Bolivia safe for nomads?",
      answer:
        "Petty theft exists — watch bags on buses, avoid flashing cash. Political demonstrations can turn roads unpredictable — stay informed. Violent crime rates vary by city and neighbourhood — research current local advice.",
    },
    {
      question: "English in offices?",
      answer:
        "Limited outside tourism and NGOs — plan to operate in Spanish for housing, banks, and migration appointments.",
    },
  ],

  updated: "April 2026",
  wordCount: 2200,
};
