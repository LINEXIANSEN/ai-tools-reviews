"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function HeaderNav({ categories }: { categories: string[] }) {
  const { t, locale } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6 text-sm">
        {categories.slice(0, 6).map((cat) => (
          <Link
            key={cat}
            href={`/category/${cat.toLowerCase()}`}
            className="text-muted hover:text-foreground transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all"
          >
            {t(`cat.${cat}` as any) || cat}
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden">
          <nav className="flex flex-col p-4 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                className="text-muted hover:text-foreground transition-colors py-2"
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
