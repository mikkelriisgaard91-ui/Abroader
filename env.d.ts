declare namespace NodeJS {
  interface ProcessEnv {
    /** Teamtailor Partner API token (server-only). */
    TEAMTAILOR_API_TOKEN?: string;
    /** Optional. Default EU: `https://api.teamtailor.com/v1`. US West: `https://api.na.teamtailor.com/v1`. */
    TEAMTAILOR_API_BASE?: string;
  }
}
