import type { Metadata } from "next";
import PortugalLandingPage from "@/components/relocation/PortugalLandingPage";
import { portugalMetadata, portugalOgImage } from "@/config/portugalLanding";

export const metadata: Metadata = {
  title: portugalMetadata.title,
  description: portugalMetadata.description,
  openGraph: {
    title: portugalMetadata.title,
    description: portugalMetadata.description,
    siteName: "Abroader",
    images: [
      {
        url: portugalOgImage.src,
        alt: portugalOgImage.alt,
      },
    ],
  },
};

export default function FlytTilPortugalPage() {
  return (
    <div className="min-h-screen bg-base">
      <PortugalLandingPage />
    </div>
  );
}
