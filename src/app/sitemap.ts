import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const DOMAIN = "eternal-ink.app";
  const BASE_URL = `https://${DOMAIN}`;
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date("2024-11-02"),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/home`,
      lastModified: new Date("2024-11-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/engrave`,
      lastModified: new Date("2024-11-02"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/retrieve`,
      lastModified: new Date("2024-11-02"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
