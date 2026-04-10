"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string[] };

const faqs: FaqItem[] = [
  {
    q: "Do I need experience before I start?",
    a: [
      "No — many paths are built for complete beginners. Online platforms often label courses by level; bootcamps usually run structured cohorts from zero to job-ready, with support and projects along the way.",
      "What matters more than a polished résumé is consistency: showing up, doing the exercises, and building a small portfolio (even tiny projects count). If a programme claims ‘no experience needed’ but has no syllabus, reviews, or outcomes data, dig deeper before you pay.",
    ],
  },
  {
    q: "Can I learn while working full-time or studying?",
    a: [
      "Yes — especially with self-paced online learning. You can study in evenings or weekends, stack short courses, and adjust when work is busy.",
      "Bootcamps and intensive travel programmes are harder to combine with a demanding job because they expect fixed hours for several weeks or months. In those cases, people often save a runway, negotiate reduced hours, or choose a cohort that aligns with a planned break.",
    ],
  },
  {
    q: "How much does it cost — really?",
    a: [
      "It ranges widely: many high-quality introductions are free or low-cost on open platforms; specialised certificates and bootcamps often run from a few hundred euros up to €10,000+ depending on length, location, and brand.",
      "Budget for more than tuition: flights, housing, visas, health cover, and software or hardware if needed. Compare total cost of ownership, not just the headline price — and check refund policies and what happens if you need to pause.",
    ],
  },
  {
    q: "Can this actually lead to a job?",
    a: [
      "Yes — particularly in tech, digital marketing, and remote-friendly roles where employers care about what you can demonstrate. A clear portfolio, GitHub or sample campaigns, and a short narrative about what you built beats a long list of unfinished courses.",
      "No ethical provider should guarantee employment. Your outcomes still depend on market, language skills, interview practice, and how much effort you put into networking and applications. Learning Living improves your odds when you pair learning with real output and persistence.",
    ],
  },
  {
    q: "Online course vs bootcamp — how do I choose?",
    a: [
      "Choose online, self-paced learning if you need flexibility, a low entry cost, or you are still exploring which skill to commit to. It is ideal for testing interest before a bigger investment.",
      "Choose a bootcamp or immersive programme if you want accountability, a fixed curriculum, peer cohort, and career services — and you can dedicate concentrated time. Many people mix both: foundations online, then an intensive to accelerate.",
    ],
  },
  {
    q: "How long until I am job-ready?",
    a: [
      "It varies by field and intensity. A focused bootcamp might target roughly 8–24 weeks for an entry-level tech track; self-paced online learning might take longer in calendar time but fit around other commitments.",
      "Job readiness is not only ‘hours watched’ — it is whether you can ship small real projects, read documentation, and talk through your work in an interview. Plan for job search time after you finish structured learning.",
    ],
  },
  {
    q: "What about visas and staying legally abroad?",
    a: [
      "Rules depend on your nationality, destination, length of stay, and whether you are studying, working remotely for a foreign employer, or on a tourist-style visit. A course or retreat is not a substitute for legal advice.",
      "Always check official government sources or a qualified immigration adviser for your situation. If you plan to work remotely from another country, confirm what activities are allowed on your visa class before you book flights.",
    ],
  },
  {
    q: "What if I do not speak the local language?",
    a: [
      "Many bootcamps and nomad communities in global hubs operate primarily in English. Day-to-day life may still be easier with basic local phrases — and learning the language can be part of your ‘living’ side of Learning Living.",
      "If you need the local language for work with local clients or employers, factor that into your timeline; some people stack a language course alongside technical skills.",
    ],
  },
  {
    q: "How do I avoid low-quality courses and scams?",
    a: [
      "Look for a clear syllabus, instructor credentials, recent independent reviews, and alumni you can find on LinkedIn. Search for the programme name plus words like ‘review’ or ‘refund’.",
      "Be wary of promises that sound too easy (‘six figures in six weeks’), pressure to pay immediately, or no verifiable company address. Prefer providers that explain outcomes honestly and point to real hiring partners or sample projects.",
    ],
  },
  {
    q: "How can Abroader help?",
    a: [
      "Abroader focuses on opportunities abroad and flexible work — so you can align travel, learning, and income in one plan. Browse remote roles to fund your chapter abroad, or use our matching tools to narrow options that fit your skills and goals.",
      "Use the ‘Explore Learning Opportunities’ and ‘Get Matched With Programs’ actions on this page as a starting point; combine that with the roadmap above so you pick a skill, format, and destination with your eyes open.",
    ],
  },
];

export default function LearningLivingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="eco-faq">
      {faqs.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className={`eco-faq__item${open ? " eco-faq__item--open" : ""}`}>
            <button
              type="button"
              className="eco-faq__trigger"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
            >
              <span>{item.q}</span>
              <svg
                className={`eco-faq__icon${open ? " eco-faq__icon--open" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                width="18"
                height="18"
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {open && (
              <div className="eco-faq__answer">
                <div className="eco-faq__answer-inner">
                  {item.a.map((paragraph, pi) => (
                    <p key={pi}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
