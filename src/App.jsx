import "./app.scss";
import { Navbar } from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Intro">
      <Navbar/>
    </section>
    <section id="Skills">Parallax</section>
    <section>Skills</section>
    <section>Parallax</section>
    <section>Project1</section>
    <section>Project1</section>
    <section>Project1</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;