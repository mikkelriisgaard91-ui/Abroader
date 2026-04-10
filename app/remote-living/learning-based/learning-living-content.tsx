import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import LearningLivingFaq from "./learning-living-faq";

const IMG = {
  hero: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=85",
  /** Classic “code on monitor” asset; reliable on Unsplash CDN */
  pathTech:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=85",
  pathBiz: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85",
  pathRemote: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85",
  reality: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85",
  final: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1920&q=85",
};

const subNav = [
  { href: "#what-is", label: "What" },
  { href: "#why", label: "Why" },
  { href: "#skills", label: "Skills" },
  { href: "#where", label: "Where" },
  { href: "#places", label: "Places" },
  { href: "#steps", label: "Start" },
  { href: "#reality", label: "Reality" },
  { href: "#faq", label: "FAQ" },
];

/** PNG flags from flagcdn — visible on OS/browsers where emoji regional flags fail (e.g. many Windows setups). */
function CountryFlag({ code, name }: { code: string; name: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt={`${name} flag`}
      width={24}
      height={18}
      loading="lazy"
      decoding="async"
      className="inline-block shrink-0 rounded-[2px] object-cover align-middle shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
    />
  );
}

function FlagLabel({
  code,
  country,
  children,
}: {
  code: string;
  country: string;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex max-w-full flex-wrap items-center gap-2">
      <CountryFlag code={code} name={country} />
      <span>{children}</span>
    </span>
  );
}

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
        Explore Learning Opportunities
      </Link>
      <Link href="/remote-jobs/ai-search" className="eco-btn eco-btn--secondary">
        Get Matched With Programs
      </Link>
    </div>
  );
}

