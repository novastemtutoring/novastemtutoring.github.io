import React from "react";
import "./subjectsSummary.css";
import { whatITeach } from "../../portfolio";

export default function SubjectsSummary() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {whatITeach.subjectsSummary.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
