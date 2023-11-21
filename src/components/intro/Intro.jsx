import "./intro.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export const Intro = () => {
  return (
    <div className="intro">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Hey there! I’m Zuheb. A Full-stack web developer
          </motion.h2>
          <motion.p variants={textVariants}>
            Experienced software professional skilled in efficient web app
            development with 1400+ hours of hands-on experience. Mentor to 10+
            junior developers, adept in React, Redux, JavaScript, and Ruby on
            Rails, delivering robust solutions in the industry
          </motion.p>
          <motion.div variants={textVariants} className="buttons">
            <motion.a
              variants={textVariants}
              href="https://drive.google.com/file/d/1f2wskhSC2Kul3Iko3KwFXsEto2el4lC-/view?usp=sharing"
              target="_blank"
            >
              <motion.button variants={textVariants}>
                Get My Resume
              </motion.button>
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Innovative Full-Stack Developer | Creating High-Impact Web Solutions
      </motion.div>
      <div className="imageContainer">
        <img src="./myimg.png" alt="" />
      </div>
    </div>
  );
};
