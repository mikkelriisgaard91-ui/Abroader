import type { OpportunityLanding } from "./types";

export const SAILBOAT_LIVING_ABROAD: OpportunityLanding = {
  slug: "sailboat-living-abroad",
  metaTitle: "Sailboat living abroad — crewing, chartering, or owning | Abroader",
  metaDescription:
    "Two paths into sailboat living abroad: crew on someone else's boat for free, or buy your own and go. Honest cost breakdowns, certification routes, the 10% maintenance rule, and where the real liveaboard community actually lives.",
  heroTitle: "Sailboat living abroad",
  heroSubtitle:
    "Two completely different entry points, same destination. Whether you have nothing but free time or a serious budget and a plan, there is a real path into living aboard a sailboat abroad. Here is both — honestly.",
  heroImage:
    "https://images.unsplash.com/photo-1500514966906-fe245eea9344?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Sailboat anchored in a clear turquoise bay with mountains in the background",
  category: "Remote Living",
  stats: [
    { value: "2 paths", label: "crew or own" },
    { value: "€0–€150k+", label: "entry cost range" },
    { value: "4", label: "cruising regions" },
    { value: "Med → Atlantic → Caribbean", label: "the classic circuit" },
  ],

  introHeading: "Two paths in — and why both are real",
  introParagraphs: [
    "Sailboat living is one of the widest-spectrum opportunities on this site. At one end: someone with zero sailing experience and zero budget who wants to crew on a passage from the Canaries to the Caribbean in exchange for helping with watch rotations and cooking. At the other: a couple who has sold their house, bought a 40-foot sloop, and is planning a two-year circumnavigation. Both are real, both are happening right now, and the gap between them is smaller than it looks — most liveaboard boat owners started on someone else's boat. The page is structured for both, clearly labelled throughout as Path A (no boat needed) and Path B (ownership).",
    "Before anything else, the YouTube problem. Sailing La Vagabonde, Gone with the Wynns, and a hundred similar channels have created the most aspirational and most misleading body of content about any lifestyle choice covered on this site. The beautiful parts are real — the anchorages, the freedom, the sunsets, the community of other liveaboards. So is the engine failure at 2am forty miles offshore, the €5,000 unexpected haulout bill, the three weeks stuck in a marina waiting for a part, and the relationship pressure that comes from living in fifty square feet with another human being at sea. Both versions are true. The people who thrive in this life go in knowing both.",
    "Path A — no boat needed — is genuinely underused and genuinely excellent. Skippers crossing oceans need reliable crew, and the supply of reliable crew is consistently lower than demand. You can crew on passages across the Atlantic, around the Mediterranean, or through the Caribbean without owning a boat, paying for a berth, or holding a sailing licence. Your costs are personal expenses only — your time and willingness are the currency. After one or two seasons of crewing, you will know with complete certainty whether the ownership step is right for you, and you will have the sea miles, the references, and the practical knowledge to do it properly if it is.",
    "Path B — ownership — requires honest budgeting before everything else. The listing price of a boat is typically 30–40% of your real first-year cost once refit, safety equipment, charts, insurance, and marina fees are added. Then there is the 10% rule: experienced liveaboards budget 10% of the boat's purchase price per year for maintenance and unexpected repairs. On a €40,000 boat that is €4,000 per year, or €333 per month, before you have paid for food, marina fees, or a SIM card. Budget the real number from the start. The people who run out of money and sail home unhappily almost always entered with the listing price in their head rather than the true cost.",
  ],

  roleTypes: [
    {
      title: "The crew seeker",
      icon: "🧭",
      level: "Entry level",
      description:
        "No boat, no licence, possibly no sailing experience beyond a holiday dinghy. Wants to experience the liveaboard sailing lifestyle before deciding whether to pursue ownership. Will crew on passages in exchange for berth and food. The right platforms give access to Atlantic crossings, Mediterranean coastal passages, and Caribbean sailing — all without spending anything beyond personal expenses.",
      keyCerts: ["No licence required to crew", "RYA Competent Crew useful", "Reliable references essential"],
      salaryRange: "Path A — starts free",
    },
    {
      title: "The mile builder",
      icon: "⚓",
      level: "Entry-mid level",
      description:
        "Has RYA Day Skipper or equivalent and is actively logging sea miles toward Coastal Skipper or Yachtmaster qualification. Uses crew berths strategically to build offshore miles that a Day Skipper course alone cannot provide. Each passage adds to the logbook, the skill base, and the reference network. This is the most deliberate version of Path A — crewing as a structured progression toward ownership, not just an experience.",
      keyCerts: ["RYA Day Skipper (theory + practical)", "Logbook maintained", "Offshore miles targeted"],
      salaryRange: "Path A → B transition",
    },
    {
      title: "The aspiring owner",
      icon: "🛥️",
      level: "Mid-senior level",
      description:
        "Has done the research, has a realistic budget, and is seriously planning the purchase and first season. Needs the certification pathway, the real cost breakdown, and guidance on which cruising ground to start in. The Mediterranean is the right first theatre — forgiving seas, excellent infrastructure, large English-speaking cruising community, and a well-defined season that gives a natural start and end point for a first year.",
      keyCerts: ["RYA Day Skipper minimum", "Coastal Skipper recommended", "Budget: full true cost modelled"],
      salaryRange: "Path B — €15k to €150k+",
    },
    {
      title: "The remote liveaboard",
      icon: "💻",
      level: "Mid level",
      description:
        "Already works remotely and wants to combine location independence with sailboat living. The specific challenge for this profile is connectivity — marina Wi-Fi is universally inadequate, and a proper mobile internet setup is non-negotiable. Either path works, but most remote liveaboards find that owning gives more control over where they anchor (and therefore what signal they have access to) than crewing on schedules they do not set.",
      keyCerts: ["Async-friendly work preferred", "4G/5G router + external antenna", "Marina vs. anchor strategy planned"],
      salaryRange: "Path A or B depending on budget",
    },
  ],
  roleTypesHeading: "Which path are you on?",
  roleTypesIntro:
    "Identify your path before reading anything else. The providers, costs, and steps are different for each. Most people who end up as liveaboard boat owners started on Path A — which is not a detour, it is the best possible preparation.",

  howItWorksHeading: "How to get into sailboat living — both paths in full",
  howItWorks: [
    {
      step: 1,
      title: "Path A — Build a crew profile that answers the skipper's real questions",
      body: "Register on Find a Crew and Crewseekers with a profile that addresses what skippers actually care about: reliability (will you show up when you said you would?), seasickness history (be honest — a sick crew member on a passage is a serious problem), any useful skills aboard (cooking, mechanics, first aid, navigation, watch-keeping), and availability window. A profile photo, a short honest bio, and two references from people who can vouch for your reliability will put you ahead of 80% of applicants. You do not need sailing experience for most coastal and ocean passages — skippers will teach you what you need to know aboard.",
    },
    {
      step: 2,
      title: "Path A — Your first passage: treat it as a paid education",
      body: "Your first crewed passage will almost certainly be unpaid — you contribute labour and watch-keeping in exchange for berth, food, and the passage itself. This is not exploitation; it is the standard arrangement and the value exchange is real. A transatlantic passage from the Canaries to the Caribbean costs upward of €2,000 per person on a commercial sailing yacht. As crew, you pay nothing and arrive with an offshore Atlantic crossing in your logbook. Log every mile from the first day — your logbook is your CV for every subsequent opportunity.",
    },
    {
      step: 3,
      title: "Path A — Build toward RYA Day Skipper while you are crewing",
      body: "You do not need a licence to crew, but the RYA Day Skipper theory course (available online, typically €200–€400) dramatically improves your value as crew and your own safety awareness at sea. It also opens the door to crewing on more technically demanding passages where skippers want crew who understand what is happening around them. Do the theory course during your first winter ashore. After two to three seasons of crewing, you will have the miles, the knowledge, and the certainty to make a clear decision about whether to buy a boat.",
    },
    {
      step: 4,
      title: "Path B — Get certified before you look at a single boat listing",
      body: "The instinct is to start shopping for boats immediately. Resist it. Get your RYA Day Skipper practical certificate first — it takes five days on the water and costs €600–€1,200 at a recognised sailing school. Without it, you cannot charter a yacht in most of the world, your insurance options narrow significantly, and — most importantly — you do not yet know what you are buying when you look at a boat. The certification gives you a baseline of competence and a vocabulary for assessing what you are seeing. RYA Coastal Skipper is the next step for anyone planning to sail beyond the Mediterranean.",
    },
    {
      step: 5,
      title: "Path B — Budget the true cost, not the listing price",
      body: "Take the asking price of any boat you are considering. Add 20–30% for the initial refit, safety equipment (EPIRB, flares, liferaft, jacklines, AIS), charts, and commissioning. Add 10% of the purchase price per year as your ongoing maintenance reserve. Add marina fees (€600–€2,500/month in the Mediterranean depending on location and season, or near zero if you anchor out). That total is your real cost. Budget it explicitly before you look at a single listing. Then look at listings and filter only those that fit the real number, not the aspirational one.",
    },
    {
      step: 6,
      title: "Path B — Start in the Mediterranean, winter in Las Palmas",
      body: "The Mediterranean is the right first cruising theatre for new liveaboard owners. The sailing season (May–October) is well-defined, the seas are relatively calm, marinas are abundant and close together, and the English-speaking cruising community is large and genuinely helpful. When October comes and the Mediterranean season ends, sail to Las Palmas de Gran Canaria — the most important liveaboard community in the Atlantic, the staging post for the classic Atlantic circuit, and the best refit and provisioning facilities between Europe and the Americas. Spend the winter there. It will calibrate your experience of the lifestyle more accurately than anything else.",
    },
  ],

  whyProviders:
    "The providers split cleanly by path. Path A needs crew-matching platforms — Find a Crew and Crewseekers are the two most active. Path B needs certification bodies first (RYA is the global standard), then ocean-crossing infrastructure (World Cruising Club / ARC for a supported Atlantic crossing), then country-by-country clearance guidance (Noonsite). The cruising community forums sit across both paths — Cruisers Forum is the single most useful resource for practical liveaboard questions that no guide covers.",

  providerGroups: [
    {
      heading: "Path A — Crew placement platforms",
      intro:
        "These platforms connect skippers who need crew with people who want passages. Free to browse in most cases; a paid profile unlocks full skipper contact details. Being proactive — messaging skippers directly rather than waiting for them to find you — dramatically increases your placement rate. October and November in Las Palmas is the peak season for Atlantic crossing crew placements; start your profile in September.",
      providers: [
        {
          name: "Find a Crew",
          description:
            "The largest and most active global crew-matching platform, with listings across the Mediterranean, Atlantic, Caribbean, and Pacific. Free basic profiles; a paid upgrade (around €50/year) gives full access to skipper contact details and message priority. The Atlantic crossing listings peak in October–November when boats stage in the Canaries for the ARC or independent Atlantic passages. The platform also lists yacht delivery work and paid professional crew roles for those building toward a career at sea.",
          tags: ["Global", "Atlantic Crossings", "Mediterranean", "Delivery Work", "Free to Browse"],
          href: "https://www.findacrew.net",
          category: "job-board",
          useWhen:
            "You want the widest global reach for crew placement, especially for Atlantic crossings and Mediterranean coastal passages.",
        },
        {
          name: "Crewseekers",
          description:
            "UK and European-focused crew placement platform with a strong Mediterranean and Atlantic inventory. Slightly smaller than Find a Crew but with a reputation for more vetted listings and a higher proportion of serious offshore passages rather than day-sail crewing. Membership-based model. Particularly strong for UK-based crew looking for passages departing from UK ports or the Solent sailing scene.",
          tags: ["UK / Europe Focus", "Offshore Passages", "Vetted Listings", "Membership"],
          href: "https://www.crewseekers.net",
          category: "job-board",
          useWhen:
            "You are UK or Europe-based and want a more curated, offshore-passage-focused alternative to Find a Crew.",
        },
        {
          name: "Ocean Crew Link",
          description:
            "Yacht delivery and professional crew placement platform. More commercially oriented than Find a Crew — the listings here tend to be paid positions or structured yacht delivery work rather than passage-in-exchange-for-crew arrangements. Useful for people who have built sufficient miles and references to move from unpaid crewing into paid delivery work, or who want to build toward a professional crew career alongside liveaboard sailing.",
          tags: ["Yacht Delivery", "Paid Positions", "Professional", "Mile Building"],
          href: "https://www.oceancrewlink.com",
          category: "job-board",
          useWhen:
            "You have built your sea miles and references and want to move from unpaid crew berths into paid yacht delivery or professional crew work.",
        },
      ],
    },
    {
      heading: "Certification — both paths",
      intro:
        "Certification is optional for Path A (you can crew without any licence) but becomes increasingly valuable as you build miles and pursue more demanding passages. For Path B it is essential — you cannot charter, insure, or competently operate an ocean-going yacht without it. RYA is the global standard recognised by insurers, charter companies, and other skippers worldwide.",
      providers: [
        {
          name: "RYA — Royal Yachting Association",
          description:
            "The UK governing body for recreational boating and the source of the most internationally recognised sailing certifications. The progression from Competent Crew (5 days, no experience required) through Day Skipper (5 days practical + theory course) to Coastal Skipper and Yachtmaster is the standard pathway for liveaboard sailors worldwide. RYA-accredited schools operate across the UK, Mediterranean, and Caribbean — you can complete your training in Greece, Croatia, or the Canaries rather than the UK if you prefer.",
          tags: ["Global Standard", "Competent Crew → Yachtmaster", "Insurer Recognised", "Schools Worldwide"],
          href: "https://www.rya.org.uk/training",
          category: "certification-body",
          useWhen:
            "You need the internationally recognised sailing qualification for insurance, charter, or ocean passage purposes. The default choice for most nationalities.",
        },
        {
          name: "Sunsail — Learn to Sail",
          description:
            "Flotilla and sailing school holidays in Greece, Croatia, and the Caribbean — a structured path from complete beginner to bareboat charter readiness. Sunsail's flotilla model (sailing in a group of yachts with a lead boat) is one of the most forgiving ways to build practical experience, because you are never more than a VHF call away from professional support. More expensive than a shore-based RYA course, but the combination of certification and genuine cruising experience in beautiful locations makes it a popular first step for aspiring liveaboard owners.",
          tags: ["Greece · Croatia · Caribbean", "Flotilla Model", "Beginner Friendly", "Bareboat Ready"],
          href: "https://www.sunsail.com",
          category: "training-placement",
          useWhen:
            "You want to combine your initial sailing certification with a genuine cruising experience in the Mediterranean or Caribbean, not just a harbour-based course.",
        },
      ],
    },
    {
      heading: "Path B — Ocean crossing and ownership resources",
      intro:
        "Once you are certified and planning an offshore passage or boat purchase, these resources become essential. The World Cruising Club ARC rally is the most structured and supported way to cross the Atlantic for the first time. Noonsite is the definitive reference for country-by-country entry requirements for cruising yachts. Cruisers Forum is where the real practical knowledge lives.",
      providers: [
        {
          name: "World Cruising Club — ARC Rally",
          description:
            "The Atlantic Rally for Cruisers departs Las Palmas de Gran Canaria every November with 200+ boats crossing to St Lucia together. The most structured and supported way to make your first Atlantic crossing — weather routing, radio nets, safety briefings, and a finish line party at the other end. Entry costs around €900–€1,400 depending on boat size. Not required for an Atlantic crossing, but for first-time offshore sailors the community structure and peace of mind it provides is worth significantly more than the entry fee.",
          tags: ["Atlantic Crossing", "November Departure", "Structured Support", "200+ Boats", "Las Palmas → St Lucia"],
          href: "https://www.worldcruising.com/arc/event.aspx",
          category: "direct-employer",
          useWhen:
            "You are planning your first Atlantic crossing and want the safety net and community of a supported rally rather than crossing independently.",
        },
        {
          name: "Noonsite",
          description:
            "The definitive cruising reference for country-by-country entry requirements, customs clearance procedures, visa rules, and safety advisories for cruising yachts. Sailing a privately owned boat across international borders requires clearing customs and immigration in every country — the rules vary enormously and change frequently. Noonsite is crowd-updated by the cruising community and is the first reference to check before entering any port in a foreign country.",
          tags: ["Country Entry Requirements", "Customs Clearance", "Visa Rules", "Safety Advisories", "Crowd-Updated"],
          href: "https://www.noonsite.com",
          category: "aggregator",
          useWhen:
            "You are planning a passage that crosses international borders and need accurate, current entry requirements and clearance procedures for each country.",
        },
        {
          name: "Cruisers Forum",
          description:
            "The largest online community for cruising sailors, with active forums covering every aspect of liveaboard life: boat buying and maintenance, passage planning, anchorage reviews, country-specific advice, equipment recommendations, and the unfiltered real-world experience that no published guide contains. The search function is worth hours of research — almost every practical question about liveaboard sailing has been asked and answered here in granular detail by people who have actually done it.",
          tags: ["Community Forum", "Maintenance Advice", "Anchorage Reviews", "Passage Planning", "Unfiltered"],
          href: "https://www.cruisersforum.com",
          category: "aggregator",
          useWhen:
            "You have a specific practical question about liveaboard sailing that no guide answers — the search function here will almost always surface a thread from someone who has been in exactly your situation.",
        },
      ],
    },
  ],

  salaryHighlights: [
    {
      country: "Crew berth — Path A",
      flag: "🧭",
      salaryRange: "€0",
      salaryLabel: "in exchange for watch-keeping and crew work",
      badge: "Best entry point",
      includes: [
        "Berth and food provided by skipper",
        "Personal expenses only (flights to join, SIM, spending)",
        "Atlantic crossing value: €2,000+ if purchased commercially",
        "Sea miles logged toward future certification",
      ],
    },
    {
      country: "RYA Day Skipper",
      flag: "📋",
      salaryRange: "€600–€1,200",
      salaryLabel: "theory course + 5-day practical",
      includes: [
        "Internationally recognised qualification",
        "Required by most insurers for bareboat charter",
        "Can be completed in Greece, Croatia, or Canaries",
        "Theory course available online (€200–€400)",
      ],
    },
    {
      country: "Budget liveaboard boat",
      flag: "⛵",
      salaryRange: "€15,000–€45,000",
      salaryLabel: "purchase price (add 30% for true first-year cost)",
      includes: [
        "Older 30–38ft cruising yacht in sailing condition",
        "Refit, safety gear, charts add €5,000–€15,000",
        "10% rule: budget €1,500–€4,500/year for maintenance",
        "Monthly liveaboard costs: €800–€1,500 all-in",
      ],
    },
    {
      country: "Bluewater cruiser",
      flag: "🌊",
      salaryRange: "€50,000–€150,000+",
      salaryLabel: "purchase price (ocean-capable, ready to cross)",
      badge: "Ocean-ready",
      includes: [
        "Modern 38–50ft bluewater yacht, offshore equipped",
        "10% rule: €5,000–€15,000/year maintenance budget",
        "ARC rally entry: €900–€1,400 for first Atlantic crossing",
        "Monthly liveaboard costs: €1,200–€2,500 all-in",
      ],
    },
  ],
  salaryHighlightsHeading: "The honest cost spectrum — from free to bluewater",
  salaryHighlightsIntro:
    "The 10% maintenance rule is the number that most aspiring boat owners ignore and most experienced liveaboards cite as the most important financial reality of the lifestyle. On a €40,000 boat: budget €4,000 per year — €333 per month — for maintenance and unexpected repairs, before marina fees, food, or anything else. This is not pessimistic. It is what boats cost to keep running. Build it into your model from the start.",

  regionsHeading: "The four sailing regions — and how they connect",
  regionsIntro:
    "The classic liveaboard circuit flows naturally: learn in the Mediterranean, winter in Las Palmas, cross the Atlantic, cruise the Caribbean. Each region has a defined season and a reason for the timing. Understanding the circuit helps you plan which part to enter first and how the regions connect into a longer journey.",

  regions: [
    {
      slug: "mediterranean",
      name: "Mediterranean",
      label: "Mediterranean",
      image:
        "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Sailing yacht anchored in a turquoise Mediterranean bay with white cliffs",
      season: "Season: May – October",
      body: "The Mediterranean is the right first cruising theatre for both path A crew seekers and path B new boat owners. The sailing season is well-defined — May through October — with reliable summer winds, calm seas by offshore standards, and marinas or anchorages within easy reach throughout. The Balearics (Mallorca, Menorca, Ibiza), Croatia, and the Greek islands are the three most popular areas, each with a large English-speaking cruising community and excellent provisioning. The honest caveats: charter boat traffic is intense in July and August, the most beautiful anchorages are crowded in peak season, and marina costs in the western Mediterranean (particularly Mallorca) can be eye-watering. Most experienced cruisers time their passage to arrive in the eastern Mediterranean in June and work back west by September to avoid the worst of both.",
      relatedHref: "/opportunities/yacht-sailing-crew-jobs",
      relatedLabel: "Yacht crew jobs in the Med",
    },
    {
      slug: "canary-islands",
      name: "Canary Islands",
      label: "Canary Islands",
      image:
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Las Palmas marina in Gran Canaria with boats moored and city behind",
      season: "Staging: October – January",
      body: "Las Palmas de Gran Canaria is the most important liveaboard sailing community in the Atlantic and arguably the most important single location in the liveaboard world. Every October through January, hundreds of boats arrive to prepare for the Atlantic crossing — the marina at Las Palmas fills with cruising yachts from every flag, provisioning runs at capacity, and the social density of experienced liveaboard sailors is unlike anything else in Europe. For Path A crew seekers, October and November in Las Palmas is the peak window for Atlantic crossing crew placements — skippers who need crew are actively recruiting, and a week on the marina docks talking to boats will get you further than months on a platform. For Path B owners, the refit and provisioning facilities here are the best between Europe and the Americas.",
    },
    {
      slug: "caribbean",
      name: "Caribbean",
      label: "Caribbean",
      image:
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Sailboat in a turquoise Caribbean bay surrounded by green hills",
      season: "Dry season: December – April",
      body: "The Caribbean cruising season runs December through April — the dry season, when the trade winds are reliable and consistent, and before the Atlantic hurricane season begins in June. The classic cruising ground runs from the French Antilles (Martinique, Guadeloupe) south through the Windward Islands to Grenada and Trinidad, which sits below the hurricane belt and serves as a safe storage location for boats during the season. The sailing here is genuinely extraordinary — steady trade winds, clear water, and an island-hopping culture built around cruising boats. The practical reality: hurricane season (June–November) requires a plan. Boats either return to Europe, sail south to Trinidad, or pay for certified hurricane hole storage. This is the cost that catches people off guard — build it into your annual budget.",
      relatedHref: "/opportunities/yacht-sailing-crew-jobs",
      relatedLabel: "Caribbean yacht crew jobs",
    },
    {
      slug: "southeast-asia",
      name: "Southeast Asia",
      label: "SE Asia",
      image:
        "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Traditional longtail boats in a limestone karst bay in Thailand",
      season: "Best: Nov – Apr (NE monsoon season)",
      body: "Thailand (Phuket) and Malaysia (Langkawi) are the two main hubs for liveaboard sailing in Southeast Asia, and they offer something the Mediterranean and Caribbean cannot: extraordinarily affordable and high-quality boat maintenance. Labour costs for skilled marine engineers and boatyards are a fraction of European or Caribbean equivalents, which makes this region disproportionately attractive for long-haul liveaboards who need serious refit work done cost-effectively. The sailing itself — limestone karst bays in Thailand, the Mergui Archipelago in Myanmar, the islands of the Malaysian coast — is spectacular and significantly less crowded than the Med. The honest caveats: the route to get here from Europe is long and complex, the visa situation for boats varies by country and changes, and the distances involved require genuinely offshore-capable boats and experienced crews.",
    },
  ],

  seasonalCalendar: [
    {
      region: "Mediterranean",
      months: "May – Oct",
      locations: ["Balearics", "Croatia", "Greek Islands", "Turkey"],
      notes: "Sail east in May–June, work back west by September. Jul–Aug peak: crowded anchorages and high marina prices. Exit to Canaries by October.",
    },
    {
      region: "Canary Islands (Atlantic staging)",
      months: "Oct – Jan",
      locations: ["Las Palmas de Gran Canaria", "Tenerife", "La Palma"],
      notes: "October: boats arrive from Mediterranean. November: ARC departure and peak Atlantic crossing window. Las Palmas is the best refit stop in the Atlantic.",
    },
    {
      region: "Atlantic Crossing",
      months: "Nov – Dec",
      locations: ["Las Palmas → Mindelo (Cape Verde) → Caribbean"],
      notes: "The trade wind window opens in November. December crossings are also reliable. January is possible but the window narrows. Never cross before late October.",
    },
    {
      region: "Caribbean",
      months: "Dec – May",
      locations: ["Martinique", "St Lucia", "Grenada", "BVI", "Trinidad"],
      notes: "Dec–Apr: dry season, reliable trades, peak cruising. Jun–Nov: hurricane season — sail south of 12°N or return to Europe. Trinidad is the primary hurricane storage location.",
    },
  ],
  seasonalCalendarHeading: "The circuit — when to be where",
  seasonalCalendarIntro:
    "The classic liveaboard circuit is driven by weather windows, not personal preference. Understanding why each region has its season — trade winds, hurricane risk, monsoon patterns — turns the calendar from a constraint into a navigation tool.",

  goodToKnow: [
    {
      emoji: "🔧",
      title: "The 10% rule will define your financial reality",
      body: "Budget 10% of your boat's purchase price per year for maintenance and unexpected repairs — not as a pessimistic contingency, but as a baseline operating cost. Boats are mechanical systems operating in a corrosive saltwater environment. Things break. On a €40,000 boat that is €4,000 per year before you have paid for food, marina fees, or a flight home. The people who run out of money and end their liveaboard life unhappily almost always entered with the listing price in their head rather than the true running cost. Model the full number before you buy.",
    },
    {
      emoji: "📍",
      title: "Las Palmas is the centre of the liveaboard world — spend time there",
      body: "If you are serious about sailboat living — on either path — spend at least a week in Las Palmas de Gran Canaria in October or November. The marina fills with several hundred cruising boats preparing for the Atlantic crossing. The concentration of experienced liveaboard sailors, the willingness to share knowledge, and the quality of the chandleries and boatyards is unlike anything else in Europe. For crew seekers, this is the single best location on earth to find an Atlantic crossing berth. For aspiring owners, a week of talking to boats in Las Palmas will teach you more than six months of YouTube.",
    },
    {
      emoji: "📶",
      title: "Remote working aboard requires a proper setup — marina Wi-Fi is not it",
      body: "Marina Wi-Fi is universally inadequate for professional remote work — too many users, inconsistent speed, and security issues on shared networks. The standard liveaboard remote worker setup is a 4G/5G router with an external antenna, a local SIM in the current country, and a backup SIM from a different carrier. In EU waters, a Portuguese or Spanish SIM with a large data plan works across most of the cruising ground. Outside EU waters, swap SIMs at each country. Budget €20–€40 per month for connectivity. Plan for offline work during passages.",
    },
    {
      emoji: "⛑️",
      title: "Marine insurance for liveaboards is a specialist product",
      body: "Standard travel insurance and standard yacht charter insurance do not cover full-time liveaboard use. You need a specialist offshore cruising policy that covers the boat as your primary residence, your intended cruising area (including ocean passages if applicable), and liability in the countries you plan to visit. Get quotes from specialist marine insurers — Pantaenius, GJW Direct, and Topsail are the main providers — before you buy a boat. The cost of the policy is part of your true annual running cost calculation.",
    },
    {
      emoji: "🌀",
      title: "Have a hurricane season plan before you cross the Atlantic",
      body: "The Atlantic hurricane season runs June through November. If your boat is in the Caribbean during that window, you need a plan: sail south to Trinidad (below 12°N and below the hurricane belt), leave the boat in a certified hurricane hole storage facility, or return to Europe. This cost — either the freight to Trinidad, the storage fees, or the passage home — is predictable and should be in your budget from the start. It catches people off guard because it is invisible during the planning phase when all attention is on the crossing itself.",
    },
    {
      emoji: "🤝",
      title: "The crewing path is underused and genuinely excellent",
      body: "Most aspiring boat owners skip the crewing phase and go straight to purchasing. Almost all of them wish they had crewed first. The crewing path costs nothing, builds the practical knowledge that no course can provide, and — critically — tells you whether you actually enjoy living and working on a boat in real conditions versus the YouTube version of it. Skippers need reliable crew and many are generous teachers. One Atlantic crossing as crew is worth more to your actual readiness to own a boat than any certification course.",
    },
  ],
  goodToKnowHeading: "What every guide about sailboat living leaves out",

  faqHeading: "Frequently asked questions",
  faqIntro:
    "The questions most people have before committing to either path into sailboat living abroad.",
  faqs: [
    {
      question: "Do I need a sailing licence to crew on someone else's boat?",
      answer:
        "No. You can crew on a privately owned sailing yacht without any licence — the skipper's certification covers the boat. What you need is a willing skipper and a profile that convinces them you are reliable and useful. RYA Competent Crew (a five-day introductory course) is not required but makes you more attractive to skippers and significantly more useful once aboard. The RYA Day Skipper theory course (available online) is worth doing before your first offshore passage so you understand what is happening around you.",
    },
    {
      question: "What licence do I need to skipper my own boat abroad?",
      answer:
        "The ICC (International Certificate of Competence) is the minimum internationally recognised qualification and is required by law to charter or skipper a privately owned boat in many countries. It is obtained via an RYA Day Skipper practical assessment. For ocean passages and offshore sailing, RYA Coastal Skipper is the practical standard most insurers and experienced sailors consider appropriate. RYA Yachtmaster Offshore is the qualification for anyone planning extended bluewater cruising. Start with Day Skipper and build from there.",
    },
    {
      question: "Can I work remotely from a sailboat?",
      answer:
        "Yes, with the right setup and realistic expectations. You need a 4G/5G router with an external antenna and local SIM cards rather than relying on marina Wi-Fi. Async-friendly work is significantly easier aboard than roles requiring constant connectivity — passages and anchorages away from marinas will have limited or no internet. Many remote liveaboards structure their work around their passages: work intensively at anchor or in marinas, sail between locations when the weather window is right. It requires more planning than a city-based remote setup but is entirely viable for most remote roles.",
    },
    {
      question: "What does a realistic first-year budget look like for liveaboard ownership?",
      answer:
        "For a €35,000 budget boat: purchase price €35,000 + initial refit and safety equipment €8,000–€12,000 + first-year maintenance reserve (10% of purchase) €3,500 + marina fees for a Mediterranean season (anchoring where possible) €3,000–€6,000 + food and personal costs €8,000–€12,000. Total realistic first-year cost: €57,000–€68,000. This assumes modest anchoring and no major unexpected repairs. Budget more if you have not crewed before and do not know what condition of boat you are buying.",
    },
    {
      question: "Is sailboat living suitable for families with children?",
      answer:
        "Families are a significant and well-established part of the liveaboard cruising community. Many parents rate the lifestyle as one of the best possible educational experiences for children — continuous travel, diverse cultural exposure, practical skills, and an unusually close family environment. The practicalities require planning: schooling (most liveaboard families home-school using online curricula), medical access (know where the hospitals are in every country you visit), and the psychological adjustment of living in a small space as a family unit. Cruisers Forum has large active communities of liveaboard families with specific, practical guidance.",
    },
    {
      question: "Where is the best place to find a crew berth for an Atlantic crossing?",
      answer:
        "Las Palmas de Gran Canaria in October and November. This is not close — it is definitive. Several hundred boats stage here before the Atlantic crossing, and skippers who need crew are actively looking. Register on Find a Crew and Crewseekers before you go, but also show up in person: walk the docks, introduce yourself to boats, ask if they need crew. A week on the Las Palmas marina in October will give you more opportunities than six months on crew platforms alone. Have a flexible departure window — the best opportunities rarely have fixed dates.",
    },
    {
      question: "Does Abroader book crew berths or boat purchases?",
      answer:
        "No. Abroader is a research and comparison platform. We help you understand both paths, compare providers, and build a clear picture before you commit to anything. All crew placements go through Find a Crew, Crewseekers, and Ocean Crew Link. Certifications go through RYA-accredited schools. If you want to talk through which path suits your situation, book a free consultation with the Abroader team.",
    },
  ],

  disclaimer:
    "Sailing certification requirements, customs entry regulations, and visa rules for cruising yachts vary significantly by country and change frequently. The information on this page is editorial guidance only — always verify current requirements with official sources, your insurer, and Noonsite before departure. Marine insurance, offshore medical cover, and a properly equipped boat are non-negotiable for offshore sailing.",

  ctaHeading: "Start planning your sailboat living journey",
  ctaDescription:
    "Whether you are looking for your first crew berth or planning a boat purchase, browse Abroader's remote living resources or book a free consultation to map out the right path for your situation.",
  ctaLinks: [
    { href: "/opportunities/yacht-sailing-crew-jobs", label: "Yacht crew jobs", primary: true },
    { href: "/co-living", label: "Remote living guides" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/opportunities/yacht-sailing-crew-jobs", label: "Yacht & sailing crew jobs" },
    { href: "/opportunities/island-based-remote-working", label: "Island remote working" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
};
