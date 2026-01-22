"use client";

import Image from "next/image";

const logos = [
  "aruba.png",
  "Dell_Logo.svg.png",
  "HPE.png",
  "microsoft.png",
  "redhat-logo.png",
  "suse-white-logo-green.png",
  "veeam.png",
  "vmware-logo-grey.svg",
];

export default function ClientsMarquee() {
  return (
    <section className="relative py-8 overflow-hidden bg-[var(--brand-accent)]">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-5 px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-[var(--brand-dark)]">
          Our Partners
        </h2>
      </div>

      {/* Edge fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[var(--brand-accent)] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[var(--brand-accent)] to-transparent z-10" />

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max items-center gap-10 animate-marqueere">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                w-[140px] h-[80px]
                bg-white
                rounded-lg
                shadow-sm
              "
            >
              <Image
                src={`/Assets/Logo/Partners/${logo}`}
                alt="Client Logo"
                width={120}
                height={60}
                className="max-w-[110px] max-h-[50px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
