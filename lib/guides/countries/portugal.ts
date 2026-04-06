import type { CountryGuide } from "../types";

export const portugal: CountryGuide = {
  slug: "portugal",
  country: "Portugal",
  flag: "🇵🇹",
  continent: "Europe",
  capital: "Lisbon",
  currency: "EUR",
  language: "Portuguese",
  timezone: "WET/WEST (UTC±0/+1)",
  visaDifficulty: "Easy",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1700,
  seoTitle: "Working Remotely in Portugal 2026 — D7, Digital Nomad & Cost of Living",
  seoDescription:
    "Remote work in Portugal: Digital Nomad Visa, D7 passive income route, Lisbon and Porto costs, taxes and where to find remote jobs.",
  highlights: [
    "Digital Nomad Visa (temporary stay for remote workers)",
    "D7 visa popular with retirees and passive-income holders",
    "Mild climate, Atlantic coast, strong expat scene",
    "NHR-style tax incentives have changed — get tailored advice",
    "English widely spoken in tech hubs",
  ],
  visaOptions: [
    {
      name: "Digital Nomad Visa (D8)",
      duration: "Typically 1 year, renewable",
      cost: "Varies by consulate (~€90+)",
      requirements:
        "Remote income from outside Portugal above set thresholds, accommodation, insurance — confirm latest figures with AIMA/consulate.",
    },
    {
      name: "D7 Visa (passive / own means)",
      duration: "Residence permit pathway",
      cost: "Consulate fees + application costs",
      requirements: "Stable recurring income or savings, housing, clean record",
    },
  ],
  cities: [
    {
      name: "Lisbon",
      vibe: "Hills, trams, startup energy — prices rose fast but community is huge",
      avgRent: "$1,100–$1,900/month",
      coworkingSpaces: "Second Home, Heden, Avila Spaces",
    },
    {
      name: "Porto",
      vibe: "Compact, creative, wine country access — better value than Lisbon",
      avgRent: "$800–$1,400/month",
      coworkingSpaces: "Porto i/o, Synergy, Cru Cowork",
    },
    {
      name: "Faro / Algarve",
      vibe: "Coastal, slower pace, seasonal crowds — winter bargains",
      avgRent: "$700–$1,200/month",
      coworkingSpaces: "Laco Working, Regus, local hubs",
    },
  ],
  costBreakdown: {
    rent: "$800–$1,900/month in prime cities",
    food: "$280–$450/month",
    transport: "$40–$60/month",
    coworking: "$120–$280/month",
  },
  taxInfo:
    "Portugal reformed the NHR (Non-Habitual Resident) regime: new entrants face different rules than legacy NHR holders. Remote workers must model whether Portuguese-sourced income, foreign-sourced income, and social security obligations apply with a local accountant.",
  communityTips:
    "Facebook groups for Lisbon/Porto expats, Web Summit alumni meetups, surf and digital nomad weekends in the Algarve, and thriving English-language tech Slack communities.",
  bestFor: ["Surf & coast", "EU base", "Mild winters", "English-friendly services"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Portugal's remote-worker pathway is commonly pursued through the D8 (Digital Nomad) visa or the D7 (passive income / own means) route depending on how your income is structured. Since AIMA (Agência para a Integração Migrantes) absorbed SEF functions, appointments and documentation checks have shifted online in stages—always verify the latest checklist on the consulate site that covers your jurisdiction.

Eligibility snapshot for D8-style nomads

You generally need to show that you perform remote work or freelance activity for entities outside Portugal, meet a minimum monthly income threshold (often cited around four times the Portuguese minimum wage—confirm the current IAS reference and multiplier), hold valid travel insurance or Portuguese-compliant private medical cover, provide proof of accommodation (lease or reservation strategy varies by consulate), and submit a clean criminal record from your home country and any country where you resided long-term.

Document bundle (expect variations)

Prepare passport copies, passport photos, employment contract or client agreements, recent payslips or invoices, bank statements covering several months, Portuguese tax number (NIF) acquisition strategy (often via fiscal representative or lawyer if you cannot visit Finanças immediately), proof of accommodation, criminal record certificates with apostille/legalisation, and a cover letter explaining your remote setup. Freelancers should show recurring clients, not one-off gigs.

Where to apply

Start at the Portuguese consulate for your country of legal residence. Some applicants already in Portugal on Schengen may explore switching status—rules are narrow; legal counsel helps. After the consulate grants a visa to enter, you complete SEF/AIMA residence permit steps in Portugal including biometrics.

Processing times and fees

Consulates differ; three to four months is a realistic planning horizon when demand spikes. Fees include visa stamping costs plus residence permit issuance charges. Budget translations and certified copies.

After approval

Obtain your residence card, register your address with local authorities, open a Portuguese bank account (often easier with your lease and NIF), and align with social security if your activity triggers contributions.

Renewal

Show continued income, tax compliance, and valid insurance. Begin collecting evidence early—Portuguese bureaucracy rewards the organised.

Rejections and pitfalls

Insufficient proof of stable remote income, vague employer letters, insurance that does not meet minimum coverage, or missing apostilles are common. Airbnb receipts alone may fail—secure a rental contract or notarised invitation when required.
`.trim(),

  bankingTips: `
Portuguese banks—Millennium bcp, Santander Totta, Novo Banco—open current accounts for residents with a NIF, ID, proof of address, and sometimes a Portuguese phone number. Non-resident accounts exist but may carry higher fees. Expect in-branch appointments in Lisbon and Porto; smaller towns can be faster.

Fintech stacks remain popular: Revolut and Wise provide euro receiving details and cheap FX when clients pay in USD or GBP. Many nomads keep Wise as the settlement layer and transfer EUR to local accounts for rent, utilities, and IRS payments. N26 served Portugal historically—check current availability for new Portuguese IBANs.

Multibanco, the national ATM and bill-payment network, is ubiquitous—learn to pay reference numbers at ATMs for utilities and taxes. Contactless cards work everywhere in cities.

ATM withdrawals from foreign cards may incur DCC (dynamic currency conversion) prompts—decline and choose euros. Portuguese banks may charge non-customer ATM fees; your neo-bank might rebate them.

Tax residency alongside a Portuguese bank account does not automatically make income taxable in Portugal, but the combination of a lease, NIF, and 183+ days often does—coordinate with an accountant before you optimise FX through foreign accounts.
`.trim(),

  healthcareInfo: `
Portugal's SNS (Serviço Nacional de Saúde) delivers solid care once you are registered as a resident contributing to social security or eligible through reciprocal agreements. Until then, private insurance satisfies visa requirements and speeds access to specialists.

Major insurers include Médis, Multicare, and AdvanceCare; monthly premiums depend on age and copay choices—budget roughly €40–€120 for mid-tier plans. Digital nomad visa applicants should confirm that policy wording matches AIMA expectations on coverage amounts and repatriation.

Lisbon and Porto host modern private hospitals (Luz, CUF, Hospital da Luz network). The Algarve swells in summer—book GP appointments early in tourist towns.

Emergency number is 112. Pharmacies are knowledgeable and can triage minor issues. Dental care is mostly private—add a rider or pay out of pocket.

After residence formalities, register at a local health centre (centro de saúde) with your SNS number. Wait times for non-urgent specialist referrals can be long—many residents blend SNS with private top-ups.
`.trim(),

  culturalTips: `
Portuguese social life runs softer and later than Germany but earlier than Spain—dinner near 8pm is common, especially outside Lisbon's expat bubbles. English works in tech and services in Lisbon, Porto, and the Algarve, but landlords and finanças may speak only Portuguese—learn polite phrases.

Hierarchy in workplaces is present but informal friendliness dominates—expect long coffees. Punctuality matters for official appointments; cafés forgive five to ten minutes.

The housing market is emotionally charged—locals face the same rent spikes you do. Showing respect, learning some Portuguese, and avoiding loud short-term-rental stereotypes in condo buildings goes far.

Regional identity differs: northerners (Porto) joke with southerners (Lisbon) constantly—join the banter lightly. Fado nights reward quiet listening, not loud phone calls.

Community is built through surf clubs, run groups along the Tejo, wine tastings in the Douro, and volunteer beach cleanups. Portuguese bureaucracy loves paper—scan everything, carry duplicates, and celebrate each stamped form with a pastel de nata.
`.trim(),

  realMonthlyCost: `
Example month for a single remote worker in Lisbon (central but not prime-prime):

Rent (one-bed, shared building utilities): $1,450
Utilities (electricity, water, fibre): $110
Transport (monthly Metro pass + occasional Bolt): $55
Groceries: $320
Eating out twice weekly + coffee meetings: $280
Coworking flex membership: $160
Gym / climbing: $70
Private health insurance: $65
Software + streaming: $55
Miscellaneous (pharmacy, gifts, weekend train to Sintra): $140

Indicative total: about $2,705.

The same lifestyle in Porto might run 15–20% lower on rent; the Algarve swings seasonal—summer short lets explode, winter can bargain. Compare with 2019 baselines: Lisbon rents have climbed sharply—budget extra contingency for deposit and agent fees (often one month + VAT).
`.trim(),

  expatCommunities: [
    "Internations Lisbon & Porto",
    "Americans & Friends PT Facebook groups",
    "Lisbon Digital Nomads Meetup",
    "Portugal Reddit r/Portugal and r/PortugalExpats",
    "D7 & Digital Nomads Portugal Facebook",
    "Algarve Expats Network",
    "Women in Tech Portugal Slack bridges",
    "Web Summit community alumni events",
  ],

  prosAndCons: {
    pros: [
      "EU Schengen access with valid residence",
      "Mild Atlantic climate—winters rarely harsh",
      "Deep expat and startup community in Lisbon",
      "Strong English in tech and services",
      "World-class food and wine at sane prices (outside rent)",
      "D8 visa tailored to remote earners",
      "Coastline, surf, and weekend travel options",
      "Comparatively safe and welcoming",
      "Growing fibre internet in cities",
      "Attractive for families (international schools in Lisbon)",
    ],
    cons: [
      "Housing shortage and rising rents in Lisbon",
      "Slow bureaucracy at AIMA/consulates in peak seasons",
      "NHR tax benefits narrowed for new arrivals—verify rules",
      "Golden Visa real-estate path heavily restricted now",
      "Noise and tourism pressure in Alfama/Bairro Alto summers",
      "Car useful outside Lisbon/Porto metros",
      "Salaries for local jobs lag Western Europe if you switch",
      "Damp older flats without insulation",
      "Short-term let regulations tightening",
      "Wildfire smoke risk inland during heatwaves",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Lisbon",
      neighbourhood: "Mouraria",
      description:
        "Historic, multicultural, more approachable rents than Baixa—great food, steep streets, creative crowd. Verify building condition; expect €900–€1,300 for compact one-beds.",
    },
    {
      city: "Lisbon",
      neighbourhood: "Príncipe Real",
      description:
        "Leafy, boutique shops, strong café culture, LGBTQ+ friendly. Premium but walkable; one-beds often €1,300–€1,900.",
    },
    {
      city: "Porto",
      neighbourhood: "Bonfim",
      description:
        "East of the centre, faster gentrification, art spaces, better value than Ribeira noise. Typical one-beds €750–€1,100.",
    },
  ],

  faqs: [
    {
      question: "Is Portugal's NHR tax regime still available?",
      answer:
        "The classic NHR closed to new applicants after the 2023/2024 reforms, replaced by an IFI incentive regime with different eligibility and sector focus. Legacy NHR holders keep their benefits for the remaining term—consult a Portuguese tax lawyer before planning moves.",
    },
    {
      question: "D7 vs D8—which do I choose?",
      answer:
        "D8 targets remote employees and freelancers serving foreign markets. D7 suits stable passive income or retirees demonstrating regular inflows without active employment. Misclassified applications get bounced—match your bank statements to the story.",
    },
    {
      question: "Why did Lisbon get so expensive?",
      answer:
        "Demand from remote workers, tourism, and low housing supply collided. Golden Visa investment and short-term rentals absorbed stock. Look at Porto, Braga, or Aveiro if Lisbon rent shocks you.",
    },
    {
      question: "Do I need a fiscal representative?",
      answer:
        "Non-EU citizens often need a fiscal representative to obtain a NIF before residence stabilises; EU citizens can usually register directly. Rules evolve—confirm with Finanças.",
    },
    {
      question: "Can I buy property for a Golden Visa?",
      answer:
        "Real-estate routes were curtailed; investment now emphasises funds, research, culture, and job creation thresholds. Verify current CMVM-regulated fund options—this is not legal advice.",
    },
    {
      question: "Is Portugal good year-round for remote work?",
      answer:
        "Yes for climate and connectivity, but plan for damp winters in older flats, crowded summers in tourist districts, and occasional rural wildfire smoke inland. Choose housing with heating strategy.",
    },
  ],

  updated: "April 2026",
  wordCount: 2680,
};
