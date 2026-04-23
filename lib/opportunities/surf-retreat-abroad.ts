import type { OpportunityLanding } from "./types";

export const SURF_RETREAT_ABROAD: OpportunityLanding = {
  slug: "surf-retreat-abroad",
  metaTitle: "Surf Retreats Abroad 2026 — Portugal, Bali, Morocco & More | Abroader",
  metaDescription:
    "The definitive guide to surf retreats abroad. Compare camps in Portugal, Bali, Sri Lanka, Morocco, and Costa Rica — all levels welcome. Real providers, real prices, real seasonal advice.",
  heroTitle: "Surf retreats abroad",
  heroSubtitle:
    "A surf retreat is one of the most rewarding ways to travel — you return home fitter, more skilled, and connected to a community of people who share the same obsession with the ocean. Whether you are picking up a board for the first time or looking to sharpen your cutbacks in perfect Indo barrels, there is a camp built for your level. Here is how the global surf retreat market works and how to find the right one.",
  heroImage:
    "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Surfer walking along a beach at sunrise carrying a surfboard, Portugal",
  category: "Retreats",
  stats: [
    { value: "3,000+", label: "camps across 100+ countries" },
    { value: "7–28", label: "typical days duration" },
    { value: "All levels", label: "beginner to advanced" },
    { value: "€600–€2,500", label: "typical weekly all-in price" },
  ],

  introHeading: "What a surf retreat actually gives you",
  introParagraphs: [
    "A surf retreat is structured time in the water, built around progression. The best camps combine daily coaching from qualified instructors, video analysis, yoga or fitness sessions to improve your paddling and flexibility, and a social environment that makes the whole experience feel less like a holiday and more like a reset. For complete beginners, a week at a well-run camp can compress six months of solo progress into seven days. For experienced surfers, a targeted coaching retreat in a world-class location can unlock parts of your surfing that years of solo sessions have not.",
    "The market has matured significantly over the past decade. What was once a handful of informal camps in Bali and Portugal is now a global industry with thousands of camps at every price point, from budget dorms in Canggu to five-star eco-lodges on the Alentejo coast. The biggest aggregator, BookSurfCamps.com, lists more than 3,000 camps in over 100 countries. The breadth means the challenge is no longer finding a camp — it is filtering down to the right one for your level, budget, travel style, and target destination.",
    "The destinations that consistently produce the best surf retreat experiences share a few things: reliable surf at a range of skill levels, a well-established instructor community, and enough supporting infrastructure — good food, comfortable accommodation, proximity to a town — to keep non-surfing hours enjoyable. Portugal's Silver Coast, Bali's Canggu, Morocco's Taghazout, Sri Lanka's south coast, and Costa Rica's Nicoya Peninsula all qualify. Each has a distinct character, season, and price point, and the guide below breaks down what each offers in practice.",
  ],

  howItWorksHeading: "How to choose and book a surf retreat",
  howItWorks: [
    {
      step: 1,
      title: "Assess your level honestly",
      body: "Most camps use a five-level scale from complete beginner to advanced. Be honest when you book — a camp pitched at beginners will bore intermediate surfers, and an advanced camp in powerful overhead surf is genuinely dangerous for beginners. Most operators are clear about what level they cater to; look for wave height and experience requirements in the fine print.",
    },
    {
      step: 2,
      title: "Choose your destination by season",
      body: "No destination has perfect surf year-round. Portugal and Morocco peak in autumn and winter (September–April). Bali and the Canary Islands offer more consistent year-round conditions. Sri Lanka has two distinct seasons split between its south and east coasts — experienced surfers chain these back-to-back. Booking out of season means cheaper prices but smaller, less consistent swell.",
    },
    {
      step: 3,
      title: "Decide what is included",
      body: "All-inclusive camps (accommodation + meals + coaching + board hire) make budgeting simple but cost more upfront. Semi-inclusive camps offer coaching and accommodation but ask you to handle your own food. Self-catered options exist for those who want flexibility. Also check whether the price includes airport transfers, wetsuit hire, and surf photography — these add up.",
    },
    {
      step: 4,
      title: "Book early for peak season",
      body: "The best camps in Portugal and Morocco in October and November fill up four to six months in advance. Bali camps have more year-round availability. If you are travelling solo, check whether the camp has a solo-traveller community and room-sharing policy — most good camps actively mix solo guests and build social programmes around it.",
    },
    {
      step: 5,
      title: "Prepare physically before you arrive",
      body: "Surfing is more physically demanding than it looks — especially the paddle. Most experienced camp operators recommend arriving with some baseline fitness. A month of regular swimming, yoga, or upper-body conditioning before your trip will make your first day in the water significantly less exhausting and dramatically improve your learning curve.",
    },
  ],

  whyProviders:
    "The surf retreat market has two tiers: large multi-destination operators with camps across several countries, and boutique single-destination camps with a specific identity and tight community feel. Both have their merits. The comparison below covers both types across booking platforms, multi-destination operators, and specialist boutique camps.",

  providerGroups: [
    {
      heading: "Booking platforms and aggregators",
      intro:
        "If you are open to multiple destinations or want to compare options across different price points, a booking platform is the most efficient starting point. These aggregate thousands of camps and allow filtering by level, date, budget, and location.",
      providers: [
        {
          name: "BookSurfCamps.com",
          description:
            "The world's largest surf camp booking platform with 3,000+ camps across 100+ countries. Filter by destination, level, budget, and dates. Particularly strong for Portugal, Morocco, Indonesia, and Sri Lanka. Includes verified guest reviews and direct booking.",
          tags: ["Booking Platform", "3,000+ Camps", "100+ Countries", "All Levels"],
          href: "https://www.booksurfcamps.com",
          category: "aggregator",
          useWhen: "You want to compare multiple destinations and camp styles in one place before committing.",
        },
        {
          name: "BookRetreats.com — Surf",
          description:
            "10,000+ surf and surf-yoga retreat listings with verified guest reviews. Strong for surf-yoga combination retreats, which are one of the fastest-growing search categories. Easy filtering by price, duration, and destination.",
          tags: ["10,000+ Listings", "Surf + Yoga", "Verified Reviews"],
          href: "https://bookretreats.com/s/other-retreats/surf-retreats",
          category: "aggregator",
          useWhen: "You want a surf retreat combined with yoga, wellness, or breathwork elements.",
        },
        {
          name: "Pure Surf Camps",
          description:
            "Multi-destination operator with camps spanning 20+ countries across Europe, Asia, Africa, and the Americas. Filterable search by level, month, and style. Strong offerings in Sri Lanka, Morocco, and Portugal at both budget and premium price points.",
          tags: ["20+ Countries", "All Budgets", "Camp Finder Tool"],
          href: "https://www.puresurfcamps.com",
          category: "training-placement",
          useWhen: "You want a large trusted multi-destination operator with a wide range of styles and budgets.",
        },
      ],
    },
    {
      heading: "Specialist operators and boutique camps",
      intro:
        "For a more curated experience — smaller groups, specific coaching focus, or a distinct destination identity — these operators and camps are among the most respected in the global surf retreat market.",
      providers: [
        {
          name: "Dreamsea Surf Camps",
          description:
            "Multi-destination operator with camps in Portugal (Sintra, Alentejo, Central), Spain, France, Morocco, Sri Lanka, Bali, Costa Rica, and Nicaragua. Sustainable architecture, community-focused ethos, and all-inclusive packages. All levels welcome.",
          tags: ["11 Destinations", "All Levels", "Eco-Focused", "All-Inclusive"],
          href: "https://www.dreamsea.com",
          category: "direct-employer",
          useWhen: "You want a sustainable, community-driven camp across a wide choice of destinations.",
        },
        {
          name: "Elsewhere Surf Camps",
          description:
            "Community-first camps in Weligama (Sri Lanka) and Canggu (Bali). Founded by surfers for surfers — strong social scene with all-inclusive packages and a well-established solo-traveller community. Great for those travelling alone.",
          tags: ["Sri Lanka", "Bali", "All-Inclusive", "Solo Traveller Friendly"],
          href: "https://elsewheresurfcamps.com",
          category: "direct-employer",
          useWhen: "You are travelling solo and want a strong social community alongside the coaching.",
        },
        {
          name: "Rapture Surfcamps",
          description:
            "Long-established operator in Bali, Portugal, and Sri Lanka. Known for combining quality surf coaching with daily yoga and community surf events. A trusted benchmark for the all-inclusive surf-yoga camp format.",
          tags: ["Bali · Portugal · Sri Lanka", "Yoga Included", "All-Inclusive"],
          href: "https://www.rapturesurfcamp.com",
          category: "direct-employer",
          useWhen: "You want an established operator that combines surf coaching with yoga in a relaxed community setting.",
        },
        {
          name: "Outer Reef Surf Travel",
          description:
            "25+ years curating hand-picked surf camps in Morocco, Sri Lanka, Portugal, Spain, and Bali. ISA-qualified instructors across all camps. Also runs Salty Sisters women-only surf retreats. Strong for personalised and premium bookings.",
          tags: ["Hand-Picked Camps", "25+ Years", "Women's Retreats", "ISA Qualified"],
          href: "https://www.outerreefsurfschool.com/surf-camps/",
          category: "training-placement",
          useWhen: "You want personally curated, quality-assured camps or a women-only retreat experience.",
        },
      ],
    },
  ],

  regionsHeading: "Best destinations for surf retreats",
  regionsIntro:
    "Each major surf destination has its own character, season, and price point. The five below represent the global benchmark for surf retreat quality and are home to the highest concentration of well-run, coach-led camps.",

  regions: [
    {
      slug: "portugal",
      name: "Portugal",
      label: "Portugal",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Atlantic waves breaking on the beach near Ericeira, Portugal",
      season: "Peak: September – April",
      body: "Portugal is Europe's premier surf destination and hosts more surf camps per kilometre of coastline than anywhere else on the continent. The Atlantic swell is most powerful and consistent from September through April, with October and November widely considered the best months for intermediate and advanced surfers. Ericeira, a UNESCO World Surf Reserve, and the beaches around Sagres and Peniche are the main hubs. Prices run lower than you might expect — a quality all-inclusive week with coaching typically costs €600–€1,100 depending on season and accommodation standard. The camps here benefit from excellent infrastructure, short transfer times from Lisbon airport, and an established year-round coaching community.",
      relatedHref: "/co-living/lisbon",
      relatedLabel: "Remote living in Lisbon",
    },
    {
      slug: "bali",
      name: "Bali, Indonesia",
      label: "Bali",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Surfer on a tropical wave at Uluwatu, Bali at sunset",
      season: "Peak dry season: April – October",
      body: "Bali is the world's most aspirational surf destination and the global epicentre of the surf camp industry. Kuta and Canggu hold the highest density of camps, but the serious surf — and the more discerning camps — cluster around Uluwatu, Padang Padang, and the Bukit Peninsula in the south. The dry season (April to October) delivers the most reliable offshore winds and clean swell. Year-round warmth means no wetsuit is required and the barrier to simply getting in the water is lower than anywhere in Europe. Camps here tend to be larger and more social than elsewhere, and Canggu in particular has developed into a fully formed surf-and-digital-nomad ecosystem with exceptional food and nightlife to fill the hours outside the water.",
    },
    {
      slug: "morocco",
      name: "Morocco",
      label: "Morocco",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Atlantic swell rolling into Taghazout beach at dusk, Morocco",
      season: "Peak: September – April",
      body: "Taghazout, just north of Agadir on Morocco's Atlantic coast, is the continent of Africa's surf capital and the natural winter destination for European surfers who follow the sun south when Portugal's summer ends. The same Atlantic swell system that drives Portugal's autumn season pushes south to Morocco from September through April, overlapping neatly for instructors and retreat guests who want to stack back-to-back seasons. Camps here are generally more affordable than their Portuguese counterparts and most include accommodation, meals, and daily transport to the break in a single price. The cultural context — the souks of Agadir, the desert an hour inland, the street food — adds a dimension that purely beach-resort destinations cannot match.",
      relatedHref: "/co-living/taghazout",
      relatedLabel: "Co-living in Taghazout",
    },
    {
      slug: "sri-lanka",
      name: "Sri Lanka",
      label: "Sri Lanka",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Empty surf break near Weligama, Sri Lanka at low tide",
      season: "South coast: Nov–Apr; East coast: May–Oct",
      body: "Sri Lanka is the only major surf destination in the world with two opposite-facing coasts on a single island, which means it offers reliable surf almost year-round when you know how to rotate between them. The south coast — centred on Weligama and Midigama — fires from November through April when the northeast monsoon brings clean Indian Ocean swells. From May onwards, the southwest monsoon shifts ideal conditions to the east coast around Arugam Bay, a world-class right-hand point break. The country is highly affordable compared to Europe, accommodation quality has improved substantially over the past five years, and the warmth and hospitality of the local community gives most camps here a distinctly relaxed atmosphere.",
    },
    {
      slug: "costa-rica",
      name: "Costa Rica",
      label: "Costa Rica",
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Palm-lined beach with waves at Tamarindo, Costa Rica",
      season: "Best: May – November (Pacific swell season)",
      body: "Costa Rica's Pacific coast — particularly the Nicoya Peninsula around Tamarindo, Santa Teresa, and Nosara — is Central America's definitive surf destination. Consistent Pacific swells arrive year-round but are largest and most powerful from May through November during the rainy season. Camps here combine surfing with the country's extraordinary biodiversity — rainforest, wildlife, and volcanic mountains are all within a short drive. Santa Teresa in particular has developed a premium wellness and surf retreat scene that draws a design-conscious, health-oriented crowd. Retreat prices run slightly higher than Asia but comparable to Morocco, and the all-inclusive model (meals, coaching, and accommodation bundled) is the standard.",
    },
    {
      slug: "canary-islands",
      name: "Canary Islands",
      label: "Canaries",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Waves breaking on a volcanic beach in Fuerteventura, Canary Islands",
      season: "Year-round, peak: October – March",
      body: "The Canary Islands — particularly Fuerteventura, Lanzarote, and Gran Canaria — offer the most reliable year-round surfing in Europe and act as a natural bridge for those who want Atlantic swell without long-haul travel. The consistent trade winds and relatively warm water (18–22°C year-round) mean no thick wetsuit is needed and you can book a retreat in almost any month without worrying about flat spells. Fuerteventura's north coast, with breaks like Bubble, Hierro, and the famous Lobos Island ferry, has the highest concentration of surf camps in the archipelago. Prices tend to be slightly higher than mainland Portugal due to the island economy, but the year-round reliability and guaranteed sun justify the premium for many.",
    },
  ],

  roleTypes: [
    {
      title: "Beginner Surf Camp",
      icon: "🏄",
      level: "Entry level",
      keyCerts: ["No experience needed", "ISA Level 1 instructors", "Soft-top boards provided"],
      salaryRange: "€600–€900 / week all-in",
      description:
        "Structured 5–8 hours of water time per day with qualified ISA instructors, typically in small-to-medium beach breaks with forgiving whitewash sections. Includes board hire, wetsuit, and land-based sessions on popping up, paddling technique, and ocean awareness. Most participants are standing and catching green waves within 3–5 days.",
    },
    {
      title: "Intermediate Coaching Retreat",
      icon: "🌊",
      level: "Mid level",
      keyCerts: ["Can ride green waves unassisted", "Ready for head-high surf", "Video analysis included"],
      salaryRange: "€800–€1,400 / week all-in",
      description:
        "For surfers who can catch and ride unbroken waves but want to improve technique — turning, timing, reading lineups, and managing bigger surf. Includes filmed sessions with instructor review, smaller group sizes, and access to more challenging breaks than beginner camps. Often combined with yoga or strength and conditioning.",
    },
    {
      title: "Advanced Performance Camp",
      icon: "🔥",
      level: "Senior level",
      keyCerts: ["Comfortable in overhead surf", "Seeking progressive manoeuvres", "Small groups of 4–6"],
      salaryRange: "€1,200–€2,500 / week all-in",
      description:
        "Elite-level coaching with professional or high-performance amateur instructors in world-class waves. Covers advanced techniques — cutbacks, carves, barrels, aerials. Highly filmed and analysed. Very small groups, premium accommodation, and access to breaks that beginner and intermediate camps cannot safely use. Often includes strength and conditioning and mental performance coaching.",
    },
    {
      title: "Surf & Yoga Retreat",
      icon: "🧘",
      level: "Entry-mid level",
      keyCerts: ["No yoga experience needed", "Complements all surf levels", "Flexibility and core focus"],
      salaryRange: "€700–€1,600 / week all-in",
      description:
        "The most popular hybrid retreat format globally. Combines daily surf sessions with morning or evening yoga to improve flexibility, paddling power, and mental focus. The yoga component is tailored to complement surfing — hip openers, shoulder mobility, and breath control are central. Suitable for beginners through to intermediate surfers.",
    },
  ],

  salaryHighlightsHeading: "What does a surf retreat cost?",
  salaryHighlightsIntro:
    "Prices vary significantly by destination, accommodation standard, and what is included. The ranges below reflect typical all-inclusive weekly packages (accommodation + coaching + meals + board hire) across the four main price tiers.",
  salaryHighlights: [
    {
      country: "Budget (shared dorm)",
      flag: "💰",
      salaryRange: "€400–€700",
      salaryLabel: "per week all-inclusive",
      includes: ["Shared dorm (4–8 beds)", "Daily coaching (2 sessions)", "Board and wetsuit hire", "Breakfast included"],
      badge: "Best value in Morocco & Sri Lanka",
    },
    {
      country: "Mid-range (shared room)",
      flag: "🏄",
      salaryRange: "€700–€1,100",
      salaryLabel: "per week all-inclusive",
      includes: ["Shared twin or double", "Daily coaching with video analysis", "Board and wetsuit hire", "All meals included"],
      badge: "Most popular tier",
    },
    {
      country: "Premium (private room)",
      flag: "⭐",
      salaryRange: "€1,100–€1,800",
      salaryLabel: "per week all-inclusive",
      includes: ["Private ensuite room", "Small-group coaching (max 6)", "Yoga sessions included", "All meals + airport transfers"],
    },
    {
      country: "Luxury (private villa)",
      flag: "🌟",
      salaryRange: "€1,800–€3,500+",
      salaryLabel: "per week all-inclusive",
      includes: ["Private villa or premium suite", "1-on-1 or 2-on-1 coaching", "Spa treatments included", "Chef-prepared meals"],
    },
  ],

  seasonalCalendar: [
    {
      region: "Portugal (Ericeira, Peniche, Sagres)",
      months: "September – April",
      locations: ["Ericeira", "Peniche", "Sagres", "Nazaré (spectator)"],
      notes: "October and November are peak for consistent overhead swell. Shoulder months (Sept, Apr) are warmer with lighter crowds.",
    },
    {
      region: "Bali, Indonesia",
      months: "April – October (dry season)",
      locations: ["Canggu", "Kuta", "Uluwatu", "Padang Padang"],
      notes: "Dry season brings offshore trade winds and cleaner surf. Year-round warmth means off-season camps still operate.",
    },
    {
      region: "Morocco (Taghazout)",
      months: "September – April",
      locations: ["Taghazout", "Anchor Point", "Killer Point", "Imsouane"],
      notes: "Overlaps with Portugal's peak season — instructors and serious surfers often stack the two destinations back-to-back.",
    },
    {
      region: "Sri Lanka (South Coast)",
      months: "November – April",
      locations: ["Weligama", "Midigama", "Hiriketiya", "Aragum Bay (East, May–Oct)"],
      notes: "Flip to the east coast (Arugam Bay) May–October for year-round surfing across both coasts.",
    },
    {
      region: "Costa Rica (Pacific Coast)",
      months: "May – November",
      locations: ["Santa Teresa", "Tamarindo", "Nosara", "Pavones"],
      notes: "Pacific swell season delivers the largest and most consistent surf. The shoulder months have smaller, cleaner waves suited to beginners.",
    },
    {
      region: "Canary Islands",
      months: "Year-round (best Oct – Mar)",
      locations: ["Fuerteventura (north coast)", "Lanzarote", "Gran Canaria"],
      notes: "Most reliable year-round surf destination in Europe. Ideal for those who cannot plan around a specific season.",
    },
  ],

  goodToKnow: [
    {
      emoji: "🩺",
      title: "Ocean safety is the non-negotiable",
      body: "All reputable camps require instructors with a lifeguard or first aid certification alongside their surf qualification. Check this before booking — it is a direct proxy for the camp's safety standards overall.",
    },
    {
      emoji: "📸",
      title: "Video analysis is worth paying for",
      body: "The single biggest accelerator for surf progression is watching yourself on video with an experienced coach. Not all camps offer this — specifically look for it when comparing options at the intermediate and above level.",
    },
    {
      emoji: "🧴",
      title: "Reef-safe sunscreen is non-negotiable in tropical destinations",
      body: "In Bali, Sri Lanka, and Costa Rica, mineral-only reef-safe sunscreen is either legally required or strongly enforced by camps. Standard chemical sunscreens are ecologically harmful and increasingly banned. Pack before you travel.",
    },
    {
      emoji: "📅",
      title: "Book October–November Portugal at least 4 months out",
      body: "The best camps in Portugal's peak season sell out consistently by July for autumn bookings. If you have a specific camp in mind, put the deposit down early — waiting until September for an October retreat will leave you with limited options.",
    },
    {
      emoji: "👙",
      title: "Solo travellers are the majority at most camps",
      body: "Do not let solo travel deter you — the majority of surf camp guests book alone. Good camps actively build social dynamics through communal meals, evening activities, and room-sharing matching. It is one of the social formats most people report feeling immediately comfortable in.",
    },
    {
      emoji: "🏋️",
      title: "Arrive with some paddle fitness",
      body: "Surfing uses muscles that are difficult to train without actually surfing. Even a month of regular swimming (especially front crawl) before your trip will meaningfully reduce day-one exhaustion and allow you to spend more of your energy on technique rather than simply surviving the paddle out.",
    },
  ],

  faqHeading: "Surf retreat FAQ",
  faqIntro:
    "The questions below cover the most common practical concerns from first-timers and returning campers alike.",

  faqs: [
    {
      question: "Do I need to be able to surf before booking a surf retreat?",
      answer:
        "No. Most camps actively cater for complete beginners — they are one of the primary markets. You will typically start on a large foam board (soft-top) in gentle whitewash, learning to paddle and pop up before moving to green unbroken waves. A quality beginner camp can have you riding real waves within the first two days. The key is to be honest about your level when booking so the camp can place you in the appropriate group.",
    },
    {
      question: "What is the difference between a surf retreat and a surf camp?",
      answer:
        "The terms are used interchangeably by most operators, but there is a loose distinction: a 'surf camp' typically emphasises the activity and coaching above all else, often with a younger and more budget-focused demographic. A 'surf retreat' typically layers in wellness elements — yoga, healthy food, spa access, mindfulness — and skews towards a slightly older audience willing to pay more for a holistic experience. Both formats involve daily surf coaching as the core of the programme.",
    },
    {
      question: "How many surf sessions will I get per day?",
      answer:
        "Most camps offer two guided sessions per day — one in the morning and one in the late afternoon or early evening, timed around tides and optimal light. In between, free sessions are usually available with open board access. Total coached water time typically runs 3–5 hours per day. Beginner camps may reduce this slightly in the first day or two while you build stamina and basic technique.",
    },
    {
      question: "What surfboard will I use? Should I bring my own?",
      answer:
        "Most camps provide all necessary equipment — boards, wetsuits, fins, and leashes — and include this in the price. Beginners will be assigned a large foam soft-top (8–10ft) to maximise stability. Intermediate and advanced surfers may be offered a choice of fibreglass boards matched to their level. There is rarely a compelling reason for a beginner or intermediate to travel with their own board; for advanced surfers with a preferred board, it may be worth the airline bag fee depending on the destination.",
    },
    {
      question: "Is yoga included or is it an add-on?",
      answer:
        "This varies significantly by operator. Some camps include daily yoga in all packages as a standard feature; others offer it as an optional paid add-on. If yoga is important to you, look for 'surf and yoga' as a specific camp type — these are designed around the combination from the ground up rather than adding yoga as an afterthought.",
    },
    {
      question: "What is the best surf destination for beginners?",
      answer:
        "Portugal's Silver Coast — particularly around Ericeira and Peniche — is considered one of the world's best beginner and intermediate destinations. The beach breaks are powerful enough to be exciting but forgiving enough to be safe, the infrastructure is exceptional, and the number of English-speaking qualified instructors is unmatched in Europe. For long-haul options, Weligama in Sri Lanka and Kuta in Bali are both widely rated as ideal first-destination surfing locations.",
    },
    {
      question: "How do group sizes at surf retreats typically work?",
      answer:
        "The global standard for guided surf lessons is a maximum of 5–6 students per instructor in the water. Budget camps may push this to 8–10; premium camps offer 2–3 students per instructor or fully private coaching. Smaller groups mean more personal feedback and faster progression. Always check the stated instructor-to-student ratio before booking if progression is your primary goal.",
    },
    {
      question: "Is surf retreat accommodation typically included in the price?",
      answer:
        "Yes — the all-inclusive model (coaching + accommodation + meals + equipment) is the industry standard for surf retreats, particularly at the mid-range and premium end. Budget camps may offer accommodation as a separate optional add-on, allowing experienced surfers to bring their own gear and skip certain included services. Always verify exactly what is included in the quoted price before booking.",
    },
    {
      question: "What should I do if I am significantly better or worse than the rest of my group?",
      answer:
        "Speak to your instructor or camp manager on day one. Good camps run multiple groups at different levels simultaneously, and moving between groups mid-week is usually possible. If you book at the right level to begin with — using honest self-assessment — this rarely becomes an issue. The mistake most people make is underestimating themselves; very few people overestimate.",
    },
  ],

  disclaimer:
    "Surf conditions, camp availability, and pricing change seasonally. The information above is editorial guidance — always verify current conditions and package inclusions directly with your chosen operator before booking.",

  ctaHeading: "Find your surf retreat",
  ctaDescription:
    "Browse surf retreats listed on Abroader, compare operators by destination, or book a free consultation with our team to match the right camp to your level and timeline.",
  ctaLinks: [
    { href: "/retreats/surf", label: "Browse surf retreats", primary: true },
    { href: "/opportunities/surf-instructor-abroad", label: "Become a surf instructor" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/retreats", label: "All retreats" },
    { href: "/opportunities/kitesurfing-camp-abroad", label: "Kitesurfing camps" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
};
