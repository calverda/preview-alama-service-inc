"use client";

import Link from "next/link";
import { useState } from "react";
import { getContent } from "@/lib/content";

const content = getContent();

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-xl font-bold text-primary">
          {content.business.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${content.business.phone.replace(/[^+\d]/g, "")}`}
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
          >
            {content.business.phone}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-600"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-white px-4 pb-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-zinc-600 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${content.business.phone.replace(/[^+\d]/g, "")}`}
            className="mt-2 block rounded-md bg-accent px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Call {content.business.phone}
          </a>
        </div>
      )}
    </header>
  );
}
