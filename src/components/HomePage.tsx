"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { type Article } from "@/lib/types";

export default function HomePage({
  featured,
  categories,
  recent,
}: {
  featured: Article[];
  categories: string[];
  recent: Article[];
}) {
  const { t, formatDate, locale } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-3xl" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-sm text-accent mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          {locale === "zh" ? "2026 年最新更新" : "Updated for 2026"}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
          {t("hero.title.find")}{" "}
          <span className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t("hero.title.best")}
          </span>
          {t("hero.title.needs") && (
            <>
              <br />
              {t("hero.title.needs")}
            </>
          )}
        </h1>

        <p className="text-lg text-muted max-w-2xl mx-auto mb-8 animate-slide-up-delay">
          {t("hero.description")}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up-delay2">
          <Link
            href="#featured"
            className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-95"
          >
            {t("hero.cta")} →
          </Link>
          <Link
            href="/blog/how-to-start-an-ai-blog"
            className="px-6 py-3 rounded-full border border-border font-medium text-muted hover:border-accent hover:text-accent transition-all active:scale-95"
          >
            {t("hero.cta2")}
          </Link>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat.toLowerCase()}`}
              className="px-3 py-1.5 rounded-full border border-border text-xs text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
            >
              {t(`cat.${cat}` as any) || cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          { key: "stat.tools", value: "50+", icon: "🛠️" },
          { key: "stat.articles", value: "30+", icon: "📚" },
          { key: "stat.hours", value: "200+", icon: "⏱️" },
          { key: "stat.updates", value: "✦", icon: "🔄" },
        ].map((stat) => (
          <div
            key={stat.key}
            className="text-center p-6 rounded-xl border border-border bg-gradient-to-b from-accent/5 to-transparent hover:border-accent/50 transition-all group"
          >
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-muted">{t(stat.key as any)}</div>
          </div>
        ))}
      </section>

      {/* Featured */}
      <section id="featured" className="mb-20 scroll-mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("section.featured")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-xl border border-border p-6 hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-accent/[0.02] to-transparent"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                  {t(`cat.${article.category}` as any) || article.category}
                </span>
                <span className="text-xs text-muted">
                  {article.readTime} {t("meta.readTime")}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {article.title}
              </h3>
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
      </section>

      {/* All Articles */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("section.latest")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recent.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex gap-4 rounded-xl border border-border p-5 hover:border-accent hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                    {t(`cat.${article.category}` as any) || article.category}
                  </span>
                  <span className="text-xs text-muted">
                    {article.readTime} {t("meta.readTime")}
                  </span>
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors line-clamp-1">
                  {article.title}
                </h3>
                <p className="text-sm text-muted line-clamp-2">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="text-center p-8 md:p-12 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 via-purple-500/5 to-pink-500/5">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          {t("section.newsletter")}
        </h2>
        <p className="text-muted mb-6 max-w-md mx-auto">
          {t("section.newsletter.desc")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder={t("section.newsletter.placeholder")}
            className="flex-1 px-4 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
          />
          <button className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-95 whitespace-nowrap">
            {t("section.newsletter.subscribe")}
          </button>
        </div>
      </section>
    </div>
  );
}
