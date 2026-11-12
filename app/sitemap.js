import { siteConfig } from "../content/site";
import { publicPages } from "../content/routing.mjs";

export default function sitemap() {
  return publicPages.map((path) => ({
    url: new URL(path, siteConfig.site.url).href,
  }));
}
