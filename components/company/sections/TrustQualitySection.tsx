"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, RefreshCw, UserCheck, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { trustQualityContent } from "@/config/companyLanding";
import { staggerContainer, staggerItem } from "@/lib/motion/presets";

const iconMap: Record<string, LucideIcon> = {
  shieldCheck: ShieldCheck,
  activity: Activity,
  refreshCw: RefreshCw,
  userCheck: UserCheck,
};

export default function TrustQualitySection() {
  return (
    <section
      id="trust"
      className="landing-section bg-about-bg scroll-mt-[72px]"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          headline={trustQualityContent.headline}
          subtext={trustQualityContent.subtext}
          id="trust-heading"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {trustQualityContent.points.map((point) => {
            const Icon = iconMap[point.icon];
            return (
              <motion.div
                key={point.title}
                variants={staggerItem}
                className="p-6 rounded-2xl bg-white border border-border"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-accent/10">
                  <Icon size={22} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-base mb-2 text-ink">{point.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href={trustQualityContent.recruitersCta.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-colors"
          >
            {trustQualityContent.recruitersCta.label}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
