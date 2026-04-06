import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { RECRUITER_CONTACT_URL } from "../../language-jobs/content";

const YOUTUBE_EMBED_ID = "Ef0mvmU0zng";

/** DKK amounts with indicative EUR (rate varies; shown for convenience). */
const PRICE_14_DAYS_DKK = 4500;
const PRICE_WEEK_DKK = 2500;
const PRICE_14_DAYS_EUR = 603;
const PRICE_WEEK_EUR = 335;

const recruiterPrimaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-rj-primary px-8 py-4 text-base font-bold text-rj-on-primary shadow-[0_4px_20px_rgba(252,186,54,0.35)] transition-all hover:brightness-105 active:scale-[0.98] sm:px-10 sm:text-lg";

const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 sm:px-10 sm:text-lg";

/** Local assets — Unsplash (Amanda Bonny; Sneha Cecil) — Unsplash License. */
const HERO_IMAGE = "/volunteering/brook-hills/hero-zebras.jpg";
const COMMUNITY_IMAGE = "/volunteering/brook-hills/community.jpg";

const PROGRAMS: { title: string; body: string }[] = [
  {
    title: "Health",
    body:
      "Support our doula programme in Korah: accompany expectant mothers to medical appointments, home visits, and weekly classes.",
  },
  {
    title: "Education for children",
    body:
      "Teach a group of 21 children English, Amharic, maths, and life skills — and join in their activities.",
  },
  {
    title: "Empowerment",
    body:
      "Support women in business training and help set up self-managed savings and lending groups.",
  },
  {
    title: "Community",
    body:
      "Take part in teaching and weekly children’s church in Korah with music and devotion.",
  },
];

const ITINERARY: { day: number; label: string }[] = [
  { day: 1, label: "Arrival and orientation" },
  { day: 2, label: "City tour and introduction to the Brook Hills Center" },
  { day: 3, label: "Building relationships at the Brook Hills Center" },
  { day: 4, label: "Home visits and community support" },
  { day: 5, label: "Education and creative engagement" },
  { day: 6, label: "Reflection and cultural immersion" },
  { day: 7, label: "Free day (optional excursions)" },
  { day: 8, label: "Education day" },
  { day: 9, label: "Empowering Women programme" },
  { day: 10, label: "Organisational work" },
  { day: 11, label: "Creative Skills Day" },
  { day: 12, label: "Enriching excursion" },
  { day: 13, label: "Home visits and education" },
  { day: 14, label: "Cultural and historical exploration" },
  { day: 15, label: "Departure and travel home" },
];

const WHY_POINTS: { title: string; body: string }[] = [
  {
    title: "Make a direct impact",
    body: "Support schoolchildren, single mothers, street children, and others in need through BHDO’s projects.",
  },
  {
    title: "Experience a vibrant city",
    body: "Addis Ababa is welcoming, with plenty to explore — and you stay in a comfortable house with hot water, Wi‑Fi, and a cook preparing great meals.",
  },
  {
    title: "Support and comfort",
    body: "Meals and accommodation are included, plus airport transfers and a personal mentor, Alex, who guides you throughout your stay.",
  },
  {
    title: "Grow your skills",
    body: "Gain valuable experience in social projects and strengthen your personal and professional skills.",
  },
  {
    title: "Join a committed community",
    body: "Work alongside dedicated people and build lasting relationships and networks.",
  },
  {
    title: "Contribute to real programmes",
    body: "Engage with health initiatives, empowerment work, children’s education, and community outreach.",
  },
];

const lightCard =
  "rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8";

const sectionPad = "px-6 py-16 md:px-12 md:py-20 lg:px-16";

export const metadata: Metadata = {
  title: "Brook Hills — Ethiopia — Volunteering — Abroader",
  description:
    "Volunteer in Korah, Ethiopia with Brook Hills Development Organization. Health, education, empowerment, and community. 14 days from €603 (4,500 DKK).",
};

