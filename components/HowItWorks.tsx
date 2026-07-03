"use client";

import { motion } from "framer-motion";
import { Search, Phone, Handshake, Star } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const STEP_ICONS = [Search, Phone, Handshake, Star];

export default function HowItWorks() {
  const { t } = useLocale();
  const steps = t.howItWorks.steps.map((step, i) => ({
    ...step,
    icon: STEP_ICONS[i],
  }));

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <h2 className="section-heading mb-4">{t.howItWorks.heading}</h2>
          <p className="section-subtext">{t.howItWorks.subtext}</p>
        </motion.div>

        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          <div
            className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent to-amber"
            aria-hidden
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-sm border ${
                    i === 0 ? "bg-accent border-accent" : "bg-white border-border"
                  }`}
                >
                  <Icon size={24} className={i === 0 ? "text-white" : "text-accent"} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest mb-2 text-accent">
                  {t.howItWorks.step} {i + 1}
                </span>
                <h3 className="font-bold text-base mb-2 text-ink">{step.heading}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="md:hidden flex flex-col gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.heading}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                      i === 0 ? "bg-accent" : "bg-accent/10"
                    }`}
                  >
                    <Icon size={22} className={i === 0 ? "text-white" : "text-accent"} strokeWidth={1.5} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-accent/20" />
                  )}
                </div>
                <div className="pt-1 pb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    {t.howItWorks.step} {i + 1}
                  </span>
                  <h3 className="font-bold text-lg mt-1 mb-2 text-ink">{step.heading}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a href="#jobs" className="btn-primary text-base px-8 py-4">
            {t.howItWorks.browseOpenRoles}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
