"use client";

import { useEffect, useRef } from "react";

const services = [
  "Infrastructure Stack Developments",
  "AMCs (Annual Maintenance Contracts)",
  "Diverse Server Configurations",
  "Virtualization Solutions and Services",
  "High Availability and Cluster Services",
  "Consultation Services",
  "Additional Services",
];

export default function ServicesScroll() {
  const railRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // ===============================
  // Drag + Momentum (Carrom style)
  // ===============================
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let velocity = 0;
    let lastX = 0;
    let rafId: number;

    const friction = 0.95; // lower = more glide

    const start = (x: number) => {
      isDown = true;
      startX = x;
      lastX = x;
      scrollLeft = rail.scrollLeft;
      velocity = 0;
      rail.classList.add("cursor-grabbing");
      cancelAnimationFrame(rafId);
    };

    const move = (x: number) => {
      if (!isDown) return;

      const dx = x - startX;
      const delta = x - lastX;

      rail.scrollLeft = scrollLeft - dx * 2.2;
      velocity = delta; // capture speed

      lastX = x;
    };

    const end = () => {
      isDown = false;
      rail.classList.remove("cursor-grabbing");
      momentum();
    };

    const momentum = () => {
      if (Math.abs(velocity) < 1.5) return;

      rail.scrollLeft -= velocity;
      velocity *= friction;

      rafId = requestAnimationFrame(momentum);
    };

    // Mouse
    rail.addEventListener("mousedown", (e) => start(e.pageX));
    rail.addEventListener("mousemove", (e) => move(e.pageX));
    rail.addEventListener("mouseup", end);
    rail.addEventListener("mouseleave", end);

    // Touch
    rail.addEventListener("touchstart", (e) => start(e.touches[0].pageX));
    rail.addEventListener("touchmove", (e) => move(e.touches[0].pageX));
    rail.addEventListener("touchend", end);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  // ===============================
  // Vertical scroll → subtle sync
  // ===============================
  useEffect(() => {
    const onScroll = () => {
      if (!railRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = Math.min(
        Math.max((vh - rect.top) / (vh + rect.height), 0),
        1
      );

      const maxScroll =
        railRef.current.scrollWidth - railRef.current.clientWidth;

      railRef.current.scrollLeft = maxScroll * progress * 1.35;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-6 overflow-hidden">
   

      {/* SERVICES RAIL */}
      <div
        ref={railRef}
        className="
          flex gap-5 px-6
          overflow-hidden
          cursor-grab
          select-none
        "
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="
              flex-shrink-0 whitespace-nowrap
              rounded-full
              border border-[var(--brand-main)]/30
              bg-white/80 backdrop-blur
              px-5 py-2.5
              text-sm md:text-base
              font-medium
              text-[var(--brand-dark)]
              shadow-sm
            "
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
