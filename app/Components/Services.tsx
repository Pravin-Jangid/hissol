"use client";

import { useEffect, useState } from "react";
import {
  FiActivity,
  FiCheck,
  FiChevronRight,
  FiCloud,
  FiCpu,
  FiFileText,
  FiServer,
  FiTool,
} from "react-icons/fi";

const services = [
  {
    title: "Infrastructure Stack Developments",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
    items: [
      "Redhat / CentOS Linux",
      "Windows Server OS",
      "SuSe Linux OS",
      "Storage Configuration (Dell, HP, IBM)",
      "Hardware RAID & Management",
    ],
    icon: <FiServer />,
    color: "from-blue-900/80 to-blue-700/60",
  },
  {
    title: "(AMCs)",
    img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=800",
    items: [
      "Server Configuration",
      "Performance Optimization",
      "24/7 Troubleshooting & Support",
    ],
    icon: <FiTool />,
    color: "from-emerald-900/80 to-emerald-700/60",
  },
  {
    title: "Diverse Server Configurations",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800",
    items: [
      "Web Server Deployment",
      "Mail Server Solutions",
      "Monitoring Server Setup",
      "AD / DNS / DHCP Services",
      "File & IDE Servers",
    ],
    icon: <FiCpu />,
    color: "from-violet-900/80 to-violet-700/60",
  },
  {
    title: "Virtualization Solutions",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800",
    items: [
      "VMware Integration",
      "Hyper-V Management",
      "KVM (RHEVM / Standalone)",
    ],
    icon: <FiCloud />,
    color: "from-cyan-900/80 to-cyan-700/60",
  },
  {
    title: "High Availability & Clusters",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800",
    items: [
      "Linux Server Clusters",
      "Windows Server Clusters",
      "Load Balancing Setup",
      "Failover Configuration",
    ],
    icon: <FiActivity />,
    color: "from-orange-900/80 to-orange-700/60",
  },
  {
    title: "Consultation & Additional Services",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800",
    items: [
      "Hardware Solution Design",
      "BOM Creation & Planning",
      "Network Troubleshooting",
      "Infrastructure Audits",
      "Security Assessments",
    ],
    icon: <FiFileText />,
    color: "from-indigo-900/80 to-indigo-700/60",
  },
];

export default function ServicesExpand() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = (index: number) => {
    if (isAnimating || active === index) return;

    setIsAnimating(true);
    setActive(index);

    // Reset animation lock after transition completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section className="py-6 md:py-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-8 max-w-3xl mx-auto">
          <p className="about-label">Our Services</p>
          <h2 className="about-title">Complete Infrastructure Solutions</h2>
        </div>

        {/* Services Cards - Desktop Layout */}
        <div className="hidden lg:flex gap-4 h-[320px] relative">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                relative flex-1 rounded-2xl overflow-hidden cursor-pointer
                transition-all duration-500 ease-out
                ${active === index ? "flex-[3] shadow-2xl" : "shadow-lg"}
                ${isAnimating ? "transition-all duration-500" : ""}
                border border-white/10 backdrop-blur-sm
              `}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => !isMobile && !isAnimating && setActive(index)}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: active === index ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${service.color}`}
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col p-6">
                {/* Header - Always Visible */}
                <div
                  className={`
                  flex items-center space-x-4 transition-all duration-300
                  ${active === index ? "mb-8" : "mb-0"}
                `}
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <div className="text-2xl text-white">{service.icon}</div>
                  </div>
                  <h3
                    className={`text-white  font-bold text-lg flex-1 leading-tight
                    

                    ${active === index ? "" : "sm:hidden"}
                    
                    `}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Details - Animated with Delay */}
                <div
                  className={`
                  flex-1 overflow-hidden transition-all duration-500
                  ${
                    active === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                `}
                  style={{
                    transitionDelay: active === index ? "200ms" : "0ms",
                  }}
                >
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className={`
                          flex items-center space-x-3 text-white/90
                          transition-all duration-300
                          ${
                            active === index
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-4"
                          }
                        `}
                        style={{
                          transitionDelay:
                            active === index ? `${300 + i * 50}ms` : "0ms",
                        }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center flex-shrink-0">
                          <FiCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                relative rounded-2xl overflow-hidden cursor-pointer
                transition-all duration-500 ease-out
                ${active === index ? "h-[250px]" : "h-20"}
                shadow-lg border border-white/10
              `}
              onClick={() => handleCardClick(index)}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${service.color}`}
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col p-4 md:p-6">
                {/* Header - Always Visible */}
                <div
                  className={`
                  flex items-center space-x-3 md:space-x-4 transition-all duration-300
                  ${active === index ? "mb-6" : "mb-0"}
                `}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 flex-shrink-0">
                    <div className="text-xl md:text-2xl text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-white sm:hidden font-bold text-sm md:text-base lg:text-lg flex-1 leading-tight">
                    {service.title}
                  </h3>
                  <div
                    className={`
                    w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center
                    transition-transform duration-300 flex-shrink-0
                    ${active === index ? "rotate-90" : "rotate-0"}
                  `}
                  >
                    <FiChevronRight className="text-white w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>

                {/* Details - Animated with Delay */}
                <div
                  className={`
                  flex-1 overflow-hidden transition-all duration-500
                  ${
                    active === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
                  style={{
                    transitionDelay: active === index ? "150ms" : "0ms",
                  }}
                >
                  <ul className="space-y-2 md:space-y-3 mb-6">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className={`
                          flex items-center space-x-2 md:space-x-3 text-white/90
                          transition-all duration-300
                          ${
                            active === index
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-4"
                          }
                        `}
                        style={{
                          transitionDelay:
                            active === index ? `${200 + i * 40}ms` : "0ms",
                        }}
                      >
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center flex-shrink-0">
                          <FiCheck className="w-2 h-2 md:w-3 md:h-3 text-white" />
                        </div>
                        <span className="text-xs md:text-sm lg:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots - Mobile Only */}
        <div className="lg:hidden flex justify-center space-x-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${active === index ? "w-8 bg-brand-main" : "bg-gray-300"}
              `}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(28, 77, 141, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(28, 77, 141, 0.03) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }

        /* Smooth expand animation */
        .transition-all {
          transition-property: all;
          will-change: transform, opacity, flex;
        }

        /* Hide scrollbar for better UX */
        .overflow-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .overflow-hidden::-webkit-scrollbar {
          display: none;
        }

        /* Performance optimizations */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          .transition-transform,
          .transition-opacity {
            transition: none !important;
          }
        }

        /* Hover effects for desktop only */
        @media (min-width: 1024px) {
          .group:hover .group-hover\:scale-105 {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
