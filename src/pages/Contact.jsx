
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="section-label">GET IN TOUCH</span>

          <h1>
            Let's build something
            <span> meaningful.</span>
          </h1>

          <p>
            I'm open to discussing software development opportunities,
            interesting projects, and professional collaborations.
            Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          <a
            href="mailto:fasihkhan2799@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <div>
              <h3>Email</h3>
              <p>fasihkhan2799@gmail.com</p>
            </div>
            <ArrowUpRight className="contact-arrow" size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/fasihullah-khan-1a09971b1/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaLinkedinIn size={24} />
            </div>
            <div>
              <h3>LinkedIn</h3>
              <p>Let's connect professionally</p>
            </div>
            <ArrowUpRight className="contact-arrow" size={20} />
          </a>

          <a
            href="https://github.com/Fasihullah-khan2799"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaGithub size={24} />
            </div>
            <div>
              <h3>GitHub</h3>
              <p>Explore my projects and work</p>
            </div>
            <ArrowUpRight className="contact-arrow" size={20} />
          </a>

          <div className="contact-card contact-location">
            <div className="contact-icon">
              <MapPin size={24} />
            </div>
            <div>
              <h3>Location</h3>
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="contact-bottom">
          <h2>Have an opportunity in mind?</h2>
          <a href="mailto:fasihkhan2799@gmail.com">
            Send me an email <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
