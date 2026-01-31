"use client";

import  Link  from "next/link";
import {
  FiActivity,
  FiCloud,
  FiCpu,
  FiFileText,
  FiServer,
  FiTool,
} from "react-icons/fi";

const services = [
  {
    title: "Infrastructure Stack Developments",

    icon: <FiServer />,
  },
  {
    title: "Annual Maintenance Contracts (AMCs)",

    icon: <FiTool />,
  },
  {
    title: "Diverse Server Configurations",

    icon: <FiCpu />,
  },
  {
    title: "Virtualization Solutions",

    icon: <FiCloud />,
  },
  {
    title: "High Availability & Clusters",

    icon: <FiActivity />,
  },
  {
    title: "Consultation & Additional Services",
   
    icon: <FiFileText />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#f5f7fa]">
      {/* Header */}
      <div className=" text-center flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[var(--brand-dark)] mb-4">
          Our Services
        </h2>
        <p className="text-muted max-w-xl text-center">
          Enterprise-grade infrastructure, analytics & consulting — delivered
          with precision.
        </p>
        <div className="w-24 h-1 bg-[var(--brand-main)] mt-6 rounded-full" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT IMAGE */}
        <div className="relative lg:sticky lg:top-28">
          <img
            src="/Assets/images/server.png"
            alt="Infrastructure Services"
            className="w-full h-full p-10 object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-[var(--clr-border)]
                           shadow-sm hover:shadow-md transition"
              >
                {/* Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-11 h-11 rounded-full bg-[var(--brand-main)]/10
                                  flex items-center justify-center text-[var(--brand-main)] text-lg"
                  >
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-sm text-[var(--clr-text)] leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA */}
      <Link href="/services" className="flex justify-center">
        <button className="btn btn-primary">View all services</button>
      </Link>
    </section>
  );
}
