import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import LandingFooter from "@/components/landing/LandingFooter";
import OurProcessSection from "@/components/company/sections/OurProcessSection";
import CompanyFinalCtaSection from "@/components/company/sections/CompanyFinalCtaSection";
import { becomeClientCtaContent, ourProcessMetadata } from "@/config/companyLanding";

export const metadata: Metadata = {
  title: ourProcessMetadata.title,
  description: ourProcessMetadata.description,
  openGraph: {
    title: ourProcessMetadata.title,
    description: ourProcessMetadata.description,
    siteName: "Abroader",
  },
};

export default function OurProcessPage() {
  return (
    <main className="min-h-screen bg-base">
      <HomeNav />
      <div className="pt-[72px]">
        <OurProcessSection />
        <CompanyFinalCtaSection
          headline={becomeClientCtaContent.headline}
          supporting={becomeClientCtaContent.supporting}
          primaryCta={becomeClientCtaContent.primaryCta}
        />
      </div>
      <LandingFooter />
    </main>
  );
}
