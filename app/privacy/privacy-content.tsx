const LAST_UPDATED = "8 April 2026";
const CONTACT_EMAIL = "admin@abroader.io";

const sections = [
  { id: "who-we-are",        label: "Who we are" },
  { id: "data-we-collect",   label: "Data we collect" },
  { id: "how-we-use-data",   label: "How we use your data" },
  { id: "legal-basis",       label: "Legal basis" },
  { id: "cookies",           label: "Cookies" },
  { id: "third-parties",     label: "Third-party services" },
  { id: "retention",         label: "Data retention" },
  { id: "your-rights",       label: "Your rights" },
  { id: "changes",           label: "Changes to this policy" },
  { id: "contact",           label: "Contact us" },
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="privacy-section__heading">
      {children}
    </h2>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p className="privacy-lead">{children}</p>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="privacy-p">{children}</p>;
}

function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="privacy-ul">
      {items.map((item, i) => (
        <li key={i} className="privacy-li">{item}</li>
      ))}
    </ul>
  );
}

function Table({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="privacy-table-wrap">
      <table className="privacy-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Purpose</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([data, purpose, basis], i) => (
            <tr key={i}>
              <td>{data}</td>
              <td>{purpose}</td>
              <td>{basis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PrivacyContent() {
  return (
    <main className="privacy-page">

      {/* ── Header ── */}
      <div className="privacy-hero">
        <div className="privacy-hero__inner">
          <span className="privacy-hero__badge">Legal</span>
          <h1 className="privacy-hero__title">Privacy Policy</h1>
          <p className="privacy-hero__sub">
            We keep this simple and human. Here is exactly what data we collect, why, and what you can do about it.
          </p>
          <p className="privacy-hero__date">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="privacy-layout">

        {/* ── Table of contents ── */}
        <aside className="privacy-toc">
          <p className="privacy-toc__label">On this page</p>
          <nav aria-label="Privacy policy contents">
            <ol className="privacy-toc__list">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="privacy-toc__link">
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* ── Content ── */}
        <article className="privacy-content">

          {/* 1. Who we are */}
          <section className="privacy-section">
            <SectionHeading id="who-we-are">1. Who we are</SectionHeading>
            <Lead>
              Abroader is an international talent and jobs platform that connects people with opportunities abroad and helps employers hire across borders.
            </Lead>
            <P>
              The data controller is <strong>Abroader OÜ</strong>, a company registered under Estonian e-residency and operated from London, United Kingdom.
            </P>
            <P>
              This policy applies to all visitors and users of <strong>abroader.io</strong> and covers data processed under both <strong>UK GDPR</strong> and <strong>EU GDPR</strong>.
            </P>
            <P>
              For any privacy-related enquiries, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="privacy-link">{CONTACT_EMAIL}</a>.
            </P>
          </section>

          {/* 2. Data we collect */}
          <section className="privacy-section">
            <SectionHeading id="data-we-collect">2. Data we collect</SectionHeading>
            <Lead>We only collect what we actually need. Here is a breakdown:</Lead>
            <Table
              rows={[
                ["Email address", "Newsletter subscription and updates", "Consent"],
                ["Usage data (pages visited, time on site)", "Analytics and site improvement", "Consent (via cookie banner)"],
                ["Device and browser type", "Technical performance monitoring", "Consent (via cookie banner)"],
                ["IP address", "Security and fraud prevention", "Legitimate interest"],
                ["WhatsApp messages", "Customer support and enquiries", "Consent"],
              ]}
            />
            <P>
              We do <strong>not</strong> collect sensitive personal data (e.g. health information, ethnicity, political opinions) and we do <strong>not</strong> sell your data to third parties — ever.
            </P>
          </section>

          {/* 3. How we use your data */}
          <section className="privacy-section">
            <SectionHeading id="how-we-use-data">3. How we use your data</SectionHeading>
            <Lead>Your data is used solely to run and improve Abroader. Specifically:</Lead>
            <Ul items={[
              "To send you our newsletter with international job opportunities and updates (only if you subscribed).",
              "To respond to your messages and enquiries via email or WhatsApp.",
              "To understand how people use the site so we can make it better.",
              "To keep the site secure and functioning correctly.",
              "To comply with our legal obligations under UK and EU law.",
            ]} />
            <P>
              We will never use your email address for anything other than what you signed up for. You can unsubscribe at any time using the link at the bottom of any email we send.
            </P>
          </section>

          {/* 4. Legal basis */}
          <section className="privacy-section">
            <SectionHeading id="legal-basis">4. Legal basis for processing</SectionHeading>
            <Lead>
              Under UK GDPR and EU GDPR, we must have a lawful basis for processing your personal data. We rely on the following:
            </Lead>
            <Ul items={[
              <><strong>Consent</strong> — for newsletter emails, analytics cookies, and marketing. You can withdraw consent at any time.</>,
              <><strong>Legitimate interests</strong> — for basic security measures and fraud prevention, where our interests do not override your rights.</>,
              <><strong>Legal obligation</strong> — where we are required to process data by law.</>,
            ]} />
          </section>

          {/* 5. Cookies */}
          <section className="privacy-section">
            <SectionHeading id="cookies">5. Cookies</SectionHeading>
            <Lead>
              We use cookies to understand how visitors use our site and to improve your experience.
            </Lead>
            <P>
              When you first visit Abroader, we ask for your consent before placing any non-essential cookies. You can accept or decline via the cookie banner. You can also change your preference at any time by clearing your browser cookies and revisiting the site.
            </P>
            <P>We use the following types of cookies:</P>
            <Ul items={[
              <><strong>Essential cookies</strong> — necessary for the site to function. These cannot be turned off.</>,
              <><strong>Analytics cookies</strong> — help us understand how you use the site (e.g. which pages are most visited). Only placed with your consent.</>,
              <><strong>Preference cookies</strong> — remember your settings, such as your cookie consent choice.</>,
            ]} />
            <P>
              We do not use advertising or tracking cookies, and we do not share cookie data with advertising networks.
            </P>
          </section>

          {/* 6. Third-party services */}
          <section className="privacy-section">
            <SectionHeading id="third-parties">6. Third-party services</SectionHeading>
            <Lead>
              We use a small number of trusted third-party services to run Abroader. Each has their own privacy policy.
            </Lead>
            <Ul items={[
              <><strong>WhatsApp (Meta)</strong> — used for customer support chat. Messages sent via WhatsApp are subject to <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="privacy-link">WhatsApp&apos;s Privacy Policy</a>.</>,
              <><strong>TikTok, Instagram, Facebook</strong> — we maintain social media pages on these platforms. Interactions on those platforms are governed by their respective privacy policies.</>,
              <><strong>Email service provider</strong> — used to send newsletters. We only share your email address with our provider for this purpose.</>,
              <><strong>Hosting &amp; infrastructure</strong> — our website is hosted on secure cloud infrastructure. Servers may be located in the EU or UK.</>,
            ]} />
            <P>
              We only share your personal data with third parties where it is necessary to provide our services, and we require all third parties to respect your data and comply with applicable law.
            </P>
          </section>

          {/* 7. Data retention */}
          <section className="privacy-section">
            <SectionHeading id="retention">7. Data retention</SectionHeading>
            <Lead>We only keep your data for as long as we need it.</Lead>
            <Ul items={[
              <><strong>Newsletter subscribers</strong> — we keep your email until you unsubscribe, after which it is deleted within 30 days.</>,
              <><strong>Analytics data</strong> — retained for up to 26 months, after which it is aggregated or deleted.</>,
              <><strong>Support enquiries</strong> — messages and correspondence kept for up to 2 years for reference, then deleted.</>,
              <><strong>Cookie preferences</strong> — stored in your browser until you clear them or change your choice.</>,
            ]} />
          </section>

          {/* 8. Your rights */}
          <section className="privacy-section">
            <SectionHeading id="your-rights">8. Your rights</SectionHeading>
            <Lead>
              Under UK GDPR and EU GDPR, you have the following rights regarding your personal data:
            </Lead>
            <Ul items={[
              <><strong>Right to access</strong> — request a copy of the personal data we hold about you.</>,
              <><strong>Right to rectification</strong> — ask us to correct inaccurate or incomplete data.</>,
              <><strong>Right to erasure</strong> — ask us to delete your personal data ("right to be forgotten").</>,
              <><strong>Right to restrict processing</strong> — ask us to limit how we use your data.</>,
              <><strong>Right to data portability</strong> — request your data in a structured, machine-readable format.</>,
              <><strong>Right to object</strong> — object to processing based on legitimate interests.</>,
              <><strong>Right to withdraw consent</strong> — withdraw consent at any time, without affecting the lawfulness of prior processing.</>,
            ]} />
            <P>
              To exercise any of these rights, email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="privacy-link">{CONTACT_EMAIL}</a>. We will respond within <strong>30 days</strong>.
            </P>
            <P>
              If you are unhappy with how we handle your data, you have the right to lodge a complaint with your supervisory authority:
            </P>
            <Ul items={[
              <><strong>UK:</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="privacy-link">Information Commissioner&apos;s Office (ICO)</a> — ico.org.uk</>,
              <><strong>Estonia / EU:</strong> <a href="https://www.aki.ee/en" target="_blank" rel="noopener noreferrer" className="privacy-link">Estonian Data Protection Inspectorate (AKI)</a> — aki.ee</>,
            ]} />
          </section>

          {/* 9. Changes */}
          <section className="privacy-section">
            <SectionHeading id="changes">9. Changes to this policy</SectionHeading>
            <P>
              We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. When we do, we will update the <strong>Last updated</strong> date at the top of this page.
            </P>
            <P>
              For significant changes, we will notify newsletter subscribers by email. We encourage you to review this page periodically.
            </P>
          </section>

          {/* 10. Contact */}
          <section className="privacy-section">
            <SectionHeading id="contact">10. Contact us</SectionHeading>
            <Lead>Questions about this policy or your data? We are here to help.</Lead>
            <div className="privacy-contact-card">
              <p className="privacy-contact-card__name">Abroader OÜ</p>
              <p className="privacy-contact-card__detail">
                Email:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="privacy-link">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="privacy-contact-card__detail">
                WhatsApp:{" "}
                <a href="https://wa.me/447344033843" target="_blank" rel="noopener noreferrer" className="privacy-link">
                  +44 7344 033843
                </a>
              </p>
              <p className="privacy-contact-card__detail">
                Registered under Estonian e-residency · Operated from London, UK
              </p>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
