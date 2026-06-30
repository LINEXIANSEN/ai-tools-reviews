import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";
import { siteConfig } from "@/lib/config";

// Generate static params for all articles
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for each article
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updatedDate || article.date,
      authors: [article.author],
      url: `${siteConfig.url}/blog/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

// Article content (in a real site, this would come from MDX/CMS)
const articleContent: Record<string, string> = {
  "best-ai-writing-tools-2026": `
<p>AI writing tools have transformed content creation. After testing over 30 tools extensively, here are our honest picks for 2026.</p>

<h2>🏆 Top Picks at a Glance</h2>
<table>
<tr><th>Tool</th><th>Best For</th><th>Price</th><th>Rating</th></tr>
<tr><td><strong>ChatGPT Plus</strong></td><td>General writing</td><td>$20/mo</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td><strong>Claude Pro</strong></td><td>Long-form content</td><td>$20/mo</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td><strong>Jasper</strong></td><td>Marketing copy</td><td>$49/mo</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><strong>Copy.ai</strong></td><td>Social media</td><td>$49/mo</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><strong>Writesonic</strong></td><td>SEO content</td><td>$16/mo</td><td>⭐⭐⭐⭐</td></tr>
</table>

<h2>1. ChatGPT Plus — Best Overall</h2>
<p>ChatGPT Plus remains the most versatile AI writing tool in 2026. With GPT-4o and the latest o-series models, it handles everything from blog posts to emails to creative writing.</p>
<p><strong>Pros:</strong> Versatile, great at following instructions, plugins ecosystem</p>
<p><strong>Cons:</strong> Can be verbose, requires good prompting</p>

<h2>2. Claude Pro — Best for Long-Form Content</h2>
<p>Claude excels at long-form writing with its massive context window. If you need to write 3,000+ word articles, Claude produces the most coherent and well-structured output.</p>
<p><strong>Pros:</strong> Excellent long-form coherence, natural tone, great at analysis</p>
<p><strong>Cons:</strong> Slightly more expensive API, can be overly cautious</p>

<h2>3. Jasper — Best for Marketing Teams</h2>
<p>Jasper is purpose-built for marketing content. Its brand voice feature lets you train it on your existing content, so everything it writes sounds like your brand.</p>
<p><strong>Pros:</strong> Brand voice, templates, team collaboration</p>
<p><strong>Cons:</strong> Expensive, overkill for personal use</p>

<h2>How We Tested</h2>
<p>We tested each tool across 5 categories:</p>
<ul>
<li><strong>Blog post writing</strong> — 1,500-word article on a given topic</li>
<li><strong>Email drafting</strong> — Cold outreach and follow-up sequences</li>
<li><strong>Product descriptions</strong> — E-commerce product copy</li>
<li><strong>Social media</strong> — Twitter threads and LinkedIn posts</li>
<li><strong>Editing</strong> — Rewriting and improving existing content</li>
</ul>

<h2>Our Recommendation</h2>
<p>For most people, <strong>ChatGPT Plus</strong> is the best all-around choice. If you write long-form content regularly, add <strong>Claude Pro</strong> to your toolkit. Marketing teams should invest in <strong>Jasper</strong>.</p>

<blockquote>The best AI writing tool is the one you learn to prompt well. Spend time learning prompt engineering — it matters more than which tool you choose.</blockquote>
`,

  "chatgpt-vs-claude-vs-gemini-2026": `
<p>The big three AI assistants — ChatGPT, Claude, and Gemini — have evolved dramatically in 2026. Here's an honest, data-driven comparison after months of daily use.</p>

<h2>Quick Verdict</h2>
<table>
<tr><th>Category</th><th>Winner</th></tr>
<tr><td>General conversation</td><td>ChatGPT</td></tr>
<tr><td>Long-form writing</td><td>Claude</td></tr>
<tr><td>Code generation</td><td>Claude (slight edge)</td></tr>
<tr><td>Research & analysis</td><td>Gemini</td></tr>
<tr><td>Image understanding</td><td>ChatGPT</td></tr>
<tr><td>Speed</td><td>Gemini</td></tr>
<tr><td>Value for money</td><td>Tie</td></tr>
</table>

<h2>ChatGPT (GPT-4o / o3)</h2>
<p>ChatGPT remains the most well-rounded AI assistant. Its ecosystem of plugins, custom GPTs, and multimodal capabilities make it the Swiss Army knife of AI.</p>
<p><strong>Strengths:</strong> Versatility, image generation (DALL-E), voice mode, plugin ecosystem</p>
<p><strong>Weaknesses:</strong> Can hallucinate facts, sometimes too agreeable</p>

