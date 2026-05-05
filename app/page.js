import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import HoursStrip from "@/components/HoursStrip";
import PromoStrip from "@/components/PromoStrip";
import DestinationCards from "@/components/DestinationCards";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <HoursStrip />
      <PromoStrip />
      <DestinationCards />
    </main>
  );
}
