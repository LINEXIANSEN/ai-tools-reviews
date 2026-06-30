import Link from "next/link";
import { articles, getFeaturedArticles, getCategories } from "@/lib/articles";
import { siteConfig } from "@/lib/config";

export default function Home() {
  const featured = getFeaturedArticles();
  const categories = getCategories();
  const recent = articles.slice(0, 12);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find the <span className="text-accent">Best AI Tools</span> for Your Needs
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
          {siteConfig.description}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat.toLowerCase()}`}
              className="px-4 py-2 rounded-full border border-border text-sm text-muted hover:border-accent hover:text-accent transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">⭐ Featured Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-xl border border-border p-6 hover:border-accent hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded">
                  {article.category}
                </span>
                <span className="text-xs text-muted">{article.readTime} min read</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted line-clamp-3">
                {article.description}
              </p>
              <div className="mt-4 text-xs text-muted">
                {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-8">📝 Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recent.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex gap-4 rounded-xl border border-border p-5 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted">{article.readTime} min</span>
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
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
    </div>
  );
}
