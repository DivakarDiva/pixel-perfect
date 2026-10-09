import { links } from "../data/projects";
import { SocialLinks } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Divakar S</strong>
          <p>Full Stack Developer</p>
          <p><a href="mailto:diva23072008@gmail.com">diva23072008@gmail.com</a></p>
        </div>
        <SocialLinks links={links} />
        <p className="copy">© {new Date().getFullYear()} Divakar S. All rights reserved.</p>
      </div>
    </footer>
  );
}
