"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--ivory)]/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--charcoal)] text-xs font-bold text-[var(--warm-white)] transition-transform group-hover:scale-105">
            KJ
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-[var(--charcoal)]">
              {profile.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
              Data & BI Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-[var(--terracotta)] font-medium ${
                  isActive
                    ? "text-[var(--terracotta)] underline underline-offset-8"
                    : "text-[var(--charcoal)]/80"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="rounded-full bg-[var(--charcoal)] px-5 py-2.5 text-xs font-medium text-[var(--warm-white)] transition-all hover:bg-[var(--sage)] hover:shadow-md"
          >
            Get In Touch →
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--charcoal)] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[73px] z-40 border-b border-[var(--border)] bg-[var(--ivory)] px-6 py-6 shadow-xl md:hidden">
          <div className="flex flex-col gap-4 text-base font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[var(--border)]/50"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[var(--border)]/50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center rounded-full bg-[var(--charcoal)] px-5 py-3 text-sm text-[var(--warm-white)]"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
