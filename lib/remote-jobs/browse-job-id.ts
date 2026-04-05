import { createHash } from "crypto";

/** Stable id from board label + application URL (shared by browse aggregate and Teamtailor adapter). */
export function jobIdForBrowseEntry(source: string, applicationLink: string): string {
  return createHash("sha256").update(`${source}\0${applicationLink}`).digest("hex").slice(0, 20);
}
