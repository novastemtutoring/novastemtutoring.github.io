import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import { greeting, workExperiences } from "../../portfolio";
import reactEasyEmoji from "react-easy-emoji";

function Header() {
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color">{reactEasyEmoji("🧮")}</span>
          <span className="logo-name">{greeting.username}</span>
          </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Subjects</a>
          </li>
          {exp === true &&
            <li>
              <a href="#experience">My Education</a>
            </li>
          }
          <li>
            <a href="#achievements">Teaching Experience</a>
          </li>
 
          <li>
            <a href="#projects">Pricing</a>
          </li>

          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
