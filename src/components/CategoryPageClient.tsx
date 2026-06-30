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
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-12">
        <nav className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link
            href="/"
            className="hover:text-foreground transition-colors"
          >
            {t("category.home")}
          </Link>
          <span>/</span>
          <span className="text-foreground">
            {t(`cat.${cat}` as any) || cat}
          </span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          {t(`cat.${cat}` as any) || cat} {t("category.tools")}
        </h1>
        <p className="text-lg text-muted">
          {t("category.reviews", {
            category: t(`cat.${cat}` as any) || cat,
          })}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categoryArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group rounded-xl border border-border p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                {t(`cat.${article.category}` as any) || article.category}
              </span>
              <span className="text-xs text-muted">
                {article.readTime} {t("meta.readTime")}
              </span>
            </div>
            <h2 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
              {article.title}
            </h2>
            <p className="text-sm text-muted line-clamp-3">
              {article.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-muted">
                {formatDate(article.date)}
              </span>
              <span className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                {t("common.readMore")} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
