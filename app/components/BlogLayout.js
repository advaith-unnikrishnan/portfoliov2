import SiteFrame from "../../components/home/SiteFrame";

export default function BlogLayout({ children }) {
  return (
    <SiteFrame current="/blog">
      <div className="portfolio-blog">{children}</div>
    </SiteFrame>
  );
}