export default function LearningLivingContent() {
  return (
    <main className="eco-page">
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

      <section className="eco-hero">
        <Image
          src={IMG.hero}
          alt="People collaborating at a table with laptops"
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
            <span>Learning Living</span>
          </nav>
          <p className="eco-hero__eyebrow">💻 Learning Living</p>
          <h1 className="eco-hero__title">Travel, Learn &amp; Build Digital Skills — Anywhere in the World</h1>
          <p className="eco-hero__sub">
            Step out of your routine — and into a life where learning, travel, and opportunity go hand in hand.
          </p>
          <p className="eco-hero__sub" style={{ marginTop: "-0.5rem" }}>
            Learning Living is for people who don&apos;t just want a job… They want skills, freedom, and a future they
            control.
          </p>
          <ul className="eco-hero__sub" style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem" }}>
            <li style={{ marginBottom: "0.35rem" }}>👉 Go somewhere new</li>
            <li style={{ marginBottom: "0.35rem" }}>👉 Learn valuable, in-demand skills</li>
            <li style={{ marginBottom: "0.35rem" }}>👉 Build a lifestyle around growth and flexibility</li>
          </ul>
          <p className="eco-hero__sub" style={{ marginTop: 0 }}>
            Whether you want to learn coding, marketing, AI, or remote work skills — this is where it starts.
          </p>
          <div className="eco-hero__ctas">
            <Link href="/remote-jobs" className="eco-btn eco-btn--primary eco-btn--on-dark">
              Explore Learning Opportunities
            </Link>
            <a href="#steps" className="eco-btn eco-btn--ghost">
              Get started
            </a>
          </div>
        </div>
      </section>

      <section id="what-is" className="eco-section eco-section--cream eco-scroll-target">
        <div className="eco-section__inner">
          <p className="eco-eyebrow">Overview</p>
          <h2 className="eco-h2">What Is Learning Living?</h2>
          <p className="eco-lead">Learning Living is a new way of thinking about education.</p>
          <p className="eco-body eco-body--max">
            Instead of sitting in a classroom for years, you: <strong>learn by doing</strong>,{" "}
            <strong>learn while traveling</strong>, and <strong>learn skills that actually pay</strong>.
          </p>
          <p className="eco-body eco-body--max">👉 It&apos;s education + lifestyle combined.</p>
          <p className="eco-body eco-body--max">
            <strong>Imagine this:</strong>
          </p>
          <ul className="eco-body eco-body--max space-y-2" style={{ marginBottom: "1.5rem", listStyle: "none", paddingLeft: 0 }}>
            <li>
              <FlagLabel code="pt" country="Portugal">
                Coding bootcamp in Portugal
              </FlagLabel>
            </li>
            <li>
              <FlagLabel code="id" country="Indonesia">
                Marketing course in Bali
              </FlagLabel>
            </li>
            <li>
              <FlagLabel code="es" country="Spain">
                Remote work retreat in Spain
              </FlagLabel>
            </li>
            <li>Learning AI while living abroad — anywhere with Wi‑Fi and focus time.</li>
          </ul>
          <p className="eco-body eco-body--max">👉 This is not a gap year — it&apos;s a life upgrade.</p>
        </div>
      </section>

      <section id="why" className="eco-section eco-section--white eco-scroll-target">
        <div className="eco-section__inner">
          <p className="eco-eyebrow">Momentum</p>
          <h2 className="eco-h2">Why People Are Choosing This Path</h2>
          <p className="eco-lead">The world is changing — fast.</p>
          <div className="eco-why-grid">
            {[
              { icon: "💻", title: "Remote jobs", text: "Remote jobs are growing rapidly." },
              { icon: "🎓", title: "Skills over degrees", text: "Degrees matter less — skills matter more." },
              { icon: "🌍", title: "Experiences", text: "People want experiences, not just qualifications." },
              { icon: "🚀", title: "Location freedom", text: "Digital skills unlock location freedom." },
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
          <p className="eco-body eco-body--max" style={{ marginTop: "2rem" }}>
            👉 The new goal isn&apos;t just &quot;get a job&quot; — it&apos;s:{" "}
            <strong>build skills that let you work from anywhere</strong>.
          </p>
        </div>
      </section>

      <section id="skills" className="eco-section eco-section--cream eco-scroll-target">
        <div className="eco-section__inner">
          <p className="eco-eyebrow">Focus areas</p>
          <h2 className="eco-h2">What You Can Learn (That Actually Pays Off)</h2>
          <p className="eco-lead">These are the skills companies are hiring for right now.</p>
          <div className="eco-path-grid">
            <article className="eco-path-card">
              <div className="eco-path-card__image">
                <Image
                  src={IMG.pathTech}
                  alt="Computer screen showing web development code"
                  fill
                  sizes="(max-width:640px) 100vw, 33vw"
                  className="eco-path-card__img"
                />
              </div>
              <h3 className="eco-path-card__title">💻 Tech &amp; Digital Skills</h3>
              <div className="eco-path-card__text">
                <ul style={{ margin: 0, paddingLeft: "1.15rem" }}>
                  <li>Web development (HTML, JavaScript, Python)</li>
                  <li>AI &amp; automation</li>
                  <li>Data analysis</li>
                </ul>
              </div>
            </article>
            <article className="eco-path-card">
              <div className="eco-path-card__image">
                <Image src={IMG.pathBiz} alt="Team discussing strategy in an office" fill sizes="(max-width:640px) 100vw, 33vw" className="eco-path-card__img" />
              </div>
              <h3 className="eco-path-card__title">📈 Business &amp; Marketing</h3>
              <div className="eco-path-card__text">
                <ul style={{ margin: 0, paddingLeft: "1.15rem" }}>
                  <li>Digital marketing</li>
                  <li>Sales &amp; closing</li>
                  <li>Content creation</li>
                </ul>
              </div>
            </article>
            <article className="eco-path-card">
              <div className="eco-path-card__image">
                <Image src={IMG.pathRemote} alt="Remote team video call" fill sizes="(max-width:640px) 100vw, 33vw" className="eco-path-card__img" />
              </div>
              <h3 className="eco-path-card__title">🌍 Lifestyle &amp; Remote Skills</h3>
              <div className="eco-path-card__text">
                <ul style={{ margin: 0, paddingLeft: "1.15rem" }}>
                  <li>Freelancing</li>
                  <li>Remote work systems</li>
                  <li>Building online income</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="where" className="eco-section eco-section--white eco-scroll-target">
        <div className="eco-section__inner">
          <p className="eco-eyebrow">Resources</p>
          <h2 className="eco-h2">Where to Learn These Skills</h2>

          <h3 className="eco-h2" style={{ fontSize: "1.35rem", marginTop: "2rem" }}>
            🧑‍💻 Learn Online (Flexible &amp; Affordable)
          </h3>
          <p className="eco-body eco-body--max">Start anywhere, anytime:</p>
          <div className="eco-resource-row">
            <ExternalLink href="https://www.coursera.org">
              <span className="eco-link-card__title">Coursera</span>
              <span className="eco-link-card__desc">Courses and certificates from universities and companies.</span>
            </ExternalLink>
            <ExternalLink href="https://www.udemy.com">
              <span className="eco-link-card__title">Udemy</span>
              <span className="eco-link-card__desc">Huge library of affordable, self-paced topics.</span>
            </ExternalLink>
            <ExternalLink href="https://www.skillshare.com">
              <span className="eco-link-card__title">Skillshare</span>
              <span className="eco-link-card__desc">Creative and business skills with a subscription model.</span>
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/learning/">
              <span className="eco-link-card__title">LinkedIn Learning</span>
              <span className="eco-link-card__desc">Professional skills tied to your profile and industry.</span>
            </ExternalLink>
          </div>
          <p className="eco-body eco-body--max">
            <strong>Perfect if you want to:</strong> learn while traveling, test different skills, start at your own pace.
          </p>

          <h3 className="eco-h2" style={{ fontSize: "1.35rem", marginTop: "2.5rem" }}>
            🚀 Bootcamps (Fast Track to a Career)
          </h3>
          <p className="eco-body eco-body--max">Want results fast?</p>
          <div className="eco-resource-row">
            <ExternalLink href="https://www.lewagon.com">
              <span className="eco-link-card__title">Le Wagon</span>
              <span className="eco-link-card__desc">Coding bootcamps in cities worldwide.</span>
            </ExternalLink>
            <ExternalLink href="https://generalassemb.ly">
              <span className="eco-link-card__title">General Assembly</span>
              <span className="eco-link-card__desc">Tech, data, and business immersive programs.</span>
            </ExternalLink>
            <ExternalLink href="https://www.ironhack.com">
              <span className="eco-link-card__title">Ironhack</span>
              <span className="eco-link-card__desc">Web dev, UX/UI, data, and more — intensive format.</span>
            </ExternalLink>
          </div>
          <p className="eco-platform-label">Popular locations</p>
          <p className="eco-body eco-body--max flex flex-wrap items-center gap-x-3 gap-y-2">
            <FlagLabel code="pt" country="Portugal">
              Lisbon
            </FlagLabel>
            <span className="text-[#5a7d6a]" aria-hidden>
              ·
            </span>
            <FlagLabel code="de" country="Germany">
              Berlin
            </FlagLabel>
            <span className="text-[#5a7d6a]" aria-hidden>
              ·
            </span>
            <FlagLabel code="es" country="Spain">
              Barcelona
            </FlagLabel>
          </p>
          <p className="eco-body eco-body--max">
            💡 These programs can take you from beginner → job-ready in months.
          </p>

          <h3 className="eco-h2" style={{ fontSize: "1.35rem", marginTop: "2.5rem" }}>
            🌴 Learn While Living Abroad
          </h3>
          <p className="eco-body eco-body--max">Combine learning with lifestyle:</p>
          <div className="eco-resource-row">
            <ExternalLink href="https://www.remoteyear.com">
              <span className="eco-link-card__title">Remote Year</span>
              <span className="eco-link-card__desc">Travel with a cohort while working remotely.</span>
            </ExternalLink>
            <ExternalLink href="https://wifitribe.co">
              <span className="eco-link-card__title">WiFi Tribe</span>
              <span className="eco-link-card__desc">Community-led coliving for remote workers.</span>
            </ExternalLink>
            <ExternalLink href="https://www.outsite.co">
              <span className="eco-link-card__title">Outsite</span>
              <span className="eco-link-card__desc">Work-friendly stays and coliving in global locations.</span>
            </ExternalLink>
          </div>
          <p className="eco-body eco-body--max">
            <strong>Ideal for:</strong> meeting like-minded people, building a global network, learning while exploring the
            world.
          </p>

          <h3 className="eco-h2" style={{ fontSize: "1.35rem", marginTop: "2.5rem" }}>
            🌱 Alternative Learning (Hands-On Experience)
          </h3>
          <p className="eco-body eco-body--max">Not everything happens behind a laptop.</p>
          <div className="eco-resource-row">
            <ExternalLink href="https://www.workaway.info">
              <span className="eco-link-card__title">Workaway</span>
              <span className="eco-link-card__desc">Exchange work for accommodation worldwide.</span>
            </ExternalLink>
            <ExternalLink href="https://wwoof.net">
              <span className="eco-link-card__title">WWOOF</span>
              <span className="eco-link-card__desc">Organic farming and cultural exchange stays.</span>
            </ExternalLink>
          </div>
          <p className="eco-body eco-body--max">
            <strong>Learn:</strong> real-world skills, sustainable living, practical experience.
          </p>

          <CtaPair />
        </div>
      </section>

      <section id="places" className="eco-section eco-section--cream eco-scroll-target">
        <div className="eco-section__inner">
          <p className="eco-eyebrow">Destinations</p>
          <h2 className="eco-h2">Best Places to Start Your Journey</h2>
          <div className="eco-spotlights">
            <div className="eco-spotlights__grid">
              <article className="eco-spotlight">
                <h3 className="eco-spotlight__title flex flex-wrap items-center gap-2">
                  <CountryFlag code="pt" name="Portugal" />
                  Lisbon
                </h3>
                <p className="eco-spotlight__text">
                  Fast-growing tech hub. Great for bootcamps + startups. Affordable + high quality of life.
                </p>
              </article>
              <article className="eco-spotlight">
                <h3 className="eco-spotlight__title flex flex-wrap items-center gap-2">
                  <CountryFlag code="es" name="Spain" />
                  Barcelona
                </h3>
                <p className="eco-spotlight__text">Creative + marketing hotspot. Strong remote work culture.</p>
              </article>
              <article className="eco-spotlight">
                <h3 className="eco-spotlight__title flex flex-wrap items-center gap-2">
                  <CountryFlag code="id" name="Indonesia" />
                  Bali
                </h3>
                <p className="eco-spotlight__text">Global hub for digital nomads. Courses, retreats, and communities.</p>
              </article>
              <article className="eco-spotlight">
                <h3 className="eco-spotlight__title flex flex-wrap items-center gap-2">
                  <CountryFlag code="de" name="Germany" />
                  Berlin
                </h3>
                <p className="eco-spotlight__text">Startup capital of Europe. Tech + innovation scene.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="steps" className="eco-section eco-section--sage eco-scroll-target">
        <div className="eco-section__inner">
          <p className="eco-eyebrow eco-eyebrow--light">Roadmap</p>
          <h2 className="eco-h2 eco-h2--light">How to Get Started (Simple Plan)</h2>
          <ol className="eco-steps">
            {[
              { title: "Choose your skill", desc: "Coding, marketing, AI, etc." },
              { title: "Pick your learning style", desc: "Online, bootcamp, or travel program." },
              { title: "Choose your destination", desc: "Combine learning + lifestyle." },
              { title: "Set a timeframe", desc: "2 weeks → 6 months." },
              { title: "Take action", desc: "Start before you feel ready." },
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

      <section id="reality" className="eco-reality eco-scroll-target">
        <div className="eco-reality__media" aria-hidden>
          <Image src={IMG.reality} alt="" fill sizes="100vw" className="eco-reality__bg" />
        </div>
        <div className="eco-reality__overlay" aria-hidden />
        <div className="eco-section__inner eco-reality__inner">
          <p className="eco-eyebrow eco-eyebrow--light">No BS</p>
          <h2 className="eco-h2 eco-h2--light">The Reality</h2>
          <p className="eco-reality__bridge">Let&apos;s be honest:</p>
          <div className="eco-reality__grid">
            <div className="eco-reality__col eco-reality__col--hard">
              <p className="eco-reality__heading">The hard parts</p>
              <ul className="eco-reality__list">
                <li>It takes focus and discipline</li>
                <li>Not all courses deliver real value</li>
                <li>You may need to invest money upfront</li>
                <li>Results depend on how much effort you put in</li>
              </ul>
            </div>
            <div className="eco-reality__col eco-reality__col--good">
              <p className="eco-reality__heading">If you commit, you gain</p>
              <ul className="eco-reality__list eco-reality__list--good">
                <li>Career opportunities</li>
                <li>Location freedom</li>
                <li>High-income potential</li>
                <li>Massive personal growth</li>
              </ul>
            </div>
          </div>
          <CtaPair className="eco-reality__ctas" />
        </div>
      </section>

      <section id="faq" className="eco-section eco-section--cream eco-scroll-target">
        <div className="eco-section__inner eco-section__inner--narrow">
          <p className="eco-eyebrow">FAQ</p>
          <h2 className="eco-h2">Common questions</h2>
          <LearningLivingFaq />
        </div>
      </section>

      <section id="cta" className="eco-final eco-scroll-target">
        <div className="eco-final__media" aria-hidden>
          <Image src={IMG.final} alt="" fill sizes="100vw" className="eco-final__bg" />
        </div>
        <div className="eco-final__overlay" aria-hidden />
        <div className="eco-final__content">
          <h2 className="eco-final__title">Start Your Learning Living Journey</h2>
          <p className="eco-final__sub">
            At <strong>Abroader</strong>, we help people find opportunities abroad, combine travel with learning, and build
            careers with freedom.
          </p>
          <p className="eco-final__sub">
            👉 Whether you want to learn digital skills, join a program abroad, or build a remote career — we&apos;ll help
            you take the first step.
          </p>
          <div className="eco-final__buttons">
            <Link href="/remote-jobs" className="eco-btn eco-btn--primary eco-btn--on-dark">
              Explore Learning Opportunities
            </Link>
            <Link href="/remote-jobs/ai-search" className="eco-btn eco-btn--ghost">
              Get Matched With Programs
            </Link>
          </div>
          <div className="eco-final__related">
            <span className="eco-final__related-label">More on Abroader</span>
            <Link href="/remote-living" className="eco-final__related-link">
              All remote living styles
            </Link>
            <Link href="/co-living" className="eco-final__related-link">
              Community co-living
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
