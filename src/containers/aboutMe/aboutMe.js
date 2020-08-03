import React from "react";
import "./aboutMe.css";
import { aboutMe } from "../../portfolio";
import { Fade } from "react-reveal";

export default function AboutMe() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="aboutMe">
        <div>
          <h1 className="skills-heading">{aboutMe.title}</h1>
          <p className="subTitle project-subtitle">{aboutMe.subtitle}</p>
          <p className="project-text">{aboutMe.text}</p>
        </div>
      </div>
    </Fade>
  );
}
