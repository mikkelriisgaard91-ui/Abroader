import type { OpportunityLanding } from "./types";

export const SURF_INSTRUCTOR_ABROAD: OpportunityLanding = {
  slug: "surf-instructor-abroad",
  metaTitle: "Surf instructor jobs abroad | Abroader",
  metaDescription:
    "How to become a paid surf instructor abroad. Compare ISA and ASI certification paths, training-with-placement courses, and camps hiring in Portugal, Bali, Sri Lanka and Morocco.",
  heroTitle: "Surf instructor jobs abroad",
  heroSubtitle:
    "Teaching surfing overseas is one of the most in-demand seasonal roles in adventure travel. Here is how the path actually works — from getting your ISA or ASI certification to landing a paid camp position in Portugal, Bali, Sri Lanka, or Morocco.",
  heroImage:
    "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Surfer carrying a longboard along a sunlit beach",
  category: "Work Abroad",
  stats: [
    { value: "7", label: "providers compared" },
    { value: "4", label: "top destinations" },
    { value: "ISA / ASI", label: "recognized worldwide" },
    { value: "3–12 mo", label: "typical contracts" },
  ],

  introHeading:
    "What working as a surf instructor abroad actually looks like",
  introParagraphs: [
    "Working as a surf instructor abroad means getting paid to teach guests how to surf at camps, surf schools, and beach resorts in some of the world's best wave destinations. It is a legitimate seasonal career, not just a gap-year fantasy: demand for qualified instructors has grown year on year as the global surf camp industry has expanded, and most reputable employers now require formal certification before you set foot in the water with a group.",
    "The day-to-day role typically involves running beginner and intermediate lessons, conducting beach safety assessments, and — depending on the camp — leading sunset sessions, coaching multi-day progression programmes, or supporting yoga-surf retreats. A full-time position usually comes with accommodation, often meals, and a monthly wage that varies by country and employer. Seasonal contracts run from three months to a full year, and many instructors chain destinations across seasons to work almost continuously.",
    "If you are starting from scratch, the path looks like this: earn a water safety or lifeguard credential first, then complete an ISA Level 1 (or ASI equivalent) instructor course, then apply to surf camps or use a specialist job board. If you already surf confidently and want a faster pipeline, training-with-placement providers like Outer Reef combine certification with post-course job support. Either way, the resources below cover each stage of that journey.",
  ],

  howItWorks: [
    {
      step: 1,
      title: "Get your water safety credential",
      body: "Most established surf camps require a national lifeguard or first aid certificate alongside — or before — your instructor qualification. Check which standard your target employer recognises before booking.",
    },
    {
      step: 2,
      title: "Complete an ISA or ASI instructor course",
      body: "ISA Level 1 opens doors globally; ASI Level 1 is the go-to in Oceania and is accepted in parts of Europe. Level 2 unlocks intermediate and advanced coaching roles and increases your earning potential significantly.",
    },
    {
      step: 3,
      title: "Search job boards or apply direct to camps",
      body: "Surf-Jobs.com and Abroader's seasonal board give you the widest view of what is currently hiring. Direct applications to camps like Rapture or Kima are worth pursuing in parallel — not all roles are publicly posted.",
    },
    {
      step: 4,
      title: "Secure a seasonal contract",
      body: "Contracts typically run three to six months, often renewable. Review what is included (accommodation, meals, equipment) alongside the headline wage — the full package matters more than salary alone.",
    },
    {
      step: 5,
      title: "Build across seasons and destinations",
      body: "Each season adds experience that compounds: better references, more refined technique coaching, and access to head coach or camp manager roles. Many full-time surf instructors plan a two-destination year to stay busy year-round.",
    },
  ],

  whyProviders:
    "The resources on this page fall into three distinct categories: official certification bodies that issue the qualification, training providers that combine instructor courses with job placement support, and job boards or direct employers that help you find a paid role once you are certified. Most people need two or three of these at different stages. ISA or ASI gives you the credential; Surf-Jobs.com shows you what is hiring; Rapture or Kima can hire you directly. We list all three types so you can see the full picture without having to piece it together yourself.",

  providerGroups: [
    {
      heading: "Get certified — official certification bodies",
      intro:
        "These organisations issue the qualifications that most surf camp employers worldwide require. They do not place you into jobs — they set the standard and accredit the courses you take. Start here if you do not yet hold a recognised instructor certificate.",
      providers: [
        {
          name: "ISA — International Surfing Association",
          description:
            "The global governing body for surf instruction, recognised by the IOC. ISA Level 1 and Level 2 certifications are the industry standard required by the majority of camps and surf schools worldwide. ISA accredits course presenters in over 80 countries, so you can train almost anywhere and be recognised almost everywhere.",
          tags: ["Global standard", "80+ countries", "Level 1 & 2", "IOC recognised"],
          href: "https://isasurf.org/learning/isa-coaching/",
          category: "certification-body",
          useWhen:
            "You want the most universally accepted instructor certification, or you plan to work in multiple countries over your career.",
        },
        {
          name: "ASI — Academy of Surfing Instructors",
          description:
            "Australia's primary surf certification body, widely accepted across Oceania and increasingly recognised in parts of Europe and Asia. ASI Level 1 and Level 2 are the natural choice if you are based in Australia or New Zealand, or planning to work that region. ASI also lists live instructor vacancies directly on its site, which bridges certification and job search in one place.",
          tags: ["Australia", "New Zealand", "Europe accepted", "Job listings"],
          href: "https://www.academyofsurfing.com/news/jobs-surfing-sup-instructors-wanted",
          category: "certification-body",
          useWhen:
            "You are Australia or New Zealand-based, or targeting the Oceania market as your primary destination.",
        },
      ],
    },
    {
      heading: "Train and get placed — courses with job support",
      intro:
        "These providers combine the instructor certification course with structured support for finding your first paid position. They are the most efficient option if you are starting from scratch and want a clear pipeline from training to employed season.",
      providers: [
        {
          name: "Outer Reef Surf Academy",
          description:
            "ISA-certified instructor training with dedicated post-course job placement support built into the programme. Courses run across Wales, France, Spain, Portugal, and Bali, ranging from one to twelve weeks depending on the certification level. Over 4,500 graduates since 1999. The placement support means you are not left to find work alone after qualifying — they actively connect graduates with hiring camps.",
          tags: [
            "ISA certified",
            "Placement support",
            "Portugal · Bali · France",
            "1–12 week courses",
            "4,500+ graduates",
          ],
          href: "https://www.surf-school-alliance.org/surf-instructor-courses/become-a-surf-instructor/",
          category: "training-placement",
          useWhen:
            "You are starting from zero and want a structured path from training straight into your first paid season.",
        },
      ],
    },
    {
      heading: "Find paid roles — job boards and direct employers",
      intro:
        "Once you hold your certification, these are the places to find open positions. Job boards give you the widest view of the market; direct employers let you apply to specific camps you want to work for. Both approaches are worth running in parallel.",
      providers: [
        {
          name: "Surf-Jobs.com",
          description:
            "The most active dedicated job board for surf professionals. Lists paid instructor, camp manager, and surf host roles at schools and camps worldwide, updated daily with live 2026 openings. Free to browse without creating an account. The search filters by role type and location, making it easy to scan what is hiring in a specific destination this season.",
          tags: [
            "Global job board",
            "Updated daily",
            "Free to browse",
            "All roles",
          ],
          href: "https://www.surf-jobs.com/job-category/surf-instructor-jobs/",
          category: "job-board",
          useWhen:
            "You are certified and want the widest view of what is currently hiring in your target destination.",
        },
        {
          name: "Rapture Surfcamps",
          description:
            "A multi-destination camp operator with established bases in Bali, Portugal, and Sri Lanka. Rapture recruits certified instructors seasonally with paid positions that include accommodation and meals. Applying directly to an operator of this scale means your role comes with structure, a team around you, and a recognisable brand on your CV when you move to the next season.",
          tags: [
            "Direct employer",
            "Bali · Portugal · Sri Lanka",
            "Seasonal paid",
            "Accommodation included",
          ],
          href: "https://www.rapturesurfcamp.com",
          category: "direct-employer",
          useWhen:
            "You hold your cert and want a reliable employer with camps in multiple destinations and a proven track record.",
        },
        {
          name: "Kima Surf (Sri Lanka & Bali)",
          description:
            "Actively recruiting experienced expat head coaches for their Sri Lanka and Bali operations. Kima runs on a coliving model, meaning the instructor team shares accommodation on-site — good for community, harder to switch off. The roles tend to be senior positions: they are looking for people who can coach independently and take on some camp management responsibility, not first-season instructors.",
          tags: [
            "Sri Lanka",
            "Bali",
            "Senior / head coach roles",
            "Coliving team model",
          ],
          href: "https://www.surf-jobs.com",
          category: "direct-employer",
          useWhen:
            "You have at least one full season of experience and want a lead or head coach position with a team-living setup.",
        },
        {
          name: "Abroader — Seasonal Hospitality Jobs",
          description:
            "Abroader's seasonal jobs board covers surf instructor and watersports roles alongside broader hospitality and outdoor positions. Useful as a secondary browse, especially for roles that sit at the intersection of surf and camp management, or for comparing what other seasonal outdoor roles are paying in the same region at the same time.",
          tags: ["Abroader listed", "Live roles", "Multiple destinations"],
          href: "/hospitality",
          category: "aggregator",
          useWhen:
            "You want to compare surf instructor roles against other seasonal options, or find roles that blend surf with camp management.",
        },
      ],
    },
  ],

  regionsHeading: "Where surf instructor jobs are most in demand",
  regionsIntro:
    "Demand concentrates in a handful of destinations with the right combination of learnable waves, established camp infrastructure, and strong international traveller numbers. Here is what you need to know about each.",

  regions: [
    {
      slug: "portugal",
      name: "Portugal",
      label: "Portugal",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Atlantic surf breaking on a sandy Portuguese beach",
      season: "Peak: April – October",
      body: "Portugal is the most established base for surf instructor jobs in Europe. The Atlantic coastline delivers consistent, learnable swell year-round, with the busiest camp season running April through October. Ericeira — a designated World Surfing Reserve — hosts a concentration of camps catering to beginner and intermediate guests, which is exactly the demographic instructors spend most of their time with. Sagres in the Algarve pulls a slightly more adventurous crowd and holds its season well into the shoulder months. EU nationals have clear work access; non-EU instructors should confirm their work authorisation before signing a contract. Typical wages run €800–€1,400 per month with accommodation included.",
      relatedHref: "/retreats/surf",
      relatedLabel: "Surf retreats in Portugal",
    },
    {
      slug: "bali",
      name: "Bali, Indonesia",
      label: "Bali",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Tropical waves rolling toward the shore at dusk in Bali",
      season: "Peak: April – October (dry season)",
      body: "Bali has the highest volume of surf camps outside Europe, concentrated in Canggu and Kuta. The density of operators means more open roles, but also more competition. The dry season (April–October) is peak hiring; camps do continue through the wet months but at reduced capacity. Most employers want a three-month minimum commitment. The visa and work permit situation for foreign instructors in Indonesia is not straightforward — requirements change, and enforcement varies by region. Talk to your employer about the correct permit before you arrive; reputable camps will guide you through this.",
    },
    {
      slug: "sri-lanka",
      name: "Sri Lanka",
      label: "Sri Lanka",
      image:
        "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Clear blue water and palm-fringed coastline in Sri Lanka",
      season: "South coast: Nov – Apr · East coast: May – Oct",
      body: "Sri Lanka is one of the fastest-growing markets for surf instructor work. Weligama Bay on the south coast is the epicentre of beginner instruction — the waves are gentle, consistent, and ideal for teaching — with a cluster of well-run camps operating from November through April. Arugam Bay on the east coast has its own swell window from May to October. The two-coast calendar means an instructor who plans their year across both can work with minimal gaps. Demand is strong and growing, but wages are still developing relative to the cost of living in some camp towns — read contracts carefully and factor in what accommodation is worth.",
      relatedHref: "/co-living",
      relatedLabel: "Co-living spaces near surf",
    },
    {
      slug: "morocco",
      name: "Morocco",
      label: "Morocco",
      image:
        "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Surfer on an Atlantic wave at Taghazout, Morocco at sunset",
      season: "Peak: September – April",
      body: "Taghazout, just north of Agadir, is Morocco's surf capital and a natural winter base for European instructors who follow the sun south. Atlantic swells are most reliable from September through April, making this the flip-side of Portugal's season and allowing instructors to stack both destinations back-to-back in a single year. Many camps in Taghazout combine surf and yoga, so instructors with a yoga background or teaching interest have a genuine advantage. The instructor community is tight-knit. Wages are modest in absolute terms; accommodation is almost always included in contracts. Abroader's co-living guide to Taghazout covers the broader area in more detail.",
      relatedHref: "/co-living/taghazout",
      relatedLabel: "Co-living in Taghazout",
    },
  ],

  faqHeading: "Frequently asked questions",
  faqIntro:
    "Answers to the questions we hear most often about working as a surf instructor abroad.",
  faqs: [
    {
      question: "Do I need a surf instructor certification to work abroad?",
      answer:
        "Almost all established surf camps require it. ISA Level 1 or ASI Level 1 are the most widely recognised internationally. Some smaller independent schools may hire experienced surfers without formal certification, but those positions are harder to find, rarely advertised publicly, and often come without employment protections or reliable pay. Starting with a certification is worth the investment.",
    },
    {
      question: "What is the difference between ISA and ASI?",
      answer:
        "ISA (International Surfing Association) is the global governing body recognised by the IOC — its certifications are accepted by employers in the widest range of countries. ASI (Academy of Surfing Instructors) is the Australian certification body, broadly accepted across Oceania and increasingly recognised in Europe. Both are legitimate routes to employment; the choice typically comes down to geography and where you intend to work most.",
    },
    {
      question:
        "Do I need a lifeguard or first aid certification as well?",
      answer:
        "Most reputable employers require a national lifeguard or first aid certificate alongside your surf instructor qualification — you will typically be the first responder if something goes wrong in the water. Check the specific requirements with your employer or course provider before booking your instructor training, as the required standard varies by country.",
    },
    {
      question: "What do surf instructor wages look like abroad?",
      answer:
        "Pay varies considerably by destination. Portugal typically runs €800–€1,400 per month with accommodation; Bali and Sri Lanka pay less in absolute terms but align with local costs. Morocco contracts usually include accommodation and meals alongside a modest wage. The full package value — salary plus housing plus meals — matters more than the headline number alone. Always clarify what is included before signing.",
    },
    {
      question:
        "Which destinations hire year-round, and how do instructors stay employed?",
      answer:
        "No single destination reliably hires year-round. Most full-time instructors chain destinations across seasons: Europe (April–October), Morocco (September–April), Sri Lanka south coast (November–April), Sri Lanka east coast (May–October), Bali during the dry season (April–October). Planning a two-destination year is the most common way experienced instructors stay in continuous work.",
    },
    {
      question: "Does Abroader employ surf instructors directly?",
      answer:
        "No. Abroader is a discovery and comparison platform. We list certification bodies, training providers, job boards, and direct camp employers so you can find the right route for your situation. All applications go through the individual providers listed on this page.",
    },
  ],

  disclaimer:
    "Visa and work permit requirements vary by nationality and change frequently. The information above is editorial guidance only — always verify current requirements with the relevant employer or official government source before accepting a contract abroad.",

  howItWorksHeading: "How to become a surf instructor abroad",

  ctaHeading: "Find your first surf instructor role abroad",
  ctaDescription:
    "Browse live seasonal roles, compare surf retreats, or book a free consultation with the Abroader team to map out your route abroad.",
  ctaLinks: [
    { href: "/hospitality", label: "Browse seasonal jobs", primary: true },
    { href: "/retreats/surf", label: "Surf retreats" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/volunteering", label: "Volunteering" },
    { href: "/co-living/taghazout", label: "Taghazout co-living" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
};
