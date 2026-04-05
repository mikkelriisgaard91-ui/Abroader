import { NextResponse } from "next/server";
import { getBrowseJobs } from "@/lib/remote-jobs/browse-data";
import { mergeBrowseAndFeaturedTeamtailor } from "@/lib/remote-jobs/featured-as-browse";
import { fetchTeamtailorFeaturedJobs } from "@/lib/remote-jobs/teamtailor-featured";

/**
 * Aggregated browse feed (four boards) plus Teamtailor featured roles, deduped by application URL.
 * Used by AI job search matches (server-side merge avoids pulling crypto into the client bundle).
 */

export const dynamic = "force-dynamic";

export async function GET() {
  const [{ jobs: browseJobs, error }, tt] = await Promise.all([
    getBrowseJobs(),
    fetchTeamtailorFeaturedJobs({ englishOnly: true, pageSize: 30 }),
  ]);

  const merged = mergeBrowseAndFeaturedTeamtailor(browseJobs, tt.jobs);

  if (merged.length === 0) {
    return NextResponse.json({
      jobs: [],
      error: error ?? (tt.ok ? null : tt.error) ?? "Could not load listings right now.",
    });
  }

  return NextResponse.json({ jobs: merged, error: null as string | null });
}
