"use client";

import { useState } from "react";
import { RECRUITER_CONTACT_URL } from "@/app/language-jobs/content";

const filterBtnBase =
  "rounded-full border px-4 py-2 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rj-secondary sm:px-5 sm:py-2.5 sm:text-base";

const activeFilterClass =
  "border-rj-primary bg-rj-primary/15 text-rj-fg shadow-[0_4px_20px_rgba(253,187,55,0.12)]";
const idleFilterClass =
  "border-white/15 bg-rj-surface-high/40 text-rj-muted hover:border-rj-secondary/35 hover:text-rj-fg";

const faqs = [
  {
    cat: "jobs",
    q: "What kind of jobs are these exactly?",
    a: "These are real, full-time roles at international companies — customer service, sales, IT support, and content moderation — that have been relocated abroad to find great talent. Companies in the US, UK, and Europe hire teams in places like the Philippines, South Africa, Eastern Europe, and Latin America. You get a solid job with a real salary. They get someone brilliant. Everyone wins.",
  },
  {
    cat: "jobs",
    q: "Do I need to speak a specific language?",
    a: "Most roles require strong English — written and spoken. Some positions also look for additional languages like French, German, Dutch, or Spanish. If you're bilingual, you're in high demand. If you're just English-fluent, there are still hundreds of opportunities waiting for you.",
  },
  {
    cat: "jobs",
    q: "Are these jobs legitimate? How do I know they're real?",
    a: "100% legitimate. We only work with vetted, established employers — companies with real offices, real contracts, and real salaries. We've placed hundreds of candidates, and our recruiters personally verify every listing before it reaches you.",
  },
  {
    cat: "process",
    q: "How does Abroader help me find a job?",
    a: "You sign up, we get to know you — your skills, experience, language level, and where you'd love to live. Then our recruiters match you to roles that actually fit. We handle the introduction, prep you for interviews, and guide you through the offer. You never pay a penny. We're paid by employers, not candidates.",
  },
  {
    cat: "process",
    q: "Is this service really free for candidates?",
    a: "Yes — completely free, always. We're a recruitment agency funded by the companies hiring. You will never be asked to pay for registration, applications, or any part of our service.",
  },
  {
    cat: "process",
    q: "How long does the process take?",
    a: "Many candidates go from first conversation to signed offer in 4–8 weeks. The more flexible you are on location and role type, the faster things tend to move.",
  },
  {
    cat: "relocation",
    q: "What does a relocation package usually include?",
    a: "When a role comes with relocation support, it typically covers flights, temporary accommodation, visa sponsorship, and a settling-in allowance. Some employers go further with airport pickup or language training. Your recruiter will always explain exactly what's included before you commit to anything.",
  },
  {
    cat: "relocation",
    q: "Not every job has a relocation package — does that mean I pay to move?",
    a: "Some roles don't include relocation support. We're always upfront about this — if a job doesn't have relocation included, we'll flag it clearly and help you understand the real cost of moving so you can make an informed decision.",
  },
  {
    cat: "relocation",
    q: "Which countries are the most popular destinations?",
    a: "Right now we see strong demand in the Philippines, South Africa, Poland, Greece, Malta, Romania, Colombia, and Mexico — but the list keeps growing. Your recruiter can walk you through what life actually looks like day-to-day in any of these locations.",
  },
  {
    cat: "life",
    q: "Will I earn enough to live comfortably abroad?",
    a: "In most destinations, salaries are competitive relative to the local cost of living — which means your money often goes significantly further than it would at home. We'll always share honest cost-of-living comparisons.",
  },
  {
    cat: "life",
    q: "I've never lived abroad. Is this really for me?",
    a: "It's exactly for you. Most of the people we place had never lived abroad before. The companies we work with hire international teams all the time — they're set up for it. The first step is always the hardest. After that? People almost never look back.",
  },
  {
    cat: "life",
    q: "What if the job isn't right for me once I get there?",
    a: "We take matching seriously precisely to avoid this. That said, if things don't work out, we stay in your corner. Many of our candidates have moved between roles or countries with our help. Our relationship doesn't end at placement.",
  },
];

const cats = [
  { key: "all", label: "All questions" },
  { key: "jobs", label: "The jobs" },
  { key: "process", label: "Our process" },
  { key: "relocation", label: "Relocation" },
  { key: "life", label: "Life abroad" },
] as const;

export default function LanguageJobsFAQ({ recruiterPrimaryCtaClass }: { recruiterPrimaryCtaClass: string }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [activeCat, setActiveCat] = useState<(typeof cats)[number]["key"]>("all");

  const filtered = faqs.filter((f) => activeCat === "all" || f.cat === activeCat);

  return (
    <section className="border-t border-white/[0.06] bg-gradient-to-b from-rj-band/80 to-rj-bg px-6 py-20 md:px-12 lg:px-20">
      <div className="relative mx-auto max-w-6xl">
        <div
          className="lj-blurred-orb pointer-events-none absolute -left-24 top-0 h-[320px] w-[320px] rounded-full bg-rj-secondary/8"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-rj-secondary">
            Everything you need to know
          </p>
          <h2 className="font-rj-headline mb-4 text-4xl font-extrabold leading-tight text-rj-fg">
            Your new career is <em className="not-italic text-rj-primary">abroad.</em>
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-rj-muted">
            Thousands of companies hire English-speaking talent overseas. Here&apos;s everything you need to know about
            making the move — and how we help you land the job, for free.
          </p>

          <div className="mb-10 flex flex-wrap gap-2 sm:gap-3" role="tablist" aria-label="Filter FAQ by topic">
            {cats.map((c) => (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={activeCat === c.key}
                className={`${filterBtnBase} ${activeCat === c.key ? activeFilterClass : idleFilterClass}`}
                onClick={() => {
                  setActiveCat(c.key);
                  setOpenKey(null);
                }}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-rj-elevated/35 p-1 backdrop-blur-xl">
            <div className="divide-y divide-white/10 px-4 sm:px-6">
              {filtered.map((faq) => {
                const isOpen = openKey === faq.q;
                return (
                  <div key={faq.q}>
                    <button
                      type="button"
                      onClick={() => setOpenKey(isOpen ? null : faq.q)}
                      className="flex w-full cursor-pointer items-start justify-between gap-4 border-none bg-transparent py-4 text-left font-rj-body sm:py-5"
                    >
                      <span className="text-base font-bold leading-snug text-rj-fg sm:text-lg">{faq.q}</span>
                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition-all duration-200 ${
                          isOpen
                            ? "rotate-45 border-rj-primary bg-rj-primary text-rj-on-primary shadow-[0_4px_16px_rgba(253,187,55,0.25)]"
                            : "border-white/15 bg-rj-surface-high/50 text-rj-muted"
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    {isOpen ? (
                      <p className="font-rj-body pb-5 text-sm leading-relaxed text-rj-muted sm:text-base">{faq.a}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-rj-surface-high p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
            <div
              className="lj-blurred-orb pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full bg-rj-primary/15"
              aria-hidden
            />
            <div className="relative z-10 mb-6 md:mb-0">
              <p className="font-rj-headline mb-2 text-2xl font-extrabold text-rj-fg md:text-3xl">
                Still have questions? Let&apos;s talk.
              </p>
              <p className="m-0 text-pretty text-rj-muted">
                Our recruiters reply fast — usually within one working day.
              </p>
            </div>
            <a
              href={RECRUITER_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative z-10 shrink-0 ${recruiterPrimaryCtaClass}`}
            >
              Speak to a Recruiter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
