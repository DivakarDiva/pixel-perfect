import { useState } from "react";
import emailjs from "@emailjs/browser";
import { links } from "../data/projects";
import { GithubIcon, LinkedinIcon } from "./Icons";

    export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);

    const update = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        setSending(true);
        setSent(false);
        setError(false);

        try {
        await emailjs.send(
            "service_2542qw8",
            "template_yaw226h",
            {
            name: form.name,
            email: form.email,
            message: form.message,
            },
            "Kv92mEknW8kHierxl"
        );

        setSent(true);

        setForm({
            name: "",
            email: "",
            message: "",
        });
        } catch (error) {
        console.error("EmailJS Error:", error);
        setError(true);
        } finally {
        setSending(false);
        }
    };

    return (
        <section id="contact" className="section">
        <div className="container contact-grid">

            <div className="reveal">
            <p className="kicker">05 · Contact</p>

            <h2 className="title">
                Let's <span className="grad">connect</span>
            </h2>

            <p>
                Have an internship, project or idea? Send a message or reach me on
                my profiles.
            </p>

            <div className="contact-links">
                <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass contact-link"
                >
                <LinkedinIcon />
                linkedin.com/in/divakar023
                </a>

                <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass contact-link"
                >
                <GithubIcon />
                github.com/DivakarDiva
                </a>
            </div>
            </div>

            <form className="glass form reveal" onSubmit={submit}>

            <label>
                Name
                <input
                name="name"
                required
                value={form.name}
                onChange={update}
                placeholder="Your name"
                />
            </label>

            <label>
                Email
                <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                />
            </label>

            <label>
                Message
                <textarea
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={update}
                placeholder="Your message"
                />
            </label>

            <button
                type="submit"
                className="btn btn-primary"
                disabled={sending}
            >
                {sending ? "Sending..." : "Send Message"}
            </button>

            {sent && (
                <p className="sent" role="status">
                Message sent successfully! 🚀
                </p>
            )}

            {error && (
                <p className="sent" role="alert">
                Something went wrong. Please try again.
                </p>
            )}

            </form>
        </div>
        </section>
    );
    }