export default function BrookHillsEthiopiaPage() {
  return (
    <main
      lang="en"
      className="overflow-x-hidden bg-white pb-16 font-rj-body text-slate-800 antialiased selection:bg-amber-200/80 selection:text-slate-900"
    >
      {/* Hero — bright split layout */}
      <section className={`${sectionPad} border-b border-slate-100 bg-white pt-12 lg:pt-16`}>
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/90 px-4 py-1.5 text-amber-900/90 shadow-sm">
              <span className="text-lg leading-none" aria-hidden>
                🤝
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide">Korah · Brook Hills Development Organization</span>
            </div>
            <h1 className="font-rj-headline mb-5 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Brook Hills — <span className="text-amber-600">Ethiopia</span>
            </h1>
            <p className="mb-4 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
              Be part of meaningful change through our local programmes in Korah. We offer several rewarding volunteer roles
              where you can make a real difference: from supporting mothers through our doula initiative and strengthening
              women’s economic independence, to teaching children core subjects and life skills, and joining community
              activities including teaching and children’s church.
            </p>
            <p className="mb-8 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
              Whatever your skills and interests, you can help create lasting, positive change.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={RECRUITER_CONTACT_URL} target="_blank" rel="noopener noreferrer" className={recruiterPrimaryCtaClass}>
                Sign me up
              </a>
              <Link href="/volunteering" className={secondaryCtaClass}>
                More volunteering options
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl ring-1 ring-slate-200/80">
              <Image
                src={HERO_IMAGE}
                alt="Zebras in open grassland with mountains on the horizon — East Africa"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                className="object-cover object-[50%_42%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className={`${sectionPad} border-b border-slate-100 bg-slate-50/80`}>
        <div className="mx-auto max-w-[900px]">
          <h2 className="font-rj-headline mb-2 text-center text-2xl font-extrabold text-slate-900 md:text-3xl">
            See Brook Hills on video
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-slate-600">
            Get a feel for the place and the community before you go.
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}`}
              title="Brook Hills Ethiopia — video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-center text-sm text-slate-500">
            Video on{" "}
            <a
              href="https://youtu.be/Ef0mvmU0zng"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-800 underline-offset-2 hover:underline"
            >
              YouTube
            </a>
          </p>
        </div>
      </section>

      {/* Photo gallery — contained, modest height (avoids huge full-bleed bands) */}
      <section className="border-b border-slate-100 bg-white px-6 py-10 md:px-12 md:py-12 lg:px-16">
        <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <div className="relative h-44 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-sm sm:h-48 md:h-52">
            <Image
              src={HERO_IMAGE}
              alt="Zebras on the savannah with mountains in the distance"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-[50%_45%]"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-sm sm:h-48 md:h-52">
            <Image
              src={COMMUNITY_IMAGE}
              alt="People in traditional dress with a child — community and culture"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-[50%_28%]"
            />
          </div>
        </div>
      </section>

      <section className={`${sectionPad} border-b border-slate-100 bg-slate-50/80`}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-rj-headline mb-3 text-3xl font-extrabold text-slate-900 md:text-4xl">What volunteers say</h2>
          <figure className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/80 p-8 text-left shadow-sm md:p-10">
            <div className="mb-4 text-amber-500" aria-label="5 out of 5 stars">
              <span aria-hidden className="tracking-[0.35em]">
                ★ ★ ★ ★ ★
              </span>
            </div>
            <blockquote className="mb-8 text-pretty leading-relaxed text-slate-700 md:text-lg">
              &ldquo;I had an absolutely amazing trip to Ethiopia. Before I left, I spoke with the Abroader team and was met
              with openness that quickly helped me feel at ease with my decision to volunteer. When I arrived in Ethiopia,
              I was welcomed by warm and hospitable people from Brook Hills. In just two weeks I experienced a great deal of
              what was planned in the program, and I also had full support to make changes when I needed to.&rdquo;
            </blockquote>
            <figcaption className="flex flex-col gap-1 border-t border-slate-200 pt-6">
              <cite className="not-italic font-bold text-slate-900">Anja Olesen</cite>
              <span className="text-sm font-medium uppercase tracking-wide text-slate-500">Copenhagen</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={`${sectionPad} border-b border-slate-100 bg-white`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-rj-headline mb-2 text-3xl font-extrabold text-slate-900 md:text-4xl">Programmes</h2>
          <p className="mb-10 max-w-2xl text-lg text-slate-600">
            Four areas where you can contribute — working closely with local communities in Korah.
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {PROGRAMS.map((p) => (
              <div key={p.title} className={lightCard}>
                <h3 className="font-rj-headline mb-3 text-xl font-bold text-amber-700">{p.title}</h3>
                <p className="text-pretty leading-relaxed text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} border-b border-slate-100 bg-slate-50/80`}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-rj-headline mb-5 text-3xl font-extrabold text-slate-900 md:text-4xl">Your role at Brook Hills</h2>
              <p className="text-pretty leading-relaxed text-slate-600">
                As a volunteer you can make a difference for schoolchildren, single mothers, street children, and many others.
                We provide full board and lodging for your stay, plus airport transfers. You will also be matched with a
                personal mentor, Alex, who will guide and support you throughout your time as a volunteer.
              </p>
            </div>
            <div>
              <h2 className="font-rj-headline mb-5 text-3xl font-extrabold text-slate-900 md:text-4xl">About you</h2>
              <p className="mb-4 text-pretty leading-relaxed text-slate-600">
                As a BHDO volunteer you are engaged, caring, and open to new experiences.
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-pretty leading-relaxed text-slate-600">
                <li>You are positive, work well both independently and in a team, and stay flexible.</li>
                <li>You want to make a difference and care about supporting communities through education, health, and empowerment.</li>
                <li>You build relationships well and can collaborate across cultures.</li>
              </ul>
              <p className="text-pretty text-slate-500">
                Experience with children, health, or social work is helpful but not required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} border-b border-slate-100 bg-white`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-rj-headline mb-5 text-3xl font-extrabold text-slate-900 md:text-4xl">About Brook Hills</h2>
          <p className="mb-4 max-w-3xl text-pretty text-lg leading-relaxed text-slate-600">
            Brook Hills Development Organization (BHDO) is a non-profit strengthening communities in Ethiopia through
            education, health, and development.
          </p>
          <p className="max-w-3xl text-pretty text-lg leading-relaxed text-slate-600">
            We support expectant mothers, advance women’s empowerment, help secure children’s education, and invest in the
            wider community. Our goal is lasting change and positive impact.
          </p>
        </div>
      </section>

      <section className={`${sectionPad} border-b border-slate-100 bg-slate-50/80`}>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-6 rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm md:flex-row md:gap-12">
          <p className="font-rj-headline text-xl font-bold text-slate-900 md:text-2xl">Ready to hear more?</p>
          <a href={RECRUITER_CONTACT_URL} target="_blank" rel="noopener noreferrer" className={recruiterPrimaryCtaClass}>
            Sign me up
          </a>
        </div>
      </section>

      <section className={`${sectionPad} border-b border-slate-100 bg-white`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-rj-headline mb-2 text-3xl font-extrabold text-slate-900 md:text-4xl">14-day overview</h2>
          <p className="mb-10 max-w-2xl text-slate-600">A guide to your stay — details may be adjusted locally.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ITINERARY.map((row) => (
              <div
                key={row.day}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 shadow-sm"
              >
                <span className="shrink-0 font-mono text-sm font-bold text-amber-700">Day {row.day}</span>
                <span className="text-sm leading-relaxed text-slate-700">{row.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} border-b border-slate-100 bg-slate-50/80`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-rj-headline mb-2 text-3xl font-extrabold text-slate-900 md:text-4xl">Price and what’s included</h2>
          <div className="mb-8 mt-4 rounded-2xl border border-amber-200/80 bg-amber-50/50 px-6 py-5 shadow-sm">
            <p className="text-lg font-semibold text-slate-800">
              <span className="text-2xl font-extrabold text-slate-900">€{PRICE_14_DAYS_EUR}</span>
              <span className="text-slate-600"> for 14 days</span>
              <span className="mx-2 text-slate-400">·</span>
              <span className="text-slate-600">{PRICE_14_DAYS_DKK.toLocaleString("en-US")} DKK</span>
            </p>
            <p className="mt-2 text-slate-600">
              <span className="font-semibold text-slate-800">€{PRICE_WEEK_EUR} per week</span>
              <span className="mx-2 text-slate-400">·</span>
              <span>
                {PRICE_WEEK_DKK.toLocaleString("en-US")} DKK per week
              </span>
            </p>
            <p className="mt-3 text-sm text-slate-500">
              EUR amounts are indicative and depend on the exchange rate.
            </p>
          </div>
          <ul className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Safe, comfortable accommodation",
              "Meals prepared by a cook",
              "Airport transfers",
              "Help with flights",
              "Help with travel and health insurance",
              "Arrival and orientation",
              "In-person welcome when you arrive in Ethiopia",
              "A supportive community of fellow volunteers",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2 text-slate-700">
                <span className="mt-0.5 shrink-0 text-amber-600" aria-hidden>
                  ✓
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className={`${lightCard} max-w-3xl`}>
            <h3 className="font-rj-headline mb-4 text-xl font-bold text-slate-900">A safe, comfortable stay</h3>
            <p className="mb-4 text-pretty leading-relaxed text-slate-600">
              We want your stay to feel safe and comfortable so you can focus on volunteering.
            </p>
            <p className="text-pretty leading-relaxed text-slate-600">
              You get secure accommodation, meals from our cook, transport to and from the airport, and help with flights and
              insurance. When you land in Ethiopia we greet you in person and give you a thorough introduction.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-slate-600">
              You also join a warm community of other volunteers — supporting and inspiring each other.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} border-b border-slate-100 bg-white`}>
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="font-rj-headline mb-3 text-3xl font-extrabold text-slate-900 md:text-4xl">Questions and contact</h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-600">
            We are happy to help — book a conversation about Brook Hills and your volunteer stay in Ethiopia.
          </p>
          <a href={RECRUITER_CONTACT_URL} target="_blank" rel="noopener noreferrer" className={recruiterPrimaryCtaClass}>
            Sign me up
          </a>
        </div>
      </section>

      <section className={`${sectionPad} bg-slate-50/80`}>
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-rj-headline mb-3 text-center text-3xl font-extrabold text-slate-900 md:text-4xl">
            Why volunteer in Ethiopia with Brook Hills?
          </h2>
          <p className="font-rj-headline mb-3 text-center text-2xl font-bold text-amber-800 md:text-3xl">
            Make a difference with heart in Korah, Ethiopia
          </p>
          <p className="mx-auto mb-8 max-w-3xl text-center text-pretty text-lg leading-relaxed text-slate-600">
            Even in difficult circumstances you find courage, community, and a strong will to change. At Brook Hills
            Development Organization you join local work that every day brings hope and growth to children, women, and
            families in vulnerable situations.
          </p>
          <p className="mx-auto mb-8 max-w-3xl text-center text-pretty text-lg leading-relaxed text-slate-600">
            As a volunteer you are invited close — not as a guest, but as a fellow human being. You contribute with your
            hands, your presence, and your ideas, while learning and growing yourself.
          </p>
          <p className="mx-auto mb-14 max-w-3xl text-center text-pretty text-lg leading-relaxed text-slate-600">
            It is everyday life in Ethiopia. It is collaboration, trust, and mutual respect — and the chance to leave a mark
            on others’ lives and your own.
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_POINTS.map((w) => (
              <div key={w.title} className={lightCard}>
                <h3 className="font-rj-headline mb-3 text-lg font-bold text-slate-900">{w.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-slate-600">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
