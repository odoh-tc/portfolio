import React from "react";
import "./Footer.css";
import SocialLinks from "../SocialLinks/SocialLinks";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <SocialLinks />
        <div className="foo">
          <img
            src={`${process.env.PUBLIC_URL}/favicon.ico`}
            alt="Maximo logo"
            className="logo"
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          <p>
            &copy; {currentYear} All rights reserved | by{" "}
            <span>Tochukwu Odoh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
