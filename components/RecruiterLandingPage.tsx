import type { RecruiterConfig } from "@/config/recruiters";
import { syncRecruiterFromTeamtailor } from "@/lib/recruiterTeamtailorSync";
import { fetchJobsForRecruiter } from "@/lib/teamtailor";
import RecruiterPageShell from "@/components/RecruiterPageShell";

export default async function RecruiterLandingPage({
  recruiter,
}: {
  recruiter: RecruiterConfig;
}) {
  const synced = await syncRecruiterFromTeamtailor(recruiter);
  const result = await fetchJobsForRecruiter(synced.teamtailorUserId);
  const jobs = result.ok ? result.jobs : [];

  return <RecruiterPageShell recruiter={synced} jobs={jobs} />;
}
