import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { getCategories } from "@/lib/articles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["AI tools", "AI reviews", "AI writing tools", "ChatGPT alternatives", "AI for business", "best AI tools 2026"],
  authors: [{ name: "AI Tools Reviews Team" }],
  creator: "AI Tools Reviews",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@aitoolsreviews",
  },
  verification: {
    google: "google1e696030590f6d15",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = getCategories();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
              🤖 {siteConfig.name}
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {categories.slice(0, 6).map((cat) => (
                <Link
                  key={cat}
                  href={`/category/${cat.toLowerCase()}`}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3">🤖 {siteConfig.name}</h3>
                <p className="text-muted text-sm">
                  {siteConfig.description}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Categories</h4>
                <ul className="space-y-2 text-sm text-muted">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <Link href={`/category/${cat.toLowerCase()}`} className="hover:text-foreground transition-colors">
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                  <li><Link href="/affiliate-disclosure" className="hover:text-foreground transition-colors">Affiliate Disclosure</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
