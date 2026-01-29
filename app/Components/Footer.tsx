"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, var(--brand-dark) 0%, #081a36 100%)",
      }}
    >
      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path
            fill="#f5f7fa"
            d="M0,90 C240,30 480,140 720,100 960,60 1200,20 1440,60 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-36 pb-16 grid gap-14 md:grid-cols-4">
        {/* BRAND */}
        <div>
          <h3 className="text-4xl font-bold tracking-wide mb-4 font-[var(--font-heading)]">
            HISSOL
          </h3>
          <p className="text-sm leading-relaxed max-w-sm mb-4">
            Enterprise system integrator delivering secure, scalable and
            future-ready IT architecture for modern organizations.
          </p>
          
          {/* COMPANY ADDRESS */}
          <div className="text-xs leading-relaxed mt-4">
            <p className="font-semibold mb-1">Office Address</p>
            <p>HISSOL Private Limited</p>
            <p>215, SHRI BALAJI DHAM, RAJAWAS,</p>
            <p>SIKAR ROAD, AMER, Jaipur,</p>
            <p>Rajasthan, India 302032</p>
            <p className="mt-2 font-semibold">Toll Free: 18005727001</p>
            <p>Email: info@hissol.com</p>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase font-semibold mb-6">
            Company
          </h4>
          <ul className="space-y-3">
            {["about", "services", "blog", "careers", "contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item}`}
                  className="text-xs tracking-[0.25em] uppercase font-semibold mb-6 font-bold bg-white p-1 rounded-lg"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCT */}
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase font-semibold mb-6">
            Product
          </h4>
          <ul className="space-y-3">
            {[
              "solutions",
              "features",
              "customers",
              "channels",
              "certifications",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item}`}
                  className="text-xs tracking-[0.25em] uppercase font-semibold mb-6 font-bold bg-white p-1 rounded-lg"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-[var(--radius-soft)] border border-white bg-white/10 backdrop-blur-xl p-6">
          <p className="text-sm leading-relaxed mb-6">
            Let's design infrastructure that scales with vision, security and
            performance at its core.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-white
              px-6 py-2.5
              text-sm font-medium
              text-[var(--brand-dark)]
              hover:bg-[var(--brand-accent)]
              transition-colors
            "
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-20 border-t border-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <span>© {new Date().getFullYear()} HISSOL. All rights reserved.</span>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs tracking-[0.25em] uppercase font-semibold mb-6 font-bold bg-white p-1 rounded-lg"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs tracking-[0.25em] uppercase font-semibold mb-6 font-bold bg-white p-1 rounded-lg"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}