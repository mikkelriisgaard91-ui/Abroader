import type { Metadata } from "next";
import { recruiterList } from "@/config/recruiters";
import HomeNav from "@/components/HomeNav";
import LandingFooter from "@/components/landing/LandingFooter";
import ChooseYourRecruiter from "@/components/ChooseYourRecruiter";

export const metadata: Metadata = {
  title: "Abroader — Choose Your Recruiter",
  description:
    "Find your next opportunity abroad with Abroader. Choose a recruiter who matches your goals and browse their open international roles.",
  openGraph: {
    title: "Abroader — Choose Your Recruiter",
    description:
      "Every Abroader recruiter runs their own practice. Pick who fits your goals and browse their open roles.",
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
