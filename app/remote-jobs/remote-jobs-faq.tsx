"use client";

import Link from "next/link";
import { useState } from "react";

const glassPanel =
  "rounded-xl border border-rj-secondary/15 bg-rj-elevated/45 backdrop-blur-[12px]";

type FaqCat = "jobs" | "applying" | "pay" | "trust";

type FaqItem = {
  id: string;
  cat: FaqCat;
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    id: "fully-remote",
    cat: "jobs",
    q: "Are these jobs fully remote or hybrid?",
    a: "The vast majority of roles on this page are fully remote — meaning you can work from wherever you are, with no requirement to ever set foot in an office. A small number of roles may be hybrid or remote-first with occasional travel, and this will always be clearly stated in the job listing. If it says remote, it means remote.",
  },
  {
    id: "role-types",
    cat: "jobs",
    q: "What kinds of roles can I find here?",
    a: "We cover a wide range of remote-friendly fields — customer service, sales, IT support, content moderation, marketing, operations, and more. Whether you're just starting out or looking for a senior role, there's likely something here for you. New jobs are added regularly, so it's worth checking back often.",
  },
  {
    id: "countries",
    cat: "jobs",
    q: "Are these jobs open to people in any country?",
    a: "Most roles are open globally, but some employers hire only from specific regions or countries — usually due to time zone requirements, legal constraints, or payment logistics. Location eligibility is always listed in the job description. If you're ever unsure, it's worth applying and asking — many employers are more flexible than their listings suggest.",
  },
  {
    id: "apply-through",
    cat: "applying",
    q: "Do I apply through Abroader or directly to the company?",
    a: "It depends on the role. Some jobs are handled directly by our team — in those cases, you apply through us and we guide you through the whole process. For other listings, clicking apply will take you directly to the employer's own application page. Either way, it's always clear which type of role you're looking at before you click.",
  },
  {
    id: "curated-marked",
    cat: "applying",
    q: "How do I know which jobs are curated by Abroader?",
    a: "Jobs that our team has personally reviewed and can support you through are clearly marked on the listing. For these roles, you'll have access to a recruiter who can answer questions, give interview tips, and advocate for you with the employer. For all other roles, we surface them to save you time — but the application is between you and the company.",
  },
  {
    id: "cost",
    cat: "applying",
    q: "Is there a cost to apply for jobs?",
    a: "Never. Applying for any job on this platform is completely free. Our recruiter-supported roles are also free — we're paid by employers, not candidates. If you ever encounter a listing that asks you to pay to apply or to 'unlock' an opportunity, do not proceed and let us know.",
  },
  {
    id: "employee-contractor",
    cat: "pay",
    q: "Will I be an employee or a contractor?",
    a: "Both exist on this platform. Some employers hire remote workers as full employees with contracts and benefits, while others engage people as freelancers or independent contractors. The employment type is listed in each job description. If you're unsure which suits your situation, it's worth speaking to an accountant familiar with cross-border work before you accept an offer.",
  },
  {
    id: "tax-foreign",
    cat: "pay",
    q: "How does tax work if I'm hired by a foreign company?",
    a: "Tax rules for remote workers vary significantly depending on your country of residence and the employer's location. As a general rule, you're taxed where you live — but the specifics depend on your local legislation and any tax treaties in place. We'd always recommend getting personalised advice. Many remote workers use services like Remote, Deel, or Oyster that handle cross-border payroll compliantly.",
  },
  {
    id: "currency",
    cat: "pay",
    q: "Are salaries shown in my local currency?",
    a: "Salaries are listed in the currency the employer uses — often USD, EUR, or GBP. Where a salary range is shown, it reflects what the company pays before any local tax deductions. Currency conversion tools can help you compare, but keep in mind exchange rates fluctuate and your take-home pay will depend on your local tax situation.",
  },
  {
    id: "legitimate",
    cat: "trust",
    q: "How do I know these jobs are legitimate?",
    a: "We source jobs from a wide range of established employers and work hard to keep listings accurate and up to date. That said, no job board can guarantee every listing — and scammers do exist in the remote work space. A legitimate employer will never ask you to pay upfront, send you equipment to resell, or ask for banking details before you've signed a contract. When in doubt, research the company independently before applying.",
  },
  {
    id: "suspicious",
    cat: "trust",
    q: "What if a listing looks suspicious?",
    a: "Trust your instincts. If something feels off — vague job descriptions, requests for personal information upfront, salaries that seem too good to be true — don't apply. Report it to us using the flag on the listing and we'll investigate and remove it if needed.",
  },
  {
    id: "difference",
    cat: "trust",
    q: "What's the difference between Abroader jobs and the other listings?",
    a: "Abroader-supported roles are ones our recruiters have personally reviewed, where we have a direct relationship with the employer and can actively support your application. The wider listings give you reach across thousands of opportunities we've surfaced to save you time — but for those, you're applying independently. Both are valuable; it just depends on how much support you want along the way.",
  },
];

