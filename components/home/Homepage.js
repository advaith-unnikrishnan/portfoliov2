import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Globe,
  Timer,
} from "lucide-react";
import { siteConfig as c, emailLink, socialLinks } from "../../content/site";
import TrackedLink from "./TrackedLink";
import ThemeToggle from "./ThemeToggle";

// Adapted from 21st's Expanding Arrow Button: an expanding accent tile,
// implemented in CSS so the page stays light and the label remains readable.
function Action({ href, id, children, kind }) {
  return (
    <TrackedLink href={href} id={id} kind={kind} className="action">
      <span className="action-tile" aria-hidden="true">
        <ArrowRight size={18} />
      </span>
      <span className="action-label">{children}</span>
      <ArrowUpRight className="action-end" size={16} aria-hidden="true" />
    </TrackedLink>
  );
}
export function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-title">
      <header className="masthead">
        <span className="wordmark">
          {c.profile.name}
          <span>.</span>
        </span>
        <ThemeToggle />
      </header>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{c.profile.greeting[0]}</p>
          <h1 id="intro-title">{c.profile.greeting[1]}</h1>
          <p className="headline">
            {c.profile.headline}
            <span>.</span>
          </p>
          <p className="hero-bio">{c.profile.bio}</p>
          <Action
            href={emailLink(c.contact.workEmail)}
            id="hero_email"
            kind="email"
          >
            {c.hero.cta}
          </Action>
        </div>
        <figure className="portrait">
          <div className="portrait-art">
            <span className="portrait-orbit" aria-hidden="true" />
            <Image
              src={c.profile.portrait}
              alt={c.profile.portraitAlt}
              fill
              priority
              sizes="(max-width: 640px) 250px, 310px"
            />
          </div>
          <figcaption>
            {c.profile.name}
            <span aria-hidden="true"> ↗ </span>
            {c.profile.location}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
export function Work() {
  return (
    <section className="work" aria-labelledby="work-title">
      <h2 id="work-title">{c.work.label}</h2>
      <p>{c.work.intro}</p>
    </section>
  );
}
export function FounderChallenge() {
  if (!c.features.founderChallenge || !c.founderChallenge.enabled) return null;
  const f = c.founderChallenge;
  return (
    <section className="challenge" aria-labelledby="challenge-title">
      <div className="challenge-top">
        <span className="timer" aria-hidden="true">
          <Timer size={18} />
          60s
        </span>
        <h2 id="challenge-title">{f.headline}</h2>
      </div>
      <p className="challenge-description">{f.description}</p>
      <div className="challenge-actions">
        <TrackedLink
          href={emailLink(c.contact.workEmail, f.subject, f.body)}
          id="founder_challenge"
          kind="founder_challenge"
          className="text-link"
        >
          {f.cta}
          <ArrowUpRight size={17} aria-hidden="true" />
        </TrackedLink>
        <TrackedLink
          href={c.investing.applicationUrl}
          id="fund_application"
          kind="application"
          className="text-link secondary-link"
        >
          {f.applicationCta}
          <ArrowUpRight size={17} aria-hidden="true" />
        </TrackedLink>
      </div>
      <p className="fine-print">{f.note}</p>
    </section>
  );
}
const icons = { linkedin: Linkedin, github: Github, twitter: ArrowUpRight };
export function Connect() {
  return (
    <footer className="connect">
      <div className="social-links" aria-label="Connect with Advaith">
        {socialLinks.map((s) => {
          const Icon = icons[s.id] || Globe;
          return (
            <TrackedLink
              href={s.href}
              key={s.id}
              id={`social_${s.id}`}
              kind="social"
              className="social-link"
            >
              <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
              <span>{s.label}</span>
              <ArrowUpRight
                className="link-arrow"
                size={13}
                aria-hidden="true"
              />
            </TrackedLink>
          );
        })}
        <TrackedLink
          href={emailLink(c.contact.personalEmail)}
          id="personal_email"
          kind="email"
          className="social-link"
        >
          <Mail size={16} strokeWidth={1.6} aria-hidden="true" />
          <span>Email</span>
          <ArrowUpRight className="link-arrow" size={13} aria-hidden="true" />
        </TrackedLink>
      </div>
      <div className="colophon">
        <span>
          © {new Date().getFullYear()} {c.profile.name}
        </span>
        <TrackedLink
          href={c.investing.organizationUrl}
          id="organization"
          kind="outbound"
        >
          {c.investing.organization}
          <ArrowUpRight size={12} aria-hidden="true" />
        </TrackedLink>
      </div>
    </footer>
  );
}
