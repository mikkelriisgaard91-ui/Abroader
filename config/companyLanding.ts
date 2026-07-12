import stefano from "@/config/recruiters/stefano";

export const EMPLOYER_BOOK_CALL_URL = stefano.employerCtaUrl!;

export const companyCtas = {
  bookCall: EMPLOYER_BOOK_CALL_URL,
  exploreServices: "#services",
} as const;

export const companyMetadata = {
  title: "Abroader — Hire with Experienced Recruiters",
  description:
    "Connect with vetted, independent recruiters through Abroader. Choose No Cure, No Pay or a dedicated embedded recruiter — flexible hiring for companies of any size.",
} as const;

export const companyHeroContent = {
  eyebrow: "For companies",
  headline: "Hire faster with recruiters who are invested in getting it right.",
  subheadline:
    "Abroader connects you with experienced, vetted recruiters — with two flexible ways to hire, depending on your volume and how you prefer to pay.",
  primaryCta: "Book a call",
  secondaryCta: "See hiring options",
} as const;

export const whyAbroaderContent = {
  headline: "Better value. Better motivation. Same quality.",
  subtext:
    "Abroader operates without expensive office overhead or heavy agency layers — and that shows up in how your search is run, not in corners cut.",
  benefits: [
    {
      title: "Competitive pricing without the agency markup",
      description:
        "Traditional agencies price in office leases, management layers, and internal overhead. Abroader doesn't — so you get experienced recruiters at a lower cost, without compromising on the quality of the person running your search.",
      icon: "coins" as const,
    },
    {
      title: "Recruiters personally invested in your roles",
      description:
        "Our recruiters are directly and meaningfully rewarded for their work. That means they stay engaged with your search until the role is filled properly — not handed off once the fee is diluted across a large agency structure.",
      icon: "heart" as const,
    },
  ],
} as const;

export const CHOOSE_RECRUITER_PATH = "/choose-your-recruiter" as const;

export const chooseRecruiterContent = {
  metadata: {
    title: "Abroader — Choose Your Recruiter",
    description:
      "Browse vetted Abroader recruiters by specialism and language. Pick the right partner for your hiring needs — each runs their own practice with their own network and regions.",
  },
  eyebrow: "For companies",
  headline: "Choose your recruiter.",
  subheadline:
    "Every Abroader recruiter runs their own practice — with their own network, specialisms, and regions. Pick who fits your hiring needs.",
  filters: {
    specialism: "Specialism",
    language: "Languages",
  },
  emptyState: {
    title: "No recruiters match your filters",
    hint: "Try removing a filter or choosing a different specialism or language.",
    clearCta: "Clear all filters",
  },
  cardCta: "View recruiter",
} as const;

export const trustQualityContent = {
  headline: "Recruiters you can trust — by name.",
  subtext: "Every engagement starts with confidence in who you're working with.",
  recruitersCta: {
    label: "Meet our recruiters",
    href: CHOOSE_RECRUITER_PATH,
  },
  points: [
    {
      title: "Rigorous onboarding",
      description:
        "Recruiters join Abroader only after demonstrating proven recruitment experience and passing a structured screening and interview process.",
      icon: "shieldCheck" as const,
    },
    {
      title: "Ongoing quality standards",
      description:
        "Engagements are monitored throughout — so standards stay high from first brief to signed offer.",
      icon: "activity" as const,
    },
    {
      title: "Not the right fit? We'll fix it.",
      description:
        "If a recruiter isn't the right match for your business, we'll arrange a swap or escalate through Abroader — you won't be left managing it alone.",
      icon: "refreshCw" as const,
    },
    {
      title: "Named, credentialed professionals",
      description:
        "You work with a specific, experienced recruiter — not an anonymous rotating desk. You know who is representing your company.",
      icon: "userCheck" as const,
    },
  ],
} as const;

export type ProcessPhaseIcon =
  | "clipboardList"
  | "search"
  | "phoneCall"
  | "listChecks"
  | "users"
  | "handshake"
  | "fileSignature"
  | "shieldCheck";

export type ProcessPhase = {
  number: string;
  icon: ProcessPhaseIcon;
  name: string;
  summary: string;
  whatHappens: string[];
  /** Short note on what's typically tailored for this phase. */
  customise?: string;
  /** Shown on phases where candidates can be screened out (3–5). */
  offRamp?: string;
  /** Shown on Phase 8 to link through to the real guarantee terms. */
  note?: { prefix: string; linkLabel: string; linkHref: string };
};

