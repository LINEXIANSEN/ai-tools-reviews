import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategories, getArticlesByCategory, categorySlug, getCategoryBySlug } from "@/lib/articles";
import { siteConfig } from "@/lib/config";
import CategoryPageClient from "@/components/CategoryPageClient";

export function generateStaticParams() {
  return getCategories().map((cat) => ({
    category: categorySlug(cat),
  }));
}

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};

  return {
    title: `${cat} AI Tools - Reviews & Guides`,
    description: `Best AI tools for ${cat.toLowerCase()}. Honest reviews, comparisons, and guides to help you choose the right tool.`,
    openGraph: {
      title: `${cat} AI Tools | ${siteConfig.name}`,
      description: `Best AI tools for ${cat.toLowerCase()}. Honest reviews and guides.`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const categoryArticles = getArticlesByCategory(cat);

  return <CategoryPageClient cat={cat} categoryArticles={categoryArticles} />;
}
