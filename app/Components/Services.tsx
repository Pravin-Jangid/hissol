"use client";

const services = [
  {
    title: "Infrastructure Stack Development",
    desc: "Designing, deploying, and managing scalable IT infrastructure stacks optimized for performance, security, and long-term growth.",
  },
  {
    title: "AMCs (Annual Maintenance Contracts)",
    desc: "Proactive monitoring, regular maintenance, and rapid issue resolution to ensure uninterrupted IT operations year-round.",
  },
  {
    title: "Diverse Server Configurations",
    desc: "Custom server setups tailored to workload requirements, ensuring reliability, speed, and cost efficiency.",
  },
  {
    title: "Virtualization Solutions",
    desc: "Advanced virtualization services to maximize resource utilization, reduce costs, and improve operational flexibility.",
  },
  {
    title: "High Availability & Clustering",
    desc: "Fail-safe architectures and clustering solutions to guarantee maximum uptime and business continuity.",
  },
  {
    title: "Consultation Services",
    desc: "Expert IT consulting to help organizations make informed technology decisions and future-ready investments.",
  },
  {
    title: "Additional Managed Services",
    desc: "Comprehensive managed services covering backups, security audits, performance optimization, and infrastructure scaling.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--brand-soft)]/30 blur-[120px]" />
      </div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)]">
          Our Services
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-600">
          Reliable, scalable, and secure IT solutions engineered for modern enterprises.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className="
              group relative
              rounded-2xl
              border border-slate-200/60
              bg-white/70 backdrop-blur-xl
              p-7
              transition-all duration-500 ease-out
              hover:-translate-y-2
              hover:shadow-[0_30px_80px_rgba(28,77,141,0.25)]
            "
          >
            {/* Gradient Border on Hover */}
            <div
              className="
                pointer-events-none absolute inset-0
                rounded-2xl
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-500
                bg-gradient-to-br
                from-[var(--brand-main)]/30
                via-transparent
                to-[var(--brand-accent)]/40
              "
            />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-3">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                {service.desc}
              </p>
            </div>

            {/* Bottom Accent Line */}
            <span
              className="
                absolute bottom-0 left-0 h-[3px] w-0
                bg-gradient-to-r
                from-[var(--brand-main)]
                to-[var(--brand-soft)]
                transition-all duration-500
                group-hover:w-full
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
