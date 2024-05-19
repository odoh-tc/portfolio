import React from "react";
import Icon from "@mdi/react";
import {
  mdiFilePdfBox,
  mdiGithub,
  mdiLinkedin,
  mdiWhatsapp,
  mdiTwitter,
} from "@mdi/js";
import "./SocialLinks.css";
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
            href="https://docs.google.com/document/d/1HVsbn1HmXHPnMIEIpDlVyLptMLjRyXIWz3gSV7Whnik/edit?usp=sharing"
            rel="noreferrer"
            target="_blank"
            onClick={() => trackSocialLinkClick("Resume")}
          >
            <Icon path={mdiFilePdfBox} size={1} color="#FF5722" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/odoh-tc"
            rel="noreferrer"
            target="_blank"
            onClick={() => trackSocialLinkClick("GitHub")}
          >
            <Icon path={mdiGithub} size={1} color="#333333" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/odoh-tc/"
            rel="noreferrer"
            target="_blank"
            onClick={() => trackSocialLinkClick("LinkedIn")}
          >
            <Icon path={mdiLinkedin} size={1} color="#0a66c2" />
          </a>
        </li>
        <li>
          <a
            href="tel:+2348105583181"
            onClick={() => trackSocialLinkClick("WhatsApp")}
          >
            <Icon path={mdiWhatsapp} size={1} color="#25D366" />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/_maximmo"
            rel="noreferrer"
            target="_blank"
            onClick={() => trackSocialLinkClick("Twitter")}
          >
            <Icon path={mdiTwitter} size={1} color="#1DA1F2" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
