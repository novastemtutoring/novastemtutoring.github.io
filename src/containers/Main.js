import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import WhatITeach from "./whatITeach/whatITeach";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import TeachingCard from "./teachingExperience/teachingExperience";
import AboutMe from "./aboutMe/aboutMe";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import CovidInformation from "./covid/covid";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <WhatITeach />
        <StackProgress />
        <WorkExperience />
        <TeachingCard />
        <StartupProject />
        <AboutMe />
        <Contact />
        <CovidInformation />
        <Footer />
        <Top />
      </div>
    );
  }
}
