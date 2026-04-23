import type { Metadata } from "next";
import OpportunitiesIframe from "./OpportunitiesIframe";

export const metadata: Metadata = {
  title: "Top 50 Trending Abroad Opportunities 2026 — Abroader",
  description:
    "A research-backed list of the trendiest work, retreats, remote living, volunteering, and skillcation opportunities abroad.",
  openGraph: {
    title: "Top 50 Trending Abroad Opportunities 2026 — Abroader",
    description:
      "A research-backed list of the trendiest work, retreats, remote living, volunteering, and skillcation opportunities abroad.",
    url: "/opportunities",
    type: "website",
  },
  alternates: { canonical: "/opportunities" },
};

export default function OpportunitiesPage() {
  return <OpportunitiesIframe />;
}
