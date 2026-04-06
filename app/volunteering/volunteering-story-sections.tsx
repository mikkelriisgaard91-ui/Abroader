import Image from "next/image";

/** Ana Frantz — elephant, South Africa (Unsplash: 0oH42uVWwik). */
const VOLUNTEER_IMPACT_IMAGE =
  "https://images.unsplash.com/photo-1591533985118-6d96683b1340?auto=format&fit=crop&w=1600&q=80";

export function VolunteeringImpactSection({ recruiterUrl, ctaClassName }: { recruiterUrl: string; ctaClassName: string }) {
  return (
    <section className="border-b border-slate-100 bg-slate-50/80 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-lg ring-1 ring-slate-200/80 lg:min-h-[380px]">
          <Image
            src={VOLUNTEER_IMPACT_IMAGE}
            alt="Elephant in nature — volunteering abroad and wildlife experiences"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        <div className="min-w-0">
          <h2 className="font-rj-headline mb-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Make a difference
          </h2>
          <p className="mb-8 text-xl font-semibold text-amber-800 sm:text-2xl">And gain experiences that change your life</p>
          <p className="mb-6 text-pretty leading-relaxed text-slate-600 md:text-lg">
            Volunteering abroad is not only about helping others — it is also about personal growth, community, and
            seeing the world with open eyes. Whether you are passionate about education, health, the environment, or
            animal welfare, you can find a project where your hands and your heart make a difference.
          </p>
          <p className="mb-10 text-pretty leading-relaxed text-slate-600 md:text-lg">
            You become part of a local community where you get to know new cultures from the inside and build friendships
            across borders. These are meaningful encounters, challenges, and experiences that leave a mark — both in you
            and in the people you meet.
          </p>
          <a href={recruiterUrl} target="_blank" rel="noopener noreferrer" className={ctaClassName}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export function VolunteeringAbroadersOpinionSection() {
  return (
    <section className="border-b border-slate-100 bg-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-rj-headline mb-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Opinions from Abroaders</h2>
        <p className="mb-12 text-lg text-slate-600 md:text-xl">
          Get inspired, informed, and ready for your next adventure!
        </p>
        <figure className="rounded-2xl border border-slate-200 bg-slate-50/80 p-8 text-left shadow-sm md:p-10">
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
  );
}
