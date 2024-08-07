import type { Metadata } from "next";

interface MetadataProps {
  metaTitle: string;
  metaDescription: string;
  pageUrl: string;
  ogImage: string;
  keywords: string[];
}

export function generateMetaTags({
  metaTitle,
  metaDescription,
  pageUrl,
  ogImage,
  keywords,
}: MetadataProps): Metadata {
  return {
    title: metaTitle,
    description: metaDescription,
    generator: "Sparkt",
    applicationName: "Sparkt",
    referrer: "no-referrer",
    keywords,
    authors: [
      { name: "Sparkt" },
      { name: "Sparkt", url: "https://sparkt.in" },
    ],
    creator: "Sparkt",
    publisher: "Sparkt",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: pageUrl,
      siteName: "Sparkt",
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
        },
        {
          url: ogImage,
          width: 1800,
          height: 1600,
          alt: metaDescription,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@sparkt",
      creator: "@sparkt",
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: ogImage,
          alt: metaTitle,
        },
      ],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}