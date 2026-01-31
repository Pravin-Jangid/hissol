"use client";

import { useEffect, useState } from "react";

import AboutUs from "./Components/AboutUs";
import Clients from "./Components/Clientle";
import HeroSection from "./Components/HeroSection";
import Partners from "./Components/Partners";
import ConsultationPopup from "./Components/popup";
import Services from "./Components/Services";

export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 🔥 force show (debug)
    const t = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-[var(--brand-accent)] overflow-hidden min-h-screen">
      <ConsultationPopup open={open} onClose={() => setOpen(false)} />

      <HeroSection />
      <Partners />
      <Services />
      <AboutUs />
      <Clients />
    </div>
  );
}
