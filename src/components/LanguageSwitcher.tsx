"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useCallback } from "react";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggle = useCallback(() => {
    setLocale(locale === "en" ? "zh" : "en");
  }, [locale, setLocale]);

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
        border border-border text-[var(--ink-soft)]
        hover:text-ink hover:bg-[var(--bg-soft)]
        transition-all duration-150 active:scale-[.97]"
      aria-label={locale === "en" ? "Switch to Chinese" : "切换为英文"}
    >
      <span className="text-sm">{locale === "en" ? "🇺🇸" : "🇨🇳"}</span>
      <span>{locale === "en" ? "EN" : "中文"}</span>
    </button>
  );
}
