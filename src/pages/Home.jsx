import {
  Mail,
  ArrowUpRight,
  Code2,
  MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero section-container" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot" />
            Open to new opportunities
          </div>

          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Fasihullah
            <span className="heading-accent"> Khan.</span>
          </h1>

          <h2>Software Engineer building practical web applications.</h2>

          <p className="hero-description">
            I work primarily with .NET technologies, SQL Server, and
            modern web development tools. I enjoy solving problems,
            improving existing applications, and continuously growing
            as an engineer.
          </p>

          <div className="hero-location">
            <MapPin size={16} />
            Lahore, Pakistan
          </div>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-button">
              Explore my work <ArrowUpRight size={18} />
            </Link>

            <Link to="/contact" className="secondary-button">
              Get in touch
            </Link>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Fasihullah-khan2799"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/fasihullah-khan-1a09971b1"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={19} />
            </a>

            <a
              href="mailto:fasihkhan2799@gmail.com"
              aria-label="Email"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="code-card">
            <div className="code-card-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>developer.cs</span>
            </div>

            <div className="code-content">
              <p><span className="code-muted">01</span> <span className="code-purple">public class</span> <span className="code-blue">Developer</span></p>
              <p><span className="code-muted">02</span> {"{"}</p>
              <p><span className="code-muted">03</span> &nbsp; <span className="code-purple">public string</span> Name =</p>
              <p><span className="code-muted">04</span> &nbsp; &nbsp; <span className="code-green">"Fasihullah Khan"</span>;</p>
              <p><span className="code-muted">05</span></p>
              <p><span className="code-muted">06</span> &nbsp; <span className="code-purple">public string</span> Focus =</p>
              <p><span className="code-muted">07</span> &nbsp; &nbsp; <span className="code-green">".NET & Web Development"</span>;</p>
              <p><span className="code-muted">08</span></p>
              <p><span className="code-muted">09</span> &nbsp; <span className="code-purple">public bool</span> AlwaysLearning =</p>
              <p><span className="code-muted">10</span> &nbsp; &nbsp; <span className="code-orange">true</span>;</p>
              <p><span className="code-muted">11</span> {"}"}</p>
            </div>

            <div className="code-card-footer">
              <span className="footer-status" />
              Building. Learning. Improving.
            </div>
          </div>

          <div className="floating-tag tag-top">
            <Code2 size={16} /> C# / .NET
          </div>

          <div className="floating-tag tag-bottom">
            <span className="tag-sparkle">✦</span> Always learning
          </div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="section-container intro-strip-inner">
          <span>Focused on building useful software</span>
          <span className="strip-divider" />
          <span>Practical problem solving</span>
          <span className="strip-divider" />
          <span>Continuous learning</span>
        </div>
      </section>
    </>
  );
}

export default Home;