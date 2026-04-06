import type { CountryGuide } from "../types";

export const malta: CountryGuide = {
  slug: "malta",
  country: "Malta",
  flag: "🇲🇹",
  continent: "Europe",
  capital: "Valletta",
  currency: "EUR",
  language: "Maltese / English",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1700,
  seoTitle: "Working Remotely in Malta 2026 — Nomad Residence & Gaming Hub",
  seoDescription:
    "Malta remote work: Nomad Residence Permit, iGaming industry, Sliema costs, English-speaking island life.",
  highlights: [
    "Nomad Residence Permit for remote workers",
    "English official — easy admin language",
    "Strong iGaming and crypto regulatory scene",
    "Mediterranean island lifestyle",
    "EU member with year-round sun",
  ],
  visaOptions: [
    {
      name: "Nomad Residence Permit",
      duration: "1 year renewable",
      cost: "€300+",
      requirements: "Remote income threshold, health insurance, rental contract",
    },
    {
      name: "Key employee initiative (gaming/finance)",
      duration: "Employer-led",
      cost: "Fees",
      requirements: "Licensed employer sponsorship",
    },
  ],
  cities: [
    {
      name: "Sliema / St Julian's",
      vibe: "Coastal, nightlife, expat dense",
      avgRent: "$1,100–$1,900/month",
      coworkingSpaces: "SOHO, Grand Central, Evolve",
    },
    {
      name: "Valletta",
      vibe: "Fortress capital, historic",
      avgRent: "$1,000–$1,700/month",
      coworkingSpaces: "Cozy spots, hotel lounges",
    },
    {
      name: "Gozo",
      vibe: "Quieter sister island",
      avgRent: "$700–$1,200/month",
      coworkingSpaces: "Village cafés",
    },
  ],
  costBreakdown: {
    rent: "$700–$1,900/month",
    food: "$300–$500/month",
    transport: "$30–$50/month (bus)",
    coworking: "$150–$280/month",
  },
  taxInfo:
    "Remittance basis historically attractive but rules tightened — mandatory Maltese tax adviser for new arrivals.",
  communityTips:
    "Join expat Facebook groups, expect summer crowds, ferry to Gozo for calm weekends.",
  bestFor: ["English language", "Sea & sun", "Gaming sector", "EU base"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
The Nomad Residence Permit (NRP) targets non-EU nationals who can work remotely for employers or clients outside Malta, meeting minimum income thresholds and holding comprehensive health insurance. Apply through Identity Malta with proof of employment or freelance contracts, bank statements, rental agreement, and clean criminal record checks as required.

EU citizens do not need the NRP—register under free movement after three months if exercising treaty rights.

After approval, obtain residence card, tax number, and open bank account—appointments can backlog in peak season.

Employer-sponsored single permits apply to iGaming and finance roles—licensed employers file for third-country workers.

Renew NRP with continued foreign income and compliant tax filings. Rejections involve insufficient income proof, insurance gaps, or ambiguous remote work—use a local agent familiar with Identity Malta formatting.

Tax residency rules interact with NRP—consult a Maltese tax adviser before assuming remittance basis still applies to your case.
`.trim(),

  bankingTips: `
Bank of Valletta, HSBC Malta, APS, and MeDirect serve residents. You need residence card, utility bill, employment or permit proof—online onboarding improving.

Euro IBAN; SEPA cheap. iGaming salaries often local deposit—Wise still useful for foreign clients.

Cash in villages; cards in Sliema/St Julian's.

Property purchase triggers notary process—rent first year to learn areas.

Crypto presence large—regulatory scrutiny high—keep clean records for tax.
`.trim(),

  healthcareInfo: `
Public healthcare via Mater Dei and health centres—free or low cost once contributing to social insurance as employee.

Private insurance needed for NRP before state access—budget €50–€120/month.

Emergency: 112. Private hospitals (St James) for speed—fees apply.

Pharmacies helpful; heatstroke real in summer—hydrate.

Gozo has smaller hospital—serious cases may transfer to Malta.

Dental private—compare insurance riders.
`.trim(),

  culturalTips: `
English eases arrival but learn Maltese pleasantries—fezzien (cheers) goes far. Island time blends British formality with Mediterranean warmth—queues are relaxed, bureaucracy less so.

Summer tourism swamps Paceville—noise if you live nearby. Winters quiet—some expats love it, others lonely.

Boat culture, festa fireworks, and village rivalries—respect local saints. Driving is left, narrow streets—scooters popular.

Networking in iGaming is bar-led—pace drinking. Coworking midday heat—schedule calls morning.

Tipping 10% if happy; service sometimes included.
`.trim(),

  realMonthlyCost: `
Example month for a single nomad in Sliema (mid-range):

Rent (one-bed sea area): $1,350
Utilities + AC electricity: $145
Buses / occasional taxi: $45
Groceries: $340
Eating out / nightlife: $280
Coworking: $175
Health insurance: $75
Phone + software: $40
Boat day / leisure: $90
Miscellaneous: $100

Indicative total: about $2,640.

Gozo cuts 25–40% rent; Valletta premiums for character flats—stairs and heat matter.
`.trim(),

  expatCommunities: [
    "Internations Malta",
    "Malta Expats Facebook",
    "Digital Nomads Malta",
    "r/Malta",
    "Meetup Malta — gaming & beach",
    "Gozo expat groups",
    "iGaming networking drinks St Julian's",
    "Remote workers Malta WhatsApp",
  ],

  prosAndCons: {
    pros: [
      "English official—low language barrier",
      "NRP tailored to remote workers",
      "EU Schengen base with island lifestyle",
      "Strong iGaming and fintech salaries",
      "Mild winters, active outdoor scene",
      "Compact—short commutes",
      "Growing coworking and events",
      "Tax advice industry mature",
      "Weekend Sicily ferries",
      "Diverse expat community",
    ],
    cons: [
      "Overdevelopment and construction noise",
      "Summer heat and crowds",
      "Rent inflation in Sliema/St Julian's",
      "Island isolation—small dating pool",
      "Flight delays via single airport pressure",
      "Car ownership costly—import taxes",
      "Tax rules tightened—need adviser",
      "Water scarcity and desalination costs",
      "Noise from festa fireworks",
      "Limited green space vs continental cities",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Sliema / St Julian's",
      neighbourhood: "Tigne",
      description: "Modern, seafront, shops—$1,300–$1,900 one-bed.",
    },
    {
      city: "Valletta",
      neighbourhood: "Upper Barrakka area",
      description: "Historic, stairs, stunning views—$1,100–$1,700.",
    },
    {
      city: "Gozo",
      neighbourhood: "Victoria (Rabat)",
      description: "Citadel, quieter, village life—$700–$1,100.",
    },
  ],

  faqs: [
    {
      question: "Is Malta good for digital nomads?",
      answer:
        "Yes—English, NRP pathway, EU base, and coworking—but summer costs and crowds spike.",
    },
    {
      question: "Do I pay tax on worldwide income?",
      answer:
        "Depends on residency days and remittance rules—rules evolved; mandatory advice before structuring.",
    },
    {
      question: "Can I use Schengen travel?",
      answer:
        "Malta is in Schengen—valid permits allow travel per EU rules; carry documents.",
    },
    {
      question: "Is the island safe?",
      answer:
        "Generally yes—standard nightlife precautions; watch summer sea currents.",
    },
    {
      question: "How is internet?",
      answer:
        "Fibre common in towns; Gozo decent—test backup for video calls.",
    },
    {
      question: "Gaming jobs only?",
      answer:
        "No—finance, tech, and remote freelancers also—but gaming dominates expat hiring.",
    },
  ],

  updated: "April 2026",
  wordCount: 1920,
};
