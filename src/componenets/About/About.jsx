import React from "react";
import "./About.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import exhustedMan from "../../assets/pix.jpeg";
import SocialLinks from "../SocialLinks/SocialLinks";
import Resume from "../../assets/maximo_cv.pdf";
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
              dedicated Pharmacist who has also ventured into the tech world as
              a backend specialist. I recently graduated from the ALX Software
              Engineering program, specializing in backend development.
              Currently, I am advancing my skills in the ALTSchool Software
              Engineering program, focusing on the backend track.
            </p>
            <br />
            <p>
              I have successfully completed a Docker and Kubernetes course by
              HNG, which has equipped me with robust skills in containerization
              and orchestration. My technical proficiency includes working with
              Python and FastAPI, and I am well-versed in database management
              systems like MySQL and PostgreSQL. Additionally, I have experience
              with Docker, Kubernetes, and a foundational understanding of
              front-end technologies like React.
            </p>
            <br />
            <p>
              My diverse background in healthcare and software engineering
              allows me to bring a unique perspective to the tech projects I
              work on. I am passionate about leveraging my skills to contribute
              to meaningful and impactful projects, blending the precision of
              pharmaceuticals with the innovation of technology.
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
