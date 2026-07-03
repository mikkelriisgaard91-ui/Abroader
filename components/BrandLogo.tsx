import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/" className="shrink-0 flex items-center">
      <Image
        src="/logo.png"
        alt="abroader.io"
        width={160}
        height={44}
        priority
        className="h-9 w-auto"
      />
    </Link>
  );
}
