import {
  landingCtas,
  landingFooter,
  RECRUITER_APPLY_URL,
} from "@/config/abroaderLanding";

export { landingCtas, landingFooter, RECRUITER_APPLY_URL };

export const homeNavLinks = [
  { label: "Become an Abroader", href: RECRUITER_APPLY_URL, external: true },
  { label: "Find a Job Abroad", href: "/choose-your-recruiter" },
] as const;

export const homePageSections = [] as const;
