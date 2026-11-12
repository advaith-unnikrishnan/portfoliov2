# Homepage content

Edit `content/site.js`. It contains public information only. Never store secrets here.

- `site`: name, production URL, title and description; shared by metadata, sitemap and JSON-LD.
- `profile`: full name, two-part greeting, headline, short bio, portrait path and alt text, location. Positioning is **early-stage investor at Y0**, confirmed by Advaith.
- `hero.cta`: main contact button label. It sends funding enquiries to `contact.workEmail`.
- `work`: short heading and one-sentence description.
- `founderChallenge`: enabled flag, headline, description, encoded email subject/body, pitch/application labels and process clarification.
- `investing`: organization, organization website, focus and the official funding application URL.
- `contact`: work and optional personal email.
- `socials`: LinkedIn, X and GitHub. Empty/invalid links are omitted. Substack is hidden for this release.
- `features`: homepage-only status, future route intentions, founder challenge visibility.
- `analytics.measurementId`: existing public GA4 identifier. No Clarity ID or session-recording integration.

`components/home/Homepage.js` contains Hero, Work, FounderChallenge and Connect. The writing section has been removed. `ThemeToggle.js` follows system preference initially, supports manual light/dark selection and remembers it locally. Theme tokens and responsive rules live in `app/globals.css`.

The public routes remain restricted by `content/routing.mjs`, `next.config.mjs` and `middleware.js`. Disable the authoritative `homepageOnly` switch only after reviewing the preserved pages. Adding a new public image requires updating the exact asset allowlist and redirect exclusions. Existing posts and legacy page components remain intact.

## Analytics

`SiteAnalytics.js` loads Google Analytics and Vercel Analytics without a popup. It respects browser Do Not Track. Microsoft Clarity and Speed Insights are not mounted. There is no consent preference control or inferred visitor consent.

Custom event: `contact_click`, with `link_id` and `link_kind` only. Stable IDs: `hero_email`, `founder_challenge`, `fund_application`, `personal_email`, `social_linkedin`, `social_twitter`, `social_github`, `organization`. Kinds: `email`, `founder_challenge`, `application`, `social`, `outbound`. Do not include emails, founder messages, video links or URL queries in event properties.

One GA4 config initialization sends the initial page view. No additional route page-view watcher. Account-side enhanced measurement and live dashboard ingestion need separate verification. Automatic analytics loading does not itself establish privacy/consent compliance; review requirements before publication.

## Validation

Run `npm run build`, then `npm start -- --port 3100` and `npm run test:homepage`. Tests cover retired-route 307 redirects, RSC requests, essential assets, metadata and absence of retired UI. Review light/dark modes and narrow mobile widths in a browser after visual changes.
