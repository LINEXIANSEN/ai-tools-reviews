import { MetadataRoute } from "next";
import { articles, getCategories, categorySlug } from "@/lib/articles";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  const categoryEntries: MetadataRoute.Sitemap = getCategories().map((cat) => ({
    url: `${siteConfig.url}/category/${categorySlug(cat)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/blog/${article.slug}`,
    lastModified: new Date(article.updatedDate || article.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const legalEntries: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/privacy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${siteConfig.url}/terms`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${siteConfig.url}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  return [...baseEntries, ...categoryEntries, ...articleEntries, ...legalEntries];
}
