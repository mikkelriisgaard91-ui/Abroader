import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "default" | "light";
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
};

export default function BrandLogo({
  variant = "default",
  showWordmark = true,
  showTagline = false,
  className = "",
}: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/home"
      className={`flex shrink-0 items-center gap-2.5 ${className}`}
    >
      <Image
        src="/logo.svg"
        alt=""
        width={36}
        height={32}
        priority
        className="h-8 w-auto"
        aria-hidden
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`text-xl font-extrabold tracking-tight ${
              isLight ? "text-base" : "text-ink"
            }`}
          >
            {isLight ? (
              "Abroader"
            ) : (
              <>
                <span className="text-ink">Abro</span>
                <span className="text-accent">ader</span>
              </>
            )}
          </span>
          {showTagline && (
            <span
              className={`mt-0.5 block text-sm font-semibold leading-tight font-tagline ${
                isLight ? "text-accent" : "text-teal-deep"
              }`}
            >
              Go Dare
            </span>
          )}
        </span>
      )}
    </Link>
  );
}
