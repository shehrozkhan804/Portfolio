import {
  FaInstagram,
  FaYoutube,
  FaDribbble,
  FaBehance,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import image from "../assets/image.jpeg";

function Hero() {

  return (
    <div className="container">

      {/* LEFT SIDE */}
      <motion.div
        className="photo"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="photo1">
          <motion.img
            src={image}
            className="image"
            alt="profile"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </div>

        <span className="span1">
          <span className="dot"></span>
          Available for work
        </span>

        <span className="span2">Shehroz Khan</span>

        {/* SOCIAL ICONS */}
        <div className="social-icons">

          <motion.a
            href="https://www.instagram.com/"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="mailto:sk1331806@gmail.com"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            href="https://www.youtube.com/"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaYoutube />
          </motion.a>

          <motion.a
            href="https://dribbble.com/"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaDribbble />
          </motion.a>

          <motion.a
            href="https://www.behance.net/"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaBehance />
          </motion.a>

        </div>

        {/* BUTTONS */}
        <div className="btns">

          <motion.a
            href="/cv.pdf"
            download
            className="btn download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download CV
          </motion.a>

          <motion.a
            href="mailto:sk1331806@gmail.com"
            className="btn contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope /> Contact Me
          </motion.a>

        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
<h1 className="hello-title">
  Hello{" "}
  <motion.span
    animate={{ rotate: [0, 20, -10, 20, 0] }}
    transition={{
      duration: 1,
      repeat: Infinity,
      repeatDelay: 1,
    }}
    style={{
      display: "inline-block",
      transformOrigin: "70% 70%",
    }}
  >
    👋
  </motion.span>
</h1>

        <h2>
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
              "Database Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <h1>Based in Pakistan.</h1>

        {/* ✅ CONTINUOUS TYPING PARAGRAPH */}
        <p>
          <TypeAnimation
            sequence={[
              "I am a MERN Stack Developer specializing in building modern, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js.",
              2000,
              "",
            ]}
            speed={70}
            repeat={Infinity}
          />
        </p>

        {/* NUMBERS */}
        <div className="numbers">

          <motion.h1
            className="h1text"
            whileHover={{ scale: 1.05 }}
          >
            10
            <br />
            <span className="textspan">
              Completed Projects
            </span>
          </motion.h1>

          <motion.h1
            className="h1text"
            whileHover={{ scale: 1.05 }}
          >
            3
            <br />
            <span className="textspan">
              Years Experience
            </span>
          </motion.h1>

          <motion.h1
            className="h1text"
            whileHover={{ scale: 1.05 }}
          >
            7
            <br />
            <span className="textspan">
              Happy Clients
            </span>
          </motion.h1>

          <motion.h1
            className="h1text"
            whileHover={{ scale: 1.05 }}
          >
            4
            <br />
            <span className="textspan">
              Awards
            </span>
          </motion.h1>

        </div>
      </motion.div>

    </div>
  );
}

export default Hero;