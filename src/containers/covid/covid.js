import React from "react";
import "./covid.css";
import Button from "../../components/button/Button";
import { covid } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function CovidInformation() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="corona-main" id="covid">
        <div className="covid-main">
          <div className="covid-text-div">
            <div>
              <h1 className="covid-text">
                {" "}
                {covid.title}
                {" "}
                <span className="wave-emoji">{emoji("🦠")}</span>
              </h1>
              <p className="covid-text-p subTitle">{covid.subTitle}</p>
              <p className="covid-text-p">{covid.text}</p>
              <div className="button-covid-div">
                <Button text="Google Meet" href="https://meet.google.com/" />
                <Button text="Jamboard" newTab={true} href="https://edu.google.com/products/jamboard/?modal_active=none" />
                <Button text="Google Classroom" newTab={true} href="https://edu.google.com/products/classroom/?modal_active=none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
