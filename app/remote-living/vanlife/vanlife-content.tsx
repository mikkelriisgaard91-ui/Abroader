import Image from "next/image";
import Link from "next/link";
import VanlifeFaq from "./vanlife-faq";

/* ─── Images ─────────────────────────────────────────────────────── */
const IMAGES = {
  hero:     "https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&w=1920&q=90",
  whatitis: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=900&q=85",
  remote:   "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",
  seasonal: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
  van:      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=85",
  rent:     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85",
  truth:    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85",
};

/* ─── Data ────────────────────────────────────────────────────────── */
const moneyCards = [
  {
    icon: "💻",
    label: "Remote Jobs",
    tag: "Work from anywhere",
    description:
      "The backbone of van life. A solid remote income means you choose where you park — not the other way around.",
    roles: ["Customer support", "Sales & account management", "Freelancing (design, writing, marketing)", "Online language teaching"],
    platforms: [
      { name: "We Work Remotely", href: "https://weworkremotely.com" },
      { name: "Upwork", href: "https://upwork.com" },
      { name: "Fiverr", href: "https://fiverr.com" },
    ],
    highlight: false,
  },
  {
    icon: "🏔️",
    label: "Seasonal Work",
    tag: "Travel + earn",
    description:
      "Stay in one place for a season, earn locally, and explore the region on your days off. Often includes free meals or accommodation.",
    roles: ["Ski resorts (winter)", "Campsites & outdoor centres", "Hotels & hostels", "Summer beach resorts"],
    platforms: [
      { name: "Abroader", href: "/" },
      { name: "CoolWorks", href: "https://coolworks.com" },
      { name: "Workaway", href: "https://workaway.info" },
    ],
    highlight: true,
  },
  {
    icon: "⚡",
    label: "Hybrid Lifestyle",
    tag: "Best of both",
    description:
      "The sweet spot most experienced van lifers end up at: remote income during travel periods, seasonal gigs when you want to pause and immerse.",
    roles: ["Freelance remotely between gigs", "Seasonal job for 3–6 months", "Build savings, then move again", "Repeat — adapt as you grow"],
    platforms: [
      { name: "Abroader", href: "/" },
      { name: "Remote.co", href: "https://remote.co" },
      { name: "Season Workers", href: "https://seasonworkers.com" },
    ],
    highlight: false,
  },
];

const tools = [
  {
    icon: "📶",
    title: "Internet (Critical)",
    items: ["Starlink Mini — best for rural areas", "Local SIM cards with data plans", "EU roaming covers most of Europe", "Café & coworking as backup"],
  },
  {
    icon: "📍",
    title: "Navigation & Spots",
    items: ["Park4Night — van parking spots", "iOverlander — community reviews", "Google Maps offline downloads", "Campspace — bookable stays"],
  },
  {
    icon: "⚡",
    title: "Power & Energy",
    items: ["Roof solar panels (200W+)", "Jackery / EcoFlow power station", "Shore power hook-up cable", "12V fridge for food storage"],
  },
  {
    icon: "🏕️",
    title: "Van Essentials",
    items: ["Portable induction or gas stove", "Water tank + filter system", "Blackout curtains for sleep", "Folding work desk or lap desk"],
  },
];

const steps = [
  {
    num: "01",
    title: "Set your budget",
    body: "Be realistic. €3,000–€15,000 covers a decent used van and a basic conversion. Your monthly costs will land between €500–€1,500 depending on lifestyle and location.",
  },
  {
    num: "02",
    title: "Secure your income first",
    body: "Land a remote job or identify your seasonal plan before you buy anything. Income security makes everything else easier — the van, the route, the mindset.",
  },
  {
    num: "03",
    title: "Choose and buy your van",
    body: "Start simple: Ford Transit, VW Transporter, or Mercedes Sprinter. Buy used. You'll learn what matters after your first month on the road — upgrade then, not before.",
  },
  {
    num: "04",
    title: "Do a test trip (non-negotiable)",
    body: "Take 1–2 weeks in the van before committing fully. Sleep in it, work from it, cook in it. You'll discover exactly what works and what doesn't — for free, before it counts.",
  },
  {
    num: "05",
    title: "Go. Adapt. Grow.",
    body: "No plan survives contact with the road. Start your route, build your routines, connect with the community, and adjust as you learn what freedom actually looks like for you.",
  },
];

