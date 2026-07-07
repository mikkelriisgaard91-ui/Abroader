import type { Metadata } from "next";
import CompanyLandingPage from "@/components/company/CompanyLandingPage";
import { companyMetadata } from "@/config/companyLanding";

export const metadata: Metadata = {
  title: companyMetadata.title,
  description: companyMetadata.description,
  openGraph: {
    title: companyMetadata.title,
    description: companyMetadata.description,
    siteName: "Abroader",
  },
};

export default function HireWithAbroaderPage() {
  return (
    <div className="min-h-screen bg-base">
      <CompanyLandingPage />
    </div>
  );
}
