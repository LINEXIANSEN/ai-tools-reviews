"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { type Article } from "@/lib/types";

export default function BlogPostClient({
  article,
  content,
  related,
}: {
  article: Article;
  content: string;
  related: Article[];
}) {
  const { t, formatDate } = useLanguage();

  return (
    <article className="mx-auto max-w-[680px] px-6 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-[var(--muted)] mb-10">
        <Link href="/" className="hover:text-accent transition-colors duration-150">
          {t("category.home")}
        </Link>
        <span>/</span>
        <Link
          href={`/category/${article.category.toLowerCase()}`}
          className="hover:text-accent transition-colors duration-150"
        >
          {t(`cat.${article.category}` as any) || article.category}
        </Link>
        <span>/</span>
        <span className="text-[var(--ink-soft)] truncate max-w-[200px]">{article.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[var(--accent-soft)] text-accent">
            {t(`cat.${article.category}` as any) || article.category}
          </span>
          <span className="text-xs text-[var(--muted)]">
            {article.readTime} {t("meta.readTime")}
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-semibold leading-[1.15] tracking-[-.02em] mb-5 text-ink"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {article.title}
        </h1>
        <p className="text-lg text-[var(--ink-soft)] leading-relaxed mb-6">
          {article.description}
        </p>
        <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
          <span className="font-medium text-[var(--ink-soft)]">
            {article.author}
          </span>
          <span className="w-1 h-1 rounded-full bg-[var(--muted-soft)]" />
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
      </header>

      {/* Content */}
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />

      {/* Share + Tags */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-sm font-medium text-[var(--ink-soft)]">{t("blog.share")}:</span>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://ai-tools-reviews.vercel.app/blog/${article.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg border border-border text-[var(--ink-soft)]
              hover:border-accent hover:text-accent transition-colors duration-150"
          >
            Twitter
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-full bg-[var(--bg-quiet)] text-[var(--ink-soft)]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16 pt-8 border-t border-border">
          <h2
            className="text-xl font-semibold tracking-tight mb-6 text-ink"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {t("blog.related")}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group flex items-start gap-4 rounded-xl border border-border bg-white p-5
                  hover:shadow-[var(--shadow-md)] hover:border-[var(--muted-soft)]
                  transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-accent">
                    {t(`cat.${rel.category}` as any) || rel.category}
                  </span>
                  <h3
                    className="font-semibold text-[15px] leading-snug tracking-tight mt-1
                      group-hover:text-accent transition-colors duration-150 line-clamp-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {rel.title}
                  </h3>
                </div>
                <svg className="w-4 h-4 mt-1 text-[var(--muted)] group-hover:text-accent transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
