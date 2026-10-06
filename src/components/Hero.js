// 📸 To change your photo, replace src/assets/profile.jpg with your own image (same name).
import profileImage from "../assets/profile.jpg";
import { links } from "../data/projects";
import { SocialLinks } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text enter">
          <p className="eyebrow"><span className="pulse" /> Open to internships & projects</p>
          <h1>
            Hi, I'm <span className="grad">Divakar</span>
          </h1>
          <h2 className="hero-role">Full Stack Developer & Cybersecurity Enthusiast</h2>
          <p className="lead">
            I build web applications end to end — from React interfaces to Node.js & Express backends
            with MySQL and MongoDB — while exploring network security and intrusion detection to make
            software that is practical and secure.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
          <SocialLinks links={links} />
        </div>
        <div className="hero-photo enter delay">
          <div className="ring" />
          <div className="ring ring2" />
          <img src={profileImage} alt="Portrait of Divakar S" className="avatar" />
          <span className="chip chip1">{"{ React }"}</span>
          <span className="chip chip2">Node.js</span>
          <span className="chip chip3">🛡 IDS</span>
        </div>
      </div>
    </section>
  );
}
