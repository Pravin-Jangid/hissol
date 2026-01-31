"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiActivity,
  FiArrowRight,
  FiCheck,
  FiChevronRight,
  FiCloud,
  FiCpu,
  FiFileText,
  FiServer,
  FiTool,
} from "react-icons/fi";
import Hero from "../Components/CommoneHero";

const services = [
  {
    title: "Infrastructure Stack Developments",
    desc: "Designing, deploying, and managing scalable IT infrastructure stacks optimized for performance, security, and long-term growth.",
    icon: FiServer,
    color: "from-blue-600 to-blue-800",
    features: [
      "Redhat / CentOS Linux",
      "Windows Server OS",
      "SuSe Linux OS",
      "Storage Configuration (Dell, HP, IBM)",
      "Hardware RAID & Management",
    ],
  },
  {
    title: "Annual Maintenance Contracts (AMCs)",
    desc: "Proactive monitoring, regular maintenance, and rapid issue resolution to ensure uninterrupted IT operations year-round.",
    icon: FiTool,
    color: "from-emerald-600 to-emerald-800",
    features: [
      "Server Configuration",
      "Performance Optimization",
      "24/7 Troubleshooting & Support",
    ],
  },
  {
    title: "Diverse Server Configurations",
    desc: "Custom server setups tailored to workload requirements, ensuring reliability, speed, and cost efficiency.",
    icon: FiCpu,
    color: "from-violet-600 to-violet-800",
    features: [
      "Web Server Deployment",
      "Mail Server Solutions",
      "Monitoring Server Setup",
      "AD / DNS / DHCP Services",
      "File & IDE Servers",
    ],
  },
  {
    title: "Virtualization Solutions",
    desc: "Advanced virtualization services to maximize resource utilization, reduce costs, and improve operational flexibility.",
    icon: FiCloud,
    color: "from-cyan-600 to-cyan-800",
    features: [
      "VMware Integration",
      "Hyper-V Management",
      "KVM (RHEVM / Standalone)",
    ],
  },
  {
    title: "High Availability & Clusters",
    desc: "Fail-safe architectures and clustering solutions to guarantee maximum uptime and business continuity.",
    icon: FiActivity,
    color: "from-orange-600 to-orange-800",
    features: [
      "Linux Server Clusters",
      "Windows Server Clusters",
      "Load Balancing Setup",
      "Failover Configuration",
    ],
  },
  {
    title: "Consultation & Additional Services",
    desc: "Expert IT consulting to help organizations make informed technology decisions and future-ready investments.",
    icon: FiFileText,
    color: "from-indigo-600 to-indigo-800",
    features: [
      "Hardware Solution Design",
      "BOM Creation & Planning",
      "Network Troubleshooting",
      "Infrastructure Audits",
      "Security Assessments",
    ],
  },
];

export default function ServicesExpand() {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
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
        className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-5 animate-pulse-slow bg-gradient-to-r from-blue-500 to-blue-700" />
          <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-5 animate-pulse-slow bg-gradient-to-r from-emerald-500 to-emerald-700" />

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
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
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
                        : "border-gray-200 shadow-lg"
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
                        background: `linear-gradient(135deg, ${service.color.replace("from-", "").replace("to-", "").replace(" ", ",")})`,
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative p-8 z-10">
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="relative w-14 h-14">
                          <div
                            className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                              isHovered ? "bg-white/20" : "bg-blue-50"
                            }`}
                          />

                          <div className="relative w-full h-full flex items-center justify-center">
                            <Icon
                              className={`h-7 w-7 transition-all duration-500 ${
                                isHovered ? "text-blue-900" : "text-blue-900"
                              }`}
                            />
                          </div>

                          {/* Success Indicator */}
                          {isHovered && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center animate-ping bg-gradient-to-r from-green-500 to-emerald-400" />
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold mb-4 transition-colors duration-500 leading-snug `}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-base mb-6 text-gray-600 leading-relaxed font-light transition-colors duration-500 `}
                      >
                        {service.desc}
                      </p>

                      {/* Features List */}
                      <div className="mb-8">
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li
                              key={i}
                              className={`flex items-center space-x-3 transition-all duration-300 ${
                                isHovered
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-100"
                              }`}
                              style={{
                                transitionDelay: isHovered
                                  ? `${i * 50}ms`
                                  : "0ms",
                              }}
                            >
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                  isHovered ? "bg-white/30" : "bg-gray-100"
                                }`}
                              >
                                <FiCheck
                                  className={`w-3 h-3 transition-colors duration-300 text-green-900`}
                                />
                              </div>
                              <span
                                className={`text-sm md:text-base transition-colors duration-300 text-gray-700 `}
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Buttons */}
                      {/* <div className="relative mt-8">
                        <button
                          className={`btn btn-primary w-full transition-all duration-500 ${
                            isHovered
                              ? "opacity-100 translate-y-0 bg-white text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800"
                              : "hidden translate-y-4"
                          }`}
                        >
                          <span className="relative flex items-center justify-center gap-3">
                            <span>Explore Service</span>
                            <FiArrowRight className="h-4 w-4" />
                          </span>
                        </button>

                        <button
                          className={`btn btn-secondary w-full transition-all duration-500 ${
                            isHovered
                              ? "hidden translate-y-4"
                              : "opacity-100 translate-y-0 bg-gradient-to-r from-blue-50 to-gray-50 text-blue-600 border border-blue-100 hover:border-blue-200"
                          }`}
                        >
                          <span className="relative flex items-center justify-center gap-3">
                            <span>Learn More</span>
                            <FiChevronRight className="h-4 w-4" />
                          </span>
                        </button>
                      </div> */}
                    </div>

                    {/* Bottom Accent Line */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 w-full transition-transform duration-700 ${
                        isHovered ? "scale-x-100" : "scale-x-0"
                      }`}
                      style={{
                        transformOrigin: "left center",
                        background:
                          "linear-gradient(to right, #10b981, #059669)",
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
                                ? "bg-blue-600 scale-100"
                                : "bg-gray-300 scale-75"
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

          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.05;
            }
            50% {
              opacity: 0.1;
            }
          }

          .animate-ping {
            animation: pulse 1.5s ease-in-out infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
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

          /* Button styles */
          .btn {
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 500;
            transition: all 0.3s ease;
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
        `}</style>
      </section>
    </>
  );
}
