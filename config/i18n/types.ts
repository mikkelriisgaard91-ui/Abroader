export type Locale = "en" | "da";

export const LOCALES: Locale[] = ["en", "da"];

export const LOCALE_COOKIE = "locale";

export type Translations = {
  nav: {
    brand: string;
    jobs: string;
    howItWorks: string;
    about: string;
    forEmployers: string;
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    placedBy: string;
    specialist: string;
    seeOpenRoles: string;
    howItWorks: string;
    moreTags: string;
  };
  jobs: {
    heading: string;
    subtext: string;
    category: string;
    location: string;
    all: string;
    applyNow: string;
    emptyTitle: string;
    emptyBody: string;
    getInTouch: string;
  };
  howItWorks: {
    heading: string;
    subtext: string;
    step: string;
    browseOpenRoles: string;
    steps: Array<{ heading: string; description: string }>;
  };
  about: {
    eyebrow: string;
    heading: string;
    statPlacements: string;
    statCountries: string;
    statYears: string;
    roleExperience: string;
    languages: string;
    travelGuidance: string;
    travelSubtext: string;
  };
  forEmployers: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
    valueProps: Array<{ heading: string; description: string }>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    body1: string;
    body2: string;
    linkedIn: string;
    bookCall: string;
    whatsapp: string;
    whatsappFloat: string;
  };
  footer: {
    tagline: string;
    pageBy: string;
    rights: string;
  };
  languageSwitcher: {
    switchToEnglish: string;
    switchToDanish: string;
  };
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
};
