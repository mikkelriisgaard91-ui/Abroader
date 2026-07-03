"use client";

import HomeNav from "@/components/HomeNav";
import LandingFooter from "@/components/landing/LandingFooter";
import AboutRoleSection from "@/components/landing/sections/AboutRoleSection";
import CandidateSourcesSection from "@/components/landing/sections/CandidateSourcesSection";
import CommissionSection from "@/components/landing/sections/CommissionSection";
import EarningPotentialSection from "@/components/landing/sections/EarningPotentialSection";
import FinalCtaSection from "@/components/landing/sections/FinalCtaSection";
import HeroSection from "@/components/landing/sections/HeroSection";
import HowItWorksTimelineSection from "@/components/landing/sections/HowItWorksTimelineSection";
import LongTermIncomeSection from "@/components/landing/sections/LongTermIncomeSection";
import StartupBudgetSection from "@/components/landing/sections/StartupBudgetSection";
import WhyBecomeSection from "@/components/landing/sections/WhyBecomeSection";

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
