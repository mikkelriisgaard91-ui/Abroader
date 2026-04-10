import type { Metadata } from "next";
import EcoSustainableContent from "./eco-sustainable-content";

const SITE = "https://abroader.vercel.app";

export const metadata: Metadata = {
  title: "Eco & sustainable living — closer to nature, keep your income | Abroader",
  description:
    "Explore eco living without giving up income: ecovillages, farm exchanges, off-grid basics, and remote work in nature. Practical paths, real platforms, honest trade-offs.",
  openGraph: {
    title: "Live closer to nature — without giving up income | Abroader",
    description:
      "Ecovillages, farm stays, off-grid living, and remote work in nature. Resources, platforms, and a clear way to start.",
    type: "website",
    url: `${SITE}/remote-living/eco-sustainable`,
  },
  alternates: {
    canonical: `${SITE}/remote-living/eco-sustainable`,
  },
};

export default function EcoSustainablePage() {
  return <EcoSustainableContent />;
}
