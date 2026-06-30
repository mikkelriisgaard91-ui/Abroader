import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import TermsOfServiceContent from "@/components/legal/TermsOfServiceContent";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
  title: "Terms of Service — Abroader",
  description:
    "Terms of Service for Abroaders using the Abroader platform. Independent contractor terms covering commission, activity budget, and platform use.",
  openGraph: {
    title: "Terms of Service — Abroader",
    description:
      "Terms of Service for Abroaders using the Abroader platform operated by Riisgaard Consulting OÜ.",
    siteName: "Abroader",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-base">
      <HomeNav />
      <div className="pt-[72px]">
        <TermsOfServiceContent />
      </div>
      <LandingFooter />
    </main>
  );
}
