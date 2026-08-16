import SectionHeader from "@/components/landing/ui/SectionHeader";
import FaqAccordion from "@/components/relocation/ui/FaqAccordion";
import { faqContent } from "@/config/portugalLanding";

export default function FaqSection() {
  return (
    <section id="faq" className="landing-section bg-white scroll-mt-[72px]" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader headline={faqContent.heading} id="faq-heading" />
        <FaqAccordion items={faqContent.items} />
      </div>
    </section>
  );
}
