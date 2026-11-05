import { siteConfig } from "@/config/site";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    telephone: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.province,
      addressCountry: siteConfig.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.6532",
      longitude: "-79.3832",
    },
    areaServed: siteConfig.location.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    sameAs: [siteConfig.contact.instagramUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Drywall & Architectural Finishing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drywall Installation & Boarding",
            description: "High-end residential and commercial drywall hanging in Toronto.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Master Taping & Mudding",
            description: "Multi-coat taping delivering seamless, flat joints.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Level 5 Mirror Finish Skim Coating",
            description: "Highest architectural standard for drywall finishes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Architectural Cove & LED Ceilings",
            description: "Custom bulkheads, coffered ceilings and perimeter LED channels.",
          },
        },
      ],
    },
  };
}

