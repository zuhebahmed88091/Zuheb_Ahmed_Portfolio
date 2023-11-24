import "./aboutme.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Aboutme = () => {
  return (
    <motion.div
      className="aboutme"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>About Me</h1>
        </div>
        <div className="textContainer">
          <h2>
            My journey as a web developer spans project leadership and
            contributions using Laravel, HTML, and CSS. At Microverse, I've
            excelled in 15+ projects like Bookstore and AirVibe, employing React
            and Ruby on Rails. As a part-time instructor, I honed communication
            and work ethic. Academic accolades and a published conference paper
            showcase my dedication to innovation. Outside work, achieving 95% in
            school and college demonstrates my strategic work approach.
            Collaborating across three time zones reflects my adaptability and
            remote collaboration skills.
          </h2>
        </div>
        <div className="fun">
            <h3>Fun fact: I love gaming!</h3>
        </div>
      </motion.div>
      <motion.div className="buttonContainer">
        <a
          href="https://drive.google.com/file/d/1f2wskhSC2Kul3Iko3KwFXsEto2el4lC-/view?usp=sharing"
          target="_blank"
        >
          <button className="button">Get My Resume</button>
        </a>
      </motion.div>
    </motion.div>
  );
};
