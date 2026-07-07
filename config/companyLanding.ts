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
