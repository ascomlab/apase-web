"use client";

import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "../utils";

const quickLinks = [
  { label: "Full schedule", url: "#schedule" },
  { label: "Visa letter request", url: "#visa" },
];

const venueContent = {
  title: "Venue",
  description: `Harbin is a unique city in northeastern China, known for its extremely cold winters and rich cultural blend of Chinese and Russian influences. Often called the "Ice City," Harbin becomes a winter wonderland every year, attracting visitors from around the world.

One of the most famous events in Harbin is the Harbin International Ice and Snow Festival. During this festival, massive ice sculptures and snow buildings are created, some as large as real buildings. At night, these sculptures are illuminated with colorful lights, creating a magical atmosphere.

Harbin's history has been shaped by its location near Russia. This influence is especially visible along Zhongyang Street, where European-style architecture lines the streets. Visitors can also see the beautiful Saint Sophia Cathedral, a former Russian Orthodox church that remains one of the city's most iconic landmarks.`,
  images: [
    {
      src: getAssetPath("/images/venue/Picture1.png"),
      alt: "Harbin Ice and Snow Festival",
    },
    {
      src: getAssetPath("/images/venue/Picture2.png"),
      alt: "Zhongyang Street Architecture",
    },
    {
      src: getAssetPath("/images/venue/Picture3.png"),
      alt: "Saint Sophia Cathedral",
    },
    {
      src: getAssetPath("/images/venue/Picture4.png"),
      alt: "Harbin Winter Landscape",
    },
  ],
};

export default function AttendancePage() {
  return (
    <main className="pt-24">
      <header className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-sm font-semibold tracking-wider">
            GUIDE FOR ATTENDEES
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-background mb-8 leading-[0.95]">
            The Conference <br />
            <span className="text-primary italic font-medium">Experience</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            TBD
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col items-end">
          <div className="group relative overflow-hidden rounded-3xl border bg-surface-container-low p-8 shadow-[0_18px_40px_-28px_rgba(40,52,57,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-30px_rgba(40,52,57,0.45)] border-primary/25 ring-1 ring-primary/15 w-full">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-primary/35 to-transparent" />
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
            <p className="font-headline font-bold text-primary mb-2 relative z-10">
              QUICK LINKS
            </p>
            <ul className="space-y-3 font-label text-on-surface relative z-10">
              {quickLinks.map((item, idx) => (
                <li key={item.url + idx}>
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform"
                  >
                    <span className="text-primary text-sm">→</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section className="bg-surface-container-low py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-headline text-4xl font-bold mb-12 text-on-background">
            {venueContent.title}
          </h2>

          <div className="prose prose-invert max-w-none mb-12">
            <div className="space-y-4">
              {venueContent.description
                .split("\n\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-on-surface-variant leading-relaxed text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {venueContent.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden shadow-sm relative group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8">
          <div
            id="schedule"
            className="bg-surface-container-lowest p-12 rounded-2xl flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">
                Conference Schedule
              </h2>
              <p className="text-on-surface-variant max-w-md">TBD</p>
            </div>
            <div className="mt-12 p-8 border-2 border-dashed border-outline-variant rounded-xl flex items-center justify-center bg-background/50">
              <div className="text-center">
                <p className="font-headline font-bold text-primary tracking-tight">
                  Full schedule coming soon
                </p>
              </div>
            </div>
          </div>

          <div
            id="visa"
            className="bg-primary-container p-12 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <h2 className="font-headline text-3xl font-bold text-on-primary-container mb-4">
                Visa Information
              </h2>
              <p className="text-on-primary-container/80 font-medium">TBD</p>
            </div>
            <div className="mt-8">
              <p className="text-sm text-on-primary-container/70 mb-6">
                Visa guide placeholder.
              </p>
              <button className="w-full bg-on-primary-container text-primary-container py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                View Visa Guide
              </button>
            </div>
          </div>

          <div className="bg-surface-container p-12 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="font-headline text-4xl font-extrabold text-on-background leading-tight">
                  Presentation
                  <br />
                  Instructions
                </h2>
                <p className="mt-4 text-on-surface-variant">TBD</p>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border bg-surface-container-low p-8 shadow-[0_18px_40px_-28px_rgba(40,52,57,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-30px_rgba(40,52,57,0.45)] border-primary/25 ring-1 ring-primary/15">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-primary/35 to-transparent" />
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
                <h3 className="font-headline font-bold text-xl mb-4 relative z-10">
                  Oral Presentations
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 relative z-10">
                  TBD
                </p>
                <span className="text-xs font-bold text-primary uppercase tracking-widest relative z-10 block">
                  Guide coming soon
                </span>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border bg-surface-container-low p-8 shadow-[0_18px_40px_-28px_rgba(40,52,57,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-30px_rgba(40,52,57,0.45)] border-primary/25 ring-1 ring-primary/15">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-primary/35 to-transparent" />
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
                <h3 className="font-headline font-bold text-xl mb-4 relative z-10">
                  Poster Sessions
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 relative z-10">
                  TBD
                </p>
                <span className="text-xs font-bold text-primary uppercase tracking-widest relative z-10 block">
                  Guide coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
