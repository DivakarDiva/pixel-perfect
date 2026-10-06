const groups = [
  { name: "Frontend", icon: "🎨", items: ["HTML", "CSS", "JavaScript", "React"] },
  { name: "Backend", icon: "⚙️", items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Authorization"] },
  { name: "Databases", icon: "🗄️", items: ["MySQL", "MongoDB"] },
  { name: "Cybersecurity", icon: "🛡️", items: ["Network Security", "Web Security Fundamentals", "IDS / Attack Detection"] },
  { name: "Tools", icon: "🧰", items: ["Git", "GitHub", "VS Code", "Linux", "Nmap"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="kicker reveal">02 · Skills</p>
        <h2 className="title reveal">My <span className="grad">toolkit</span></h2>
        <div className="skills-grid">
          {groups.map((g) => (
            <div key={g.name} className="glass skill-card reveal">
              <div className="skill-head"><span className="skill-icon" aria-hidden="true">{g.icon}</span><h3>{g.name}</h3></div>
              <div className="badges">
                {g.items.map((i) => <span key={i} className="badge">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
