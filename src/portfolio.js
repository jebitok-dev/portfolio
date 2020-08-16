﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sharon Jebitok",
  title: "Hi all, I'm Jebitok",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of learning how to build Web applications with JavaScript / Reactjs / Nodejs / bootstrap and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1NKad7Re5cFbx_XasV056x0t8Q8OEGyk_/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/jebitok-dev/",
  linkedin: "https://www.linkedin.com/in/sharon-jebitok/",
  gmail: "sharonkosgei4@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  twitter: "https://twitter.com/Jsebitok",
  medium: "https://medium.com/@SharonJebitok",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "I'm a FullStack developer who learning to write more meaningful code and use the gained skills to build projects.",
  skills: [
    emoji("⚡ Develop Front end / User Interfaces for your web applications"),
    emoji("⚡ Contribute to open source projects and team work tasks.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MondoDB",
      fontAwesomeClassname: "fas fa-database"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "45%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-end (React) Developer",  
      company: "WejapaHQ",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "July 2020 – Present",
      desc: "Internship",
      descBullets: [
        "Mentors share resources for self-paced learning in-line with its curriculum",
        "Working in teams to implement given weekly task using github workflow."
      ]
    },
    {
      role: "Front-End Developer",   
      company: "HNG Internship",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "June 2020 – July 2020",
      desc: "Remote Internship",
      descBullets: [
        "Mainly worked with designers to implement their figma designs using HTML5, CSS, Bootstrap and JS ",
        "Improved interpersonal and leadership skills."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "jebitok-dev", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS I'VE WORKED ON",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://dealrestaurant.netlify.app/"
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      link: "http://spotonsound.netlify.app/"
    },
    {
      link: "https://barbershop-landing-page-jl.netlify.app"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

// const achievementSection = {

//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achivementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       footerLink: [
//         { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
//         { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
//         { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       footerLink: [
//         { name: "Certification", url: "" },
//         { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
//       ]
//     }
//   ]
// };

// Blogs Section

// const blogSection = {

//   title: "Blogs",
//   subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ]
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ]
// };

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-3243454077",
  email_address: "sharonkosgei4@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "  @Jsebitok"  //Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};