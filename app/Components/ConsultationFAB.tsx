"use client";

import { useState } from "react";

const services = [
  "Infrastructure Stack Developments",
  "Annual Maintenance Contracts (AMCs)",
  "Diverse Server Configurations",
  "Virtualization Solutions",
  "High Availability & Clusters",
  "Consultation & Additional Services",
];

export default function ConsultationFAB() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON – ALWAYS FIXED */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button onClick={() => setOpen(true)} className="btn btn-orange">
          Free Consultation
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-[9999]"
        />
      )}

      {/* POPUP */}
      <div
        className={`fixed bottom-24 right-6 w-[360px]
          bg-white rounded-2xl shadow-2xl p-6
          transition-all duration-300 ease-out z-[10000]
          ${
            open
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Free Consultation</h3>
          <button onClick={() => setOpen(false)} className="btn btn-solid">
            ✕
          </button>
        </div>

        <form className="space-y-3">
          <input
            placeholder="Your Name"
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            placeholder="Email Address"
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            placeholder="Phone Number"
            className="w-full border rounded-lg px-3 py-2"
          />

          <select className="w-full border rounded-lg px-3 py-2">
            <option value="">Select Service</option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <button
            type="submit"
            className="btn btn-orange text-center w-full px-12"
          >
            Request Consultation →
          </button>
        </form>
      </div>
    </>
  );
}
