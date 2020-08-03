import React from "react";
import "./teachingExperience.css";
import TeachingCard from "../../components/teachingCard/teachingCard";
import { teachingExperience } from "../../portfolio";
import { Fade } from "react-reveal";

export default function TeachingExperience() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="teachingExperience">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">{teachingExperience.title}</h1>
          <p className="subTitle achievement-subtitle">{teachingExperience.subtitle}</p>
        </div>
        <div className="achievement-cards-div">
          {teachingExperience.teachingCards.map(card => {
            return (
              <TeachingCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
