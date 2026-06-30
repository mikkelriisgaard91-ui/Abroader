"use client";

import { motion } from "framer-motion";
import RecurringIncomeChart from "@/components/landing/sections/RecurringIncomeChart";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { longTermIncomeContent } from "@/config/abroaderLanding";
import { fadeUp } from "@/lib/motion/presets";

export default function LongTermIncomeSection() {
  return (
    <section className="landing-section bg-about-bg" aria-labelledby="longterm-heading">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          headline={longTermIncomeContent.headline}
          subtext={longTermIncomeContent.subtext}
          id="longterm-heading"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeUp} className="space-y-5">
            {longTermIncomeContent.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === longTermIncomeContent.paragraphs.length - 1
                    ? "text-lg font-semibold text-ink"
                    : "text-ink-muted"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
            <RecurringIncomeChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
