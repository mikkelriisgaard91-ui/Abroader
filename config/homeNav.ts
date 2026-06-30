export {
  landingCtas,
  landingFooter,
  RECRUITER_APPLY_URL,
} from "@/config/abroaderLanding";

export const BECOME_AN_ABROADER_PATH = "/become-an-abroader" as const;

export const homeNavLinks = [
  { label: "Become an Abroader", href: BECOME_AN_ABROADER_PATH },
  { label: "Find a Job Abroad", href: "/choose-your-recruiter" },
] as const;

export const homePageSections = [] as const;
