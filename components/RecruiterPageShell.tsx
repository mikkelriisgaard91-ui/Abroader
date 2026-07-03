"use client";

import type { RecruiterConfig } from "@/config/recruiters";
import { getRecruiterForLocale } from "@/config/recruiters";
import type { TeamtailorJob } from "@/lib/teamtailor";
import { LocaleProvider, useLocale } from "@/lib/i18n/LocaleProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import ForEmployers from "@/components/ForEmployers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

function RecruiterPageContent({
  recruiter,
  jobs,
}: {
  recruiter: RecruiterConfig;
  jobs: TeamtailorJob[];
}) {
  const { locale } = useLocale();
  const resolved = getRecruiterForLocale(recruiter, locale);

  return (
    <main className="bg-base">
      <Nav />
      <Hero recruiter={resolved} />
      <Jobs jobs={jobs} recruiterSlug={recruiter.slug} />
      <HowItWorks />
      <About recruiter={resolved} />
      <ForEmployers />
      <Contact recruiter={resolved} />
      <Footer recruiter={resolved} />
      <WhatsAppFloat recruiter={resolved} />
    </main>
  );
}

export default function RecruiterPageShell({
  recruiter,
  jobs,
}: {
  recruiter: RecruiterConfig;
  jobs: TeamtailorJob[];
}) {
  return (
    <LocaleProvider>
      <RecruiterPageContent recruiter={recruiter} jobs={jobs} />
    </LocaleProvider>
  );
}
