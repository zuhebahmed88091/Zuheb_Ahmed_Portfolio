import "./app.scss";
import { Intro } from "./components/intro/Intro";
import { Navbar } from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import { Skills } from "./components/skills/Skills";

const App = () => {
  return <div>
    <section id="Intro">
      <Navbar/>
      <Intro/>
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section><Skills/></section>
    <section id="Projects"><Parallax type="projects"/></section>
    <section>Project1</section>
    <section>Project1</section>
    <section>Project1</section>
    <section id="About Me">About Me</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;