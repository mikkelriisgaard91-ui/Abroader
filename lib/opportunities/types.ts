export type ProviderCategory =
  | "certification-body"
  | "training-placement"
  | "job-board"
  | "direct-employer"
  | "government-programme"
  | "aggregator";

export type Provider = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  category: ProviderCategory;
  /** One-sentence "use this when" guidance shown in comparison table */
  useWhen: string;
};

export type ProviderGroup = {
  /** H3 heading for the group */
  heading: string;
  /** Short paragraph shown above the providers in the group */
  intro: string;
  providers: Provider[];
};

export type Region = {
  slug: string;
  name: string;
  /** Short label shown in nav pills, e.g. "Portugal" */
  label: string;
  image: string;
  imageAlt: string;
  season: string;
  /** 3–5 sentence editorial paragraph */
  body: string;
  /** Optional cross-link to Abroader internal page */
  relatedHref?: string;
  relatedLabel?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type RoleType = {
  title: string;
  /** Emoji icon, e.g. "⚓" */
  icon: string;
  level: "Entry level" | "Entry-mid level" | "Mid level" | "Mid-senior level" | "Senior level";
  /** Key certifications or requirements */
  keyCerts: string[];
  /** e.g. "$800–$1,800 /mo (charter)" */
  salaryRange: string;
  /** 2–3 sentence description of what the role involves */
  description: string;
};

export type SeasonalCalendarEntry = {
  region: string;
  /** e.g. "May – October" */
  months: string;
  /** Key locations within the region */
  locations: string[];
  /** Brief editorial context */
  notes?: string;
};

export type OpportunityLanding = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  /** Eyebrow category badge shown in hero */
  category: string;
  /** Quick stats shown under the hero */
  stats: Array<{ value: string; label: string }>;
  /** Long-form intro (1–3 paragraphs) */
  introHeading: string;
  introParagraphs: string[];
  /** Numbered steps for "how this works" */
  howItWorks: Array<{ step: number; title: string; body: string }>;
  /** H2 above the numbered steps — defaults to generic text if absent */
  howItWorksHeading?: string;
  /** Short explanatory paragraph for why multiple providers are listed */
  whyProviders: string;
  providerGroups: ProviderGroup[];
  regionsHeading: string;
  regionsIntro: string;
  regions: Region[];
  faqHeading: string;
  faqIntro: string;
  faqs: FaqItem[];
  /** Disclaimer shown at end of providers section */
  disclaimer: string;
  /** Big H2 in the final CTA section */
  ctaHeading?: string;
  /** Paragraph under ctaHeading */
  ctaDescription?: string;
  /** CTA buttons — first with primary: true gets the yellow style */
  ctaLinks?: Array<{ href: string; label: string; primary?: boolean }>;
  /** Related links row at the bottom of the CTA section */
  relatedLinks?: Array<{ href: string; label: string }>;
  /**
   * Optional salary comparison cards, rendered between Providers and Regions.
   * Absent → section is skipped. The `country` field doubles as role/country
   * label and `flag` as the visual emoji.
   */
  salaryHighlights?: SalaryHighlight[];
  salaryHighlightsHeading?: string;
  salaryHighlightsIntro?: string;
  /**
   * Optional crew role breakdown cards, rendered between Intro and How It Works.
   * Absent → section is skipped.
   */
  roleTypes?: RoleType[];
  roleTypesHeading?: string;
  roleTypesIntro?: string;
  /**
   * Optional seasonal calendar strip, rendered between Regions and FAQ.
   * Absent → section is skipped.
   */
  seasonalCalendar?: SeasonalCalendarEntry[];
  seasonalCalendarHeading?: string;
  seasonalCalendarIntro?: string;
  /**
   * Optional insider tips section rendered after Regions on a dark background.
   * Short punchy tips — not generic advice. Absent → section is skipped.
   */
  goodToKnow?: GoodToKnowTip[];
  goodToKnowHeading?: string;
  youtubeVideos?: YoutubeVideo[];
  youtubeVideosHeading?: string;
  youtubeVideosIntro?: string;
};

export type GoodToKnowTip = {
  emoji: string;
  title: string;
  body: string;
};

export type YoutubeVideo = {
  videoId: string;
  title: string;
  channelName: string;
  description?: string;
};

export type SalaryHighlight = {
  /** Role or country label, e.g. "Deckhand" or "South Korea" */
  country: string;
  /** Emoji, e.g. "⚓" or "🇰🇷" */
  flag: string;
  /** e.g. "$800–$1,800" */
  salaryRange: string;
  /** e.g. "per month (charter boat)" */
  salaryLabel: string;
  /** Short bullet list of what's typically included */
  includes: string[];
  /** Optional badge label, e.g. "Most common first role" */
  badge?: string;
};
