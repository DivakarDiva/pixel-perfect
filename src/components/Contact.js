import { useState } from "react";
import { links } from "../data/projects";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // 📬 Connect an email service here later (e.g. EmailJS / Formspree) using `form`.
    console.log("Contact form:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div className="reveal">
          <p className="kicker">05 · Contact</p>
          <h2 className="title">Let's <span className="grad">connect</span></h2>
          <p>Have an internship, project or idea? Send a message or reach me on my profiles.</p>
          <div className="contact-links">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="glass contact-link"><LinkedinIcon /> linkedin.com/in/divakar023</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="glass contact-link"><GithubIcon /> github.com/DivakarDiva</a>
          </div>
        </div>
        <form className="glass form reveal" onSubmit={submit}>
          <label>Name<input name="name" required value={form.name} onChange={update} placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required value={form.email} onChange={update} placeholder="you@example.com" /></label>
          <label>Message<textarea name="message" rows="5" required value={form.message} onChange={update} placeholder="Your message" /></label>
          <button type="submit" className="btn btn-primary">Send Message</button>
          {sent && <p className="sent" role="status">Thanks! Your message is ready to be sent.</p>}
        </form>
      </div>
    </section>
  );
}
