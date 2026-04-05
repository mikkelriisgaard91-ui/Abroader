import { jobIdForBrowseEntry } from "@/lib/remote-jobs/browse-job-id";
import {
  fetchTeamtailorFeaturedJobs,
  type FeaturedJobWithBrowseId,
} from "@/lib/remote-jobs/teamtailor-featured";
import { NextResponse } from "next/server";

export type { FeaturedJobDto, FeaturedJobWithBrowseId } from "@/lib/remote-jobs/teamtailor-featured";

const TEAMTAILOR_SOURCE = "Teamtailor";

export async function GET() {
  /** Request a larger page so after English-only filtering we can still return up to 9 roles. */
  const result = await fetchTeamtailorFeaturedJobs({ englishOnly: true, pageSize: 30 });
  if (!result.ok) {
    return NextResponse.json({
      ok: false as const,
      error: result.error,
      jobs: result.jobs,
    });
  }
  const jobs: FeaturedJobWithBrowseId[] = result.jobs.slice(0, 9).map((j) => ({
    ...j,
    browseId: jobIdForBrowseEntry(TEAMTAILOR_SOURCE, j.applyUrl.trim()),
  }));
  return NextResponse.json({ ok: true as const, jobs, error: null as string | null });
}
