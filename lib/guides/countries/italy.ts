import type { CountryGuide } from "../types";

export const italy: CountryGuide = {
  slug: "italy",
  country: "Italy",
  flag: "🇮🇹",
  continent: "Europe",
  capital: "Rome",
  currency: "EUR",
  language: "Italian",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1900,
  seoTitle: "Working Remotely in Italy 2026 — Digital Nomad Visa, Cities & Taxes",
  seoDescription:
    "Remote work in Italy: digital nomad visa overview, Milan vs Rome vs south, cost of living and tax planning tips.",
  highlights: [
    "National digital nomad visa pathway for non-EU remote workers",
    "Regional lifestyle from Alps to Sicily",
    "Improving fibre in cities",
    "Strong food, art, and weekend travel",
    "Growing startup pockets in Milan and Bologna",
  ],
  visaOptions: [
    {
      name: "Digital Nomad Visa (Italy)",
      duration: "1 year renewable",
      cost: "~€116+",
      requirements: "Remote employer/client abroad, income threshold, insurance — verify with consulate",
    },
    {
      name: "Elective residence (non-work)",
      duration: "1 year renewable",
      cost: "Varies",
      requirements: "High passive income / wealth proof — not for local work",
    },
  ],
  cities: [
    {
      name: "Milan",
      vibe: "Business, fashion, finance",
      avgRent: "$1,200–$2,000/month",
      coworkingSpaces: "WeWork, Talent Garden, Copernico",
    },
    {
      name: "Rome",
      vibe: "Historic, chaotic, central Italy hub",
      avgRent: "$1,000–$1,700/month",
      coworkingSpaces: "FAMO, Talent Garden",
    },
    {
      name: "Turin",
      vibe: "Affordable north, automotive heritage",
      avgRent: "$700–$1,200/month",
      coworkingSpaces: "Toolbox, Impact Hub",
    },
  ],
  costBreakdown: {
    rent: "$700–$2,000/month (north vs south)",
    food: "$300–$500/month",
    transport: "$40–$80/month",
    coworking: "$140–$280/month",
  },
  taxInfo:
    "Tax residency can trigger worldwide taxation; new arrivals should plan split-year and social security with an Italian commercialista.",
  communityTips:
    "InterNations chapters, coworking trial weeks, and learning basic Italian for bureaucracy.",
  bestFor: ["Food & culture", "Regional variety", "Travel base", "Lifestyle upgrade"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Italy's digital nomad visa targets non-EU nationals who work remotely using telecommunications for employers or clients outside Italy. You typically apply at the Italian consulate in your country of residence with proof of employment or freelance contracts, minimum income (thresholds are set in law—confirm current euros with the consulate), comprehensive health insurance, accommodation evidence, and a clean criminal background where required.

Elective residence suits those with stable passive income who will not work—not remote employees. Do not confuse the two.

After entry, you obtain a permesso di soggiorno, codice fiscale, and register residency (anagrafe) at your comune. Timelines vary—northern cities can be busy.

Renewal requires showing continued income, tax compliance, and valid insurance. Rejections often involve ambiguous remote-work proof or insurance gaps—use a lawyer for your first filing.

Codice fiscale and bank accounts unlock utilities; expect multiple in-person appointments. Patience and espresso help.
`.trim(),

  bankingTips: `
Major banks include Intesa Sanpaolo, UniCredit, and Banco BPM; digital options include N26 and Hype where available. Opening a conto corrente needs codice fiscale, ID, permesso, and proof of address—branches vary in friendliness to newcomers.

Wise and Revolut ease receiving foreign currency; you will still want an Italian IBAN for rent, INPS, and utilities.

Poste Italiane offers basic accounts—useful when branches reject you. Cash lingers in smaller towns; cards work in cities.

Tax: Italian residents must declare worldwide income—keep Wise/Revolut statements organised for your commercialista.
`.trim(),

  healthcareInfo: `
Italy's Servizio Sanitario Nazionale (SSN) provides strong care once you are registered and contributing—employees via employer, others via voluntary enrolment or income-based paths depending on status.

Private insurance satisfies visa entry; providers include Allianz, Generali, and Unipol—budget €50–€120/month for mid-tier expat plans before SSN kicks in fully.

Emergency: 118 or 112. Pronto soccorso handles emergencies; choose a medico di base for referrals to keep costs down.

North–south quality gaps exist but major cities have excellent hospitals—Milan and Rome lead for English-speaking staff.

Pharmacies (farmacia) advise on minor ailments; many drugs are cheaper than US equivalents.
`.trim(),

  culturalTips: `
Italian life is relationship-first—introduce yourself to neighbours, greet bar staff, and expect bureaucracy in triplicate. Lunch is sacred in many families; August empties cities for ferragosto.

North (Milan, Turin) runs faster; south runs warmer and later—dinner after 8pm is normal. Politics and football are passionate—listen more than you lecture.

Tipping: coperto and service may appear on bills; round up for great service. Coffee standing at the bar costs less than table service.

Learn Italian—English works in tech bubbles but comune, post office, and landlords reward effort. Join aperitivo groups, cooking classes, and hiking clubs—the mountains and coast are national religion.
`.trim(),

  realMonthlyCost: `
Example month for a single remote worker in Turin (affordable north, good infrastructure):

Rent (one-bed, San Salvario / Vanchiglia): $900
Utilities + fibre: $125
Transport (bus + metro): $45
Groceries + market: $320
Eating out twice weekly: $220
Coworking: $150
Private health top-up / co-pays: $60
Phone + software: $40
Gym / culture: $70
Miscellaneous: $110

Indicative total: about $2,040.

Milan adds 35–50% on rent vs Turin; Rome sits mid-high with traffic costs. Southern cities like Bari or Palermo can cut housing further but factor infrastructure and heat.
`.trim(),

  expatCommunities: [
    "Internations Milan & Rome",
    "Americans in Italy Facebook",
    "r/Italy expat threads",
    "Digital Nomads Italy Facebook",
    "Meetup Italy — language exchanges",
    "Milan Tech Week community",
    "Turin Expats",
    "Italian citizenship / visa forums (verify legal advice)",
  ],

  prosAndCons: {
    pros: [
      "Digital nomad visa for qualifying remote workers",
      "Unmatched food, art, and regional diversity",
      "EU travel from well-connected hubs",
      "Lower cost south and smaller northern cities",
      "Strong healthcare once in SSN",
      "Coworking and creative scenes in Milan",
      "Mountains and beaches within weekend reach",
      "Mild climate in many regions",
      "Growing English in business",
      "Family-oriented culture",
    ],
    cons: [
      "Bureaucracy slow—permesso queues in big cities",
      "Tax and social security complexity for residents",
      "South–north infrastructure gap",
      "Rental market informal—watch scams",
      "Air conditioning and heating costs in extremes",
      "Earthquake zones—check building age",
      "English limited outside cities",
      "Banking can require persistence",
      "Summer heat in cities without AC",
      "Driving/parking stress in historic centres",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Milan",
      neighbourhood: "Isola",
      description: "Converted industrial, creative, good transport—popular with expats; one-beds often $1,300–$2,000.",
    },
    {
      city: "Rome",
      neighbourhood: "Trastevere",
      description: "Cobblestones, nightlife, tourist pressure—charming but noisy; $1,100–$1,700 for compact flats.",
    },
    {
      city: "Turin",
      neighbourhood: "San Salvario",
      description: "Multicultural, bars, affordable vs Milan—one-beds $750–$1,100.",
    },
  ],

  faqs: [
    {
      question: "Does Italy's digital nomad visa allow Italian clients?",
      answer:
        "The scheme is designed for work performed for non-Italian employers or clients—mixing local Italian work without proper work permission can violate terms. Confirm with a lawyer.",
    },
    {
      question: "Milan or Rome for remote work?",
      answer:
        "Milan offers business infrastructure and flights; Rome offers history and chaos—both work if you tolerate rent. Turin and Bologna balance cost and quality.",
    },
    {
      question: "How much Italian do I need?",
      answer:
        "A2–B1 transforms daily life—English alone struggles at the comune and with landlords.",
    },
    {
      question: "Is tax residency automatic after 183 days?",
      answer:
        "Often yes if Italy is your habitual abode—rules interact with treaties. A commercialista should model your first year.",
    },
    {
      question: "Is fibre reliable?",
      answer:
        "Major cities increasingly have fibre; rural areas vary—test before signing long rural leases.",
    },
    {
      question: "Can I use Schengen travel?",
      answer:
        "Valid Italian residence permits generally allow Schengen travel within permitted durations—carry documents.",
    },
  ],

  updated: "April 2026",
  wordCount: 2050,
};
