import type { ReactNode } from "react";
import {
  commissionChannels,
  illustrativeEarningsExamples,
  termsOfServiceMeta,
} from "@/config/termsOfService";

function DefinedTerm({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export default function TermsOfServiceContent() {
  const meta = termsOfServiceMeta;

  return (
    <article className="legal-prose max-w-4xl mx-auto px-6 py-16 lg:py-24">
      <header className="mb-12 lg:mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
          Legal
        </p>
        <h1 className="section-heading mb-6">Terms of Service</h1>
        <p className="text-lg text-ink-muted leading-relaxed">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the{" "}
          <DefinedTerm>Platform</DefinedTerm> operated by {meta.operator} (
          {meta.operatorCountry}) at{" "}
          <a href={meta.platformUrl} className="legal-link">
            abroader.io
          </a>
          . By registering for or using the Platform, you agree to these Terms.
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
        <section id="definitions" aria-labelledby="definitions-heading">
          <h2 id="definitions-heading">1. Definitions</h2>
          <p className="mb-6">
            In these Terms, the following definitions apply:
          </p>
          <dl className="glass-panel p-6 lg:p-8 space-y-5">
            <div>
              <dt className="font-bold text-ink mb-1">
                <DefinedTerm>Platform</DefinedTerm>
              </dt>
              <dd className="text-ink-muted leading-relaxed">
                The Abroader website, tools, infrastructure, and related services
                operated by {meta.operator} that connect independent recruiters with
                international recruitment opportunities.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ink mb-1">
                <DefinedTerm>Abroader</DefinedTerm>
              </dt>
              <dd className="text-ink-muted leading-relaxed">
                An independent contractor who uses the Platform to operate their own
                recruitment practice on a commission-only basis. Abroaders are not
                employees of {meta.operator} or {meta.platformName}.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ink mb-1">
                <DefinedTerm>Candidate</DefinedTerm>
              </dt>
              <dd className="text-ink-muted leading-relaxed">
                A job seeker introduced, sourced, or placed through the Platform into
                a role with a Client.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ink mb-1">
                <DefinedTerm>Client</DefinedTerm>
              </dt>
              <dd className="text-ink-muted leading-relaxed">
                An employer or hiring organisation that uses {meta.platformName} to
                fill vacancies, whether introduced by {meta.operator} or by an
                Abroader.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ink mb-1">
                <DefinedTerm>Commission Channel</DefinedTerm>
              </dt>
              <dd className="text-ink-muted leading-relaxed">
                A distinct way an Abroader may earn commission through the Platform,
                such as completing a full recruitment cycle, sourcing candidates,
                referring Clients, managing Client relationships, or recruiting other
                Abroaders. Commission Channels are stackable unless otherwise stated
                in these Terms.
              </dd>
            </div>
          </dl>
        </section>

        <section id="eligibility" aria-labelledby="eligibility-heading">
          <h2 id="eligibility-heading">2. Eligibility and account registration</h2>
          <ol className="legal-list">
            <li>
              To register as an Abroader, you must be at least 18 years old and
              legally able to enter into a binding contract in your jurisdiction.
            </li>
            <li>
              You must provide accurate, complete, and current information during
              registration and keep your account details up to date.
            </li>
            <li>
              {meta.platformName} may approve, suspend, or decline applications at
              its discretion. Registration does not guarantee access to any
              particular Clients, vacancies, or earning level.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your account
              credentials and for all activity conducted through your account.
            </li>
            <li>
              You may only maintain one Abroader account unless {meta.platformName}{" "}
              expressly agrees otherwise in writing.
            </li>
          </ol>
        </section>

        <section id="contractor-relationship" aria-labelledby="contractor-heading">
          <h2 id="contractor-heading">3. Independent contractor relationship</h2>
          <p className="mb-4">
            Your relationship with {meta.operator} is that of an independent
            contractor. Nothing in these Terms creates:
          </p>
          <ul className="legal-list-disc mb-6">
            <li>an employment relationship;</li>
            <li>an agency relationship;</li>
            <li>a partnership; or</li>
            <li>a joint venture.</li>
          </ul>
          <ol className="legal-list">
            <li>
              You operate your own recruitment practice and are solely responsible
              for how you work, including your hours, methods, and business expenses
              (except as expressly provided under the activity budget in Section 6).
            </li>
            <li>
              You are responsible for your own taxes, social contributions, insurance,
              and compliance with applicable laws in your country of residence or
              operation.
            </li>
            <li>
              You are not required to work exclusively with {meta.platformName}{" "}
              unless a separate written agreement states otherwise.
            </li>
            <li>
              You may not represent yourself as an employee, director, or authorised
              legal representative of {meta.operator} unless expressly permitted in
              writing.
            </li>
          </ol>
        </section>

        <section id="platform-use" aria-labelledby="platform-use-heading">
          <h2 id="platform-use-heading">4. Use of the Platform and personal landing page</h2>
          <p className="mb-4">
            As an Abroader, you receive access to Platform tools including a personal
            branded landing page, live vacancies, Client portfolio access, workspace
            and playbook templates, and a commission tracker. You agree to:
          </p>
          <ol className="legal-list" type="a">
            <li>
              use the Platform only for lawful recruitment activities connected to{" "}
              {meta.platformName};
            </li>
            <li>
              present yourself, {meta.platformName}, and Clients accurately and
              professionally, without false or misleading claims;
            </li>
            <li>
              not misuse {meta.platformName} or Client branding, trademarks, or
              materials beyond the scope of your Platform licence;
            </li>
            <li>
              not scrape, reverse engineer, or attempt to circumvent Platform
              security or access controls;
            </li>
            <li>
              not use the Platform to harass, discriminate against, or mislead
              Candidates or Clients; and
            </li>
            <li>
              comply with applicable recruitment, data protection, and employment
              advertising laws in the jurisdictions where you operate.
            </li>
          </ol>
          <p className="mt-6">
            {meta.platformName} may review landing page content and Platform activity
            and may require changes or suspend access where use breaches these Terms
            or harms Candidates, Clients, or the Platform.
          </p>
        </section>

        <section id="commission" aria-labelledby="commission-heading">
          <h2 id="commission-heading">5. Commission structure, payment terms, and timing of payout</h2>
          <p className="mb-6">
            Abroaders earn commission through one or more{" "}
            <DefinedTerm>Commission Channels</DefinedTerm>. Channels are stackable
            where applicable — meaning you may earn from multiple parts of the same
            placement or ongoing relationship.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {commissionChannels.map((channel) => (
              <div key={channel.title} className="glass-panel p-5 lg:p-6">
                <p className="text-3xl font-extrabold text-accent mb-2">{channel.rate}</p>
                <h3 className="font-bold text-ink mb-2">{channel.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>

          <ol className="legal-list">
            <li>
              <strong className="text-ink">Placement fees.</strong> Fees charged to
              Clients are negotiated individually for each Client and assignment.
              There is no fixed placement fee across the Platform.
            </li>
            <li>
              <strong className="text-ink">Commission calculation.</strong> Your
              commission is calculated as the applicable percentage of the agreed
              placement fee (or other relevant fee base) for the Commission Channel(s)
              you qualify for on a given transaction.
            </li>
            <li>
              <strong className="text-ink">Central billing.</strong> Finance and
              client invoicing are handled centrally by {meta.platformName}. Clients
              are invoiced by {meta.operator}, not by individual Abroaders.
            </li>
            <li>
              <strong className="text-ink">Payout timing.</strong> Commission is paid
              to you after the Client has paid the relevant invoice and any applicable
              confirmation or cooling-off period has passed, subject to valid
              commission records and compliance with these Terms.
            </li>
            <li>
              <strong className="text-ink">Deductions.</strong> Where applicable
              (including the activity budget in Section 6), authorised deductions may
              be made from your commission before payout.
            </li>
            <li>
              <strong className="text-ink">Payment details.</strong> You must provide
              accurate payment information. {meta.platformName} is not responsible
              for delays caused by incorrect or incomplete payment details.
            </li>
          </ol>
        </section>

        <section id="activity-budget" aria-labelledby="activity-budget-heading">
          <h2 id="activity-budget-heading">6. Activity budget / grant terms and repayment</h2>
          <ol className="legal-list">
            <li>
              New Abroaders may receive a {meta.activityBudgetAmount} startup activity
              budget to fund recruitment campaigns or related launch activity, as
              offered by {meta.platformName} at the time of onboarding.
            </li>
            <li>
              If you do not make a placement, you owe nothing in respect of the
              activity budget.
            </li>
            <li>
              If you do make a placement, the activity budget amount is deducted from
              your first qualifying commission payment.
            </li>
            <li>
              The activity budget must be used for legitimate recruitment-related
              activity connected to your Abroader practice. Misuse may result in
              forfeiture of budget benefits and/or account suspension.
            </li>
            <li>
              {meta.platformName} may modify, withdraw, or cap the activity budget
              programme for new registrations at any time. Amounts already granted
              under accepted terms remain subject to this Section.
            </li>
          </ol>
        </section>

        <section id="no-guarantee" aria-labelledby="no-guarantee-heading">
          <h2 id="no-guarantee-heading">7. No guarantee of earnings, placements, or volume</h2>
          <p className="mb-4">
            {meta.platformName} does not guarantee that you will earn any particular
            amount, secure any number of placements, or receive any minimum volume of
            Candidates or Clients.
          </p>
          <p className="mb-4">
            Illustrative figures shown on the {meta.platformName} website or marketing
            materials — for example,{" "}
            {illustrativeEarningsExamples.join("; ")} — are examples only. They are
            not promises, forecasts, or projections of your individual results.
            Actual earnings depend on your activity, skills, market conditions, Client
            demand, and the Commission Channels you pursue.
          </p>
          <p>
            Past performance by other Abroaders does not indicate future results for
            you or any other user.
          </p>
        </section>

        <section id="data-confidentiality" aria-labelledby="data-confidentiality-heading">
          <h2 id="data-confidentiality-heading">
            8. Candidate and client data, confidentiality, and non-circumvention
          </h2>
          <ol className="legal-list" type="a">
            <li>
              You may receive confidential information about Candidates, Clients,
              vacancies, fees, and Platform operations. You must protect this
              information and use it only for legitimate Platform-related recruitment
              activity.
            </li>
            <li>
              You must comply with applicable data protection laws when handling
              personal data and follow any Platform policies or instructions provided
              by {meta.platformName}.
            </li>
            <li>
              You may not copy, export, or reuse Candidate or Client data outside the
              Platform except as necessary to perform recruitment work through{" "}
              {meta.platformName} and in compliance with these Terms.
            </li>
            <li>
              <strong className="text-ink">Non-circumvention.</strong> You may not
              bypass the Platform to deal directly with Candidates or Clients
              introduced or sourced through {meta.platformName} where doing so avoids
              the applicable commission structure. This restriction applies during
              your use of the Platform and for twelve (12) months after termination
              in respect of relevant Candidates and Clients.
            </li>
            <li>
              Breach of this Section may result in loss of commission, account
              termination, and recovery of amounts owed to {meta.operator}.
            </li>
          </ol>
        </section>

        <section id="intellectual-property" aria-labelledby="ip-heading">
          <h2 id="ip-heading">9. Intellectual property</h2>
          <ol className="legal-list">
            <li>
              The Platform, including its software, design, landing page templates,
              playbooks, guides, branding, and related materials, is owned by or
              licensed to {meta.operator}.
            </li>
            <li>
              Your Abroader landing page, workspace templates, and Platform tools are
              licensed to you for use while your account is active and in good
              standing. This licence is non-exclusive, non-transferable, and revocable.
            </li>
            <li>
              You do not acquire ownership of {meta.platformName} intellectual
              property by using the Platform or customising your landing page.
            </li>
            <li>
              On termination, you must stop using {meta.platformName} branding,
              templates, and Platform materials except where retention is required by
              law or expressly agreed in writing.
            </li>
            <li>
              You retain ownership of content you create independently, but grant{" "}
              {meta.operator} a licence to use Abroader-submitted content on the
              Platform as needed to operate your account and the service.
            </li>
          </ol>
        </section>

        <section id="termination" aria-labelledby="termination-heading">
          <h2 id="termination-heading">10. Termination</h2>
          <ol className="legal-list">
            <li>
              You may terminate your Abroader account at any time by notifying{" "}
              {meta.platformName} at{" "}
              <a href={`mailto:${meta.contactEmail}`} className="legal-link">
                {meta.contactEmail}
              </a>
              .
            </li>
            <li>
              {meta.platformName} may suspend or terminate your account immediately
              if you breach these Terms, engage in fraud or misrepresentation, harm
              Candidates or Clients, or for other reasonable cause.
            </li>
            <li>
              <strong className="text-ink">Pending commissions.</strong> Commissions
              earned on qualifying transactions completed before termination remain
              payable in accordance with Section 5, subject to Client payment,
              compliance review, and any lawful deductions (including activity budget
              repayment under Section 6).
            </li>
            <li>
              <strong className="text-ink">Activity budget.</strong> If termination
              occurs after a placement has been made, any outstanding activity budget
              deduction remains payable from your first qualifying commission. If
              termination occurs before any placement, no activity budget repayment
              is due.
            </li>
            <li>
              Sections that by their nature should survive termination — including
              confidentiality, non-circumvention, intellectual property, liability,
              indemnification, and governing law — continue to apply after termination.
            </li>
          </ol>
        </section>

        <section id="liability" aria-labelledby="liability-heading">
          <h2 id="liability-heading">11. Limitation of liability and indemnification</h2>
          <ol className="legal-list">
            <li>
              The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis. To the fullest extent permitted by applicable
              law, {meta.operator} disclaims warranties of uninterrupted access,
              error-free operation, or fitness for a particular purpose.
            </li>
            <li>
              {meta.operator} is not liable for indirect, incidental, special,
              consequential, or punitive damages, or for loss of profits, revenue,
              data, or business opportunity arising from your use of the Platform.
            </li>
            <li>
              To the fullest extent permitted by law, {meta.operator}&rsquo;s total
              liability to you for claims arising under these Terms is limited to the
              commission actually paid to you through the Platform in the twelve (12)
              months preceding the event giving rise to the claim.
            </li>
            <li>
              You agree to indemnify and hold harmless {meta.operator} from claims,
              losses, and expenses arising from your breach of these Terms, your
              recruitment activities, your handling of personal data, or your
              misrepresentation of {meta.platformName}, Clients, or Candidates.
            </li>
            <li>
              Nothing in these Terms limits liability that cannot be excluded under
              applicable law.
            </li>
          </ol>
        </section>

        <section id="disputes" aria-labelledby="disputes-heading">
          <h2 id="disputes-heading">12. Dispute resolution and governing law</h2>
          <ol className="legal-list">
            <li>
              These Terms are governed by the laws of {meta.operatorCountry}, without
              regard to conflict-of-law principles.
            </li>
            <li>
              Before commencing formal proceedings, the parties agree to attempt to
              resolve disputes in good faith by contacting{" "}
              <a href={`mailto:${meta.contactEmail}`} className="legal-link">
                {meta.contactEmail}
              </a>
              .
            </li>
            <li>
              Subject to mandatory consumer or employment protections that cannot be
              waived, the courts of {meta.operatorCountry} have exclusive
              jurisdiction over disputes arising from or relating to these Terms or
              the Platform.
            </li>
          </ol>
        </section>

        <section id="changes" aria-labelledby="changes-heading">
          <h2 id="changes-heading">13. Changes to these Terms</h2>
          <ol className="legal-list">
            <li>
              {meta.platformName} may update these Terms from time to time. When we
              make material changes, we will update the &ldquo;Last updated&rdquo;
              date and version number at the top of this page and, where appropriate,
              notify registered Abroaders by email or through the Platform.
            </li>
            <li>
              Continued use of the Platform after changes take effect constitutes
              acceptance of the updated Terms. If you do not agree to the updated
              Terms, you must stop using the Platform and may terminate your account.
            </li>
          </ol>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">14. Contact information</h2>
          <p className="mb-6">
            For questions about these Terms, your account, or commission matters,
            contact:
          </p>
          <div className="glass-panel p-6 lg:p-8 space-y-2 text-ink-muted">
            <p>
              <span className="font-semibold text-ink">Operator:</span> {meta.operator}
            </p>
            <p>
              <span className="font-semibold text-ink">Country:</span>{" "}
              {meta.operatorCountry}
            </p>
            <p>
              <span className="font-semibold text-ink">Platform:</span>{" "}
              <a href={meta.platformUrl} className="legal-link">
                abroader.io
              </a>
            </p>
            <p>
              <span className="font-semibold text-ink">Email:</span>{" "}
              <a href={`mailto:${meta.contactEmail}`} className="legal-link">
                {meta.contactEmail}
              </a>
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
