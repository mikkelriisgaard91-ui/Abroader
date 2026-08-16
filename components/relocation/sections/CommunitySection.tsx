"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import SectionHeader from "@/components/landing/ui/SectionHeader";
import { communityContent, sectionImages } from "@/config/portugalLanding";
import { fadeUpWithDelay, staggerContainer, staggerItem } from "@/lib/motion/presets";

// TODO: Once the Abroader Portugal Community / WhatsApp community exists,
// surface a join link/card in this section alongside (or instead of) the
// generic community list below.

export default function CommunitySection() {
  return (
    <section className="landing-section bg-white overflow-hidden" aria-labelledby="community-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader headline={communityContent.heading} align="left" id="community-heading" />
            <motion.p
              {...fadeUpWithDelay(0.05)}
              className="text-[1rem] text-ink-muted leading-relaxed mb-6 max-w-lg"
            >
              {communityContent.intro}
            </motion.p>

            <motion.div
              {...fadeUpWithDelay(0.1)}
              className="flex items-start gap-3 rounded-2xl bg-about-bg border border-border p-5 mb-8 max-w-lg"
            >
              <HeartHandshake className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm sm:text-[1rem] font-semibold text-ink leading-snug">{communityContent.line}</p>
            </motion.div>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid sm:grid-cols-2 gap-3 max-w-lg"
            >
              {communityContent.items.map((item) => (
                <motion.li
                  key={item}
                  variants={staggerItem}
                  className="flex items-start gap-2 text-sm text-ink leading-snug"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" aria-hidden="true" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            {...fadeUpWithDelay(0.15)}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-photo"
          >
            <Image
              src={sectionImages.tram.src}
              alt={sectionImages.tram.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
