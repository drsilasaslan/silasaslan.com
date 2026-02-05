import type { MetadataRoute } from "next";

const siteUrl = "https://www.silasaslan.com";

export const dynamic = "force-static";

const routes = [
  "/",
  "/impressum/",
  "/datenschutz/",
  "/hackathon/",
  "/hackathon/impressum/",
  "/hackathon/datenschutz/",
  "/hackathon/nutzungsbedingungen/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
