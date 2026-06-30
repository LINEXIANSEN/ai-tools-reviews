import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { getCategories } from "@/lib/articles";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeaderNav from "@/components/HeaderNav";
import FooterContent from "@/components/FooterContent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
      style={{colorScheme: 'light dark'}}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily: "var(--font-inter), var(--font-geist-sans), system-ui, sans-serif",
        }}
      >
        <LanguageProvider>
          {/* ---- Header ---- */}
          <header className="sticky top-0 z-50 border-b border-border backdrop-blur-md" style={{backgroundColor: 'color-mix(in srgb, var(--bg) 85%, transparent)'}}>
            <div className="mx-auto max-w-[1280px] px-6 py-3.5 flex items-center justify-between">
              <a
                href="/"
                className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-white text-sm font-bold">
                  AI
                </span>
                <span>{siteConfig.name}</span>
              </a>
              <div className="flex items-center gap-2">
                <HeaderNav categories={categories} />
                <LanguageSwitcher />
              </div>
            </div>
          </header>

          {/* ---- Main ---- */}
          <main className="flex-1">{children}</main>

          {/* ---- Footer ---- */}
          <footer className="border-t border-border bg-[var(--bg-soft)]">
            <div className="mx-auto max-w-[1280px] px-6 py-16">
              <FooterContent categories={categories} />
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
