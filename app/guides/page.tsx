import type { Metadata } from "next";
import GuidesIndexContent from "./guides-index-content";

export const metadata: Metadata = {
  title: "Country Guides — Europe, Asia, Americas, Caribbean & Oceania — Abroader",
  description:
    "Remote work guides for Europe, Asia, North America, the Caribbean, South America, and Oceania: visas, cost of living, best cities, taxes and community tips for digital nomads and expats.",
  openGraph: {
    title: "Country Guides — Europe, Asia, Americas, Caribbean & Oceania — Abroader",
    description:
      "Remote work guides for Europe, Asia, North America, the Caribbean, South America, and Oceania: visas, cost of living, best cities, taxes and community tips for digital nomads and expats.",
    type: "website",
  },
};

export default function GuidesIndexPage() {
  return <GuidesIndexContent />;
}
