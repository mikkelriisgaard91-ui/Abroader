import type { ReactNode } from "react";
import {
  cookieCategories,
  privacyPolicyMeta,
  processingActivities,
  retentionPeriods,
  subProcessors,
} from "@/config/privacyPolicy";
import PrivacyDataInventory from "@/components/legal/PrivacyDataInventory";
import PrivacyPlatformOverview from "@/components/legal/PrivacyPlatformOverview";

function DefinedTerm({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="legal-placeholder">{children}</span>;
}

export default function PrivacyPolicyContent() {
  const meta = privacyPolicyMeta;

  return (
    <article className="legal-prose max-w-4xl mx-auto px-6 py-16 lg:py-24">
      <header className="mb-12 lg:mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
          Legal
        </p>
        <h1 className="section-heading mb-6">Privacy Policy</h1>
        <p className="text-lg text-ink-muted leading-relaxed">
          This Privacy Policy explains how {meta.controller} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;{meta.platformName}&rdquo;) collects, uses,
          shares, and protects personal data when you use{" "}
          <a href={meta.platformUrl} className="legal-link">
            abroader.io
          </a>{" "}
          and related services (the &ldquo;Platform&rdquo;). We process personal data
          in accordance with the EU General Data Protection Regulation (GDPR) and
          applicable Estonian data protection law.
        </p>

        <div className="glass-panel mt-8 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
          <p className="text-ink-muted">
            <span className="font-semibold text-ink">Version:</span> {meta.version}
          </p>
          <p className="text-ink-muted">
            <span className="font-semibold text-ink">Last updated:</span>{" "}
            {meta.lastUpdated}
          </p>
        </div>
      </header>

      <div className="space-y-14 lg:space-y-16">
        <section id="who-we-are" aria-labelledby="who-we-are-heading">
          <h2 id="who-we-are-heading">1. Who we are</h2>
          <p className="mb-6">
            The data controller responsible for your personal data is:
          </p>
          <div className="glass-panel p-6 lg:p-8 space-y-2 text-ink-muted mb-6">
            <p>
              <span className="font-semibold text-ink">Controller:</span>{" "}
              {meta.controller}
            </p>
            <p>
              <span className="font-semibold text-ink">Country:</span>{" "}
              {meta.controllerCountry}
            </p>
            <p>
              <span className="font-semibold text-ink">Platform:</span>{" "}
              <a href={meta.platformUrl} className="legal-link">
                abroader.io
              </a>
            </p>
            <p>
              <span className="font-semibold text-ink">Privacy contact:</span>{" "}
              <a href={`mailto:${meta.contactEmail}`} className="legal-link">
                {meta.contactEmail}
              </a>
            </p>
            <p>
              <span className="font-semibold text-ink">Data Protection Officer (DPO):</span>{" "}
              <a href={`mailto:${meta.dpoEmail}`} className="legal-link">
                {meta.dpoEmail}
              </a>
            </p>
          </div>
          <p className="mb-2">
            {meta.platformName} connects independent recruiters (
            <DefinedTerm>Abroaders</DefinedTerm>), job seekers (
            <DefinedTerm>Candidates</DefinedTerm>), and employers (
            <DefinedTerm>Clients</DefinedTerm>) for international recruitment. Because
            our controller is based in the EU and users may be located across the
            EEA and internationally, we design our processing with GDPR requirements
            in mind.
          </p>

          <PrivacyPlatformOverview />
        </section>

        <section id="data-we-collect" aria-labelledby="data-we-collect-heading">
          <h2 id="data-we-collect-heading">2. What personal data we collect</h2>
          <p className="mb-6">
            The personal data we collect depends on how you use the Platform. Select
            your role below to see the types of data involved:
          </p>

          <PrivacyDataInventory />

          <p className="mt-6">
            We do not intentionally collect more data than is reasonably necessary for
            the purposes described in this Policy. You should not submit special
            category data (such as health information) unless it is genuinely required
            for a recruitment process and you have a lawful basis to provide it.
          </p>
        </section>

        <section id="how-we-collect" aria-labelledby="how-we-collect-heading">
          <h2 id="how-we-collect-heading">3. How we collect personal data</h2>
          <p className="mb-4">We collect personal data through:</p>
          <ul className="legal-list-disc">
            <li>
              <strong className="text-ink">Direct submission</strong> — when you
              register as an Abroader, apply for a role as a Candidate, or provide
              business details as a Client.
            </li>
            <li>
              <strong className="text-ink">Abroader landing pages and vacancy listings</strong>{" "}
              — when Candidates submit applications or CVs through an
              Abroader&rsquo;s branded page or live vacancy on the Platform.
            </li>
            <li>
              <strong className="text-ink">Application and contact forms</strong> — when
              you communicate with us or request information through forms on
              abroader.io.
            </li>
            <li>
              <strong className="text-ink">Platform use</strong> — when Abroaders use
              the workspace, commission tracker, and related tools.
            </li>
            <li>
              <strong className="text-ink">Cookies and similar technologies</strong> — when
              you browse abroader.io (see Section 10).
            </li>
            <li>
              <strong className="text-ink">Third parties where permitted</strong> — for
              example, an Abroader may introduce Candidate information into the Platform
              as part of a recruitment process, or a Client may provide vacancy and
              contact details.
            </li>
          </ul>
        </section>

        <section id="legal-basis" aria-labelledby="legal-basis-heading">
          <h2 id="legal-basis-heading">4. Legal basis for processing (GDPR)</h2>
          <p className="mb-6">
            We process personal data only where we have a valid legal basis under
            Article 6 GDPR (and, where relevant, Article 9 for special category data).
            The main bases we rely on are:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-panel p-5 lg:p-6">
              <h3 className="font-bold text-ink mb-2">Contract necessity (Art. 6(1)(b))</h3>
              <p>
                Processing needed to perform a contract or take steps at your request
                before entering a contract — for example, managing Candidate
                applications, facilitating introductions to Clients, operating
                Abroader accounts, tracking commissions, and paying Abroaders.
              </p>
            </div>
            <div className="glass-panel p-5 lg:p-6">
              <h3 className="font-bold text-ink mb-2">Legitimate interests (Art. 6(1)(f))</h3>
              <p>
                Processing necessary for our legitimate interests, balanced against
                your rights — for example, matching Candidates to vacancies, operating
                and improving the Platform, preventing fraud or misuse, and limited
                analytics to understand site usage. You may object to processing based
                on legitimate interests (see Section 9).
              </p>
            </div>
            <div className="glass-panel p-5 lg:p-6">
              <h3 className="font-bold text-ink mb-2">Consent (Art. 6(1)(a))</h3>
              <p>
                Where required, we ask for your consent — for example, for non-essential
                marketing communications or non-essential cookies. You may withdraw
                consent at any time without affecting the lawfulness of processing
                before withdrawal.
              </p>
            </div>
            <div className="glass-panel p-5 lg:p-6">
              <h3 className="font-bold text-ink mb-2">Legal obligation (Art. 6(1)(c))</h3>
              <p>
                Processing necessary to comply with law — for example, retaining
                financial, invoicing, and tax records related to Client billing and
                Abroader commission payments.
              </p>
            </div>
          </div>
        </section>

        <section id="how-we-use" aria-labelledby="how-we-use-heading">
          <h2 id="how-we-use-heading">5. How we use personal data</h2>
          <p className="mb-6">
            We use personal data for the following processing activities:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {processingActivities.map((activity) => (
              <div key={activity.title} className="glass-panel p-5 lg:p-6">
                <h3 className="font-bold text-ink mb-2">{activity.title}</h3>
                <p className="text-sm">{activity.description}</p>
              </div>
            ))}
          </div>

          <p>
            We also use data to provide support, maintain accounts, monitor Platform
            security, enforce our Terms of Service, and analyse site usage where
            permitted by law and your cookie preferences.
          </p>
        </section>

        <section id="sharing" aria-labelledby="sharing-heading">
          <h2 id="sharing-heading">6. Who we share data with</h2>
          <p className="mb-6">
            We share personal data only where necessary and with appropriate safeguards.
            Recipients may include:
          </p>

          <ul className="legal-list-disc mb-6">
            <li>
              <strong className="text-ink">Abroaders</strong> — Candidate and vacancy
              information needed to manage applications and placements; commission and
              performance data relating to their own account.
            </li>
            <li>
              <strong className="text-ink">Other Abroaders</strong> — where sourcing and
              placement roles are split under the commission structure, limited Candidate
              data may be shared between the relevant Abroaders.
            </li>
            <li>
              <strong className="text-ink">Clients and prospective Clients</strong> —{" "}
              Candidate profiles and recruitment information for hiring decisions, and
              relevant vacancy or billing details.
            </li>
            <li>
              <strong className="text-ink">Payment, invoicing, and finance providers</strong>{" "}
              — to process commission payouts to Abroaders and Client invoicing.
            </li>
            <li>
              <strong className="text-ink">Analytics and infrastructure providers</strong>{" "}
              — to host the Platform, send service emails, and measure site performance
              (subject to your cookie choices where applicable).
            </li>
            <li>
              <strong className="text-ink">Professional advisers and authorities</strong>{" "}
              — where required by law, regulation, or to protect legal rights.
            </li>
          </ul>

          <p className="mb-4">
            We use sub-processors that process data on our behalf:
          </p>
          <div className="overflow-x-auto glass-panel mb-6">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold text-ink">Category</th>
                  <th className="py-3 px-4 font-bold text-ink">Provider</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/60">
                  <td className="py-3 px-4 align-top">Payment processing</td>
                  <td className="py-3 px-4 align-top">
                    <Placeholder>{subProcessors[0]}</Placeholder>
                  </td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 px-4 align-top">Invoicing &amp; finance</td>
                  <td className="py-3 px-4 align-top">
                    <Placeholder>{subProcessors[1]}</Placeholder>
                  </td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 px-4 align-top">Hosting</td>
                  <td className="py-3 px-4 align-top">
                    <Placeholder>{subProcessors[2]}</Placeholder>
                  </td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 px-4 align-top">Email services</td>
                  <td className="py-3 px-4 align-top">
                    <Placeholder>{subProcessors[3]}</Placeholder>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 align-top">Analytics</td>
                  <td className="py-3 px-4 align-top">
                    <Placeholder>{subProcessors[4]}</Placeholder>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We require processors to protect personal data under written agreements
            consistent with GDPR. A list of sub-processors may be provided on request
            to{" "}
            <a href={`mailto:${meta.contactEmail}`} className="legal-link">
              {meta.contactEmail}
            </a>
            .
          </p>
        </section>

        <section id="transfers" aria-labelledby="transfers-heading">
          <h2 id="transfers-heading">7. International data transfers</h2>
          <p className="mb-4">
            {meta.platformName} supports international recruitment. Personal data may
            therefore be transferred to countries outside the European Economic Area
            (EEA), including where Candidates, Clients, or Abroaders are located
            abroad or where a sub-processor stores data outside the EEA.
          </p>
          <p className="mb-4">
            When we transfer personal data outside the EEA, we ensure appropriate
            safeguards are in place, such as:
          </p>
          <ul className="legal-list-disc mb-6">
            <li>
              an adequacy decision by the European Commission, where available;
            </li>
            <li>
              the EU Standard Contractual Clauses (SCCs), supplemented by additional
              measures where required; or
            </li>
            <li>
              another lawful transfer mechanism under Chapter V GDPR.
            </li>
          </ul>
          <p>
            You may request more information about transfers relevant to your data by
            contacting{" "}
            <a href={`mailto:${meta.contactEmail}`} className="legal-link">
              {meta.contactEmail}
            </a>
            .
          </p>
        </section>

        <section id="retention" aria-labelledby="retention-heading">
          <h2 id="retention-heading">8. Data retention</h2>
          <p className="mb-6">
            We keep personal data only for as long as necessary for the purposes
            described in this Policy, unless a longer period is required by law.
          </p>

          <div className="overflow-x-auto glass-panel">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold text-ink">Data type</th>
                  <th className="py-3 px-4 font-bold text-ink">Retention period</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-b border-border/60">
                  <td className="py-3 px-4 align-top">Candidate data — active applications</td>
                  <td className="py-3 px-4 align-top">
                    <Placeholder>{retentionPeriods.candidateActiveApplications}</Placeholder>
                  </td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 px-4 align-top">Candidate data — after application closed</td>
                  <td className="py-3 px-4 align-top">
                    <Placeholder>{retentionPeriods.candidateAfterClosure}</Placeholder>
                  </td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 px-4 align-top">Abroader account data</td>
                  <td className="py-3 px-4 align-top">
                    <Placeholder>{retentionPeriods.abroaderAccount}</Placeholder>
                  </td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 px-4 align-top">Commission &amp; financial records</td>
                  <td className="py-3 px-4 align-top">
                    <Placeholder>{retentionPeriods.commissionFinancialRecords}</Placeholder>
                  </td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 px-4 align-top">Client records</td>
                  <td className="py-3 px-4 align-top">
                    <Placeholder>{retentionPeriods.clientRecords}</Placeholder>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 align-top">Site analytics data</td>
                  <td className="py-3 px-4 align-top">
                    <Placeholder>{retentionPeriods.siteAnalytics}</Placeholder>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            When data is no longer needed, we delete or anonymise it securely, subject
            to legal holds or audit requirements.
          </p>
        </section>

        <section id="rights" aria-labelledby="rights-heading">
          <h2 id="rights-heading">9. Your rights under GDPR</h2>
          <p className="mb-4">
            Depending on your location and the nature of processing, you may have the
            following rights:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              ["Access", "Request a copy of your personal data."],
              ["Rectification", "Ask us to correct inaccurate or incomplete data."],
              ["Erasure", "Ask us to delete your data in certain circumstances."],
              ["Restriction", "Ask us to limit processing in certain circumstances."],
              ["Portability", "Receive data you provided in a structured, commonly used format."],
              ["Objection", "Object to processing based on legitimate interests or direct marketing."],
              ["Withdraw consent", "Where processing is based on consent, withdraw it at any time."],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl bg-white/50 border border-border/40 px-4 py-3"
              >
                <p className="font-semibold text-ink text-sm">{title}</p>
                <p className="text-sm text-ink-muted mt-1">{description}</p>
              </div>
            ))}
          </div>
          <p className="mb-4">
            To exercise your rights, contact us at{" "}
            <a href={`mailto:${meta.contactEmail}`} className="legal-link">
              {meta.contactEmail}
            </a>
            . We may need to verify your identity before responding. We aim to respond
            within one month, as required by GDPR.
          </p>
          <p>
            If you are a Candidate, note that some requests may be limited where we must
            retain data for an active recruitment process, a Client decision, or legal
            compliance — for example, commission or invoicing records.
          </p>
        </section>

        <section id="cookies" aria-labelledby="cookies-heading">
          <h2 id="cookies-heading">10. Cookies and tracking technologies</h2>
          <p className="mb-6">
            We use cookies and similar technologies on abroader.io. Essential cookies
            are required for the Platform to work. Other cookies are used only where
            permitted by law and, where required, with your consent.
          </p>

          <div className="overflow-x-auto glass-panel">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold text-ink">Category</th>
                  <th className="py-3 px-4 font-bold text-ink">Purpose</th>
                  <th className="py-3 px-4 font-bold text-ink">Provider</th>
                  <th className="py-3 px-4 font-bold text-ink">Retention</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                {cookieCategories.map((cookie) => (
                  <tr key={cookie.category} className="border-b border-border/60 last:border-0">
                    <td className="py-3 px-4 align-top font-semibold text-ink">
                      {cookie.category}
                    </td>
                    <td className="py-3 px-4 align-top">{cookie.purpose}</td>
                    <td className="py-3 px-4 align-top">
                      <Placeholder>{cookie.provider}</Placeholder>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <Placeholder>{cookie.retention}</Placeholder>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            You can manage cookie preferences through your browser settings and, where
            available, our cookie consent tool. Blocking essential cookies may affect
            Platform functionality.
          </p>
        </section>

        <section id="security" aria-labelledby="security-heading">
          <h2 id="security-heading">11. Security measures</h2>
          <p>
            We implement appropriate technical and organisational measures to protect
            personal data against unauthorised access, loss, misuse, alteration, or
            disclosure. These measures include access controls, secure hosting, and
            staff confidentiality obligations. No method of transmission or storage is
            completely secure; we cannot guarantee absolute security, but we work to
            maintain safeguards proportionate to the data we process.
          </p>
        </section>

        <section id="children" aria-labelledby="children-heading">
          <h2 id="children-heading">12. Children&rsquo;s data</h2>
          <p>
            The Platform is not intended for individuals under 18 years of age. We do
            not knowingly collect personal data from children. If you believe we have
            collected data from a minor, please contact{" "}
            <a href={`mailto:${meta.contactEmail}`} className="legal-link">
              {meta.contactEmail}
            </a>{" "}
            and we will take steps to delete it.
          </p>
        </section>

        <section id="changes" aria-labelledby="changes-heading">
          <h2 id="changes-heading">13. Changes to this policy</h2>
          <ol className="legal-list">
            <li>
              We may update this Privacy Policy from time to time. When we make
              material changes, we will update the &ldquo;Last updated&rdquo; date and
              version number at the top of this page and, where appropriate, notify you
              by email or through the Platform.
            </li>
            <li>
              We encourage you to review this page periodically. Continued use of the
              Platform after changes take effect means you acknowledge the updated
              Policy, subject to your rights under GDPR.
            </li>
          </ol>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">14. Contact and complaints</h2>
          <p className="mb-6">
            For privacy questions, data subject requests, or concerns about how we
            handle personal data, contact:
          </p>

          <div className="glass-panel p-6 lg:p-8 space-y-2 text-ink-muted mb-6">
            <p>
              <span className="font-semibold text-ink">Controller:</span> {meta.controller}
            </p>
            <p>
              <span className="font-semibold text-ink">Email:</span>{" "}
              <a href={`mailto:${meta.contactEmail}`} className="legal-link">
                {meta.contactEmail}
              </a>
            </p>
            <p>
              <span className="font-semibold text-ink">DPO:</span>{" "}
              <a href={`mailto:${meta.dpoEmail}`} className="legal-link">
                {meta.dpoEmail}
              </a>
            </p>
          </div>

          <p>
            You also have the right to lodge a complaint with a supervisory authority.
            In Estonia, the relevant authority is the{" "}
            <a
              href={meta.supervisoryAuthorityUrl}
              className="legal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {meta.supervisoryAuthority}
            </a>
            . If you live in another EU/EEA country, you may also complain to your local
            data protection authority.
          </p>
        </section>
      </div>
    </article>
  );
}
