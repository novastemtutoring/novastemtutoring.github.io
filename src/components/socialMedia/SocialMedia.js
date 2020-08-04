import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (

    <div className="social-media-div">

      {socialMediaLinks.phone ?
        (<a href={`tel:${socialMediaLinks.phone}`} className="icon-button phone" target="_blank">
          <i className="fas fa-phone"></i>
          <span></span>
        </a>)
        :
        null}

      {socialMediaLinks.gmail ?
        <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" target="_blank">
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
        :
        null}

      {/* {socialMediaLinks.github ?
        (<a href={socialMediaLinks.github} className="icon-button github" target="_blank">
          <i className="fab fa-github"></i>
          <span></span>
        </a>)
        :
        null} */}

      {socialMediaLinks.linkedin ?
        <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank">
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
        :
        null}


      {/* 
      {socialMediaLinks.gitlab ?
        <a href={socialMediaLinks.gitlab} className="icon-button gitlab" target="_blank">
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
        :
        null} */}

      {socialMediaLinks.facebook ?
        <a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank">
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
        :
        null}

      {socialMediaLinks.instagram ?
        <a href={socialMediaLinks.instagram} className="icon-button instagram" target="_blank">
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
        :
        null}

      {socialMediaLinks.twitter ?
        <a href={socialMediaLinks.twitter} className="icon-button twitter" target="_blank">
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>
        :
        null}

    </div>
  );
}
