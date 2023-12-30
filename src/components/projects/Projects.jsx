import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { air, space, book, calc } from "../../assets";

const items = [
  {
    id: 1,
    title: "Math Magician",
    img: calc,
    git: "https://github.com/zuhebahmed88091/Math_Magician",
    live: "https://math-magician-5n5e.onrender.com",
    tech1: 'React',
    tech2: 'HTML',
    tech3: 'CSS',
    tech4: 'API',
    desc: "Math-Magicians: A SPA for math enthusiasts to compute and explore math-related quotes.",
  },
  {
    id: 2,
    title: "AirVibe",
    img: air,
    git: "https://github.com/zuhebahmed88091/AirVibe",
    live: "https://airvibe.onrender.com",
    tech1: 'React',
    tech2: 'Redux',
    tech3: 'CSS',
    tech4: 'API',
    desc: "AirVibe: Empowering eco-social change, live air updates, united for a greener tomorrow. Join us for a sustainable future!",
  },
  {
    id: 3,
    title: "Space Traveler's Hub",
    img: space,
    git: "https://github.com/zuhebahmed88091/Space_Travelers_Hub",
    live: "https://microverse-space-travelers-hub.onrender.com",
    tech1: 'React',
    tech2: 'Redux',
    tech3: 'CSS',
    tech4: 'API',
    desc: "Space Traveler's Hub: Using SpaceX API, our web app enables booking rockets and joining space missions for commercial and scientific travel.",
  },
  {
    id: 4,
    title: "Bookstore",
    img: book,
    git: "https://github.com/zuhebahmed88091/Bookstore",
    live: "https://bookstore-5p2j.onrender.com",
    tech1: 'React',
    tech2: 'Redux',
    tech3: 'HTML',
    tech4: 'CSS',
    desc: "Bookstore: Manage book details easily through an API, ensuring seamless access and updates for users.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="project" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <ul>
                <li>{item.tech1}</li>
                <li>{item.tech2}</li>
                <li>{item.tech3}</li>
                <li>{item.tech4}</li>
            </ul>
            <div className="buttons">
                <a href={item.git} target="_blank">
                    <button>Github</button>
                </a>
                <a href={item.live} target="_blank">
                    <button>Demo</button>
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
