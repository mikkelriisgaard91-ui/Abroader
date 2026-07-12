import Image from "next/image";
import Link from "next/link";
import { HIRE_WITH_ABROADER_PATH } from "@/config/homeNav";

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
      href={HIRE_WITH_ABROADER_PATH}
      className={`flex shrink-0 items-center gap-2.5 ${className}`}
    >
      <Image
        src="/logo.svg"
        alt=""
        width={177}
        height={160}
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
              Connecting Talent Across Borders
            </span>
          )}
        </span>
      )}
    </Link>
  );
}
