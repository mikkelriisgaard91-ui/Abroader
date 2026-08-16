import PortugalNav from "@/components/relocation/ui/PortugalNav";
import PortugalFooter from "@/components/relocation/ui/PortugalFooter";
import PortugalHeroSection from "@/components/relocation/sections/PortugalHeroSection";
import BarriersBandSection from "@/components/relocation/sections/BarriersBandSection";
import EverydayLifeSection from "@/components/relocation/sections/EverydayLifeSection";
import PackageSection from "@/components/relocation/sections/PackageSection";
import QualifySection from "@/components/relocation/sections/QualifySection";
import JobDetailsSection from "@/components/relocation/sections/JobDetailsSection";
import HousingSection from "@/components/relocation/sections/HousingSection";
import LifeInPortugalSection from "@/components/relocation/sections/LifeInPortugalSection";
import CommunitySection from "@/components/relocation/sections/CommunitySection";
import HowItWorksSection from "@/components/relocation/sections/HowItWorksSection";
import RelocationSupportSection from "@/components/relocation/sections/RelocationSupportSection";
import TrustSection from "@/components/relocation/sections/TrustSection";
import FaqSection from "@/components/relocation/sections/FaqSection";
import PortugalFinalCtaSection from "@/components/relocation/sections/PortugalFinalCtaSection";
import PortugalWhatsAppButton from "@/components/relocation/ui/PortugalWhatsAppButton";

export default function PortugalLandingPage() {
  return (
    <>
      <PortugalNav />
      <main className="bg-white">
        <PortugalHeroSection />
        <BarriersBandSection />
        <EverydayLifeSection />
        <PackageSection />
        <QualifySection />
        <JobDetailsSection />
        <HousingSection />
        <LifeInPortugalSection />
        <CommunitySection />
        <HowItWorksSection />
        <RelocationSupportSection />
        <TrustSection />
        <FaqSection />
        <PortugalFinalCtaSection />
      </main>
      <PortugalFooter />
      <PortugalWhatsAppButton />
    </>
  );
}
