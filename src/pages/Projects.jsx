
import {
  ArrowUpRight,
  Stethoscope,
  Megaphone,
  Mail,
  GitBranch,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "TheDocApp",
    category: "Healthcare & Telehealth Platform",
    description:
      "A healthcare platform supporting patient registration, clinical questionnaires, virtual consultations, memberships, and communication workflows.",
    contribution:
      "Worked on application features, ASP.NET MVC controllers and views, SQL queries and stored procedures, debugging, and third-party integrations.",
    technologies: [
      "C#",
      "ASP.NET MVC",
      ".NET Framework",
      "ASP.NET Web API",
      "SQL Server",
      "Entity Framework",
      "Dapper",
    ],
    icon: Stethoscope,
    involvement: "Professional project experience",
    featured: true,
  },
  {
    number: "02",
    title: "AI Marketing Agent",
    category: "Healthcare Marketing Automation",
    description:
      "A campaign automation platform connected to healthcare data, supporting audience selection, scheduled campaigns, and multi-channel communication.",
    contribution:
      "Contributed to an AI-assisted development workflow involving backend features, campaign functionality, integrations, and application improvements.",
    technologies: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Entity Framework Core",
      "React",
      "TypeScript",
      "Hangfire",
      "Twilio",
    ],
    icon: Megaphone,
    involvement: "AI-assisted project contribution",
    featured: false,
  },
  {
    number: "03",
    title: "MailerMonkey",
    category: "Email Marketing SaaS",
    description:
      "An email marketing application featuring campaign management, audience tools, email templates, analytics, and a visual email builder.",
    contribution:
      "Participated in AI-assisted product development, working with the application and its email-builder workflows while continuing to develop deeper understanding of the underlying stack.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "GrapesJS",
    ],
    icon: Mail,
    involvement: "AI-assisted project contribution",
    featured: false,
  },
  {
    number: "04",
    title: "Traditional vs Meta-Driven Architecture",
    category: "Software Architecture Exploration",
    description:
      "A technical exploration of traditional application development compared with metadata-driven approaches to application design.",
    contribution:
      "A personal learning initiative focused on understanding architectural concepts and comparing different approaches to building software.",
    technologies: [
      "Software Architecture",
      "Design Concepts",
      "Metadata",
      "Application Design",
    ],
    icon: GitBranch,
    involvement: "Personal technical exploration",
    featured: false,
  },
];

function Projects() {
  return (
    <section className="section-container projects-section">
      <p className="eyebrow">SELECTED WORK</p>

      <h1>
        Projects & <span className="heading-accent">Experience.</span>
      </h1>

      <p className="projects-description">
        A selection of professional projects and technical explorations
        that reflect my development journey, practical experience,
        and continuous learning.
      </p>

      <div className="projects-grid">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <article
              className={`project-card ${project.featured ? "featured-project" : ""}`}
              key={project.number}
            >
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-icon">
                  <Icon size={23} />
                </div>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h2>{project.title}</h2>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-contribution">
                <span>MY INVOLVEMENT</span>
                <p>{project.contribution}</p>
              </div>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-footer">
                <span>{project.involvement}</span>
                <ArrowUpRight size={18} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
