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
  const { t, formatDate } = useLanguage();

  return (
    <div className="mx-auto max-w-[1280px] px-6">
      {/* ============================================================
          HERO — large geometric headline + gradient accent
          ============================================================ */}
      <section className="text-center pt-20 pb-24 relative">
        {/* Soft radial glow behind hero */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(4,120,87,.08)_0%,transparent_70%)]" />
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-white text-xs text-[var(--ink-soft)] mb-8 shadow-[var(--shadow-sm)] animate-fade-in">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-[ping_1.5s_ease-in-out_infinite]" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          {t("hero.badge") || "2026 · Real Tests · No Bias"}
        </div>

        {/* Headline — Space Grotesk display, tight tracking */}
        <h1
          className="text-5xl sm:text-6xl md:text-[4.5rem] font-semibold leading-[1.05] tracking-[-.03em] mb-6 animate-slide-up"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {t("hero.title.find")}
          <span className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
            {t("hero.title.best")}
          </span>
          {t("hero.title.needs") && (
            <>
              <br className="hidden sm:block" />
              {t("hero.title.needs")}
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[var(--ink-soft)] max-w-[580px] mx-auto mb-10 animate-slide-up-d1 leading-relaxed">
          {t("hero.description")}
        </p>

        {/* CTAs — pill buttons, Upstash style */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 animate-slide-up-d2">
          <Link
            href="#featured"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-sm font-medium
              hover:bg-[var(--accent-hover)] shadow-md hover:shadow-lg
              transition-all duration-150 active:scale-[.97]"
          >
            {t("hero.cta")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/blog/how-to-start-an-ai-blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-[var(--ink-soft)]
              hover:border-accent hover:text-accent
              transition-all duration-150 active:scale-[.97]"
          >
            {t("hero.cta2")}
          </Link>
        </div>

        {/* Category chips — horizontal scroll row like Upstash product tabs */}
        <div className="flex flex-wrap justify-center gap-2 animate-slide-up-d3">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat.toLowerCase()}`}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-border text-[var(--ink-soft)]
                hover:border-accent hover:text-accent hover:bg-[var(--accent-soft)]
                transition-all duration-150"
            >
              {t(`cat.${cat}` as any) || cat}
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================
          STATS — trust indicators, Upstash-style counters
          ============================================================ */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
        {[
          { key: "stat.tools",   value: "50+", icon: "🛠️" },
          { key: "stat.articles", value: "30+", icon: "📄" },
          { key: "stat.hours",   value: "200+",icon: "⏱️" },
          { key: "stat.updates", value: "✦",   icon: "🔄" },
        ].map((stat) => (
          <div
            key={stat.key}
            className="text-center p-6 rounded-xl border border-border bg-white
              hover:shadow-[var(--shadow-md)] transition-shadow duration-200"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div
              className="text-2xl font-semibold tracking-tight mb-1 text-ink"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {stat.value}
            </div>
            <div className="text-xs text-[var(--muted)]">{t(stat.key as any)}</div>
          </div>
        ))}
      </section>

      {/* ============================================================
          FEATURED — card grid, clean Upstash-style cards
          ============================================================ */}
      <section id="featured" className="mb-24 scroll-mt-20">
        <h2
          className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 text-ink"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {t("section.featured")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((article) => (
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
              <h3
                className="text-lg font-semibold leading-snug tracking-tight mb-2 text-ink
                  group-hover:text-accent transition-colors duration-150 line-clamp-2"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {article.title}
              </h3>
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
      </section>

      {/* ============================================================
          LATEST ARTICLES — two-column list cards
          ============================================================ */}
      <section className="mb-24">
        <h2
          className="text-2xl md:text-3xl font-semibold tracking-tight mb-10 text-ink"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {t("section.latest")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recent.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex gap-4 rounded-xl border border-border bg-white p-5
                hover:shadow-[var(--shadow-md)] hover:border-[var(--muted-soft)]
                transition-all duration-200"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-[var(--accent-soft)] text-accent">
                    {t(`cat.${article.category}` as any) || article.category}
                  </span>
                  <span className="text-[11px] text-[var(--muted)]">
                    {article.readTime} {t("meta.readTime")}
                  </span>
                </div>
                <h3
                  className="font-semibold text-[15px] leading-snug tracking-tight mb-1
                    group-hover:text-accent transition-colors duration-150 line-clamp-1"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--ink-soft)] line-clamp-2 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================
          NEWSLETTER — Upstash-style minimal CTA section
          ============================================================ */}
      <section className="mb-24">
        <div className="rounded-2xl border border-border bg-[var(--bg-soft)] p-10 md:p-14 text-center">
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-ink"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {t("section.newsletter")}
          </h2>
          <p className="text-[var(--ink-soft)] mb-8 max-w-md mx-auto leading-relaxed">
            {t("section.newsletter.desc")}
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={t("section.newsletter.placeholder")}
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-white text-ink text-sm
                placeholder:text-[var(--muted)] outline-none
                focus:border-accent focus:ring-2 focus:ring-accent/10
                transition-all duration-150"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-accent text-white text-sm font-medium
                hover:bg-[var(--accent-hover)] shadow-sm hover:shadow-md
                transition-all duration-150 active:scale-[.97] whitespace-nowrap"
            >
              {t("section.newsletter.subscribe")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
