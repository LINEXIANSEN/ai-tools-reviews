"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function HeaderNav({ categories }: { categories: string[] }) {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1 text-sm">
        {categories.slice(0, 6).map((cat) => (
          <Link
            key={cat}
            href={`/category/${cat.toLowerCase()}`}
            className="px-3 py-1.5 rounded-lg text-[var(--ink-soft)] hover:text-ink hover:bg-[var(--bg-soft)] transition-colors duration-150"
          >
            {t(`cat.${cat}` as any) || cat}
          </Link>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2 rounded-lg text-[var(--ink-soft)] hover:text-ink hover:bg-[var(--bg-soft)] transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 backdrop-blur-md border-b border-border md:hidden shadow-lg" style={{backgroundColor: 'color-mix(in srgb, var(--bg) 95%, transparent)'}}>
          <nav className="flex flex-col p-4 gap-1">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                className="px-4 py-2.5 rounded-lg text-[var(--ink-soft)] hover:text-ink hover:bg-[var(--bg-soft)] transition-colors text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {t(`cat.${cat}` as any) || cat}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
