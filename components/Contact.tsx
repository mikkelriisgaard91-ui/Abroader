"use client";

import { motion } from "framer-motion";
import { Mail, Calendar } from "lucide-react";
import type { ResolvedRecruiter } from "@/config/recruiters";
import { useLocale } from "@/lib/i18n/LocaleProvider";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact({ recruiter }: { recruiter: ResolvedRecruiter }) {
  const { t } = useLocale();

  return (
    <section id="contact" className="py-24 bg-about-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent"
          >
            {t.contact.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="section-heading mb-5"
          >
            {t.contact.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-lg leading-relaxed mb-4 text-ink-muted"
          >
            {t.contact.body1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-base leading-relaxed mb-10 text-ink-subtle"
          >
            {t.contact.body2}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <a href={`mailto:${recruiter.email}`} className="btn-primary text-sm px-6 py-4 min-h-[52px]">
              <Mail size={16} strokeWidth={1.5} />
              {recruiter.email}
            </a>

            {recruiter.whatsappUrl && (
              <a
                href={recruiter.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm px-6 py-4 min-h-[52px]"
              >
                <WhatsAppIcon />
                {t.contact.whatsapp}
              </a>
            )}

            {recruiter.linkedIn && (
              <a
                href={recruiter.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm px-6 py-4 min-h-[52px]"
              >
                <LinkedInIcon />
                {t.contact.linkedIn}
              </a>
            )}

            {recruiter.calendlyUrl && (
              <a
                href={recruiter.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm px-6 py-4 min-h-[52px]"
              >
                <Calendar size={16} strokeWidth={1.5} />
                {t.contact.bookCall}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
