"use client";

import { useEffect } from "react";
import "./AboutUs.css";

export default function AboutUs() {
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

  return (
    <section className="about-section">
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-content reveal-left">
          <p className="about-label">About Us</p>

          <h2 className="about-title">
            Reliable Digital Infrastructure for Growing Businesses
          </h2>

          <p className="about-desc">
            HISSOL delivers enterprise-grade hosting and IT infrastructure
            engineered for security, scalability, and long-term reliability.
          </p>

          <p className="about-desc">
            From managed servers to cloud platforms, our certified engineers
            ensure your systems remain stable, fast, and protected—so your
            business can scale with confidence.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="about-stats">
          <div className="stat-card reveal-right">
            <h3>1000+</h3>
            <p>Clients Secured</p>
          </div>

          <div className="stat-card reveal-right">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card reveal-right">
            <h3>99.9%</h3>
            <p>Uptime SLA</p>
          </div>

          <div className="stat-card reveal-right">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
