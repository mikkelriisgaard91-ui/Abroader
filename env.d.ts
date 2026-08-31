declare namespace NodeJS {
  interface ProcessEnv {
    /** Teamtailor API key (server-only). Also accepts TEAMTAILOR_API_TOKEN or Teamtailor_API. */
    TEAMTAILOR_API_KEY?: string;
    Teamtailor_API?: string;
    TEAMTAILOR_API_TOKEN?: string;
    /** How often SSR re-fetches Teamtailor jobs (seconds, default 60). */
    TEAMTAILOR_REVALIDATE_SECONDS?: string;
    /** Client poll interval for /api/jobs (ms, default 60000). */
    NEXT_PUBLIC_JOBS_POLL_INTERVAL_MS?: string;
    /** Google Analytics 4 Measurement ID (e.g. G-XXXXXXXXXX). Public — required for GA4 site-wide tracking. */
    NEXT_PUBLIC_GA_MEASUREMENT_ID?: string;
    /** Max Teamtailor API pages to fetch when building the job index (default 10). */
    MAX_TEAMTAILOR_PAGES?: string;
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
    /** Mailchimp datacenter (e.g. us21). Optional if MAILCHIMP_API_KEY ends with -{server}. */
    MAILCHIMP_SERVER?: string;
    /** New Mailchimp members: `subscribed` (default), `pending` (double opt-in), or `transactional`. */
    MAILCHIMP_STATUS_IF_NEW?: string;
    /** Resend API key for `/api/consultation` (server-only). */
    RESEND_API_KEY?: string;
    /** Optional. `From` header for consultation emails (default: onboarding@resend.dev until domain is verified). */
    RESEND_FROM?: string;
    /** Optional. Inbox for consultation notifications (default: mikkel@abroader.io). Set to your Resend account email when using test sender before domain verify. */
    CONSULTATION_NOTIFY_EMAIL?: string;
    /** Optional. Inbox for employers contact form notifications (default: mikkel@abroader.io). */
    EMPLOYERS_NOTIFY_EMAIL?: string;
  }
}
