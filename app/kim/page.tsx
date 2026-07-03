import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRecruiterBySlug, recruiterMetadata } from "@/config/recruiters";
import { getServerLocale } from "@/lib/i18n/getServerLocale";
import RecruiterLandingPage from "@/components/RecruiterLandingPage";

/** Next.js requires a static literal for segment config. */
export const revalidate = 60;

const SLUG = "kim";

export async function generateMetadata(): Promise<Metadata> {
  const recruiter = getRecruiterBySlug(SLUG);
  if (!recruiter) return {};
  const locale = await getServerLocale();
  return recruiterMetadata(recruiter, locale);
}

export default function KimPage() {
  const recruiter = getRecruiterBySlug(SLUG);
  if (!recruiter) notFound();
  return <RecruiterLandingPage recruiter={recruiter} />;
}
