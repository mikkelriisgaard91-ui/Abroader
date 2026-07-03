"use client";

import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import type { ResolvedRecruiter } from "@/config/recruiters";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" } as Transition,
});

function GrainOverlay() {
  return (
    <svg className="grain-overlay" aria-hidden="true">
      <filter id="hero-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves={3}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#hero-noise)" />
    </svg>
  );
}

export default function Hero({ recruiter }: { recruiter: ResolvedRecruiter }) {
  const { t } = useLocale();
  const heroRoleTags = recruiter.roleExperience.slice(0, 4);
  const extraRoleCount = recruiter.roleExperience.length - heroRoleTags.length;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px] bg-base">
      <GrainOverlay />
      <div className="hero-blob" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.p
              {...fadeUp(0)}
              className="text-sm font-semibold uppercase tracking-widest mb-5 text-accent"
            >
              {t.hero.eyebrow}
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6 text-ink tracking-tight"
            >
              {t.hero.headline}
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="text-xl leading-relaxed mb-10 text-ink-muted">
              {t.hero.placedBy}{" "}
              <span className="font-semibold text-ink">{recruiter.name}</span> — {t.hero.specialist}
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
              <a href="#jobs" className="btn-primary text-base px-7 py-4 min-h-[52px]">
                {t.hero.seeOpenRoles}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-ghost text-base px-7 py-4 min-h-[52px]">
                {t.hero.howItWorks}
              </a>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.25)}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="flex flex-col items-center gap-5 text-center">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-4 ring-amber shadow-[0_20px_60px_rgba(232,90,47,0.2)]">
                <Image
                  src={recruiter.photoUrl}
                  alt={recruiter.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 192px, 224px"
                  priority
                />
              </div>
              <div>
                <p className="text-xl font-bold text-ink">{recruiter.name}</p>
                <p className="text-sm mt-1 text-ink-muted">{recruiter.title}</p>
                <p className="text-sm mt-0.5 text-ink-subtle">{recruiter.location}</p>
                <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                  {recruiter.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber/15 text-amber"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                  {heroRoleTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                  {extraRoleCount > 0 && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                      +{extraRoleCount} {t.hero.moreTags}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm italic max-w-[240px] leading-relaxed text-ink-subtle">
                &ldquo;{recruiter.shortBio}&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
