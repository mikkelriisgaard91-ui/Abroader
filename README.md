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
