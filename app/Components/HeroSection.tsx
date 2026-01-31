"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import "./hero.css";

export default function Hero() {
  const c1 = useRef<HTMLDivElement | null>(null);
  const c2 = useRef<HTMLDivElement | null>(null);
  const c3 = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const p1 = useRef({ x: 0, y: 0 });
  const p2 = useRef({ x: 0, y: 0 });
  const p3 = useRef({ x: 0, y: 0 });


  useEffect(() => {
  if (typeof window === "undefined") return;
  if (window.innerWidth < 768) return; // mobile off

  let rafId: number;

  const move = (e: MouseEvent) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  };

  window.addEventListener("mousemove", move, { passive: true });

  const animate = () => {
    // 🔒 NULL GUARD (MOST IMPORTANT)
    if (!c1.current || !c2.current || !c3.current) return;

    p1.current.x += (mouse.current.x - p1.current.x) * 0.25;
    p1.current.y += (mouse.current.y - p1.current.y) * 0.25;

    p2.current.x += (mouse.current.x - p2.current.x) * 0.15;
    p2.current.y += (mouse.current.y - p2.current.y) * 0.15;

    p3.current.x += (mouse.current.x - p3.current.x) * 0.08;
    p3.current.y += (mouse.current.y - p3.current.y) * 0.08;

    c1.current.style.transform =
      `translate(${p1.current.x}px, ${p1.current.y}px) translate(-50%,-50%)`;

    c2.current.style.transform =
      `translate(${p2.current.x}px, ${p2.current.y}px) translate(-50%,-50%)`;

    c3.current.style.transform =
      `translate(${p3.current.x}px, ${p3.current.y}px) translate(-50%,-50%)`;

    rafId = requestAnimationFrame(animate);
  };

  rafId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener("mousemove", move);
  };
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
        <h1 className="text-white">
          Hosting Infrastructure Service And Solutions
        </h1>
        <p>
          Globally certified professionals helping businesses run seamlessly on
          the internet.
        </p>

        <div className="features">
          <span>✔ Server Access Management</span>
          <span>✔ Cloud Infrastructure Protection</span>
        </div>

        <Link href="/contact">
          <button className="btn btn-primary mt-6">
            Get Free Linkultation →
          </button>
        </Link>
      </div>

      {/* CURSOR */}
      <div ref={c1} className="cursor c1" />
      <div ref={c2} className="cursor c2" />
      <div ref={c3} className="cursor c3" />
    </section>
  );
}
