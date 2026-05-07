import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ContactUs from "./components/ContactUs";
import SkillProgress from "./components/SkillProgress";
import CursorGlow from "./components/CursorGlow";

import "./App.css";

function App() {

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const elements = document.querySelectorAll(".parallax");

        elements.forEach((el) => {
          const speed = el.getAttribute("data-speed") || 0.2;
          const yPos = window.scrollY * speed;
          el.style.transform = `translateY(${yPos}px)`;
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <CursorGlow />

      <Routes>

        {/* SINGLE PAGE PORTFOLIO */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Experience />
              <Skills />
              <SkillProgress />
              <ContactUs />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;