export const privacyPolicyMeta = {
  version: "1.0",
  lastUpdated: "30 June 2026",
  controller: "Riisgaard Consulting OÜ",
  controllerCountry: "Estonia",
  platformName: "Abroader",
  platformUrl: "https://abroader.io",
  contactEmail: "admin@abroader.io",
  dpoEmail: "admin@abroader.io",
  supervisoryAuthority: "Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon)",
  supervisoryAuthorityUrl: "https://www.aki.ee/en",
} as const;

export const dataInventory = {
  abroaders: {
    role: "Independent recruiters using the Platform to run their own practice.",
    fields: [
      "Name, email & phone",
      "Location",
      "Payment & banking details",
      "LinkedIn / social profiles",
      "Commission & performance data",
      "Activity budget spend",
      "Account & usage logs",
    ],
  },
  candidates: {
    role: "Job seekers applying through an Abroader's page or live vacancies.",
    fields: [
      "Name & contact details",
      "CV, work history & qualifications",
      "Nationality & right-to-work",
      "Application status",
      "Communications with Abroader",
    ],
  },
  clients: {
    role: "Employers listing vacancies or hiring through the Platform.",
    fields: [
      "Company & contact details",
      "Vacancy requirements",
      "Hiring activity",
      "Billing & invoicing information",
    ],
  },
  siteVisitors: {
    role: "Anyone browsing abroader.io without registering.",
    fields: [
      "IP address & device data",
      "Browser information",
      "Cookies & analytics data",
    ],
  },
} as const;

export const dataFlows = [
  {
    from: "Candidates",
    to: "Platform",
    label: "Applications & CVs via landing pages",
  },
  {
    from: "Abroaders",
    to: "Platform",
    label: "Account data, sourcing activity & commission records",
  },
  {
    from: "Clients",
    to: "Platform",
    label: "Vacancies, hiring activity & billing details",
  },
  {
    from: "Platform",
    to: "Clients",
    label: "Candidate introductions for hiring decisions",
  },
  {
    from: "Platform",
    to: "Abroaders",
    label: "Vacancies, tools, payouts & performance data",
  },
  {
    from: "Platform",
    to: "Abroaders",
    label: "Split sourcing: shared Candidate data between recruiters",
  },
  {
    from: "Platform",
    to: "Finance providers",
    label: "Commission payouts & client invoicing",
  },
] as const;

export const processingActivities = [
  {
    title: "Matching & introductions",
    description: "Connect Candidates to vacancies and facilitate introductions to Clients.",
  },
  {
    title: "Commission & payouts",
    description: "Track commissions and pay Abroaders via finance and payment processors.",
  },
  {
    title: "Landing pages",
    description: "Host Abroader-branded pages showing limited public recruiter info — not Candidate data.",
  },
  {
    title: "Client invoicing",
    description: "Invoice Clients centrally on behalf of the Platform.",
  },
  {
    title: "Split recruitment roles",
    description: "Share Candidate data between sourcing and placing Abroaders where roles are split.",
  },
  {
    title: "International transfers",
    description: "Transfer data outside the EEA where placement requires it, using SCCs or adequacy decisions.",
  },
] as const;

export const cookieCategories = [
  {
    category: "Essential",
    purpose: "Required for the Platform to function (e.g. security, session management, load balancing).",
    provider: "[INSERT ESSENTIAL COOKIE PROVIDER]",
    retention: "[INSERT RETENTION PERIOD]",
  },
  {
    category: "Analytics",
    purpose: "Help us understand how visitors use abroader.io so we can improve the Platform.",
    provider: "[INSERT ANALYTICS PROVIDER]",
    retention: "[INSERT RETENTION PERIOD]",
  },
  {
    category: "Marketing",
    purpose: "Used to measure campaigns and deliver relevant content, where you have consented.",
    provider: "[INSERT MARKETING PROVIDER]",
    retention: "[INSERT RETENTION PERIOD]",
  },
] as const;

export const retentionPeriods = {
  candidateActiveApplications: "[INSERT RETENTION PERIOD — active applications]",
  candidateAfterClosure: "[INSERT RETENTION PERIOD — after application closed]",
  abroaderAccount: "[INSERT RETENTION PERIOD — Abroader account data]",
  commissionFinancialRecords: "[INSERT RETENTION PERIOD — commission and financial records]",
  clientRecords: "[INSERT RETENTION PERIOD — Client records]",
  siteAnalytics: "[INSERT RETENTION PERIOD — analytics data]",
} as const;

export const subProcessors = [
  "[INSERT PAYMENT PROCESSOR]",
  "[INSERT INVOICING / FINANCE TOOL]",
  "[INSERT HOSTING PROVIDER]",
  "[INSERT EMAIL SERVICE PROVIDER]",
  "[INSERT ANALYTICS PROVIDER]",
] as const;
