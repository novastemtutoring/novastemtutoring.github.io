import React from "react";
import "./pricing.css";
import { pricing } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Pricing() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{pricing.title}</h1>
          <p className="subTitle project-subtitle">{pricing.subtitle}</p>
        </div>
      </div>
    </Fade>
  );
}
