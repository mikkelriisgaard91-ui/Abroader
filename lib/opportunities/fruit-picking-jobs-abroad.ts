import type { OpportunityLanding } from "./types";

export const FRUIT_PICKING_JOBS_ABROAD: OpportunityLanding = {
  slug: "fruit-picking-jobs-abroad",
  metaTitle: "Fruit picking jobs abroad: countries, pay & how to find work | Abroader",
  metaDescription:
    "A complete guide to fruit picking and harvest work abroad — Australia, New Zealand, Canada, Spain, France, and beyond. Understand what the work actually pays, how to find it, and what the physical reality looks like.",
  heroTitle: "Fruit picking jobs abroad",
  heroSubtitle:
    "Seasonal harvest work is one of the most straightforward ways to fund extended travel — no qualifications required, immediate start, and cash in hand at the end of the week. Here is where to go, when to go, and how to find legitimate work before the season starts.",
  heroImage:
    "https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&w=1600&q=85",
  heroImageAlt: "Worker picking ripe red apples in an orchard with rows of trees",
  category: "Work Abroad",
  stats: [
    { value: "No quals needed", label: "for most harvest roles" },
    { value: "AUD 24–32", label: "hourly rate in Australia" },
    { value: "4–16 weeks", label: "typical seasonal contract length" },
    { value: "88 days", label: "regional work for Australian WHV second year" },
  ],

  introHeading: "What fruit picking abroad actually involves — and who it suits",
  introParagraphs: [
    "Fruit picking and harvest work is the most accessible form of paid seasonal work available internationally — no qualifications, no experience, and in many cases no language skills are required beyond functional communication on the job. You show up, you pick, you get paid, usually weekly or fortnightly. For budget travellers and working holiday visa holders, it is the most reliable way to earn while moving — particularly in Australia, where 88 days of regional agricultural work qualifies your second-year visa extension, adding another 12 months of working holiday rights.",
    "The physical reality is harder than the lifestyle framing suggests. Fruit picking is outdoor manual labour in all weathers — bent at the waist in blueberry fields, on a ladder in apple orchards, kneeling in strawberry rows. The pace is typically piece-rate: you are paid per bin, box, or kilogram picked, which means your daily earnings depend directly on your speed and endurance. Experienced pickers consistently out-earn beginners by a factor of two or three in the first weeks. The work gets physically easier as you adapt — most people find their productivity doubles in the first two weeks — but the initial period is a genuine shock if you have not done agricultural labour before.",
    "The destinations with the most structured fruit picking markets for international workers are Australia (the most important globally), New Zealand, Canada, Spain, France, and Germany. Each has its own crop calendar, visa framework, and accommodation situation. Australia and New Zealand are the most organised — the Harvest Trail (Australia) and Pick NZ (New Zealand) are government-supported systems specifically designed to connect international workers with farm employers. France's vendange (grape harvest) is the most culturally known. Spain's strawberry season in Huelva is one of Europe's largest agricultural employment operations.",
  ],

  howItWorksHeading: "How to find and start fruit picking work abroad",
  howItWorks: [
    {
      step: 1,
      title: "Get your working holiday visa sorted first",
      body: "The vast majority of fruit picking abroad is done on working holiday visas — Australia (subclass 417/462), New Zealand (Working Holiday Visa), Canada (IEC), and similar schemes. These visas require application in advance, and in the case of Australia, you must apply before your 31st birthday (35 for some nationalities) for a first-time WHV. Do not book flights before your visa is granted. Processing is usually 2–8 weeks but can be longer.",
    },
    {
      step: 2,
      title: "Research the crop calendar for your destination and target region",
      body: "Harvest work is intensely seasonal — arrive in the right place at the wrong time of year and there is nothing to pick. Australia's east coast Harvest Trail runs roughly from Queensland (October–January) south through NSW (November–March) and into Victoria (February–May), following the crops. New Zealand apple picking is concentrated in Hawke's Bay and Marlborough from February to May. France's vendange is almost entirely September through October. Map your destination, crop, and timing before you book anything.",
    },
    {
      step: 3,
      title: "Register on government harvest databases and specialist job boards",
      body: "Australia's Harvest Trail (jobsearch.gov.au/harvesttrail) is the official national resource, listing farms by region and crop. Pick NZ (picknz.co.nz) does the same for New Zealand. In both countries, registering in advance of the season opening is valuable — some farms are oversubscribed. In Europe, EURES (the EU employment services network) lists harvest vacancies across member states. Third-party boards like Seasonalwork.com and Fruit-Picking.co.uk also list roles.",
    },
    {
      step: 4,
      title: "Arrange accommodation separately — it is rarely guaranteed",
      body: "Farm accommodation (on-site or nearby) is available at some properties and is a meaningful advantage — it eliminates transport costs and housing stress in rural areas where options are limited. But it is not universal. Confirm accommodation status with the farm before accepting a position, and if no on-site housing is provided, research the nearest town's options before you arrive. In Australia's most active harvest regions (Mildura, Shepparton, Bundaberg), accommodation can be tight during peak season.",
    },
    {
      step: 5,
      title: "Arrive fit and realistic about the learning curve",
      body: "Your first week picking will be physically demanding and your earnings will be low if on piece rates. This is normal. Most pickers find their rhythm in week two and productivity improves substantially by week three. Bring sun protection, appropriate work clothing (long sleeves for arms, sturdy work shoes), a personal water supply, and any pain relief you need for back and knee muscle soreness. Treat it as a physical adaptation period, not a measure of whether the decision was right.",
    },
  ],

  whyProviders:
    "Harvest work resources split into three types: government-run job match systems (Australia's Harvest Trail, New Zealand's Pick NZ) which are the most reliable for official farm employer listings; specialist job boards that aggregate roles alongside travel guides and accommodation advice; and farm operators and harvest labour contractors who hire directly. Using government resources alongside specialist boards covers the market most effectively.",

  providerGroups: [
    {
      heading: "Government harvest programmes — the official routes",
      intro:
        "These government-supported systems are the most reliable starting point for finding legitimate, paid harvest positions. They list verified farm employers and include information on visa requirements, regional pay rates, and accommodation availability.",
      providers: [
        {
          name: "Harvest Trail — Australian Government",
          description:
            "The Australian Government's official harvest labour information system, operated through the Department of Employment and Workplace Relations. The Harvest Trail website maps seasonal crop demand across all Australian states and territories, linking to live job listings on the government's Jobs in Australia platform. It is the definitive resource for matching your arrival timing with crop demand across Australia's agricultural regions — Queensland bananas, Victoria stone fruit, SA wine grapes, WA horticulture, and more. The portal also confirms which regions and roles qualify for the 88-day regional work credit that unlocks a second-year Australian Working Holiday Visa.",
          tags: ["Official Australian Government", "All states and crops", "WHV second year info", "Verified employers", "Free to use"],
          href: "https://www.jobsearch.gov.au/harvesttrail",
          category: "government-programme",
          useWhen:
            "You are in Australia on a Working Holiday Visa and want an authoritative map of which regions and crops are active, and which qualify for your 88-day second-year requirement.",
        },
        {
          name: "Pick NZ — New Zealand Horticulture",
          description:
            "The New Zealand horticulture industry's official labour matching service, connecting Working Holiday Visa holders and RSE (Recognised Seasonal Employer) scheme workers with fruit and vegetable growers across New Zealand. Strong coverage of Hawke's Bay (apples, pears), Marlborough (grapes, kiwifruit), Nelson (apples, hops), and Bay of Plenty (kiwifruit). Includes an online job board, regional accommodation guides, and practical information for RSE workers and WHV holders. New Zealand's WHV is accessible to citizens of over 40 countries.",
          tags: ["Official NZ horticulture", "WHV + RSE scheme", "Regional guides", "Hawke's Bay · Marlborough", "Online job board"],
          href: "https://www.picknz.co.nz",
          category: "government-programme",
          useWhen:
            "You are in New Zealand on a Working Holiday Visa and want the official starting point for connecting with fruit and vegetable growers.",
        },
        {
          name: "EURES — European Jobs Network (Agriculture)",
          description:
            "EURES is the EU employment portal that facilitates free movement of workers across European Economic Area member states. The agriculture section lists seasonal harvest positions across France (grapes, vegetables), Spain (strawberries, citrus, tomatoes), Germany (asparagus, wine grapes), and other EU member states. Particularly useful for non-EU workers who hold the right to work in one EU state and are exploring options across the bloc. Also lists the EU's own seasonal worker directive guidance for non-EU nationals.",
          tags: ["EU employment portal", "Cross-border EEA", "Agriculture section", "France · Spain · Germany", "Free to use"],
          href: "https://eures.ec.europa.eu/jobs-and-aps/eures-job-mobility-portal_en",
          category: "government-programme",
          useWhen:
            "You are an EU national or have EU work rights and want to compare harvest opportunities across multiple European countries.",
        },
      ],
    },
    {
      heading: "Specialist job boards and harvest directories",
      intro:
        "These independent platforms provide additional listings, destination guides, and community information alongside government databases. Particularly useful for understanding pay rates, accommodation options, and farm working conditions before you commit.",
      providers: [
        {
          name: "Seasonalwork.com",
          description:
            "A UK-focused seasonal work database with a strong agricultural and harvest section covering Australia, New Zealand, Canada, and Europe. Lists farm positions alongside accommodation options, practical visa guides, and reader forums where working holiday travellers share current conditions at specific farms and regions. Particularly useful for Australian WHV holders tracking down which specific farms and contractors are reliable and which to avoid — the community intelligence is more current than official databases.",
          tags: ["UK-focused WHV resource", "Australia · NZ · Canada · Europe", "Community forums", "Accommodation guides", "Farm reviews"],
          href: "https://www.seasonalwork.com.au",
          category: "job-board",
          useWhen:
            "You want community intelligence on specific Australian and New Zealand farms and regions alongside official job listings.",
        },
        {
          name: "Fruit Picking Jobs (fruit-picking.co.uk)",
          description:
            "A UK-based directory of fruit picking and harvest opportunities abroad, with editorial guides on working in Australia, New Zealand, Canada, and Europe. Lists seasonal positions from farm operators and labour contractors, alongside visa guides, accommodation information, and typical pay rate comparisons by country and crop type. Particularly useful for first-timers planning their first harvest experience who need the full picture before committing.",
          tags: ["UK-based directory", "Editorial guides", "Australia · NZ · Canada · Europe", "Pay rate comparisons", "Visa information"],
          href: "https://www.fruitpickingjobs.co.uk",
          category: "job-board",
          useWhen:
            "You are a UK-based first-timer researching harvest work options and want editorial guides alongside job listings.",
        },
        {
          name: "Backpacker Job Board — Australia",
          description:
            "A community-driven job board popular with backpackers in Australia listing farm work, harvest, and rural labour positions alongside hospitality and other seasonal roles. Strong real-time coverage of current farm vacancies across the east coast — posts are fresher than government databases, which can lag behind actual farm demand. Used widely by travellers already in Australia looking for work quickly rather than planning months ahead. Free to browse.",
          tags: ["Australia focused", "Real-time listings", "Community-driven", "East coast strength", "Free to browse"],
          href: "https://www.backpackerjobboard.com.au",
          category: "job-board",
          useWhen:
            "You are already in Australia and need current, real-time farm and harvest job listings quickly.",
        },
      ],
    },
  ],

  regionsHeading: "Where fruit picking jobs are most in demand",
  regionsIntro:
    "Harvest work follows crops — which means timing and location are everything. These are the most important markets for international harvest workers, with the specific windows when picking demand peaks.",

  regions: [
    {
      slug: "australia-east-coast",
      name: "Australia — East Coast Harvest Trail",
      label: "Australia",
      image:
        "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Australian fruit farm with rows of trees in morning light and red soil",
      season: "October – May (north to south)",
      body: "Australia's east coast harvest trail is the most important market for international fruit pickers globally. The season follows geographic logic: Queensland (bananas, mangoes, tomatoes) peaks October through January; the Hunter Valley and Riverina in NSW (wine grapes, stone fruit, vegetables) runs November through March; the Goulburn Valley and Mildura in Victoria (stone fruit, wine grapes, citrus) peaks February through May. Working this trail sequentially — moving south as each region's season peaks — allows continuous employment from October to May. The critical practical point: 88 days of regional agricultural work with a recognised employer qualifies a Working Holiday Visa holder for a second-year visa extension. Bundaberg (QLD), Mildura (VIC), and Shepparton (VIC) are the three highest-demand nodes. Wages are set by the Horticulture Award — typically AUD 24–32 per hour, higher with piece-rate bonuses.",
      relatedHref: "/opportunities/farm-work-abroad",
      relatedLabel: "Farm work abroad guide",
    },
    {
      slug: "new-zealand",
      name: "New Zealand — Hawke's Bay, Marlborough, Bay of Plenty",
      label: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=900&q=80",
      imageAlt: "New Zealand apple orchard in autumn with snow-capped mountains behind",
      season: "February – May (main harvest)",
      body: "New Zealand's fruit picking market is smaller but better organised than Australia's, with the government's Recognised Seasonal Employer (RSE) scheme and Pick NZ service providing structured pathways. Hawke's Bay is New Zealand's premier fruit region — apples, pears, stone fruit, and grapes are all harvested there February through May. Marlborough (wine grapes, kiwifruit) peaks March through May. Bay of Plenty (kiwifruit) is one of the most intensive harvests in the country, running April through June. Nelson (apples, hops) has its own season from February through April. Working Holiday Visa holders from eligible countries (UK, Ireland, Germany, France, Japan, South Korea, and many more) can work in New Zealand for up to 12 months. Accommodation in harvest regions is tight — secure it before you arrive.",
    },
    {
      slug: "spain",
      name: "Spain — Huelva, Almería, Lérida",
      label: "Spain",
      image:
        "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Strawberry fields in southern Spain with workers harvesting in rows",
      season: "February – June (strawberries); September – November (grapes, olives)",
      body: "Spain runs two major harvest seasons with significant international worker demand. The Huelva strawberry season (February through June) is one of Europe's largest agricultural employment operations — thousands of workers are needed each year for the province that produces the majority of European strawberries. Almería runs a year-round greenhouse vegetable operation (tomatoes, peppers, courgettes) with consistent demand. Lérida and Tarragona in Catalonia have fruit seasons (peaches, apples, cherries) from June through August, followed by olive and wine grape harvests across Andalucía, Castile, and La Rioja from September through November. EU nationals work freely. Non-EU workers need the appropriate Spanish work authorisation — some farm labour contractors sponsor foreign workers under specific programmes.",
    },
    {
      slug: "france",
      name: "France — Bordeaux, Burgundy, Provence",
      label: "France",
      image:
        "https://images.unsplash.com/photo-1474224017046-182ece80b263?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Vineyard workers harvesting grapes in Burgundy France in autumn sunshine",
      season: "July – October (vendange: September – October)",
      body: "France's vendange — the wine grape harvest — is the most culturally renowned harvest experience in the world. Bordeaux, Burgundy, Champagne, the Loire Valley, and Alsace all run 3–5 week intensive harvests from mid-September through October, employing tens of thousands of seasonal pickers. The work is physically demanding — manual grape picking involves constant bending and carrying — but the setting (historic châteaux, landscapes that appear on labels worth thousands of euros) makes it genuinely memorable. Pay is set by French agricultural minimum wage — approximately €11.88 per hour in 2024 — and some châteaux include meals and basic accommodation. Cherry picking in the Rhône Valley runs June through July; peaches and nectarines in Provence peak August through September. EU nationals work freely; non-EU workers need a French seasonal work visa.",
      relatedHref: "/opportunities",
      relatedLabel: "Other seasonal work in Europe",
    },
    {
      slug: "canada",
      name: "Canada — Ontario, BC Okanagan, Nova Scotia",
      label: "Canada",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Apple orchard in Canada's Okanagan Valley in autumn with lake behind",
      season: "June – October",
      body: "Canada's primary harvest regions are concentrated in three areas. The Okanagan Valley in British Columbia is Canada's premier wine and stone fruit region — cherries (June–July), peaches and apricots (July–August), apples and grapes (September–October) create a rolling harvest that runs from June through October. The Niagara Peninsula in Ontario follows a similar fruit calendar with a major wine grape harvest in October. Nova Scotia runs a substantial apple picking season September through November. The IEC Working Holiday Visa gives eligible nationals (UK, Australia, Ireland, France, Germany, Japan, and more) the right to work in Canada for 12–24 months. Canada's Seasonal Agricultural Worker Program (SAWP) is a separate, government-managed scheme primarily for workers from Mexico and Caribbean countries.",
    },
    {
      slug: "germany",
      name: "Germany — Rhineland, Baden, Saxony",
      label: "Germany",
      image:
        "https://images.unsplash.com/photo-1467269204594-f4e8e1a08f9e?auto=format&fit=crop&w=900&q=80",
      imageAlt: "German vineyard on steep slate slopes of the Moselle River at harvest time",
      season: "June – October (asparagus: April – June; grapes: September – October)",
      body: "Germany has two distinct harvest seasons: white asparagus (Spargel), which runs from late April through June and is harvested across Baden-Württemberg, Bavaria, and Brandenburg; and the wine grape harvest (Weinlese) across the Moselle, Rhine, Nahe, and Rheingau regions in September and October. The asparagus harvest is particularly labour-intensive — the work involves bending to ground level to cut individual spears — and traditionally employs Eastern European seasonal workers through formal labour agreements. EU nationals (particularly from Romania and Poland) dominate the agricultural workforce. Non-EU workers need a German work permit or seasonal worker visa. Pay is at German minimum wage (€12.41/hour in 2024), one of the highest agricultural minimums in Europe.",
    },
  ],

  seasonalCalendarHeading: "Harvest season calendar by country",
  seasonalCalendarIntro:
    "Harvest timing is driven by crop biology and climate — getting to the right place at the right time of year is the single most important logistical decision. This calendar shows the main picking windows by country and region.",
  seasonalCalendar: [
    {
      region: "Australia (East Coast Trail)",
      months: "October – May",
      locations: ["Bundaberg (QLD)", "Hunter Valley (NSW)", "Mildura (VIC)", "Shepparton (VIC)", "Margaret River (WA)"],
      notes:
        "Follow the trail north to south — start in QLD October/November, move to NSW December–February, VIC February–May. 88 days qualifies second-year WHV.",
    },
    {
      region: "New Zealand",
      months: "February – June",
      locations: ["Hawke's Bay", "Marlborough", "Bay of Plenty", "Nelson", "Otago"],
      notes:
        "Apples (February–May) and kiwifruit (April–June) are the largest employers. Secure accommodation before arriving — Hastings and Blenheim fill up fast.",
    },
    {
      region: "France (Vendange)",
      months: "September – October",
      locations: ["Bordeaux", "Burgundy", "Champagne", "Alsace", "Loire Valley"],
      notes:
        "The vendange is intense but short — 3 to 5 weeks. Many grape-picking positions are filled via word of mouth or château direct contact. Register on the French Pôle Emploi network in advance.",
    },
    {
      region: "Spain",
      months: "February – June (strawberries); September – November (grapes/olives)",
      locations: ["Huelva (strawberries)", "Almería (vegetables)", "Lérida (stone fruit)", "Jerez (grapes)", "Jaén (olives)"],
      notes:
        "Two distinct seasons. Huelva strawberry season is the largest employer of seasonal workers in Spain. Olive harvest (Jaén) runs November–January.",
    },
    {
      region: "Canada (Okanagan & Niagara)",
      months: "June – October",
      locations: ["Kelowna (BC)", "Penticton (BC)", "Niagara-on-the-Lake (ON)", "Wolfville (NS)"],
      notes:
        "IEC WHV required. Stone fruit peaks June–August; apples and wine grapes September–October. Accommodation in Okanagan very tight during peak — book ahead.",
    },
    {
      region: "Germany",
      months: "April – June (asparagus); September – October (grapes)",
      locations: ["Schwetzingen (asparagus)", "Moselle Valley (grapes)", "Rhine Gorge (grapes)", "Dresden (Elbe vineyards)"],
      notes:
        "Asparagus picking is dawn-start work in all weathers. German minimum wage (€12.41/hr) is one of the highest agricultural rates in Europe. EU work rights required for ease of placement.",
    },
  ],

  salaryHighlightsHeading: "What fruit pickers earn abroad — by country",
  salaryHighlightsIntro:
    "Harvest pay combines a base hourly rate (in most countries) with piece-rate incentives in many operations. The piece-rate component means your actual weekly earnings depend on your speed, experience, and the crop's yield that week.",
  salaryHighlights: [
    {
      country: "Australia",
      flag: "🇦🇺",
      salaryRange: "AUD 24–32",
      salaryLabel: "per hour (Horticulture Award)",
      includes: [
        "Piece-rate bonuses above base",
        "88 days qualifies 2nd year WHV",
        "Some farms include accommodation",
        "Weekly pay standard",
      ],
      badge: "Highest hourly rate globally",
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      salaryRange: "€12.41+",
      salaryLabel: "per hour (minimum wage 2024)",
      includes: [
        "Minimum wage enforced",
        "Some accommodation included",
        "EU work rights simplest route",
        "Vendange contracts 3–5 weeks",
      ],
    },
    {
      country: "New Zealand",
      flag: "🇳🇿",
      salaryRange: "NZD 22–28",
      salaryLabel: "per hour (Horticulture minimum)",
      includes: [
        "WHV from 40+ countries",
        "Piece-rate on some crops",
        "Accommodation sometimes provided",
        "February–June main window",
      ],
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      salaryRange: "CAD 16–20",
      salaryLabel: "per hour (provincial minimum)",
      includes: [
        "IEC WHV required",
        "Piece-rate on many operations",
        "SAWP scheme for Mexico/Caribbean nationals",
        "June–October season",
      ],
    },
    {
      country: "France (Vendange)",
      flag: "🇫🇷",
      salaryRange: "€11.88",
      salaryLabel: "per hour (minimum wage 2024)",
      includes: [
        "Meals sometimes included",
        "Basic accommodation on-site at châteaux",
        "Short 3–5 week contracts",
        "September–October only",
      ],
    },
  ],

  goodToKnowHeading: "Things worth knowing before you start picking",
  goodToKnow: [
    {
      emoji: "💪",
      title: "Your first week is the hardest — physically and financially",
      body: "Piece-rate picking rewards speed and familiarity with the crop. In your first week, you will be slow, sore, and earning below the average picker's rate. This is universal and temporary. Most pickers double their productivity in two weeks. The people who quit in week one miss the payoff that comes in weeks three through ten. Arrive knowing the adjustment period is real and treat it accordingly.",
    },
    {
      emoji: "🌞",
      title: "Sun, heat, and dehydration are occupational hazards",
      body: "Harvest work in Australia, Spain, and southern France means long hours outdoors in summer heat. Sunstroke and dehydration are real risks — not dramatic ones, but persistent ones that accumulate. Long-sleeved sun shirts, a wide-brimmed hat, sunscreen, and a personal water supply (2–3 litres minimum for a full day) are non-negotiable. Some farms provide no shade at all. Ask about break schedules and water availability before accepting a position.",
    },
    {
      emoji: "🏠",
      title: "Accommodation in harvest regions is competitive and expensive",
      body: "In Australia's peak harvest nodes (Bundaberg, Mildura, Shepparton), seasonal accommodation is in high demand and low supply during picking season. Caravan parks are the most common option and can be surprisingly expensive (AUD 30–50 per night). Some farms provide on-site accommodation — a significant logistical and financial advantage. Research accommodation before you arrive and book in advance if possible. Arriving without a plan and expecting to find somewhere on the day often results in paying significantly more than necessary.",
    },
    {
      emoji: "📋",
      title: "Make sure your employer is registered for WHV 88-day credit (Australia)",
      body: "Not all agricultural work in Australia qualifies for the second-year WHV extension — the employer must be registered with the Australian Taxation Office as a regional employer. Before accepting a cash-in-hand or informal arrangement, confirm the employer can provide a formal payslip and group certificate number for your 88-day documentation. Working for unregistered employers does not count toward your extension and makes the entire arrangement legally and financially risky.",
    },
    {
      emoji: "⚖️",
      title: "Cash-in-hand labour contracting exists and is mostly illegal",
      body: "An informal economy of cash-paying farm labour contractors operates in parts of Australia, Spain, and France — where undocumented workers are paid below award rates, accommodation is provided as debt leverage, and the entire arrangement sits outside legal frameworks. This is exploitation, and documented cases are significant. Using government harvest databases and applying directly to verified farm employers — rather than through informal contractors at backpacker hostels — is the most reliable way to avoid this.",
    },
    {
      emoji: "🔁",
      title: "Moving between regions extends your season and earnings",
      body: "Following the crops across a country's harvest trail extends your earning period significantly. In Australia, a picker starting in Bundaberg (Queensland) in October and moving south to Mildura (Victoria) in March can maintain continuous employment for six months. In New Zealand, moving from Hawke's Bay apple picking to Bay of Plenty kiwifruit achieves the same effect. The infrastructure for this kind of movement exists — backpacker networks, hostels, and regional transport — and most experienced harvest workers do it as a matter of course.",
    },
  ],

  faqHeading: "Common questions about fruit picking jobs abroad",
  faqIntro: "Practical answers for anyone planning their first harvest season.",
  faqs: [
    {
      question: "Do I need any experience or qualifications to get fruit picking work?",
      answer:
        "No formal qualifications are required for any harvest picking role. The only requirements are physical fitness, a willingness to work outdoors in variable conditions, and the correct visa to work in the country you are targeting. Previous agricultural experience is a bonus — some farms and labour contractors prefer it — but most harvest operations take on complete beginners. What matters more than experience is reliability: farms need pickers to show up every day during a time-sensitive harvest window.",
    },
    {
      question: "How much can I realistically earn fruit picking in Australia?",
      answer:
        "Under the Australian Horticulture Award, the base rate is AUD 24–32 per hour depending on the type of work and any overtime rates. For piece-rate picking (paid per bin or kilogram), your actual earnings depend on crop density, your speed, and weather conditions. An experienced picker on a good day in a productive orchard can earn AUD 200–300. A first-week picker on a leaner day might earn AUD 100–150. Over a season, AUD 800–1,500 per week is a realistic range for a productive picker. These figures exclude accommodation and living costs.",
    },
    {
      question: "How does the 88-day Australian WHV second-year extension work?",
      answer:
        "Working Holiday Visa holders who complete 88 calendar days (not necessarily consecutive) of specified regional work — including agriculture, horticulture, forestry, fishing, and mining in defined regional postcodes — become eligible to apply for a second 12-month WHV (subclass 417). The 88 days must be with a registered employer who provides payslips. You apply for the second visa online through the Department of Home Affairs. A third year requires 179 days of regional work. Always confirm your employer's eligibility before accepting a position — not all farm work qualifies.",
    },
    {
      question: "What is piece-rate pay and how does it work?",
      answer:
        "Piece-rate pay means you are paid per unit picked — per bin of apples, per kilogram of strawberries, per tray of grapes — rather than per hour. Your daily income is therefore determined by how fast and efficiently you pick. Piece-rate systems are legal in many countries provided the total earnings do not fall below the relevant minimum wage for the hours worked — in Australia, farms are required to audit piece rates and top up to the Award rate if piece-rate earnings fall below it. In practice, enforcement varies. Fast, experienced pickers prefer piece-rate because it allows them to earn significantly above the hourly rate.",
    },
    {
      question: "Is the vendange in France still worth doing, or is it overcrowded?",
      answer:
        "The vendange is worth doing if you understand what it is: a short (3–5 week), physically demanding, socially rich harvest experience that pays French minimum wage and not much more. It is not a money-making exercise — it is a working cultural experience. Positions at well-regarded châteaux in Bordeaux and Burgundy are popular and fill up through word of mouth or early registration on the national employment database. If you want a spot at a famous château (Lafite Rothschild, Mouton Cadet) rather than a smaller producer, personal contacts or early registration matter significantly.",
    },
    {
      question: "What should I bring to a fruit picking job?",
      answer:
        "The practical essentials: sun protection (long-sleeved shirts, wide-brimmed hat, reef-safe sunscreen), a minimum 2-litre water bottle, sturdy closed-toe work boots or shoes, work gloves appropriate for the crop, and waterproof outer layers for early mornings. Bring your own tools if you have specific preferences (some crops use picking scissors or shears). Carry any pain relief medication you use for muscle soreness. Your phone for payroll admin. Many picking environments have poor mobile coverage — download offline maps and offline travel information before heading to rural areas.",
    },
    {
      question: "Can I do fruit picking without a working holiday visa?",
      answer:
        "It depends on the country. In Australia and New Zealand, farm work is employment that requires work rights — a working holiday visa, a work permit, or permanent residency. Working without the right to work is illegal and exposes you to deportation. In France and Spain, EU nationals work freely; non-EU nationals need work authorisation. Some farms, particularly in Southeast Asia and parts of Eastern Europe, hire informally — but the legal risks around visa status are real. The government harvest databases only list employers who are authorised to hire legally — using them is the safest approach.",
    },
    {
      question: "Does Abroader directly place fruit pickers?",
      answer:
        "No. Abroader is a discovery and comparison platform. We list government programmes, job boards, and destination guides so you can find the right opportunity. All applications go directly through the individual providers and farm employers listed on this page.",
    },
  ],

  disclaimer:
    "Wage rates quoted are editorial estimates based on publicly available national minimum wage and Award rates as of 2024 and may not reflect current conditions. Working holiday visa eligibility, piece-rate rules, and 88-day regional work requirements are subject to change — always verify current requirements with the relevant government authority before making travel or accommodation decisions. Using unregistered labour contractors carries significant legal and financial risks.",

  ctaHeading: "Plan your fruit picking season abroad",
  ctaDescription:
    "Compare destinations, explore working holiday visa options, or book a free consultation with the Abroader team to plan your harvest season.",
  ctaLinks: [
    { href: "/opportunities/farm-work-abroad", label: "Farm work abroad", primary: true },
    { href: "/opportunities/hostel-work-abroad", label: "Hostel work abroad" },
    { href: "/consultation", label: "Book consultation" },
  ],
  relatedLinks: [
    { href: "/opportunities/farm-work-abroad", label: "Farm work abroad" },
    { href: "/opportunities/bartending-jobs-abroad", label: "Bartending jobs abroad" },
    { href: "/opportunities", label: "All Top 50 opportunities" },
  ],
};
