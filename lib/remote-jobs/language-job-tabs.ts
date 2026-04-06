/** Shared tab config for the language jobs page (safe to import from client components). */

export const LANGUAGE_JOB_TAB_ORDER = [
  "danish",
  "swedish",
  "norwegian",
  "german",
  "dutch",
  "finnish",
  "english",
  "french",
  "spanish",
] as const;

export type LanguageJobTabId = (typeof LANGUAGE_JOB_TAB_ORDER)[number];

export const LANGUAGE_JOB_TAB_LABELS: Record<LanguageJobTabId, string> = {
  danish: "Danish",
  swedish: "Swedish",
  norwegian: "Norwegian",
  german: "German",
  dutch: "Dutch",
  finnish: "Finnish",
  english: "English",
  french: "French",
  spanish: "Spanish",
};

/** Language tabs plus aggregated &quot;All Jobs&quot; (first in UI order). */
export const LANGUAGE_JOBS_UI_TAB_ORDER = ["all", ...LANGUAGE_JOB_TAB_ORDER] as const;
export type LanguageJobsUiTabId = (typeof LANGUAGE_JOBS_UI_TAB_ORDER)[number];

export const LANGUAGE_JOBS_UI_TAB_LABELS: Record<LanguageJobsUiTabId, string> = {
  all: "All Jobs",
  ...LANGUAGE_JOB_TAB_LABELS,
};

export function parseLanguageJobsUiTabParam(tab: string | undefined): LanguageJobsUiTabId {
  if (tab && (LANGUAGE_JOBS_UI_TAB_ORDER as readonly string[]).includes(tab)) {
    return tab as LanguageJobsUiTabId;
  }
  return "all";
}

/**
 * Teamtailor department names (`attributes.name`) for each tab, in priority order.
 * The first match wins. Add aliases if your Teamtailor labels differ; optional
 * `TEAMTAILOR_*_DEPARTMENT_ID` env vars override lookup entirely.
 */
export const LANGUAGE_JOB_DEPARTMENT_NAMES: Record<LanguageJobTabId, readonly string[]> = {
  danish: ["Danish Speaking Jobs", "Danish Jobs", "Danish Speaking"],
  swedish: ["Swedish Speaking Jobs", "Swedish Jobs", "Swedish Speaking"],
  norwegian: ["Norwegian Speaking Jobs", "Norwegian Jobs", "Norwegian Speaking"],
  german: ["German Speaking Jobs", "German Jobs", "German Speaking", "Deutschsprachige Jobs"],
  dutch: ["Dutch Speaking Jobs", "Dutch Jobs", "Dutch Speaking"],
  finnish: ["Finnish Speaking Jobs", "Finnish Jobs", "Finnish Speaking"],
  english: ["English Speaking Jobs", "English Jobs", "English Speaking"],
  french: ["French Speaking Jobs", "French Jobs", "French Speaking"],
  spanish: ["Spanish Speaking Jobs", "Spanish Jobs", "Spanish Speaking"],
};
