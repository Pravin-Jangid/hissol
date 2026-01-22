"use client";

import Image from "next/image";
import Link from "next/link";

const highValueClients = [
  "foracegrp.png",
  "frontier.png",
  "dcmshriram.png",
  "greenko.svg",
  "gvkbio.png",
  "organicindia.png",
  "liberty.png",
  "dormer.png",
];

export default function ClientsMarquee() {
  return (
    <section className="relative py-10 overflow-hidden bg-[var(--brand-accent)]">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-6 px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-[var(--brand-dark)]">
          Trusted by Industry Leaders
        </h2>
      </div>

      {/* Edge fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[var(--brand-accent)] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[var(--brand-accent)] to-transparent z-10" />

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max items-center gap-12 animate-marquee px-6">
          {[...highValueClients, ...highValueClients].map((logo, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                w-[160px] h-[90px]
                bg-white
                rounded-xl
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <Image
                src={`/Assets/Logo/Clients/${logo}`}
                alt="Client Logo"
                width={140}
                height={70}
                className="max-h-[60px] max-w-[130px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-8 text-center">
        <Link
          href="/our-clients"
           className="font-medium text-[var(--brand-main)]
                transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:text-[var(--brand-dark)]"
        >
          View all clients →
        </Link>
      </div>
    </section>
  );
}