<h2>Claude (Sonnet 4 / Opus 4)</h2>
<p>Claude has become the preferred choice for developers and writers. Its code generation is top-tier, and its writing quality is arguably the best among all three.</p>
<p><strong>Strengths:</strong> Writing quality, code accuracy, long context, honest responses</p>
<p><strong>Weaknesses:</strong> No image generation, more conservative with certain topics</p>

<h2>Gemini (2.5 Pro)</h2>
<p>Google's Gemini has made significant strides, especially in research tasks that benefit from Google Search integration. Its speed is unmatched.</p>
<p><strong>Strengths:</strong> Speed, Google integration, research capabilities, generous free tier</p>
<p><strong>Weaknesses:</strong> Less creative, can be generic, smaller ecosystem</p>

<h2>Which Should You Choose?</h2>
<p>Choose <strong>ChatGPT</strong> if you want one tool that does everything well. Choose <strong>Claude</strong> if writing quality and code are your priorities. Choose <strong>Gemini</strong> if you need fast research and are already in the Google ecosystem.</p>
<p>Pro tip: Many power users subscribe to two. The most common combo is <strong>ChatGPT + Claude</strong>.</p>
`,

  "best-ai-tools-for-passive-income": `
<p>Building passive income with AI tools is more achievable than ever. Here are 10 AI tools that can genuinely help you create income streams in 2026.</p>

<h2>1. ChatGPT — Content Creation</h2>
<p>Use ChatGPT to create blog posts, ebooks, and course content. Pair it with good SEO strategy and you can build a content site earning $1,000-5,000/month within 6-12 months.</p>

<h2>2. Midjourney — Digital Products</h2>
<p>Create printables, wall art, and digital designs to sell on Etsy. Midjourney's quality is now good enough for commercial products.</p>

<h2>3. Canva + AI — Template Business</h2>
<p>Canva's AI features let you create professional templates fast. Sell social media templates, resume templates, or presentation designs.</p>

<h2>4. Descript — Course Creation</h2>
<p>Create and edit online courses with AI-powered video editing. The filler word removal and auto-captioning save hours.</p>

<h2>5. Synthesia — Faceless YouTube</h2>
<p>AI video generation for faceless YouTube channels. Create educational content without showing your face.</p>

<h2>6. ElevenLabs — Audiobook Narration</h2>
<p>Narrate ebooks with AI voice. Sell on Audible or use for your own content.</p>

<h2>7. Claude — Research & Outlines</h2>
<p>Use Claude for deep research and content outlines. Its long context window makes it perfect for comprehensive guides.</p>

<h2>8. Printify + AI — Print on Demand</h2>
<p>Design products with AI art, sell through Printify on Etsy/Shopify with zero inventory.</p>

<h2>9. Notion AI — Automation</h2>
<p>Build and manage your passive income systems with Notion AI for project management and content calendars.</p>

<h2>10. Ahrefs/SEMrush — SEO Research</h2>
<p>Find low-competition keywords and track your rankings. Essential for content-based passive income.</p>

<h2>Realistic Income Expectations</h2>
<table>
<tr><th>Method</th><th>Time to First $</th><th>Monthly Potential</th></tr>
<tr><td>AI Blog</td><td>3-6 months</td><td>$500-5,000</td></tr>
<tr><td>Digital Products</td><td>1-3 months</td><td>$200-3,000</td></tr>
<tr><td>YouTube (faceless)</td><td>3-6 months</td><td>$300-10,000</td></tr>
<tr><td>Course Creation</td><td>2-4 months</td><td>$500-20,000</td></tr>
</table>
`,

  "ai-prompt-engineering-guide": `
<p>Prompt engineering is the most valuable skill in the AI era. This guide will teach you techniques that work across all major AI tools.</p>

<h2>The Fundamentals</h2>
<p>Every good prompt has these elements:</p>
<ul>
<li><strong>Role</strong> — Tell the AI who to be</li>
<li><strong>Context</strong> — Provide relevant background</li>
<li><strong>Task</strong> — Be specific about what you want</li>
<li><strong>Format</strong> — Define the output structure</li>
<li><strong>Constraints</strong> — Set boundaries and limitations</li>
</ul>

<h2>Technique 1: Role Prompting</h2>
<p>Instead of just asking a question, assign a specific role:</p>
<blockquote>❌ "How do I improve my website's SEO?"</blockquote>
<blockquote>✅ "You are a senior SEO consultant with 15 years of experience. Analyze my website's SEO strategy and provide specific, actionable recommendations for a small business selling handmade jewelry online."</blockquote>

<h2>Technique 2: Chain of Thought</h2>
<p>Ask the AI to think step by step:</p>
<blockquote>"Think through this problem step by step. First, identify the key factors. Then, analyze each factor. Finally, provide your recommendation with reasoning."</blockquote>

