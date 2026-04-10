import type { Metadata } from "next";
import LearningLivingContent from "./learning-living-content";

const SITE = "https://abroader.vercel.app";

export const metadata: Metadata = {
  title: "Learning Living — travel, learn & build digital skills abroad | Abroader",
  description:
    "Combine travel with learning: online courses, bootcamps, nomad programs, and skills that pay. Practical paths to location freedom and a career you control.",
  openGraph: {
    title: "Learning Living — travel, learn & build digital skills anywhere | Abroader",
    description:
      "Learn coding, marketing, AI, or remote work skills while living abroad. Where to start, what it costs, and how Abroader can help.",
    type: "website",
    url: `${SITE}/remote-living/learning-based`,
  },
  alternates: {
    canonical: `${SITE}/remote-living/learning-based`,
  },
};

export default function LearningBasedPage() {
  return <LearningLivingContent />;
}
