import { GoCodeReview } from "react-icons/go";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  web1,
  web2,
  web3,
  web4,
  web5,
  web6,
  portfolio1,
  portfolio2,
  portfolio3,
  app1,
  app2,
  app3,
  app4,
  app5,
  app6,
  app7,
  app8,
  java,
  node,
  mangodb,
  flutter,
  firebase,
  google,
  css,
  html,
  javascript,
  tailwind,
  express,
  react,
  SQL,
  emailicon,
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
    id: 0,
    title: "Personal Portfolio",
    image: project1,
    images: [portfolio1,
      portfolio2,
      portfolio3,],
      imageDescriptions: [
        "I developed a responsive and visually appealing React.js portfolio with a seamless user experience. I used React Router DOM for page navigation, and the portfolio is deployed on GitHub Pages. The portfolio features my image with a background circle animation, a fixed navbar that smoothly navigates to each section, and an 'About Me' section. My credentials are displayed with hover and color gradient effects.",
        "Showcased my technical proficiency in the Skills Section with interactive icons for each technology I’ve mastered, offering detailed tooltips on hover. In the Project Section, I created a dynamic product details page featuring an image carousel, where the project description changes based on the selected image, along with clear call-to-action buttons for Live Demo and View PPT for an immersive experience.",
        "Designed an intuitive Contact Me section with a user-friendly form powered by Web3Forms, enabling seamless email communication. The Footer is sleek and responsive, offering easy access to key links, while the Menu Button provides a mobile-exclusive navigation option for a smooth experience on smaller screens.",
       ],
    category: "Web",
    description: `Developed a responsive and visually appealing React.js portfolio with a seamless user experience.`,
    pptLink: "https://1drv.ms/p/s!ArGanG49P7eFcOSm6mXwcv4WYAE?e=N0hLak",
    demoLink: "https://eswaran-jm.github.io/eswar-portfolio/",
    stacks: [
      { name: "ReactJs", logo: react },
      { name: "JavaScript", logo: javascript }
    ],
  },
  {
    id: 1,
    title: "E-Commerce Web Application",
    image: project2,
    images: [web1,
      web2,
      web3,
      web4,
      web5,
      web6,],
      imageDescriptions: [
        "Developed a dynamic e-commerce website using MERN and Redux with user authentication via JWT and secure online payments through Razorpay, ensuring a seamless and protected shopping experience.",
        "Enhanced the shopping experience by adding an animated New Arrivals section with auto-swiping to showcase the latest trends, a dedicated Best Deals area to highlight time-sensitive offers, and a dynamic product listing page featuring advanced filter, sort, and search options for seamless product discovery and improved user interaction.",
        "Developed a comprehensive Orders page featuring real-time order confirmation, integrated Razorpay payment gateway for secure transactions, delivery detail tracking, and instant customer support options via Call and WhatsApp to ensure a smooth and trustworthy post-purchase experience.",
        "Built a user-friendly Cart section allowing customers to add or reduce product quantity, remove items with ease, and proceed to checkout seamlessly, complemented by a mobile-exclusive menu button for smooth navigation on smaller screens.",
        "Created a secure Admin Dashboard accessible only to authorized admin users, displaying key metrics like recent orders, total revenue, and product count, along with a robust user management panel to add new users and update roles for existing ones.",
        "Implemented a powerful Product Management system enabling admins to add, edit, and delete products efficiently, with seamless Cloudinary integration for secure image storage and automatic image optimization to enhance performance and load times."
      ],
    category: "Web",
    description: `Developed a dynamic e-commerce website using MERN and Redux with user authentication and secure payments.`,
    pptLink: "https://1drv.ms/p/s!ArGanG49P7eFdfrsRZbrzylDD5k?e=tU8p8e",
    demoLink: "https://mm-boutique.vercel.app/",
    stacks: [
      { name: "MongoDB", logo: mangodb },
      { name: "Express", logo: express },
      { name: "ReactJs", logo: react },
      { name: "NodeJs", logo: node },
      { name: "Tailwind", logo: tailwind }
    ],
  },
  {
    id: 2,
    title: "E-Commerce Mobile Application",
    image: project3,
    images: [app1,
      app2,
      app3,
      app4,
      app5,
      app6,
      app7,
      app8,],
      imageDescriptions: [
        "Developed a dynamic e-commerce application using Flutter and Firebase, featuring user authentication, Google Cloud storage for managing product images, and secure payment integration with Razorpay. The app is installable via a dedicated React-based website that provides clear download instructions, and is seamlessly deployed on Netlify for easy access.",
        "Designed an intuitive Login & Signup screen using Firebase Authentication with OAuth integration, enabling users to sign in or register seamlessly via Google or email for a smooth and secure onboarding experience.",
        "Crafted a modern Home screen with a sleek bottom navigation bar, showcasing category-wise item listings and new arrivals, complemented by a dedicated Category screen featuring search, filter, and sort functionalities for an enhanced product discovery experience.",
        "Implemented a seamless Favorites screen allowing users to view and manage their saved items, along with a personalized Profile screen displaying user details and account information for a tailored shopping experience.",
        "Developed a detailed Product Detail screen featuring high-quality images, dynamic descriptions, and intuitive Add to Cart and Buy Now options, complemented by a functional Cart screen that enables users to adjust item quantities, remove products, and proceed to checkout with a dedicated Place Order button.",
        "Implemented a comprehensive Order screen displaying all user purchases, along with an Order Details screen that includes real-time order status, a Call Support option, and a Confirm Order dialog to collect delivery information and facilitate payment through Razorpay or Place Order via Call functionality for user convenience.",
        "Developed an Admin screen featuring complete Product Management and Order Management capabilities, allowing administrators to view, add, edit, and delete products, as well as monitor and update order statuses efficiently through a clean and organized interface.",
        "Built Add and Edit Product screens with intuitive forms that allow admins to input and update product details, upload and manage images stored securely on Google Cloud, and delete products when necessary, streamlining inventory management with ease."
      ],
    category: "App",
    description: `Developed a dynamic e-commerce application using Flutter and Firebase with user authentication and secure payments.`,
    pptLink: "https://1drv.ms/p/s!ArGanG49P7eFd8Cy54EH9VqxRAc?e=JXrJh1",
    demoLink: "https://mm-boutique-app-download.netlify.app/",
    stacks: [
      { name: "Flutter", logo: flutter },
      { name: "Firebase", logo: firebase },
      { name: "Google Cloud", logo: google }
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
        level: "Beginner",
        logo: tailwind,
      },

      {
        skill: "React",
        level: "Beginner",
        logo: react,
      },

    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Java",
        level: "Intermediate",
        logo: java,
      },
      {
        skill: "Nodejs",
        level: "Beginner",
        logo: node,
      },
      {
        skill: "MangoDB",
        level: "Beginner",
        logo: mangodb,
      },
      {
        skill: "Expressjs",
        level: "Beginner",
        logo: express,
      },
      {
        skill: "SQL",
        level: "Intermediate",
        logo: SQL,
      },
    ],
  },
  {
    title: "App Development",
    data: [
      {
        skill: "Flutter",
        level: "Beginner",
        logo: flutter,
      },
      {
        skill: "Google Cloud",
        level: "Beginner",
        logo: google,
      },
      {
        skill: "Firebase",
        level: "Beginner",
        logo: firebase,
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
    at: "- Stigmata Techno Solutions",
    title: "Internship",
    icon: <GoCodeReview />,
    description: `Worked on developing and maintaining web applications, contributing to both front-end and back-end tasks. Gained experience in coding, debugging, and API integration.`,
  },
  {
    name: "B.E Computer Science",
    at: "- SRM Valliammai Engineering college (2020-2024)",
    title: "College",
    icon: < IoSchoolOutline />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Bachelor of Engineering in Computer Science
Graduated with a CGPA of 7.88, showcasing strong technical knowledge and a proactive approach to learning through projects, workshops, and internships.`,
  },
  {
    at: "- Everwin Matriculation Higher Secondary School (2020)",
    name: "SSCL & HSC",
    title: "School",
    icon: <LiaSchoolSolid />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Achieved 89.8% in SSLC and 70.1% in HSC, demonstrating consistent academic performance and a solid foundation in core subjects, along with problem-solving and adaptability skills.`,
  },
];

