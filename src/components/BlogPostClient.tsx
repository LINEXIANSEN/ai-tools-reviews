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
  const { t, formatDate, locale } = useLanguage();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          {t("category.home")}
        </Link>
        <span>/</span>
        <Link
          href={`/category/${article.category.toLowerCase()}`}
          className="hover:text-foreground transition-colors"
        >
          {t(`cat.${article.category}` as any) || article.category}
        </Link>
        <span>/</span>
        <span className="text-foreground">{article.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
            {t(`cat.${article.category}` as any) || article.category}
          </span>
          <span className="text-sm text-muted">
            {article.readTime} {t("meta.readTime")}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          {article.title}
        </h1>
        <p className="text-lg text-muted mb-4">{article.description}</p>
        <div className="flex items-center gap-4 text-sm text-muted">
          <span>
            {t("meta.by")} {article.author}
          </span>
          <span>•</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
      </header>

      {/* Content */}
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />

      {/* Share */}
      <div className="flex items-center gap-3 mt-10 pt-8 border-t border-border">
        <span className="text-sm text-muted">{t("blog.share")}:</span>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://ai-tools-reviews.vercel.app/blog/${article.slug}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-xs rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
        >
          Twitter
        </a>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs bg-border rounded-full text-muted hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="mt-12 pt-8 border-t border-border">
          <h2 className="text-xl font-bold mb-6">{t("blog.related")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group rounded-lg border border-border p-4 hover:border-accent hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <span className="text-xs text-accent">
                  {t(`cat.${rel.category}` as any) || rel.category}
                </span>
                <h3 className="font-semibold text-sm mt-1 group-hover:text-accent transition-colors line-clamp-2">
                  {rel.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
