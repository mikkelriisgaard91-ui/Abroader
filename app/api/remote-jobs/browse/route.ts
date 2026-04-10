import { type NextRequest, NextResponse } from "next/server";
import { getBrowseJobs } from "@/lib/remote-jobs/browse-data";

/**
 * Aggregates remote listings (server-side to avoid CORS).
 */

export const dynamic = "force-dynamic";

export async function GET(_request: NextRequest) {
  const { jobs, error, sourceErrors } = await getBrowseJobs();

  if (jobs.length === 0) {
    const body: Record<string, unknown> = {
      jobs: [],
      error: error ?? "Could not load listings from any source right now.",
    };
    if (process.env.NODE_ENV === "development" && sourceErrors) {
      body.sourceErrors = sourceErrors;
    }
    return NextResponse.json(body);
  }

  /** List view only — omits long descriptions. Detail + AI matching use `/api/remote-jobs/browse-with-featured` (full DTOs). */
  const jobsForList = jobs.map(({ descriptionPlain, ...rest }) => {
    void descriptionPlain;
    return rest;
  });

  const body: Record<string, unknown> = { jobs: jobsForList, error: null as string | null };
  if (process.env.NODE_ENV === "development" && sourceErrors) {
    body.sourceErrors = sourceErrors;
  }
  return NextResponse.json(body);
}
