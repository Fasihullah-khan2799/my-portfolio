import {
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  Target,
} from "lucide-react";

function About() {
  return (
    <section className="section-container about-section">
      <p className="eyebrow">GET TO KNOW ME</p>

      <h1>
        About <span className="heading-accent">Me.</span>
      </h1>

      <div className="about-content">
        <div className="about-intro">
          <h2>
            From engineering foundations to building software.
          </h2>

          <p>
            I'm a Software Engineer with a background in Electrical
            and Telecommunication Engineering and a growing career
            in software development.
          </p>

          <p>
            My professional journey began in the telecom industry,
            where I developed practical problem-solving, analytical,
            and communication skills. I later transitioned into
            software development and started working with web
            applications and .NET technologies.
          </p>

          <p>
            Over the years, I've gained hands-on experience working
            with existing applications, debugging issues, developing
            features, writing SQL queries and stored procedures,
            and integrating third-party services.
          </p>

          <p>
            I believe in continuous learning, understanding the
            fundamentals, and using modern tools responsibly to
            build useful software.
          </p>
        </div>

        <div className="about-highlights">
          <div className="about-card">
            <Code2 size={23} />
            <h3>Development</h3>
            <p>
              Practical experience with C#, .NET, ASP.NET MVC,
              SQL Server, and web technologies.
            </p>
          </div>

          <div className="about-card">
            <BriefcaseBusiness size={23} />
            <h3>Professional Experience</h3>
            <p>
              Experience across software development and
              telecommunications engineering.
            </p>
          </div>

          <div className="about-card">
            <GraduationCap size={23} />
            <h3>Education</h3>
            <p>
              B.Sc. Electrical & Telecommunication Engineering,
              Gomal University — Silver Medalist.
            </p>
          </div>

          <div className="about-card">
            <Target size={23} />
            <h3>Current Focus</h3>
            <p>
              Strengthening software engineering fundamentals,
              modern .NET development, and full-stack skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;