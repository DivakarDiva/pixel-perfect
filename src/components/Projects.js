import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="kicker reveal">03 · Projects</p>
        <h2 className="title reveal">Things I've <span className="grad">built</span></h2>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
