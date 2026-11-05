import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { getLocalBusinessSchema } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MS Drywall Finish | Premier Drywall, Taping & Level 5 Finishing Toronto & GTA",
    template: "%s | MS Drywall Finish",
  },
  description: siteConfig.description,
  keywords: [
    "drywall contractor Toronto",
    "Level 5 drywall finish GTA",
    "drywall taping Oakville",
    "drywall installation Vaughan",
    "cove lighting drywall ceilings",
    "high-end drywall finishes Ontario",
    "commercial drywall Toronto",
    "residential drywall contractor",
  ],
  authors: [
    { name: siteConfig.developer.credit, url: siteConfig.url },
    { name: siteConfig.name, url: siteConfig.url },
  ],
  creator: siteConfig.developer.credit,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    title: "MS Drywall Finish | Premier Drywall & Architectural Finishing Toronto",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "MS Drywall Finish Architectural Cove Ceiling in Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MS Drywall Finish | Premier Drywall & Finishing Toronto",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-black text-neutral-200 font-sans antialiased min-h-screen relative">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

