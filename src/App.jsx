import React, { useRef } from "react";
import "./app.scss";
import { Aboutme } from "./components/aboutme/aboutme";
import { Intro } from "./components/intro/Intro";
import { Navbar } from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import { Contact } from "./components/contact/Contact";
import { Cursor } from "./components/cursor/Cursor";

const App = () => {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return <div>
    <Cursor/>
    <section id="Intro">
      <Navbar/>
      <Intro scrollToContact={scrollToContact}/>
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section className="skills-parent"><Skills/></section>
    <section id="Projects"><Parallax type="projects"/></section>
    <Projects/>
    <section id="About Me"><Aboutme/></section>
    <section ref={contactRef} id="Contact"><Contact/></section>
  </div>;
};

export default App;