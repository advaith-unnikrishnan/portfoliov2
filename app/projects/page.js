import { ArrowUpRight } from "lucide-react";
import SiteFrame from "../../components/home/SiteFrame";
import { projectGroups } from "../../content/projects";

export const metadata = {
  title: "Projects | Advaith U",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return (
    <SiteFrame current="/projects">
      <h1>Projects.</h1>
      {projectGroups
        .filter((group) => group.title === "Things I’ve built")
        .map(({ title, projects }) => (
          <section className="portfolio-section" key={title}>
            <h2>{title}</h2>
            <ul className="project-grid">
              {projects.map(([name, description, href]) => (
                <li key={name} className="project-card">
                  <h3>
                    {href ? (
                      <a href={href}>
                        {name}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    ) : (
                      name
                    )}
                  </h3>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </SiteFrame>
  );
}
