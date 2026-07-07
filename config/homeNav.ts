export {
  landingCtas,
  landingFooter,
  RECRUITER_APPLY_URL,
} from "@/config/abroaderLanding";

export const BECOME_AN_ABROADER_PATH = "/become-an-abroader" as const;

export const HIRE_WITH_ABROADER_PATH = "/hire-with-abroader" as const;

export const homeNavLinks = [
  { label: "Hire with Abroader", href: HIRE_WITH_ABROADER_PATH },
  { label: "Our recruiters", href: "/choose-your-recruiter" },
] as const;

export const homeNavCta = {
  label: "Become a recruiter",
  href: BECOME_AN_ABROADER_PATH,
} as const;

export const homePageSections = [] as const;
