import React from "react";
import "./About.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import exhustedMan from "../../assets/pix.jpeg";
import SocialLinks from "../SocialLinks/SocialLinks";
import Resume from "../../assets/Tochukwu_Odoh_CV.pdf";
import ReactGA from "react-ga4";

const About = () => {
  const trackDownloadResume = () => {
    ReactGA.event({
      category: "Download",
      action: "Download Resume",
    });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeader title="About Me" />
        <div className="about-content">
          <div className="about-content-img" data-aos="fade-right">
            <img src={exhustedMan} alt="Exhausted" />
          </div>
          <div className="about-content-text" data-aos="fade-left">
            <h3 className="about-content-header">Who I Am?</h3>
            <br />

            <p>
              Hello! I'm <span className="about-name">Tochukwu Odoh</span>, a
              creative and detail-oriented software engineer with a strong focus
              on backend development. My expertise centers around building
              robust, scalable systems using Python, FastAPI, along with their
              extensive ecosystems of tools and libraries, allowing for
              efficient and maintainable backend solutions. I am also constantly
              expanding my knowledge in DevOps to optimize and deploy
              high-performing software systems.
            </p>
            <br />
            <p>
              Coming from a background in healthcare, I bring a unique
              perspective that combines precision and problem-solving with a
              passion for technology. I am driven by the opportunity to
              contribute to impactful software projects that solve real-world
              problems and help push innovation forward.
            </p>

            <SocialLinks />
            <div className="resume-btn">
              <a
                className="btn"
                href={Resume}
                download="Resume"
                onClick={trackDownloadResume}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
