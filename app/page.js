import { ArrowUpRight } from "lucide-react";
import SiteFrame from "../components/home/SiteFrame";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "../components/home/TrackedLink";
import { siteConfig as c, socialLinks } from "../content/site";
export const metadata = { alternates: { canonical: "/" } };

export default function Page() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: c.profile.name,
    url: c.site.url,
    image: `${c.site.url}${c.profile.portrait}`,
    jobTitle: "Early-stage investor",
    affiliation: {
      "@type": "Organization",
      name: c.investing.organization,
      url: c.investing.organizationUrl,
    },
    sameAs: socialLinks.map((s) => s.href),
  };
  return (
    <>
      <SiteFrame current="/" home>
        <section className="portfolio-intro">
          <h1>Hey, I’m Advaith.</h1>
          <p>I invest in early-stage startups at Y0.</p>
          <div className="home-actions">
            <TrackedLink
              className="explore-link"
              href={c.investing.organizationUrl}
              id="explore_y0"
              kind="outbound"
            >
              explore y0 <ArrowUpRight size={17} aria-hidden="true" />
            </TrackedLink>
            <TrackedLink
              className="explore-link secondary-funding"
              href={c.investing.applicationUrl}
              id="home_fund_application"
              kind="application"
            >
              apply for funding <ArrowUpRight size={17} aria-hidden="true" />
            </TrackedLink>
          </div>
          <section className="home-writing" aria-labelledby="writing-title">
            <h2 id="writing-title">writing</h2>
            <Link href="/blog">blog</Link>
            <a href="https://advaithu.substack.com/">
              newsletter <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </section>
        </section>
        <figure className="pencil-portrait">
          <Image
            src={c.profile.portrait}
            alt={c.profile.portraitAlt}
            width={960}
            height={1050}
            sizes="(max-width: 640px) 72vw, 380px"
            priority
          />
        </figure>
      </SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
