import { useEffect, useState } from "react";

const items = ["Home", "About", "Skills", "Projects", "Journey", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label="Divakar S home">
          <span className="logo-mark">{"</>"}</span> Divakar<span className="dot">.</span>
        </a>
        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav-links ${open ? "show" : ""}`} aria-label="Main">
          {items.map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setOpen(false)}>
              {i}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