const truthPoints = {
  hard: [
    "Bad weather days are real — rain on a metal roof gets old",
    "Internet will fail at the worst possible moment",
    "It can get lonely, especially solo and in winter",
    "Van repairs are expensive and inconvenient",
    "You will miss having a permanent address sometimes",
  ],
  worth: [
    "You choose where you wake up every morning",
    "Your overhead is low — financial freedom follows",
    "The van life community is genuinely welcoming",
    "You'll see and experience things most people only dream about",
    "The skills you build — resilience, self-sufficiency, adaptability — last a lifetime",
  ],
};

/* ─── Component ───────────────────────────────────────────────────── */
export default function VanlifeContent() {
  return (
    <main className="vl-page">

      {/* ── HERO ── */}
      <section className="vl-hero">
        <Image
          src={IMAGES.hero}
          alt="Van driving on a scenic mountain road at sunset"
          fill
          priority
          sizes="100vw"
          className="vl-hero__img"
        />
        <div className="vl-hero__overlay" aria-hidden />
        <div className="vl-hero__content">
          <nav className="vl-breadcrumb" aria-label="Breadcrumb">
            <Link href="/remote-living" className="vl-breadcrumb__link">Remote Living</Link>
            <span aria-hidden> / </span>
            <span>Van Life</span>
          </nav>
          <p className="vl-hero__badge">🚐 The complete guide</p>
          <h1 className="vl-hero__title">
            Live Anywhere.<br />
            <span className="vl-hero__title-gold">Work From the Road.</span>
          </h1>
          <p className="vl-hero__sub">
            Van life isn't just Instagram sunsets. It's a real lifestyle — with real jobs, real costs, and real freedom.
            Here's everything you need to start, from someone who's done the homework.
          </p>
          <div className="vl-hero__ctas">
            <Link href="/" className="vl-btn vl-btn--primary">Find Jobs Abroad</Link>
            <a href="#what-it-is" className="vl-btn vl-btn--ghost">Read the guide ↓</a>
          </div>
        </div>
        <div className="vl-hero__scroll" aria-hidden>
          <div className="vl-hero__scroll-line" />
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <div className="vl-stats-strip">
        {[
          { value: "€500–€1,500", label: "Average monthly cost" },
          { value: "40+", label: "Countries to explore" },
          { value: "3–15k", label: "Budget to get started (€)" },
          { value: "1–2 weeks", label: "Recommended trial period" },
        ].map((s) => (
          <div key={s.label} className="vl-stats-strip__item">
            <span className="vl-stats-strip__value">{s.value}</span>
            <span className="vl-stats-strip__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── WHAT IS VAN LIFE ── */}
      <section id="what-it-is" className="vl-section vl-section--light scroll-mt-24">
        <div className="vl-split">
          <div className="vl-split__text">
            <p className="vl-eyebrow">What is van life, really?</p>
            <h2 className="vl-h2">More than Instagram sunsets</h2>
            <p className="vl-body">
              Van life is a lifestyle built around freedom of movement and minimal overhead. You trade a fixed address for routes, landscapes, and communities that understand life on wheels.
            </p>
            <p className="vl-body">
              Done right, it's one of the most cost-effective ways to travel long-term, work remotely, and experience countries from the inside — not as a tourist passing through, but as someone who actually stays.
            </p>
            <div className="vl-pros-cons">
              <div className="vl-pros">
                <p className="vl-pros__heading">✅ Made for you if…</p>
                <ul className="vl-check-list">
                  {["You value freedom over comfort", "You work remotely or want to", "You're an adventure seeker", "You want to travel long-term cheaply"].map(i => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="vl-cons">
                <p className="vl-cons__heading">❌ Not the right fit if…</p>
                <ul className="vl-check-list vl-check-list--cons">
                  {["You need a fixed routine", "Uncertainty stresses you out", "You can't handle discomfort", "You rely on a permanent address"].map(i => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="vl-split__image">
            <Image
              src={IMAGES.whatitis}
              alt="Campervan parked in a scenic mountain location"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="vl-split__img"
            />
          </div>
        </div>
      </section>

      {/* ── HOW TO MAKE MONEY ── */}
      <section className="vl-section vl-section--teal scroll-mt-24">
        <div className="vl-section__inner">
          <p className="vl-eyebrow vl-eyebrow--light">Income on the road</p>
          <h2 className="vl-h2 vl-h2--light">How people make money while living in a van</h2>
          <p className="vl-body vl-body--light vl-body--centered">
            There are three proven models. Most experienced van lifers end up combining all three.
          </p>
          <div className="vl-money-grid">
            {moneyCards.map((card) => (
              <div key={card.label} className={`vl-money-card${card.highlight ? " vl-money-card--highlight" : ""}`}>
                {card.highlight && <div className="vl-money-card__ribbon">Most popular</div>}
                <span className="vl-money-card__icon" aria-hidden>{card.icon}</span>
                <p className="vl-money-card__tag">{card.tag}</p>
                <h3 className="vl-money-card__title">{card.label}</h3>
                <p className="vl-money-card__desc">{card.description}</p>
                <ul className="vl-money-card__roles">
                  {card.roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <div className="vl-money-card__platforms">
                  <p className="vl-money-card__platforms-label">Recommended platforms</p>
                  <div className="vl-money-card__platform-links">
                    {card.platforms.map((p) => (
                      <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="vl-platform-tag">
                        {p.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET YOUR VAN ── */}
      <section className="vl-section vl-section--light">
        <div className="vl-section__inner">
          <p className="vl-eyebrow">Your home on wheels</p>
          <h2 className="vl-h2">Buy or rent — here's how to decide</h2>
          <div className="vl-van-grid">
            <div className="vl-van-card">
              <div className="vl-van-card__image-wrap">
                <Image
                  src={IMAGES.van}
                  alt="Campervan interior with a cosy workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="vl-van-card__img"
                />
              </div>
              <div className="vl-van-card__body">
                <p className="vl-van-card__tag">🛒 Buy a used van</p>
                <h3 className="vl-van-card__title">Own it. Customise it. Call it home.</h3>
                <p className="vl-body">
                  Buying gives you full control over the conversion and no daily rental cost. A solid used van in the €3k–€10k range is the standard starting point.
                </p>
                <p className="vl-tip">💡 Start simple. A basic conversion beats an overbuilt van you regret.</p>
                <p className="vl-van-card__platforms-label">Where to find vans</p>
                <div className="vl-platform-row">
                  {[
                    { name: "AutoTrader", href: "https://www.autotrader.co.uk" },
                    { name: "eBay Motors", href: "https://www.ebay.co.uk/motors" },
                    { name: "Facebook Marketplace", href: "https://www.facebook.com/marketplace" },
                    { name: "Gumtree", href: "https://www.gumtree.com" },
                  ].map(p => (
                    <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="vl-platform-tag vl-platform-tag--dark">{p.name}</a>
                  ))}
                </div>
              </div>
            </div>

            <div className="vl-van-card">
              <div className="vl-van-card__image-wrap">
                <Image
                  src={IMAGES.rent}
                  alt="People planning a road trip together"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="vl-van-card__img"
                />
              </div>
              <div className="vl-van-card__body vl-van-card__body--rent">
                <p className="vl-van-card__tag">🚐 Rent first</p>
                <h3 className="vl-van-card__title">Test it before you commit.</h3>
                <p className="vl-body">
                  Renting for 1–2 weeks is the smartest investment you can make before buying. You'll discover your real needs — sleeping comfort, workspace, storage — without paying full price for a mistake.
                </p>
                <p className="vl-tip">💡 Most people who try van life this way either fall in love with it or save themselves a €10k mistake.</p>
                <p className="vl-van-card__platforms-label">Trusted rental platforms</p>
                <div className="vl-platform-row">
                  {[
                    { name: "Indie Campers", href: "https://indiecampers.com" },
                    { name: "Roadsurfer", href: "https://roadsurfer.com" },
                    { name: "Camplify", href: "https://www.camplify.co.uk" },
                    { name: "Yescapa", href: "https://www.yescapa.co.uk" },
                  ].map(p => (
                    <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="vl-platform-tag vl-platform-tag--dark">{p.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="vl-section vl-section--snow">
        <div className="vl-section__inner">
          <p className="vl-eyebrow">What you'll actually need</p>
          <h2 className="vl-h2">Essential kit for van life</h2>
          <p className="vl-body vl-body--centered">The gear that makes the difference between surviving and thriving on the road.</p>
          <div className="vl-tools-grid">
            {tools.map((t) => (
              <div key={t.title} className="vl-tool-card">
                <span className="vl-tool-card__icon" aria-hidden>{t.icon}</span>
                <h3 className="vl-tool-card__title">{t.title}</h3>
                <ul className="vl-tool-card__list">
                  {t.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO START ── */}
      <section className="vl-section vl-section--light">
        <div className="vl-section__inner vl-section__inner--narrow">
          <p className="vl-eyebrow">No fluff, no hype</p>
          <h2 className="vl-h2">How to actually start van life</h2>
          <p className="vl-body vl-body--centered">Five steps, in order. Skip none of them.</p>
          <div className="vl-steps-grid">
            {steps.map((s) => (
              <div key={s.num} className={`vl-step-card${s.num === "05" ? " vl-step-card--last" : ""}`}>
                <div className="vl-step-card__top-bar" aria-hidden />
                <span className="vl-step-card__ghost" aria-hidden>{s.num}</span>
                <p className="vl-step-card__label">Step {s.num}</p>
                <h3 className="vl-step-card__title">{s.title}</h3>
                <p className="vl-step-card__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE TRUTH ── */}
      <section className="vl-section vl-section--truth">
        <Image
          src={IMAGES.truth}
          alt="Moody countryside landscape"
          fill
          sizes="100vw"
          className="vl-truth__bg"
        />
        <div className="vl-truth__overlay" aria-hidden />
        <div className="vl-section__inner vl-truth__inner">
          <p className="vl-eyebrow vl-eyebrow--light">Honest advice</p>
          <h2 className="vl-h2 vl-h2--light">The truth about van life</h2>
          <p className="vl-body vl-body--light vl-body--centered">
            Nobody should start van life thinking it's all sunsets and espresso. Here's the real picture.
          </p>
          <div className="vl-truth-grid">
            <div className="vl-truth-col vl-truth-col--hard">
              <h3 className="vl-truth-col__heading">The hard parts</h3>
              <ul className="vl-truth-list">
                {truthPoints.hard.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className="vl-truth-col vl-truth-col--worth">
              <h3 className="vl-truth-col__heading">Why it's worth it</h3>
              <ul className="vl-truth-list">
                {truthPoints.worth.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
          <p className="vl-truth__kicker">
            The freedom, the experiences, and the lifestyle consistently outweigh the discomfort — for those who are honest about what they're signing up for.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="vl-section vl-section--snow">
        <div className="vl-section__inner vl-section__inner--narrow">
          <p className="vl-eyebrow">Common questions</p>
          <h2 className="vl-h2">Frequently asked</h2>
          <VanlifeFaq />
        </div>
      </section>

      {/* ── ABROADER CTA ── */}
      <section className="vl-cta-section">
        <div className="vl-cta-section__inner">
          <p className="vl-eyebrow vl-eyebrow--light">Your next step</p>
          <h2 className="vl-cta-section__title">
            Ready to start your van life?<br />
            <span className="vl-cta-section__title-gold">Abroader can help.</span>
          </h2>
          <p className="vl-cta-section__sub">
            We match people with seasonal jobs, remote work, and flexible opportunities abroad — exactly what van life runs on. Whether you need a winter gig at a ski resort or a remote role you can do from a car park in Portugal, we've got you.
          </p>
          <div className="vl-cta-section__buttons">
            <Link href="/" className="vl-btn vl-btn--primary vl-btn--lg">
              Explore jobs abroad
            </Link>
            <Link href="/remote-living" className="vl-btn vl-btn--ghost vl-btn--lg">
              More remote living styles
            </Link>
          </div>
          <div className="vl-cta-section__related">
            <span className="vl-cta-section__related-label">Also explore:</span>
            {[
              { label: "Seasonal Jobs", href: "/" },
              { label: "Remote Jobs", href: "/remote-jobs" },
              { label: "Eco Living", href: "/remote-living/eco-sustainable" },
            ].map(l => (
              <Link key={l.label} href={l.href} className="vl-cta-section__related-link">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