const cats = [
  { key: "all" as const, label: "All questions" },
  { key: "jobs" as const, label: "The jobs" },
  { key: "applying" as const, label: "Applying" },
  { key: "pay" as const, label: "Pay & contracts" },
  { key: "trust" as const, label: "Trust & safety" },
];

export function RemoteJobsFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCat, setActiveCat] = useState<(typeof cats)[number]["key"]>("all");

  const filtered = faqs.filter((f) => activeCat === "all" || f.cat === activeCat);

  return (
    <section
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-rj-band via-rj-bg to-rj-surface-low px-6 py-20 md:py-24"
      aria-labelledby="remote-jobs-faq-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rj-secondary/20 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-rj-muted">
          Remote jobs, answered
        </p>
        <h2
          id="remote-jobs-faq-heading"
          className="font-rj-headline mb-3 text-3xl font-bold leading-tight tracking-tight text-rj-fg md:text-[2.15rem]"
        >
          Work from anywhere.
          <br />
          <em className="mt-1 block font-normal text-rj-primary md:mt-0 md:inline">
            We&apos;ll help you find how.
          </em>
        </h2>
        <p className="mb-10 max-w-[34rem] text-base leading-relaxed text-rj-muted">
          Thousands of remote roles, all in one place. Here&apos;s what you need to know before you apply.
        </p>

        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => {
            const active = activeCat === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => {
                  setActiveCat(c.key);
                  setOpenId(null);
                }}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? "bg-rj-primary text-rj-on-primary"
                    : "border border-white/15 bg-transparent text-rj-muted hover:border-rj-secondary/30 hover:text-rj-fg"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="border-t border-white/10">
          {filtered.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 py-4 text-left font-rj-body text-[15px] font-semibold leading-snug text-rj-fg transition-colors hover:text-rj-secondary"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-white/20 text-sm transition-all duration-200 ${
                      isOpen
                        ? "rotate-45 bg-rj-primary text-rj-on-primary border-rj-primary"
                        : "text-rj-muted"
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <p className="pb-5 text-sm leading-relaxed text-rj-muted">{faq.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>

        <div
          className={`mt-10 flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-center ${glassPanel} p-7 md:p-8`}
        >
          <div className="min-w-0">
            <p className="font-rj-headline text-xl font-bold text-rj-fg md:text-[1.35rem]">
              Want a recruiter in your corner?
            </p>
            <p className="mt-1 text-sm leading-relaxed text-rj-muted">
              For select roles, our team can guide you from application to offer — completely free.
            </p>
          </div>
          <Link
            href="/remote-jobs#featured-opportunities"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-rj-primary px-6 py-3 text-sm font-bold text-rj-on-primary shadow-lg transition hover:brightness-105 active:scale-[0.98]"
          >
            See recruiter-supported jobs →
          </Link>
        </div>
      </div>
    </section>
  );
}
