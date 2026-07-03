import type { Locale } from "@/config/i18n";
import { LANGUAGE_TAGS, ROLE_EXPERIENCE_TAGS } from "@/config/recruiterTags";
import type { RecruiterConfig } from "@/config/recruiters";
import { getRecruiterForLocale } from "@/config/recruiters";

export const ALL_FILTER = "__all__";

export type RecruiterFilterState = {
  role: string;
  language: string;
};

export const DEFAULT_RECRUITER_FILTERS: RecruiterFilterState = {
  role: ALL_FILTER,
  language: ALL_FILTER,
};

export type RecruiterFilterOptions = {
  roles: string[];
  languages: string[];
};

export function getRecruiterFilterOptions(
  recruiters: RecruiterConfig[],
  locale: Locale = "en"
): RecruiterFilterOptions {
  const usedRoles = new Set<string>();
  const usedLanguages = new Set<string>();

  for (const recruiter of recruiters) {
    const resolved = getRecruiterForLocale(recruiter, locale);
    for (const tag of resolved.roleExperience) usedRoles.add(tag);
    for (const tag of resolved.languages) usedLanguages.add(tag);
  }

  return {
    roles: ROLE_EXPERIENCE_TAGS.filter((tag) => usedRoles.has(tag)),
    languages: LANGUAGE_TAGS.filter((tag) => usedLanguages.has(tag)),
  };
}

export function filterRecruiters(
  recruiters: RecruiterConfig[],
  filters: RecruiterFilterState,
  locale: Locale = "en"
): RecruiterConfig[] {
  return recruiters.filter((recruiter) => {
    const resolved = getRecruiterForLocale(recruiter, locale);

    if (filters.role !== ALL_FILTER && !resolved.roleExperience.includes(filters.role)) {
      return false;
    }
    if (filters.language !== ALL_FILTER && !resolved.languages.includes(filters.language)) {
      return false;
    }

    return true;
  });
}

export function hasActiveRecruiterFilters(filters: RecruiterFilterState): boolean {
  return filters.role !== ALL_FILTER || filters.language !== ALL_FILTER;
}
