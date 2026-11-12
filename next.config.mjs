import withMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import { publicPages, publicAssets } from "./content/routing.mjs";
export default withMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGfm] },
})({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  skipTrailingSlashRedirect: true,
  async redirects() {
    const exceptions = [...publicPages.slice(1), ...publicAssets]
      .map((path) => path.slice(1).replaceAll(".", "\\."))
      .join("$|");
    return [
      ...publicPages.slice(1).map((path) => ({
        source: `${path}/`,
        destination: path,
        permanent: false,
      })),
      {
        source: `/:path((?!_next/|_vercel/|api(?:/|$)|${exceptions}$).+)`,
        destination: "/",
        permanent: false,
      },
    ];
  },
});
