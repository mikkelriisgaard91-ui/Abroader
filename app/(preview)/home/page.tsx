import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { landingMetadata } from "@/config/abroaderLanding";

export const metadata: Metadata = {
  title: landingMetadata.title,
  description: landingMetadata.description,
  openGraph: {
    title: landingMetadata.title,
    description: landingMetadata.description,
    siteName: "Abroader",
  },
};

export default function Home() {
  return <HomePage />;
}
