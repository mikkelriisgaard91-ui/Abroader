"use client";

import { motion } from "framer-motion";
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

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
