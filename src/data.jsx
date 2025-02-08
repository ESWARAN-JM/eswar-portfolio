import { GoCodeReview } from "react-icons/go";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  python,
  node,
  mangodb,
  css,
  html,
  javascript,
  tailwind,
  express,
  react,
  SQL,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Credentials" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];


export const projects = [
  {
    title: "Personal Portfolio",
    image: project1,
    category: "Web",
    description: `Developed a responsive and visually appealing portfolio website using React.js to showcase my skills, projects, and achievements, ensuring a seamless user experience.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      }
    ],
  },
  {
    title: "E-Commerce Application",
    image: project2,
    category: "Web",
    description: `Developed a dynamic and user-friendly e-commerce website using the MERN stack (MongoDB, Express.js, React.js, and Node.js) with features for product management, user authentication, and secure payment integration.`,
    demoLink: "https://google.com/",
    stacks: [
     
      {
        name: "mangoDB",
        logo: mangodb,
      },
      {
        name: "express",
        logo:express,
      },
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "NodeJs",
        logo: node,
      }
    ],
  },
  {
    title: "Smart Human Computer Interaction",
    image: project3,
    category: "Project",
    description: `Developed a system to enhance user interaction by
converting laptop camera modules into gesture sensors.
Enabled cursor control through real-time gesture
detection using computer vision techniques, minimizing
reliance on traditional input devices.`,
    demoLink: "https://google.com/",
    stacks: [
      
      {
        name: "python",
        logo: python,
      },
     
    ],
  },
  
];

export const skills = [
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Intermediate",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Intermediate",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Intermediate",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      
      {
        skill: "React",
        level: "Intermediate",
        logo: react,
      },
      
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Python",
        level: "Intermediate",
        logo: python,
      },
      {
        skill: "Nodejs",
        level: "Intermediate",
        logo: node,
      },
      {
        skill: "MangoDB",
        level: "Intermediate",
        logo: mangodb,
      },
      {
        skill: "Expressjs",
        level: "Intermediate",
        logo: express,
      },
      {
        skill: "SQL",
        level: "Intermediate",
        logo: SQL,
      },
    ],
  },
  
];
export const contactInfo = [
  {
    name: "Email",
    value: "eswaran22032003@gmail.com",
    link: "mailto:eswaran22032003@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  
  {
    name: "WhatsApp",
    value: "+917358757755",
    link: "https://wa.link/erzlk9",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/ESWARAN-JM",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/eswaran-jm-170998211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
 
];

export const credentials = [
  {
    name: "Full Stack Development",
    at: "- Stigmata Techno Solutions (August 2022)",
    title: "Internship",
    icon: <GoCodeReview />,
    description: `Worked on developing and maintaining web applications, contributing to both front-end and back-end tasks. Gained experience in coding, debugging, and API integration.`,
  },
  {
    name:"B.E Computer Science",
    at:"- SRM Valliammai Engineering college (2020-2024)",
    title: "College",
    icon: < IoSchoolOutline />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Bachelor of Engineering in Computer Science
Graduated with a CGPA of 7.88, showcasing strong technical knowledge and a proactive approach to learning through projects, workshops, and internships.`,
  },
  {
    at:"- Everwin Matriculation Higher Secondary School (2020)",
    name:"SSCL & HSC",
    title: "School",
    icon: <LiaSchoolSolid />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Achieved 89.8% in SSLC and 70.1% in HSC, demonstrating consistent academic performance and a solid foundation in core subjects, along with problem-solving and adaptability skills.`,
  },
];

