import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://ilya.zaytsv.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { ru: `${SITE}/`, en: `${SITE}/en/` };
  return [
    { url: `${SITE}/`, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${SITE}/en/`, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
