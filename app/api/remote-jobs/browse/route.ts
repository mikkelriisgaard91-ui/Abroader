import { NextResponse } from "next/server";
import { getBrowseJobs } from "@/lib/remote-jobs/browse-data";

/**
 * Aggregates remote listings from Himalayas, Remotive, Remote OK, and Jobicy (server-side to avoid CORS).
 * Sorts by recency when dates are available.
 */

export const dynamic = "force-dynamic";

export async function GET() {
  const { jobs, error } = await getBrowseJobs();

  if (jobs.length === 0) {
    return NextResponse.json({
      jobs: [],
      error: error ?? "Could not load listings from any source right now.",
    });
  }

  return NextResponse.json({ jobs, error: null as string | null });
}
