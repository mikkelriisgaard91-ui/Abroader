export const landingCtas = {
  apply: "#apply",
  contact: "#contact",
  howItWorks: "#how-it-works",
} as const;

export const landingFooter = {
  tagline: "Build your own recruitment business — inside Abroader.",
  links: [
    { label: "About Abroader", href: "#about" },
    { label: "Contact", href: landingCtas.contact },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "LinkedIn", href: "https://linkedin.com/company/abroader", external: true },
  ],
  secondaryLinks: [
    { label: "Choose your recruiter", href: "/choose-your-recruiter" },
  ],
  website: { label: "abroader.io", href: "https://abroader.io" },
} as const;

export const heroContent = {
  headline: "Become an Abroader",
  subheadline:
    "Love travelling and want to help others experience life abroad? Build your own international recruitment business while helping people find life-changing jobs around the world.",
  supporting:
    "Abroader gives you the platform, clients, tools and support. You bring your ambition. There is no salary cap, no territory limits and no ceiling on your earnings.",
  primaryCta: "Become an Abroader",
  secondaryCta: "How it works",
} as const;

export const whyBecomeContent = {
  headline: "Build more than a job",
  cards: [
    {
      title: "Build your own recruitment business",
      description:
        "Operate independently while using Abroader's infrastructure, clients and platform.",
      icon: "briefcase" as const,
    },
    {
      title: "Work from anywhere",
      description: "Recruit candidates remotely from anywhere in the world.",
      icon: "globe" as const,
    },
    {
      title: "Change people's lives",
      description: "Help people start exciting new careers abroad.",
      icon: "heart" as const,
    },
    {
      title: "Unlimited earning potential",
      description: "The more placements you make, the more you earn. No income ceiling.",
      icon: "trendingUp" as const,
    },
  ],
} as const;

export const aboutRoleContent = {
  headline: "About the role",
  intro:
    "Abroader is an international recruitment platform built for independent recruiters.",
  subintro: "From day one you receive:",
  benefits: [
    "Your own recruiter landing page",
    "Live vacancies from day one",
    "Existing client portfolio",
    "Personal workspace and recruitment playbooks",
    "Support from the Abroader team",
    "€200 startup activity budget",
  ],
  toolkitItems: [
    {
      title: "Your landing page",
      description: "A branded page to attract candidates and clients.",
      icon: "globe" as const,
    },
    {
      title: "Live vacancies",
      description: "Real international roles ready to fill.",
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
      title: "€200 startup budget",
      description: "Launch campaigns on your terms.",
      icon: "gift" as const,
    },
    {
      title: "Commission tracker",
      description: "See your earnings grow with every placement.",
      icon: "coins" as const,
    },
  ],
  toolkitHeading: "Everything included from day one",
} as const;

export const startupBudgetContent = {
  headline: "Launch your recruitment business your way",
  cards: [
    {
      title: "Use the grant",
      description:
        "Abroader provides a €200 activity budget. If you don't make a placement, you owe nothing. If you do, it's simply deducted from your first commission.",
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
        "Add your own advertising budget to run larger campaigns and grow faster.",
      icon: "rocket" as const,
    },
  ],
} as const;

export const commissionContent = {
  headline: "How you make money",
  stackNote: "Commissions stack",
  stackDescription:
    "meaning you can earn from multiple parts of the same placement.",
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
    {
      rate: "7.5%",
      title: "Recruit another recruiter",
      description: "Receive ongoing commission from their placements.",
      highlighted: false,
    },
  ],
} as const;

export const earningPotentialContent = {
  headline: "Your earning potential",
  disclaimer:
    "Fees are negotiated individually with each client and vary by assignment.",
  tiers: [
    {
      title: "Entry Level",
      placementFee: { min: 300, max: 4000, prefix: "€" },
      commission: { min: 105, max: 1400, prefix: "€" },
    },
    {
      title: "Mid & Senior",
      placementFee: { min: 4000, max: 10000, prefix: "€" },
      commission: { min: 1400, max: 3500, prefix: "€" },
    },
    {
      title: "Senior & Specialist",
      placementFee: { min: 10000, max: null, prefix: "€", suffix: "+" },
      commission: { min: 3500, max: null, prefix: "€", suffix: "+" },
    },
  ],
} as const;

export const candidateSourcesContent = {
  headline: "Find talent everywhere",
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
      description: "Scale using your €200 activity budget or your own campaigns.",
      icon: "megaphone" as const,
    },
    {
      title: "LinkedIn Recruiter",
      description: "Headhunt experienced professionals.",
      icon: "linkedin" as const,
    },
  ],
} as const;

export const howItWorksContent = {
  headline: "From candidate to commission",
  steps: [
    { title: "Find candidates", description: "Source talent through your network and channels." },
    { title: "Screen and manage candidates", description: "Track every candidate in one place." },
    { title: "Candidate starts the new job", description: "Placement confirmed — the hard work pays off." },
    { title: "Finance automatically invoices the client", description: "No chasing invoices — we handle billing." },
    { title: "Commission is paid to you", description: "Your earnings land in your account." },
  ],
} as const;

export const longTermIncomeContent = {
  headline: "Build an asset that grows",
  paragraphs: [
    "Every client you introduce can continue generating recurring referral commissions for as long as you remain an active Abroader.",
    "You're not simply earning one-off commissions.",
    "You're building a recruitment business with long-term value.",
  ],
  chartMetrics: [
    { label: "Year 1", value: "€12k" },
    { label: "Year 2", value: "€28k" },
    { label: "Year 3", value: "€45k" },
  ],
} as const;

export const finalCtaContent = {
  headline: "Ready to become an Abroader?",
  supporting:
    "Turn your passion for travelling into a business that helps people build better lives while creating unlimited earning potential for yourself.",
  primaryCta: "Become an Abroader",
  secondaryCta: "Book a Call",
} as const;

export const landingMetadata = {
  title: "Abroader — Become an Independent Recruiter",
  description:
    "Build your own international recruitment business with Abroader. Platform, clients, tools and support — no salary cap, no territory limits.",
} as const;
