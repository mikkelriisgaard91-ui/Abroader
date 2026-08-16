"use client";

import { motion } from "framer-motion";
import { trustSectionContent } from "@/config/portugalLanding";
import { fadeUp, fadeUpWithDelay } from "@/lib/motion/presets";

// TODO: Add genuine candidate testimonials once available. Replace or expand
// this trust-focused placeholder with real candidate stories at that point.

export default function TrustSection() {
  return (
    <section className="landing-section bg-about-bg" aria-labelledby="trust-heading">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2 {...fadeUp} id="trust-heading" className="section-heading mb-4">
          {trustSectionContent.heading}
        </motion.h2>
        <motion.p {...fadeUpWithDelay(0.08)} className="section-subtext">
          {trustSectionContent.body}
        </motion.p>
      </div>
    </section>
  );
}
