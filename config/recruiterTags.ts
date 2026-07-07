/**
 * Canonical tag vocabulary for recruiter profiles.
 * Used for consistent homepage filtering when multiple recruiters are added.
 */

export const ROLE_EXPERIENCE_TAGS = [
  "Entry-level roles",
  "Marketing",
  "Sales",
  "Tech & Digital",
  "Operations",
  "Finance",
  "Customer Success",
  "Customer service",
  "Hospitality",
  "Construction",
  "IT",
  "Recruitment",
  "Volunteering",
  "Engineering",
] as const;

export const LANGUAGE_TAGS = [
  "Danish",
  "English",
  "Albanian",
  "Polish",
  "German",
  "French",
  "Spanish",
  "Dutch",
  "Swedish",
  "Norwegian",
] as const;

export const TRAVEL_GUIDANCE_TAGS = [
  "Denmark",
  "Germany",
  "Netherlands",
  "Nordics",
  "DACH region",
  "UK",
  "Spain",
  "France",
] as const;

export type RoleExperienceTag = (typeof ROLE_EXPERIENCE_TAGS)[number];
export type LanguageTag = (typeof LANGUAGE_TAGS)[number];
export type TravelGuidanceTag = (typeof TRAVEL_GUIDANCE_TAGS)[number];
