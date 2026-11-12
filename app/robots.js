import { siteConfig } from "../content/site";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
    sitemap: `${siteConfig.site.url}/sitemap.xml`,
    host: siteConfig.site.url,
  };
}