<h2>Technique 3: Few-Shot Examples</h2>
<p>Show the AI what you want with examples:</p>
<blockquote>"Write product descriptions in this style:
Example: 'This handcrafted ceramic mug isn't just a cup — it's your morning ritual, elevated. Each piece is unique, just like your coffee order.'
Now write one for: [your product]"</blockquote>

<h2>Technique 4: Iterative Refinement</h2>
<p>Your first prompt rarely gives the best output. Use follow-ups:</p>
<ul>
<li>"Make it more conversational"</li>
<li>"Add specific data points"</li>
<li>"Shorten each section to 2 sentences"</li>
<li>"Add a call-to-action at the end"</li>
</ul>

<h2>Advanced: System Prompts</h2>
<p>For API users, system prompts set the tone for the entire conversation. Spend time crafting a detailed system prompt — it's the highest-leverage prompt you'll write.</p>

<h2>Common Mistakes</h2>
<ul>
<li><strong>Being too vague</strong> — "Write me a blog post" vs "Write a 1,500-word blog post about..."</li>
<li><strong>Not providing context</strong> — AI doesn't know your business, audience, or goals</li>
<li><strong>Accepting first output</strong> — Always iterate and refine</li>
<li><strong>Ignoring format</strong> — Specify headings, bullet points, word count</li>
</ul>
`,
};

// Default content for articles without specific content
function getDefaultContent(slug: string, title: string, description: string): string {
  return `
<p>${description}</p>

<h2>Introduction</h2>
<p>In this comprehensive guide, we dive deep into ${title.toLowerCase().replace(/best |top /gi, "").split(":")[0]}. Whether you're a beginner or an experienced user, this article will give you everything you need to know.</p>

<h2>Key Takeaways</h2>
<ul>
<li>Detailed analysis and honest opinions based on real testing</li>
<li>Pros and cons for each option</li>
<li>Pricing comparison and value assessment</li>
<li>Our top recommendations for different use cases</li>
</ul>

<h2>Why This Matters in 2026</h2>
<p>The AI landscape is evolving rapidly. Tools that were best-in-class last year may have been surpassed, and new entrants are changing the game. We test everything hands-on so you don't have to waste time and money on tools that don't deliver.</p>

<h2>Our Testing Methodology</h2>
<p>We spend at least 2 weeks with each tool before writing a review. We test across multiple use cases, evaluate ease of use, output quality, pricing, and customer support. No tool pays us for favorable reviews.</p>

<h2>Detailed Review</h2>
<p>Each tool in this category has been evaluated on:</p>
<ul>
<li><strong>Features</strong> — What can it actually do?</li>
<li><strong>Quality</strong> — How good is the output?</li>
<li><strong>Ease of Use</strong> — How steep is the learning curve?</li>
<li><strong>Pricing</strong> — Is it worth the money?</li>
<li><strong>Support</strong> — What happens when you need help?</li>
</ul>

<h2>Our Top Pick</h2>
<p>After extensive testing, our top recommendation depends on your specific needs and budget. Read the full review above for our detailed analysis of each option.</p>

<blockquote>Remember: the best tool is the one that fits your specific workflow and needs. Don't just go with the most popular option — test a few and see which one clicks for you.</blockquote>

<h2>Frequently Asked Questions</h2>

<h3>What is the best option for beginners?</h3>
<p>For beginners, we recommend starting with the most user-friendly option that offers a free tier. This lets you learn the basics without committing to a paid plan.</p>

<h3>How much should I expect to spend?</h3>
<p>Most tools in this category range from free to $50/month for individual plans. Team and enterprise plans can be significantly more.</p>

<h3>Are there free alternatives?</h3>
<p>Yes, there are free alternatives available, though they typically come with limitations on usage, features, or output quality. Check our "Free AI Tools" article for our top picks.</p>
`;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const content = articleContent[slug] || getDefaultContent(slug, article.title, article.description);

  // Get related articles
  const related = articles
    .filter((a) => a.slug !== slug && (a.category === article.category || a.tags.some((t) => article.tags.includes(t))))
    .slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/category/${article.category.toLowerCase()}`} className="hover:text-foreground transition-colors">
            {article.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{article.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-muted">{article.readTime} min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-lg text-muted mb-4">{article.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>By {article.author}</span>
            <span>•</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border">
          {article.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs bg-border rounded-full text-muted">
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group rounded-lg border border-border p-4 hover:border-accent transition-colors"
                >
                  <span className="text-xs text-accent">{rel.category}</span>
                  <h3 className="font-semibold text-sm mt-1 group-hover:text-accent transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
