import { useState } from "react";

import {
  ArrowUpRight,
  Code2,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import "./App.css";

function ComingSoon({ title }) {
  return (
    <section className="section-container" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <p className="eyebrow">COMING SOON</p>
      <h1>{title}</h1>
      <p className="hero-description">
        This section is currently being developed. Check back soon!
      </p>
      <Link to="/" className="primary-button">
        Back to Home <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}

function AppLayout() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const themeClass = darkMode ? "dark-theme" : "light-theme";

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`portfolio ${themeClass}`}>
      <header className="navbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Code2 size={20} />
          </span>

          <span>
            Fasihullah<span className="brand-dot">.</span>
          </span>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle color theme"
            title="Toggle theme"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <Link className="nav-contact" to="/contact">
            Let's talk <ArrowUpRight size={16} />
          </Link>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />
<Route path="/skills" element={<Skills />} />
<Route path="/projects" element={<Projects />} />
<Route path="/experience" element={<Experience />} />
<Route path="/contact" element={<Contact />} />

          <Route path="*" element={<ComingSoon title="Page Not Found" />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;