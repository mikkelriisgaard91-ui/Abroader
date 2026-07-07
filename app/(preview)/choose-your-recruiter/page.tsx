import type { Metadata } from "next";
import { recruiterList } from "@/config/recruiters";
import { chooseRecruiterContent } from "@/config/companyLanding";
import HomeNav from "@/components/HomeNav";
import LandingFooter from "@/components/landing/LandingFooter";
import ChooseYourRecruiter from "@/components/ChooseYourRecruiter";

export const metadata: Metadata = {
  title: chooseRecruiterContent.metadata.title,
  description: chooseRecruiterContent.metadata.description,
  openGraph: {
    title: chooseRecruiterContent.metadata.title,
    description: chooseRecruiterContent.metadata.description,
    siteName: "Abroader",
  },
};

export default function ChooseYourRecruiterPage() {
  return (
    <main className="min-h-screen bg-base">
      <HomeNav />
      <div className="pt-[72px]">
        <ChooseYourRecruiter recruiters={recruiterList} />
      </div>
      <LandingFooter />
    </main>
  );
}
