import React from "react";
import "./education.css";
import EducationCard from "../../components/educationCard/educationCard";
import { education } from "../../portfolio";
import { Fade } from "react-reveal";


export default function Education() {
    if (education.viewExperiences) {
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                    <div className="experience-container" id="workExperience">
                        <div>
                            <h1 className="experience-heading">Education</h1>
                            <div className="experience-cards-div">
                                {education.experience.map((card) => {
                                    return (
                                        <EducationCard cardInfo={{
                                            company: card.company,
                                            desc: card.desc,
                                            date: card.date,
                                            companylogo: card.companylogo,
                                            role: card.role,
                                            descBullets: card.descBullets
                                        }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
    return null;
}
