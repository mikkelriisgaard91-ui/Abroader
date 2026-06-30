export const RECRUITER_APPLY_URL =
  "https://abroader-1746694588.teamtailor.com/jobs/6880082-international-recruiter-at-abroader-io";

export const landingCtas = {
  apply: RECRUITER_APPLY_URL,
  bookCall: RECRUITER_APPLY_URL,
  contact: "#contact",
  howItWorks: "#how-it-works",
} as const;

export const landingFooter = {
  tagline: "Shape your own recruitment role — inside Abroader.",
  links: [
    { label: "About Abroader", href: "#about" },
    { label: "Contact", href: landingCtas.contact },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
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
    "There isn't a single way to be an Abroader. Shape the role you want by combining different commission opportunities — and build a recruitment business around your skills, interests, and lifestyle.",
  primaryCta: "Become an Abroader",
  secondaryCta: "How it works",
} as const;

export const whyBecomeContent = {
  headline: "Build a role around you",
  subtext:
    "Being an Abroader isn't one fixed job description. Members combine commission opportunities in different ways — matching how they want to work, earn, and grow.",
  cards: [
    {
      title: "Shape your own role",
      description:
        "Combine commission channels to build a recruitment practice that fits you — not a predefined role.",
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
        "Help people start exciting new careers abroad — whether you place, source, or manage the relationship.",
      icon: "heart" as const,
    },
    {
      title: "Multiple ways to earn",
      description:
        "Stack commissions across placements, referrals, sourcing, and more. No single path — and no income ceiling.",
      icon: "trendingUp" as const,
    },
  ],
} as const;

export const aboutRoleContent = {
  headline: "Your role, built your way",
  subtext:
    "Abroader gives you the infrastructure to operate independently. How you earn — and which commission channels you combine — is entirely up to you.",
  intro:
    "Abroader is an international recruitment platform for independent recruiters who want flexibility, not a one-size-fits-all role.",
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
      description: "Track earnings across every channel you choose to pursue.",
      icon: "coins" as const,
    },
  ],
  toolkitHeading: "Everything included from day one",
} as const;

export const startupBudgetContent = {
  headline: "Launch on your terms",
  subtext:
    "However you choose to earn — sourcing, placing, referring clients, or all of the above — you decide how to grow.",
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
  subtext:
    "What you earn depends on which commission channels you pursue — and how you combine them over time.",
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
  headline: "Find talent your way",
  subtext:
    "Choose the sourcing channels that fit your strengths — whether that's your network, social media, or paid advertising.",
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
  headline: "Build an asset that grows",
  subtext:
    "As you combine commission channels over time, recurring income compounds — building long-term value, not just one-off payouts.",
  paragraphs: [
    "Every client you introduce can continue generating recurring referral commissions for as long as you remain an active Abroader.",
    "You're not simply earning one-off commissions from a single channel.",
    "You're building a flexible recruitment business with long-term value — shaped entirely around you.",
  ],
  chartMetrics: [
    { label: "Year 1", value: "£12k", amount: 12000 },
    { label: "Year 2", value: "£25k", amount: 25000 },
    { label: "Year 3", value: "£40k+", amount: 40000 },
  ],
} as const;

export const finalCtaContent = {
  headline: "Ready to become an Abroader?",
  supporting:
    "There isn't a single way to be an Abroader. Book a call to explore how you could combine commission opportunities into a role built around your skills, interests, and aspirations.",
  primaryCta: "Become an Abroader",
  secondaryCta: "Book a Call",
} as const;

export const landingMetadata = {
  title: "Abroader — Become an Independent Recruiter",
  description:
    "Shape your own role as an Abroader. Combine multiple commission channels — placements, sourcing, referrals, and more — on a flexible platform with clients, tools, and support included.",
} as const;
