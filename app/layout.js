import "./globals.css";
import SiteAnalytics from "../components/home/SiteAnalytics";
import { siteConfig as c } from "../content/site";
export const metadata = {
  metadataBase: new URL(c.site.url),
  title: c.site.title,
  description: c.site.description,
  authors: [{ name: c.profile.name }],
  creator: c.profile.name,
  openGraph: {
    title: c.site.title,
    description: c.site.description,
    url: "/",
    siteName: c.site.name,
    type: "website",
    locale: "en_IN",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: c.site.title },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: c.site.title,
    description: c.site.description,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  formatDetection: { email: false, address: false, telephone: false },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="light"||t==="dark"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}catch(e){document.documentElement.dataset.theme=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
