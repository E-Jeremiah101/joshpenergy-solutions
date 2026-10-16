import React, { useEffect, useState } from "react";
import work11Image from "./assets/images/work11.jpeg";
import work6image from "./assets/images/work6.jpeg";
import work10image from "./assets/images/work10.jpeg";
import work7image from "./assets/images/work7.jpeg";
import solarpanel from "./assets/images/solarpanel.jpg";
import workvid2 from "./assets/images/work-interior.mov";
import workvid3 from "./assets/images/work-vid3.mov";
import workvid5 from "./assets/images/work-vid5.mp4";
import workvid6 from "./assets/images/work-vid6.mp4";
import profile from "./assets/images/profile.jpeg";

// --- Scroll Reveal Hook ---
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { ref, isVisible };
}

// --- Scroll Reveal Wrapper ---
function Reveal({ children, delay = 0, className = "" }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// --- Project Data ---
const projects = [
  {
    title: "Reliable Power, Beautifully Done",
    type: "SOLAR PANEL INSTALLATION",
    image: work11Image,
    alt: "Solar panels installed on a residential rooftop",
    description:
      "A professionally planned solar installation designed to provide dependable energy, improve everyday comfort, and help the homeowner make better use of renewable power.",
    details: [
      "6.4 kW solar array",
      "10 kWh home battery",
      "Smart energy monitoring",
    ],
  },
  {
    title: "Solar and Lithium Battery Installation",
    type: "SOLAR SYSTEM INSTALLATION",
    video: workvid6,
    alt: "Professionally installed solar and lithium battery system",
    description:
      "A professionally installed solar power system featuring solar batteries and lithium battery storage, designed to provide reliable backup power, efficient energy storage, and dependable electricity for the property.",
    details: [
      "Professional solar and battery installation",
      "Reliable energy storage and backup power",
      "Neat, safe, and organised installation",
    ],
  },
  {
    title: "Powering Every Connection",
    type: "ELECTRICAL WIRING",
    image: work10image,
    alt: "Electrical wiring installed neatly within a building",
    description:
      "A carefully executed electrical wiring project designed to deliver safe, organised, and reliable power throughout the property, with attention to detail at every stage.",
    details: [
      "Professional electrical wiring",
      "Neat and organised cable routing",
      "Safety-focused installation",
    ],
  },
  {
    title: "Solar Panel Installation",
    type: "SOLAR PANEL INSTALLATION",
    video: workvid5,
    image: work11Image,
    alt: "Solar panels professionally installed on a new building",
    description:
      "A showcase of professionally installed solar panels, highlighting the panel arrangement, installation quality, and attention to detail for efficient solar energy generation.",
    details: [
      "Professional solar panel installation",
      "Proper panel positioning and alignment",
      "Quality-focused installation for efficient energy generation",
    ],
  },
  {
    title: "Solar Panel Mounting",
    type: "ROOFTOP SOLAR INSTALLATION",
    video: workvid3,
    image: work11Image,
    alt: "Solar panels installed on a building roof",
    description:
      "A carefully executed solar installation featuring well-positioned panels and secure fittings to support efficient sunlight capture and reliable energy generation.",
    details: [
      "Professional solar panel installation",
      "Precise panel positioning and alignment",
      "Secure fittings for reliable performance",
    ],
  },
  {
    title: "Reliable Power, Every Day",
    type: "INVERTER INSTALLATION",
    image: work7image,
    alt: "An installer setting up an inverter system for reliable backup power",
    description:
      "A professionally installed inverter system designed to provide dependable backup power during outages, with careful attention to system configuration, electrical safety, and the customer's power needs.",
    details: [
      "Professional inverter installation",
      "Backup power configuration",
      "Safe and organised connections",
    ],
  },
  {
    title: "Interior Lighting Design",
    type: "INTERIOR LIGHTING",
    video: workvid2,
    image: work10image,
    alt: "Beautiful interior lighting enhancing the appearance of a home",
    description:
      "A beautiful interior lighting design that adds elegance to the home, creates a warm and welcoming atmosphere, and enhances the character of each space.",
    details: [
      "Creative interior lighting design",
      "Well-positioned lighting fixtures",
      "Lighting that complements the home's interior",
    ],
  },
  {
    title: "The Final Touches to Reliable Power",
    type: "SOLAR BATTERY & INVERTER INSTALLATION",
    image: work6image,
    alt: "A lithium battery and inverter system installed, with final installation work nearly complete",
    description:
      "A solar battery and inverter installation nearing completion, with the key components carefully positioned and connected to provide a dependable backup power solution for the property.",
    details: [
      "Lithium battery installation",
      "Inverter system integration",
      "Final checks and finishing touches",
    ],
  },
];

// --- Services Data ---
const services = [
  {
    title: "Solar installations",
    text: "Thoughtful solar PV systems designed around your roof, your energy use and the way you live.",
    icon: "sun",
  },
  {
    title: "Interior & Lighting Design",
    text: "Transform your space with thoughtfully designed lighting that enhances its beauty, creates the right ambience, and brings every detail to life.",
    icon: "lightbulb",
  },
  {
    title: "Electrical work",
    text: "From a new consumer unit to a complete rewire, expect safe, considered work and a tidy finish.",
    icon: "bolt",
  },
];

// --- Icon Component ---
function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M4.5 12h14m-6-6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "sun") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
    );
  }

  if (name === "lightbulb") {
    return (
      <svg {...common}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14a6 6 0 1 0-6.18 0c.64.48 1.09 1.18 1.09 2v1h4v-1c0-.82.45-1.52 1.09-2Z" />
      </svg>
    );
  }

  if (name === "bolt") {
    return (
      <svg {...common}>
        <path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" />
      </svg>
    );
  }

  if (name === "menu") {
    return (
      <svg {...common}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    );
  }

  return null;
}

