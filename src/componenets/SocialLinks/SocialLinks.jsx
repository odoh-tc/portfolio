import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialLinks.css"; // Make sure this is the correct path to your CSS file
import ReactGA from "react-ga4";

function SocialLinks({ fixed }) {
  const trackSocialLinkClick = (platform) => {
    ReactGA.event({
      category: "Social Link",
      action: `Clicked ${platform}`,
    });
  };

  return (
    <div className={`nav-links-icons ${fixed ? "fixed" : ""}`}>
      <ul className="nav-links">
        <li>
          <a
            href="https://drive.google.com/uc?export=download&id=1XGRAZ-zTLRxDbfdPPxiyX4SXkcCgRkWx"
            rel="noreferrer"
            target="_blank"
            onClick={() => trackSocialLinkClick("Resume")}
          >
            <FontAwesomeIcon icon={faFilePdf} size="lg" color="#FF5722" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/odoh-tc"
            rel="noreferrer"
            target="_blank"
            onClick={() => trackSocialLinkClick("GitHub")}
          >
            <FontAwesomeIcon icon={faGithub} size="lg" color="#333333" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/odoh-tc/"
            rel="noreferrer"
            target="_blank"
            onClick={() => trackSocialLinkClick("LinkedIn")}
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" color="#0a66c2" />
          </a>
        </li>
        <li>
          <a
            href="tel:+2348105583181"
            onClick={() => trackSocialLinkClick("WhatsApp")}
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" color="#25D366" />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/_maximmo"
            rel="noreferrer"
            target="_blank"
            onClick={() => trackSocialLinkClick("Twitter")}
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" color="#1DA1F2" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
