import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://semgoku.pl'),
  title: {
    default: "Specjalista Google Ads i PPC | Feed Optimization | SEMGOKU",
    template: "%s | SEMGOKU"
  },
  description: "Freelancer SEM z 10-letnim doświadczeniem. Google Ads, Meta Ads, Microsoft Advertising + optymalizacja feedów produktowych i analiza konwersji. Kampanie PPC dla e-commerce.",
  keywords: ["specjalista google ads", "ppc specialist", "sem", "feed optimization", "google shopping", "meta ads", "facebook ads", "microsoft advertising", "kampanie reklamowe", "freelancer ppc", "optymalizacja kampanii", "rzeszów", "warszawa", "kraków"],
  authors: [{ name: "Jarosław Rzepa" }],
  creator: "Jarosław Rzepa",
  publisher: "SEMGOKU",
  alternates: {
    canonical: "https://semgoku.pl",
  },
  openGraph: {
    title: "SEMGOKU - Specjalista PPC & Feed Optimization",
    description: "Freelancer SEM: Google Ads, Meta Ads, Microsoft Advertising + optymalizacja feedów produktowych. 10 lat doświadczenia w kampaniach PPC.",
    url: "https://semgoku.pl",
    siteName: "SEMGOKU",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEMGOKU - Specjalista Google Ads i Feed Optimization',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEMGOKU - Specjalista PPC & Feed Optimization",
    description: "Freelancer SEM: Google Ads, Meta Ads, Microsoft Advertising + optymalizacja feedów produktowych.",
    creator: "@semgoku",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: "your-google-verification-code", // Dodaj gdy masz
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <head>
        {/* Schema.org Person Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jarosław Rzepa",
              "alternateName": "SEMGOKU",
              "jobTitle": "Specjalista PPC & Feed Optimization",
              "description": "Freelancer SEM z 10-letnim doświadczeniem w Google Ads, Meta Ads, Microsoft Advertising i optymalizacji feedów produktowych",
              "url": "https://semgoku.pl",
              "email": "kontakt@semgoku.pl",
              "telephone": "+48669809002",
              "sameAs": [
                "https://www.linkedin.com/in/jarosław-rzepa-19a599137/"
              ],
              "knowsAbout": [
                "Google Ads",
                "Meta Ads",
                "Microsoft Advertising",
                "PPC",
                "SEM",
                "Feed Optimization",
                "Google Shopping",
                "Conversion Rate Optimization"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Specjalista PPC",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Polska"
                }
              }
            })
          }}
        />
        {/* Schema.org LocalBusiness Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "SEMGOKU - Specjalista Google Ads i PPC",
              "description": "Freelancer SEM specjalizujący się w kampaniach Google Ads, Meta Ads, Microsoft Advertising oraz optymalizacji feedów produktowych dla e-commerce",
              "url": "https://semgoku.pl",
              "telephone": "+48669809002",
              "email": "kontakt@semgoku.pl",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rzeszów",
                "addressRegion": "Podkarpackie",
                "addressCountry": "PL"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Polska"
                },
                {
                  "@type": "City",
                  "name": "Rzeszów"
                },
                {
                  "@type": "City",
                  "name": "Warszawa"
                },
                {
                  "@type": "City",
                  "name": "Kraków"
                }
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-17:00",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Usługi PPC",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Zarządzanie kampaniami Google Ads",
                      "description": "Kompleksowa obsługa kampanii Google Ads, Google Shopping, Search i Display"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Optymalizacja feedów produktowych",
                      "description": "Optymalizacja plików produktowych dla Google Shopping i Meta Catalog"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Audyt kampanii PPC",
                      "description": "Kompleksowy audyt kampanii, feedów i landing pages z rekomendacjami"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
