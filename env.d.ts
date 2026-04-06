declare namespace NodeJS {
  interface ProcessEnv {
    /** Teamtailor Partner API token (server-only). */
    TEAMTAILOR_API_TOKEN?: string;
    /** Optional. Default EU: `https://api.teamtailor.com/v1`. US West: `https://api.na.teamtailor.com/v1`. */
    TEAMTAILOR_API_BASE?: string;
    /** Optional Teamtailor department id overrides (see `language-job-tabs.ts` for default names). */
    TEAMTAILOR_DANISH_DEPARTMENT_ID?: string;
    TEAMTAILOR_SWEDISH_DEPARTMENT_ID?: string;
    TEAMTAILOR_NORWEGIAN_DEPARTMENT_ID?: string;
    TEAMTAILOR_GERMAN_DEPARTMENT_ID?: string;
    TEAMTAILOR_DUTCH_DEPARTMENT_ID?: string;
    TEAMTAILOR_FINNISH_DEPARTMENT_ID?: string;
    TEAMTAILOR_ENGLISH_DEPARTMENT_ID?: string;
    TEAMTAILOR_FRENCH_DEPARTMENT_ID?: string;
    TEAMTAILOR_SPANISH_DEPARTMENT_ID?: string;
  }
}
