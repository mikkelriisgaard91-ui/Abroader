import type { CountryGuide } from "../types";

export const brazil: CountryGuide = {
  slug: "brazil",
  country: "Brazil",
  flag: "🇧🇷",
  continent: "South America",
  capital: "Brasília",
  currency: "BRL",
  language: "Portuguese",
  timezone: "Multiple (BRT UTC−3 most populous; Amazon states differ)",
  visaDifficulty: "Medium",
  internetSpeed: "Excellent",
  costOfLiving: "Medium",
  avgMonthlyCost: 1600,
  seoTitle: "Working in Brazil: Digital Nomad & Expat Guide (2026)",
  seoDescription:
    "Brazil's digital nomad visa, cost of living in São Paulo and Rio, taxes, banking, and the best cities for remote workers in 2026.",
  highlights: [
    "Official digital nomad visa (VITEM XIV) for qualifying remote earners — verify current income thresholds",
    "São Paulo: Latin America's tech and finance powerhouse — fibre, flights, food scene",
    "Rio: iconic coastline — safety varies by bairro; plan carefully",
    "Florianópolis: island beaches + growing startup scene — popular with nomads",
    "Portuguese essential outside tourist bubbles",
  ],
  visaOptions: [
    {
      name: "Visa VITEM XIV (digital nomad)",
      duration: "Up to 1 year initially; renewal rules on official portals",
      cost: "Consular fee + translations/legal if needed",
      requirements:
        "Remote income from foreign sources above published minimums, insurance, clean record — check Itamaraty / consulate for your jurisdiction",
    },
    {
      name: "Tourist visa / visa-free",
      duration: "90 days typically; extensions possible in some cases — nationality-dependent",
      cost: "Reciprocity-based — US citizens historically paid; verify current policy",
      requirements: "Passport, proof of onward travel, funds — no local remote work allowed on tourist status",
    },
  ],
  cities: [
    {
      name: "São Paulo",
      vibe: "Non-stop megacity — Jardins to Vila Madalena, food from everywhere, traffic legendary",
      avgRent: "$700–$1,800/month",
      coworkingSpaces: "WeWork, Impact Hub, Spaces, hundreds of indie hubs",
    },
    {
      name: "Rio de Janeiro",
      vibe: "Beach-meets-mountains — Ipanema/Leblon vs Zona Norte; carnival energy year-round",
      avgRent: "$600–$1,600/month",
      coworkingSpaces: "WeWork Rio, Botafogo hubs, beach-adjacent cafés",
    },
    {
      name: "Florianópolis",
      vibe: "Island life — Lagoa da Conceição tech crowd, surf, milder pace than SP",
      avgRent: "$500–$1,200/month",
      coworkingSpaces: "Impact Hub Floripa, Coworking Brazil network",
    },
  ],
  costBreakdown: {
    rent: "$500–$1,800/month — SP and Rio prime areas at top end",
    food: "$250–$450/month groceries; churrascarias add up fast",
    transport: "$40–$80/month (Metro + Uber)",
    coworking: "$100–$250/month",
  },
  taxInfo:
    "Brazilian tax residency can trigger worldwide income reporting for individuals meeting legal tests — CPF registration and local sourcing matter. Digital nomad visa holders should clarify obligations with a Brazilian accountant; treaty positions vary. Invoice foreign clients through compliant structures — do not assume tourist entry shields you after long stays.",
  communityTips:
    "Meetup.com tech events in SP, Floripa Nomads groups, Startup Weekend alumni, football and beach sports as social glue. Learn Portuguese — Brazilians appreciate effort. WhatsApp is the operating system of life.",
  bestFor: ["Tech scale", "Beach + city options", "Fibre & flights", "Food & music culture"],
  jobLink: "/remote-jobs?location=americas",

  applicationProcess: `
Brazil's digital nomad route (VITEM XIV) is processed through consulates or occasionally Polícia Federal pathways depending on updates — always download the latest checklist from the consulate that covers your residence.

Typical bundle: passport, criminal background checks with apostille, proof of remote employment or business abroad meeting minimum monthly income (published in USD — re-check figures), international health insurance meeting minimum coverage, and sometimes a letter from your employer or client contracts.

Timeline: several weeks to months — book appointments early. After entry, register CPF if required for bank contracts, declare address with local authorities per instructions, and renew before expiry to avoid fines.

Tourist visa misuse for remote work is legally risky — if Brazil is your long-term base, align visa category with activity. Marriage, investment, and company-sponsored visas are alternative long paths — each has distinct tax hooks.

Keep PDF scans of every notarised page — humidity destroys paper; cloud backups save renewals.
`.trim(),

  bankingTips: `
Residents open accounts at Itaú, Bradesco, Nubank (digital), Inter, etc. — CPF + proof of address required. Nubank's UX is beloved; credit history is local — don't expect high limits immediately.

PIX instant payments revolutionised Brazil — link your account and learn QR workflows; landlords and gyms expect PIX.

Foreign cards work in cities; spread varies. Wise may not give BRL receiving account for all nationalities — check. ATM fees can sting — withdraw larger less often.

Invoice clients in USD/EUR abroad and transfer via regulated FX if needed — informal doleiros carry legal risk. Declare large movements if tax-resident.
`.trim(),

  healthcareInfo: `
Private hospitals in SP and Rio (Albert Einstein, Sírio-Libanês, Copa Star) are world-class — expensive without insurance. Travel insurance covers short trips; long stays need local plan or international expat policy accepted by providers.

SUS public system exists; queues for non-urgent care are long — most middle-class use convênio plans.

Vaccination card may be requested — stay current on routine jabs. Dengue in urban centres — repellent, screens. Emergency: 192 (SAMU) in many areas.

Mental health: therapists widely available in Portuguese; English-speaking psychologists exist in major cities at premium rates.
`.trim(),

  culturalTips: `
Personal warmth — greetings linger, small talk precedes business. Punctuality flexes — but official appointments at Polícia Federal do not.

Dress sharp in finance/consulting SP; Rio beachwear stays at the beach. Race and inequality are sensitive — avoid careless comparisons.

Carnival and major holidays shut cities — plan work sprints around them. Churrasco is a religion — vegetarians can thrive but research rodízio etiquette.

Noise: neighbours and street vendors — headphones for deep work. Air conditioning is non-negotiable in summer humidity — verify in rentals.
`.trim(),

  realMonthlyCost: `
Example month — São Paulo, Pinheiros profile:

Rent one-bed: $1,100
Condomínio + IPTU share: $180
Utilities + fibre: $90
Transport (Metro + ride-hail): $120
Groceries: $320
Eating out / social: $350
Coworking: $160
Gym: $70
Health plan: $140
Misc: $150

Indicative total: ~$2,680. Florianópolis can shave rent 15–25%; Rio beach zones vary wildly by street.
`.trim(),

  expatCommunities: [
    "Internations São Paulo & Rio",
    "Digital Nomads Brazil Facebook",
    "Gringoes.com forums",
    "Tech meetups — React SP, Python Brasil events",
    "Beach sports WhatsApp groups in Floripa",
  ],

  prosAndCons: {
    pros: [
      "Huge domestic market and startup ecosystem",
      "Excellent urban internet in major hubs",
      "Culture, music, food diversity",
      "Direct flights across Americas and Europe",
      "Nature — Amazon, Pantanal, beaches within reach",
      "Official nomad visa pathway",
    ],
    cons: [
      "Portuguese barrier",
      "Complex tax system if you become resident",
      "Crime requires serious neighbourhood vetting",
      "Traffic and distance in SP",
      "Visa costs for some nationalities historically",
      "Seasonal flooding and heat stress in some zones",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "São Paulo",
      neighbourhood: "Pinheiros / Vila Madalena",
      description:
        "Walkable, bars, startups — popular with younger expats; check apartment security and soundproofing facing bars.",
    },
    {
      city: "Rio de Janeiro",
      neighbourhood: "Ipanema / Leblon",
      description:
        "Beach access, safer than many zones — premium rents; study building doorman (porteiro) quality.",
    },
    {
      city: "Florianópolis",
      neighbourhood: "Lagoa da Conceição",
      description:
        "Nomad hub — lagoon + nightlife; summer crowds and traffic spike — book housing early.",
    },
  ],

  faqs: [
    {
      question: "Do I need Portuguese?",
      answer:
        "For daily life and contracts — yes, eventually. English works in tech multinationals and upscale services, not at the cartório or bank counter.",
    },
    {
      question: "Is the digital nomad visa worth it?",
      answer:
        "If you plan 6–12+ months and want legal clarity, often yes. Compare income thresholds, renewal burden, and tax triggers with an accountant — cheaper than immigration surprises.",
    },
    {
      question: "How safe is Rio?",
      answer:
        "Highly neighbourhood-dependent — many expats live well in Zona Sul with sensible habits. Avoid flashing jewellery on beaches, use Uber at night, and follow local guidance — stats improve with street smarts.",
    },
  ],

  updated: "April 2026",
  wordCount: 2550,
};
