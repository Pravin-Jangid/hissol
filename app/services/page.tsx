"use client";

import {
  ArrowRight,
  ChevronRight,
  CloudCog,
  Network,
  Server,
  ServerCog,
  Shield,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Hero from "../Components/CommoneHero";

const services = [
  {
    title: "Infrastructure Stack Development",
    desc: "Designing, deploying, and managing scalable IT infrastructure stacks optimized for performance, security, and long-term growth.",
    icon: ServerCog,
    features: [
      "Cloud Architecture",
      "Containerization",
      "Infrastructure as Code",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "AMCs (Annual Maintenance Contracts)",
    desc: "Proactive monitoring, regular maintenance, and rapid issue resolution to ensure uninterrupted IT operations year-round.",
    icon: Shield,
    features: [
      "24/7 Monitoring",
      "Preventive Maintenance",
      "Service Level Agreements",
      "Regular Reporting",
    ],
  },
  {
    title: "Diverse Server Configurations",
    desc: "Custom server setups tailored to workload requirements, ensuring reliability, speed, and cost efficiency.",
    icon: Server,
    features: [
      "High Availability",
      "Load Balancing",
      "Clustering Solutions",
      "Performance Tuning",
    ],
  },
  {
    title: "Virtualization Solutions",
    desc: "Advanced virtualization services to maximize resource utilization, reduce costs, and improve operational flexibility.",
    icon: CloudCog,
    features: [
      "VMware/Hyper-V",
      "Resource Allocation",
      "Migration Services",
      "Management Portal",
    ],
  },
  {
    title: "High Availability & Clustering",
    desc: "Fail-safe architectures and clustering solutions to guarantee maximum uptime and business continuity.",
    icon: Network,
    features: [
      "Failover Systems",
      "Disaster Recovery",
      "Redundancy",
      "Auto-scaling",
    ],
  },
  {
    title: "Consultation Services",
    desc: "Expert IT consulting to help organizations make informed technology decisions and future-ready investments.",
    icon: Users,
    features: [
      "Strategy Planning",
      "Technology Audits",
      "Roadmapping",
      "Vendor Selection",
    ],
  },
];

export default function PremiumServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Mouse position tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-reveal cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Auto-hover for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setHoveredCard(0);
      } else {
        setHoveredCard(null);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Hero
        title="Premium Services"
        description="We offer a range of premium services to help businesses optimize their IT infrastructure and achieve their business goals."
      />

      <section
        ref={containerRef}
        className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "var(--clr-bg)" }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-5 animate-pulse-slow"
            style={{ background: "var(--brand-main)" }}
          />
          <div
            className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-5 animate-pulse-slow"
            style={{ background: "var(--brand-accent)" }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(28, 77, 141, 0.1) 1px, transparent 1px),
                             linear-gradient(180deg, rgba(28, 77, 141, 0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
                maskImage:
                  "radial-gradient(circle at center, black 30%, transparent 70%)",
              }}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="service-card reveal"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() =>
                    window.innerWidth < 768 &&
                    setHoveredCard(isHovered ? null : index)
                  }
                >
                  {/* Card Glow Effect */}
                  <div
                    className={`absolute -inset-4 rounded-2xl transition-opacity duration-700 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                               rgba(28, 77, 141, 0.2), transparent 70%)`,
                      filter: "blur(30px)",
                    }}
                  />

                  {/* Card Container */}
                  <div
                    className={`relative bg-white rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
                      isHovered
                        ? "scale-[1.02] border-transparent shadow-2xl"
                        : "border-[var(--clr-border)] shadow-lg"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Gradient Overlay (Hidden by default, shows on hover) */}
                    <div
                      className={`absolute inset-0 transition-all duration-700 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        background: "var(--gradient-brand)",
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative p-8 z-10">
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="relative w-14 h-14">
                          <div
                            className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                              isHovered
                                ? "bg-white/20"
                                : "bg-[rgba(28,77,141,0.08)]"
                            }`}
                          />

                          <div className="relative w-full h-full flex items-center justify-center">
                            <Icon
                              className={`h-7 w-7 transition-all duration-500 ${
                                isHovered
                                  ? "text-white"
                                  : "text-[var(--brand-main)]"
                              }`}
                            />
                          </div>

                          {/* Success Indicator */}
                          {isHovered && (
                            <div
                              className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center animate-ping"
                              style={{ background: "var(--success-main)" }}
                            />
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold mb-4 transition-colors duration-500 leading-snug ${
                          isHovered ? "text-white" : "text-[var(--brand-dark)]"
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-base mb-6 leading-relaxed font-light transition-colors duration-500 ${
                          isHovered
                            ? "text-white/90"
                            : "text-[var(--clr-muted)]"
                        }`}
                      >
                        {service.desc}
                      </p>

                      {/* CTA Buttons */}
                      <div className="relative mt-8">
                        <button
                          className={`btn btn-primary w-full transition-all duration-500 ${
                            isHovered
                              ? "opacity-100 translate-y-0 bg-white text-[var(--brand-main)] hover:text-white"
                              : " hidden translate-y-4"
                          }`}
                        >
                          <span className="relative flex items-center justify-center gap-3">
                            <span>Explore Service</span>
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </button>

                        <button
                          className={`btn btn-secondary w-full absolute inset-0 transition-all duration-500 ${
                            isHovered
                              ? "hidden translate-y-4"
                              : "opacity-100 translate-y-0"
                          }`}
                        >
                          <span className="relative flex items-center justify-center gap-3">
                            <span>Learn More</span>
                            <ChevronRight className="h-4 w-4" />
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 w-full transition-transform duration-700 ${
                        isHovered ? "scale-x-100" : "scale-x-0"
                      }`}
                      style={{
                        transformOrigin: "left center",
                        background: "var(--success-main)",
                      }}
                    />
                  </div>

                  {/* Connection Dots (Desktop only) */}
                  {index < services.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="flex items-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full transition-all duration-300 ${
                              isHovered
                                ? "bg-[var(--brand-main)] scale-100"
                                : "bg-[var(--clr-border)] scale-75"
                            }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.1);
            }
          }

          .animate-ping {
            animation: pulse 1.5s ease-in-out infinite;
          }

          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .reveal.show {
            opacity: 1;
            transform: translateY(0);
          }

          /* Mobile hover effect */
          @media (max-width: 768px) {
            .reveal.show {
              animation: subtlePulse 4s infinite;
            }

            @keyframes subtlePulse {
              0%,
              60% {
                transform: translateY(0) scale(1);
                box-shadow: 0 8px 32px rgba(15, 40, 84, 0.1);
              }
              70%,
              100% {
                transform: translateY(0) scale(1.01);
                box-shadow: 0 20px 40px rgba(15, 40, 84, 0.15);
              }
            }
          }

          /* Gradient brand from CSS variables */
          .gradient-brand {
            background: linear-gradient(
              135deg,
              var(--brand-dark),
              var(--brand-main),
              var(--brand-soft)
            );
          }
        `}</style>
      </section>
    </>
  );
}
