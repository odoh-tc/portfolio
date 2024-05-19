import React, { useEffect, useRef } from "react";
import "./Skills.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";

function Skills() {
  const progressBarRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    progressBarRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelector(".progress-bar").classList.add("animate");
      }
    });
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeader title="My Skills" />
        <div className="skills-content">
          <div className="left-skill">
            <h3>Technical Skills</h3>
            <TechnicalSkills
              skillName={"Python"}
              skillLevel={90}
              ref={(el) => (progressBarRefs.current[0] = el)}
            />
            <TechnicalSkills
              skillName={"FastAPI"}
              skillLevel={90}
              ref={(el) => (progressBarRefs.current[1] = el)}
            />
            <TechnicalSkills
              skillName={"PostgreSQL"}
              skillLevel={90}
              ref={(el) => (progressBarRefs.current[2] = el)}
            />
            <TechnicalSkills
              skillName={"MySQL"}
              skillLevel={90}
              ref={(el) => (progressBarRefs.current[3] = el)}
            />
            <TechnicalSkills
              skillName={"DOCKER"}
              skillLevel={90}
              ref={(el) => (progressBarRefs.current[4] = el)}
            />
            <TechnicalSkills
              skillName={"KUBERNETES"}
              skillLevel={70}
              ref={(el) => (progressBarRefs.current[5] = el)}
            />
            <TechnicalSkills
              skillName={"GIT"}
              skillLevel={90}
              ref={(el) => (progressBarRefs.current[6] = el)}
            />
            <TechnicalSkills
              skillName={"ReactJs"}
              skillLevel={70}
              ref={(el) => (progressBarRefs.current[7] = el)}
            />
          </div>
          <div className="right-skill">
            <h3>Soft Skills</h3>
            <div className="professional">
              <SoftSkills skillName={"Problem-solving"} skillLevel={85} />
              <SoftSkills skillName={"Team work"} skillLevel={85} />
              <SoftSkills skillName={"Time management"} skillLevel={85} />
              <SoftSkills skillName={"Communication"} skillLevel={85} />
              <SoftSkills skillName={"Attention to detail"} skillLevel={85} />
              <SoftSkills skillName={"Self-Motivation"} skillLevel={90} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
