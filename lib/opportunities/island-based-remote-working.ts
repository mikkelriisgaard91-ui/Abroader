import type { OpportunityLanding } from "./types";

export const ISLAND_BASED_REMOTE_WORKING: OpportunityLanding = {
  slug: "island-based-remote-working",
  metaTitle: "Island-based remote working — the practical guide | Abroader",
  metaDescription:
    "Can you actually work remotely from Madeira, Gran Canaria, or the Azores? The honest guide for newly remote employees and remote founders — employer checklist, internet backup protocol, island comparison, and all-in costs.",
  heroTitle: "Island-based remote working",
  heroSubtitle:
    "Madeira, Gran Canaria, and the Azores now have government-backed nomad programmes, guaranteed fibre, and year-round communities of remote workers. The question is not whether it is possible — it is whether you have sorted the things that actually need sorting before you book.",
  heroImage:
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Laptop open on a terrace overlooking the Atlantic Ocean with clear blue skies",
  category: "Remote Living",
  stats: [
    { value: "4", label: "islands compared" },
    { value: "€800–€1,600", label: "per month all-in" },
    { value: "Year-round", label: "Atlantic island options" },
    { value: "Official", label: "nomad programmes" },
  ],

  introHeading: "Why islands — and whether this will actually work for your situation",
  introParagraphs: [
    "Island remote working is not a new trend dressed up with better Wi-Fi. Madeira, Gran Canaria, and the Azores have each made deliberate, government-level investments in becoming genuinely functional bases for remote workers — fibre infrastructure, official nomad programmes, coworking ecosystems, and communities large enough that you are not the only person doing this. The result is that working from these islands is now as reliable as working from most European cities, and considerably cheaper than London, Amsterdam, or Zurich.",
    "The question most people don't ask before researching islands is: why not just go to Lisbon? Both are in Portugal. Both have fibre. Lisbon has more flights and more restaurants. The honest answer is that islands give you something cities do not: a contained, legible social environment where meeting people is easy because the nomad community is finite and tight-knit, a genuine break from urban noise and stimulation that many remote workers find restores their focus in ways a new city does not, and — in the case of Madeira and the Azores specifically — a natural environment that is extraordinary enough to make the lifestyle feel like a genuine upgrade rather than a sideways move. For people who find cities overstimulating or socially exhausting, islands consistently outperform.",
    "The three Atlantic islands suit different profiles. Madeira has the most developed official infrastructure — the fastest guaranteed fibre in the Atlantic, a government nomad programme with Slack community and partner events, and an established enough scene to feel like a real base rather than an experiment. Gran Canaria (specifically Las Palmas de Gran Canaria) has the largest total nomad population of the three, which means more coworking options, a more diverse professional mix, and more social density — but also more tourist churn and slightly higher costs. The Azores are the quietest and best value, with a growing scene that still feels genuinely undiscovered — the trade-off is fewer direct flights and a smaller coworking infrastructure. Choose Madeira if you want the best-supported first move. Choose Gran Canaria if community density matters most. Choose the Azores if you want the quietest, most affordable, and most unspoiled version of the experience.",
    "Before anything else: if you are a salaried employee rather than a freelancer or founder, sort your employer situation before you book flights. Working remotely from another country can create unintended tax implications for your company — specifically, if your employer has no entity in the country you are working from, your presence there can in some circumstances create what is called permanent establishment risk. Most employers will say yes if you ask properly and frame it as a defined-length arrangement. Most problems occur when employees do not ask and are discovered later. A short conversation with your manager and a quick check of your employment contract is all it takes — and it turns a potential problem into a clear approval.",
  ],

  roleTypes: [
    {
      title: "The newly remote employee",
      icon: "🖥️",
      level: "Entry level",
      description:
        "Has just received remote approval from their employer and is testing the lifestyle for the first time. Does not want to be a 'digital nomad' — just wants to live somewhere beautiful for 2–3 months without their work suffering. Primary anxiety: internet reliability during video calls. Needs reassurance backed by specifics, not lifestyle content.",
      keyCerts: ["Employer approval sorted", "Reliable fibre essential", "Coliving recommended for first stay"],
      salaryRange: "Best island: Madeira",
    },
    {
      title: "The remote founder",
      icon: "🚀",
      level: "Mid level",
      description:
        "Running a freelance business or early-stage company. Using lower cost of living to extend runway while staying productive. Actively wants to be around other ambitious people. The tight-knit island founder community — Madeira and Gran Canaria both have active ones — is part of the value proposition, not just a bonus.",
      keyCerts: ["Runway calculation done", "Invoicing setup for abroad", "Community-first mindset"],
      salaryRange: "Best island: Gran Canaria",
    },
    {
      title: "The lifestyle tester",
      icon: "🌅",
      level: "Entry level",
      description:
        "Still office-based, researching and planning their first remote move. Has not yet made the leap. Needs a low-commitment, low-risk first experience — easy flight connections home, a trial stay of two to four weeks, and an environment where a lot of other people are doing the same thing for the first time. Islands beat cities for this because the community is concentrated and approachable.",
      keyCerts: ["Flight connections researched", "Trial stay 2–4 weeks", "No long lease commitment"],
      salaryRange: "Best island: Madeira or Azores",
    },
    {
      title: "The veteran nomad",
      icon: "🔄",
      level: "Senior level",
      description:
        "Experienced location-independent worker adding Atlantic islands to their seasonal rotation. Does not need hand-holding — needs fast setup, known coworking quality, and a community that is interesting rather than just welcoming. Uses islands as a productive winter base when Northern European cities become dark and expensive.",
      keyCerts: ["Fast setup priority", "Quality coworking essential", "Winter base strategy"],
      salaryRange: "Best island: Las Palmas",
    },
  ],
  roleTypesHeading: "Which remote worker profile are you?",
  roleTypesIntro:
    "Island remote working attracts people at very different stages. The infrastructure that makes Madeira right for a first-time remote employee is different from what makes Gran Canaria right for an experienced founder. Match your situation to the right island before you decide anything else.",

  howItWorksHeading: "How to make island remote working actually work",
  howItWorks: [
    {
      step: 1,
      title: "Sort your employer situation before you book anything",
      body: "If you are a salaried employee, have the conversation with your manager before you commit to flights or accommodation. Frame it as a defined-length arrangement — 'I would like to work from Madeira for 8 weeks from [date]' lands better than an open-ended ask. Check your employment contract for any geographic restrictions. If your company has an HR or legal team, confirm there are no permanent establishment concerns for your specific country. This step takes one conversation and one email. Skip it and you create a problem that is much harder to solve from a different time zone.",
    },
    {
      step: 2,
      title: "Choose your island based on visa, timezone, and community needs",
      body: "EU and EEA nationals can stay in Madeira, the Canaries, and the Azores indefinitely — they are EU territories. Non-EU nationals need to research their specific visa path: Portugal's Digital Nomad Visa covers Madeira and the Azores; the Canaries fall under Spanish visa rules. Timezone-wise, all three Atlantic island groups sit at GMT or GMT+1, which works well for European teams and US East Coast overlap. If your clients are primarily US West Coast or Asia-Pacific, Bali's GMT+8 is a stronger option.",
    },
    {
      step: 3,
      title: "Build your internet backup protocol before you arrive",
      body: "Do not assume the accommodation's Wi-Fi is sufficient. On arrival in Madeira or the Azores, pick up a NOS or MEO SIM card — around €15–20 per month for 50GB of 5G data — which becomes your failsafe hotspot for calls if the building Wi-Fi drops. In Gran Canaria, Movistar and Orange both have strong 5G coverage in Las Palmas. Locate your nearest coworking space before your first week — this is your hard backup for any day when the flat internet is genuinely unusable. Three-layer redundancy (flat fibre → mobile hotspot → coworking) means you will never miss a call due to connectivity.",
    },
    {
      step: 4,
      title: "Plan your first week before you land",
      body: "The first week on a new island is when most people make expensive or time-wasting mistakes. Have this done before arrival: SIM card purchase mapped (airport or first town), flat internet tested within 24 hours of check-in (if it fails, you want time to find a solution), nearest coworking location identified, nearest hospital or urgent care noted, Digital Nomads Madeira or equivalent Slack community joined. Day one: buy SIM, test internet, find your working spot. Day two: explore. The order matters — get infrastructure sorted before you relax.",
    },
    {
      step: 5,
      title: "Choose your base: coliving for first stays, flat for extended ones",
      body: "For a first stay of one to two months, coliving is the right call. The instant community, the known Wi-Fi, and the zero-setup overhead more than justify the premium over renting independently. For stays of two months or more — once you know the island, know where you like to work, and have a social network — renting a private flat through Flatio or Airbnb monthly and buying a coworking day pass is usually cheaper and gives you more space. Do not try to optimise for cost on your first stay. Optimise for a successful experience.",
    },
    {
      step: 6,
      title: "Plug into the official infrastructure — most people ignore it",
      body: "The Digital Nomads Madeira programme, Startup Madeira, and equivalent Canaries initiatives run active Slack communities, weekly events, and partnership discounts with local businesses. Most people join the Slack, say hello, and never engage further. The people who get the most from island remote working treat the official community as a primary social network for the first month — show up to the events, introduce yourself, ask for recommendations. The tight-knit nature of island communities means one warm introduction can open your entire social and professional network there.",
    },
  ],

  whyProviders:
    "The resources on this page split into three types: official government-backed programmes that exist specifically to support remote workers on these islands (underused and genuinely valuable), coliving and coworking operators who provide the physical infrastructure and local knowledge, and research tools for doing your own comparison before committing. Use the official programmes for community and logistics support, the operators for your physical base, and the research tools for comparing islands and costs before you decide.",

  providerGroups: [
    {
      heading: "Official programmes — built specifically for you",
      intro:
        "These government-backed initiatives exist because the islands have made attracting remote workers a strategic economic priority. They are not tourism boards with a laptop photo added. They run real community infrastructure — Slack groups, weekly events, local partner discounts, and in some cases housing support. They are underused and worth activating.",
      providers: [
        {
          name: "Digital Nomads Madeira",
          description:
            "The official regional programme for remote workers in Madeira, backed by Startup Madeira and the regional government. Runs an active Slack community, organises weekly networking events and co-working days in Ponta do Sol, and maintains a directory of partner businesses offering discounts to nomad programme members. The infrastructure here is more developed than any equivalent programme in the Atlantic islands. Joining costs nothing and gives you immediate access to the most useful local network on the island.",
          tags: ["Official", "Madeira", "Slack Community", "Free to Join", "Events"],
          href: "https://www.digitalnomads.startupmadeira.eu",
          category: "government-programme",
          useWhen:
            "You are planning a stay in Madeira and want immediate access to the best-developed official nomad infrastructure in the Atlantic.",
        },
        {
          name: "Startup Madeira",
          description:
            "The government innovation hub behind the nomad village initiative and a wider ecosystem of support for location-independent workers and entrepreneurs relocating to the archipelago. Useful for founders and remote business builders who want to understand the longer-term picture — residency pathways, local business registration, and the broader startup ecosystem on the island.",
          tags: ["Portugal", "Government", "Founders", "Residency Support"],
          href: "https://www.startupmadeira.eu",
          category: "government-programme",
          useWhen:
            "You are a founder or entrepreneur considering Madeira as a longer-term base and want to understand the business and residency infrastructure.",
        },
        {
          name: "Visit Azores — Remote Working",
          description:
            "The Azores tourism board has developed dedicated resources for remote workers considering longer stays in São Miguel, Terceira, and other islands in the archipelago. Covers connectivity, coliving options, and the growing remote worker community. Less developed than Madeira's official programme but improving rapidly — the Azores are two to three years behind Madeira on nomad infrastructure, which also means lower costs and less tourist saturation.",
          tags: ["Azores", "Growing Scene", "Best Value", "Tourism Board"],
          href: "https://www.visitazores.com",
          category: "government-programme",
          useWhen:
            "You want the most affordable and least touristy Atlantic island experience and are comfortable with a slightly less developed support infrastructure.",
        },
      ],
    },
    {
      heading: "Coliving and coworking operators — your physical base",
      intro:
        "These operators provide the actual accommodation and working infrastructure. For first-time island remote workers, starting with a coliving operator removes the setup friction and gives you immediate access to the local community. For experienced nomads, a coworking day pass paired with a private flat is often the better option.",
      providers: [
        {
          name: "Outsite — Madeira and Gran Canaria",
          description:
            "Outsite runs coliving locations in both Madeira and Gran Canaria, with private rooms, included coworking, community events, and flexible stays from one week to several months. Strong alumni Slack network means you arrive with a warm introduction to the existing community rather than starting from scratch. Consistent quality across locations makes it a reliable choice for a first island stay.",
          tags: ["Madeira", "Gran Canaria", "Coworking Included", "Flexible Stays", "Alumni Network"],
          href: "https://www.outsite.co",
          category: "direct-employer",
          useWhen:
            "You want a reliable, zero-setup coliving experience in Madeira or Gran Canaria with verified internet and immediate community access.",
        },
        {
          name: "Repeople (Canary Islands)",
          description:
            "Coliving and coworking operator in the Canaries focused on professional networking and community for location-independent workers. Smaller and more boutique than Outsite — the trade-off is higher community curation and a more founder-heavy demographic. Strong for remote business builders who want to be around other people building things.",
          tags: ["Canaries", "Coliving", "Founder Community", "Professional Focus"],
          href: "https://repeople.co",
          category: "direct-employer",
          useWhen:
            "You are a founder or freelancer in the Canaries who wants a curated, professional community rather than a larger mixed-demographic coliving space.",
        },
        {
          name: "Flatio — Mid-Term Flat Rentals",
          description:
            "Mid-term furnished flat rentals (1–12 months) in EU cities and islands including Madeira and the Canaries. Comes with legal rental contracts — useful for proving address for visa applications, banking, or tax purposes. The right tool once you are past a first stay and want to rent independently without the overhead of a traditional lease or the community cost of coliving.",
          tags: ["1–12 Months", "Legal Contracts", "EU Focus", "Proof of Address"],
          href: "https://flatio.com",
          category: "aggregator",
          useWhen:
            "You are ready to rent a private flat independently for a longer stay and need a mid-term rental with a legal contract for visa or banking purposes.",
        },
      ],
    },
    {
      heading: "Research tools — compare before you commit",
      intro:
        "Use these before choosing your island. The difference between a good research decision and an expensive mistake is usually thirty minutes spent with the right data source rather than a beautiful Instagram account.",
      providers: [
        {
          name: "Nomad List — Island Rankings",
          description:
            "The most data-driven comparison tool for remote work destinations. City profiles for Gran Canaria, Madeira, and the Azores include real crowd-sourced internet speed scores, cost of living breakdowns, safety ratings, and nomad community size. The internet speed scores are particularly valuable — they reflect actual reported experience from nomads, not theoretical infrastructure capacity. Filter by cost, internet, and community size to compare islands directly.",
          tags: ["Data-Driven", "Internet Scores", "Cost Comparison", "Community Size"],
          href: "https://nomadlist.com",
          category: "aggregator",
          useWhen:
            "You are comparing islands and want objective data on internet quality, cost of living, and nomad community size to inform your decision.",
        },
        {
          name: "Abroader — Remote Living",
          description:
            "Abroader's remote living guides cover island remote working alongside coliving, vanlife, and digital nomad visa content. Useful for comparing island basing against other remote living formats and for destination-specific guides to the cities and islands most popular with remote workers.",
          tags: ["Abroader Guides", "Destination Context", "Visa Information"],
          href: "/co-living",
          category: "aggregator",
          useWhen:
            "You want to compare island remote working against other remote living formats — coliving hubs, slow travel, or nomad visa pathways — in the same region.",
        },
      ],
    },
  ],

  salaryHighlights: [
    {
      country: "Madeira, Portugal",
      flag: "🇵🇹",
      salaryRange: "€900–€1,400",
      salaryLabel: "coliving room + desk / month",
      badge: "Best infrastructure",
      includes: [
        "Total monthly est. ~€1,800 all-in",
        "Save ~€1,000/mo vs. London → +5 months runway on €40k",
        "Fastest guaranteed fibre in the Atlantic islands",
        "EU access · GMT timezone · Official nomad programme",
      ],
    },
    {
      country: "Gran Canaria, Spain",
      flag: "🇪🇸",
      salaryRange: "€1,000–€1,600",
      salaryLabel: "coliving room + desk / month",
      badge: "Largest community",
      includes: [
        "Total monthly est. ~€2,000 all-in",
        "Save ~€800/mo vs. Amsterdam → +4 months runway on €40k",
        "Most coworking options and nomad social density",
        "EU access · GMT+1 timezone · Year-round sunshine",
      ],
    },
    {
      country: "Azores, Portugal",
      flag: "🇵🇹",
      salaryRange: "€800–€1,200",
      salaryLabel: "coliving room + desk / month",
      badge: "Best value",
      includes: [
        "Total monthly est. ~€1,600 all-in",
        "Save ~€1,200/mo vs. London → +6 months runway on €40k",
        "Quietest and most unspoiled Atlantic island option",
        "EU access · GMT timezone · Growing remote scene",
      ],
    },
    {
      country: "Bali, Indonesia",
      flag: "🇮🇩",
      salaryRange: "€500–€1,000",
      salaryLabel: "coliving room + desk / month",
      includes: [
        "Total monthly est. ~€1,400 all-in",
        "Save ~€1,400/mo vs. London → +7 months runway on €40k",
        "Best option for Asia-Pacific timezone alignment",
        "Visa complexity — research before committing",
      ],
    },
  ],
  salaryHighlightsHeading: "What island remote working actually costs — and what it saves you",
  salaryHighlightsIntro:
    "The financial case for island remote working is strongest for founders and freelancers with a UK or Northern European cost base. The all-in monthly cost on a well-priced Atlantic island is typically €1,000–€1,400 below London or Amsterdam equivalent living standards. On a €40,000 savings base, that difference translates directly into additional runway — extra months to build, ship, or find clients without financial pressure. The cost cards below show real all-in estimates including room, coworking, food, SIM, and incidentals.",

  regionsHeading: "The four best islands for remote working",
  regionsIntro:
    "Each island has a different character, a different community size, and a different set of trade-offs. Here is the honest version of each — not the tourism board copy.",

  regions: [
    {
      slug: "madeira",
      name: "Madeira, Portugal",
      label: "Madeira",
      image:
        "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Madeira coastline with dramatic cliffs and deep blue Atlantic ocean",
      season: "Best: Mar – Jun, Sep – Nov",
      body: "Madeira is the most mature and best-supported remote work base in the Atlantic. The Digital Nomads Madeira programme has been running since 2021 and has built real infrastructure — not just a landing page. Ponta do Sol village, where the programme is centred, has guaranteed fibre installed specifically for remote workers, a community house, and a weekly events calendar. Funchal, the capital, offers a wider range of accommodation, restaurants, and coworking options for people who prefer a city feel. The island is genuinely beautiful and compact enough to feel manageable. Atlantic storms can affect the west coast from October to February — this is worth knowing before booking outdoor-heavy accommodation. EU nationals stay freely; non-EU citizens should check Portugal's Digital Nomad Visa requirements.",
      relatedHref: "/co-living",
      relatedLabel: "Coliving options in Madeira",
    },
    {
      slug: "gran-canaria",
      name: "Gran Canaria, Spain",
      label: "Gran Canaria",
      image:
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Las Palmas de Gran Canaria cityfront with palm trees and golden light",
      season: "Best: Oct – Apr (off-peak)",
      body: "Las Palmas de Gran Canaria has the largest established nomad community in the Atlantic island group — the density of coworking spaces, the variety of accommodation, and the sheer number of remote workers means you are never more than one conversation away from a professional peer. The city itself is genuinely pleasant to live in year-round: mild climate, a real urban infrastructure, and a beach walk that takes fifteen minutes from the main coworking district. The trade-off is higher tourist volume in peak season (July–August) which pushes accommodation costs up and reduces the signal-to-noise ratio in shared spaces. The Repeople coliving operator has built specifically around the professional nomad demographic. EU access as a Spanish territory; non-EU visitors should check the Spanish digital nomad visa pathway.",
    },
    {
      slug: "azores",
      name: "Azores, Portugal",
      label: "Azores",
      image:
        "https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Volcanic crater lake in the Azores surrounded by green hills and mist",
      season: "Best: May – Sep",
      body: "The Azores are where you go when you want the Atlantic island experience without the tourist infrastructure that has built up around Madeira and Gran Canaria. São Miguel is the main island for remote workers — it has growing coworking options, a small but genuine nomad community, and some of the most extraordinary volcanic landscape in Europe as a backdrop. The honest trade-offs: fewer direct flight connections than Madeira or Gran Canaria (making weekend escapes or emergency travel home slower), a more limited coworking infrastructure, and genuinely wet winters in a way the other islands are not. The upside: significantly lower costs, a more authentically local feel, and a remote working scene that is early enough that the community is still tight-knit and welcoming rather than saturated. EU access as a Portuguese territory.",
      relatedHref: "/co-living",
      relatedLabel: "Remote living in Portugal",
    },
    {
      slug: "bali",
      name: "Bali, Indonesia",
      label: "Bali",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Rice terraces in Bali with tropical vegetation and morning mist",
      season: "Best: Apr – Jun (dry season, pre-peak)",
      body: "Bali operates in a different league from the Atlantic islands — lower costs, higher community density, and a completely different timezone that suits Asia-Pacific and US West Coast workers specifically. Canggu has the most developed coworking and coliving infrastructure outside Europe. The trade-offs are real: the visa and work permit situation for long-stay remote workers in Indonesia changes frequently and requires careful research, internet quality varies dramatically by neighbourhood and degrades under peak-season load, and the wet season (November–March) significantly affects outdoor quality of life. For remote workers whose client base or team is primarily in Asia or the Americas, Bali consistently outperforms the Atlantic islands on community energy and cost efficiency.",
    },
  ],

  seasonalCalendar: [
    {
      region: "Madeira",
      months: "Mar – Jun · Sep – Nov",
      locations: ["Ponta do Sol", "Funchal", "Calheta"],
      notes: "Jul–Aug: peak tourist season, accommodation costs rise. Oct–Feb: Atlantic storms on west coast. Best community density in spring and autumn.",
    },
    {
      region: "Gran Canaria",
      months: "Oct – Apr",
      locations: ["Las Palmas", "Maspalomas area", "Telde"],
      notes: "Jul–Aug: tourist peak, avoid for cost and crowding. Oct–Apr delivers the best combination of mild weather, lower prices, and highest professional nomad density.",
    },
    {
      region: "Azores",
      months: "May – Sep",
      locations: ["Ponta Delgada", "Furnas", "Vila Franca do Campo"],
      notes: "Winter is genuinely wet and can feel isolating given fewer flight connections. May–September gives the best weather and the most active remote worker community.",
    },
    {
      region: "Bali",
      months: "Apr – Jun",
      locations: ["Canggu", "Ubud", "Seminyak"],
      notes: "Apr–Jun hits the sweet spot: dry weather before peak season congestion. Nov–Mar is wet season with reduced outdoor quality and thinner community.",
    },
  ],
  seasonalCalendarHeading: "When each island is actually at its best",
  seasonalCalendarIntro:
    "The difference between arriving at the right time and the wrong time on a small island is larger than in a city — there is less to fall back on when the weather is bad or the tourist peak empties the professional community. Plan your arrival window deliberately.",

  goodToKnow: [
    {
      emoji: "📡",
      title: "Internet varies by street, not by island",
      body: "Every island has fast fibre in theory. In practice, whether your specific flat has it — and whether the building wiring can deliver it — varies street by street. Test your accommodation's internet within 24 hours of check-in: run a Speedtest at 10am and at 5pm (peak load). If it is consistently below 20Mbps download, activate your mobile hotspot backup immediately and tell your host. In Madeira and the Azores, NOS and MEO both offer SIM-only plans with 50GB of 5G data for around €15–20/month — buy one at the airport. In Gran Canaria, Movistar and Orange are the strongest networks in Las Palmas. Three-layer redundancy — flat fibre, mobile hotspot, coworking backup — means you will not miss a call.",
    },
    {
      emoji: "🌀",
      title: "Island fever is real — plan your exit before you need it",
      body: "After four to six weeks on a small island, some people hit a wall. The beauty becomes background noise, the social circle starts to feel repetitive, and the limited options for a change of scene become noticeable. This is normal and predictable. The fix is not to leave — it is to plan a short mainland or inter-island trip before you need it, so it is a planned refresh rather than an emergency escape. Book a long weekend in Lisbon for week five before you arrive. It resets your appreciation for the island significantly.",
    },
    {
      emoji: "🛒",
      title: "Groceries cost more than you expect",
      body: "Almost everything on an Atlantic island is imported, which adds 15–30% to food costs compared to equivalent mainland European cities. Eating out is often cheaper relative to self-catering than you would expect, particularly at local restaurants away from the tourist areas. Factor this into your monthly budget rather than discovering it at the supermarket checkout.",
    },
    {
      emoji: "🏥",
      title: "Healthcare access is the thing people forget to research",
      body: "Know where the nearest hospital with emergency capacity is before you need it. On smaller islands or in rural areas, that might be further away than you expect. Check that your travel or health insurance covers emergency treatment in the specific territory you are in — EU health cards cover EU territories but not all insurance policies explicitly cover island territories. Madeira and the Canaries have solid hospital infrastructure; the Azores and Bali require more careful insurance planning. Five minutes of research now saves genuine panic later.",
    },
    {
      emoji: "🤝",
      title: "The nomad community is small — reputation travels fast",
      body: "Island nomad communities have one characteristic that city nomad scenes do not: everyone knows everyone within about two weeks. This is mostly a benefit — it makes meeting people easy and creates genuine warmth and mutual support. It also means that if you are difficult to work with, consistently cancel plans, or behave badly, the community knows about it quickly and permanently. Show up for the events you say you will attend. Be generous with introductions. The network return on being a good community member on a small island is higher than almost anywhere else.",
    },
    {
      emoji: "🏛️",
      title: "The official nomad programmes are genuinely underused",
      body: "Most people join the Digital Nomads Madeira Slack, send a hello message, and never engage again. The people who get the most from island remote working treat the official community infrastructure as a primary resource for the first month — they attend the weekly events, ask for accommodation recommendations, use the partner discounts, and make introductions. The programme exists because the island wants you to succeed as a remote worker there. The tools it offers are more useful than most people discover because most people do not use them.",
    },
  ],
  goodToKnowHeading: "What people wish they had known before arriving",

  faqHeading: "Frequently asked questions",
  faqIntro:
    "The questions most remote workers and founders have before committing to their first island stay — answered honestly.",
  faqs: [
    {
      question: "Will my employer care that I am working from another country?",
      answer:
        "Possibly — and you should find out before you go rather than after. The main concerns for employers are: permanent establishment tax risk (if your presence in a country could create a taxable entity for the company), employment contract terms that specify a work location, and data security or confidentiality requirements that may restrict where you can work. Most employers will say yes to a defined-length arrangement if asked properly. Frame it as 'I would like to work from Madeira for eight weeks from [date]' and address the specific concerns your manager is likely to have. The conversation is almost always better than the assumption.",
    },
    {
      question: "What visa do I need to work remotely from Madeira, Gran Canaria, or the Azores?",
      answer:
        "EU and EEA nationals can stay and work from any EU territory — including Madeira, the Azores, and the Canary Islands — indefinitely without a separate visa. Non-EU nationals need to check their specific situation: Portugal's Digital Nomad Visa covers Madeira and the Azores and requires proof of remote income above a set threshold; the Canary Islands fall under Spanish visa rules with a similar remote worker visa pathway. Visa requirements change — always verify with the relevant consulate or an immigration adviser for your specific nationality before committing to a long stay.",
    },
    {
      question: "What happens if my internet fails during a critical call?",
      answer:
        "If you have followed the three-layer backup protocol — flat fibre, mobile hotspot SIM, nearest coworking location — nothing happens. You switch to your hotspot within thirty seconds. If you have not set up the backup layers, you scramble. The answer to internet anxiety is not reassurance that the internet is reliable — it is having a plan that makes reliability irrelevant. Buy the local SIM on the day you arrive. Know which coworking space is nearest. Test your flat internet before your first important call.",
    },
    {
      question: "What is the minimum stay that actually makes it worthwhile?",
      answer:
        "Four weeks is the minimum for the experience to feel like remote living rather than a working holiday. The first week is setup and adjustment. The second week is when you find your rhythm. Weeks three and four are when the community starts to feel familiar and the productivity benefits kick in. Two weeks is too short to settle. For founders doing the runway calculation, the financial case only becomes compelling at two months or more — one month is roughly break-even with mainland costs once you factor in flights and setup.",
    },
    {
      question: "Can I bring my partner or family?",
      answer:
        "Yes, and island remote working is often better with a partner than without one — the contained social environment and natural setting suits couples and families considerably better than fast-moving city nomad scenes. If your partner also works remotely, the dual-income runway extension calculation becomes very compelling. For families with children, Madeira and Gran Canaria both have international schools and a settled expat community. The Azores are quieter and more limited on international schooling options.",
    },
    {
      question: "Is island remote working safe for solo travellers?",
      answer:
        "The Atlantic islands — Madeira, the Azores, Gran Canaria — are among the safest destinations for solo remote workers, including women travelling alone. The tight-knit nomad community means you are rarely socially isolated, and the islands have low crime rates relative to mainland European cities. The main safety consideration is the natural environment — coastal cliffs and volcanic terrain require basic hiking awareness. Standard travel precautions apply; the islands do not require anything beyond that.",
    },
    {
      question: "Does Abroader book island stays directly?",
      answer:
        "No. Abroader is a research and comparison platform. We help you understand the options, compare islands and providers, and make an informed decision. All bookings and applications go directly through the individual operators, official programmes, and accommodation platforms listed on this page.",
    },
  ],

  disclaimer:
    "Tax and visa rules for remote workers vary significantly by nationality, employer jurisdiction, and length of stay. The information on this page is editorial guidance only — always verify your specific situation with a qualified tax adviser, immigration specialist, or your employer's legal team before committing to a remote working arrangement abroad.",

  ctaHeading: "Plan your island remote working base",
  ctaDescription:
    "Browse Abroader's remote living guides, explore digital nomad visa options, or book a free consultation with the team to map out your first island stay.",
  ctaLinks: [
    { href: "/co-living", label: "Browse remote living", primary: true },
    { href: "/opportunities/digital-nomad-coliving", label: "Digital nomad coliving" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/opportunities", label: "All Top 50 opportunities" },
    { href: "/opportunities/digital-nomad-coliving", label: "Digital nomad coliving" },
    { href: "/opportunities/eco-village-living-abroad", label: "Eco-village living" },
  ],
};
