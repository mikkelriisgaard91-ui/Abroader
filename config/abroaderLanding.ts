export const RECRUITER_APPLY_URL =
  "https://abroader-1746694588.teamtailor.com/jobs/6880082-international-recruiter-at-abroader-io";

export const landingCtas = {
  apply: RECRUITER_APPLY_URL,
  bookCall: RECRUITER_APPLY_URL,
  contact: "#contact",
  howItWorks: "#how-it-works",
} as const;

export const landingFooter = {
  tagline: "Become a recruiter. Build your own practice as an Abroader.",
  links: [
    { label: "About Abroader", href: "#about" },
    { label: "Contact", href: landingCtas.contact },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "LinkedIn", href: "https://linkedin.com/company/abroader", external: true },
  ],
  secondaryLinks: [
    { label: "Hire with Abroader", href: "/" },
    { label: "Our recruiters", href: "/choose-your-recruiter" },
  ],
  website: { label: "abroader.io", href: "https://abroader.io" },
} as const;

export const heroContent = {
  headline: "Become a recruiter",
  subheadline:
    "Join Abroader as an independent recruiter — work remotely, help people find jobs anywhere, and shape how you earn by combining commission channels. That's what it means to become an Abroader.",
  primaryCta: "Become a recruiter",
  secondaryCta: "How it works",
} as const;

export const whyBecomeContent = {
  headline: "Why become a recruiter?",
  subtext:
    "Recruiting on Abroader means freedom, impact, and multiple ways to earn — without a rigid job description or a cap on how many clients and placements you build.",
  cards: [
    {
      title: "Flexible commission channels",
      description:
        "Combine placements, sourcing, referrals, and more — focus on what suits your skills and interests.",
      icon: "briefcase" as const,
    },
    {
      title: "Work from anywhere",
      description:
        "Recruit remotely on your terms, focusing on the channels and clients that suit your lifestyle.",
      icon: "globe" as const,
    },
    {
      title: "Change people's lives",
      description:
        "Help people start exciting new careers — local, remote, or abroad — whether you place, source, or manage the relationship.",
      icon: "heart" as const,
    },
    {
      title: "Multiple ways to earn",
      description:
        "Stack commissions across placements, referrals, sourcing, and more. No quotas — every client and placement you add grows your income.",
      icon: "trendingUp" as const,
    },
  ],
} as const;

export const aboutRoleContent = {
  headline: "What is an Abroader?",
  subtext:
    "An independent recruiter who works remotely and helps people find jobs anywhere. Abroader gives you the clients, vacancies, workspace, and support to run your own practice from day one.",
  toolkitItems: [
    {
      title: "Your landing page",
      description: "A branded page to attract candidates and clients.",
      icon: "globe" as const,
    },
    {
      title: "Live vacancies",
      description: "Real roles ready to fill — local, remote, or international.",
      icon: "briefcase" as const,
    },
    {
      title: "Client portfolio",
      description: "Established employers included from day one.",
      icon: "building" as const,
    },
    {
      title: "Workspace & playbooks",
      description: "Templates, guides and tools to run your practice.",
      icon: "bookOpen" as const,
    },
    {
      title: "Abroader support",
      description: "Guidance from the team whenever you need it.",
      icon: "heart" as const,
    },
    {
      title: "Commission tracker",
      description: "Track earnings across every channel you choose to pursue.",
      icon: "coins" as const,
    },
  ],
  toolkitHeading: "What's included",
} as const;

export const startupBudgetContent = {
  headline: "Launch on your terms",
  subtext:
    "When Abroader provides financial support for ads or licences, the aim is to help you fill your clients' demand — whether you start funded, organic, or a mix of both.",
  cards: [
    {
      title: "Abroader financial support",
      description:
        "Abroader can fund ads or recruitment licences to help you get started. The expectation is that you fill your clients' demand — if you don't make a placement, you owe nothing; if you do, the support is deducted from your first commission.",
      icon: "gift" as const,
    },
    {
      title: "Go organic",
      description:
        "Use your own network, LinkedIn, Facebook, Instagram or TikTok. Keep your first commission.",
      icon: "share2" as const,
    },
    {
      title: "Scale faster",
      description:
        "Add your own budget for ads and licences to run larger campaigns and fill client demand faster.",
      icon: "rocket" as const,
    },
  ],
} as const;

export const commissionContent = {
  headline: "Combine commission channels your way",
  subtext:
    "Members earn through multiple channels. Choose to do all of them, or focus on the areas that best match your skills, interests, and aspirations.",
  stackNote: "Mix and match",
  stackDescription:
    "Stack commissions on the same placement, specialise in one channel, or build a blend that works for you.",
  cards: [
    {
      rate: "35%",
      title: "Complete recruitment",
      description: "Screening → Placement",
      highlighted: true,
    },
    {
      rate: "15%",
      title: "Candidate sourcing",
      description: "Another recruiter completes the hire.",
      highlighted: false,
    },
    {
      rate: "10%",
      title: "Client referral",
      description: "Earn recurring commission whenever that client hires.",
      highlighted: false,
    },
    {
      rate: "10%",
      title: "Client management",
      description: "Manage the relationship and earn on every placement.",
      highlighted: false,
    },
  ],
} as const;

export const COMMISSION_RATE_RANGE = { min: 0.1, max: 0.7 } as const;

