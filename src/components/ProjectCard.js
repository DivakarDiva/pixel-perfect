import { GithubIcon } from "./Icons";

export default function ProjectCard({ project, index }) {
  const p = project;
  return (
    <article className={`project glass reveal accent-${p.accent} ${p.featured ? "featured" : ""} ${p.crud ? "crud" : ""}`}>
      <div className="project-top">
        <span className="project-num">0{index + 1}</span>
        <span className="project-tag">{p.tag}</span>
      </div>
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      {p.crud ? (
        <div className="crud-grid">
          {p.features.map((f) => <span key={f} className="crud-op">{f[0]}<small>{f}</small></span>)}
        </div>
      ) : (
        <ul className="features">
          {p.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      )}
      <div className="badges">
        {p.tech.map((t) => <span key={t} className="badge">{t}</span>)}
      </div>
      <div className="project-links">
        <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} source code`}><GithubIcon size={16} /> Code</a>
        <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`}>Live ↗</a>
      </div>
    </article>
  );
}
