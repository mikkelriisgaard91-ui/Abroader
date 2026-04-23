import type { OpportunityLanding } from "./types";

export const YACHT_SAILING_CREW_JOBS: OpportunityLanding = {
  slug: "yacht-sailing-crew-jobs",
  metaTitle: "Yacht & sailing crew jobs abroad | Abroader",
  metaDescription:
    "How to get paid yacht and sailing crew work abroad. Compare RYA, ASA and STCW certification paths, understand the six main crew roles from deckhand to captain, and find the best platforms to land your first offshore season.",
  heroTitle: "Yacht & sailing crew jobs abroad",
  heroSubtitle:
    "Working as paid sailing crew is one of the most geographically mobile careers in adventure travel — you follow the seasons between the Mediterranean, the Caribbean, and the Pacific. Here is how the path actually works, from your first STCW certificate to your first paid season.",
  heroImage:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Aerial view of a sailing yacht on open blue water",
  category: "Work Abroad",
  stats: [
    { value: "6", label: "crew roles covered" },
    { value: "4", label: "key regions" },
    { value: "STCW", label: "required for paid work" },
    { value: "3–12 mo", label: "typical contracts" },
  ],

  introHeading: "What working as sailing crew abroad actually looks like",
  introParagraphs: [
    "Working as yacht or sailing crew abroad is a genuine industry with formal certification pathways, recognised qualifications, and established hiring infrastructure. Positions range from entry-level deckhand roles on 50-foot charter sloops to senior positions aboard 50-metre superyachts with full interior and exterior crew teams. It is not a vague backpacker lifestyle — it is a seasonal career with structured contracts, accommodation included, and a clear progression ladder from first season to head of department.",
    "The path in looks like this: complete your STCW Basic Safety Training (the mandatory commercial maritime certificate required of all paid crew), choose a sailing certification path — RYA if you are targeting the international superyacht market, ASA if you are US-based or focused on the Caribbean charter circuit — then build sea miles through unpaid delivery trips to establish a sea log, and finally apply to charter companies or list on a crew platform. The Mediterranean summer and Caribbean winter are the two anchor seasons; most working crew plan a continuous year around both.",
    "If you are starting from zero sailing experience, this is still a viable path — but the timeline is longer. The RYA Competent Crew course requires no prior sailing experience and gives you your first offshore miles alongside a practical foundation. Combined with STCW, that is enough to land a first unpaid passage or entry deckhand role. From there, each season builds the references and logged sea miles that progressively open better-paid and more senior positions.",
  ],

  howItWorksHeading: "How to break into paid sailing crew work",
  howItWorks: [
    {
      step: 1,
      title: "Complete STCW Basic Safety Training",
      body: "STCW is the mandatory commercial maritime safety certificate required of any paid crew member on a commercially operated vessel. It covers personal survival, fire prevention, first aid, and personal safety — the legal baseline the industry requires before you step aboard in a paid capacity. The five-day course is available worldwide through approved maritime training centres and costs roughly £500–£700 in the UK. Complete this before anything else.",
    },
    {
      step: 2,
      title: "Choose your certification path: RYA or ASA",
      body: "RYA (Royal Yachting Association) is the global standard preferred by the superyacht industry and required for MCA commercial endorsement — start with Competent Crew and work toward Day Skipper and Yachtmaster. ASA (American Sailing Association) is the natural choice if you are US-based or targeting the Caribbean and US coastal charter market. Both are legitimate and well-respected; the choice depends on where you plan to work most.",
    },
    {
      step: 3,
      title: "Build your sea miles through delivery trips",
      body: "Before any commercial operator pays you, you need logged offshore miles. The primary way to build them is through unpaid delivery trips — boat owners need their vessels moved from A to B and take on volunteer crew in exchange for the passage experience. CrewSeekers is the main platform for finding these. One or two ocean deliveries gives you a sea log entry, a reference, and the offshore confidence that makes your first deckhand application credible.",
    },
    {
      step: 4,
      title: "Build your crew profile and apply to the right platforms",
      body: "Create profiles on CrewSeekers and The Crew Network with your STCW certificate, any RYA or ASA qualifications, sea miles logged, and references from delivery trips or any previous sailing. Charter companies and superyacht operators review these constantly. Applying directly to operators in your target region — especially in the Mediterranean before the season opens in March and April — is worth pursuing in parallel with job boards.",
    },
    {
      step: 5,
      title: "Secure your first paid seasonal contract",
      body: "Entry-level positions are almost always deckhand or interior crew roles on charter boats rather than superyachts — the superyacht market opens once you have a season's reference and stronger certifications. Most first contracts run three to six months, include accommodation and meals, and pay in the range of $800–$1,800 per month depending on vessel size and region. The full package matters more than the headline wage.",
    },
    {
      step: 6,
      title: "Chain seasons and destinations to work year-round",
      body: "No single region reliably hires year-round. Experienced crew plan a two-destination year: Mediterranean (May–October) followed by the Caribbean (November–April) covers the whole calendar with strong demand in both windows. Each season compounds — stronger references, higher certifications, and access to senior positions like first mate, department head, or eventually captain.",
    },
  ],

  whyProviders:
    "The resources on this page fall into three distinct categories: official certification bodies that issue the qualifications you need, training providers that combine courses with job placement support, and crew platforms or agencies that connect you with paid positions once you are qualified. Most people need two or three of these at different stages. STCW and RYA give you the credentials; CrewSeekers gives you delivery trips and open-market roles; The Crew Network connects you with the superyacht sector once you have a season behind you. We list all three types so you can see the full picture without having to piece it together yourself.",

  providerGroups: [
    {
      heading: "Get certified — official certification bodies",
      intro:
        "These organisations issue the qualifications that commercial maritime employers require. Start with STCW Basic Safety regardless of which sailing certification path you choose — it is the legal requirement for paid work. Then choose RYA or ASA based on your target market.",
      providers: [
        {
          name: "STCW Basic Safety Training",
          description:
            "The mandatory commercial maritime safety certificate required of anyone working as paid crew on a commercially operated yacht or vessel. It covers personal survival techniques, fire prevention and firefighting, elementary first aid, and personal safety and social responsibility — the legal baseline the maritime industry requires. Without it, no reputable operator can legally employ you as paid crew. The five-day course is delivered by approved maritime training centres worldwide and is universally recognised regardless of flag state or destination.",
          tags: ["Mandatory", "5-day course", "Global requirement", "Legal prerequisite"],
          href: "https://www.maritimetraining.com/courses/stcw-basic-safety-training",
          category: "certification-body",
          useWhen:
            "You are pursuing any paid crew role at all — this is the non-negotiable first step regardless of which other certifications you pursue.",
        },
        {
          name: "RYA — Royal Yachting Association",
          description:
            "The UK certification body whose Yachtmaster qualification is the global standard for the superyacht industry and required for MCA (Maritime and Coastguard Agency) commercial endorsement. The RYA ladder runs from Competent Crew (entry level, no experience needed) through Day Skipper, Coastal Skipper, Yachtmaster Offshore, and Yachtmaster Ocean — each level unlocking different roles, vessel sizes, and offshore passages. RYA accredited centres operate in over 30 countries, with major hubs in the UK, Mediterranean, Caribbean, and New Zealand.",
          tags: ["Global superyacht standard", "MCA commercial route", "Full career ladder", "30+ countries"],
          href: "https://www.rya.org.uk/training/sail-courses",
          category: "certification-body",
          useWhen:
            "You want the qualification most recognised by superyacht employers and plan to work internationally, or are targeting the Mediterranean and Caribbean superyacht circuits.",
        },
        {
          name: "ASA — American Sailing Association",
          description:
            "The US sailing certification body with a structured ladder from ASA 101 (Basic Keelboat Sailing) through offshore and blue-water certifications. Widely accepted by US charter operators and the Caribbean charter fleet, and increasingly recognised internationally. If you are based in the US, targeting the Caribbean and Bahamas charter market, or plan to crew on US-flagged vessels, ASA is the most practical and efficient starting point. Many BVI and Caribbean charter operators accept either RYA or ASA credentials.",
          tags: ["USA", "Caribbean charter", "ASA 101 to offshore", "BVI recognised"],
          href: "https://asa.com/certifications/",
          category: "certification-body",
          useWhen:
            "You are US-based or targeting the Caribbean and Bahamas charter market as your primary destination.",
        },
      ],
    },
    {
      heading: "Train and get placed — courses with crew career support",
      intro:
        "These providers combine sailing certification with structured support for finding your first paid position. They are the most efficient option if you are starting from scratch and want a clear pipeline from training to employed season.",
      providers: [
        {
          name: "Flying Fish",
          description:
            "The most established sailing crew training provider for people looking to turn sailing into a career. Flying Fish delivers RYA Yachtmaster and sailing instructor training across bases in the UK (Cowes), Caribbean (Antigua), and Pacific (New Zealand), and has an active crew placement service that connects graduates with paid seasons on charter boats and superyachts. The integrated approach — course, sea miles, placement support — means you are not navigating the hiring market alone after qualifying. Over 35 years of operation and thousands of placed crew across the industry.",
          tags: ["RYA certified", "Crew placement", "UK · Caribbean · Pacific", "35+ years", "Yachtmaster to captain"],
          href: "https://www.flyingfishonline.com/sailing-jobs/",
          category: "training-placement",
          useWhen:
            "You want a structured path from beginner to paid crew, with post-course support finding your first season.",
        },
      ],
    },
    {
      heading: "Find paid roles — crew platforms and agencies",
      intro:
        "Once you hold your STCW and a sailing qualification, these are the places to find open positions. Free platforms give you the widest market view including unpaid delivery trips for building miles; agency models connect you directly with superyacht employers.",
      providers: [
        {
          name: "CrewSeekers International",
          description:
            "The world's largest free crew-matching platform, with over 25,000 registered boats and a constantly updated board of paid and unpaid positions. The unpaid delivery listings are especially valuable for beginners building sea miles before they have a paid role on their CV — finding your first offshore passage here is the most realistic way to get started. Paid roles span deckhands, stewards, chefs, and engineers across all vessel sizes and regions. Free to join and browse as crew; boat owners pay a listing fee.",
          tags: ["Free to join", "Paid + unpaid roles", "25,000+ boats", "Delivery trips", "All levels"],
          href: "https://www.crewseekers.net",
          category: "job-board",
          useWhen:
            "You are at any stage — even zero certification — and want to start building sea miles through unpaid delivery trips, or browse live paid crew positions globally.",
        },
        {
          name: "The Crew Network",
          description:
            "A premium superyacht crew placement agency operating across the Mediterranean and Caribbean superyacht market. The Crew Network places crew in roles on vessels 30 metres and above, from deckhands and stewardesses through engineers and captains. Unlike a job board, they are an agency — you create a profile, meet with their team, and they actively match you to vessels based on your qualifications and references. Rates and employment conditions in the superyacht sector are significantly higher than in the charter boat market; The Crew Network operates at that end of the industry.",
          tags: ["Superyacht focused", "30m+ vessels", "Agency model", "Mediterranean · Caribbean"],
          href: "https://www.thecrewnetwork.com",
          category: "job-board",
          useWhen:
            "You hold STCW and a strong sailing qualification, have at least one season's reference, and are specifically targeting superyacht employment at the higher end of the market.",
        },
        {
          name: "Abroader — Seasonal Maritime & Outdoor Jobs",
          description:
            "Abroader's seasonal jobs board includes maritime crew roles alongside broader outdoor and hospitality positions. Useful for comparing sailing crew opportunities against other seasonal roles in the same region, or spotting crossover positions — charter host, water sports instructor, dive master — that can complement sailing experience during off-season gaps.",
          tags: ["Abroader listed", "Live roles", "Multiple destinations"],
          href: "/hospitality",
          category: "aggregator",
          useWhen:
            "You want to browse sailing crew roles alongside other seasonal options, or fill gaps between sailing seasons with related outdoor work.",
        },
      ],
    },
  ],

  regionsHeading: "Where sailing crew jobs are most in demand",
  regionsIntro:
    "Demand concentrates in four main circuits, each with its own peak hiring window. Most working crew chain two or more of these destinations across a single year to stay continuously employed.",

  regions: [
    {
      slug: "mediterranean",
      name: "Mediterranean — Spain, Croatia, Greece, Turkey",
      label: "Mediterranean",
      image:
        "https://images.unsplash.com/photo-1555661530-68c8e98db4e6?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Sailing yachts anchored in a turquoise Mediterranean cove",
      season: "Peak: May – October",
      body: "The Mediterranean is the world's largest yacht charter market and the most important destination for anyone starting a sailing crew career. Croatia's Dalmatian Coast, the Greek islands, Turkey's Aegean coast, and the Spanish Balearics all run concentrated charter seasons from May through October, with hiring activity peaking in March and April before the season opens. This is the time to have your STCW completed, your CrewSeekers profile active, and applications submitted to charter companies in Dubrovnik, Athens, Palma, and Marmaris. EU nationals have straightforward work access; non-EU crew should confirm visa and work permit requirements with their employer before signing. The density of vessels, marinas, and charter operators makes this the easiest region in which to build your first contacts, references, and a solid sea log.",
      relatedHref: "/hospitality",
      relatedLabel: "Browse seasonal jobs in Europe",
    },
    {
      slug: "caribbean",
      name: "Caribbean — BVI, Antigua, St Lucia, Grenada",
      label: "Caribbean",
      image:
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Sailing catamaran at anchor in calm turquoise Caribbean waters",
      season: "Peak: November – April",
      body: "The Caribbean is the natural complement to the Mediterranean summer — many vessels and crew migrate directly between the two circuits, finishing the Mediterranean in October and repositioning to the Caribbean for November. The British Virgin Islands (BVI) is the charter capital, with Antigua, St Lucia, Grenada, and Martinique each having established fleets and busy marinas. The Antigua Sailing Week regatta (late April) marks the informal end of the Caribbean season and generates significant crew demand in the weeks surrounding it. Work permit requirements vary considerably by island and vessel flag; discuss your specific situation with your employer before signing a contract. Superyacht traffic is heavy throughout this circuit, particularly in St Barts, the Grenadines, and the Turks and Caicos.",
    },
    {
      slug: "new-zealand-pacific",
      name: "New Zealand & Pacific",
      label: "Pacific",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Yacht under full sail in blue Pacific waters",
      season: "Peak: October – April",
      body: "New Zealand's Bay of Islands and Auckland Waitemata Harbour form the Pacific superyacht hub. Vessels that spent the northern summer in the Mediterranean reposition here for refit, maintenance, or the Pacific island circuit during the Southern Hemisphere summer — October through April. This aligns neatly with the northern hemisphere off-season, making it a natural second leg for crew following a Mediterranean season. Fiji, Tonga, and Vanuatu see significant yacht traffic during this window. Phuket (Thailand) and Langkawi (Malaysia) are separate year-round hubs with their own charter fleets and crew demand, particularly attractive for instructors and crew who want to extend their working year into the South-East Asian market.",
      relatedHref: "/co-living",
      relatedLabel: "Co-living spaces for crew between seasons",
    },
    {
      slug: "indian-ocean",
      name: "Indian Ocean — Seychelles, Maldives, Thailand",
      label: "Indian Ocean",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Luxury superyacht anchored in crystal-clear tropical waters",
      season: "Year-round (superyacht focused)",
      body: "The Indian Ocean is primarily a superyacht circuit. Mahé in the Seychelles and Malé in the Maldives serve as key anchorages and crew-change points during the October–April window when the northeast monsoon provides favourable conditions. Phuket (Thailand) is a major refit and positioning hub for vessels transiting between the Pacific and Indian Oceans and runs a substantial bareboat and crewed charter operation year-round. Roles in this region are almost exclusively on larger vessels with established crew — this is not typically a first-season destination. For experienced crew with strong references and senior certifications, the Indian Ocean circuit represents some of the most well-maintained vessels and best-compensated positions in the superyacht world.",
    },
  ],

  roleTypesHeading: "What crew roles are actually available",
  roleTypesIntro:
    "Unlike surf instruction — a single role — the sailing crew industry has six distinct positions with different entry requirements, pay scales, and working environments. Understanding which role suits your background is the most important first decision you will make.",
  roleTypes: [
    {
      title: "Deckhand",
      icon: "⚓",
      level: "Entry level",
      keyCerts: ["STCW Basic Safety", "RYA Competent Crew (recommended)"],
      salaryRange: "$800–$1,800 /mo (charter) · $2,000–$3,500 /mo (superyacht)",
      description:
        "The standard entry point for anyone new to professional sailing. Deckhands handle lines, anchoring, cleaning tenders, running water toys, and assisting the captain on passage. No prior sailing experience is required beyond STCW — most first-season deckhands learn the rest on the job. Physically demanding, long hours during charter periods, but the fastest way to build sea miles and your first professional reference.",
    },
    {
      title: "Steward / Stewardess",
      icon: "🛎",
      level: "Entry-mid level",
      keyCerts: ["STCW Basic Safety", "GUEST Interior Course (strongly recommended)"],
      salaryRange: "$2,500–$4,500 /mo (superyacht)",
      description:
        "Interior crew responsible for guest services, cabin preparation, cocktail and bar service, and housekeeping aboard. This role exists almost exclusively on superyachts (typically 30m+) and pays considerably more than equivalent exterior positions. Strong hospitality, hotel, or events experience is a significant advantage. The GUEST interior training course is the industry-standard qualification and is increasingly expected by employers.",
    },
    {
      title: "Yacht Chef",
      icon: "👨‍🍳",
      level: "Mid level",
      keyCerts: ["STCW Basic Safety", "Professional culinary qualification"],
      salaryRange: "$3,500–$7,000 /mo (superyacht)",
      description:
        "One of the highest-paid roles in the sailing crew market and among the shortest-supplied. Yacht chefs cook three to four meals a day for charter guests in a galley at sea — often in challenging conditions with very high guest expectations. A professional culinary background is essential. Demand in the superyacht sector consistently outstrips supply, which gives experienced yacht chefs significant bargaining power over rates and vessel choice.",
    },
    {
      title: "Engineer",
      icon: "⚙️",
      level: "Mid-senior level",
      keyCerts: ["STCW Basic Safety", "ENG1 Medical Certificate", "Relevant engineering qualifications"],
      salaryRange: "$3,000–$6,000 /mo (superyacht)",
      description:
        "Responsible for the mechanical, electrical, and technical systems of the vessel — engines, generators, watermakers, air conditioning, tenders, and water toys. Engineers are invisible during charter periods but become critical when something breaks at sea. A background in marine, electrical, mechanical, or systems engineering is the practical foundation; formal maritime engineering qualifications are increasingly required on larger vessels.",
    },
    {
      title: "First Mate",
      icon: "🧭",
      level: "Mid-senior level",
      keyCerts: ["STCW Basic Safety", "RYA Yachtmaster Offshore (minimum)"],
      salaryRange: "$3,500–$6,000 /mo",
      description:
        "The second-in-command: responsible for deck operations, crew management, passage planning support, and standing watch alongside the captain. First mates manage the deck crew directly, run safety briefings, and take the helm when the captain is off watch. RYA Yachtmaster Offshore is the minimum expected; Yachtmaster Ocean is required on vessels undertaking offshore passages. This is a role you typically grow into after two or more seasons as a deckhand.",
    },
    {
      title: "Skipper / Captain",
      icon: "⛵",
      level: "Senior level",
      keyCerts: ["STCW Full Certificate", "RYA Yachtmaster Ocean or OOW 3000GT", "MCA Certificate of Competency"],
      salaryRange: "$5,000–$15,000 /mo (superyacht)",
      description:
        "Ultimate responsibility for the vessel, crew, and guests. Captains manage all commercial operations on charter yachts, hold absolute safety authority at sea, and are legally accountable for everything that happens aboard. The pathway to a captain's ticket is long — typically four to six years of progressively senior sea time and certifications. The salary range reflects both that barrier to entry and the significant variance between a small charter sloop and a large superyacht.",
    },
  ],

  salaryHighlightsHeading: "What sailing crew earn — by role",
  salaryHighlightsIntro:
    "Pay varies significantly by role and vessel type. Charter boats (typically 40–80 feet) pay less than superyachts (30 metres and above) for equivalent positions, but offer a more accessible first-season entry point. All figures exclude tips, which on charter boats can add 10–20% of weekly charter fees to your income.",
  salaryHighlights: [
    {
      country: "Deckhand",
      flag: "⚓",
      salaryRange: "$800–$3,500",
      salaryLabel: "per month (charter to superyacht)",
      includes: [
        "Accommodation always included",
        "Meals on board",
        "Entry-level role — no experience required",
        "Sea miles accumulate fast",
      ],
      badge: "Most common first role",
    },
    {
      country: "Steward / Stewardess",
      flag: "🛎",
      salaryRange: "$2,500–$4,500",
      salaryLabel: "per month (superyacht)",
      includes: [
        "Accommodation & meals included",
        "Tip income often significant",
        "GUEST qualification preferred",
        "Hospitality background valued",
      ],
    },
    {
      country: "Yacht Chef",
      flag: "👨‍🍳",
      salaryRange: "$3,500–$7,000",
      salaryLabel: "per month (superyacht)",
      includes: [
        "Highest demand — supply is short",
        "Culinary qualification essential",
        "Tips add substantially",
        "Accommodation included",
      ],
      badge: "Shortest supplied",
    },
    {
      country: "Engineer",
      flag: "⚙️",
      salaryRange: "$3,000–$6,000",
      salaryLabel: "per month (superyacht)",
      includes: [
        "ENG1 medical required",
        "Marine/electrical background needed",
        "Strong superyacht demand",
        "Accommodation included",
      ],
    },
    {
      country: "First Mate",
      flag: "🧭",
      salaryRange: "$3,500–$6,000",
      salaryLabel: "per month",
      includes: [
        "RYA Yachtmaster Offshore minimum",
        "2+ seasons experience typical",
        "Crew management responsibility",
        "Accommodation included",
      ],
    },
    {
      country: "Captain",
      flag: "⛵",
      salaryRange: "$5,000–$15,000",
      salaryLabel: "per month (superyacht)",
      includes: [
        "RYA Yachtmaster Ocean / MCA COC",
        "4–6 years to qualify",
        "Charter tip income on top",
        "Accommodation included",
      ],
      badge: "Highest pay",
    },
  ],

  seasonalCalendarHeading: "Plan your year around the seasons",
  seasonalCalendarIntro:
    "No single region hires year-round. The most experienced crew plan a continuous twelve-month working year by chaining the Mediterranean summer with the Caribbean winter — and optionally adding a Pacific or Indian Ocean leg. Here is when each circuit is active and what to expect in each window.",
  seasonalCalendar: [
    {
      region: "Mediterranean",
      months: "May – October",
      locations: ["Spain", "Croatia", "Greece", "Turkey", "French Riviera", "Italy"],
      notes:
        "The world's busiest charter season. Hiring peaks in March–April before the season opens. Most new crew land their first role here.",
    },
    {
      region: "Caribbean",
      months: "November – April",
      locations: ["BVI", "Antigua", "St Lucia", "Grenada", "St Barts", "Martinique"],
      notes:
        "The natural second leg after the Mediterranean season. Many vessels and crew migrate directly. Antigua Sailing Week (late April) is peak demand.",
    },
    {
      region: "Atlantic Crossing / ARC Route",
      months: "October – January",
      locations: ["Canary Islands", "Cape Verde", "Saint Lucia (finish)"],
      notes:
        "The ARC rally (Las Palmas → St Lucia, late November) generates concentrated crew demand. Excellent for building ocean passage miles in a single crossing.",
    },
    {
      region: "New Zealand & Pacific",
      months: "October – April",
      locations: ["New Zealand", "Fiji", "Tonga", "Vanuatu", "Phuket", "Langkawi"],
      notes:
        "Southern Hemisphere summer aligns with the northern hemisphere off-season. A natural third leg for crew following a Mediterranean season.",
    },
  ],

  faqHeading: "Frequently asked questions",
  faqIntro:
    "Answers to the questions we hear most often about getting into paid sailing crew work abroad.",
  faqs: [
    {
      question: "Do I need STCW to work as sailing crew abroad?",
      answer:
        "If you are working as paid crew on any commercially operated vessel over 24 metres, STCW Basic Safety Training is a legal requirement under international maritime law. Many charter boat operators — even on smaller vessels — now require it as an employer condition regardless of the legal threshold. The five-day course is widely available, costs roughly £500–£700 in the UK or equivalent elsewhere, and is universally recognised across all flag states. Complete this before anything else — no reputable operator can legally employ you as paid crew without it.",
    },
    {
      question: "What is the difference between RYA and ASA?",
      answer:
        "RYA (Royal Yachting Association) is the UK certification body whose Yachtmaster qualification is the standard expected by most superyacht employers worldwide and required for MCA (Maritime and Coastguard Agency) commercial endorsement. If you plan to work internationally and especially in the superyacht sector — Mediterranean, Caribbean, Indian Ocean — RYA is the stronger long-term credential. ASA (American Sailing Association) is the US equivalent, widely accepted in American charter markets and the Caribbean charter fleet, and increasingly recognised internationally. For US-based sailors focusing on the Caribbean and US coastal markets, ASA is a practical and efficient starting point. Some employers in the BVI and Caribbean accept either; in the superyacht sector, RYA is the clear preference.",
    },
    {
      question: "I have never sailed before — where do I start?",
      answer:
        "Start with STCW Basic Safety Training (five days, no sailing experience required). Then complete an RYA Competent Crew course (five days, no prior experience needed) — this gives you your first offshore sea miles and a practical foundation aboard a yacht. From there, use CrewSeekers to find an unpaid delivery trip: a boat owner needs their vessel moved from A to B and takes volunteer crew in exchange for the passage experience. After one or two deliveries, you have a sea log entry and a reference — enough to apply for an entry deckhand position in the Mediterranean season. The whole process from zero to first paid role typically takes three to six months if you are focused.",
    },
    {
      question: "What do sailing crew actually earn abroad?",
      answer:
        "Pay varies considerably by role and vessel type. Entry deckhand positions on charter boats typically run $800–$1,800 per month with accommodation and meals included. The same role on a superyacht pays $2,000–$3,500. Stewardess and interior crew roles on superyachts range from $2,500–$4,500 per month. Yacht chefs in the superyacht sector are among the best paid and most in-demand, at $3,500–$7,000 per month. Captains of large superyachts earn $10,000–$15,000 per month. Tips on charter boats can add substantially to the headline figure — particularly in the Caribbean and Mediterranean, where charter guests commonly tip 10–20% of the weekly charter fee.",
    },
    {
      question: "How do I get my first unpaid delivery trip to build sea miles?",
      answer:
        "CrewSeekers is the primary platform. Create a free profile listing your STCW certificate, any sailing experience (even dinghy sailing counts), and your availability. Browse the delivery listings and send a short, specific message to boat owners — explain what you bring, confirm your STCW is current, and be realistic about your experience level. Expect several non-responses before your first confirmation. The first trip is the hardest to secure; after that, each passage builds a reference chain that makes subsequent opportunities easier to find. Sailing Facebook groups and marina noticeboards in Palma, Larnaca, and Gibraltar are also productive hunting grounds at the start of the Mediterranean season.",
    },
    {
      question: "What is the difference between working on a charter boat and a superyacht?",
      answer:
        "Charter boats (typically 40–80 feet) are more accessible for first-season crew — lower certification requirements, easier to get on, and a faster way to build sea miles and references. The pay is lower, the vessel is smaller, and conditions are more informal. Superyachts (30 metres and above) are a different industry: higher pay, more formal hierarchy, stricter certification requirements, longer contracts, and a full crew team with distinct departments. Most crew use one or two charter boat seasons to build the qualifications and references needed to make the jump to the superyacht sector.",
    },
    {
      question: "Does Abroader employ sailing crew directly?",
      answer:
        "No. Abroader is a discovery and comparison platform. We list certification bodies, training providers, crew platforms, and information about destinations so you can find the right path for your situation. All applications go directly through the individual providers and platforms listed on this page.",
    },
  ],

  disclaimer:
    "Visa and work permit requirements for crew vary by nationality, vessel flag state, and destination — and they change frequently. Salary figures are editorial estimates based on industry sources and may not reflect current market conditions. Always verify current requirements with your employer or the relevant maritime authority before accepting a contract abroad.",

  ctaHeading: "Find your first sailing crew position",
  ctaDescription:
    "Browse live seasonal crew roles, explore certification options, or book a free consultation with the Abroader team to map out your route into the sailing industry.",
  ctaLinks: [
    { href: "/hospitality", label: "Browse crew roles", primary: true },
    { href: "/opportunities", label: "All opportunities" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/co-living", label: "Co-living spaces" },
    { href: "/volunteering", label: "Volunteering" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
};
