declare namespace NodeJS {
  interface ProcessEnv {
    /** Teamtailor Partner API token (server-only). */
    TEAMTAILOR_API_TOKEN?: string;
    /** Optional. Default EU: `https://api.teamtailor.com/v1`. US West: `https://api.na.teamtailor.com/v1`. */
    TEAMTAILOR_API_BASE?: string;
    /** Public careersite origin for job URLs when Partner API omits `links` on `GET /jobs/:id` (default: Abroader careersite). */
    TEAMTAILOR_CAREERSITE_BASE?: string;
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
    /** Optional override for `/hospitality` seasonal jobs department (Partner API /departments). */
    TEAMTAILOR_SEASONAL_DEPARTMENT_ID?: string;
    /** Optional override for `/volunteering` department (Partner API /departments). */
    TEAMTAILOR_VOLUNTEER_DEPARTMENT_ID?: string;
    /** Optional. Teamtailor job id for the international recruiter role on the home page sidebar (Partner API `jobs` id). */
    TEAMTAILOR_LANDING_INTERNATIONAL_RECRUITER_JOB_ID?: string;
    /** Mailchimp API key (server-only). Format: <key>-<server> e.g. abc123-us10 */
    MAILCHIMP_API_KEY?: string;
    /** Mailchimp audience/list ID to subscribe newsletter signups to. */
    MAILCHIMP_AUDIENCE_ID?: string;
    /** Mailchimp server prefix — the part after the dash in the API key (e.g. us10). */
    MAILCHIMP_SERVER?: string;
    /** Resend API key for `/api/consultation` (server-only). */
    RESEND_API_KEY?: string;
    /** Optional. `From` header for consultation emails (default: onboarding@resend.dev until domain is verified). */
    RESEND_FROM?: string;
    /** Optional. Inbox for consultation notifications (default: mikkel@abroader.io). Set to your Resend account email when using test sender before domain verify. */
    CONSULTATION_NOTIFY_EMAIL?: string;
  }
}
