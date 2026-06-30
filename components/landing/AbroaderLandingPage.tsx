import dynamic from "next/dynamic";
import HomeNav from "@/components/HomeNav";
import LandingFooter from "@/components/landing/LandingFooter";
import HeroSection from "@/components/landing/sections/HeroSection";
import WhyBecomeSection from "@/components/landing/sections/WhyBecomeSection";
import AboutRoleSection from "@/components/landing/sections/AboutRoleSection";
import StartupBudgetSection from "@/components/landing/sections/StartupBudgetSection";
import CandidateSourcesSection from "@/components/landing/sections/CandidateSourcesSection";
import FinalCtaSection from "@/components/landing/sections/FinalCtaSection";

const CommissionSection = dynamic(
  () => import("@/components/landing/sections/CommissionSection")
);

const EarningPotentialSection = dynamic(
  () => import("@/components/landing/sections/EarningPotentialSection")
);

const HowItWorksTimelineSection = dynamic(
  () => import("@/components/landing/sections/HowItWorksTimelineSection")
);

const LongTermIncomeSection = dynamic(
  () => import("@/components/landing/sections/LongTermIncomeSection")
);

export default function AbroaderLandingPage() {
  return (
    <>
      <HomeNav />
      <main>
        <HeroSection />
        <WhyBecomeSection />
        <AboutRoleSection />
        <StartupBudgetSection />
        <CommissionSection />
        <EarningPotentialSection />
        <CandidateSourcesSection />
        <HowItWorksTimelineSection />
        <LongTermIncomeSection />
        <FinalCtaSection />
      </main>
      <LandingFooter />
    </>
  );
}
