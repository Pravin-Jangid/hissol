"use client";

import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const services = [
  "Infrastructure Stack Developments",
  "Annual Maintenance Contracts (AMCs)",
  "Diverse Server Configurations",
  "Virtualization Solutions",
  "High Availability & Clusters",
  "Consultation & Additional Services",
];

export default function ConsultationPopup({ open, onClose }: Props) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div className="popup " onClick={(e) => e.stopPropagation()}>
        <button className="btn btn-primary popup-close" onClick={onClose}>
          ✕
        </button>

        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="/Assets/Logo/HISSOL_Logo.png"
            className="w-14 h-12"
            alt=""
          />

          <h2 className="text-2xl font-bold">Get Free Consultation</h2>
        </div>

        <form className="popup-form" onSubmit={onClose}>
          <input
            className="rounded-full rounded"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="rounded-full"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            className="rounded-full"
            type="tel"
            placeholder="Phone Number"
            required
          />

          {/* ✅ SERVICE DROPDOWN */}
          <select required>
            <option value="">Select Service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <button type="submit" className="btn btn-primary">
            Request Consultation →
          </button>
        </form>
      </div>
    </div>
  );
}
