"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import DashboardMockup from "@/components/landing/sections/DashboardMockup";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { aboutRoleContent } from "@/config/abroaderLanding";
import { fadeUp } from "@/lib/motion/presets";

export default function AboutRoleSection() {
  return (
    <section
      id="about"
      className="landing-section bg-about-bg"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          headline={aboutRoleContent.headline}
          subtext={aboutRoleContent.subtext}
          id="about-heading"
          align="left"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeUp}>
            <p className="text-lg text-ink-muted leading-relaxed mb-4">
              {aboutRoleContent.intro}
            </p>
            <p className="font-semibold text-ink mb-6">{aboutRoleContent.subintro}</p>
            <ul className="space-y-4">
              {aboutRoleContent.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" strokeWidth={2.5} />
                  </span>
                  <span className="text-ink-muted leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
