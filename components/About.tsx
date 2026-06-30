"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ResolvedRecruiter } from "@/config/recruiters";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function About({ recruiter }: { recruiter: ResolvedRecruiter }) {
  const { t } = useLocale();
  const paragraphs = recruiter.longBio.split("\n\n").filter(Boolean);

  return (
    <section id="about" className="py-24 bg-about-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-[var(--shadow-photo)]">
              <Image
                src={recruiter.photoUrl}
                alt={recruiter.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 384px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute -bottom-6 -right-4 lg:-right-12 bg-white rounded-2xl px-5 py-4 max-w-[220px] border border-border shadow-[var(--shadow-card-hover)]"
            >
              <p className="text-sm font-bold leading-snug text-accent">
                &ldquo;{recruiter.pullQuote}&rdquo;
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8 lg:mt-0"
          >
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">
              {t.about.eyebrow} {recruiter.firstName}
            </p>
            <h2 className="section-heading mb-8">{t.about.heading}</h2>

            <div className="space-y-5">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-base leading-relaxed text-ink/72">
                  {p}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { value: `${recruiter.stats.placements}`, label: t.about.statPlacements },
                { value: `${recruiter.stats.countries}`, label: t.about.statCountries },
                { value: `${recruiter.stats.yearsExperience}`, label: t.about.statYears },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-extrabold text-accent">{stat.value}</p>
                  <p className="text-sm mt-0.5 text-ink-subtle">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm font-semibold mb-3 text-ink">{t.about.roleExperience}</p>
                <div className="flex flex-wrap gap-2">
                  {recruiter.roleExperience.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-medium px-4 py-1.5 rounded-full bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-3 text-ink">{t.about.languages}</p>
                <div className="flex flex-wrap gap-2">
                  {recruiter.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-sm font-medium px-4 py-1.5 rounded-full bg-amber/15 text-amber"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-1 text-ink">{t.about.travelGuidance}</p>
                <p className="text-sm mb-3 text-ink-subtle">{t.about.travelSubtext}</p>
                <div className="flex flex-wrap gap-2">
                  {recruiter.travelGuidance.map((place) => (
                    <span
                      key={place}
                      className="text-sm font-medium px-4 py-1.5 rounded-full bg-accent/10 text-accent"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
