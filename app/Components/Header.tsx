"use client";

import {
  Award,
  BookOpen,
  Briefcase,
  ChevronRight,
  Home,
  LogIn,
  Menu,
  Phone,
  UserPlus,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    {
      href: "/services",
      label: "Services",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      href: "/certifications",
      label: "Certifications",
      icon: <Award className="h-5 w-5" />,
    },
    {
      href: "/education",
      label: "Education",
      icon: <BookOpen className="h-5 w-5" />,
    },
    
    {
      href: "/about",
      label: "About Us",
      icon: <UserPlus className="h-5 w-5" />,
    },
    {
      href: "/contact",
      label: "Contact Us",
      icon: <Phone className="h-5 w-5" />,
    },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 z-50 w-full ">
        <div
          className={`transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            scrolled || mobileMenuOpen
              ? "bg-white border-b-2 border-[var(--brand-dark)] shadow-[var(--shadow-soft)]"
              : "bg-transparent border-b-2 border-[var(--brand-accent)] shadow-[var(--shadow-soft)] "
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 md:h-20 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/Assets/Logo/HISSOL_Logo.png"
                  alt="HISSOL"
                  width={59}
                  height={59}
                  priority
                  className="h-12 md:w-11 md:h-11 rounded-lg"
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg font-medium
      transition-colors duration-200 ease-out
      hover:bg-[rgba(28,77,141,0.08)]
      ${
        scrolled
          ? "text-[var(--brand-accent)] hover:border-b-2 hover:border-[var(--brand-dark)]"
          : "!text-white hover:border-b-2 hover:border-[var(--brand-accent)]"
      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-3">
                <Link href="/login" className="">
                  <div className="flex gap-2 btn btn-primary">
                    <LogIn className="h-3 font-bold w-3" />
                    Login
                  </div>
                </Link>

                <Link href="/signup" className="btn btn-primary">
                  Get Started
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg
                transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  color: scrolled ? "var(--brand-dark)" : "white",
                  backgroundColor: mobileMenuOpen
                    ? "rgba(28,77,141,0.1)"
                    : "transparent",
                }}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden
        transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white
          shadow-[var(--shadow-deep)]
          transform transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--clr-border)]">
            <div className="flex items-center gap-3">
              <Image
                src="/Assets/Logo/HISSOL_Logo.png"
                alt="HISSOL"
                width={66}
                height={56}
                className="rounded-lg h-16 w-16"
              />
              <div>
                <p className="font-semibold text-[var(--brand-dark)]">HISSOL</p>
              </div>
            </div>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="text-[var(--clr-muted)]" />
            </button>
          </div>

          {/* Links */}
          <nav className="p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg
                transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:bg-[rgba(28,77,141,0.08)]"
                style={{ color: "var(--brand-dark)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[rgba(28,77,141,0.1)]">
                    {link.icon}
                  </div>
                  {link.label}
                </div>
                <ChevronRight className="h-4 w-4 text-[var(--clr-muted)]" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="p-6 flex flex-col space-y-4">
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary w-full"
            >
              <UserPlus className="inline mr-2 h-4 w-4" />
              login
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary w-full"
            >
              <UserPlus className="inline mr-2 h-4 w-4" />
              Sign Up Free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
