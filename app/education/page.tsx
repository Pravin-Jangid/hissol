"use client";

import { useState } from "react";

const services = [
  {
    title: "Infrastructure Stack Developments",
    img: "https://i.pinimg.com/originals/1d/30/b5/1d30b5a0c298c02edaf2f501b22a6587.gif",
    items: [
      "Redhat / CentOS Linux",
      "Windows Server OS",
      "SuSe Linux OS",
      "Storage Configuration (Dell, HP, IBM)",
      "Hardware RAID & Management",
    ],
  },
  {
    title: "AMCs (Annual Maintenance Contracts)",
    img: "https://i.pinimg.com/originals/1d/30/b5/1d30b5a0c298c02edaf2f501b22a6587.gif",
    items: [
      "Server Configuration",
      "Performance Optimization",
      "24/7 Troubleshooting",
    ],
  },
  {
    title: "Diverse Server Configurations",
    img: "https://i.pinimg.com/originals/1d/30/b5/1d30b5a0c298c02edaf2f501b22a6587.gif",
    items: [
      "Web Server",
      "Mail Server",
      "Monitoring Server",
      "AD / DNS / DHCP",
      "File & IDE Servers",
    ],
  },
  {
    title: "Virtualization Solutions",
    img: "https://i.pinimg.com/originals/1d/30/b5/1d30b5a0c298c02edaf2f501b22a6587.gif",
    items: ["VMware", "Hyper-V", "KVM (RHEVM / Standalone)"],
  },
  {
    title: "High Availability & Clusters",
    img: "https://i.pinimg.com/originals/1d/30/b5/1d30b5a0c298c02edaf2f501b22a6587.gif",
    items: ["Linux Server Clusters", "Windows Server Clusters"],
  },
  {
    title: "Consultation & Additional Services",
    img: "https://i.pinimg.com/originals/1d/30/b5/1d30b5a0c298c02edaf2f501b22a6587.gif",
    items: [
      "Hardware Solution Design",
      "BOM Creation",
      "Network Troubleshooting",
      "Infrastructure Audits",
    ],
  },
];

export default function ServicesExpand() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: "var(--space-6) 0" }}>
      <div className="container expand-wrap">
        {services.map((service, index) => (
          <div
            key={index}
            className={`expand-card ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <img src={service.img} alt={service.title} />

            <div className="overlay">
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .expand-wrap {
          display: flex;
          gap: var(--space-3);
          height: 520px;
        }

        .expand-card {
          position: relative;
          flex: 1;
          border-radius: 32px;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.6s ease;
          box-shadow: var(--shadow-soft);
        }

        .expand-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .expand-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          transition: background var(--speed-slow);
        }

        .expand-card.active {
          flex: 4;
          box-shadow: var(--shadow-deep);
        }

        .expand-card.active::after {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 30%,
            rgba(0, 0, 0, 0.9) 100%
          );
        }

        .overlay {
          position: absolute;
          inset: 0;
          padding: var(--space-5);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: var(--clr-white);
          opacity: 0;
          transform: translateY(20px);
          transition: all var(--speed-slow);
        }

        .expand-card.active .overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .overlay h3 {
          font-size: var(--font-xl);
          margin-bottom: var(--space-3);
        }

        .overlay ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .overlay li {
          margin-bottom: var(--space-2);
          opacity: 0.9;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .expand-wrap {
            flex-direction: column;
            height: auto;
          }

          .expand-card {
            height: 260px;
          }

          .expand-card.active {
            flex: unset;
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
}