const processPhases: ProcessPhase[] = [
  {
    number: "01",
    icon: "clipboardList",
    name: "Role understanding & briefing",
    summary: "We build a full picture of the role and the business before sourcing begins.",
    whatHappens: [
      "Company overview, team structure, and reporting line",
      "Must-have vs. nice-to-have criteria",
      "Compensation and market-rate benchmarking",
      "Agreed timeline and success criteria",
    ],
    customise: "Briefing depth scales with role seniority.",
  },
  {
    number: "02",
    icon: "search",
    name: "Sourcing strategy",
    summary: "We draw on multiple channels at once to build a strong, relevant pool of candidates.",
    whatHappens: [
      "Internal candidate database",
      "Job board advertising",
      "LinkedIn Recruiter and direct outreach",
      "External and specialist databases, referrals",
    ],
    customise: "Channel mix weighted by role type.",
  },
  {
    number: "03",
    icon: "phoneCall",
    name: "Screening & assessment",
    summary: "Candidates are screened for role fit and compatibility before they're put forward.",
    whatHappens: [
      "Introductory call: role overview, expectations, motivation",
      "Compatibility assessment against agreed criteria",
      "Optional technical interview or skills test",
    ],
    offRamp: "Candidates who aren't a fit receive feedback and join our talent pool for future roles.",
  },
  {
    number: "04",
    icon: "listChecks",
    name: "Shortlist presented to you",
    summary: "You receive a clear, comparable shortlist — not just a stack of CVs.",
    whatHappens: [
      "Full CV",
      "Salary expectations",
      "Availability to start",
      "Recruiter notes on experience and motivation",
    ],
    offRamp: "Candidates you don't take forward are given feedback and remain in our talent pool.",
  },
  {
    number: "05",
    icon: "users",
    name: "Hiring manager interviews",
    summary: "We coordinate scheduling and keep everyone informed through each round.",
    whatHappens: [
      "Interview logistics and calendar coordination",
      "Structured feedback collected after each round",
      "Regular status updates to you throughout",
    ],
    offRamp: "As at earlier stages, unsuccessful candidates receive feedback and stay in our talent pool.",
  },
  {
    number: "06",
    icon: "handshake",
    name: "Offer management",
    summary: "We manage the offer conversation to reduce the risk of late drop-out.",
    whatHappens: [
      "Salary and package negotiation between both parties",
      "Start date confirmation",
      "Counter-offer handling, where relevant",
    ],
  },
  {
    number: "07",
    icon: "fileSignature",
    name: "Contract & onboarding",
    summary: "We support through to signature and beyond, to help the placement stick.",
    whatHappens: [
      "Contract issued and signed",
      "Check-ins at 30, 60, and 90 days post-start",
    ],
  },
  {
    number: "08",
    icon: "shieldCheck",
    name: "Guarantee period",
    summary:
      "If a placed candidate leaves within the agreed window, we run a replacement search at no additional fee.",
    whatHappens: [],
    note: {
      prefix: "Guarantee length depends on your engagement type — ",
      linkLabel: "see hiring options",
      linkHref: "/hire-with-abroader#services",
    },
  },
];

export const OUR_PROCESS_PATH = "/our-process" as const;

export const ourProcessMetadata = {
  title: "Abroader — Our Recruitment Process",
  description:
    "A clear, structured walkthrough of how Abroader runs a search — all eight phases, how not-progressed candidates are handled, and how we protect your data.",
} as const;

