import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const content = getContent();

export const metadata: Metadata = {
  title: content.seo.siteTitle,
  description: content.seo.siteDescription,
  keywords: content.seo.keywords.join(", "),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={
        {
          "--site-primary": content.design.primaryColor,
          "--site-accent": content.design.accentColor,
        } as React.CSSProperties
      }
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": content.seo.jsonLd?.type ?? "LocalBusiness",
              name: content.seo.jsonLd?.name ?? content.business.name,
              telephone: content.seo.jsonLd?.telephone ?? content.business.phone,
              address: content.seo.jsonLd?.address
                ? {
                    "@type": "PostalAddress",
                    streetAddress: content.seo.jsonLd.address.streetAddress,
                    addressLocality: content.seo.jsonLd.address.city,
                    addressRegion: content.seo.jsonLd.address.state,
                    postalCode: content.seo.jsonLd.address.zip,
                  }
                : undefined,
              geo: content.seo.jsonLd?.geo
                ? {
                    "@type": "GeoCoordinates",
                    latitude: content.seo.jsonLd.geo.latitude,
                    longitude: content.seo.jsonLd.geo.longitude,
                  }
                : undefined,
              openingHoursSpecification: content.seo.jsonLd?.openingHours,
              aggregateRating: content.seo.jsonLd?.aggregateRating
                ? {
                    "@type": "AggregateRating",
                    ratingValue: content.seo.jsonLd.aggregateRating.ratingValue,
                    reviewCount: content.seo.jsonLd.aggregateRating.reviewCount,
                  }
                : undefined,
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-zinc-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
