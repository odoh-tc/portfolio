import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Certification from "./Certification";
import "./Certifications.css";
import cert1 from "../../assets/alx.png";
import cert2 from "../../assets/hng.png";
function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <SectionHeader title="Certifications" />
        <div className="certifications-content">
          <Certification
            img={cert1}
            title={"ALX Software Engineering"}
            provider={"ALX"}
            date={"05 April 2024"}
            link={"https://intranet.alxswe.com/certificates/Sf3FBRLx9s"}
          />
          <Certification
            img={cert2}
            title={"Docker and Kubernetes"}
            provider={"HNG"}
            date={"02 March 2024"}
            link={"https://certgo.app/c-b67e13ca"}
          />
        </div>
      </div>
    </section>
  );
}

export default Certifications;
