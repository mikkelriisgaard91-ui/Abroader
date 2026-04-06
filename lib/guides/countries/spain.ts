import type { CountryGuide } from "../types";

export const spain: CountryGuide = {
  slug: "spain",
  country: "Spain",
  flag: "🇪🇸",
  continent: "Europe",
  capital: "Madrid",
  currency: "EUR",
  language: "Spanish",
  timezone: "CET (UTC+1)",
  visaDifficulty: "Medium",
  internetSpeed: "Good",
  costOfLiving: "Medium",
  avgMonthlyCost: 1800,
  seoTitle: "Working Remotely in Spain 2026 — Visa, Cost of Living & Jobs",
  seoDescription:
    "Complete guide to working remotely in Spain. Digital nomad visa, cost of living, best cities, tax info and remote jobs available now.",
  highlights: [
    "Digital Nomad Visa available since 2023",
    "300+ days of sunshine per year",
    "Excellent food, culture and quality of life",
    "Fast internet in major cities",
    "Growing remote work community",
  ],
  visaOptions: [
    {
      name: "Digital Nomad Visa",
      duration: "1 year, renewable up to 5",
      cost: "~€80",
      requirements:
        "Proof of remote income €2,160+/month, health insurance, clean criminal record — verify current thresholds with a Spanish consulate.",
    },
    {
      name: "Non-Lucrative Visa",
      duration: "1 year renewable",
      cost: "~€80",
      requirements: "Proof of sufficient funds, no working for Spanish companies",
    },
  ],
  cities: [
    {
      name: "Barcelona",
      vibe: "Creative, cosmopolitan, beach lifestyle",
      avgRent: "$1,200–$1,800/month",
      coworkingSpaces: "Betahaus, OneCoWork, Aticco",
    },
    {
      name: "Madrid",
      vibe: "Buzzing capital, world-class culture",
      avgRent: "$1,000–$1,600/month",
      coworkingSpaces: "WeWork, Utopicus, Copernico",
    },
    {
      name: "Valencia",
      vibe: "Relaxed, affordable, beach city",
      avgRent: "$700–$1,100/month",
      coworkingSpaces: "Espacio 80, Wayco, Lanzadera",
    },
  ],
  costBreakdown: {
    rent: "$700–$1,800/month depending on city",
    food: "$300–$500/month",
    transport: "$50–$80/month",
    coworking: "$150–$300/month",
  },
  taxInfo:
    "Spain's Beckham Law can offer a favourable regime for qualifying inbound workers — rules and rates change; consult a Spanish tax adviser. Standard progressive rates apply otherwise.",
  communityTips:
    "Join Nomad List Spain threads, Barcelona Entrepreneurs groups, and Meetup.com tech events. Coworking passes are easy to trial before committing.",
  bestFor: ["Beach lovers", "Culture seekers", "Foodies", "EU access", "Warm climate"],
  jobLink: "/remote-jobs?location=europe",

  applicationProcess: `
Spain's Digital Nomad Visa (Visado de Teletrabajadores de Carácter Internacional) lets non-EU/EEA remote workers live in Spain while working for employers or clients outside Spain. Understanding who qualifies, which documents to prepare, and how consulates process applications saves months of back-and-forth.

Who is eligible

You typically need to be a non-EU/EEA national (EU citizens use free movement). Your work must be performed remotely using telecommunications means, and your income must come predominantly from companies or clients outside Spain. Freelancers with foreign clients and employees of non-Spanish companies both fit, provided the role is not one that should be hired locally. Some consulates also look for professional experience or education relevant to your field—keep CV and contracts aligned.

Exact documents (verify with your consulate; lists vary slightly)

Expect to provide a valid passport with adequate validity, recent passport photos, proof of clean criminal record from countries where you have lived, a certificate of no criminal record in Spain if applicable, private health insurance meeting Spanish residence standards (without copays that nullify coverage), proof of remote employment or freelance activity (contracts, client letters, invoices), bank statements showing stable income meeting the minimum threshold (often cited around 200% of Spain's minimum interprofessional wage—confirm the current SMI and multiplier), proof of qualifications or experience, and proof of accommodation (lease, hotel booking, or host letter depending on consulate). Translations and apostilles are commonly required for non-Spanish/non-EU documents.

Where to apply

Applications are submitted at the Spanish consulate that covers your country of residence—not in Spain initially for the DNV entry visa pathway. Book appointments early; slots can be scarce. Some regions also allow post-entry changes of status for those already legally in Spain under specific circumstances; a Spanish immigration lawyer can confirm whether you qualify for in-country filing.

Processing time and costs

The legal target for residence visas under Law 14/2013 is often quoted as 20 working days from submission of a complete file. Real timelines depend on consulate workload, missing documents, and whether additional information is requested. Budget consular visa fees (roughly in the €80 range but subject to reciprocity and updates), translation, apostille, insurance, and legal fees if you hire help.

After approval

You typically receive a visa to enter Spain, then apply for your foreigner identity card (TIE) and obtain an NIE. You must complete empadronamiento (municipal registration) in your city—needed for healthcare access pathways, banking, and many services. Timelines for TIE appointments vary by city; Madrid and Barcelona can be busy, so book promptly.

Renewal

Renewals generally require showing continued remote income, compliance with tax and social security rules as they apply to your situation, and ongoing valid insurance. Start gathering evidence several months before expiry.

Common rejections and how to avoid them

Incomplete insurance, income that fluctuates below the threshold, ambiguous employer letters, or documents not properly legalised are frequent issues. Avoid last-minute bank transfers that look artificial; show consistent remote income. If rejected, you may reapply with a stronger file—consulates differ on cooling-off periods, so ask for written reasons when possible.
`.trim(),

  bankingTips: `
Opening a bank account as a non-resident or new arrival is doable but patience helps. Large retail banks such as Banco Sabadell, BBVA, and CaixaBank frequently serve expats in major cities: you will usually need your passport, proof of address (empadronamiento or rental contract), NIE or visa documentation, and sometimes proof of employment or income. Some branches insist on appointments; others are walk-in. Online onboarding exists for certain products but residence paperwork often still matters for full-service accounts.

Digital-first options remain popular with remote workers. Wise (formerly TransferWise) is especially practical for receiving USD, GBP, or other currencies with transparent FX and local EUR receiving details—many nomads route client payments to Wise, then transfer euros to a Spanish account for rent and bills. Revolut and N26 also operate widely in Spain for day-to-day spending and ATM withdrawals, though product availability and deposit insurance differ—read fee schedules for weekend FX and ATM limits.

ATM fees: many Spanish banks charge non-customers for cash withdrawals; your home neo-bank may rebate some fees. Use bank-branded ATMs and decline dynamic currency conversion. Bizum is ubiquitous for instant peer-to-peer payments between Spanish phone numbers—handy for flatmates and local services once you have a linked account.

Tax-wise, Spanish tax residents must declare worldwide income. Foreign accounts are not illegal but may be reportable (Modelo 720 reporting of non-Spanish assets has had complex rules—get professional advice). Keep clear records of business income versus personal transfers to avoid confusion with inspectors.
`.trim(),

  healthcareInfo: `
Spain's public system (SNS—Sistema Nacional de Salud) delivers high-quality care and ranks among Europe's strongest, but access for new visa holders usually begins with comprehensive private insurance.

As a Digital Nomad Visa applicant you typically must show private health cover without large gaps—major providers include Sanitas, Adeslas (SegurCaixa), and Asisa, with monthly premiums often landing roughly between €50 and €150 depending on age, copays, and coverage breadth. Look for policies that explicitly meet consular wording: repatriation, full hospitalisation, and limited or no copays as required by your consulate checklist.

After you obtain your NIE, register on the padrón at your town hall, and in many cases contribute to social security (rules depend on your work structure), you can access public healthcare similar to residents. Procedures vary by autonomous community—Catalonia, Madrid, and Andalusia each manage their own portals.

Care quality is excellent in large cities with teaching hospitals; rural areas may involve longer waits or transfers for specialised treatment. Emergency care through A&E (urgencias) is available to anyone in urgent need—do not hesitate in true emergencies. Before you move from another EU country, carry a valid EHIC/GHIC for temporary stays; once you are a long-term resident, transition to Spanish coverage pathways.

Dental and optical care is often private; factor extras into your insurance or budget.
`.trim(),

  culturalTips: `
Spanish professional life often starts later and runs longer than northern European schedules. Meetings may begin mid-morning, lunch stretches from 2pm onward, and dinner with colleagues at 9pm or 10pm is normal—especially in Madrid and Barcelona. Do not interpret a 2:30pm meeting invite as rudeness; it mirrors local rhythm.

In smaller towns, many shops still close roughly 2–5pm; supermarkets in big cities may stay open, but plan errands accordingly. Business relationships reward trust built over time—expect small talk before contracts. English proficiency is high in tech and multinational circles in Madrid and Barcelona, yet banking, immigration, and landlords may insist on Spanish or Catalan; learning A2/B1 Spanish transforms daily life.

Social noise levels in cafés and streets run higher than in Scandinavia or Japan—embrace it or choose quieter neighbourhoods. Bureaucracy is legendary: print duplicates, bring originals, and schedule appointments calmly. Tipping is not like the US; rounding up or 5–10% in restaurants is appreciated, not mandatory.

Regional identities matter: Catalonia and the Basque Country have strong local languages and customs—show respect, avoid clichés. To build a circle quickly, join language exchanges (Conversation Exchange, local academies), expat meetups, climbing gyms, and padel clubs—padel is national glue.

Remote workers thrive when they sync calendars with local meal times and protect deep-work blocks in the morning before the city fully wakes.
`.trim(),

  realMonthlyCost: `
The following itemised example is for a single remote worker basing in Valencia—often the most affordable major coastal city with strong infrastructure.

Accommodation (one-bedroom furnished, utilities often partly included): $850
Utilities (electricity, water, internet fibre): $120
Mobile phone (unlimited data): $25
Food (groceries plus eating out three evenings per week): $400
Transport (monthly metro/bus pass): $45
Coworking space (part-time hot-desk): $150
Entertainment (gym, cinema, museums): $100
Private health insurance: $80
Coffee shops (working remotely two half-days weekly): $60
Miscellaneous (haircuts, pharmacy, software subscriptions): $100

Indicative total: about $1,930 per month.

Benchmarking: Barcelona typically runs roughly 40% higher for comparable flats in central districts; Madrid often lands near 25% above Valencia for rent and dining. Seasonality matters—July–August tourist demand on the coast can lift short lets; heating in older flats adds cost in January–February.

Treat these figures as orientation, not a promise. Couples, families, or car owners should add transport and childcare. Always model rent in euros on local listings (Idealista, Fotocasa) before you commit.
`.trim(),

  expatCommunities: [
    "Internations Spain — largest expat network",
    "Barcelona Expats Facebook Group (45,000+ members)",
    "Madrid Expats Facebook Group (30,000+ members)",
    "r/SpainExpats on Reddit",
    "Digital Nomads Spain Facebook Group",
    "Meetup.com — search Remote Work Spain",
    "Nomad List Spain community",
    "Valencia Expats Facebook Group",
  ],

  prosAndCons: {
    pros: [
      "Digital Nomad Visa — one of Europe's best",
      "300+ days of sunshine annually",
      "World-class food, culture and nightlife",
      "Excellent healthcare system",
      "High quality of life at medium cost",
      "Great transport links across Europe",
      "Warm, welcoming local culture",
      "Affordable compared to UK/Germany/France",
      "Beckham Law tax benefits for qualifying expats",
      "Strong expat and nomad community",
    ],
    cons: [
      "Bureaucracy can be slow and frustrating",
      "English levels variable outside major cities",
      "Housing market tight in Barcelona and Madrid",
      "Summer heat extreme (40°C+) in southern cities",
      "Siesta culture means shops close mid-afternoon",
      "NIE and registration process takes time",
      "Banking setup can be complex for non-EU",
      "Some regional political tensions (Catalonia)",
      "Public transport limited in rural areas",
      "Cost rising fast in Barcelona",
    ],
  },

  bestNeighbourhoods: [
    {
      city: "Barcelona",
      neighbourhood: "Eixample",
      description:
        "Central, walkable grid with excellent cafés and coworking. Ideal for professionals who want Gaudí architecture on the commute home. Typical one-bedroom ask often €1,200–€1,800 monthly depending on block condition.",
    },
    {
      city: "Barcelona",
      neighbourhood: "Poble Sec",
      description:
        "Up-and-coming, more affordable than Eixample, strong food scene on Carrer Blai, quick access to Montjuïc for runs. Expect roughly €900–€1,300 for a one-bed.",
    },
    {
      city: "Madrid",
      neighbourhood: "Malasaña",
      description:
        "Creative, bohemian, younger crowd, endless café terraces, strong indie nomad vibe. One-bed ranges commonly €1,000–€1,500.",
    },
    {
      city: "Madrid",
      neighbourhood: "Lavapiés",
      description:
        "Multicultural, comparatively affordable, authentic tapas, growing art scene. Popular with remote workers who want city centre without Salamanca prices—often €800–€1,200.",
    },
    {
      city: "Valencia",
      neighbourhood: "Ruzafa",
      description:
        "Valencia's trendiest barrio—markets, brunch spots, nightlife. Favoured by expats; one-bed flats often €700–€1,000.",
    },
  ],

  faqs: [
    {
      question: "Can I work remotely in Spain without a visa?",
      answer:
        "EU citizens can work freely in Spain. Non-EU citizens need a visa for stays over 90 days in any 180-day period under Schengen rules. Spain's Digital Nomad Visa is designed for remote workers employed or contracted outside Spain.",
    },
    {
      question: "How long does Spain's Digital Nomad Visa take to process?",
      answer:
        "Many consulates target about 20 working days once a complete application is lodged, but real times vary with workload and whether extra documents are requested—four to eight weeks is a sensible planning window.",
    },
    {
      question: "Do I need to speak Spanish to live in Spain?",
      answer:
        "Not strictly in Barcelona or Madrid's international bubbles, but day-to-day errands, landlords, and officials reward Spanish (or Catalan in Catalonia). Even A2 Spanish unlocks better rents and friendships.",
    },
    {
      question: "What is the minimum income requirement for Spain's Digital Nomad Visa?",
      answer:
        "Guidance often references roughly 200% of Spain's minimum wage—on the order of €2,160 per month in 2025/2026 terms—but legal thresholds move with the SMI. Confirm the exact multiple with your consulate and a lawyer; freelancers should show stable recurring income.",
    },
    {
      question: "Is Spain good for remote workers?",
      answer:
        "Yes—Spain mixes strong infrastructure, healthcare, culture, and relative affordability. The dedicated nomad visa, EU connectivity, and lifestyle demand make it a perennial top-ten global destination.",
    },
    {
      question: "What tax do I pay as a remote worker in Spain?",
      answer:
        "Tax residency is generally triggered by spending more than 183 days in Spain or having your primary economic interests there—then worldwide income may fall under progressive IRPF rates. Certain inbound workers may qualify for the Beckham Law special regime with a flat 24% rate for eligible employment income for up to six years. Always engage a Spanish gestor or tax lawyer—remote work structures vary.",
    },
  ],

  updated: "April 2026",
  wordCount: 2850,
};
