"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does van life actually cost?",
    a: "Most van lifers spend between €500 and €1,500 per month depending on where they travel, how often they move, and their lifestyle. Southern Europe is significantly cheaper than Scandinavia. Your biggest costs will be fuel, food, campsite fees, and insurance. Many people find it cheaper than renting a flat.",
  },
  {
    q: "Can I start van life with no experience?",
    a: "Yes — and most people do. The learning curve is real but manageable. Start with a 1–2 week test trip before committing fully. You'll quickly work out what you need, what you don't, and how you like to structure your days on the road.",
  },
  {
    q: "Is it legal to sleep in a van anywhere in Europe?",
    a: "It depends on the country and location. In many parts of Spain, Portugal, and Germany it's widely tolerated. France has stricter rules in tourist areas. Always use apps like Park4Night and iOverlander to find legal, safe, and recommended spots. Wild camping rules vary — always research ahead.",
  },
  {
    q: "Do I need a remote job before I start?",
    a: "Not necessarily. Seasonal work — at ski resorts, campsites, hotels, and summer resorts — is a great alternative and often comes with accommodation. Many van lifers combine a bit of both: remote income during quiet seasons, seasonal gigs when they want to stay in one place for a while. Abroader can help you find both.",
  },
  {
    q: "What's the best van to start with?",
    a: "For most people starting out: a mid-size panel van like a Ford Transit, Volkswagen Transporter, or Mercedes Sprinter. Buy used, keep it simple, and upgrade as you learn what you actually need. The worst mistake is spending too much on a conversion before you know your own habits.",
  },
  {
    q: "What about internet on the road?",
    a: "Internet is the #1 concern for remote van lifers. A combination of a local SIM card with data and a Starlink Mini (if budget allows) covers most situations. In Western Europe, 4G coverage is surprisingly good even in rural areas. Always have a backup — a café or library for critical calls or deadlines.",
  },
  {
    q: "Is van life lonely?",
    a: "It can be. Solo van life in particular takes getting used to. The solution is community: stay at campsites occasionally, join online van life groups, attend meetups, and build a routine of staying in one place for a few weeks when possible. Many van lifers say the community is one of the best parts of the lifestyle.",
  },
];

export default function VanlifeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="vl-faq">
      {faqs.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={i} className={`vl-faq__item${open ? " vl-faq__item--open" : ""}`}>
            <button
              className="vl-faq__trigger"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
            >
              <span>{item.q}</span>
              <svg
                className={`vl-faq__icon${open ? " vl-faq__icon--open" : ""}`}
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
              <div className="vl-faq__answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
