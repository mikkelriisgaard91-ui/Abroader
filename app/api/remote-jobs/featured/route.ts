import { fetchTeamtailorFeaturedJobs } from "@/lib/remote-jobs/teamtailor-featured";
import { NextResponse } from "next/server";

export type { FeaturedJobDto } from "@/lib/remote-jobs/teamtailor-featured";

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
  const jobs = result.jobs.slice(0, 9);
  return NextResponse.json({ ok: true as const, jobs, error: null as string | null });
}
