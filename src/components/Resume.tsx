import { useRef } from "react";
import { MdArrowOutward, MdDownload, MdClose, MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/Resume.css";

interface ResumeProps {
  onClose: () => void;
}

const Resume = ({ onClose }: ResumeProps) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    window.print();
  };

  const skills = {
    languages: ["TypeScript", "JavaScript", "PHP", "Python", "C++", "SQL"],
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
    backend: ["Node.js", "NestJS", "Express.js", "FastAPI", "WHMCS API"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Git & GitHub", "Docker", "Vercel", "Postman", "VS Code", "Linux CLI"],
    ai: ["LangChain", "OpenAI API", "Prompt Engineering"],
  };

  return (
    <div className="resume-overlay">
      <div className="resume-actions no-print">
        <button className="resume-download-btn" onClick={handleDownloadPDF}>
          <MdDownload /> Download PDF
        </button>
        <button className="resume-close-btn" onClick={onClose}>
          <MdClose />
        </button>
      </div>

      <div className="resume-container" ref={resumeRef}>
        <div className="resume-content">
          {/* Header Section */}
          <header className="resume-header">
            <div className="resume-header-left">
              <div className="resume-photo">
                <img src="/images/logo.png" alt="Qatada" />
              </div>
              <div className="resume-title-info">
                <h1>QATADA</h1>
                <h2>Full Stack Developer & PHP Module Developer</h2>
                <p className="resume-tagline">Building products that ship. Code. Ship. Repeat.</p>
              </div>
            </div>
            <div className="resume-header-right">
              <div className="resume-contact-item">
                <MdEmail />
                <a href="mailto:pivotone106@gmail.com">pivotone106@gmail.com</a>
              </div>
              <div className="resume-contact-item">
                <MdLocationOn />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="resume-contact-item">
                <FaGithub />
                <a href="https://github.com/qatada16" target="_blank">github.com/qatada16</a>
              </div>
              <div className="resume-contact-item">
                <FaLinkedinIn />
                <a href="https://www.linkedin.com/in/muhammad-qatada-738bb3362" target="_blank">LinkedIn Profile</a>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="resume-main">
            {/* Left Column */}
            <div className="resume-left">
              {/* About Section */}
              <section className="resume-section">
                <h3 className="resume-section-title">
                  <span className="title-accent">01</span> About Me
                </h3>
                <p className="resume-about-text">
                  I'm a 6th-semester Computer Science student at FAST-NUCES Lahore,
                  currently working part-time as a PHP & Module Developer at WHMPRESS.
                  I've been writing code since my first semester — from terminal-based
                  C++ games to AI-powered chat platforms with WhatsApp agent integration.
                  I care deeply about clean architecture, great UX, and shipping things
                  that actually work.
                </p>
              </section>

              {/* Experience Section */}
              <section className="resume-section">
                <h3 className="resume-section-title">
                  <span className="title-accent">02</span> Experience
                </h3>

                <div className="resume-experience-item">
                  <div className="experience-header">
                    <div className="experience-title">
                      <h4>PHP & Module Developer</h4>
                      <span className="experience-company">WHMPRESS</span>
                    </div>
                    <span className="experience-date">Feb 2026 - Present</span>
                  </div>
                  <ul className="experience-details">
                    <li>Developing custom WHMCS addon modules from scratch using PHP</li>
                    <li>Building WHMPress Promo & URL Tracking module with full CRUD admin panel</li>
                    <li>Writing maintainable, modular PHP following WHMCS hook/API patterns</li>
                    <li>Collaborating with product team to scope and spec new module features</li>
                  </ul>
                  <div className="experience-tech">
                    <span>PHP</span><span>WHMCS</span><span>MySQL</span><span>JavaScript</span>
                  </div>
                </div>

                <div className="resume-experience-item">
                  <div className="experience-header">
                    <div className="experience-title">
                      <h4>Freelance Full Stack Developer</h4>
                      <span className="experience-company">Upwork</span>
                    </div>
                    <span className="experience-date">Sep 2025 - Jan 2026</span>
                  </div>
                  <ul className="experience-details">
                    <li>Delivered full-stack web applications for international clients</li>
                    <li>Built custom React components and responsive layouts</li>
                    <li>Integrated third-party APIs and backend services</li>
                    <li>Managed multiple contracts alongside university coursework</li>
                  </ul>
                  <div className="experience-tech">
                    <span>React</span><span>Next.js</span><span>Node.js</span><span>TypeScript</span>
                  </div>
                </div>

                <div className="resume-experience-item">
                  <div className="experience-header">
                    <div className="experience-title">
                      <h4>Full Stack Developer Intern</h4>
                      <span className="experience-company">Fruit of Sustainability</span>
                    </div>
                    <span className="experience-date">Jun 2025 - Aug 2025</span>
                  </div>
                  <ul className="experience-details">
                    <li>Built Report Automation system reducing manual reporting by 80%</li>
                    <li>Developed Work Progress Dashboards for real-time project tracking</li>
                    <li>Created Office Inventory Management system with role-based access</li>
                    <li>Integrated OpenAI API for intelligent data extraction</li>
                  </ul>
                  <div className="experience-tech">
                    <span>React</span><span>FastAPI</span><span>Python</span><span>OpenAI API</span>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="resume-right">
              {/* Education Section */}
              <section className="resume-section">
                <h3 className="resume-section-title">
                  <span className="title-accent">03</span> Education
                </h3>

                <div className="resume-education-item">
                  <h4>BS Computer Science</h4>
                  <span className="education-school">FAST-NUCES Lahore</span>
                  <span className="education-date">2023 - 2027 (6th Semester)</span>
                  <p className="education-details">
                    Relevant coursework: AI, Computer Architecture, Data Structures,
                    OOP, Databases, Networks, Operating Systems
                  </p>
                </div>

                <div className="resume-education-item">
                  <h4>A-Levels</h4>
                  <span className="education-school">PAKTURK MAARIF International</span>
                  <span className="education-date">2021 - 2023</span>
                </div>
              </section>

              {/* Skills Section */}
              <section className="resume-section">
                <h3 className="resume-section-title">
                  <span className="title-accent">04</span> Skills
                </h3>

                <div className="resume-skills-group">
                  <h5>Languages</h5>
                  <div className="skills-tags">
                    {skills.languages.map((skill)=><span key={skill}>{skill}</span>)}
                  </div>
                </div>

                <div className="resume-skills-group">
                  <h5>Frontend</h5>
                  <div className="skills-tags">
                    {skills.frontend.map((skill)=><span key={skill}>{skill}</span>)}
                  </div>
                </div>

                <div className="resume-skills-group">
                  <h5>Backend</h5>
                  <div className="skills-tags">
                    {skills.backend.map((skill)=><span key={skill}>{skill}</span>)}
                  </div>
                </div>

                <div className="resume-skills-group">
                  <h5>Databases</h5>
                  <div className="skills-tags">
                    {skills.databases.map((skill)=><span key={skill}>{skill}</span>)}
                  </div>
                </div>

                <div className="resume-skills-group">
                  <h5>Tools & DevOps</h5>
                  <div className="skills-tags">
                    {skills.tools.map((skill)=><span key={skill}>{skill}</span>)}
                  </div>
                </div>

                <div className="resume-skills-group">
                  <h5>AI/ML</h5>
                  <div className="skills-tags">
                    {skills.ai.map((skill)=><span key={skill}>{skill}</span>)}
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section className="resume-section">
                <h3 className="resume-section-title">
                  <span className="title-accent">05</span> Projects
                </h3>

                <div className="resume-project-item">
                  <div className="project-header">
                    <h4>NeuraChat</h4>
                    <a href="https://neura-chat-h7nj.vercel.app/" target="_blank" className="project-link">
                      <MdArrowOutward />
                    </a>
                  </div>
                  <p>AI-powered chat platform with WhatsApp agent integration using LangChain</p>
                  <div className="project-tech">
                    <span>Next.js</span><span>NestJS</span><span>LangChain</span><span>Socket.io</span>
                  </div>
                </div>

                <div className="resume-project-item">
                  <div className="project-header">
                    <h4>SkilLink</h4>
                  </div>
                  <p>Full-featured freelance marketplace clone with real-time chat</p>
                  <div className="project-tech">
                    <span>React</span><span>Node.js</span><span>MongoDB</span><span>Socket.io</span>
                  </div>
                </div>

                <div className="resume-project-item">
                  <div className="project-header">
                    <h4>Flappy Bird (Assembly)</h4>
                  </div>
                  <p>Classic arcade game in x86 Assembly with DOS video memory rendering</p>
                  <div className="project-tech">
                    <span>x86 Assembly</span><span>COAL</span><span>DOS</span>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Footer */}
          <footer className="resume-footer">
            <div className="footer-line"></div>
            <p>Available for freelance work and full-time opportunities</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Resume;
