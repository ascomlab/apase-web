import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QuickAccessBento from "@/components/QuickAccessBento";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import TechnicalTracksSection from "@/components/TechnicalTracksSection";
import PublicationsSection from "@/components/PublicationsSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="pt-24">
        <HeroSection />
        <AboutSection />
        <QuickAccessBento />
        <ImportantDatesSection />
        <TechnicalTracksSection />
        <PublicationsSection />
        <SponsorsSection />
      </main>
      <Footer />
    </>
  );
}

