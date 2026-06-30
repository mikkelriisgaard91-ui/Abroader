export const termsOfServiceMeta = {
  version: "1.0",
  lastUpdated: "30 June 2026",
  operator: "Riisgaard Consulting OÜ",
  operatorCountry: "Estonia",
  platformName: "Abroader",
  platformUrl: "https://abroader.io",
  contactEmail: "admin@abroader.io",
  activityBudgetAmount: "€200",
} as const;

export const commissionChannels = [
  {
    rate: "35%",
    title: "Complete recruitment",
    description: "Full recruitment cycle from screening through placement.",
  },
  {
    rate: "15%",
    title: "Candidate sourcing",
    description: "You source the candidate; another Abroader completes the hire.",
  },
  {
    rate: "10%",
    title: "Client referral",
    description: "Recurring commission for as long as that client keeps hiring through the Platform.",
  },
  {
    rate: "10%",
    title: "Client relationship management",
    description: "Ongoing commission on each placement where you manage the client relationship.",
  },
  {
    rate: "7.5%",
    title: "Recruiter override",
    description: "Ongoing commission from placements made by another Abroader you introduce to the Platform.",
  },
] as const;

export const illustrativeEarningsExamples = [
  "Year 1: £12k",
  "Year 2: £25k",
  "Year 3: £40k+",
] as const;
