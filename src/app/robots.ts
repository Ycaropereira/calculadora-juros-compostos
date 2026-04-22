import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://calculadora-juros-compostos-vert.vercel.app/sitemap.xml",
  };
}
