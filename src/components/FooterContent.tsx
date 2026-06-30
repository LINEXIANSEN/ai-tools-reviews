"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/config";

export default function FooterContent({ categories }: { categories: string[] }) {
  const { t, locale } = useLanguage();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <a href="/" className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent text-white text-xs font-bold">
              AI
            </span>
            <span
              className="font-semibold tracking-tight text-ink"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {siteConfig.name}
            </span>
          </a>
          <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
            {t("footer.description")}
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-ink tracking-tight uppercase">
            {t("footer.categories")}
          </h4>
          <ul className="space-y-2.5 text-sm text-[var(--ink-soft)]">
            {categories.slice(0, 8).map((cat) => (
              <li key={cat}>
                <Link
                  href={`/category/${cat.toLowerCase()}`}
                  className="hover:text-accent transition-colors duration-150"
                >
                  {t(`cat.${cat}` as any) || cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-ink tracking-tight uppercase">
            {locale === "zh" ? "热门文章" : "Popular"}
          </h4>
          <ul className="space-y-2.5 text-sm text-[var(--ink-soft)]">
            <li>
              <Link href="/blog/best-ai-writing-tools-2026" className="hover:text-accent transition-colors duration-150">
                {locale === "zh" ? "AI 写作工具" : "AI Writing Tools"}
              </Link>
            </li>
            <li>
              <Link href="/blog/chatgpt-vs-claude-vs-gemini-2026" className="hover:text-accent transition-colors duration-150">
                {locale === "zh" ? "AI 助手对比" : "AI Assistants"}
              </Link>
            </li>
            <li>
              <Link href="/blog/ai-prompt-engineering-guide" className="hover:text-accent transition-colors duration-150">
                {locale === "zh" ? "提示词工程" : "Prompt Engineering"}
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-start-an-ai-blog" className="hover:text-accent transition-colors duration-150">
                {locale === "zh" ? "开 AI 博客" : "Start an AI Blog"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-ink tracking-tight uppercase">
            {t("footer.legal")}
          </h4>
          <ul className="space-y-2.5 text-sm text-[var(--ink-soft)]">
            <li><Link href="/privacy" className="hover:text-accent transition-colors duration-150">{t("footer.privacy")}</Link></li>
            <li><Link href="/terms" className="hover:text-accent transition-colors duration-150">{t("footer.terms")}</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-accent transition-colors duration-150">{t("footer.affiliate")}</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. {t("footer.rights")}
        </p>
        <p>{t("footer.madeWith")}</p>
      </div>
    </>
  );
}
