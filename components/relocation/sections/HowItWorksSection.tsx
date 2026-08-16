"use client";

import { motion } from "framer-motion";
import { FileEdit, PhoneCall, Users, Home, PlaneTakeoff, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import PremiumButton from "@/components/landing/ui/PremiumButton";
import { CTA_LINK, howItWorksContent } from "@/config/portugalLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

const STEP_ICONS = [FileEdit, PhoneCall, Users, Home, PlaneTakeoff];

export default function HowItWorksSection() {
  const steps = howItWorksContent.steps;

  return (
    <section id="saadan-fungerer-det" className="landing-section bg-about-bg overflow-hidden scroll-mt-[72px]" aria-labelledby="how-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader headline={howItWorksContent.heading} id="how-heading" />

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative mb-14">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-8 left-[8%] right-[8%] h-0.5 origin-left bg-gradient-to-r from-accent via-amber to-accent/30"
            aria-hidden="true"
          />
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <motion.div
                  key={step.title}
                  {...fadeUpWithDelay(i * 0.1)}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 border shadow-sm glow-ring bg-white border-accent/20">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-ink mb-2 leading-snug px-1">{step.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden flex flex-col gap-0 mb-10">
          {steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-accent/10 border border-accent/20 glow-ring">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 min-h-8 my-2 bg-gradient-to-b from-accent/40 to-accent/10" />
                  )}
                </div>
                <div className="pt-1 pb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-deep">Trin {i + 1}</span>
                  <h3 className="font-bold text-lg mt-1 mb-2 text-ink">{step.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeUpWithDelay(0.1)} className="text-center">
          <p className="text-[1rem] font-semibold text-ink mb-1">{howItWorksContent.supporting}</p>
          <div className="flex justify-center mt-6">
            <PremiumButton href={CTA_LINK} variant="ghost" className="text-base px-8 py-4">
              {howItWorksContent.cta}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </PremiumButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
