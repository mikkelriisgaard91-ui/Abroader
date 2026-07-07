"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { serviceSelectorContent } from "@/config/companyLanding";
import { staggerContainer, staggerItem } from "@/lib/motion/presets";

export default function ServiceSelectorSection() {
  return (
    <section
      id="which-service"
      className="landing-section bg-base scroll-mt-[72px]"
      aria-labelledby="selector-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          headline={serviceSelectorContent.headline}
          subtext={serviceSelectorContent.subtext}
          id="selector-heading"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {serviceSelectorContent.paths.map((path) => (
            <motion.div
              key={path.label}
              variants={staggerItem}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-border"
            >
              <h3 className="font-bold text-lg text-ink mb-3">{path.label}</h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                {path.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                <span>
                  <span className="text-accent">{path.serviceName}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
