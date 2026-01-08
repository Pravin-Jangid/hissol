"use client";

import { useEffect, useRef, useState } from "react";
import "./hero.css";

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const cursorRef = useRef({ x: 0, y: 0 });
  const trail1 = useRef({ x: 0, y: 0 });
  const trail2 = useRef({ x: 0, y: 0 });
  const trail3 = useRef({ x: 0, y: 0 });

  const rafRef = useRef<number>();

  const cursor1Ref = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);
  const cursor3Ref = useRef<HTMLDivElement>(null);

  /* ---------------- CURSOR TRACK ---------------- */
  useEffect(() => {
    let ticking = false;

    const onMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };

      if (!ticking) {
        requestAnimationFrame(() => {
          setCursorPos(cursorRef.current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ---------------- CURSOR TRAILS ---------------- */
  useEffect(() => {
    const animate = () => {
      trail1.current.x += (cursorPos.x - trail1.current.x) * 0.25;
      trail1.current.y += (cursorPos.y - trail1.current.y) * 0.25;

      trail2.current.x += (cursorPos.x - trail2.current.x) * 0.15;
      trail2.current.y += (cursorPos.y - trail2.current.y) * 0.15;

      trail3.current.x += (cursorPos.x - trail3.current.x) * 0.08;
      trail3.current.y += (cursorPos.y - trail3.current.y) * 0.08;

      cursor1Ref.current &&
        (cursor1Ref.current.style.transform = `translate(${trail1.current.x}px, ${trail1.current.y}px) translate(-50%, -50%)`);
      cursor2Ref.current &&
        (cursor2Ref.current.style.transform = `translate(${trail2.current.x}px, ${trail2.current.y}px) translate(-50%, -50%)`);
      cursor3Ref.current &&
        (cursor3Ref.current.style.transform = `translate(${trail3.current.x}px, ${trail3.current.y}px) translate(-50%, -50%)`);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [cursorPos]);

  /* ---------------- REVEAL OBSERVER ---------------- */
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const clients = [
    { name: "Asiam", url: "/Assets/Logo/Asian.png" },
    { name: "Rockm", url: "/Assets/Logo/Dell_Logo.svg.png" },
    { name: "Gont", url: "/Assets/Logo/Organic_India.png" },
    { name: "Talbro", url: "/Assets/Logo/PIL_logo.png" },
    { name: "1000", url: "/Assets/Clients/1000.png" },
  ];

  return (
    <section className="hero-section">
      {/* BACKGROUND */}
      <div className="bg-shapes reveal">
        <div className="dots-pattern" />
        <div className="orb-1" />
        <div className="orb-2" />
        <div className="orb-3" />
        <div className="morph-shape-1" />
        <div className="morph-shape-2" />
        <div className="geo-circle" />
        <div className="geo-square" />
        <div className="geo-triangle" />
      </div>

      {/* CONTENT */}
      <div className="hero-content">
        <div className="content-left reveal-left">
          <h1 className="hero-title reveal">HISSOL</h1>
          <h2 className="hero-subtitle reveal">
            Hosting Infrastructure Service And Solutions
          </h2>
          <p className="hero-description reveal">
            HISSOL is a globally certified professional entity that helps every
            company to run their business seamlessly on internet...
          </p>
        </div>

        <div className="content-right reveal-right">
          <div className="features-list reveal">
            <p className="feature-item">
              <span className="feature-check">✔</span> Server Access Management
            </p>
            <p className="feature-item">
              <span className="feature-check">✔</span> Cloud Infrastructure
              Protection
            </p>
          </div>

          <div className="clients-section reveal">
            <p className="clients-text">Our 1000+ Secured Clients Worldwide</p>

            <div className="clients-grid">
              {clients.map((c, i) => (
                <div
                  key={i}
                  className="client-logo reveal"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <img src={c.url} alt={c.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <button className="reveal btn hover:text-slate-900 btn-primary w-54 mt-4">
            Get Free Consultation →
          </button>
        </div>
      </div>

      {/* CURSOR */}
      <div ref={cursor1Ref} className="cursor-trail cursor-1" />
      <div ref={cursor2Ref} className="cursor-trail cursor-2" />
      <div ref={cursor3Ref} className="cursor-trail cursor-3" />
    </section>
  );
}
