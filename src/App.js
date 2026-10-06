import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import LearningJourney from "./components/LearningJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="bg" aria-hidden="true"><span className="blob b1" /><span className="blob b2" /><span className="blob b3" /><span className="grid-bg" /></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
