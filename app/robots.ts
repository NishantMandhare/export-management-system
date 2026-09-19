import type { MetadataRoute } from "next";

const baseUrl = "https://exportms.com"; // प्रत्यक्ष डोमेन घेतल्यावर हे बदल

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/dashboard/", "/login", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}