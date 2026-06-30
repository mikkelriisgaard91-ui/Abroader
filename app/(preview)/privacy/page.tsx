import type { Metadata } from "next";
import HomeNav from "@/components/HomeNav";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import LandingFooter from "@/components/landing/LandingFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — Abroader",
  description:
    "How Abroader collects, uses, and protects personal data under GDPR. Information for Abroaders, Candidates, Clients, and site visitors.",
  openGraph: {
    title: "Privacy Policy — Abroader",
    description:
      "Privacy Policy for abroader.io, operated by Riisgaard Consulting OÜ (Estonia).",
    siteName: "Abroader",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-base">
      <HomeNav />
      <div className="pt-[72px]">
        <PrivacyPolicyContent />
      </div>
      <LandingFooter />
    </main>
  );
}
