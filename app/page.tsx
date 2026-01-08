import HeroSection from "./Components/HeroSection";
import AboutUs from "./Components/AboutUs";
import ServicesMarquee from "./Components/ServicesMarquee";
import Services from "./Components/Services";
import Clients from "./Components/Clientle";

export default function Home() {
  return (
    <div className="bg-[var(--brand-accent)]  min-h-screen">
      <HeroSection />
      <ServicesMarquee />
      <AboutUs />
      <Services />
      <Clients />
    </div>
  );
}
