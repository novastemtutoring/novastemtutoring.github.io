import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import { greeting, education } from "../../portfolio";
import reactEasyEmoji from "react-easy-emoji";

function Header() {
  const exp = education.viewExperiences;
  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color">{reactEasyEmoji("⚛️")}</span>
          <span className="logo-name">NVST</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#whatITeach">What I Teach</a>
          </li>
          {exp === true &&
            <li>
              <a href="#education">My Education</a>
            </li>
          }
          <li>
            <a href="#teachingExperience">Teaching Experience</a>
          </li>

          <li>
            <a href="#projects">Pricing</a>
          </li>

          <li>
            <a href="#aboutMe">About Me</a>
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
