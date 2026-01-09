"use client";

import { useState } from "react";
import Header from "../Components/CommoneHero";

const certificates = [
  {
    title: "Quality Management Certificate",
    subtitle: "International Quality Compliance & Standards",
    img: "/Assets/Certificates/QM.png",
    badge: "ISO Aligned",
  },
  {
    title: "MSME Certificate",
    subtitle: "Recognized by Government of India",
    img: "/Assets/Certificates/MSME.png",
    badge: "MSME India",
  },
  {
    title: "DPIIT Certificate",
    subtitle: "Startup India – DPIIT Registered",
    img: "/Assets/Certificates/DPIIT.png",
    badge: "DPIIT",
  },
];

export default function Certificates() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  return (
    <>
      {/* HERO */}
      <Header
        title="Certifications"
        description="Official recognitions and registrations held by our organization."
      />

      {/* CERTIFICATES GRID */}
      <section className="py-4 bg-gradient-to-b from-[#f9fbfd] to-[#eef4fb]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="group relative rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Badge */}
                <span className="absolute top-5 left-5 z-10 rounded-full bg-[var(--brand-main)] px-4 py-1 text-xs font-semibold text-white">
                  {cert.badge}
                </span>

                {/* Image */}
                <div
                  onClick={() => setOpenImg(cert.img)}
                  className="cursor-pointer relative h-64 overflow-hidden rounded-t-3xl"
                >
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-[var(--brand-dark)]">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {cert.subtitle}
                  </p>

               
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLE FULL VIEW MODAL */}
      {openImg && (
        <div
          onClick={() => setOpenImg(null)}
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full max-w-5xl mx-4 rounded-md shadow-2xl p-4"
          >
            {/* Close */}
            <button
              onClick={() => setOpenImg(null)}
              className="absolute top-3 right-3 text-sm font-medium text-gray-700 hover:text-black"
            >
              ✕ Close
            </button>

            {/* Certificate Image */}
            <div className="flex justify-center items-center">
              <img
                src={openImg}
                alt="Certificate"
                className="max-h-[85vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
