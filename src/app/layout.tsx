import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { getCategories } from "@/lib/articles";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeaderNav from "@/components/HeaderNav";
import FooterContent from "@/components/FooterContent";

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
  keywords: [
    "AI tools",
    "AI reviews",
    "AI writing tools",
    "ChatGPT alternatives",
    "AI for business",
    "best AI tools 2026",
    "AI工具",
    "AI评测",
    "AI写作工具",
  ],
  authors: [{ name: "AI Tools Reviews Team" }],
  creator: "AI Tools Reviews",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_CN",
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
    google: "XBeWqoWHvderTdbTL4llsdfJWqZ8sVXT6Qq6ZJp_1ow",
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
        <LanguageProvider>
          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-accent transition-colors group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  🤖
                </span>
                <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
              </Link>
              <div className="flex items-center gap-3">
                <HeaderNav categories={categories} />
                <LanguageSwitcher />
              </div>
            </div>
          </header>

          {/* Main */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-border bg-gradient-to-b from-background to-accent/5">
            <div className="mx-auto max-w-6xl px-4 py-12">
              <FooterContent categories={categories} />
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
