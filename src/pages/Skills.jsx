import {
  Code2,
  Database,
  Globe,
  Wrench,
  BrainCircuit,
  Layers3,
} from "lucide-react";

const skillGroups = [
  {
    title: "Backend Development",
    icon: Code2,
    level: "Hands-on experience",
    skills: [
      "C#",
      "ASP.NET MVC",
      ".NET Framework",
      "ASP.NET Core",
      "ASP.NET Web API",
      "REST API Integration",
    ],
  },
  {
    title: "Database & Data",
    icon: Database,
    level: "Hands-on experience",
    skills: [
      "SQL Server",
      "SQL Queries",
      "Stored Procedures",
      "Joins",
      "Entity Framework",
      "Dapper",
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    level: "Practical experience",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "React",
    ],
  },
  {
    title: "Tools & Integrations",
    icon: Wrench,
    level: "Project experience",
    skills: [
      "Git & GitHub",
      "Visual Studio",
      "VS Code",
      "Payment Integrations",
      "SMS & Email Integrations",
      "Debugging",
    ],
  },
  {
    title: "Modern Development",
    icon: Layers3,
    level: "Project exposure",
    skills: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "AI-assisted Development",
    ],
  },
  {
    title: "Engineering Practices",
    icon: BrainCircuit,
    level: "Currently strengthening",
    skills: [
      "Object-Oriented Programming",
      "Problem Solving",
      "Clean Code",
      "System Design Fundamentals",
      "Software Architecture",
      "Technical Communication",
    ],
  },
];

function Skills() {
  return (
    <section className="section-container skills-section">
      <p className="eyebrow">MY TECHNICAL TOOLKIT</p>

      <h1>
        Skills & <span className="heading-accent">Technologies.</span>
      </h1>

      <p className="skills-description">
        Technologies and tools I've worked with across software
        development projects, along with the areas I'm actively
        improving as an engineer.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-heading">
                <div className="skill-icon">
                  <Icon size={22} />
                </div>

                <div>
                  <h2>{group.title}</h2>
                  <span>{group.level}</span>
                </div>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;