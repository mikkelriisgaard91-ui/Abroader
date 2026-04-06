export type CountryGuide = {

  slug: string;

  country: string;

  flag: string;

  continent: string;

  capital: string;

  currency: string;

  language: string;

  timezone: string;

  visaDifficulty: "Easy" | "Medium" | "Hard";

  internetSpeed: "Excellent" | "Good" | "Average" | "Poor";

  costOfLiving: "Low" | "Medium" | "High" | "Very High";

  avgMonthlyCost: number;

  seoTitle: string;

  seoDescription: string;

  highlights: string[];

  /** Material Symbols names for Overview cards (optional; aligns icons with highlight text). */
  overviewHighlightIcons?: string[];

  visaOptions: {

    name: string;

    duration: string;

    cost: string;

    requirements: string;

  }[];

  cities: {

    name: string;

    vibe: string;

    avgRent: string;

    coworkingSpaces: string;

    /** Optional hero photo for this city (Top Nomad Hubs). When omitted, a flag + gradient placeholder is shown. */
    imageUrl?: string;

  }[];

  costBreakdown: {

    rent: string;

    food: string;

    transport: string;

    coworking: string;

  };

  taxInfo: string;

  communityTips: string;

  bestFor: string[];

  jobLink: string;

  /** Step-by-step visa / permit application narrative */

  applicationProcess?: string;

  bankingTips?: string;

  healthcareInfo?: string;

  culturalTips?: string;

  /** Itemised realistic monthly budget narrative */

  realMonthlyCost?: string;

  expatCommunities?: string[];

  prosAndCons?: {

    pros: string[];

    cons: string[];

  };

  bestNeighbourhoods?: {

    city: string;

    neighbourhood: string;

    description: string;

  }[];

  faqs?: {

    question: string;

    answer: string;

  }[];

  /** Human-readable refresh date for UI + schema */

  updated?: string;

  wordCount?: number;

};


