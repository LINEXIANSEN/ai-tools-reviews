"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { type Locale, type TranslationKey, t, formatDate } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, vars?: Record<string, string>) => string;
  formatDate: (date: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "en" || saved === "zh")) {
      setLocaleState(saved);
    } else {
      // Auto-detect from browser
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("zh")) {
        setLocaleState("zh");
      }
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale === "zh" ? "zh-CN" : "en";
  }, []);

  const translate = useCallback(
    (key: TranslationKey, vars?: Record<string, string>) => {
      return t(key, locale, vars);
    },
    [locale]
  );

  const formatDateFn = useCallback(
    (date: string) => {
      return formatDate(date, locale);
    },
    [locale]
  );

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: translate, formatDate: formatDateFn }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
