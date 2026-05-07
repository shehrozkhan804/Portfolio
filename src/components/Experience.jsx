import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaServer, FaPaintBrush } from "react-icons/fa";

function Experience() {
  return (
    <div className="experience">

      {/* TITLE */}
      <motion.h1
        className="experience-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaBriefcase className="exp-icon" />
        Experience
      </motion.h1>
      {/* 🟡 FULL STACK */}
      <motion.div
        className="content1"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.03 }}
      >
        <div className="top-row">
          <div className="text-block">
            <h3>
              <FaServer className="role-icon backend" />
              MERN Stack Developer
            </h3>
            <div className="divider"></div>
            <p className="company">Learning & Practice Projects</p>
          </div>
          <button className="btn1">2024 - Present</button>
        </div>

        <p className="desc">
          Developed full-stack apps using MongoDB, Express, React, Node.js.
        </p>
      </motion.div>
      {/* 🟢 BACKEND FIRST */}
      <motion.div
        className="content1"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
        <div className="top-row">
          <div className="text-block">
            <h3>
              <FaServer className="role-icon backend" />
              Backend Developer (Node.js)
            </h3>
            <div className="divider"></div>
            <p className="company">APIs & Server Side Projects</p>
          </div>
          <button className="btn1">2024 - Present</button>
        </div>

        <p className="desc">
          Built REST APIs using Node.js & Express, handled authentication,
          database integration (MongoDB), and backend logic for full-stack apps.
        </p>
      </motion.div>

      {/* 🔵 FRONTEND */}
      <motion.div
        className="content1"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
      >
        <div className="top-row">
          <div className="text-block">
            <h3>
              <FaLaptopCode className="role-icon frontend" />
              Frontend Developer (React)
            </h3>
            <div className="divider"></div>
            <p className="company">Personal Projects / Freelance</p>
          </div>
          <button className="btn1">2024 - Present</button>
        </div>

        <p className="desc">
          Built responsive websites using React.js, API integration, and modern UI design.
        </p>
      </motion.div>

      {/* 🟣 UI/UX DESIGN */}
      <motion.div
        className="content1"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.03 }}
      >
        <div className="top-row">
          <div className="text-block">
            <h3>
              <FaPaintBrush className="role-icon design" />
              UI/UX & Web Designer
            </h3>
            <div className="divider"></div>
            <p className="company">Freelance / Portfolio Work</p>
          </div>
          <button className="btn1">2023 - Present</button>
        </div>

        <p className="desc">
          Designed modern UI interfaces with focus on user experience and clean layouts.
        </p>
      </motion.div>



    </div>
  );
}

export default Experience;