import "./guide-nocturnal.css";

import Image from "next/image";
import Link from "next/link";
import { Inter, Plus_Jakarta_Sans, Rock_Salt } from "next/font/google";
import type { CountryGuide } from "@/lib/guides";
import { getCityHeroImagePath } from "@/lib/guides/city-hero-images";
import { nocturnalHeroFlagUrl } from "@/lib/guides/nocturnal-media-overrides";
import { NocturnalGuideFAQ } from "./guide-nocturnal-faq";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-plus-jakarta" });
const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rock-salt",
});

/** Fallback when no per-guide `overviewHighlightIcons`; third slot is neutral (not payment-specific). */
const OVERVIEW_ICONS = ["travel_explore", "wb_sunny", "public", "hub"] as const;

function parseLifestyleTotal(guide: CountryGuide): string {
  const m = guide.realMonthlyCost?.match(/about \$([\d,]+)/i);
  if (m) {
    const n = Number(m[1].replace(/,/g, ""));
    if (!Number.isNaN(n)) return n.toLocaleString("en-US");
  }
  return guide.avgMonthlyCost.toLocaleString("en-US");
}

function costPillLabel(cost: CountryGuide["costOfLiving"]): string {
  switch (cost) {
    case "Low":
      return "LOW COST";
    case "Medium":
      return "MODERATE COST";
    case "High":
      return "HIGHER COST";
    case "Very High":
      return "PREMIUM COST";
    default:
      return "MODERATE COST";
  }
}

function visaPillLabel(visa: CountryGuide["visaDifficulty"]): string {
  switch (visa) {
    case "Easy":
      return "EASY VISA";
    case "Medium":
      return "PLAN VISA";
    case "Hard":
      return "VISA RESEARCH";
    default:
      return "PLAN VISA";
  }
}

function internetPillLabel(speed: CountryGuide["internetSpeed"]): string {
  switch (speed) {
    case "Excellent":
    case "Good":
      return "GOOD INTERNET";
    case "Average":
      return "OK INTERNET";
    case "Poor":
      return "CHECK INTERNET";
    default:
      return "CHECK INTERNET";
  }
}

function formatPills(guide: CountryGuide): { icon: string; label: string }[] {
  return [
    { icon: "payments", label: costPillLabel(guide.costOfLiving) },
    { icon: "description", label: visaPillLabel(guide.visaDifficulty) },
    { icon: "wifi", label: internetPillLabel(guide.internetSpeed) },
  ];
}

function visaIntroBlurb(guide: CountryGuide): string {
  const s = guide.seoDescription.trim();
  if (s.length <= 320) return s;
  return `${s.slice(0, 317).trim()}…`;
}

