import React from "react";
import { motion } from "framer-motion";

import { FaLaptopCode } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

function Skills() {

  const skills = [
    { icon: <FaHtml5 size={30} color="#e34c26" />, name: "HTML" },
    { icon: <FaCss3Alt size={30} color="#264de4" />, name: "CSS" },
    { icon: <SiJavascript size={30} color="#f0db4f" />, name: "JavaScript" },
    { icon: <FaReact size={30} color="#61DBFB" />, name: "React" },
    { icon: <FaNodeJs size={30} color="#3C873A" />, name: "Node.js" },
    { icon: <SiExpress size={30} color="#ffffff" />, name: "Express" },
    { icon: <SiMongodb size={30} color="#4DB33D" />, name: "MongoDB" },
    { icon: <SiMysql size={30} color="#00758F" />, name: "MySQL" },
    { icon: <SiTailwindcss size={30} color="#38BDF8" />, name: "Tailwind" },
  ];

  return (
    <>
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="experience-title2">
          <br />
          <br />
          <br />
          <br />
          <br />
          <FaLaptopCode className="skill-icon" />
        
          Skills
        </h1>
      </motion.div>

      {/* SKILLS GRID */}
      <div className="skills-container">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: i * 0.1
            }}
            whileHover={{
              scale: 1.08,
              rotateX: 5,
              rotateY: 5
            }}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}

      </div>
    </>
  );
}

export default Skills;