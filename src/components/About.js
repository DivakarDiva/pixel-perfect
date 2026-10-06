const focus = ["Full Stack Development", "React", "Node.js & Express", "MySQL & MongoDB", "REST APIs", "Cybersecurity"];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="reveal">
          <p className="kicker">01 · About</p>
          <h2 className="title">Building the web, <span className="grad">securing</span> it too.</h2>
          <p>
            I'm Divakar S, a developer growing my skills across the full stack. I work with HTML, CSS,
            JavaScript and React on the frontend, and Node.js and Express.js on the backend, connecting
            applications to MySQL and MongoDB through REST APIs.
          </p>
          <p>
            Alongside development, I'm learning cybersecurity — especially network security and
            network intrusion detection — and built an AI-based IDS project that analyses traffic
            features to flag suspicious activity.
          </p>
        </div>
        <div className="glass focus reveal">
          <h3>Currently Focused On</h3>
          <ul>
            {focus.map((f) => (
              <li key={f}><span className="tick">▹</span>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
