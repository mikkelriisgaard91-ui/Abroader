import type { RecruiterConfig } from "@/config/recruiters";
import { fetchJobsForRecruiter } from "@/lib/teamtailor";
import RecruiterPageShell from "@/components/RecruiterPageShell";

export default async function RecruiterLandingPage({
  recruiter,
}: {
  recruiter: RecruiterConfig;
}) {
  const result = await fetchJobsForRecruiter(recruiter.teamtailorUserId);
  const jobs = result.ok ? result.jobs : [];

  return <RecruiterPageShell recruiter={recruiter} jobs={jobs} />;
}
