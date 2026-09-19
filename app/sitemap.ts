import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const baseUrl = "https://exportms.com"; // प्रत्यक्ष डोमेन घेतल्यावर हे बदल

const staticRoutes = [
    "",
    "/about",
    "/features",
    "/solutions",
    "/industries",
    "/global-markets",
    "/products",
    "/pricing",
    "/resources/blog",
    "/resources/export-guides",
    "/resources/faq",
    "/resources/glossary",
    "/case-studies",
    "/contact",
    "/security",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.7,
    }));

    const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/resources/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticEntries, ...blogEntries];
}
