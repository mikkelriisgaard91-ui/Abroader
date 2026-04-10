import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import EcoSustainableFaq from "./eco-sustainable-faq";

/** Unsplash URLs (images.unsplash.com) — stable IDs; crop params for next/image */
const IMG = {
  hero: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80",
  pathFarm: "https://images.unsplash.com/photo-1464226184882-fdba280bfc02?auto=format&fit=crop&w=800&q=80",
  pathVillage: "https://images.unsplash.com/photo-1522071901873-411289a67412?auto=format&fit=crop&w=800&q=80",
  pathOffgrid: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  pathRemote: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  village1: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80",
  village2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  village3: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  village4: "https://images.unsplash.com/photo-1591857177580-dc82b9ac7353?auto=format&fit=crop&w=900&q=80",
  farmWide: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
  farmDetail: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=900&q=80",
  offgrid1: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80",
  offgrid2: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
  offgrid3: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
  remote: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1400&q=80",
  reality: "https://images.unsplash.com/photo-1551632811-561732de1f98?auto=format&fit=crop&w=1600&q=80",
  final: "https://images.unsplash.com/photo-1500651230702-0e2d9c210bbb?auto=format&fit=crop&w=1920&q=80",
};

const subNav = [
  { href: "#paths", label: "Paths" },
  { href: "#ecovillages", label: "Villages" },
  { href: "#farm", label: "Farm" },
  { href: "#offgrid", label: "Off-grid" },
  { href: "#remote", label: "Remote" },
  { href: "#why", label: "Why" },
  { href: "#steps", label: "Start" },
  { href: "#reality", label: "Reality" },
  { href: "#faq", label: "FAQ" },
];

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="eco-link-card">
      {children}
    </a>
  );
}

function CtaPair({ className = "" }: { className?: string }) {
  return (
    <div className={`eco-cta-pair ${className}`.trim()}>
      <Link href="/remote-jobs" className="eco-btn eco-btn--primary">
        Explore opportunities
      </Link>
      <Link href="/remote-jobs/ai-search" className="eco-btn eco-btn--secondary">
        Get matched with eco jobs
      </Link>
    </div>
  );
}

