import React from "react";
import "./Greeting.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {" "}
                {greeting.title}
                {" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              {/* <SocialMedia /> */}
              <div className="button-greeting-div">
                <li>
                  <Button text="Coronavirus information" href="#covid" />
                </li><li>
                  <Button text="Contact Me" href="#contact" /></li>
                <li><Button text="My Academic Creds" newTab={true} href={greeting.resumeLink} />
                </li>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="" src={require("../../assets/images/atom.png")}></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
