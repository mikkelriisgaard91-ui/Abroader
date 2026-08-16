"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { everydayLifeContent, sectionImages } from "@/config/portugalLanding";
import { fadeUp, fadeUpWithDelay } from "@/lib/motion/presets";

export default function EverydayLifeSection() {
  return (
    <section className="landing-section bg-white" aria-labelledby="everyday-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.h2
              {...fadeUp}
              id="everyday-heading"
              className="section-heading mb-6 max-w-lg"
            >
              {everydayLifeContent.heading}
            </motion.h2>
            <div className="space-y-4 max-w-lg">
              {everydayLifeContent.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={paragraph.slice(0, 24)}
                  {...fadeUpWithDelay(0.08 + i * 0.06)}
                  className="text-[1rem] sm:text-lg text-ink-muted leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div
            {...fadeUpWithDelay(0.15)}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-photo"
          >
            <Image
              src={sectionImages.surf.src}
              alt={sectionImages.surf.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
