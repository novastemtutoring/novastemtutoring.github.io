import React from "react";
import "./whatITeach.css";
import SubjectsSummary from "../../components/subjectsSummary/subjectsSummary";
import { whatITeach } from "../../portfolio";
import {Fade} from "react-reveal";
// import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

export default function WhatITeach() {
  return (
    <div className="main" id="whatITeach">
      <div className="skills-main-div">
        <Fade left duration={1000}>
        <div className="skills-image-div">
          <img alt="Saad Working" src={require("../../assets/images/ladyteacher.png")}></img>
        </div>
        </Fade>
        <Fade right duration={1000}>
        <div className="skills-text-div">
          <h1 className="skills-heading">{whatITeach.title} </h1>
          <p className="subTitle skills-text-subtitle">{whatITeach.subTitle}</p>
          <SubjectsSummary />
          <div>
            {whatITeach.subjects.map(skills => {
              return <p className="subTitle skills-text">{skills}</p>;
            })}
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
}
