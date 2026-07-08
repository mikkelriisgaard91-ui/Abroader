import type { Locale } from "@/config/i18n";
import { getLocalized, getLocalizedArray, type LocalizedString, type LocalizedStringArray } from "@/lib/i18n/getLocalized";

export type { LocalizedString, LocalizedStringArray };

/**
 * Recruiter-specific content config.
 *
 * TODO: In production, fetch this object from a CMS (Sanity, Contentful, etc.)
 * or a database, keyed by recruiter slug. One file per recruiter for now.
 */

export type RecruiterConfig = {
  slug: string;
  teamtailorUserId: string;
  name: string;
  firstName: string;
  title: LocalizedString;
  location: LocalizedString;
  languages: LocalizedStringArray;
  roleExperience: LocalizedStringArray;
  travelGuidance: LocalizedStringArray;
  photoUrl: string;
  shortBio: LocalizedString;
  longBio: LocalizedString;
  pullQuote: LocalizedString;
  stats: {
    placements: number | string;
    countries: number;
    yearsExperience: number;
  };
  email: string;
  linkedIn: string;
  calendlyUrl: string;
  whatsappUrl: string;
  /** Optional override for the For Employers "Let's talk" CTA. Defaults to #contact. */
  employerCtaUrl?: string;
  /** Optional override for the nav "Get in touch" CTA. Defaults to #contact. */
  getInTouchUrl?: string;
  /** When true, never show a LinkedIn link/button, even if Teamtailor has one on file. */
  hideLinkedIn?: boolean;
};

export type ResolvedRecruiter = {
  slug: string;
  teamtailorUserId: string;
  name: string;
  firstName: string;
  title: string;
  location: string;
  languages: string[];
  roleExperience: string[];
  travelGuidance: string[];
  photoUrl: string;
  shortBio: string;
  longBio: string;
  pullQuote: string;
  stats: RecruiterConfig["stats"];
  email: string;
  linkedIn: string;
  calendlyUrl: string;
  whatsappUrl: string;
};

export function getRecruiterForLocale(
  recruiter: RecruiterConfig,
  locale: Locale
): ResolvedRecruiter {
  return {
    slug: recruiter.slug,
    teamtailorUserId: recruiter.teamtailorUserId,
    name: recruiter.name,
    firstName: recruiter.firstName,
    title: getLocalized(recruiter.title, locale),
    location: getLocalized(recruiter.location, locale),
    languages: getLocalizedArray(recruiter.languages, locale),
    roleExperience: getLocalizedArray(recruiter.roleExperience, locale),
    travelGuidance: getLocalizedArray(recruiter.travelGuidance, locale),
    photoUrl: recruiter.photoUrl,
    shortBio: getLocalized(recruiter.shortBio, locale),
    longBio: getLocalized(recruiter.longBio, locale),
    pullQuote: getLocalized(recruiter.pullQuote, locale),
    stats: recruiter.stats,
    email: recruiter.email,
    linkedIn: recruiter.hideLinkedIn ? "" : recruiter.linkedIn,
    calendlyUrl: recruiter.calendlyUrl,
    whatsappUrl: recruiter.whatsappUrl,
  };
}
