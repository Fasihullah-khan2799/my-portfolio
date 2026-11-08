
import {
  BriefcaseBusiness,
  Code2,
  Radio,
  GraduationCap,
} from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Xeven Solutions",
    period: "December 2021 – Present",
    type: "Software Development",
    icon: Code2,
    description:
      "Working on web application development, maintenance, debugging, database operations, and third-party integrations.",
    responsibilities: [
      "Debugging and maintaining ASP.NET MVC application features.",
      "Working with C#, controllers, views, and application workflows.",
      "Writing SQL queries, joins, and stored procedures.",
      "Developing and improving web interfaces using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
      "Contributing to API development and third-party service integrations.",
      "Participating in AI-assisted development workflows across newer projects.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "AbeesTech",
    period: "September 2020 – November 2021",
    type: "Software Development",
    icon: Code2,
    description:
      "Started my professional software development journey while working with an ASP.NET Core MVC healthcare application.",
    responsibilities: [
      "Worked with the EZHealth healthcare application.",
      "Learned application structure and MVC development workflows.",
      "Worked on assigned development tasks with guidance from senior team members.",
      "Built foundational experience in web application development.",
    ],
  },
  {
    role: "RF Level III Engineer",
    company: "LCC Pakistan",
    period: "November 2017 – September 2020",
    type: "Telecommunications Engineering",
    icon: Radio,
    description:
      "Worked on the ZTE / ZONG CMPAK telecommunications project, supporting field engineering, reporting, and network performance activities.",
    responsibilities: [
      "Coordinated field engineering activities and site teams.",
      "Supported site surveys, testing, and SSV reporting.",
      "Followed up on technical issues and optimization activities.",
      "Prepared performance reports and participated in customer meetings.",
      "Received a Letter of Appreciation for professional contributions.",
    ],
  },
];

function Experience() {
  return (
    <section className="section-container experience-section">
      <p className="eyebrow">MY CAREER JOURNEY</p>

      <h1>
        Professional <span className="heading-accent">Experience.</span>
      </h1>

      <p className="experience-description">
        My professional journey across software development
        and telecommunications engineering, with a focus on
        continuous growth and practical problem solving.
      </p>

      <div className="experience-timeline">
        {experiences.map((experience, index) => {
          const Icon = experience.icon;

          return (
            <article className="experience-item" key={experience.company}>
              <div className="timeline-marker">
                <Icon size={19} />
              </div>

              <div className="experience-card">
                <div className="experience-card-top">
                  <div>
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h2>{experience.role}</h2>
                    <h3>{experience.company}</h3>
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>
                </div>

                <p className="experience-summary">
                  {experience.description}
                </p>

                <ul>
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <div className="education-card">
        <GraduationCap size={25} />

        <div>
          <span>EDUCATION</span>
          <h2>B.Sc. Electrical & Telecommunication Engineering</h2>
          <p>
            Gomal University · Faculty of Engineering & Technology
            · 2011 – 2015
          </p>
          <strong>Silver Medalist</strong>
        </div>
      </div>
    </section>
  );
}

export default Experience;