// --- Project Modal ---
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        {project.video ? (
          <video
            className="modal-video"
            src={project.video}
            poster={project.image}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img className="modal-image" src={project.image} alt={project.alt} />
        )}

        <div className="modal-content">
          <p className="eyebrow">
            {project.type} <span>·</span> {project.location}
          </p>

          <h2 id="modal-title">{project.title}</h2>

          <p className="modal-description">{project.description}</p>

          <ul className="project-details">
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>

          <a className="text-link" href="#contact" onClick={onClose}>
            Discuss a similar project <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

// --- Main App ---
function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="JoshEnergy Solutions home"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            <Icon name="sun" size={24} />
          </span>
          <span>
            JOSHENERGY<span className="brand-light"> SOLUTION</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name="menu" size={23} />
        </button>

        <nav
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#services" onClick={closeMenu}>
            What I do
          </a>
          <a href="#projects" onClick={closeMenu}>
            Selected work
          </a>
          <a href="#about" onClick={closeMenu}>
            About me
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let’s talk <Icon name="arrow" size={17} />
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              SOLAR & ELECTRICAL SOLUTIONS
            </p>

            <h1>
              Good energy.
              <br />
              Done <span>properly.</span>
            </h1>

            <p className="hero-text">
              Thoughtful solar installations and reliable electrical work, built
              around the way you live.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Start a conversation <Icon name="arrow" size={18} />
              </a>

              <a className="text-link hero-work-link" href="#projects">
                Explore my work <span className="down-arrow">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src={solarpanel}
              alt="Solar panels installed on a home beneath a clear sky"
              className="hero-image"
            />

            <div className="hero-image-label">
              <span className="label-icon">
                <Icon name="sun" size={21} />
              </span>
              <span>
                <strong>Powering a brighter future.</strong>
                <small>Reliable solutions. Smarter living.</small>
              </span>
            </div>

            <div className="hero-stamp" aria-hidden="true">
              <span>
                POWERING
                <br />A BRIGHTER
                <br />
                TOMORROW
              </span>
              <Icon name="sun" size={25} />
            </div>
          </div>
        </section>

        {/* Intro Strip */}
        <section className="intro-strip" aria-label="Our approach">
          <Reveal>
            <p>Inspired by innovation.</p>
            <span className="intro-rule" />
            <p>Driven by reliable power.</p>
            <span className="intro-location">
              PROUDLY SERVING HOMES & BUSINESSES
            </span>
          </Reveal>
        </section>

        {/* Services */}
        <section className="section services-section" id="services">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow">WHAT I BRING TO EVERY PROJECT</p>
                <h2>
                  Smart solutions,
                  <br />
                  <span>powerful results.</span>
                </h2>
              </div>
              <p className="section-intro">
                From reliable solar installations to quality electrical work and
                modern lighting solutions, I combine practical expertise with
                attention to detail to deliver results that make a difference.
              </p>
            </div>
          </Reveal>

          <div className="service-grid">
            {services.map((service, i) => (
              <Reveal key={i}>
                <article className="service-card">
                  <div className="service-top">
                    <Icon name={service.icon} size={27} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="projects-section" id="projects">
          <div className="section projects-inner">
            <Reveal>
              <div className="section-heading projects-heading">
                <div>
                  <p className="eyebrow">OUR WORK IN ACTION</p>
                  <h2>
                    Every detail matters.
                    <br />
                    <span>Expertly delivered.</span>
                  </h2>
                </div>
                <a className="text-link" href="#contact">
                  Have a project in mind? <Icon name="arrow" size={18} />
                </a>
              </div>
            </Reveal>

            <div className="project-grid">
              {projects.map((project, i) => (
                <Reveal key={i}>
                  <article className="project-card">
                    <button
                      className="project-image-button"
                      type="button"
                      onClick={() => setActiveProject(project)}
                      aria-label={`View more about ${project.title}`}
                    >
                      {project.video ? (
                        <>
                          {/* Video thumbnail - shows first frame automatically */}
                          <video
                            src={project.video}
                            preload="metadata"
                            muted
                            playsInline
                            aria-hidden="true"
                          />

                          {/* YouTube-style play button overlay */}
                          <span className="play-overlay" aria-hidden="true">
                            <svg viewBox="0 0 68 48" width="68" height="48">
                              <path
                                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                fill="#f00"
                              ></path>
                              <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                            </svg>
                          </span>
                        </>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.alt}
                          loading="lazy"
                        />
                      )}

                      <span className="project-open">
                        <Icon name="arrow" size={20} />
                      </span>
                    </button>

                    <div className="project-meta">
                      <span>{project.type}</span>
                    </div>

                    <div className="project-title-row">
                      <span>{project.title}</span>
                      <button
                        className="view-more"
                        type="button"
                        onClick={() => setActiveProject(project)}
                      >
                        View more <Icon name="arrow" size={17} />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about-section" id="about">
          <Reveal className="reveal-left">
            <div className="about-image">
              <img
                src={profile}
                alt="Electrician carefully working on a residential electrical system"
                loading="lazy"
              />
              <div className="about-image-caption">
                <span>PERSONAL SERVICE.</span>
                <span>PROFESSIONAL STANDARDS.</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="reveal-right" delay={200}>
            <div className="about-copy">
              <h2>
                Hi, I’m Joshua.
                <br />
                <span>Powering a better future.</span>
              </h2>

              <p className="about-lead">
                I’m passionate about delivering reliable power solutions that
                make homes and businesses safer, more comfortable, and more
                energy-efficient.
              </p>

              <p className="about-body">
                From solar panel and inverter installations to electrical wiring
                and maintenance, I approach every project with care, attention
                to detail, and a commitment to quality. My goal is to understand
                your needs, recommend practical solutions, and deliver work you
                can depend on long after the installation is complete.
              </p>

              <div className="about-signoff">
                <span className="signature">Joshua</span>
                <span>SOLAR & ELECTRICAL SOLUTIONS</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section className="contact-section" id="contact">
          <Reveal>
            <div className="contact-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" /> LET'S TALK ABOUT YOUR PROJECT
              </p>

              <h2>
                Ready for a
                <br />
                <span>better solution?</span>
              </h2>

              <p>
                Whether you're planning a solar installation, need reliable
                backup power, or want professional electrical work, I'd love to
                hear what you have in mind. Let's discuss your needs and find a
                solution that works for you.
              </p>

              <div className="contact-details">
                <a href="mailto:joshenergy@gmail.com">joshenergy@gmail.com</a>
                <a href="tel:+2349011600975">+234 901 160 0975</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <form
              className="contact-form"
              action="mailto:hello@sunvolt.example"
              method="post"
              encType="text/plain"
            >
              <div className="form-row">
                <label>
                  Your name
                  <input
                    name="name"
                    type="text"
                    placeholder="e.g. Jamie Smith"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  Email address
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label>
                What can I help with?
                <select name="project" defaultValue="" required>
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Solar installation</option>
                  <option>Battery storage</option>
                  <option>Electrical work</option>
                  <option>Something else</option>
                </select>
              </label>

              <label>
                A little about your project
                <textarea
                  name="message"
                  rows="3"
                  placeholder="What are you hoping to get done?"
                  required
                />
              </label>

              <button className="button button-lime" type="submit">
                Send your enquiry <Icon name="arrow" size={18} />
              </button>

              <p className="form-note">
                By sending this, you agree to be contacted about your enquiry.
              </p>
            </form>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              <Icon name="sun" size={24} />
            </span>
            <span>
              JOSHENERGY<span className="brand-light"> SOLUTIONS</span>
            </span>
          </a>

          <p>
            Good energy.
            <br />
            Done properly.
          </p>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#services">What I do</a>
            <a href="#projects">Selected work</a>
            <a href="#about">About me</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="back-top" href="#home">
            Back to top ↑
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} JoshEnergy Solutions. All rights
            reserved.
          </span>
          <span>Independent by nature. Bright by design.</span>
        </div>
      </footer>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}

export default App;