export const ourProcessContent = {
  eyebrow: "How we work",
  headline: "A clear, structured recruitment process.",
  subtext:
    "Every search follows the same eight phases, so you always know what happens next. What changes is the detail — interview rounds, assessment type, and sourcing channels are shaped around the specific role, not applied as a template.",
  pointOfContact: {
    headline: "Your point of contact",
    columns: [
      {
        tag: "One voice",
        title: "A single dedicated recruiter",
        description:
          "You're assigned one recruiter as your point of contact for the entire search. All updates, questions, and decisions run through them — no chasing multiple inboxes, no repeating yourself to different people.",
        icon: "userCheck" as const,
      },
      {
        tag: "Full team",
        title: "Backed by more hands",
        description:
          "Behind that one contact, several recruiters work the role in parallel — sourcing, screening, and building the shortlist together. You get the speed of a full team, with the simplicity of dealing with just one person.",
        icon: "users" as const,
      },
    ],
  },
  phasesEyebrow: "The process",
  phasesHeadline: "Eight phases.",
  phasesSubtext:
    "Phases 3 to 5 include what happens to candidates who aren't taken forward — every one of them gets feedback and a place in our talent pool.",
  phases: processPhases,
  feedbackLoop: {
    headline: "Nothing is a dead end",
    body: "Whenever a candidate isn't progressed, at any phase, we give them constructive feedback and add them to our talent pool. That means strong candidates who weren't right for this role are already warm for the next one — which speeds up every search that follows.",
  },
  dataProtection: {
    headline: "Data protection & confidentiality",
    body: "All candidate data is handled in line with GDPR. CVs and personal information are stored securely, used only for the purposes of the search, and retained in line with our data retention policy. Searches can be run on a confidential basis on request.",
    linkLabel: "Read our privacy policy",
    linkHref: "/privacy",
  },
} as const;

export const processTeaserContent = {
  eyebrow: "How we work",
  headline: "A clear, structured recruitment process.",
  subtext:
    "Eight phases from brief to guarantee period, one dedicated point of contact, and a full team behind every search.",
  cta: "See our full process",
} as const;

export const servicesContent = {
  headline: "Two ways to hire.",
  subtext: "Same quality recruiters — different commercial models depending on how you hire.",
  cardCta: "Book a call to discuss",
  services: [
    {
      id: "no-cure-no-pay",
      badge: "Standard recruitment",
      title: "No Cure, No Pay",
      tagline: "Pay only when you hire.",
      icon: "shieldCheck" as const,
      details: [
        {
          label: "Pricing",
          value:
            "10–20% of the candidate's annual salary — scaled by role seniority and complexity. Entry-level roles from 10%; senior and specialist roles toward 20%.",
        },
        {
          label: "Guarantee",
          value:
            "1–3 month guarantee depending on seniority. Free replacement if the hire doesn't work out within that window.",
        },
        {
          label: "Includes",
          value: "Zero cost if no placement is made.",
        },
        {
          label: "Best for",
          value: "One-off hires, occasional hiring, or when you want zero financial risk.",
        },
      ],
    },
    {
      id: "dedicated-recruiter",
      badge: "Embedded recruiting",
      title: "Rent a Dedicated Recruiter",
      tagline: "A recruiter on your team, at a fixed price.",
      icon: "userCheck" as const,
      details: [
        {
          label: "Pricing",
          value: "From €2,500/month",
        },
        {
          label: "Breakdown",
          value:
            "€2,000 — dedicated recruiter time. €500 — marketing and sourcing (LinkedIn Recruiter, job ads, sourcing tools). This portion flexes based on your assignment's sourcing needs.",
        },
        {
          label: "Includes",
          value:
            "One experienced recruiter working solely on your roles — not time-shared across other clients. Unlimited hiring within that dedicated capacity — no additional per-hire fee on top of the monthly price. Minimum 3-month engagement — time for your recruiter to learn your business and hiring bar properly.",
        },
        {
          label: "Best for",
          value:
            "Ongoing or higher-volume hiring, when predictable fixed cost beats a percentage fee on every hire.",
        },
      ],
    },
  ],
} as const;

export const serviceSelectorContent = {
  headline: "Which one is right for you?",
  subtext: "You don't need a spreadsheet — just match your hiring pattern.",
  paths: [
    {
      label: "Occasional or one-off hiring",
      description:
        "You're filling a role now and then, or want zero cost unless you hire.",
      serviceName: "No Cure, No Pay",
    },
    {
      label: "Steady or high-volume hiring",
      description:
        "You're hiring regularly and want a dedicated recruiter and predictable monthly cost.",
      serviceName: "Rent a Dedicated Recruiter",
    },
  ],
} as const;

export const companyFinalCtaContent = {
  headline: "Ready to talk about your hiring needs?",
  supporting:
    "Book a short call with Abroader. We'll walk through your roles, explain both options, and help you choose the right model — no obligation.",
  primaryCta: "Book a call",
} as const;

export const becomeClientCtaContent = {
  headline: "Ready to become a client?",
  supporting:
    "Book a short call and we'll get in touch to take it from there — no obligation.",
  primaryCta: "Book a call",
} as const;
