// Public content only. Never put credentials here.
export const siteConfig = {
  site: {
    name: "Advaith U",
    url: "https://advaith.co",
    title: "Advaith U | Early-Stage Investor at Y0",
    description:
      "Advaith U is an early-stage investor at Y0, working across pre-seed investments, founder programs, and software startups building for global markets.",
  },
  profile: {
    name: "Advaith U",
    greeting: ["Hey, I’m", "Advaith."],
    headline: "Early-stage investor at Y0",
    bio: "I work with early-stage founders building software for global markets.",
    portrait: "/portrait-sketch.jpg",
    portraitAlt:
      "Pencil illustration of Advaith U, smiling with his hands together",
    location: "Trivandrum, Kerala",
  },
  investing: {
    organization: "Y0",
    organizationUrl: "https://y0.co",
    focus: ["Pre-seed", "Software", "Global markets"],
    applicationUrl:
      "https://airtable.com/app6RARyh2NJmZoZO/pag2A1OLkKy46INHl/form",
  },
  hero: {
    eyebrow: "Investor. Builder. Endlessly curious.",
    cta: "Building something? Let’s talk",
    aside: "Good companies start with curious people.",
  },
  work: {
    label: "What I do",
    intro:
      "Pre-seed investments, founder conversations, and founder programs at Y0.",
  },
  founderChallenge: {
    enabled: true,
    label: "02 / A small experiment",
    headline: "Convince me in 60 seconds.",
    description:
      "Send me a one-minute video: what you’re building, why it matters, and why you.",
    subject: "Y0 Fund — I Can Convince You in 60 Seconds",
    body: "Hi Advaith,\n\nHere’s my one-minute pitch (publicly accessible video link):\n\nWhat I’m building:\nWhy it matters:\nWhy me:\n",
    cta: "Send your pitch",
    applicationCta: "Apply to Y0",
    note: "A conversation starter. Y0’s usual review process applies.",
  },
  contact: { workEmail: "advaith@y0.co", personalEmail: "mail@advaith.co" },
  socials: {
    linkedin: "https://www.linkedin.com/in/advaithu/",
    twitter: "https://twitter.com/advaith_u",
    github: "https://github.com/advaith-unnikrishnan",
    substack: "",
  },
  features: {
    publicBlog: false,
    publicProjects: false,
    founderChallenge: true,
  },
  analytics: { measurementId: "G-R4ZN2K1PJX" },
};
export function validLink(value) {
  if (!value) return null;
  try {
    return ["https:", "mailto:"].includes(new URL(value).protocol)
      ? value
      : null;
  } catch {
    return null;
  }
}
export function emailLink(email, subject, body) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "")) return null;
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  // mailto uses URI query encoding, not HTML form encoding for spaces.
  return `mailto:${email}${params.size ? `?${params.toString().replace(/\+/g, "%20")}` : ""}`;
}
export const socialLinks = [
  ["linkedin", "LinkedIn"],
  ["twitter", "X"],
  ["github", "GitHub"],
]
  .filter(([id]) => validLink(siteConfig.socials[id]))
  .map(([id, label]) => ({ id, label, href: siteConfig.socials[id] }));
