import React, { useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga4";
import AOS from "aos";
import "aos/dist/aos.css";
import GoToTopButton from "./componenets/GoToTopButton/GoToTopButton";
import ThemeToggle from "./componenets/ThemeToggle/ThemeToggle";
import Navbar from "./componenets/Navbar/Navbar";
import Home from "./componenets/Home/Home";
import About from "./componenets/About/About";
import Projects from "./componenets/Projects/Projects";
import Skills from "./componenets/ Skills/Skills";
import Certifications from "./componenets/Certifications/Certifications";
import Contact from "./componenets/Contact/Contact";
import Footer from "./componenets/Footer/Footer";
// Google Analytics Measurement ID
const MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENT_ID;

// Initialize Google Analytics
ReactGA.initialize(MEASUREMENT_ID);

// Track initial pageview
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.setAttribute("data-theme", savedTheme);
    } else {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    AOS.init({
      duration: 1500,
      offset: 200,
      delay: 100,
      once: true,
    });
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <main className="App">
      <GoToTopButton />
      <ThemeToggle />
      <Navbar toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
