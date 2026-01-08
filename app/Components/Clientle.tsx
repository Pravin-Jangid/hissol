"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  "Asian.png",
  "briscad_logo.png",
  "Dell_Logo.svg.png",
  "dormer_pramet_logo.png",
  "FORACE POLYMERS PVT LTD.png",
  "Ginni_logo.png",
  "GVK_BIO.png",
  "HSCL-logo.png",
  "Liberty.png",
  "Miranda_logo.png",
  "Organic_India.png",
  "redhat-logo.png",
  "SAFEX CHEMICALS (INDIA) LIMITED.png",
];

export default function ClientsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(
      track.querySelectorAll<HTMLDivElement>("[data-logo]")
    );

    const animate = () => {
      const centerX = window.innerWidth / 2;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - itemCenter);

        const maxDistance = 420; // 👈 focus width
        const clamped = Math.min(distance / maxDistance, 1);

        // SCALE: center big, sides small
        const scale = 1.35 - clamped * 0.55; // center ≈1.45, sides ≈0.9

        // HEIGHT CONTROL
        const height = 80 + (1 - clamped) * 40; // center ≈120px, sides ≈80px

        // OPACITY subtle depth
        const opacity = 0.6 + (1 - clamped) * 0.4;

        item.style.transform = `scale(${scale})`;
        item.style.height = `${height}px`;
        item.style.opacity = `${opacity}`;
        item.style.zIndex = scale > 1.2 ? "5" : "1";
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="relative py-14 overflow-hidden bg-[var(--brand-accent)]">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)]">
          Trusted by Industry Leaders
        </h2>
      </div>

      {/* Edge fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[var(--brand-accent)] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[var(--brand-accent)] to-transparent z-10" />

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="
            flex w-max items-center gap-20
            animate-marquee
            hover:[animation-play-state:paused]
          "
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              data-logo
              className="
                flex items-center justify-center
                min-w-[180px]
                transition-all duration-200 ease-out
              "
            >
              <Image
                src={`/Assets/Logo/${logo}`}
                alt="Client Logo"
                width={180}
                height={100}
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
