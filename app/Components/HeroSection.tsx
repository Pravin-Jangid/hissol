"use client";

import { useEffect, useRef } from "react";
import "./hero.css";

export default function Hero() {
  const c1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null);
  const c3 = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const p1 = useRef({ x: 0, y: 0 });
  const p2 = useRef({ x: 0, y: 0 });
  const p3 = useRef({ x: 0, y: 0 });

  /* ================= CURSOR (PURE RAF – NO REACT STATE) ================= */
  useEffect(() => {
    if (window.innerWidth < 768) return; // 🔥 mobile off

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move, { passive: true });

    const animate = () => {
      p1.current.x += (mouse.current.x - p1.current.x) * 0.25;
      p1.current.y += (mouse.current.y - p1.current.y) * 0.25;

      p2.current.x += (mouse.current.x - p2.current.x) * 0.15;
      p2.current.y += (mouse.current.y - p2.current.y) * 0.15;

      p3.current.x += (mouse.current.x - p3.current.x) * 0.08;
      p3.current.y += (mouse.current.y - p3.current.y) * 0.08;

      c1.current!.style.transform = `translate(${p1.current.x}px, ${p1.current.y}px) translate(-50%,-50%)`;
      c2.current!.style.transform = `translate(${p2.current.x}px, ${p2.current.y}px) translate(-50%,-50%)`;
      c3.current!.style.transform = `translate(${p3.current.x}px, ${p3.current.y}px) translate(-50%,-50%)`;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero">
      {/* 🎥 BACKGROUND VIDEO */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/Assets/Video/hero.mp4" type="video/mp4" />
      </video>

      {/* BRAND OVERLAY */}
      <div className="hero-overlay" />

      {/* CONTENT */}
      <div className="hero-content mt-24">
        <h1 className="text-white">HISSOL</h1>
        <h2>Hosting Infrastructure Service And Solutions</h2>
        <p>
          Globally certified professionals helping businesses run seamlessly on
          the internet.
        </p>

        <div className="features">
          <span>✔ Server Access Management</span>
          <span>✔ Cloud Infrastructure Protection</span>
        </div>

        <button className="btn btn-primary">Get Free Consultation →</button>
      </div>

      {/* CURSOR */}
      <div ref={c1} className="cursor c1" />
      <div ref={c2} className="cursor c2" />
      <div ref={c3} className="cursor c3" />
    </section>
  );
}
