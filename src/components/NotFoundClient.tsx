"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFoundClient() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center">
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="text-4xl font-bold mb-4">{t("common.notFound")}</h1>
      <p className="text-lg text-muted mb-8">{t("common.notFound.desc")}</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-95 inline-block"
      >
        {t("common.backHome")} →
      </Link>
    </div>
  );
}
