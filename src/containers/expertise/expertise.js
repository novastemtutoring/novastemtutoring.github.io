import React from "react";
import "./Progress.css";
import { expertise } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Expertise() {
    if(expertise.viewSkillBars){
        return (
            <Fade bottom duration={1000} distance="20px">
            <div className="skills-container">

                <div className="skills-bar">
                    <h1 className="skills-heading">Expertise</h1>
                    {expertise.experience.map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="skill">
                            <p>{exp.Stack}</p>
                            <div className="meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>
                <div className="skills-image">
                    <img alt="Skills" src={require("../../assets/images/skill.svg")} />
                </div>

            </div>
            </Fade>
        );
    }
    return null;
}