export default function NocturnalCountryGuideView({
  guide,
  related,
}: {
  guide: CountryGuide;
  related: CountryGuide[];
}) {
  const primaryVisa = guide.visaOptions[0];
  const pros = guide.prosAndCons?.pros.slice(0, 3) ?? [];
  const cons = guide.prosAndCons?.cons.slice(0, 3) ?? [];
  const communities = guide.expatCommunities?.slice(0, 3) ?? [];
  const pills = formatPills(guide);
  const overviewHighlights =
    guide.highlights.length > 0 ? guide.highlights.slice(0, 4) : [guide.seoDescription];
  const heroFlagUrl = nocturnalHeroFlagUrl[guide.slug];
  const hasBank = Boolean(guide.bankingTips);
  const hasHealth = Boolean(guide.healthcareInfo);
  const hasNeighbourhoods = Boolean(guide.bestNeighbourhoods?.length);
  const mobileSocialHref =
    communities.length ? "#community" : guide.faqs?.length ? "#faqs" : guide.prosAndCons ? "#proscons" : "#overview";

  return (
    <div
      className={`${inter.variable} ${plusJakarta.variable} ${rockSalt.variable} bg-gg-surface text-gg-on-surface font-gg-body selection:bg-gg-primary/30 antialiased pb-24 md:pb-0`}
    >
      <header className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="gg-blur-orb w-96 h-96 bg-gg-primary top-0 right-0" aria-hidden />
        <div className="gg-blur-orb w-64 h-64 bg-gg-secondary bottom-0 left-20" aria-hidden />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="relative w-16 h-10 rounded-sm overflow-hidden shadow-lg border border-gg-outline-variant flex items-center justify-center bg-gg-surface-container-high">
              {heroFlagUrl ? (
                <Image src={heroFlagUrl} alt={`Flag of ${guide.country}`} fill className="object-cover" sizes="64px" />
              ) : (
                <span className="text-4xl leading-none" aria-hidden>
                  {guide.flag}
                </span>
              )}
            </div>
            <span className="font-gg-signature text-gg-secondary text-lg md:text-xl max-w-xl px-2">
              {guide.continent} — {guide.capital}
            </span>
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-gg-headline font-extrabold text-gg-primary leading-none tracking-tighter mb-4">
            {guide.country}
          </h1>
          {guide.updated ? (
            <p className="text-gg-on-surface-variant font-medium tracking-widest uppercase text-sm mb-10">
              Last updated: {guide.updated}
            </p>
          ) : null}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {pills.map((p, i) => (
              <span
                key={`${p.icon}-${i}`}
                className="px-5 py-2 gg-glass-card rounded-full text-xs font-bold text-gg-secondary flex items-center gap-2 uppercase tracking-widest"
              >
                <span className="material-symbols-gg text-[16px]">{p.icon}</span>
                {p.label}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/remote-jobs"
              className="bg-gg-primary text-gg-surface font-black px-8 md:px-10 py-4 md:py-5 rounded-full flex items-center gap-2 hover:shadow-[0_0_30px_rgba(253,187,55,0.4)] transition-all text-center"
            >
              Browse Remote Jobs
            </Link>
            <a
              href="#visas"
              className="border-2 border-gg-outline-variant text-gg-on-surface px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-gg-surface-container transition-all text-center"
            >
              Visa Guide
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 md:pb-32">
        <div className="space-y-24 md:space-y-32">
          <section className="scroll-mt-36" id="overview">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
              <h2 className="text-4xl md:text-5xl font-gg-headline font-bold text-gg-primary">Overview</h2>
              <p className="text-gg-on-surface-variant max-w-md">
                What remote workers notice first about {guide.country}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewHighlights.map((h, i) => (
                <div
                  key={i}
                  className="gg-glass-card p-8 rounded-2xl group hover:bg-gg-surface-container-highest/30 transition-all border-b-4 border-b-gg-secondary"
                >
                  <span className="material-symbols-gg text-gg-primary text-4xl mb-6 block" aria-hidden>
                    {guide.overviewHighlightIcons?.[i] ?? OVERVIEW_ICONS[i % OVERVIEW_ICONS.length]}
                  </span>
                  <p className="text-gg-on-surface-variant text-sm leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            className="bg-gg-surface-container-low p-6 md:p-16 rounded-3xl relative overflow-hidden scroll-mt-36 border border-gg-outline-variant/10"
            id="visas"
          >
            <div className="absolute top-0 right-0 p-8 md:p-12 hidden lg:block pointer-events-none">
              <span className="font-gg-signature text-gg-primary text-3xl -rotate-6 block">
                {guide.visaDifficulty === "Easy" ? "Easy Access!" : "Plan ahead"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-gg-headline font-bold mb-10 md:mb-12 text-gg-primary">Visa Spotlight</h2>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <div className="text-gg-secondary font-bold uppercase tracking-widest text-xs mb-3">The Primary Choice</div>
                <h3 className="text-3xl md:text-4xl font-gg-headline font-bold mb-6">{primaryVisa.name}</h3>
                <p className="text-gg-on-surface-variant mb-8 text-lg leading-relaxed">{visaIntroBlurb(guide)}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    ["Income proof", "Foreign remote income documentation"],
                    ["Clean record", "Police certificate where required"],
                    ["Local address", "Lease or accommodation agreement"],
                    ["Insurance", "Health coverage per application rules"],
                  ].map(([t, d]) => (
                    <li key={t} className="flex items-start gap-4">
                      <span className="material-symbols-gg text-gg-primary bg-gg-primary/10 p-2 rounded-full text-xl shrink-0">
                        check
                      </span>
                      <div>
                        <p className="font-bold text-gg-secondary">{t}</p>
                        <p className="text-xs text-gg-on-surface-variant">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-gg-on-surface-variant">
                  <span className="font-bold text-gg-secondary">Duration: </span>
                  {primaryVisa.duration}
                  <span className="mx-2">·</span>
                  <span className="font-bold text-gg-secondary">Fees: </span>
                  {primaryVisa.cost}
                </p>
                <p className="mt-4 text-sm text-gg-on-surface-variant">
                  <span className="font-bold text-gg-secondary">Requirements: </span>
                  {primaryVisa.requirements}
                </p>
              </div>
              <div className="gg-glass-card p-8 md:p-10 rounded-2xl border-l-8 border-gg-primary">
                <h3 className="text-2xl font-bold mb-4 text-gg-secondary">Your passport matters</h3>
                <p className="text-gg-on-surface-variant text-base mb-8 leading-relaxed">
                  Entry and stay rules depend on citizenship and purpose of visit. Always confirm the latest requirements
                  for your nationality with official government sources before you travel.
                </p>
                <a
                  className="bg-gg-primary text-gg-surface px-8 py-3 rounded-full font-black inline-flex items-center gap-2 hover:opacity-90 transition-all"
                  href="#visas"
                >
                  Full visa details <span className="material-symbols-gg">arrow_forward</span>
                </a>
              </div>
            </div>
            {guide.applicationProcess ? (
              <div className="mt-12 pt-10 border-t border-gg-outline-variant/20">
                <h3 className="text-2xl font-gg-headline font-bold text-gg-primary mb-4">Application process</h3>
                <div className="text-gg-on-surface-variant text-sm md:text-base leading-relaxed space-y-4 max-w-3xl">
                  {guide.applicationProcess.split(/\n\n+/).map((p, i) => (
                    <p key={i}>{p.trim()}</p>
                  ))}
                </div>
              </div>
            ) : null}
          </section>

          <section className="scroll-mt-36" id="cost">
            <h2 className="text-4xl md:text-5xl font-gg-headline font-bold mb-10 md:mb-12 text-gg-primary">Cost of Living</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
              <div className="bg-gg-surface-container p-8 md:p-10 rounded-2xl text-center border border-gg-outline-variant/10">
                <div className="text-gg-on-surface-variant text-xs uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
                  <span className="material-symbols-gg text-lg text-gg-primary" aria-hidden>
                    apartment
                  </span>
                  Average Rent
                </div>
                <div className="text-2xl md:text-3xl font-gg-headline font-bold text-gg-primary">{guide.costBreakdown.rent}</div>
                <div className="text-xs text-gg-on-surface-variant mt-3 uppercase font-medium">1BR Apartment (range)</div>
              </div>
              <div className="bg-gg-surface-container p-8 md:p-10 rounded-2xl text-center border border-gg-outline-variant/10">
                <div className="text-gg-on-surface-variant text-xs uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
                  <span className="material-symbols-gg text-lg text-gg-primary" aria-hidden>
                    restaurant
                  </span>
                  Food &amp; Dining
                </div>
                <div className="text-2xl md:text-3xl font-gg-headline font-bold text-gg-primary">{guide.costBreakdown.food}</div>
                <div className="text-xs text-gg-on-surface-variant mt-3 uppercase font-medium">Groceries &amp; dining out</div>
              </div>
              <div className="bg-gg-surface-container p-8 md:p-10 rounded-2xl text-center border border-gg-outline-variant/10">
                <div className="text-gg-on-surface-variant text-xs uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
                  <span className="material-symbols-gg text-lg text-gg-primary" aria-hidden>
                    directions_transit
                  </span>
                  Getting Around
                </div>
                <div className="text-2xl md:text-3xl font-gg-headline font-bold text-gg-primary">{guide.costBreakdown.transport}</div>
                <div className="text-xs text-gg-on-surface-variant mt-3 uppercase font-medium">Local transport</div>
              </div>
              <div className="bg-gg-surface-container p-8 md:p-10 rounded-2xl text-center border border-gg-outline-variant/10">
                <div className="text-gg-on-surface-variant text-xs uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
                  <span className="material-symbols-gg text-lg text-gg-primary" aria-hidden>
                    work
                  </span>
                  Coworking
                </div>
                <div className="text-2xl md:text-3xl font-gg-headline font-bold text-gg-primary">{guide.costBreakdown.coworking}</div>
                <div className="text-xs text-gg-on-surface-variant mt-3 uppercase font-medium">Desk / membership</div>
              </div>
            </div>
            <div className="gg-glass-card p-8 md:p-16 rounded-3xl flex flex-col md:flex-row justify-between items-center border-t border-gg-primary/30 gap-8">
              <div className="max-w-xl text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gg-secondary">{guide.capital} lifestyle index</h3>
                <p className="text-gg-on-surface-variant text-lg leading-relaxed">
                  Estimated monthly budget for a high-quality nomadic lifestyle including a modern apartment, co-working,
                  and weekend trips—based on the guide&apos;s worked example where available.
                </p>
              </div>
              <div className="text-center shrink-0">
                <div className="text-6xl md:text-7xl lg:text-8xl font-gg-headline font-black text-gg-primary gg-text-glow">
                  ${parseLifestyleTotal(guide)}
                </div>
                <div className="text-gg-secondary font-bold uppercase tracking-widest text-sm mt-2">Per Month Total</div>
              </div>
            </div>
            {guide.realMonthlyCost ? (
              <div className="mt-10 text-gg-on-surface-variant text-sm leading-relaxed max-w-3xl space-y-3">
                {guide.realMonthlyCost.split(/\n\n+/).map((p, i) => (
                  <p key={i}>{p.trim()}</p>
                ))}
              </div>
            ) : null}
          </section>

          <section className="scroll-mt-36" id="cities">
            <h2 className="text-4xl md:text-5xl font-gg-headline font-bold mb-10 md:mb-12 text-gg-primary">Top Nomad Hubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {guide.cities.map((c, idx) => {
                const imageSrc = c.imageUrl ?? getCityHeroImagePath(guide.slug, c.name);
                return (
                  <div
                    key={`${c.name}-${idx}`}
                    className="bg-gg-surface-container-lowest rounded-3xl overflow-hidden group border border-gg-outline-variant/10"
                  >
                    <div className="h-56 md:h-64 overflow-hidden relative">
                      {imageSrc ? (
                        <>
                          {imageSrc.startsWith("/") ? (
                            <Image
                              src={imageSrc}
                              alt={c.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                              sizes="(max-width:768px) 100vw, 33vw"
                            />
                          ) : (
                            <img
                              src={imageSrc}
                              alt={c.name}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                              decoding="async"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-gg-surface-container-lowest to-transparent opacity-60 pointer-events-none" />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-gg-surface-container-high via-gg-surface-container to-gg-primary/20 flex flex-col items-center justify-center px-4 text-center transition-transform duration-700 group-hover:scale-[1.02]">
                          <span className="text-5xl md:text-6xl mb-2 drop-shadow-lg" aria-hidden>
                            {guide.flag}
                          </span>
                          <span className="font-gg-headline font-bold text-gg-secondary text-lg md:text-xl leading-tight">{c.name}</span>
                          <span className="text-gg-on-surface-variant text-xs mt-1">{guide.country}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2 text-gg-secondary">{c.name}</h3>
                      <p className="text-xs text-gg-primary font-black mb-6 uppercase tracking-[0.2em]">{c.vibe}</p>
                      <div className="space-y-3 mb-8">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gg-on-surface-variant font-medium">Avg rent</span>
                          <span className="font-bold text-gg-secondary">{c.avgRent}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gg-on-surface-variant font-medium">Coworking</span>
                          <span className="font-bold text-gg-secondary">{c.coworkingSpaces}</span>
                        </div>
                      </div>
                      {hasNeighbourhoods ? (
                        <a
                          href="#neighbourhoods"
                          className="block w-full text-center py-3 rounded-xl border border-gg-outline-variant hover:bg-gg-primary hover:text-gg-surface hover:font-black transition-all"
                        >
                          Explore neighbourhoods
                        </a>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {guide.bestNeighbourhoods?.length ? (
            <section className="scroll-mt-36" id="neighbourhoods">
              <h2 className="text-4xl md:text-5xl font-gg-headline font-bold mb-10 text-gg-primary">Neighbourhood picks</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {guide.bestNeighbourhoods.map((n) => (
                  <div
                    key={`${n.city}-${n.neighbourhood}`}
                    className="gg-glass-card rounded-2xl p-6 border border-gg-outline-variant/10"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-gg-primary mb-2">{n.city}</p>
                    <h3 className="text-xl font-gg-headline font-bold text-gg-secondary mb-3">{n.neighbourhood}</h3>
                    <p className="text-gg-on-surface-variant text-sm leading-relaxed">{n.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {hasBank || hasHealth ? (
            <section
              className={`grid gap-10 md:gap-12 scroll-mt-36 ${hasBank && hasHealth ? "md:grid-cols-2" : "grid-cols-1"}`}
              id="tips"
            >
              {guide.bankingTips ? (
                <div className="bg-gg-surface-container p-8 md:p-12 rounded-3xl border border-gg-outline-variant/10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-gg-primary/10 rounded-2xl">
                      <span className="material-symbols-gg text-gg-primary text-4xl">account_balance</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-gg-headline font-bold text-gg-secondary">Banking &amp; cash</h3>
                  </div>
                  <div className="text-gg-on-surface-variant mb-8 text-lg leading-relaxed space-y-4">
                    {guide.bankingTips.split(/\n\n+/).map((p, i) => (
                      <p key={i}>{p.trim()}</p>
                    ))}
                  </div>
                  <div className="p-6 bg-gg-surface/50 rounded-2xl border border-gg-primary/20 text-sm text-gg-secondary italic">
                    <strong className="not-italic">Expert tip:</strong> Compare ATM fees and prefer bank-owned machines in
                    city centres.
                  </div>
                </div>
              ) : null}
              {guide.healthcareInfo ? (
                <div className="bg-gg-surface-container p-8 md:p-12 rounded-3xl border border-gg-outline-variant/10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-gg-primary/10 rounded-2xl">
                      <span className="material-symbols-gg text-gg-primary text-4xl">medical_services</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-gg-headline font-bold text-gg-secondary">Health &amp; safety</h3>
                  </div>
                  <div className="text-gg-on-surface-variant mb-8 text-lg leading-relaxed space-y-4">
                    {guide.healthcareInfo.split(/\n\n+/).map((p, i) => (
                      <p key={i}>{p.trim()}</p>
                    ))}
                  </div>
                  <div className="p-6 bg-gg-surface/50 rounded-2xl border border-gg-primary/20 text-sm text-gg-secondary italic">
                    <strong className="not-italic">Note:</strong> Private clinics in {guide.capital} are often a practical
                    choice for expats where available.
                  </div>
                </div>
              ) : null}
            </section>
          ) : null}

          {guide.culturalTips ? (
            <section className="scroll-mt-36 max-w-3xl mx-auto" id="culture">
              <h2 className="text-4xl md:text-5xl font-gg-headline font-bold mb-8 text-gg-primary text-center md:text-left">
                Culture &amp; lifestyle
              </h2>
              <div className="gg-glass-card rounded-3xl p-8 md:p-12 border border-gg-outline-variant/10 text-gg-on-surface-variant text-lg leading-relaxed space-y-4">
                {guide.culturalTips.split(/\n\n+/).map((p, i) => (
                  <p key={i}>{p.trim()}</p>
                ))}
              </div>
            </section>
          ) : null}

          {guide.prosAndCons ? (
            <section className="scroll-mt-36" id="proscons">
              <h2 className="text-4xl md:text-5xl font-gg-headline font-bold mb-10 md:mb-12 text-gg-primary">The real talk</h2>
              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                <div className="space-y-8 md:space-y-10">
                  <h4 className="text-sm font-black uppercase tracking-[0.4em] text-gg-secondary border-l-4 border-gg-secondary pl-4">
                    The advantages
                  </h4>
                  {pros.map((p) => (
                    <div key={p} className="flex items-start gap-6">
                      <span className="material-symbols-gg text-green-400 bg-green-400/10 p-3 rounded-full shrink-0">check</span>
                      <p className="text-gg-on-surface-variant leading-relaxed">{p}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-8 md:space-y-10">
                  <h4 className="text-sm font-black uppercase tracking-[0.4em] text-gg-error border-l-4 border-gg-error pl-4">
                    The challenges
                  </h4>
                  {cons.map((p) => (
                    <div key={p} className="flex items-start gap-6">
                      <span className="material-symbols-gg text-gg-error bg-gg-error/10 p-3 rounded-full shrink-0">close</span>
                      <p className="text-gg-on-surface-variant leading-relaxed">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {communities.length ? (
            <section
              className="text-center py-16 md:py-20 bg-gg-surface-container/30 rounded-3xl border border-gg-outline-variant/10 scroll-mt-36 px-4"
              id="community"
            >
              <h3 className="text-3xl md:text-4xl font-gg-headline font-bold mb-6 text-gg-primary">Join the conversation</h3>
              <p className="text-gg-on-surface-variant max-w-2xl mx-auto mb-10 md:mb-12 text-lg">
                Connect with nomads and locals—search these hubs to get started.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {communities.map((c) => (
                  <a
                    key={c}
                    href={`https://www.google.com/search?q=${encodeURIComponent(c)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 md:px-10 py-4 gg-glass-card rounded-full font-bold flex items-center gap-3 hover:bg-gg-primary hover:text-gg-surface transition-all"
                  >
                    <span className="material-symbols-gg">forum</span>
                    {c}
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {guide.faqs?.length ? (
            <section className="scroll-mt-36 max-w-3xl mx-auto" id="faqs">
              <h2 className="text-4xl md:text-5xl font-gg-headline font-bold mb-10 text-center text-gg-primary">
                Frequently asked questions
              </h2>
              <NocturnalGuideFAQ faqs={guide.faqs} />
            </section>
          ) : null}

          <section className="grid md:grid-cols-2 gap-10 border-t border-gg-outline-variant/20 pt-16">
            <div>
              <h3 className="text-2xl font-gg-headline font-bold text-gg-primary mb-4">Tax snapshot</h3>
              <p className="text-gg-on-surface-variant leading-relaxed">{guide.taxInfo}</p>
            </div>
            <div>
              <h3 className="text-2xl font-gg-headline font-bold text-gg-primary mb-4">Community tips</h3>
              <p className="text-gg-on-surface-variant leading-relaxed">{guide.communityTips}</p>
            </div>
          </section>

          <section className="text-center py-12 border border-gg-outline-variant/10 rounded-3xl bg-gg-surface-container-low/50">
            <h3 className="text-2xl font-gg-headline font-bold text-gg-primary mb-6">This destination is perfect for…</h3>
            <div className="flex flex-wrap gap-3 justify-center px-4">
              {guide.bestFor.map((b) => (
                <span
                  key={b}
                  className="px-4 py-2 rounded-full border border-gg-primary/40 text-gg-primary font-semibold text-sm bg-gg-primary/10"
                >
                  {b}
                </span>
              ))}
            </div>
          </section>

          <section className="text-center py-12 md:py-16 rounded-3xl bg-gradient-to-br from-gg-surface-container-high to-gg-surface-container border border-gg-outline-variant/20">
            <h3 className="text-2xl md:text-3xl font-gg-headline font-bold text-gg-primary mb-4">
              Ready to work remotely in {guide.country}?
            </h3>
            <p className="text-gg-on-surface-variant mb-8 max-w-lg mx-auto">Browse roles you can do from anywhere.</p>
            <Link
              href={guide.jobLink}
              className="inline-flex items-center gap-2 bg-gg-primary text-gg-surface font-black px-10 py-4 rounded-full hover:opacity-95 transition-opacity"
            >
              Browse jobs <span className="material-symbols-gg">arrow_forward</span>
            </Link>
          </section>

          <section className="pb-12">
            <h3 className="text-xl font-gg-headline font-bold mb-8 text-gg-on-surface-variant uppercase tracking-widest text-center">
              Where to next?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {related.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="p-6 md:p-8 gg-glass-card rounded-2xl flex items-center justify-between group hover:border-gg-primary/60 hover:-translate-y-1 transition-all"
                >
                  <span className="text-lg md:text-xl font-bold text-gg-secondary">{g.country}</span>
                  <span className="material-symbols-gg text-gg-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gg-surface/95 border-t border-gg-outline-variant/20 z-40 flex justify-around p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl">
        <a href="#overview" className="flex flex-col items-center text-gg-primary min-w-0 px-1">
          <span className="material-symbols-gg text-2xl">explore</span>
          <span className="text-[10px] font-bold mt-1 uppercase truncate max-w-[72px]">Overview</span>
        </a>
        <a href="#visas" className="flex flex-col items-center text-gg-on-surface-variant min-w-0 px-1">
          <span className="material-symbols-gg text-2xl">description</span>
          <span className="text-[10px] font-bold mt-1 uppercase">Visas</span>
        </a>
        <a href="#cost" className="flex flex-col items-center text-gg-on-surface-variant min-w-0 px-1">
          <span className="material-symbols-gg text-2xl">payments</span>
          <span className="text-[10px] font-bold mt-1 uppercase">Cost</span>
        </a>
        <a href={mobileSocialHref} className="flex flex-col items-center text-gg-on-surface-variant min-w-0 px-1">
          <span className="material-symbols-gg text-2xl">group</span>
          <span className="text-[10px] font-bold mt-1 uppercase">Social</span>
        </a>
      </div>
    </div>
  );
}
