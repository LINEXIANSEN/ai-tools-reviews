export type Locale = "en" | "zh";

export const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.categories": "Categories",
    "nav.about": "About",
    "nav.search": "Search articles...",

    // Hero
    "hero.badge": "2026 · Real Tests · No Bias",
    "hero.title.find": "Find the ",
    "hero.title.best": "Best AI Tools",
    "hero.title.needs": "for Your Needs",
    "hero.description":
      "Honest, in-depth reviews of the best AI tools for productivity, writing, coding, and business. Updated for 2026.",
    "hero.cta": "Explore Tools",
    "hero.cta2": "Read Guides",

    // Sections
    "section.featured": "⭐ Featured Reviews",
    "section.latest": "📝 Latest Articles",
    "section.popular": "🔥 Popular Categories",
    "section.newsletter": "📬 Stay Updated",
    "section.newsletter.desc":
      "Get the latest AI tool reviews and guides delivered to your inbox.",
    "section.newsletter.placeholder": "Enter your email",
    "section.newsletter.subscribe": "Subscribe",

    // Article meta
    "meta.readTime": "min read",
    "meta.by": "By",
    "meta.published": "Published",

    // Category page
    "category.home": "Home",
    "category.tools": "AI Tools",
    "category.reviews":
      "Honest reviews, comparisons, and guides for {category} AI tools.",

    // Footer
    "footer.description":
      "Your trusted source for AI tool reviews, comparisons, and guides. Helping you make informed decisions in the AI era.",
    "footer.categories": "Categories",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.affiliate": "Affiliate Disclosure",
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with ❤️ and AI",

    // Blog
    "blog.back": "Back to articles",
    "blog.related": "Related Articles",
    "blog.share": "Share this article",
    "blog.tableOfContents": "Table of Contents",

    // Common
    "common.readMore": "Read More",
    "common.viewAll": "View All",
    "common.loading": "Loading...",
    "common.notFound": "Page not found",
    "common.notFound.desc":
      "The page you're looking for doesn't exist or has been moved.",
    "common.backHome": "Back to Home",

    // Stats
    "stat.tools": "Tools Reviewed",
    "stat.articles": "In-Depth Articles",
    "stat.hours": "Hours of Testing",
    "stat.updates": "Updated Weekly",

    // Categories (display names)
    "cat.Writing": "Writing",
    "cat.Comparison": "Comparison",
    "cat.Money": "Money",
    "cat.Tools": "Tools",
    "cat.SEO": "SEO",
    "cat.Image": "Image",
    "cat.Case-Study": "Case Study",
    "cat.Coding": "Coding",
    "cat.Business": "Business",
    "cat.Video": "Video",
    "cat.Guide": "Guide",
    "cat.Marketing": "Marketing",
    "cat.Research": "Research",
  },
  zh: {
    // Header
    "nav.home": "首页",
    "nav.categories": "分类",
    "nav.about": "关于",
    "nav.search": "搜索文章...",

    // Hero
    "hero.badge": "2026 · 真实测试 · 无偏见",
    "hero.title.find": "找到最适合你的 ",
    "hero.title.best": "AI 工具",
    "hero.title.needs": "",
    "hero.description":
      "最真实、最深入的 AI 工具评测，涵盖生产力、写作、编程和商业领域。2026 年最新更新。",
    "hero.cta": "探索工具",
    "hero.cta2": "阅读指南",

    // Sections
    "section.featured": "⭐ 精选评测",
    "section.latest": "📝 最新文章",
    "section.popular": "🔥 热门分类",
    "section.newsletter": "📬 订阅更新",
    "section.newsletter.desc": "获取最新的 AI 工具评测和指南，直接发送到您的邮箱。",
    "section.newsletter.placeholder": "输入您的邮箱",
    "section.newsletter.subscribe": "订阅",

    // Article meta
    "meta.readTime": "分钟阅读",
    "meta.by": "作者",
    "meta.published": "发布于",

    // Category page
    "category.home": "首页",
    "category.tools": "AI 工具",
    "category.reviews": "{category} AI 工具的深度评测、对比和使用指南。",

    // Footer
    "footer.description":
      "您值得信赖的 AI 工具评测、对比和指南来源。帮助您在 AI 时代做出明智的选择。",
    "footer.categories": "工具分类",
    "footer.legal": "法律信息",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.affiliate": "联盟声明",
    "footer.rights": "版权所有。",
    "footer.madeWith": "用 ❤️ 和 AI 制作",

    // Blog
    "blog.back": "返回文章列表",
    "blog.related": "相关文章",
    "blog.share": "分享此文章",
    "blog.tableOfContents": "目录",

    // Common
    "common.readMore": "阅读更多",
    "common.viewAll": "查看全部",
    "common.loading": "加载中...",
    "common.notFound": "页面未找到",
    "common.notFound.desc": "您访问的页面不存在或已被移动。",
    "common.backHome": "返回首页",

    // Stats
    "stat.tools": "已评测工具",
    "stat.articles": "深度文章",
    "stat.hours": "测试小时数",
    "stat.updates": "每周更新",

    // Categories
    "cat.Writing": "写作",
    "cat.Comparison": "对比",
    "cat.Money": "赚钱",
    "cat.Tools": "工具",
    "cat.SEO": "SEO",
    "cat.Image": "图像",
    "cat.Case-Study": "案例研究",
    "cat.Coding": "编程",
    "cat.Business": "商业",
    "cat.Video": "视频",
    "cat.Guide": "指南",
    "cat.Marketing": "营销",
    "cat.Research": "研究",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function t(
  key: TranslationKey,
  locale: Locale,
  vars?: Record<string, string>
): string {
  let text: string = translations[locale]?.[key] || translations.en[key] || key;
  if (vars) {
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, v);
    });
  }
  return text;
}

export function formatDate(dateStr: string, locale: Locale): string {
  const date = new Date(dateStr);
  if (locale === "zh") {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  }
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
