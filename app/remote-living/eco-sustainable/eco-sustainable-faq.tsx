"use client";

import { useState, type ReactNode } from "react";

type FaqItem = { id: string; q: string; answer: ReactNode };

const faqs: FaqItem[] = [
  {
    id: "experience",
    q: "Do I need farming or building experience to start?",
    answer: (
      <>
        <p>
          Often, no. Many farm hosts and ecovillages expect enthusiasm and reliability more than prior skills. You will
          be shown how to do tasks safely; what you bring is a willingness to learn, clear communication, and consistent
          effort for the hours you agreed to.
        </p>
        <p>
          That said, underselling your limits can burn trust fast. If you have never done physical outdoor work, start
          with a short stay (one to two weeks) before committing to a full season. Hosts usually appreciate honesty about
          fitness, allergies, and what you are curious to learn.
        </p>
      </>
    ),
  },
  {
    id: "cost",
    q: "Is eco living or work exchange actually free?",
    answer: (
      <>
        <p>
          Work exchanges typically cover accommodation and meals in return for a set number of hours per day — not
          flights, travel insurance, visas, or personal spending. Some places ask for a small daily contribution or
          membership fee; ecovillages may have visitor fees or deposits.
        </p>
        <p>
          Remote employment is different: you are paid, but you still pay rent (or membership), tax, and benefits
          yourself. Read each listing&apos;s terms and cancellation policy before you book travel.
        </p>
      </>
    ),
  },
  {
    id: "income",
    q: "Can I earn real money while living this way?",
    answer: (
      <>
        <p>
          Yes, in several ways. The most common path for people who want nature and stability is a remote job or
          freelance clients in your existing field — then choosing where you live. Seasonal paid work (hospitality,
          agriculture where legal for your visa) is another option in some regions.
        </p>
        <p>
          Pure work-exchange platforms are usually not a substitute for a salary; they are a way to reduce living costs
          and gain skills while you build savings or a remote income. Plan money the same way you would for any move:
          runway, emergency fund, and how you will get paid across borders if needed.
        </p>
      </>
    ),
  },
  {
    id: "visas",
    q: "What about visas, taxes, and working legally?",
    answer: (
      <>
        <p>
          Rules depend entirely on your nationality, the host country, and whether you are volunteering, employed, or
          self-employed. &quot;Volunteering&quot; in exchange for room and board is treated differently across borders —
          some countries allow it on a tourist stay, others do not.
        </p>
        <p>
          Do not rely on a blog post or a host&apos;s reassurance alone. Check official government guidance or a
          qualified advisor for your situation. Getting this wrong can mean fines, bans, or cancelled plans — worth
          sorting before you buy tickets.
        </p>
      </>
    ),
  },
  {
    id: "internet",
    q: "Can I really get reliable internet in rural or off-grid places?",
    answer: (
      <>
        <p>
          Sometimes yes, sometimes no — it is the main practical limit for remote work. Many villages and farms have
          usable broadband or 4G; some valleys and remote plots do not. Before you commit to a long stay, ask hosts for
          a speed test, backup options (nearby café, coworking), and whether outages are common in bad weather.
        </p>
        <ul>
          <li>Test a video call on their connection before accepting a long contract if work depends on it.</li>
          <li>Carry a local SIM or eSIM as backup where that makes sense.</li>
          <li>Satellite options exist but add cost; factor them into your budget if you are truly off the grid.</li>
        </ul>
      </>
    ),
  },
  {
    id: "hours",
    q: "How many hours do farm stays and exchanges usually expect?",
    answer: (
      <>
        <p>
          A typical range is about four to six hours per day, five or six days a week, but listings vary. Some projects
          run on seasonal crunch times (harvest, events) where days are longer for a short period — the listing or host
          should spell that out.
        </p>
        <p>
          Clarify upfront: start times, breaks, weekend expectations, and what &quot;food included&quot; means (all
          meals, shared cooking, dietary needs). A short video call before you travel prevents most misunderstandings.
        </p>
      </>
    ),
  },
  {
    id: "community",
    q: "What if I do not get on with the community or host?",
    answer: (
      <>
        <p>
          Shared living amplifies personality clashes. Good communities have clear agreements; healthy hosts welcome
          questions. If something feels off during research — vague answers, pressure to send money outside the platform,
          or reviews that mention boundary issues — trust that signal and choose elsewhere.
        </p>
        <p>
          If you are already on site and unsafe, prioritise your safety and local emergency resources. If it is simply a
          poor fit, refer to your platform&apos;s dispute process and any cancellation terms. Many people treat the
          first placement as a trial and plan a backup location mentally before they arrive.
        </p>
      </>
    ),
  },
  {
    id: "longterm",
    q: "Is this lifestyle sustainable long term?",
    answer: (
      <>
        <p>
          For some people it becomes a years-long chapter; for others it is a deliberate break or a way to learn skills
          before settling elsewhere. What usually lasts is not luck — it is a fit between community, climate, income, and
          personal resilience.
        </p>
        <p>
          Long-term viability tends to improve when you have either stable remote income, a clear seasonal pattern you
          enjoy, or a path to membership or land use you have legally documented. Revisit your plan once a year: money,
          health, relationships, and whether the place still matches your values.
        </p>
      </>
    ),
  },
  {
    id: "offgrid",
    q: "How realistic is off-grid living if I still need to work online?",
    answer: (
      <>
        <p>
          It is realistic for many people if you treat power and connectivity as engineered systems, not vibes. Solar
          plus battery storage, backup generator or grid hook-up for cloudy weeks, and redundant internet are common
          patterns for remote workers who live rurally.
        </p>
        <p>
          Budget for maintenance: inverters, batteries, and water filters need attention. If you are renting, confirm
          who maintains systems and what happens during prolonged outages before you sign.
        </p>
      </>
    ),
  },
  {
    id: "choose",
    q: "How do I choose between WWOOF, Workaway, HelpX, and similar platforms?",
    answer: (
      <>
        <p>
          They overlap but emphasise different networks and fee models. WWOOF is strongly associated with organic farms
          and country-specific sites. Workaway and HelpX list a wider mix of hosts (farms, hostels, families, projects).
          Worldpackers leans toward hostels and social projects in many regions.
        </p>
        <ul>
          <li>Compare annual membership cost vs. how many vetted listings exist in your target region.</li>
          <li>Read recent reviews for the specific host, not just the platform&apos;s brand.</li>
          <li>Use the platform&apos;s messaging and booking flow so you have a paper trail if plans change.</li>
        </ul>
      </>
    ),
  },
  {
    id: "abroader",
    q: "How does Abroader fit into eco or farm living?",
    answer: (
      <>
        <p>
          Abroader focuses on meaningful work abroad and flexible ways to live — including seasonal roles, remote jobs,
          and other paths that pair income with a change of scene. We are not a replacement for WWOOF or community
          directories, but we can sit alongside them while you build a plan that includes earning.
        </p>
        <p>
          Use specialist platforms for placements, and use job search (including remote listings) for runway and
          long-term income. Many people mix both over a single year.
        </p>
      </>
    ),
  },
  {
    id: "first",
    q: "What is a sensible first step if I am only researching?",
    answer: (
      <>
        <p>
          Pick one lane to explore for two weeks: either a short farm or community stay, or a remote-work trial from a
          rural rental you can leave easily. In parallel, list your non-negotiables: minimum income, healthcare, internet
          speed, and climate.
        </p>
        <ul>
          <li>Save a modest emergency fund before long international legs.</li>
          <li>Talk to two or three hosts or members before you choose a first placement.</li>
          <li>Document agreements (hours, accommodation, meals) in writing.</li>
        </ul>
        <p>
          Treat your first experience as data: what worked, what drained you, and what you would adjust next time. That
          feedback loop matters more than picking the &quot;perfect&quot; place on the first try.
        </p>
      </>
    ),
  },
];

export default function EcoSustainableFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="eco-faq">
      {faqs.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className={`eco-faq__item${open ? " eco-faq__item--open" : ""}`}>
            <button
              type="button"
              className="eco-faq__trigger"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
              aria-controls={`eco-faq-panel-${item.id}`}
              id={`eco-faq-trigger-${item.id}`}
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
              <div
                className="eco-faq__answer"
                id={`eco-faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`eco-faq-trigger-${item.id}`}
              >
                <div className="eco-faq__answer-inner">{item.answer}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
