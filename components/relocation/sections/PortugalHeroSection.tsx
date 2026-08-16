"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PremiumButton from "@/components/landing/ui/PremiumButton";
import { CTA_LINK, heroContent, heroImage } from "@/config/portugalLanding";
import { fadeUpWithDelay } from "@/lib/motion/presets";

const jobLineItems = heroContent.jobLine.split(" · ");

export default function PortugalHeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[600px] sm:min-h-[620px] lg:min-h-[600px] flex items-end">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink from-15% via-ink/55 via-45% to-ink/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-[96px] pb-16 sm:pb-20 w-full">
          <motion.span
            {...fadeUpWithDelay(0)}
            className="inline-flex items-center rounded-full border border-base/25 bg-base/10 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-base mb-6"
          >
            {heroContent.eyebrow}
          </motion.span>

          <motion.h1
            {...fadeUpWithDelay(0.08)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-base leading-[1.04] mb-5 max-w-3xl"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            {...fadeUpWithDelay(0.14)}
            className="text-xl sm:text-2xl font-semibold text-base leading-snug mb-4 max-w-2xl"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.p
            {...fadeUpWithDelay(0.2)}
            className="text-base sm:text-lg text-base/80 leading-relaxed mb-7 max-w-xl"
          >
            {heroContent.supporting}
          </motion.p>

          <motion.div {...fadeUpWithDelay(0.26)} className="flex flex-wrap gap-2 mb-9">
            {jobLineItems.map((item) => (
              <span
                key={item}
                className="text-xs sm:text-sm font-medium text-base/85 rounded-full border border-base/20 bg-base/10 backdrop-blur-sm px-3 py-1.5"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            {...fadeUpWithDelay(0.32)}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5"
          >
            <PremiumButton href={CTA_LINK} external className="text-base px-8 py-4">
              {heroContent.primaryCta}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </PremiumButton>
            <p className="text-sm font-medium text-base/70">{heroContent.supportingLine}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
