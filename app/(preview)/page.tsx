import type { Metadata } from "next";
import Link from "next/link";
import { HIRE_WITH_ABROADER_PATH } from "@/config/homeNav";

export const metadata: Metadata = {
  title: "Abroader — Coming soon",
  description: "Abroader is being rebuilt. Check back soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UnderConstructionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#00161d] px-6 text-center text-[#e8f4f6]">
      <div className="flex max-w-lg flex-col items-center gap-6">
        <p className="text-2xl font-semibold tracking-tight text-[#fdbb37]">
          Abroader
        </p>

        <div className="h-px w-16 bg-[#7ec8d4]/40" aria-hidden />

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Under construction
        </h1>

        <p className="text-base leading-relaxed text-[#7ec8d4] sm:text-lg">
          We&apos;re rebuilding abroader.io. Something new is on the way —
          check back{" "}
          <Link href={HIRE_WITH_ABROADER_PATH} className="text-[#7ec8d4] no-underline">
            soon
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
