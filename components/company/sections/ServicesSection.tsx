"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import GlassCard from "@/components/landing/ui/GlassCard";
import PremiumButton from "@/components/landing/ui/PremiumButton";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { companyCtas, servicesContent } from "@/config/companyLanding";
import { staggerContainer, staggerItem } from "@/lib/motion/presets";

const iconMap: Record<string, LucideIcon> = {
  shieldCheck: ShieldCheck,
  userCheck: UserCheck,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="landing-section bg-white scroll-mt-[72px]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          headline={servicesContent.headline}
          subtext={servicesContent.subtext}
          id="services-heading"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {servicesContent.services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.id} variants={staggerItem} className="flex">
                <GlassCard hover={false} className="flex flex-col w-full h-full">
                  <span className="inline-block self-start text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                    {service.badge}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-1 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-ink-muted mb-6">
                    {service.tagline}
                  </p>
                  <dl className="space-y-4 flex-1">
                    {service.details.map((detail) => (
                      <div key={detail.label}>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-1">
                          {detail.label}
                        </dt>
                        <dd className="text-sm text-ink leading-relaxed">
                          {detail.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8 pt-6 border-t border-border">
                    <PremiumButton
                      href={companyCtas.bookCall}
                      external
                      variant="ghost"
                      className="text-sm px-6 py-3 w-full sm:w-auto"
                    >
                      {servicesContent.cardCta}
                    </PremiumButton>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
