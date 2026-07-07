import Image from "next/image";
import Link from "next/link";
import { CHOOSE_RECRUITER_PATH } from "@/config/companyLanding";
import { recruiterList } from "@/config/recruiters";

export default function JobsRecruiterCta() {
  return (
    <section
      id="meet-our-recruiters"
      className="py-16 border-t border-border/40 bg-base scroll-mt-[72px]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3 text-accent">
          For companies
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-3">
          Find the right recruiter for your hiring needs
        </h2>
        <p className="text-base text-ink-muted max-w-xl mb-8">
          Browse vetted Abroader recruiters by specialism, language, and region — each runs their
          own practice with their own network.
        </p>

        <div className="flex items-center gap-3 mb-8">
          {recruiterList.map((recruiter) => (
            <div
              key={recruiter.slug}
              className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-sm"
              title={recruiter.name}
            >
              <Image
                src={recruiter.photoUrl}
                alt={recruiter.name}
                fill
                className="object-cover object-top"
                sizes="40px"
              />
            </div>
          ))}
        </div>

        <Link href={CHOOSE_RECRUITER_PATH} className="btn-primary text-sm px-6 py-3">
          Meet our recruiters
        </Link>
      </div>
    </section>
  );
}
