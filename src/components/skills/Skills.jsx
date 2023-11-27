import "./skills.scss";
import { motion } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

export const Skills = () => {
  return (
    // initial="initial" whileInView="animate"
    <motion.div className="skills" variants={variants} initial="initial" whileInView="animate"> 
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="people" />
            <h1>Crafting<motion.b whileHover={{color:"orange"}}> Solutions</motion.b></h1>
        </div>
        <div className="title">
            <h1>With Diverse <motion.b whileHover={{color:"orange"}}>Skills</motion.b></h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <div className="box">
            <h2>Front-End</h2>
            <ul>
                <li>CSS3</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>Single Page App</li>
                <li>Responsive Design</li>
            </ul>
        </div>
        <div className="box">
            <h2>Back-End</h2>
            <ul>
                <li>Ruby</li>
                <li>PostgreSQL</li>
                <li>Ruby on Rails</li>
            </ul>
        </div>
        <div className="box">
            <h2>Tools & Methods</h2>
            <ul>
                <li>Git</li>
                <li>TDD</li>
                <li>Jest</li>
                <li>Rspec</li>
                <li>Github</li>
                <li>Render</li>
                <li>Webpack</li>
            </ul>
        </div>
        <div className="box">
            <h2>Professional</h2>
            <ul>
                <li>Leadership</li>
                <li>Remote Work</li>
                <li>Problem Solving</li>
                <li>Pair-Programming</li>
                <li>Team Collaboration</li>
                <li>Conflict Management</li>
            </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};
