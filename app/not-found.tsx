import Link from "next/link";

import "./(preview)/globals-preview.css";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-base px-6 text-center">
      <h1 className="text-3xl font-semibold text-ink">Page not found</h1>
      <p className="mt-4 text-ink-muted">
        <Link href="/" className="text-accent hover:underline">
          Back to home
        </Link>
      </p>
    </main>
  );
}
