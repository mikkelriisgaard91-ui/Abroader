import HomeNav from "@/components/HomeNav";
import LandingFooter from "@/components/landing/LandingFooter";
import CompanyHeroSection from "@/components/company/sections/CompanyHeroSection";
import WhyAbroaderSection from "@/components/company/sections/WhyAbroaderSection";
import TrustQualitySection from "@/components/company/sections/TrustQualitySection";
import ServicesSection from "@/components/company/sections/ServicesSection";
import ServiceSelectorSection from "@/components/company/sections/ServiceSelectorSection";
import CompanyFinalCtaSection from "@/components/company/sections/CompanyFinalCtaSection";

export default function CompanyLandingPage() {
  return (
    <>
      <HomeNav />
      <main>
        <CompanyHeroSection />
        <WhyAbroaderSection />
        <TrustQualitySection />
        <ServicesSection />
        <ServiceSelectorSection />
        <CompanyFinalCtaSection />
      </main>
      <LandingFooter />
    </>
  );
}
