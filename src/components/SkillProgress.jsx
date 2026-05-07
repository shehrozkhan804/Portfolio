import React from "react";

function SkillProgress() {
  const skills = [
    { name: "HTML", percent: 95 },
    { name: "CSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "React", percent: 80 },
    { name: "Node.js", percent: 75 },
    { name: "Express", percent: 70 },
    { name: "MongoDB", percent: 75 },
    { name: "MySQL", percent: 65 },
    { name: "Tailwind", percent: 85 },
  ];

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <section className="skill-section">

      <h1 className="skill-title">My Skills</h1>

      <div className="circle-grid">

        {skills.map((skill, i) => {
          const offset =
            circumference - (skill.percent / 100) * circumference;

          return (
            <div key={i} className="circle-card">

              <div className="circle-wrap">
                <svg width="110" height="110">
                  
                  {/* BACK CIRCLE */}
                  <circle
                    cx="55"
                    cy="55"
                    r={radius}
                    strokeWidth="10"
                  />

                  {/* PROGRESS CIRCLE */}
                  <circle
                    cx="55"
                    cy="55"
                    r={radius}
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                  />

                </svg>

                <div className="circle-text">
                  {skill.percent}%
                </div>
              </div>

              <p>{skill.name}</p>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default SkillProgress;