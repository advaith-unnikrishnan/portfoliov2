import { siteConfig as c } from "../content/site";
export default function manifest() {
  return {
    name: c.site.name,
    short_name: c.site.name,
    description: c.site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3eb",
    theme_color: "#2445d8",
    icons: [{ src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" }],
  };
}
