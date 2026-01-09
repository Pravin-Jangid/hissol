import AboutUs from "./Components/AboutUs";
import Clients from "./Components/Clientle";
import HeroSection from "./Components/HeroSection";
import Partners from "./Components/Partners";
import Services from "./Components/Services";
import ServicesMarquee from "./Components/ServicesMarquee";

export default function Home() {
  return (
    <div className="bg-[var(--brand-accent)] overflow-hidden  min-h-screen">
      <HeroSection />
      <ServicesMarquee />
      <Partners />
      <AboutUs />
      <Clients />

      <Services />
    </div>
  );
}
