"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFoundClient() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-[680px] px-6 py-32 text-center">
      <div
        className="text-7xl font-bold tracking-tighter text-[var(--muted-soft)] mb-4"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        404
      </div>
      <h1
        className="text-2xl font-semibold tracking-tight mb-3 text-[var(--ink)]"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {t("common.notFound")}
      </h1>
      <p className="text-[var(--ink-soft)] mb-8">{t("common.notFound.desc")}</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-sm font-medium
          hover:bg-[var(--accent-hover)] shadow-md
          transition-all duration-150 active:scale-[.97]"
      >
        {t("common.backHome")}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  );
}
