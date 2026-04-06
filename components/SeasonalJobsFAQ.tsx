"use client";

import { useState } from "react";
import { RECRUITER_CONTACT_URL } from "@/app/hospitality/content";

const filterBtnBase =
  "rounded-full border px-4 py-2 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rj-secondary sm:px-5 sm:py-2.5 sm:text-base";

const activeFilterClass =
  "border-rj-primary bg-rj-primary/15 text-rj-fg shadow-[0_4px_20px_rgba(253,187,55,0.12)]";
const idleFilterClass =
  "border-white/15 bg-rj-surface-high/40 text-rj-muted hover:border-rj-secondary/35 hover:text-rj-fg";

const faqs = [
  {
    cat: "jobs",
    q: "What kinds of seasonal jobs do you place people in?",
    a: "We specialise in two main areas: ski resort jobs in the winter — lift operators, chalet hosts, ski instructors, bar and restaurant staff, housekeeping, and resort reps — and summer resort and camp jobs, covering beach clubs, holiday resorts, activity instructors, children's entertainment, and hospitality roles across Europe and beyond.",
  },
  {
    cat: "jobs",
    q: "Do I need experience to apply?",
    a: "Not always. Many seasonal employers care more about attitude, energy, and reliability than a long CV. Entry-level roles are regularly filled by first-timers. Some roles — ski instructors, specialist chefs, lifeguards — do require qualifications, and we'll always be upfront about that.",
  },
  {
    cat: "jobs",
    q: "How long is a typical season?",
    a: "Winter ski seasons typically run December to April, summer seasons May to October. Some people do back-to-back seasons — finishing a winter in the Alps and heading straight to a summer in Greece or Croatia.",
  },
  {
    cat: "jobs",
    q: "Are accommodation and meals included?",
    a: "Most seasonal roles come with staff accommodation and meals included. Because your living costs are covered, it becomes much easier to actually save money during a season.",
  },
  {
    cat: "fees",
    q: "Do I have to pay to use Abroader?",
    a: "Yes — seasonal placements involve a small placement fee. This covers the work our recruiters do finding you the right role, preparing you for interviews, and supporting you through your placement.",
  },
  {
    cat: "fees",
    q: "How does the payment work?",
    a: "Two options. Pay the full fee upfront — simple, done. Or pay a small deposit now to secure your place, with the remaining balance due after your first paycheque. We want the fee to feel manageable, not like a barrier.",
  },
  {
    cat: "fees",
    q: "What does the deposit secure?",
    a: "Paying your deposit confirms your place and tells us — and the employer — that you're serious. Once paid, our recruiters prioritise your placement and begin matching you to live roles. Without a deposit we can't hold a position for you — seasonal roles move fast.",
  },
  {
    cat: "fees",
    q: "What happens if I don't get placed?",
    a: "If we are unable to find you a suitable placement, your deposit is refunded in full. We only keep fees once you have an accepted offer and a confirmed start date.",
  },
  {
    cat: "process",
    q: "How does the process work from start to finish?",
    a: "You sign up, tell us what you're looking for, and we match you to suitable positions. Once you have an offer, we help with paperwork and pre-season prep. We stay in touch throughout your season in case anything comes up.",
  },
  {
    cat: "process",
    q: "How far in advance should I apply?",
    a: "The earlier the better — especially for ski seasons. The best roles fill up months before the season starts. We'd recommend applying at least 3–4 months ahead. That said, late placements do happen.",
  },
  {
    cat: "process",
    q: "Can I choose which country or resort I go to?",
    a: "You can tell us your preferences and we take them seriously. The more flexible you are, the more options you'll have. Candidates open to a region rather than a single resort tend to get placed faster.",
  },
  {
    cat: "life",
    q: "Will I know anyone when I arrive?",
    a: "Probably not at first — but that changes within days. Everyone is in the same boat: new place, new team, ready for an adventure. Most people come back with friendships that last years.",
  },
  {
    cat: "life",
    q: "Can I actually save money during a season?",
    a: "Yes — genuinely. Because accommodation and meals are included, your main expenses are dramatically reduced. It's one of the few ways to travel, work, and come home with more money than you left with.",
  },
  {
    cat: "life",
    q: "Is seasonal work just for young people?",
    a: "Not at all. Seasonal teams are genuinely mixed — career-changers, people on sabbatical, retirees, parents whose kids have just left home. If you're reliable and enthusiastic, age has nothing to do with it.",
  },
];

const cats = [
  { key: "all", label: "All questions" },
  { key: "jobs", label: "The jobs" },
  { key: "fees", label: "Fees & payment" },
  { key: "process", label: "Our process" },
  { key: "life", label: "Life on season" },
] as const;

export default function SeasonalJobsFAQ({ recruiterPrimaryCtaClass }: { recruiterPrimaryCtaClass: string }) {
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
            Seasonal work, <em className="not-italic text-rj-primary">sorted.</em>
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-rj-muted">
            Ski seasons, summer resorts, placements, and life on the ground — here&apos;s how it works with Abroader.
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
