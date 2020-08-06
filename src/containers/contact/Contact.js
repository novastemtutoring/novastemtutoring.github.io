import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Contact() {
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main contact-margin-top" id="contact">
                <div className="contact-div-main">
                    <div className="contact-header">
                        <h1 className="heading contact-title">{contactInfo.title}</h1>
                        <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

                        <div className="contact-text-div">
                            <a className="contact-detail" href={"tel:" + contactInfo.number}>{contactInfo.number}</a>
                            <br /><br />
                            <a className="contact-detail-email"
                                href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
                            <br /><br />
                            <SocialMedia />
                        </div>
                        <p className="subTitle contact-subtitle">New to NoVA STEM? Let's set up a consultation! </p>

                        <p align="center"> <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeCs-LBDdpXNDuLnj0iTrq6uQ36fTPh1Ku8zBpWKyNiedY41Q/viewform?embedded=true" width="640" height="1752" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </p></div>
                </div>
            </div>
        </Fade >
    );
}
