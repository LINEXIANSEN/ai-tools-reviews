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
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
        border border-border hover:border-accent hover:text-accent
        bg-background/50 backdrop-blur-sm transition-all duration-200
        hover:shadow-sm active:scale-95"
      aria-label={locale === "en" ? "Switch to Chinese" : "切换为英文"}
    >
      <span className="text-base">{locale === "en" ? "🇺🇸" : "🇨🇳"}</span>
      <span>{locale === "en" ? "EN" : "中文"}</span>
    </button>
  );
}