export default function EcoSustainableContent() {
  return (
    <main className="eco-page">
      {/* Sticky sub-navigation */}
      <div className="eco-subnav" role="navigation" aria-label="On this page">
        <div className="eco-subnav__inner">
          <div className="eco-subnav__scroll">
            {subNav.map((item) => (
              <a key={item.href} href={item.href} className="eco-subnav__link">
                {item.label}
              </a>
            ))}
          </div>
          <Link href="/remote-jobs" className="eco-subnav__cta">
            Explore
          </Link>
        </div>
      </div>

      {/* 1 Hero */}
      <section className="eco-hero">
        <Image
          src={IMG.hero}
          alt="Wooden cabin and trees in soft natural light"
          fill
          priority
          sizes="100vw"
          className="eco-hero__img"
        />
        <div className="eco-hero__overlay" aria-hidden />
        <div className="eco-hero__content">
          <nav className="eco-breadcrumb" aria-label="Breadcrumb">
            <Link href="/remote-living" className="eco-breadcrumb__link">
              Remote Living
            </Link>
            <span aria-hidden> / </span>
            <span>Eco &amp; sustainable living</span>
          </nav>
          <p className="eco-hero__eyebrow">Eco &amp; sustainable living</p>
          <h1 className="eco-hero__title">Live closer to nature — without giving up income</h1>
          <p className="eco-hero__sub">
            More people than ever are rethinking how they live. You don&apos;t have to choose between a paycheck and a
            life that feels aligned with the planet — but you do need a clear plan.
          </p>
          <div className="eco-hero__ctas">
            <Link href="/remote-jobs" className="eco-btn eco-btn--primary eco-btn--on-dark">
              Explore opportunities
            </Link>
            <a href="#steps" className="eco-btn eco-btn--ghost">
              Get started
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="eco-stats">
        <div className="eco-stats__item">
          <span className="eco-stats__value">72%</span>
          <span className="eco-stats__label">Survey after survey: sustainability matters more to people today</span>
        </div>
        <div className="eco-stats__item">
          <span className="eco-stats__value">10,000+</span>
          <span className="eco-stats__label">Ecovillages &amp; intentional communities worldwide (network estimates)</span>
        </div>
        <div className="eco-stats__item">
          <span className="eco-stats__value">Up to 70%</span>
          <span className="eco-stats__label">Lower footprint in many communities vs. typical urban living — studies vary</span>
        </div>
      </div>

      {/* 2 Spectrum */}
      <section id="paths" className="eco-section eco-section--cream eco-scroll-target">
        <div className="eco-section__inner">
          <p className="eco-eyebrow">Spectrum</p>
          <h2 className="eco-h2">What eco living actually looks like</h2>
          <p className="eco-lead">
            Eco and sustainable living isn&apos;t one lifestyle — it&apos;s a spectrum. Most people mix pieces over time.
          </p>
          <div className="eco-path-grid">
            {[
              {
                img: IMG.pathFarm,
                alt: "Hands working with soil in a field",
                title: "Farm life",
                text: "Seasonal rhythm, hands-on work, food close to the table.",
              },
              {
                img: IMG.pathVillage,
                alt: "People together outdoors in a community setting",
                title: "Eco villages",
                text: "Shared land, governance, and long-term community intent.",
              },
              {
                img: IMG.pathOffgrid,
                alt: "Solar panels against blue sky",
                title: "Off-grid living",
                text: "Power, water, and systems you manage yourself — or mostly yourself.",
              },
              {
                img: IMG.pathRemote,
                alt: "Team collaborating with laptops",
                title: "Remote work in nature",
                text: "Same career or clients; different postcode and morning view.",
              },
            ].map((card) => (
              <article key={card.title} className="eco-path-card">
                <div className="eco-path-card__image">
                  <Image src={card.img} alt={card.alt} fill sizes="(max-width:640px) 100vw, 25vw" className="eco-path-card__img" />
                </div>
                <h3 className="eco-path-card__title">{card.title}</h3>
                <p className="eco-path-card__text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Ecovillages */}
      <section id="ecovillages" className="eco-section eco-section--white eco-scroll-target">
        <div className="eco-section__inner">
          <p className="eco-eyebrow">Communities</p>
          <h2 className="eco-h2">Ecovillages and intentional communities</h2>
          <p className="eco-body eco-body--max">
            These places combine housing, shared values, and often food systems or education. Some welcome visitors,
            volunteers, or new members; every community has its own rules and culture. Use established networks to
            research fit — not just photos.
          </p>
          <div className="eco-image-grid eco-image-grid--4">
            <div className="eco-image-grid__cell">
              <Image src={IMG.village1} alt="Community garden with lush plants" fill sizes="(max-width:768px) 50vw, 25vw" className="eco-image-grid__img" />
            </div>
            <div className="eco-image-grid__cell">
              <Image src={IMG.village2} alt="Modern wooden eco home exterior" fill sizes="(max-width:768px) 50vw, 25vw" className="eco-image-grid__img" />
            </div>
            <div className="eco-image-grid__cell">
              <Image src={IMG.village3} alt="Shared outdoor meal at a long table" fill sizes="(max-width:768px) 50vw, 25vw" className="eco-image-grid__img" />
            </div>
            <div className="eco-image-grid__cell">
              <Image src={IMG.village4} alt="Permaculture-style garden" fill sizes="(max-width:768px) 50vw, 25vw" className="eco-image-grid__img" />
            </div>
          </div>
          <div className="eco-resource-row">
            <ExternalLink href="https://ecovillage.org">
              <span className="eco-link-card__title">Global Ecovillage Network</span>
              <span className="eco-link-card__desc">Networks, learning, and global perspective on regenerative communities.</span>
            </ExternalLink>
            <ExternalLink href="https://ic.org">
              <span className="eco-link-card__title">Foundation for Intentional Community</span>
              <span className="eco-link-card__desc">Directory, articles, and tools for finding the right community fit.</span>
            </ExternalLink>
            <ExternalLink href="https://gen.ecovillage.org/ecovillage-map/">
              <span className="eco-link-card__title">Ecovillage map</span>
              <span className="eco-link-card__desc">Explore communities on an interactive map — verify details on each site.</span>
            </ExternalLink>
          </div>
          <div className="eco-spotlights">
            <p className="eco-spotlights__label">Well-known examples — always check visitor and membership rules on their sites</p>
            <div className="eco-spotlights__grid">
              <article className="eco-spotlight">
                <h3 className="eco-spotlight__title">Findhorn · Scotland</h3>
                <p className="eco-spotlight__text">Long-standing ecovillage known for education, spirituality, and sustainable design.</p>
                <a href="https://www.findhorn.org/" target="_blank" rel="noopener noreferrer" className="eco-spotlight__link">
                  findhorn.org
                </a>
              </article>
              <article className="eco-spotlight">
                <h3 className="eco-spotlight__title">Auroville · India</h3>
                <p className="eco-spotlight__text">Experimental township focused on human unity and environmental work.</p>
                <a href="https://www.auroville.org/" target="_blank" rel="noopener noreferrer" className="eco-spotlight__link">
                  auroville.org
                </a>
              </article>
              <article className="eco-spotlight">
                <h3 className="eco-spotlight__title">Tamera · Portugal</h3>
                <p className="eco-spotlight__text">Peace research and healing biotopes; offers courses and visitor programmes.</p>
                <a href="https://www.tamera.org/" target="_blank" rel="noopener noreferrer" className="eco-spotlight__link">
                  tamera.org
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Farm */}
      <section id="farm" className="eco-section eco-section--cream eco-scroll-target">
        <div className="eco-section__inner">
          <div className="eco-split">
            <div className="eco-split__image eco-split__image--tall">
              <Image src={IMG.farmWide} alt="Rolling green farmland under sky" fill sizes="(max-width:900px) 100vw, 48vw" className="eco-split__img" />
            </div>
            <div className="eco-split__text">
              <p className="eco-eyebrow">Work exchange</p>
              <h2 className="eco-h2">Farm stays and work-exchange</h2>
              <p className="eco-body">
                Many hosts ask for roughly <strong>4–6 hours a day</strong> in exchange for <strong>food and accommodation</strong>.
                You learn practical skills — animals, gardens, building, hospitality — while keeping living costs low.
                It&apos;s real work, not a holiday.
              </p>
              <div className="eco-split__image eco-split__image--short">
                <Image src={IMG.farmDetail} alt="Person harvesting fresh produce outdoors" fill sizes="(max-width:900px) 100vw, 40vw" className="eco-split__img" />
              </div>
              <p className="eco-platform-label">Platforms</p>
              <div className="eco-platform-tags">
                {[
                  { name: "WWOOF", href: "https://wwoof.net" },
                  { name: "Workaway", href: "https://www.workaway.info" },
                  { name: "HelpX", href: "https://www.helpx.net" },
                  { name: "Worldpackers", href: "https://www.worldpackers.com" },
                ].map((p) => (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="eco-platform-tag">
                    {p.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Off-grid */}
      <section id="offgrid" className="eco-section eco-section--white eco-scroll-target">
        <div className="eco-section__inner">
          <p className="eco-eyebrow">Systems</p>
          <h2 className="eco-h2">Off-grid and low-impact living</h2>
          <p className="eco-body eco-body--max">
            Off-grid usually means you own more of your infrastructure: solar (or other generation), water catchment and
            filtration, composting or septic, heating choices. It can lower bills and deepen resilience; it also means
            maintenance and learning curves.
          </p>
          <div className="eco-image-grid eco-image-grid--3">
            <div className="eco-image-grid__cell eco-image-grid__cell--wide">
              <Image src={IMG.offgrid1} alt="House with solar panels on the roof" fill sizes="(max-width:768px) 100vw, 33vw" className="eco-image-grid__img" />
            </div>
            <div className="eco-image-grid__cell">
              <Image src={IMG.offgrid2} alt="Cabin in a natural forested setting" fill sizes="(max-width:768px) 100vw, 33vw" className="eco-image-grid__img" />
            </div>
            <div className="eco-image-grid__cell">
              <Image src={IMG.offgrid3} alt="Solar panels in a rural landscape" fill sizes="(max-width:768px) 100vw, 33vw" className="eco-image-grid__img" />
            </div>
          </div>
          <div className="eco-platform-tags eco-platform-tags--center">
            {[
              { name: "Off Grid World", href: "https://offgridworld.com" },
              { name: "Permaculture Association", href: "https://www.permaculture.org.uk" },
              { name: "Transition Network", href: "https://transitionnetwork.org" },
            ].map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="eco-platform-tag eco-platform-tag--solid">
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Remote */}
      <section id="remote" className="eco-section eco-section--cream eco-scroll-target">
        <div className="eco-section__inner eco-section__inner--wide">
          <div className="eco-remote">
            <div className="eco-remote__image">
              <Image
                src={IMG.remote}
                alt="Person working on a laptop in a bright modern space"
                fill
                sizes="(max-width:900px) 100vw, 50vw"
                className="eco-remote__img"
              />
            </div>
            <div className="eco-remote__text">
              <p className="eco-eyebrow">Income</p>
              <h2 className="eco-h2">Keep your income; change your surroundings</h2>
              <p className="eco-body">
                Remote work is what makes &quot;nature-first&quot; realistic for many people: you earn in one economy and live
                where rent, pace, and community fit you better. You still need reliable internet, boundaries, and a tax
                and visa setup that works for your situation.
              </p>
              <p className="eco-platform-label">Job boards &amp; freelancing</p>
              <div className="eco-platform-tags">
                {[
                  { name: "We Work Remotely", href: "https://weworkremotely.com" },
                  { name: "Remote OK", href: "https://remoteok.com" },
                  { name: "Upwork", href: "https://www.upwork.com" },
                ].map((p) => (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="eco-platform-tag">
                    {p.name}
                  </a>
                ))}
              </div>
              <CtaPair className="eco-remote__ctas" />
            </div>
          </div>
        </div>
      </section>

      {/* 7 Why growing */}
      <section id="why" className="eco-section eco-section--white eco-scroll-target">
        <div className="eco-section__inner">
          <p className="eco-eyebrow">Momentum</p>
          <h2 className="eco-h2">Why more people are choosing this path</h2>
          <div className="eco-why-grid">
            {[
              { icon: "🌍", title: "Climate awareness", text: "Daily life that matches environmental values." },
              { icon: "🕊️", title: "Freedom", text: "Less lock-in to one city or rent trajectory." },
              { icon: "💻", title: "Remote work", text: "More real jobs are location-independent." },
              {
                icon: "🏡",
                title: "Cost & quality of life",
                text: "Rural or slower contexts can stretch income — not always; it depends on place and setup.",
              },
            ].map((item) => (
              <article key={item.title} className="eco-why-card">
                <span className="eco-why-card__icon" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="eco-why-card__title">{item.title}</h3>
                <p className="eco-why-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Steps */}
      <section id="steps" className="eco-section eco-section--sage eco-scroll-target">
        <div className="eco-section__inner">
          <p className="eco-eyebrow eco-eyebrow--light">Roadmap</p>
          <h2 className="eco-h2 eco-h2--light">A simple path in (not a guarantee)</h2>
          <ol className="eco-steps">
            {[
              { title: "Choose a lane", desc: "Farm exchange, ecovillage research, off-grid learning, or remote-first move." },
              { title: "Start short-term", desc: "A few weeks or a season beats selling everything on day one." },
              { title: "Secure income", desc: "Contract, savings runway, or a role you can do from the road." },
              { title: "Apply through trusted platforms", desc: "Read reviews, house rules, and visa implications." },
              { title: "Test and adapt", desc: "Treat the first round as data, not a verdict on the whole lifestyle." },
            ].map((step, i) => (
              <li key={step.title} className="eco-step">
                <span className="eco-step__num">{i + 1}</span>
                <div>
                  <h3 className="eco-step__title">{step.title}</h3>
                  <p className="eco-step__desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 9 Reality */}
      <section id="reality" className="eco-reality eco-scroll-target">
        <div className="eco-reality__media" aria-hidden>
          <Image src={IMG.reality} alt="" fill sizes="100vw" className="eco-reality__bg" />
        </div>
        <div className="eco-reality__overlay" aria-hidden />
        <div className="eco-section__inner eco-reality__inner">
          <p className="eco-eyebrow eco-eyebrow--light">Honest picture</p>
          <h2 className="eco-h2 eco-h2--light">The honest trade-offs</h2>
          <div className="eco-reality__grid">
            <div className="eco-reality__col eco-reality__col--hard">
              <p className="eco-reality__heading">The hard parts</p>
              <ul className="eco-reality__list">
                <li>Physical work and weather</li>
                <li>Less convenience than city life</li>
                <li>Friction in shared living</li>
                <li>Uneven income if you rely on gigs or seasonal work</li>
              </ul>
            </div>
            <div className="eco-reality__col eco-reality__col--good">
              <p className="eco-reality__heading">What people stay for</p>
              <ul className="eco-reality__list eco-reality__list--good">
                <li>Freedom to design your days</li>
                <li>Work that feels purposeful</li>
                <li>Skills that compound over time</li>
                <li>Connection to place and people</li>
              </ul>
            </div>
          </div>
          <p className="eco-reality__bridge">
            If both columns feel true, you&apos;re thinking about it the right way.
          </p>
          <CtaPair className="eco-reality__ctas" />
        </div>
      </section>

      {/* 10 FAQ */}
      <section id="faq" className="eco-section eco-section--cream eco-scroll-target">
        <div className="eco-section__inner eco-section__inner--narrow">
          <p className="eco-eyebrow">FAQ</p>
          <h2 className="eco-h2">Common questions</h2>
          <EcoSustainableFaq />
        </div>
      </section>

      {/* 11 Final CTA */}
      <section id="cta" className="eco-final eco-scroll-target">
        <div className="eco-final__media" aria-hidden>
          <Image src={IMG.final} alt="" fill sizes="100vw" className="eco-final__bg" />
        </div>
        <div className="eco-final__overlay" aria-hidden />
        <div className="eco-final__content">
          <h2 className="eco-final__title">Start your eco living journey</h2>
          <p className="eco-final__sub">
            <strong>Abroader</strong> helps people find meaningful work abroad and build flexible lifestyles — so you can
            explore seriously without guessing every step alone.
          </p>
          <div className="eco-final__buttons">
            <Link href="/remote-jobs" className="eco-btn eco-btn--primary eco-btn--on-dark">
              Explore opportunities
            </Link>
            <Link href="/remote-jobs/ai-search" className="eco-btn eco-btn--ghost">
              Get matched with eco jobs
            </Link>
          </div>
          <div className="eco-final__related">
            <span className="eco-final__related-label">More on Abroader</span>
            <Link href="/remote-living" className="eco-final__related-link">
              All remote living styles
            </Link>
            <Link href="/work-for-accommodation" className="eco-final__related-link">
              Work for accommodation
            </Link>
            <Link href="/remote-jobs" className="eco-final__related-link">
              Remote jobs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
