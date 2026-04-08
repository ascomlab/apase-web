"use client";

import Image from "next/image";
import { speakers } from "./speakers";
import { getAssetPath } from "../utils";

export default function KeynoteSpeakersPage() {
  return (
    <main className="pt-24">
      {/* Page Header */}
      <header className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-4 md:mb-16">
        <div className="lg:col-span-8">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-sm font-semibold tracking-wider uppercase">
            Conference Highlights
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-background mb-8 leading-[0.95]">
            Keynote{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Speakers
            </span>
          </h1>
        </div>
      </header>

      {/* Keynote Speakers Section */}
      <section className="space-y-32 mb-32 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            {/* Speaker Image */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute -inset-4 bg-surface-container-low rounded-xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-[0_24px_48px_-12px_rgba(40,52,57,0.06)]">
                <Image
                  src={getAssetPath(speaker.image)}
                  alt={speaker.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Speaker Information */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              {/* Name and Title */}
              <div className="mb-8">
                <h2 className="font-headline text-5xl font-extrabold tracking-tight mb-2 text-on-background">
                  {speaker.name}
                </h2>
                <p className="text-primary text-xl font-semibold">
                  {speaker.subtitle}
                </p>
              </div>

              {/* Biography */}
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg mb-10">
                {speaker.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
