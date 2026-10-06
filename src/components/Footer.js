import { links } from "../data/projects";
import { SocialLinks } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Divakar S</strong>
          <p>Full Stack Developer</p>
        </div>
        <SocialLinks links={links} />
        <p className="copy">© {new Date().getFullYear()} Divakar S. All rights reserved.</p>
      </div>
    </footer>
  );
}