type PlacementFee = {
  min: number;
  max: number | null;
  prefix: string;
  suffix?: string;
};

type CommissionRange = {
  min: number;
  max: number;
  prefix: string;
};

function deriveCommissionFromPlacementFee(placementFee: PlacementFee): CommissionRange {
  return {
    min: Math.round(placementFee.min * COMMISSION_RATE_RANGE.min),
    max:
      placementFee.max === null
        ? Math.round(placementFee.min * COMMISSION_RATE_RANGE.max)
        : Math.round(placementFee.max * COMMISSION_RATE_RANGE.max),
    prefix: placementFee.prefix,
  };
}

const entryPlacementFee = { min: 300, max: 4000, prefix: "€" } as const;
const midPlacementFee = { min: 4000, max: 10000, prefix: "€" } as const;
const seniorPlacementFee = {
  min: 15000,
  max: 25000,
  prefix: "€",
  suffix: "+",
} as const;

export const earningPotentialContent = {
  headline: "Your earning potential",
  subtext:
    "Each placement pays a fee-based commission — stack channels to earn up to 70% on any single deal. What scales without limit is how many deals you close, how many clients you serve, and the recurring referral income they generate.",
  bridgeText:
    "These figures are per placement. Your annual income is a function of volume and compounding — the chart below shows how earnings grow from Year 1 to Year 3 as your client roster expands.",
  disclaimer:
    "Fees are negotiated individually with each client and vary by assignment.",
  tiers: [
    {
      title: "Entry Level",
      placementFee: entryPlacementFee,
      commission: deriveCommissionFromPlacementFee(entryPlacementFee),
      commissionDisplay: "upTo" as const,
      highlighted: false,
    },
    {
      title: "Mid & Senior",
      placementFee: midPlacementFee,
      commission: deriveCommissionFromPlacementFee(midPlacementFee),
      commissionDisplay: "upTo" as const,
      highlighted: false,
    },
    {
      title: "Senior & Specialist",
      placementFee: seniorPlacementFee,
      commission: { min: 15000, max: 20000, prefix: "€" },
      commissionDisplay: "upTo" as const,
      highlighted: true,
      tagline: "Executive & specialist roles",
    },
  ],
} as const;

export const candidateSourcesContent = {
  headline: "Find talent your way",
  subtext:
    "Choose the sourcing channels that fit your strengths — whether that's your network, social media, paid advertising, or the Abroader candidate database.",
  cards: [
    {
      title: "Personal Network",
      description: "Use existing relationships.",
      icon: "users" as const,
    },
    {
      title: "Social Media",
      description: "Facebook, Instagram, TikTok and online communities.",
      icon: "share2" as const,
    },
    {
      title: "Paid Advertising",
      description: "Scale with Abroader financial support for ads and licences, or fund your own campaigns.",
      icon: "megaphone" as const,
    },
    {
      title: "LinkedIn Recruiter",
      description: "Headhunt experienced professionals.",
      icon: "linkedin" as const,
    },
    {
      title: "Abroader Candidate Database",
      description: "Access pre-qualified candidates ready for new opportunities.",
      icon: "database" as const,
    },
  ],
} as const;

export const howItWorksContent = {
  headline: "From candidate to commission",
  subtext:
    "However you choose to earn, the path from candidate to payout works the same way.",
  steps: [
    { title: "Find candidates", description: "Source talent through the channels that suit you." },
    { title: "Screen and manage candidates", description: "Track every candidate in one place." },
    { title: "Candidate starts the new job", description: "Placement confirmed — the hard work pays off." },
    { title: "Finance automatically invoices the client", description: "No chasing invoices — we handle billing." },
    { title: "Commission is paid to you", description: "Your earnings land in your account." },
  ],
} as const;

export const longTermIncomeContent = {
  headline: "Earn once. Keep earning.",
  subtext:
    "This is where per-deal commission becomes uncapped total income — client referrals and recurring commissions keep paying long after the first placement.",
  paragraphs: [
    "Every client you bring to Abroader can generate ongoing referral commission on every hire they make — for as long as you remain an active Abroader.",
    "Stack placements across unlimited clients, add recurring referral commission on every future hire, and your practice grows year on year — not deal by deal.",
    "Year on year, the relationships you build become the foundation of your practice.",
  ],
  chartTitle: "Your practice compounds",
  chartSeries: {
    clients: { label: "Clients served", color: "#7ec8d4" },
    placements: { label: "Candidates placed", color: "#fdbb37" },
  },
  chartMetrics: [
    { label: "Year 1", clients: 3, placements: 6, earnings: "< €10k" },
    { label: "Year 2", clients: 6, placements: 16, earnings: "€20k" },
    { label: "Year 3", clients: 10, placements: 30, earnings: "€30k+" },
  ],
} as const;

export const finalCtaContent = {
  headline: "Ready to become a recruiter?",
  supporting:
    "Book a call to explore joining as a recruiter and building your practice as an Abroader.",
  primaryCta: "Become a recruiter",
  secondaryCta: "Book a Call",
} as const;

export const landingMetadata = {
  title: "Abroader — Become a Recruiter",
  description:
    "Join Abroader as an independent recruiter. Work remotely, help people find jobs anywhere, and build your practice as an Abroader — with clients, tools, and support included.",
} as const;
