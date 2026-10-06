const steps = [
  { t: "Frontend Development", d: "HTML, CSS and JavaScript fundamentals — building responsive layouts." },
  { t: "React Development", d: "Component-based UIs, state, hooks and API integration." },
  { t: "Backend Development", d: "Node.js & Express.js, REST APIs, authentication and authorization." },
  { t: "Database Development", d: "Data modelling and CRUD with MySQL and MongoDB." },
  { t: "Full Stack Projects", d: "Connecting it all — URL shortener, expense tracker, CRUD apps." },
  { t: "Cybersecurity & Practice", d: "Network security, intrusion detection and continuous practice." },
];

export default function LearningJourney() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <p className="kicker reveal">04 · Learning</p>
        <h2 className="title reveal">My Learning <span className="grad">Journey</span></h2>
        <ol className="timeline">
          {steps.map((s, i) => (
            <li key={s.t} className="reveal">
              <span className="node">{i + 1}</span>
              <div className="glass step">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
