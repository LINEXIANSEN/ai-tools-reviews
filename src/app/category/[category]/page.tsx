import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getCategories, getArticlesByCategory } from "@/lib/articles";
import { siteConfig } from "@/lib/config";

export function generateStaticParams() {
  return getCategories().map((cat) => ({
    category: cat.toLowerCase(),
  }));
}

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategories().find((c) => c.toLowerCase() === category);
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
  const cat = getCategories().find((c) => c.toLowerCase() === category);
  if (!cat) notFound();

  const categoryArticles = getArticlesByCategory(cat);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-12">
        <nav className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">{cat}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          {cat} AI Tools
        </h1>
        <p className="text-lg text-muted">
          Honest reviews, comparisons, and guides for {cat.toLowerCase()} AI tools.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categoryArticles.map((article) => (
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
            <h2 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
              {article.title}
            </h2>
            <p className="text-sm text-muted line-clamp-3">
              {article.description}
            </p>
            <div className="mt-4 text-xs text-muted">
              {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
