"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { type Article } from "@/lib/types";

export default function CategoryPageClient({
  cat,
  categoryArticles,
}: {
  cat: string;
  categoryArticles: Article[];
}) {
  const { t, formatDate } = useLanguage();

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-16">
      <header className="mb-12">
        <nav className="flex items-center gap-1.5 text-sm text-[var(--muted)] mb-6">
          <Link href="/" className="hover:text-accent transition-colors duration-150">
            {t("category.home")}
          </Link>
          <span>/</span>
          <span className="text-[var(--ink-soft)]">
            {t(`cat.${cat}` as any) || cat}
          </span>
        </nav>
        <h1
          className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-ink"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {t(`cat.${cat}` as any) || cat} {t("category.tools")}
        </h1>
        <p className="text-lg text-[var(--ink-soft)] leading-relaxed">
          {t("category.reviews", {
            category: t(`cat.${cat}` as any) || cat,
          })}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categoryArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-white p-6
              hover:shadow-[var(--shadow-lg)] hover:border-[var(--muted-soft)]
              transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[var(--accent-soft)] text-accent">
                {t(`cat.${article.category}` as any) || article.category}
              </span>
              <span className="text-xs text-[var(--muted)]">
                {article.readTime} {t("meta.readTime")}
              </span>
            </div>
            <h2
              className="text-lg font-semibold leading-snug tracking-tight mb-2 text-ink
                group-hover:text-accent transition-colors duration-150 line-clamp-2"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {article.title}
            </h2>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed line-clamp-3 flex-1">
              {article.description}
            </p>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs text-[var(--muted)]">
                {formatDate(article.date)}
              </span>
              <span className="text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center gap-1">
                {t("common.readMore")}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
