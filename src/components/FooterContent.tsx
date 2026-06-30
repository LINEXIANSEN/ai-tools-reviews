"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/config";

export default function FooterContent({
  categories,
}: {
  categories: string[];
}) {
  const { t, locale } = useLanguage();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <span>🤖</span>
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            {t("footer.description")}
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground">
            {t("footer.categories")}
          </h4>
          <ul className="space-y-2 text-sm text-muted">
            {categories.slice(0, 8).map((cat) => (
              <li key={cat}>
                <Link
                  href={`/category/${cat.toLowerCase()}`}
                  className="hover:text-foreground transition-colors hover:pl-1 inline-block"
                >
                  {t(`cat.${cat}` as any) || cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground">
            {locale === "zh" ? "热门文章" : "Popular"}
          </h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link
                href="/blog/best-ai-writing-tools-2026"
                className="hover:text-foreground transition-colors"
              >
                {locale === "zh" ? "AI 写作工具" : "AI Writing Tools"}
              </Link>
            </li>
            <li>
              <Link
                href="/blog/chatgpt-vs-claude-vs-gemini-2026"
                className="hover:text-foreground transition-colors"
              >
                {locale === "zh" ? "AI 助手对比" : "AI Assistants Compared"}
              </Link>
            </li>
            <li>
              <Link
                href="/blog/ai-prompt-engineering-guide"
                className="hover:text-foreground transition-colors"
              >
                {locale === "zh" ? "提示词工程指南" : "Prompt Engineering"}
              </Link>
            </li>
            <li>
              <Link
                href="/blog/how-to-start-an-ai-blog"
                className="hover:text-foreground transition-colors"
              >
                {locale === "zh" ? "如何开 AI 博客" : "Start an AI Blog"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground">
            {t("footer.legal")}
          </h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                {t("footer.privacy")}
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                {t("footer.terms")}
              </Link>
            </li>
            <li>
              <Link
                href="/affiliate-disclosure"
                className="hover:text-foreground transition-colors"
              >
                {t("footer.affiliate")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. {t("footer.rights")}
        </p>
        <p>{t("footer.madeWith")}</p>
      </div>
    </>
  );
}
