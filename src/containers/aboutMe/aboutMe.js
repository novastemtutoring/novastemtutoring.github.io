import React from "react";
import "./aboutMe.css";
import { aboutMe } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function AboutMe() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="corona-main" id="aboutMe">
        <div className="aboutMe-main">
          <div className="aboutMe-text-div">
            <div>
              <h1 className="aboutMe-text">
                {aboutMe.title}
                <span className="wave-emoji">{}</span>
              </h1>
              <p className="aboutMe-text-p subTitle">{aboutMe.subTitle}</p>
              <p className="aboutMe-text-p">{aboutMe.text}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
