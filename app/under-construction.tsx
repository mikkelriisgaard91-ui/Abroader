import Link from "next/link";

export function UnderConstruction() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="flex max-w-lg flex-col items-center gap-6">
        <p className="text-2xl font-semibold tracking-tight text-ab-accent sm:text-3xl">
          Abroader
        </p>

        <div className="h-px w-16 bg-ab-muted/40" aria-hidden />

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Under construction
        </h1>

        <p className="text-base leading-relaxed text-ab-muted sm:text-lg">
          We&apos;re rebuilding abroader.io. Something new is on the way — check
          back{" "}
          <Link
            href="/home"
            className="font-medium text-ab-accent underline-offset-4 transition-colors hover:text-ab-fg hover:underline"
          >
            soon
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
