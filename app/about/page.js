import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SiteFrame from "../../components/home/SiteFrame";
import { siteConfig as c } from "../../content/site";

export const metadata = {
  title: "About | Advaith U",
  alternates: { canonical: "/about" },
};

const companies = [
  ["Now", [["Y0", c.investing.organizationUrl, "Early-stage investing"]]],
  [
    "Worked at",
    [
      ["Figma", "https://figma.com/", "Friends of Figma, India"],
      [
        "TinkerHub Foundation",
        "https://tinkerhub.org/",
        "Learning initiatives",
      ],
    ],
  ],
  [
    "Consulted with",
    [
      [
        "Hoppscotch",
        "https://hoppscotch.com/",
        "Community, marketing, and DevRel",
      ],
      ["Jigsawstack", "https://jigsawstack.com/"],
      ["Othor AI", "https://othor.ai/", "Collaborated with founder Unni"],
    ],
  ],
];

const companyLogos = {
  Y0: "y0",
  Figma: "figma",
  "TinkerHub Foundation": "tinkerhub",
  Hoppscotch: "hoppscotch",
  Jigsawstack: "jigsawstack",
  "Othor AI": "othor",
};

export default function About() {
  return (
    <SiteFrame current="/about">
      <h1>About me.</h1>
      <p className="about-location">{c.profile.location}</p>
      <p className="page-lead">
        i’m an engineer by degree, but i’m a{" "}
        <a href="https://fs.blog/generalized-specialist/">
          generalized specialist
        </a>{" "}
        in work. i took a career break in early 2024 to pivot things. i now work
        in investments at <a href={c.investing.organizationUrl}>y0</a>.
      </p>
      <section className="portfolio-section">
        <h2>A bit about the way I think and work</h2>
        <ul className="principle-list">
          <li>
            <strong>The why behind the work is what keeps me going.</strong>
          </li>
          <li>
            I like <strong>taking ownership from 0 → 1</strong> and building with
            a team.
          </li>
          <li>
            I learn quickly and take initiative.{" "}
            <a href="https://www.linkedin.com/in/nadiahussain/">Nadia</a> can
            vouch for that.
          </li>
          <li>
            When approaching a problem, I consider myself as an amateur, not an
            expert know-it-all, to avoid preconceived notions.
          </li>
        </ul>
      </section>
      <section className="portfolio-section">
        <h2>Companies I’ve worked with</h2>
        <div className="company-ledger">
          {companies.map(([label, entries]) => (
            <div className="company-row" key={label}>
              <h3>{label}</h3>
              <ul>
                {entries.map(([name, href, role]) => (
                  <li key={name}>
                    <a href={href}>
                      <Image
                        className="company-logo"
                        src={`/images/logos/${companyLogos[name]}.svg`}
                        alt=""
                        width={64}
                        height={48}
                        unoptimized
                      />
                      {name === "Y0" ? "y0" : name}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                    {role && <span>{role}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="portfolio-section">
        <h2>Notable things so far</h2>
        <ul className="principle-list">
          <li>
            collaborated with <strong>unni</strong>, the founder of{" "}
            <a href="https://othor.ai/">othor ai</a>, to raise a{" "}
            <strong>$30k pre-seed round</strong>.
          </li>
          <li>
            worked with <strong>yoeven</strong>, founder of{" "}
            <a href="https://jigsawstack.com/">jigsawstack</a>, to raise{" "}
            <strong>$100k in pre-seed funding</strong> and find early users.
          </li>
          <li>
            Scaled the{" "}
            <a href="https://friends.figma.com/">friends of Figma program</a> to{" "}
            <strong>
              <span className="growth-multiplier">4X</span> in India over two
              years
            </strong>
            . It was fun to solve these challenges in COVID times.
          </li>
          <li>
            Designed and ran <strong>multiple learning programs</strong> at{" "}
            <a href="https://tinkerhub.org/">TinkerHub Foundation</a>.
          </li>
          <li>
            Built{" "}
            <a href="https://www.producthunt.com/products/mendor-space">
              Mendor Space
            </a>
            , a mentorship platform that attracted users but didn’t take off.
          </li>
          <li>
            Raised{" "}
            <strong>over $150k in sponsorships through cold emailing</strong>{" "}
            for <a href="https://ingress-hack.devfolio.co/">IngressHack</a>, the
            first hackathon in Kerala sponsored by Figma, O’Reilly Media, and
            DigitalOcean.
          </li>
          <li>
            Built the{" "}
            <a href="https://gdscmbcet.com/magazine.html">GDSC community</a> at
            my college.
          </li>
          <li>
            I built <strong>Mischief Managed</strong>, an early Google Actions
            project that reached around{" "}
            <strong>80,000 users across more than seven countries</strong>. It’s
            now discontinued. It was the first project that showed me the joy of
            building things and made me a maker.
          </li>
        </ul>
      </section>
    </SiteFrame>
  );
}
