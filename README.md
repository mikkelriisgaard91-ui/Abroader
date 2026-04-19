This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Environment variables (Teamtailor)

The remote jobs page reads jobs from the Teamtailor API using `TEAMTAILOR_API_TOKEN`. That value is **not** in Git (see `.gitignore`); you must set it on Vercel or production will show “TEAMTAILOR_API_TOKEN is not configured.”

1. In [Vercel](https://vercel.com), open your **Project** → **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `TEAMTAILOR_API_TOKEN` (exactly; matches [`.env.example`](./.env.example)).
   - **Value:** your Teamtailor API token (same as in local `.env.local`).
   - **Environments:** enable **Production** at minimum; enable **Preview** too if you want PR previews to load jobs.
3. Save, then **Redeploy** the latest deployment (**Deployments** → **⋯** on the latest deployment → **Redeploy**), or push a new commit. New variables apply to **new** builds only.

If the Vercel **Root Directory** is `abroader`, you still use the same variable name; no prefix is required.

The remote jobs page only lists roles that are **Fully remote** in Teamtailor (not hybrid or on-site). If your jobs use another remote setting, they will not appear.

If the API returns errors or empty data when your token works locally, your account may use the **US West** API host. Add `TEAMTAILOR_API_BASE=https://api.na.teamtailor.com/v1` in Vercel (same as in [`.env.example`](./.env.example)).

### Environment variables (consultation form / Resend)

The career-support and travel-planning consultation modals POST to `/api/consultation`, which sends email via [Resend](https://resend.com). Without `RESEND_API_KEY` on Vercel, production returns **503** with “Consultation email is not configured.”

If the form works locally (`.env.local` has `RESEND_API_KEY`) but the **live** site still shows that message, the deployment environment is missing the variable: add `RESEND_API_KEY` on Vercel (or your host) and redeploy.

1. In [Vercel](https://vercel.com), open your **Project** → **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `RESEND_API_KEY` (matches [`.env.example`](./.env.example)).
   - **Value:** your Resend API key (same as in local `.env.local`).
   - **Environments:** **Production** (and **Preview** if previews should send mail).
3. Save, then **Redeploy** so the server receives the variable.

If you still see **“Consultation email is not configured”** after adding the key: the deployment you are hitting was built **without** that variable. Trigger a **new** deployment (Redeploy). If the Git repo has the Next app under **`abroader/`**, set Vercel **Root Directory** to `abroader` on **Settings → General** so env and build apply to the same app. **Note:** Vercel’s **Development** environment applies to `vercel dev` only, not to your public production URL — the live site needs **Production** (and **Preview** for preview URLs).

**Production checklist (reliable delivery to the team inbox)**

1. In [Resend → Domains](https://resend.com/domains), add **abroader.io** and complete the DNS records Resend shows until the domain is **Verified**.
2. Set **`RESEND_FROM`** on Vercel (and in `.env.local`) to a verified address, e.g. `Abroader <noreply@abroader.io>`.
3. Leave **`CONSULTATION_NOTIFY_EMAIL`** unset so notifications go to the default **mikkel@abroader.io**, or set it explicitly to that address (or another inbox on your verified domain).

**Testing before the domain is verified**

With the default sender **`onboarding@resend.dev`**, Resend usually only allows the **To** address that matches your Resend account email (see [Resend test emails](https://resend.com/docs/dashboard/emails/send-test-emails)). Until **abroader.io** is verified and **`RESEND_FROM`** uses it, set **`CONSULTATION_NOTIFY_EMAIL`** on Vercel to that same Resend login address so submissions succeed; forward or switch back to **mikkel@abroader.io** after production DNS is done.

If the form still fails after deploy, open **Vercel** → **Deployments** → select the deployment → **Functions** / **Logs**, filter for `POST /api/consultation`, and check lines starting with `Resend error:` or `Consultation API error:` (the latter logs a short message server-side without exposing it in the JSON response). The JSON response may include a **`hint`** field the UI shows next to the error.
