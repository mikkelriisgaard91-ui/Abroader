import type { Metadata } from "next";
import CareerSupportContent from "./career-support-content";

export const metadata: Metadata = {
  title: "Career support — job search, CV & interviews | Abroader",
  description:
    "Get personal support for your job search abroad: standalone job-search packages (shortlist, outreach strategy, tracker), plus CV feedback, interview coaching, and a clearer path to your next role. Speak with the Abroader team.",
};

export default function CareerSupportPage() {
  return <CareerSupportContent />;
}
