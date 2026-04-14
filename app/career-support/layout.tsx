import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-cs-body" });
const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cs-heading",
});

export default function CareerSupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${poppins.variable}`}>
      {children}
    </div>
  );
}
