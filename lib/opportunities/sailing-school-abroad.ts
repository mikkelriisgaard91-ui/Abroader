import type { OpportunityLanding } from "./types";

export const SAILING_SCHOOL_ABROAD: OpportunityLanding = {
  slug: "sailing-school-abroad",
  metaTitle: "Sailing school abroad: RYA courses in Greece, Croatia & the BVI | Abroader",
  metaDescription:
    "Get your RYA Day Skipper, Coastal Skipper, or Yachtmaster certification in the Mediterranean or Caribbean. What each qualification lets you do, which schools are worth it, and when to go.",
  heroTitle: "Sailing school abroad",
  heroSubtitle:
    "Learning to sail in warm Mediterranean water, with expert instruction and the Greek islands as your classroom, is one of the great skillcations available to anyone. A week of proper training here does more than years of day-sailing at home — and it ends with a certification that unlocks an entirely different relationship with the ocean.",
  heroImage:
    "https://images.unsplash.com/photo-1500514966906-fe245eea9344?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "White sailing yacht under full sail on turquoise Aegean water with Greek island cliffs behind",
  category: "Skillcation",
  stats: [
    { value: "RYA / IYT / ASA", label: "internationally recognised cert bodies" },
    { value: "5–7 days", label: "typical practical course length" },
    { value: "May – Oct", label: "Mediterranean sailing season" },
    { value: "ICC", label: "required by most European charter companies" },
  ],

  introHeading: "What sailing certification actually unlocks",
  introParagraphs: [
    "Most people who want to sail think the barrier is money. It is not — it is knowledge. The cost of chartering a sailing yacht for a week in Greece or Croatia is comparable to a reasonable hotel. What stops most people from doing it is not the cost but the credentials: most charter companies require an RYA Day Skipper practical certificate (or equivalent IYT or ASA certification) before they will hand you the keys to a 40-foot sailboat. A sailing course abroad gives you exactly that.",
    "The difference between learning to sail in a reservoir near your home city and learning in the Ionian Sea or the Dalmatian coast is not just aesthetic — though it is genuinely that too. The Mediterranean provides the ideal learning environment: consistent summer winds, manageable sea state, clear visibility, and a density of anchorages and marinas that makes every passage a real-world navigation exercise. You are not practising manoeuvres in a controlled environment. You are actually sailing, with all the real decisions that entails, under the guidance of an experienced instructor.",
    "What you will be able to do after a proper RYA Day Skipper course is sail a yacht competently in coastal conditions — plan a passage, read a nautical chart, anchor safely, handle the boat in a marina, and manage the crew in normal and deteriorating weather. That is enough to charter bareboat in Greece, Croatia, and the BVI, and to begin accumulating the sea miles that lead to higher qualifications. It is the beginning of a capability that, for many people, reorients their relationship to travel entirely.",
  ],

  howItWorksHeading: "How to choose and book the right sailing course abroad",
  howItWorks: [
    {
      step: 1,
      title: "Decide which certification you are working toward — it determines everything else",
      body: "RYA Day Skipper practical is the most widely useful first qualification: it is the minimum required by most European bareboat charter companies and is the standard entry point for keelboat sailing. If you want to charter in the Caribbean (BVI, Grenadines), the IYT certification is accepted by most Caribbean charter operators. For US waters, ASA 101/103 is the relevant pathway. Do not book a course until you know which certification you need for your specific goal — the syllabi differ and the wrong certificate may not be accepted by your intended charter company.",
    },
    {
      step: 2,
      title: "Check what is included in the practical certificate — theory and practical are separate",
      body: "The RYA Day Skipper pathway has two components: a shore-based theory course (which you can complete online, typically 40 hours) and a practical course (5 days on the water). Charter companies require the practical certificate, but some also ask for the theory. Complete the theory online before your practical course — it dramatically improves the quality of your on-water experience because you already understand chart work, tidal calculations, and the rules of the road before you are sailing.",
    },
    {
      step: 3,
      title: "Choose the destination for the sailing conditions, not the holiday appeal",
      body: "The Ionian Sea in Greece (May–June, September–October) offers light, consistent winds ideal for first-time sailors — forgiving enough to learn in, interesting enough to feel like real sailing. The Dalmatian coast of Croatia (June–September) is slightly windier with more complex harbour approaches. The British Virgin Islands offer trade-wind sailing year-round with warm water and short passages — excellent for complete beginners but more expensive than Mediterranean options. Avoid peak Mediterranean summer (July–August) for your first course — crowds at anchorages, strong meltemi wind conditions, and higher charter costs make it harder.",
    },
    {
      step: 4,
      title: "Verify the instructor's RYA Yachtmaster Instructor certificate",
      body: "In the RYA system, only RYA Yachtmaster Instructors are authorised to conduct certificated practical courses. Always confirm the instructor has a current Yachtmaster Instructor qualification — not just a Yachtmaster certificate. The distinction matters: a Yachtmaster can sail a yacht brilliantly but is not qualified to assess candidates for certification. Legitimate RYA recognised training centres will provide this information readily.",
    },
    {
      step: 5,
      title: "Plan for the VHF Radio Short Range Certificate — it is often overlooked",
      body: "Many sailors complete their Day Skipper practical and then discover that chartering a boat also requires a VHF Radio Short Range Certificate (SRC) — needed to legally operate a VHF marine radio, which is how you communicate with coastguard, marina control, and other vessels in an emergency. The SRC course is a one-day commitment, typically available at sailing schools alongside the Day Skipper course. Add it to your booking — skipping it is a common and easily avoided oversight.",
    },
  ],

  whyProviders:
    "Sailing certification providers fall into three categories: certification bodies (RYA, IYT, ASA) who set the standards and authorise schools; recognised training centres who deliver the courses; and sailing holiday operators who bundle tuition with the full flotilla or bareboat experience. Use the certification body's own school finder to identify accredited schools in your chosen destination, then evaluate individual instructors and boats before booking.",

  providerGroups: [
    {
      heading: "Certification bodies — find an accredited school",
      intro:
        "These organisations set the certification standards and maintain lists of accredited training centres. Always start here — book with a school that is officially recognised by the relevant body for the certification you need.",
      providers: [
        {
          name: "RYA — Royal Yachting Association",
          description:
            "The RYA is the UK's national authority for recreational boating and the most widely recognised sailing certification body outside North America. RYA Day Skipper, Coastal Skipper, and Yachtmaster certifications are accepted by charter companies across the Mediterranean, Atlantic, and many Caribbean islands. The RYA's website includes a global school finder for RYA Recognised Training Centres — use it to find accredited schools in Greece, Croatia, Turkey, and the BVI. The RYA also offers online theory courses (Day Skipper theory, Coastal Skipper theory) which you should complete before arriving for your practical.",
          tags: ["RYA Day Skipper", "Coastal Skipper", "Yachtmaster", "Global school finder", "Theory online"],
          href: "https://www.rya.org.uk/training/find-a-course",
          category: "certification-body",
          useWhen:
            "You want the most widely recognised sailing certification for Mediterranean and Atlantic chartering — use RYA's school finder to identify accredited centres in your destination.",
        },
        {
          name: "IYT Worldwide",
          description:
            "International Yacht Training certificates are accepted by charter operators in the Caribbean, South Pacific, and many parts of the Mediterranean. IYT has a particularly strong presence in the BVI and Grenada, where Caribbean charter companies often specify IYT as an accepted alternative or requirement alongside or instead of RYA. IYT's school finder covers hundreds of recognised training centres globally. For sailors specifically targeting Caribbean bareboat chartering, IYT is worth investigating alongside RYA.",
          tags: ["IYT certification", "Caribbean charter accepted", "BVI · Grenadines", "School finder", "Global network"],
          href: "https://iytworld.com",
          category: "certification-body",
          useWhen:
            "You are specifically targeting Caribbean bareboat chartering where IYT is commonly accepted, or you want an internationally portable certification across both Med and Caribbean.",
        },
        {
          name: "American Sailing Association (ASA)",
          description:
            "The primary sailing certification body in North America, with ASA 101 (Basic Keelboat), ASA 103 (Basic Coastal Cruising), and ASA 104 (Bareboat Cruising) forming the standard charter qualification pathway. ASA schools operate across the Caribbean, US coastal waters, and increasingly in European locations. For US-based sailors who plan to charter primarily in North America and the Caribbean, the ASA pathway is the most natural route — US charter companies typically require ASA rather than RYA. European destinations increasingly accept ASA at the 103/104 level for bareboat charter.",
          tags: ["ASA 101/103/104", "US and Caribbean focus", "North America primary", "School finder available"],
          href: "https://asa.com/find-a-school/",
          category: "certification-body",
          useWhen:
            "You are a US-based sailor planning to charter primarily in North America or the Caribbean where ASA is the standard required certification.",
        },
      ],
    },
    {
      heading: "Learn-to-sail schools and flotilla operators",
      intro:
        "These operators run sailing courses in Mediterranean and Caribbean destinations — some combining RYA certification with the full flotilla sailing experience, others offering standalone training weeks. Both approaches produce competent sailors; the choice depends on whether you want pure instruction or instruction plus holiday experience.",
      providers: [
        {
          name: "Sunsail Sailing Schools",
          description:
            "Sunsail runs RYA-certificated sailing courses at their own bases in Greece (Lefkas), Croatia (Split), Turkey (Göcek), and the BVI, combined with their flotilla sailing infrastructure. The learn-to-sail format is particularly well-designed for people who want a genuine sailing holiday alongside the certification — you are not in a classroom but on a real yacht, sailing to real destinations. RYA Day Skipper practical courses are the core offering. Accommodation is typically on board the yacht. Best for people who want the certificate and the experience simultaneously rather than a purely instructional environment.",
          tags: ["RYA Day Skipper", "Greece · Croatia · Turkey · BVI", "Live-aboard instruction", "Flotilla experience", "Own bases"],
          href: "https://www.sunsail.com/sailing-school",
          category: "direct-employer",
          useWhen:
            "You want RYA Day Skipper certification combined with a genuine sailing experience — living aboard, sailing to new places, and learning in a real-world context.",
        },
        {
          name: "Medsailors / YachtWeek Learn",
          description:
            "Youth-oriented sailing brands that bundle social sailing holidays with RYA Competent Crew and Day Skipper course elements. The format prioritises experience and social energy over intensive instruction — you will spend more time on social activities and less time in structured teaching than a dedicated sailing school. Best for younger sailors (21–35) who want to learn sailing in a social group format and are as interested in the social experience as the certification. Confirm clearly before booking which specific RYA certificates are formally included versus informally covered.",
          tags: ["Social sailing", "RYA Competent Crew", "Youth-oriented (21–35)", "Mediterranean", "Holiday + learning hybrid"],
          href: "https://www.medsailors.com",
          category: "direct-employer",
          useWhen:
            "You are 21–35, want to learn sailing in a social group environment, and value the social and adventure experience alongside the certification.",
        },
      ],
    },
  ],

  salaryHighlightsHeading: "Which RYA sailing qualification should you aim for?",
  salaryHighlightsIntro:
    "The RYA sailing pathway progresses from Competent Crew (crew member) to Yachtmaster (commercial skipper). Each level unlocks different chartering and sailing rights. Here is what each means practically.",
  salaryHighlights: [
    {
      country: "RYA Competent Crew",
      flag: "⛵",
      salaryRange: "5 days practical",
      salaryLabel: "minimum sea miles: 100nm",
      includes: [
        "Sail, steer, and handle ropes competently",
        "Stand a watch, assist with helming and sail trimming",
        "Not enough for bareboat charter — you are a crew member",
        "Essential foundation before Day Skipper course",
      ],
      badge: "Entry point",
    },
    {
      country: "RYA Day Skipper",
      flag: "🧭",
      salaryRange: "5 days practical + shore-based theory",
      salaryLabel: "minimum sea miles: 200nm (before practical)",
      includes: [
        "Skipper a small yacht in familiar waters by day",
        "Accepted by most European charter companies for bareboat",
        "Plan passages, navigate coastal waters, anchor safely",
        "The primary goal for most people learning to sail",
      ],
      badge: "Unlocks bareboat charter",
    },
    {
      country: "RYA Coastal Skipper",
      flag: "🌙",
      salaryRange: "5 days practical + shore-based theory",
      salaryLabel: "minimum sea miles: 800nm (including 2 night passages)",
      includes: [
        "Skipper offshore and at night",
        "Unlocks larger charter yachts and overnight passages",
        "More complex weather, navigation, and sail trim knowledge",
        "For sailors who want to go beyond coastal day-sailing",
      ],
      badge: "Offshore night sailing",
    },
    {
      country: "RYA Yachtmaster Offshore",
      flag: "🏆",
      salaryRange: "Practical exam (not a course)",
      salaryLabel: "minimum sea miles: 2,500nm (800nm as skipper)",
      includes: [
        "The gold standard recreational and semi-commercial qualification",
        "Commercially endorsed version allows skippered charter work",
        "Full offshore and ocean passage capability",
        "Requires significant sea miles and prior qualifications",
      ],
      badge: "Professional standard",
    },
  ],

  roleTypesHeading: "Which sailing track matches your ambition?",
  roleTypesIntro:
    "People come to sailing courses with very different end goals. The right track depends on what you want to do when the course is over.",
  roleTypes: [
    {
      icon: "🏖️",
      title: "Bareboater — charter your own yacht",
      level: "Entry-mid level",
      keyCerts: ["RYA Day Skipper practical", "RYA Day Skipper theory", "VHF SRC"],
      salaryRange: "Day Skipper + VHF / 6 days total",
      description:
        "Your goal is to book and skipper a bareboat charter in Greece, Croatia, or the BVI — taking friends and family sailing without needing a paid skipper. RYA Day Skipper practical (5 days) plus VHF SRC (1 day) is the standard package to reach this goal. Some charter companies also ask for the Day Skipper shore-based theory certificate. Complete the theory online before your practical course — it reduces on-water confusion and improves the quality of your instruction days significantly.",
    },
    {
      icon: "🌊",
      title: "Ocean Lifestyle Seeker",
      level: "Entry level",
      keyCerts: ["RYA Competent Crew", "RYA Day Skipper (next step)"],
      salaryRange: "Competent Crew / 5 days",
      description:
        "You are drawn to the ocean, to the idea of living aboard or crewing on a passage, and you want to understand what sailing is before committing to a full certification programme. RYA Competent Crew is the right starting point — it teaches you to be a useful crew member on someone else's boat and helps you assess whether you want to pursue the skipper path. Many people start here and quickly realise they want to go further. Others find that crewing satisfies the desire without the responsibility of skippering.",
    },
    {
      icon: "⚓",
      title: "Liveaboard or Long-Passage Sailor",
      level: "Mid level",
      keyCerts: ["RYA Day Skipper", "RYA Coastal Skipper", "Sea miles accumulation"],
      salaryRange: "Multi-year progression",
      description:
        "You want to eventually live aboard a yacht, cross an ocean, or sail extended passages independently. Day Skipper is the starting point, but the real work is accumulating sea miles — the minimum for Yachtmaster Offshore is 2,500nm with 800 as skipper. Sailing holidays and crewing positions (via Crew Seekers or Find a Crew) are how you build sea miles between formal courses. The liveaboard goal takes years, not months — but it is genuinely achievable from a standing start, and the journey is as good as the destination.",
    },
    {
      icon: "💰",
      title: "Skippered Charter Professional",
      level: "Mid-senior level",
      keyCerts: ["RYA Yachtmaster Offshore Commercial Endorsement", "MCA Medical Certificate", "STCW Basic Safety"],
      salaryRange: "£20,000 – £40,000 /year (Mediterranean season)",
      description:
        "You want to earn money as a paid skipper on a charter yacht — taking guests sailing in the Mediterranean or Caribbean. This requires the commercially endorsed Yachtmaster Offshore, a Maritime Coastguard Agency (MCA) medical certificate, and STCW Basic Safety Training. The path takes several years and requires significant sea miles, but professional sailing is a genuine career available to people who start from scratch with Day Skipper training and deliberately accumulate experience. See Abroader's Yacht Crew Jobs page for the full career pathway.",
    },
  ],

  regionsHeading: "Best destinations for a sailing course",
  regionsIntro:
    "The best sailing school destination depends on the certification you want, the conditions you prefer, and what you want to sail after you qualify. Each region below has a distinct character for learning.",

  regions: [
    {
      slug: "greece-sailing",
      name: "Ionian Sea, Greece",
      label: "Greece",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80",
      imageAlt: "White and blue Greek village on a hillside above a calm turquoise bay with sailboats anchored",
      season: "Best: May–Jun and Sep–Oct. Avoid Jul–Aug meltemi winds for first-time courses.",
      body: "The Ionian Sea — Lefkas, Kefalonia, Ithaca, Corfu — is the ideal Mediterranean sailing school environment for beginners and intermediate sailors. The winds are light and consistent in May, June, September, and October: typically 10–20 knots, forgiving enough for beginners but interesting enough for genuine learning. The anchorages are beautiful, accessible, and well-protected. The passages between islands are short enough to complete comfortably in a day. Sunsail operates from Lefkas Marina, one of the largest sailing bases in the Mediterranean. Most RYA Day Skipper practical courses here run five days with four nights aboard — a genuinely transformative week.",
    },
    {
      slug: "croatia-sailing",
      name: "Dalmatian Coast, Croatia",
      label: "Croatia",
      image: "https://images.unsplash.com/photo-1555990793-da11153b2473?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Red-roofed Dubrovnik old city and harbour with sailboats and turquoise Adriatic water",
      season: "Best: Jun–Sep. The Maestral (northwest wind) blows reliably in summer.",
      body: "Croatia's Dalmatian coast offers some of the most beautiful sailing waters in the world — 1,200 islands, countless secluded anchorages, clear Adriatic water, and historic harbour towns. The sailing conditions are slightly more demanding than the Ionian: the bora wind can arrive with little warning, and harbour entries in popular destinations like Hvar and Vis require confident boat handling. For this reason, Croatia is excellent for sailors who have completed Competent Crew and are working toward Day Skipper, or for Day Skipper graduates building confidence. Split and Trogir are the main charter bases.",
    },
    {
      slug: "bvi-sailing",
      name: "British Virgin Islands",
      label: "BVI",
      image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Tropical green hills of the British Virgin Islands with a sailboat anchored in a turquoise bay",
      season: "Best: Nov–Apr (trade wind season, consistent 15–20 knot easterlies).",
      body: "The British Virgin Islands are widely considered the world's best bareboat chartering destination — trade winds blow consistently, passages between islands are short (rarely more than 20 miles), navigation is straightforward, and the anchorages at the Bight on Norman Island, The Baths on Virgin Gorda, and Jost Van Dyke are among the most beautiful in the world. Learning to sail here is a premium experience: the conditions are more consistent than the Mediterranean, the water is warm year-round, and a BVI qualification week feels less like a training course and more like a very purposeful sailing holiday. IYT certification is widely accepted by BVI charter operators.",
    },
    {
      slug: "turkey-sailing",
      name: "Aegean & Lycian Coast, Turkey",
      label: "Turkey",
      image: "https://images.unsplash.com/photo-1586878908496-e6ab8cd3fc79?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Turkish gulet sailing boat anchored in a turquoise cove with pine-covered cliff faces",
      season: "Best: Apr–Jun and Sep–Oct. Turkish coast at its most beautiful in shoulder seasons.",
      body: "Turkey's Aegean and Lycian coastline — Göcek, Marmaris, Bodrum, Fethiye — offers extraordinary sailing in warm, clear water with a different cultural flavour to the Greek islands. The Turkish coast has fewer competing sailors than Greece or Croatia, more secluded anchorages accessible to local knowledge, and traditional gulet sailing culture that adds a distinct character to any passage. RYA courses operate from Göcek and Marmaris. The cost of sailing in Turkey — both the course and the post-qualification charter — is typically 20–30% lower than equivalent Greek or Croatian options. Best for experienced travellers who want the combination of quality sailing and cultural richness away from the mainstream Med sailing circuit.",
    },
    {
      slug: "canaries-sailing",
      name: "Canary Islands, Spain",
      label: "Canaries",
      image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Volcanic Tenerife coastline with dramatic cliffs, black sand beach, and sailboats in the marina",
      season: "Year-round; best Nov–May. November is ARC start month (Atlantic Rally for Cruisers).",
      body: "The Canary Islands are a year-round sailing destination with consistent trade winds, making them both a popular training base and the traditional departure point for Atlantic crossings. Las Palmas (Gran Canaria) and Santa Cruz (Tenerife) have large marinas with well-established sailing schools. For sailors who want to progress beyond Day Skipper and begin building offshore sea miles, the Canaries offer the Atlantic route — south to Cape Verde, then west. The ARC (Atlantic Rally for Cruisers), departing from Las Palmas in November, provides crew berth opportunities for qualified sailors wanting their first ocean passage.",
    },
  ],

  seasonalCalendar: [
    {
      region: "Ionian Sea, Greece",
      months: "May – Jun and Sep – Oct",
      locations: ["Lefkas", "Kefalonia", "Ithaca", "Corfu"],
      notes: "Meltemi winds peak July–August — avoid for first courses. May and September are ideal: light winds, warm, fewer boats at anchorages.",
    },
    {
      region: "Croatia",
      months: "Jun – Sep",
      locations: ["Split", "Trogir", "Hvar", "Dubrovnik"],
      notes: "Maestral northwest wind reliable June–August. Bora gusts can arrive quickly in autumn — best for Day Skipper students in June.",
    },
    {
      region: "BVI",
      months: "Nov – Apr",
      locations: ["Tortola", "Virgin Gorda", "Jost Van Dyke", "Norman Island"],
      notes: "Trade wind season produces the most reliable sailing conditions. Hurricane season (Jun–Nov) — avoid for recreational sailing.",
    },
    {
      region: "Turkey (Göcek / Marmaris)",
      months: "Apr – Jun and Sep – Oct",
      locations: ["Göcek", "Marmaris", "Bodrum", "Fethiye"],
      notes: "April–June and September–October are coolest and least crowded. August is high season with busy anchorages.",
    },
    {
      region: "Canary Islands",
      months: "Year-round (best Nov – May)",
      locations: ["Las Palmas", "Santa Cruz", "La Gomera"],
      notes: "November: ARC Atlantic Rally departs Las Palmas — best time for offshore passage crew opportunities. Trade winds consistent year-round.",
    },
  ],

  goodToKnowHeading: "What most sailing course brochures do not tell you",
  goodToKnow: [
    {
      emoji: "🤢",
      title: "Seasickness — prepare for it before you arrive",
      body: "Seasickness affects approximately 25% of people in moderate sea conditions, even people who have never been sick before. Symptoms begin within the first hour on the water and are worst on the first day. Preparation reduces severity significantly: avoid heavy meals and alcohol the evening before sailing, try acupressure Sea-Bands (worn on both wrists, repositioned correctly), and ask your GP about Stugeron (cinnarizine) tablets — the most effective over-the-counter motion sickness medication for sailing. Looking at the horizon, not reading below deck, and helming the boat (so you are focused on the direction of motion) all help. Do not let anticipated seasickness stop you from doing a course — the majority of people adapt within 24–48 hours.",
    },
    {
      emoji: "📻",
      title: "Get your VHF Radio licence — do not skip it",
      body: "The VHF Short Range Certificate (SRC) is a separate one-day course that is not always included in sailing packages but is legally required to operate a marine VHF radio. Charter companies may not check for it, but coastguard communications, marina entry instructions, and weather broadcasts all rely on VHF radio. More importantly, in an emergency — man overboard, medical situation, collision — VHF is how you call for help. Spend one day on the SRC course alongside your Day Skipper practical. It is inexpensive, fast to obtain, and genuinely important.",
    },
    {
      emoji: "🧭",
      title: "ICC — the certificate charter companies actually check",
      body: "The ICC (International Certificate of Competence) is a standardised document recognised under an UNECE resolution that charter companies and port authorities across Europe use to verify skipper qualifications. An RYA Day Skipper practical certificate qualifies you to apply for an ICC — but the ICC itself requires a separate application (via the RYA in the UK, through a national authority in other countries). Most charter companies in Greece and Croatia will ask for an ICC plus a sailing logbook showing sea miles. Sort the ICC application before you book your first charter — it requires a simple admin step that people frequently forget.",
    },
    {
      emoji: "📖",
      title: "Complete the theory before you arrive on the water",
      body: "The RYA Day Skipper shore-based theory course covers chart work, tidal calculations, the IALA buoyage system, collision regulations, weather interpretation, and pilotage. It is available entirely online and takes 40–50 hours to complete properly. Students who do this before their practical week arrive with the theoretical foundation to understand what they are doing and why. Students who arrive without the theory spend the first two days confused about basic navigation concepts and miss the deeper learning. The theory is not optional — treat it as the first week of a two-week course.",
    },
    {
      emoji: "⛽",
      title: "Sailing in light winds is harder than it looks",
      body: "Television sailing shows feature boats heeled over in 20 knots of wind, spray flying, sails perfectly trimmed. Most beginners are surprised to discover that sailing in light winds (5–10 knots) is significantly harder — the boat barely moves, sails need constant attention, and patience is the primary skill required. Your instructors will teach you in conditions that are appropriate for your level. What matters is that you understand the full range — from drifting in light air to reefing in 20+ knots — before you take a charter yacht out independently.",
    },
  ],

  faqHeading: "Common questions about sailing courses abroad",
  faqIntro: "Practical answers for people planning their first sailing qualification.",
  faqs: [
    {
      question: "Do I need any sailing experience before a Day Skipper course?",
      answer:
        "The RYA recommends 5 days and 100 sea miles prior experience before the Day Skipper practical course — typically gained through a Competent Crew course (also 5 days). Some schools accept complete beginners onto combined Competent Crew + Day Skipper packages (10 days total). If you have sailed before but never formally — on a friend's boat, for example — log the days and estimate sea miles, as this experience counts toward the prerequisite.",
    },
    {
      question: "What does a Day Skipper certificate actually let me charter?",
      answer:
        "An RYA Day Skipper practical certificate plus the ICC (International Certificate of Competence) allows you to charter a bareboat yacht (without a paid skipper) from most European charter companies — typically up to around 50 feet in length for coastal day sailing. Some companies also require the shore-based theory certificate and a sailing logbook showing minimum sea miles. Specific requirements vary by charter company, so always confirm before booking. Day Skipper does not permit offshore or night sailing on its own — for overnight passages you need Coastal Skipper.",
    },
    {
      question: "What is the difference between RYA, IYT, and ASA certifications?",
      answer:
        "RYA (Royal Yachting Association) is the UK standard and is widely accepted across Europe, the Atlantic, and many other regions. IYT (International Yacht Training) is a rival body that is well-accepted in the Caribbean and Pacific. ASA (American Sailing Association) is the North American standard and is primarily used for chartering in US and Caribbean waters. Most European charter companies accept RYA and IYT. Caribbean charter companies vary — some specify RYA, some IYT, some accept both. Always confirm with your intended charter company before choosing a certification pathway.",
    },
    {
      question: "Is seasickness likely to be a problem?",
      answer:
        "It is a possibility but not a certainty. Research suggests roughly 25% of people experience meaningful seasickness in moderate sea conditions. The first day is always the hardest. Preparation (ginger tablets or Stugeron medication, acupressure bands, staying on deck, looking at the horizon) reduces symptoms significantly. The vast majority of people who experience seasickness on the first day are fine by day two or three as their vestibular system adapts. Do not let the possibility of seasickness prevent you from attempting a sailing course — it rarely ends a course early.",
    },
    {
      question: "How long does it take to go from complete beginner to chartering independently?",
      answer:
        "The realistic minimum pathway is: Competent Crew (5 days) + Day Skipper theory (online, 40 hours self-study) + Day Skipper practical (5 days) + VHF SRC (1 day) = roughly 2 weeks of formal training. Some people complete all of this within a single trip abroad. You then need to apply for the ICC, which is a paper process. From starting to chartering independently: as little as 3–4 months if you are motivated. Most people take 6–12 months from first course to first independent charter, factoring in finding time to travel.",
    },
    {
      question: "Is sailing abroad more expensive than learning at home?",
      answer:
        "The direct course costs are often comparable or cheaper for Mediterranean courses versus UK courses. What is different is the living cost and flights. However, the quality and speed of learning in warm-water destinations with consistent winds is meaningfully higher — what takes 5 days in the Mediterranean might take 7–10 days in British waters due to weather disruptions and cold that slows boat handling practice. Most people who do RYA courses in Greece or Croatia report feeling more competent after 5 days there than they would have in 10 days at a UK sailing school.",
    },
    {
      question: "Can I sail without being certified — do I need qualifications to charter?",
      answer:
        "In international waters, there is technically no law requiring a charter skipper to hold a certification. In practice, all professional charter companies require proof of competence — typically an ICC and logbook at minimum — to release a bareboat yacht. Sailing without qualifications on a charter boat voids your insurance in most cases. More importantly, sailing without proper training puts you, your crew, and other water users at risk. The certifications exist because sailing competently is genuinely more complex than it appears from the outside.",
    },
    {
      question: "Can I combine a sailing course with a flotilla sailing holiday?",
      answer:
        "Yes — this is exactly what operators like Sunsail offer. A flotilla sailing holiday involves a group of yachts sailing together between destinations with a lead boat (the flotilla leader) providing navigation support and assistance. First-timers without a Day Skipper certificate can join a flotilla as part of a learn-to-sail programme, where instruction happens throughout the week alongside the sailing. It is a highly effective format — you are learning on the move, which means the contexts (anchoring, marina entry, passage planning) are varied and real rather than repeated in a training environment.",
    },
  ],

  youtubeVideosHeading: "Watch before you sail",
  youtubeVideos: [
    {
      videoId: "0bVzQzEGkuk",
      title: "RYA Day Skipper course — what to expect",
      channelName: "Sunsail",
      description: "A walk-through of what an RYA Day Skipper practical course looks like in practice — the five days, the skills covered, and what you leave with.",
    },
    {
      videoId: "FLHpDGoU1Xw",
      title: "Sailing in Greece — why the Ionian is perfect for beginners",
      channelName: "Sailing La Vagabonde",
      description: "Why the Ionian Sea is the ideal Mediterranean sailing school environment — light winds, beautiful anchorages, and accessible passages.",
    },
    {
      videoId: "eXwPGANg6ME",
      title: "From zero to bareboat charter — my sailing certification journey",
      channelName: "Beau and Brandy",
      description: "One person's honest account of the complete pathway from complete beginner to chartering a yacht in the BVI.",
    },
  ],

  disclaimer:
    "RYA certification requirements and charter company policies change regularly. The ICC application process and specific acceptance of certifications by charter companies varies by region and operator — always confirm current requirements directly with your intended charter company before booking a course. Visa requirements for sailing in foreign territorial waters vary by nationality.",

  ctaHeading: "Find your sailing course abroad",
  ctaDescription:
    "Use the RYA school finder to locate accredited training centres, or explore related ocean lifestyle opportunities on Abroader.",
  ctaLinks: [
    { href: "https://www.rya.org.uk/training/find-a-course", label: "Find an RYA school", primary: true },
    { href: "/opportunities/yacht-sailing-crew-jobs", label: "Yacht crew jobs" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
  relatedLinks: [
    { href: "/opportunities/yacht-sailing-crew-jobs", label: "Yacht & sailing crew jobs" },
    { href: "/opportunities/sailboat-living-abroad", label: "Sailboat living abroad" },
    { href: "/opportunities/adventure-certification-abroad", label: "Adventure certification trips" },
  ],
};
