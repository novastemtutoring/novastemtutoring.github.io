
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Northern Virginia STEM Tutoring",
  title: "Welcome!",
  subTitle: "I am a tutor located in the Northern Virginia area. I specialize in physics and mathematics courses for undergraduate and advanced high school students",
  resumeLink: "https://jmhays.github.io/cv"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://jmhays.github.io",
  gmail: "northernvirginiastemtutoring@gmail.com",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I Teach",
  subTitle: "",
  skills: [
    "introductory physics and mathematics courses including:",
    emoji("⚡ AP calculus/ first year undergraduate calculus"),
    emoji("⚡ AP physics/ first year physics (with calculus)"),
    emoji("⚡ linear algebra"),
    emoji("⚡ probability and statistics"),
    "upper level physics courses including:",
    emoji("⚡ classical mechanics"),
    emoji("⚡ quantum mechanics/ physical chemistry"),
    emoji("⚡ thermodynamics and statistical mechanics"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "physics",
      fontAwesomeClassname: "fas fa-atom"
    },
    {
      skillName: "mathematics",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AP Physics/ Physics 101 & 102",  //Insert stack or technology you have experience in
      progressPercentage: "100%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Thermodynamics & Statistical Mechanics",
      progressPercentage: "100%"
    },
    {
      Stack: "Classical Mechanics",
      progressPercentage: "80%"
    },
    {
      Stack: "Quantum Mechanics/Physical Chemistry",
      progressPercentage: "80%"
    },
    {
      Stack: "General Chemistry",
      progressPercentage: "60%"
    },
    {
      Stack: "Linear Algebra",
      progressPercentage: "100%"
    },
    {
      Stack: "Probability and Statistics",
      progressPercentage: "90%"
    },
    {
      Stack: "AP Calculus/ Calculus 101",
      progressPercentage: "100%"
    },
    {
      Stack: "Multivariate Calculus",
      progressPercentage: "100%"
    },
    {
      Stack: "Programming (Python)",
      progressPercentage: "60%"
    },

  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Ph.D Biomedical Engineering",
      company: "University of Virginia",
      companylogo: require("./assets/images/uva_centered_logo.jpg"),
      date: "2014-2019",
      desc: "studied the behavior of proteins from the perspective of a physicist",
      descBullets: [
        "advanced statistical mechanics and thermodynamics",
        "advanced linear algebra",
        "probability and statistics",
        "python"
      ]
    },
    {
      role: "B.S. Physics, Applied Mathematics",
      company: "College of William & Mary",
      companylogo: require("./assets/images/williamandmary.png"),
      date: "2009 - 2013",
      desc: "summa cum laude",
      descBullets: [
        "physics 101 and 102",
        "classical mechanics",
        "quantum mechanics",
        "nonlinear dynamics",
        "thermodynamics and statistical mechanics",
      ]
    },

  ]
};

// /* Your Open Source Section to View Your Github Pinned Projects
// To know how to get github key look at readme.md */

// const openSource = {
//   githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
//   githubUserName: "jmhays", // Change to your github username to view your profile in Contact Section.
//   showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
// };


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Pricing",
  subtitle: "Hourly rates are determined on a case-by-case basis. Please contact me to set up a free 15 minute consultation!",
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Teaching Experience"),
  subtitle: "",

  achivementsCards: [
    {
      title: "Biophysical Principles Co-Instructor",
      subtitle: "Designed and taught curriculum on intro thermodynamics and statistical mechanics for first graduate students",
      image: require("./assets/images/heat_engine.png"),
      footerLink: [
        { name: "Take a look at my course website!", url: "https://jmhays.github.io/biop-web" }
      ]
    },
    {
      title: "IDEAS Lab: Teaching Assistant",
      subtitle: "Supervised laboratory work of undergraduate biomedical engineering students.",
      image: require("./assets/images/ideaslab.jpg"),
      footerLink: [

        { name: "Independently developed a course website to help students with scientific writing", url: "https://ideaslab2018.wordpress.com/" }
      ]
    },
    {
      title: "Linear Algebra: Teaching Assistant",
      subtitle: "Graded and held office hours with undergraduate engineering students",
      image: require("./assets/images/linearalgebra.png"),
      footerLink: [

      ]
    },
    {
      title: "Undergraduate Research Mentor",
      subtitle: "Ongoing mentorship of undergraduate student in biomedical engineering (2018-present)",
      image: require("./assets/images/uva_centered_logo.jpg"),
      footerLink: [
      ]
    },
    {
      title: "REU Mentor",
      subtitle: "Mentored undergraduate student in biomedical engineering for one summer of research",
      image: require("./assets/images/uva_centered_logo.jpg"),
      footerLink: [
      ]
    },

  ]
};

const contactInfo = {
  title: emoji("Contact"),
  subtitle: "Set up a consultation or tutoring session today!",
  number: "",
  email_address: "novastemtutoring@gmail.com"
};

const covid = {
  title: "Coronavirus information",
  subTitle: "ALL TUTORING WILL REMAIN VIRTUAL UNTIL FURTHER NOTICE",
  text: "I am very familiar with online learning and presentation platforms! Throughout my graduate studies, " +
    " I worked extensively with scientists all over the world, including people based in Sweden, Japan, and Turkey." +
    " While Google Meet is my preffered platform (coupled with Jamboard), I am also familiar with Zoom and Skype. We can certainly find a " +
    "virtual solution in these difficult times!"
}


export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  // openSource,
  bigProjects,
  achievementSection,
  covid,
  contactInfo,
};
