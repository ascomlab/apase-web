import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "APASE 2026 | Annual International Conference on Applied Physics and Applied Science Engineering",
  description:
    "Join leading researchers and practitioners in exploring the frontiers of physics and engineering at APASE 2026 in Osaka, Japan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} light antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />

        {children}
      </body>
    </html>
  );
}
