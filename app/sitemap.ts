import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE_URL = "https://josephinethetutor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/subjects",
    "/rates",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => {
    const date = post.date ? new Date(`${post.date}T00:00:00`) : now;
    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: Number.isNaN(date.getTime()) ? now : date,
      changeFrequency: "yearly",
      priority: 0.6,
    };
  });

  return [...staticPages, ...posts];
}
