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
            {/*TBD*/}
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
              <p className="text-on-surface-variant max-w-md">Coming Soon</p>
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
              <p className="text-on-primary-container/80 font-medium">{/*TBD*/}</p>
            </div>
            <div className="mt-8">
              <p className="text-sm text-on-primary-container/70 mb-6">
                
                Your passport must be valid for at least six months after the expiry date of your visa and you’ll need at least one entire blank page in your passport for the visa. You may be required to show proof of hotel reservations and onward travel from China, as well as a bank statement showing you have $100 in your account for every day you plan to spend in China.

A standard 30-day single-entry visa can be issued from most Chinese embassies abroad in three to five working days. Express visas cost twice the usual fee. In some countries (eg the UK and the US) the visa service has been outsourced from the Chinese embassy to a Chinese Visa Application Service Centre, which levies an extra administration fee. In the case of the UK, a single-entry visa costs £30, but the standard administration charge levied by the centre is a further £36.

A standard 30-day visa is activated on the date you enter China, and must be used within three months of the date of issue. 60-day and 90-day tourist visas are reasonably easy to obtain in your home country but difficult elsewhere. To stay longer, you can extend your visa in China at least once, sometimes twice.

Visa applications require a completed application form (available at the embassy or downloaded from its website) and at least one photo (normally 51mm x 51mm). You normally pay for your visa when you collect it. A visa mailed to you will take up to three weeks. In the US and Canada, mailed visa applications have to go via a visa agent, at extra cost. In the US, many people use the China Visa Service Center, which offers prompt service. The procedure takes around 10 to 14 days.

Hong Kong is a good place to pick up a China visa. However, at the time of writing only Hong Kong residents were able to obtain them direct from the Visa Office of the People’s Republic of China. Single-entry visas processed here cost HK$200, double-entry visas HK$300, while six-month/one-year multiple-entry visas are HK$500. But China Travel Service (CTS) and many travel agencies in Hong Kong can get you a visa in two to three working days. Expect to pay HK$650 for a single-entry visa and HK$750 for a double-entry. Both erican and UK passport holders must pay considerably more for their visas.
Be aware that political events can suddenly make visas more difficult to procure or renew.

Passports
Chinese law requires foreign visitors to carry their passport with them at all times; it is the most basic travel document and all hotels (and internet cafes) will insist on seeing it. You also need it to buy train tickets or to get into some tourist sights, particularly those which are free.
It’s a good idea to bring an ID card with your photo in case you lose your passport. Even better, make photocopies, or take digital photos of your passport – your embassy may need these before issuing a new one. You should also report the loss to the local Public Security Bureau (PSB).






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
                  {/*TBD*/}
                </p>
                <span className="text-xs font-bold text-primary uppercase tracking-widest relative z-10 block">
                  Oral Presentation<br />
                  
                    • Each oral presentation will last 15-20 mins (Including Q&A)<br />
                    • English is the only language for presentation<br />
                    • The organizer will provide laptop and other equipments for the presentation. Presenters should get their PPT prepared 5 minutes before the conference.<br />
                    • Due to the limitation of time, each presenter must manage the time strictly.<br />
                    • The presentations will be evaluated from Applicability, Originality, Significance, Visual Aids, English Delivery, and Timeliness, six aspects.<br />
                    • One excellent presentation will be selected and awarded from each session.<br />
                    • Please arrive at the designated meeting room 30 minutes earlier, in case some authors are not able to make the presentation on time<br />
                    • The presentation certificates will be given at the end of each session by session chairs.<br />
                </span>
              </div>
              <div className="group relative overflow-hidden rounded-3xl border bg-surface-container-low p-8 shadow-[0_18px_40px_-28px_rgba(40,52,57,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-30px_rgba(40,52,57,0.45)] border-primary/25 ring-1 ring-primary/15">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-primary/35 to-transparent" />
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/8 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
                <h3 className="font-headline font-bold text-xl mb-4 relative z-10">
                  Poster Sessions
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 relative z-10">
                  {/*TBD*/}
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
