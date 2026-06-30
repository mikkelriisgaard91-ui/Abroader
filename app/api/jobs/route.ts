import { NextResponse } from "next/server";
import { defaultRecruiter, getRecruiterBySlug } from "@/config/recruiters";
import { fetchJobsForRecruiter } from "@/lib/teamtailor";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") ?? defaultRecruiter.slug;
  const fresh = searchParams.get("fresh") === "1";
  const recruiter = getRecruiterBySlug(slug) ?? defaultRecruiter;
  const result = await fetchJobsForRecruiter(recruiter.teamtailorUserId, { fresh });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false as const, error: result.error, jobs: [] },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true as const, jobs: result.jobs });
}
