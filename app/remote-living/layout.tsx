import { Inter, Plus_Jakarta_Sans, Rock_Salt } from "next/font/google";
import "../remote-jobs/remote-jobs.css";
import "../language-jobs/language-jobs.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});
const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rock-salt",
});

export default function RemoteLivingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.variable} ${plusJakarta.variable} ${rockSalt.variable} font-rj-body text-[#2a3d42] antialiased selection:bg-[rgba(36,99,116,0.12)] selection:text-[#246374]`}
      style={{ margin: 0, padding: 0 }}
    >
      {children}
    </div>
  );
}
