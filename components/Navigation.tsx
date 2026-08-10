"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getAssetPath } from "../app/utils";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/committee", label: "Committee" },
  { href: "/keynote-speakers", label: "Keynote Speakers" },
  { href: "/submission", label: "Submission" },
  { href: "/registration", label: "Registration" },
  { href: "/attendance", label: "Attendance" },
  { href: "/#publications", label: "Proceedings" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md bg-surface-container-low border-b border-slate-200/60">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3.5 max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src={getAssetPath("/logo/apase-logo.png")}
            alt="APASE Logo"
            width={120}
            height={64}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <div className="hidden lg:flex gap-8 items-center">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-headline font-bold tracking-tight text-lg transition-colors ${
                pathname === link.href
                  ? "text-[#1A365D] border-b-2 border-[#1A365D] pb-1"
                  : "text-slate-500 hover:text-[#1A365D]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href="https://www.aischolar.com/conference/apase2027/submission"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden lg:inline-flex bg-gradient-to-br from-primary to-primary-dim text-on-primary px-6 py-2.5 rounded-md font-semibold tracking-wide hover:scale-95 transition-all duration-200">
            Submit Paper
          </button>
        </a>
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-200 bg-white/90 p-2 text-[#1A365D] shadow-sm transition-colors hover:bg-slate-50"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`lg:hidden overflow-hidden border-t border-slate-200 bg-white/95 transition-[max-height,opacity] duration-200 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-4 sm:px-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-headline text-lg font-bold tracking-tight transition-colors ${
                pathname === link.href
                  ? "text-[#1A365D]"
                  : "text-slate-600 hover:text-[#1A365D]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.aischolar.com/conference/apase2027/submission"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2"
          >
            <button className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-dim px-6 py-3 font-semibold tracking-wide text-on-primary transition-transform duration-200 hover:scale-[0.99]">
              Submit Paper
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
