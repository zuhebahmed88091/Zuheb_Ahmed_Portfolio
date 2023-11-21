import { Sidebar } from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

export const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span
             initial={{opacity: 0, scale: 0.5}}
             animate={{opacity: 1, scale: 1}}
             transition={{duration: 0.5}}
            >
                Zuheb Ahmed
            </motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/zuheb-ahmed/">
                    <img src="/linkedin.png" alt="logo" />
                </a>
                <a href="https://twitter.com/ZuhebAhmed88091">
                    <img src="/twitter.png" alt="logo" />
                </a>
                <a href="https://medium.com/@zuhebahmed101625">
                    <img src="/medium.png" alt="logo" />
                </a>
                <a href="https://github.com/zuhebahmed88091">
                    <img src="/github.png" alt="logo" />
                </a>
                <a href="https://wellfound.com/u/zuheb-ahmed-1">
                    <img src="/angelist.png" alt="logo" />
                </a>
            </div>
        </div>
    </div>
  )
}
