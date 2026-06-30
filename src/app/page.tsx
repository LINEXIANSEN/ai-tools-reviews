import { articles, getFeaturedArticles, getCategories } from "@/lib/articles";
import HomePage from "@/components/HomePage";

export default function Home() {
  const featured = getFeaturedArticles();
  const categories = getCategories();
  const recent = articles.slice(0, 12);

  return <HomePage featured={featured} categories={categories} recent={recent} />;
}
