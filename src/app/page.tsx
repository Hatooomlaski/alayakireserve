import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ScheduleSection from "@/components/ScheduleSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import LocationSection from "@/components/LocationSection";
import CorporateSection from "@/components/CorporateSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with 100% Boneless Badge & Live Butchering Countdown */}
      <Hero />

      {/* Butchering Schedule Broadcaster */}
      <ScheduleSection />

      {/* Main Interactive Product Grid & Live Portion Configurator */}
      <ProductGrid />

      {/* Trust, Heritage & 100% Boneless Standard Guarantees */}
      <GuaranteesSection />

      {/* Physical Walk-In Store at Adigbe & Google Maps */}
      <LocationSection />

      {/* Corporate B2B & Bulk Supply Inquiries */}
      <CorporateSection />
    </>
  );
}
