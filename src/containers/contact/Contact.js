import React from "react";
import "./Contact.css";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Contact() {
    return (
        <div className="main" id="contact">
            <div className="contact-main-div">
                <Fade left duration={1000}>
                    <div className="contact-text-div">
                        <h1 className="contact-heading">{contactInfo.title} </h1>
                        <p className="subTitle contact-text-subtitle">{contactInfo.subtitle}</p>
                        <SocialMedia />
                        <p className="subTitle contact-text-subtitle">New to NoVA STEM?</p>
                        <p className="contact-text">{contactInfo.newtous}</p>
                    </div>
                </Fade>
                <Fade right duration={1000}>
                    <div className="contact-image-div">
                        <iframe class="responsive-iframe"
                            src="https://docs.google.com/forms/d/e/1FAIpQLSeCs-LBDdpXNDuLnj0iTrq6uQ36fTPh1Ku8zBpWKyNiedY41Q/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
