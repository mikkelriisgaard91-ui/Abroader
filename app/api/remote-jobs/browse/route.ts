import { type NextRequest, NextResponse } from "next/server";
import { getBrowseJobs } from "@/lib/remote-jobs/browse-data";

/**
 * Aggregates remote listings (server-side to avoid CORS).
 */

export const dynamic = "force-dynamic";

export async function GET(_request: NextRequest) {
  const { jobs, error } = await getBrowseJobs();

  if (jobs.length === 0) {
    return NextResponse.json({
      jobs: [],
      error: error ?? "Could not load listings from any source right now.",
    });
  }

  /** List view only — omits long descriptions. Detail + AI matching use `/api/remote-jobs/browse-with-featured` (full DTOs). */
  const jobsForList = jobs.map(({ descriptionPlain, ...rest }) => {
    void descriptionPlain;
    return rest;
  });

  return NextResponse.json({ jobs: jobsForList, error: null as string | null });
}
