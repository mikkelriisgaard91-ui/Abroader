import type { OpportunityLanding } from "./types";

export const KITESURFING_CAMP_ABROAD: OpportunityLanding = {
  slug: "kitesurfing-camp-abroad",
  metaTitle: "Kitesurfing Camps Abroad 2026 — Tarifa, Dakhla, Cape Verde & More | Abroader",
  metaDescription:
    "The complete guide to kitesurfing camps abroad. Learn to kitesurf in Tarifa, Dakhla, Cape Verde, or Fuerteventura — beginner to advanced, IKO-certified schools, and what everything costs.",
  heroTitle: "Kitesurfing camps abroad",
  heroSubtitle:
    "Kitesurfing is one of the fastest-growing water sports on the planet and attending a camp abroad is the fastest way to learn it correctly. The learning curve is steep enough that self-teaching is genuinely dangerous — a qualified IKO-certified instructor compresses months of self-directed guessing into a structured 10–15 hour beginner progression. Here is how the global kitesurf camp market works, where to go, and what to expect.",
  heroImage:
    "https://images.unsplash.com/photo-1535912559178-39a47e3dc566?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Kite surfer launching off a wave in turquoise water with bright coloured kite overhead",
  category: "Retreats",
  stats: [
    { value: "IKO", label: "global certification standard" },
    { value: "10–15 hrs", label: "to complete beginner course" },
    { value: "300+", label: "wind days per year in Tarifa" },
    { value: "€400–€900", label: "typical beginner camp week" },
  ],

  introHeading: "Why kitesurfing camps work — and why self-teaching does not",
  introParagraphs: [
    "Kitesurfing is unique among water sports in the specific danger of the learning phase. An untethered kite generates enormous power — enough to lift a person into the air and drag them into obstacles. This is not a sport where muddling through on YouTube and trial and error is a viable or safe strategy. IKO-certified instruction (the International Kiteboarding Organisation is the global standard) is the route that virtually every experienced kitesurfer recommends, and most reputable camps globally are IKO-affiliated. The beginner programme typically runs 10–15 hours of structured progression from kite control on the beach, to body dragging in the water, to the water start and first independent rides.",
    "Once past the initial learning phase, kitesurfing is one of the most exhilarating sports available — the combination of wind, water, and flight is unlike anything else. Experienced kiters talk about it in almost evangelical terms, and the community it generates is tight-knit, international, and increasingly social media-visible. This visibility has driven sustained growth in beginner demand at camps globally, particularly in the key European and North African wind corridors.",
    "The three major global hubs — Tarifa (Spain), Dakhla (Morocco), and the Cape Verde islands — each offer something distinct. Tarifa has the highest density of IKO schools in the world and more than 300 wind days per year driven by the Levante and Poniente winds. Dakhla's flat-water lagoon is considered among the world's most ideal learning environments. Cape Verde's islands — particularly Sal and Boa Vista — deliver consistent trade winds in a tropical setting. Fuerteventura in the Canary Islands offers year-round conditions and easy access from Europe. The guide below covers all four in detail.",
  ],

  howItWorksHeading: "How to learn to kitesurf at a camp abroad",
  howItWorks: [
    {
      step: 1,
      title: "Book an IKO-certified school",
      body: "Always verify that your chosen school is IKO-certified before booking. The IKO school finder at ikointl.com lists every certified school globally. Non-certified schools exist and some are run by skilled kiters, but IKO certification is the industry standard for progressive safety protocols, standardised curriculum, and instructor accountability. It is also the credential most relevant if you plan to advance through higher IKO levels.",
    },
    {
      step: 2,
      title: "Complete the beginner progression (10–15 hours)",
      body: "A standard IKO beginner progression: kite theory and safety, beach kite flying (bar and harness control), body dragging (being pulled through the water by the kite without a board), water relaunch, then the water start and first board rides. This progression is non-negotiable — skipping steps creates unsafe kiters. Most camps offer this over three to five days depending on wind conditions and individual progress.",
    },
    {
      step: 3,
      title: "Choose the right camp format for your level",
      body: "Beginner packages (typically 10–15 hours) are the most structured and include all equipment. Intermediate packages focus on independent riding, transitions, and riding upwind. Advanced camps cover jumps, tricks, waves, and specific disciplines like speed, freestyle, or strapless surfstyle. Be honest about your level — booking a beginner package if you have had a few sessions already wastes time and money.",
    },
    {
      step: 4,
      title: "Check wind forecasts before you travel",
      body: "Even the windiest destinations have flat days. Most experienced kiters check Windguru, Windy, or iKitesurf before booking a flight around a specific window. Dakhla and Fuerteventura are the most consistent; Tarifa has high average wind days but can also be completely flat for days at a time in summer. Cape Verde's trade winds are among the most reliable in the world.",
    },
    {
      step: 5,
      title: "Extend with an intermediate week if progression is your goal",
      body: "Many camps offer combo packages — a beginner week followed immediately by an intermediate progression. This is the highest-intensity route to riding independently and is popular with people who have limited total holiday days and want to maximise progress. After two focused weeks at a quality camp, most people are riding upwind and beginning to explore jumps.",
    },
  ],

  whyProviders:
    "The kitesurf camp market combines large aggregator platforms, destination-specific IKO-certified schools, and specialist travel operators who handle accommodation, transfers, and multi-destination routing. All three are represented below.",

  providerGroups: [
    {
      heading: "Booking platforms and certification bodies",
      intro:
        "Start here for destination comparison, camp reviews, and verifying IKO certification status before committing to any specific school.",
      providers: [
        {
          name: "BookSurfCamps.com — Kitesurfing",
          description:
            "The largest kitesurf camp booking platform globally. Lists camps in Tarifa, Fuerteventura, Dakhla, Essaouira, Cape Verde, the Dominican Republic, Brazil, and more. Filter by level, dates, and budget. Free to browse and book.",
          tags: ["Largest Platform", "Global", "All Levels", "Free Booking"],
          href: "https://www.booksurfcamps.com/all/s/kitesurfing",
          category: "aggregator",
          useWhen: "You want to compare multiple destinations and school options in one place.",
        },
        {
          name: "IKO — International Kiteboarding Organisation",
          description:
            "The global kitesurf certification body. IKO-certified schools are the industry standard for safety and progressive learning. Use IKO's school finder to locate vetted providers in any destination worldwide. Essential reference before booking any beginner school.",
          tags: ["Certification Body", "School Finder", "Global Standard"],
          href: "https://www.ikointl.com/school-search",
          category: "certification-body",
          useWhen: "You want to verify a school's IKO certification status or find certified schools in a specific destination.",
        },
        {
          name: "Planet Kitesurfing Holidays",
          description:
            "UK-based kitesurf travel specialist covering Cape Verde, Morocco, Greece, the Dominican Republic, and Egypt. Tailored holidays with instructor bookings, accommodation, and optional flight packages. Strong for group and corporate bookings.",
          tags: ["UK Specialist", "Cape Verde", "Morocco", "Group Bookings"],
          href: "https://www.planetkitesurfholidays.com",
          category: "training-placement",
          useWhen: "You want a full kitesurf holiday package (flights, accommodation, and lessons) from a single UK operator.",
        },
      ],
    },
    {
      heading: "Destination-specific schools and camps",
      intro:
        "These are the destination leaders — schools with the strongest track records in their specific location and the most experienced teaching teams.",
      providers: [
        {
          name: "Freeride Tarifa",
          description:
            "Kitesurf school and camp in Tarifa, Spain's kitesurfing capital with 300+ wind days per year. Beginner to advanced lessons, accommodation packages, and group camps. IKO-certified instructors. One of the most established schools on the Strait of Gibraltar.",
          tags: ["Tarifa", "IKO Certified", "300+ Wind Days", "All Levels"],
          href: "https://freeridetarifa.com/kitesurfing-camp/",
          category: "direct-employer",
          useWhen: "You want to learn in Tarifa — Europe's most wind-reliable kitesurf destination — with an IKO-certified team.",
        },
        {
          name: "Ocean Adventure (Dakhla, Morocco)",
          description:
            "Dakhla lagoon kitesurf resort and camp operator — one of the world's premier kite spots. Offers all-inclusive kite camps, eco-lodge accommodation, and guided sessions on the legendary flat-water lagoon. Ideal for beginners and those seeking the fastest possible progression.",
          tags: ["Dakhla Lagoon", "Eco-Lodge", "All-Inclusive", "Flat Water"],
          href: "https://oceanadventure.surf/en/morocco/dakhla/",
          category: "direct-employer",
          useWhen: "You want to learn in Dakhla's flat-water lagoon — widely considered the world's best beginner kitesurfing environment.",
        },
        {
          name: "Too Wet to Shred",
          description:
            "Women-focused kitesurf retreat operator running camps in Tarifa and internationally. One of the most active communities in kitesurf travel, with a strong record of supporting women through the beginner phase and into independent riding.",
          tags: ["Women's Retreats", "Tarifa", "Community Focus", "Beginner Supportive"],
          href: "https://www.toowettoshred.com",
          category: "direct-employer",
          useWhen: "You are a woman looking for a kitesurf camp with a specifically supportive learning environment.",
        },
      ],
    },
  ],

  regionsHeading: "Best destinations for kitesurfing camps",
  regionsIntro:
    "Wind consistency, water conditions, and available accommodation infrastructure determine the quality of a kitesurf destination. The five below are the global leaders.",

  regions: [
    {
      slug: "tarifa",
      name: "Tarifa, Spain",
      label: "Tarifa",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Kitesurfers on a wide sandy beach in Tarifa with the Strait of Gibraltar in the background",
      season: "Peak: October – June (Levante and Poniente winds year-round)",
      body: "Tarifa is the kitesurfing capital of Europe and one of the windiest towns on the planet, sitting on the narrow Strait of Gibraltar where the Atlantic meets the Mediterranean. Two primary winds — the east-facing Levante and the west-facing Poniente — mean that when one drops, the other often picks up. More than 300 wind days per year is not marketing copy; it is a climatological reality. The town itself has built an entire economy around wind sports, with IKO-certified schools lining the beach road, flat-water spots in the Valdevaqueros lagoon area for beginners, and more challenging wave and onshore conditions at Los Lances for advanced riders. The school infrastructure here is unmatched in Europe — if you want to learn in Europe, Tarifa is the obvious first choice.",
    },
    {
      slug: "dakhla",
      name: "Dakhla, Morocco",
      label: "Dakhla",
      image:
        "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Kite surfer gliding across the flat turquoise lagoon at Dakhla, Morocco",
      season: "Year-round (peak season: April – October)",
      body: "Dakhla, located on a narrow peninsula in southern Morocco, hosts what many experienced kiters consider the world's single best learning environment — a vast, shallow, flat-water lagoon with thermal winds that blow almost every afternoon from spring through autumn. The shallow water means falls are non-threatening, the flat surface is forgiving for water starts, and the consistent side-shore wind direction makes body dragging straightforward. The infrastructure around the lagoon has developed significantly in the past decade, with a string of eco-lodge kite camps offering all-inclusive packages that bundle accommodation, meals, and daily instruction. Year-round viability and relatively affordable pricing make Dakhla an increasingly popular choice for Europeans.",
    },
    {
      slug: "cape-verde",
      name: "Cape Verde",
      label: "Cape Verde",
      image:
        "https://images.unsplash.com/photo-1589827121945-d7d7cc5a7e2f?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Kitesurfer in turquoise water with a volcanic island in the background, Cape Verde",
      season: "Peak trade winds: November – July",
      body: "Cape Verde's two primary kitesurf islands — Sal and Boa Vista — benefit from the northeast trade winds that blow with exceptional consistency from November through July. The trade wind reliability here is higher than almost anywhere else in the world, making it a popular choice for kiters who want a guaranteed wind window without the unpredictability of continental weather systems. The Atlantic swell around the island's exposed beaches adds a wave-riding dimension for more experienced riders. Cape Verde is logistically easy from the UK and Europe with direct charter flights and a well-developed tourism infrastructure. Prices sit slightly above Morocco but below Portuguese Canary Island equivalents.",
      relatedHref: "/guides/cape-verde",
      relatedLabel: "Cape Verde guide",
    },
    {
      slug: "fuerteventura",
      name: "Fuerteventura, Canary Islands",
      label: "Fuerteventura",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Kiteboarder launching over a wave on Fuerteventura's north coast with turquoise water",
      season: "Year-round (strongest: April – September)",
      body: "Fuerteventura's north coast — particularly around Corralejo and the Cangrejo/Bubble breaks — is Europe's most accessible year-round kitesurfing destination. The Canary Islands' position in the Atlantic trade wind belt delivers consistent conditions across all seasons, and the island's sandy beaches and warm water (18–22°C year-round) mean no thick wetsuit is required. The density of IKO-certified schools around Corralejo rivals Tarifa's, and the resort infrastructure means non-kiting partners or family members have plenty to do. Year-round flights from most European cities make Fuerteventura the most logistically convenient choice for UK and continental European kiters.",
    },
    {
      slug: "sri-lanka-kite",
      name: "Kalpitiya, Sri Lanka",
      label: "Sri Lanka",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Kitesurfer on a lagoon in Kalpitiya, Sri Lanka with palm trees on the shoreline",
      season: "Best: May – October (SW monsoon)",
      body: "Kalpitiya, on Sri Lanka's northwest coast, has emerged as Asia's premier budget-friendly kitesurfing destination. The southwest monsoon from May to October delivers reliable side-shore winds over a vast shallow lagoon, making it an ideal learning environment. The same trade wind pattern that makes Dakhla extraordinary applies here — flat water, consistent wind direction, and shallow enough to walk in for beginners. Prices are substantially lower than any European destination — a full beginner camp week including accommodation and all meals runs $300–$500 less than Tarifa equivalents. For kiters willing to handle slightly longer travel logistics, the value-for-money case is compelling.",
    },
  ],

  roleTypes: [
    {
      title: "IKO Beginner Course",
      icon: "🪁",
      level: "Entry level",
      keyCerts: ["IKO Level 1 completion", "10–15 hours instruction", "All equipment provided"],
      salaryRange: "€400–€700 / week all-in",
      description:
        "The standard entry point — kite theory, beach kite control, body dragging, water start, first board rides. Structured over 3–5 days depending on wind and progress. No prior board sport or swimming ability required beyond basic water confidence. Most people are riding short distances by the end of the week.",
    },
    {
      title: "Intermediate — Upwind Riding",
      icon: "🌊",
      level: "Mid level",
      keyCerts: ["Can water start consistently", "IKO Level 1 complete", "Working on riding upwind"],
      salaryRange: "€500–€800 / week all-in",
      description:
        "For kiters who can get up and ride but are still being dragged downwind. Focuses on kite positioning, edge control, and the technical adjustments that enable upwind riding. Once you can ride upwind consistently, you have effectively completed the learning curve and can kitesurf independently in most locations.",
    },
    {
      title: "Advanced — Freestyle & Jumps",
      icon: "🚀",
      level: "Senior level",
      keyCerts: ["Riding upwind confidently", "IKO Level 2+", "Ready for air time"],
      salaryRange: "€600–€1,000 / week all-in",
      description:
        "Jump technique, megaloop approaches, kite loops, handle pass tricks, and wave riding. Small group or private coaching with experienced freestyle or wave riders. Some camps offer video analysis and drone footage review. The jump learning phase has an injury risk that intermediate riding does not — physical warm-up and proper instruction are important.",
    },
    {
      title: "Wave Riding / Strapless",
      icon: "🏄",
      level: "Mid-senior level",
      keyCerts: ["Comfortable in swell", "Can ride in onshore conditions", "Surfing background helpful"],
      salaryRange: "€700–€1,200 / week all-in",
      description:
        "Wave kitesurfing — either strapped or strapless on a directional board — requires a different set of skills from flat-water freestyle. Camps specialising in wave riding are typically located in Atlantic swell destinations (Tarifa, Ericeira, Hossegor) and require intermediate kiting ability and ideally some surfing background.",
    },
  ],

  salaryHighlightsHeading: "What does a kitesurfing camp cost?",
  salaryHighlightsIntro:
    "Prices below reflect all-inclusive packages (accommodation + meals + instruction + equipment). Equipment hire alone for a beginner course typically runs €250–€400 separately if accommodation is booked independently.",
  salaryHighlights: [
    {
      country: "Budget camp",
      flag: "💰",
      salaryRange: "€350–€550",
      salaryLabel: "per week all-inclusive",
      includes: ["Shared accommodation", "Beginner IKO course (10–12 hrs)", "All kite equipment provided", "Best in Dakhla, Sri Lanka, Morocco"],
      badge: "Best value in Dakhla",
    },
    {
      country: "Mid-range camp",
      flag: "🪁",
      salaryRange: "€600–€900",
      salaryLabel: "per week all-inclusive",
      includes: ["Private or shared twin room", "Full beginner or intermediate course", "All equipment + wetsuit", "Airport transfers"],
      badge: "Standard Tarifa pricing",
    },
    {
      country: "Premium small-group",
      flag: "⭐",
      salaryRange: "€900–€1,400",
      salaryLabel: "per week all-inclusive",
      includes: ["Private room, ensuite", "Max 4 students per instructor", "Video analysis included", "All meals and transfers"],
    },
    {
      country: "Private coaching",
      flag: "🏆",
      salaryRange: "€1,400–€2,500",
      salaryLabel: "per week all-inclusive",
      includes: ["1-on-1 instruction", "Daily video review", "Premium accommodation", "Fully customised programme"],
    },
  ],

  seasonalCalendar: [
    {
      region: "Tarifa, Spain",
      months: "October – June (best window)",
      locations: ["Valdevaqueros", "Los Lances", "Punta Paloma"],
      notes: "July and August can be inconsistently windy due to calmer summer pressure patterns. The shoulder months (Oct–Nov, Apr–May) combine good wind and manageable crowds.",
    },
    {
      region: "Dakhla, Morocco",
      months: "April – October (peak lagoon season)",
      locations: ["Dakhla Lagoon", "Speed Strip", "Oceano Dakhla area"],
      notes: "Year-round viability but peak wind reliability April–October. January and February can be chilly; April onwards is consistently warm.",
    },
    {
      region: "Cape Verde (Sal & Boa Vista)",
      months: "November – July",
      locations: ["Santa Maria (Sal)", "Rabil (Boa Vista)", "Kite Beach"],
      notes: "Trade winds are most reliable November through July. August–October can be lighter. Direct charter flights from UK run frequently year-round.",
    },
    {
      region: "Fuerteventura, Canary Islands",
      months: "Year-round (strongest April – September)",
      locations: ["Corralejo", "Flag Beach", "El Cotillo"],
      notes: "Strongest and most consistent April through September. Year-round fly destination with easy European access throughout winter too.",
    },
    {
      region: "Kalpitiya, Sri Lanka",
      months: "May – October",
      locations: ["Kalpitiya Lagoon", "Bar Reef", "Dutch Bay"],
      notes: "Driven by the southwest monsoon — highly consistent during this window. October to April is less reliable for kiting but excellent for other Sri Lankan travel.",
    },
  ],

  goodToKnow: [
    {
      emoji: "⚠️",
      title: "Never self-teach kitesurfing — this is not optional advice",
      body: "Kitesurfing kills people who attempt to self-teach with YouTube and borrowed equipment. The kite generates enough power to throw you into rocks, roads, power lines, or other people. IKO-certified instruction is not a marketing preference — it is a genuine safety necessity at the beginner stage.",
    },
    {
      emoji: "💨",
      title: "Check wind forecasts for your specific dates before booking flights",
      body: "Even the most reliable destinations have flat periods. Windguru and Windy.com are the standard tools. Dakhla and Cape Verde have the highest probability of wind during their seasons; Tarifa is reliable on average but can have multi-day flat spells. Many experienced kiters book refundable flights and wait for a confirmed forecast window before confirming.",
    },
    {
      emoji: "🌊",
      title: "Flat-water destinations are significantly better for learning",
      body: "Waves add complexity, power, and danger to the learning phase. Destinations with lagoons or flat-water spots (Dakhla, Kalpitiya, Corralejo's flat spots) give beginners significantly more controlled environments. Wave kitesurfing is an advanced skill — do not attempt it until you are riding independently and confidently.",
    },
    {
      emoji: "🩱",
      title: "A rash vest and shorts are sufficient in tropical destinations",
      body: "In Dakhla, Cape Verde, and Sri Lanka, a 1–2mm shorty wetsuit or simply a rash vest is all you need for thermal protection. Most camps supply wetsuits — check before packing yours. In Tarifa and Fuerteventura during autumn and winter, a 3–4mm full wetsuit is standard.",
    },
    {
      emoji: "📲",
      title: "The IKO card you earn is internationally recognised",
      body: "Your IKO certification level is recognised by schools and rental centres globally. When you arrive in a new destination wanting to rent equipment, the first thing any rental shop will ask is your IKO level. Having your physical or digital card ensures you can rent without an assessment. Keep it accessible.",
    },
  ],

  faqHeading: "Kitesurfing camp FAQ",
  faqIntro:
    "Answers to the most common questions from people considering their first kitesurf camp or returning intermediate riders.",

  faqs: [
    {
      question: "How long does it take to learn to kitesurf?",
      answer:
        "Most beginners complete the IKO Level 1 progression — learning to kite safely and get their first board rides — in 10–15 hours of instruction spread over three to five days. Riding independently upwind typically takes another 5–10 hours. So in practical terms: a focused beginner week gets you to independent riding, and an intermediate follow-up week has most people riding confidently upwind.",
    },
    {
      question: "Do I need to be able to swim to learn kitesurfing?",
      answer:
        "You should be comfortable in water and able to swim, though you are always wearing a buoyancy impact vest during lessons and will be in shallow water for much of the beginner phase. You do not need to be a strong swimmer. Inform your instructor of any water confidence concerns at the start of your course — good instructors accommodate these.",
    },
    {
      question: "Is kitesurfing more dangerous than other water sports?",
      answer:
        "Kitesurfing with proper instruction from an IKO-certified school has a reasonable safety record. The danger comes from uncontrolled learning — people who self-teach or accept informal tips from friends without proper safety knowledge. The industry's shift towards mandatory IKO beginner programmes has significantly reduced incident rates. The most common injuries at beginner level are minor falls; serious injuries typically involve people riding in conditions beyond their ability.",
    },
    {
      question: "What is the difference between IKO and VDWS certification?",
      answer:
        "IKO (International Kiteboarding Organisation) is the global certification standard recognised in the largest number of countries. VDWS (Verband Deutscher Windsurfing- und Wassersportschulen) is the German equivalent — well-recognised in German-speaking Europe and at some schools internationally. Both are legitimate; IKO is the most universally accepted for rental purposes when travelling globally.",
    },
    {
      question: "Can I rent a kite and board once I am at IKO Level 1?",
      answer:
        "Most rental operations require IKO Level 2 (independent rider) before unsupervised rental. At Level 1, you have completed the beginner course but are not yet considered a fully independent kiter. Some schools offer supervised equipment hire to Level 1 graduates; others do not. Check with your intended rental location before making plans around independent post-course riding.",
    },
    {
      question: "What is the best destination for a beginner who has never kitesurfed?",
      answer:
        "Dakhla's flat-water lagoon is the most cited recommendation for first-time learners — the shallow, flat water and consistent thermal winds create an almost ideal learning environment. Tarifa is excellent for sheer school density and wind reliability, but the conditions can be more challenging (stronger winds, more swell) than Dakhla. For European travellers wanting easy logistics, Fuerteventura offers year-round conditions with simple flight connections from most EU cities.",
    },
    {
      question: "Do I need to bring my own equipment to a kitesurf camp?",
      answer:
        "No. All legitimate beginner camps and most intermediate camps provide all equipment as part of the package — kites across a range of sizes, boards, harness, impact vest, and wetsuit. Most seasoned kiters do not travel with their own equipment for a camp unless they have a strongly preferred setup for advanced riding. Airlines do charge for kite bags and the logistics rarely justify it for a single-destination trip.",
    },
    {
      question: "How far in advance should I book a kitesurf camp?",
      answer:
        "For peak season in the most popular destinations (Tarifa in October–November, Dakhla in June–August), booking two to four months in advance is advisable, particularly if you want a specific school or accommodation type. Off-peak bookings can often be made one to two weeks out. The most sought-after small-group premium camps fill up earliest — if budget allows for a premium slot, book before the season opens.",
    },
  ],

  disclaimer:
    "Wind conditions, school availability, and camp pricing change seasonally. IKO certification requirements and levels are updated periodically. Always verify current certification requirements and camp availability directly with your chosen school before booking.",

  ctaHeading: "Find your kitesurfing camp",
  ctaDescription:
    "Browse kitesurfing camps listed on Abroader, compare IKO-certified schools by destination, or book a consultation to match the right location to your travel dates.",
  ctaLinks: [
    { href: "/retreats", label: "Browse all retreats", primary: true },
    { href: "/opportunities/surf-retreat-abroad", label: "Surf retreats" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/retreats", label: "All retreats" },
    { href: "/opportunities/surf-instructor-abroad", label: "Surf instructor jobs" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
};
