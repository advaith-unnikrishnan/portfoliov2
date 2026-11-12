import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, socialLinks, emailLink } from "../../content/site";
import ThemeToggle from "./ThemeToggle";
import TrackedLink from "./TrackedLink";

const pages = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
];

export default function SiteFrame({ current, children, home = false }) {
  return (
    <div className="portfolio-frame">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="portfolio-header">
        <nav aria-label="Main navigation" className="portfolio-nav">
          {pages.map(({ href, name }) => (
            <Link
              key={href}
              href={href}
              aria-current={href === current ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </header>
      <main id="main" className={home ? "portfolio-home" : "portfolio-inner"}>
        {children}
      </main>
      <footer className="portfolio-footer compact-footer">
        <div className="footer-links" aria-label="Social and contact links">
          {socialLinks.map(({ id, href, label }) => (
            <TrackedLink key={id} id={`social_${id}`} kind="social" href={href}>
              {label}
              <ArrowUpRight size={13} aria-hidden="true" />
            </TrackedLink>
          ))}
          <TrackedLink
            id="personal_email"
            kind="email"
            href={emailLink(siteConfig.contact.personalEmail)}
          >
            Email
            <ArrowUpRight size={13} aria-hidden="true" />
          </TrackedLink>
          <a href="https://instagram.com/advaith.co">
            Instagram
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-links" aria-label="y0 links">
          <TrackedLink
            id="footer_explore_y0"
            href={siteConfig.investing.organizationUrl}
          >
            explore y0
            <ArrowUpRight size={13} aria-hidden="true" />
          </TrackedLink>
          <TrackedLink
            id="fund_application"
            href={siteConfig.investing.applicationUrl}
          >
            apply for funding
            <ArrowUpRight size={13} aria-hidden="true" />
          </TrackedLink>
        </div>
      </footer>
    </div>
  );
}
