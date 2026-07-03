"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Workflow, HandCoins, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const VALUE_ICONS = [ShieldCheck, Workflow, HandCoins];

export default function ForEmployers({ ctaUrl = "#contact" }: { ctaUrl?: string }) {
  const { t } = useLocale();
  const isExternal = ctaUrl.startsWith("http");
  const valueProps = t.forEmployers.valueProps.map((prop, i) => ({
    ...prop,
    icon: VALUE_ICONS[i],
  }));

  return (
    <section id="employers" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent"
          >
            {t.forEmployers.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="section-heading mb-5"
          >
            {t.forEmployers.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-lg leading-relaxed mb-14 text-ink-muted"
          >
            {t.forEmployers.body}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {valueProps.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-base border border-border"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-accent/10">
                  <Icon size={22} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-base mb-2 text-ink">{prop.heading}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{prop.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <a
            href={ctaUrl}
            className="btn-primary text-base px-8 py-4"
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {t.forEmployers.cta}
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
