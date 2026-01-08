"use client";

export default function Footer() {
  return (
    <footer className="bg-white text-[var(--clr-text)] border-t border-[var(--clr-border)]">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        {/* COMPANY INFO */}
        <div>
          <h3 className="font-[var(--font-heading)] text-xl font-semibold mb-4 text-[var(--brand-dark)]">
            HISSOL
          </h3>
          <p className="text-sm leading-relaxed text-[var(--clr-muted)]">
            HISSOL is the leading System Integrator, Solution Provider and
            re-seller of various products, solutions and technologies.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide text-[var(--brand-dark)]">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            {["About", "Services", "Blog", "Careers", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="!text-[var(--clr-text)] hover:!text-[var(--brand-main)] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCT LINKS */}
        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide text-[var(--brand-dark)]">
            Product
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Product",
              "Features",
              "Customers",
              "Channels",
              "Certifications",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="!text-[var(--clr-text)] hover:!text-[var(--brand-main)] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col justify-between">
          <p className="text-sm text-[var(--clr-muted)] leading-relaxed mb-6">
            Partner with us to build secure, scalable and future-ready IT
            infrastructure.
          </p>

          <a
            href="/contact"
            className="
              inline-flex items-center justify-center
              w-fit
              rounded-full
              bg-[var(--brand-main)]
              px-6 py-2.5
              text-sm font-medium
              !text-white
              transition-colors
              hover:bg-[var(--brand-dark)]
            "
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[var(--clr-border)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-[var(--clr-muted)]">
          <span>© {new Date().getFullYear()} HISSOL. All rights reserved.</span>

          <div className="flex gap-5">
            <a
              href="/privacy"
              className="!text-[var(--clr-muted)] hover:!text-[var(--brand-main)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="!text-[var(--clr-muted)] hover:!text-[var(--brand-main)] transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
