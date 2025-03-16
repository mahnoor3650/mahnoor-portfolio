import movieofinder from "../assets/movieofinder.png";
import receipemaker from "../assets/receipemaker.png";
import virtualR from "../assets/virtualR.png";
import stockspotter from "../assets/stockspotter.png";
import project5 from "../assets/project5.webp";
import priscripto from "../assets/priscripto.png";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Mahnoor Khalid",
  role: "Full Stack Web Developer",
  subheading:
    "With 2 years of full-stack development experience, I build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Stock Spotter",
    description:
      "Boosts sales by displaying real-time stock updates and low-stock alerts on product pages. Enhances product visibility and urgency, encouraging faster purchasing decisions. Offers high customization options, allowing seamless integration with Shopify stores.",
    techStack: ["Remix", "Shopify APIs", "GraphQL"],
    imgSrc: stockspotter,
    link: "https://apps.shopify.com/display-available-stock",
  },
  {
    id: 2,
    title: "Movie Finder",
    description:
      "A React-based web application that enables users to search for movies effortlessly. Fetches movie data dynamically and presents detailed information in an intuitive interface.",
    techStack: ["React.js", "Appwrite"],
    imgSrc: movieofinder,
    link: "https://movie-finder-three-brown.vercel.app/",
  },
  {
    id: 3,
    title: "Recipe Maker",
    description:
      "Utilizes a Hugging Face model to suggest recipes based on provided ingredients. Offers an AI-powered solution for efficient meal planning.",
    techStack: ["React.js", "Hugging Face API"],
    imgSrc: receipemaker,
    link: "https://recipe-maker-xi.vercel.app/",
  },
  {
    id: 4,
    title: "VirtualR Landing Page",
    description:
      "A sleek and modern landing page for VirtualR, a service-based platform. Showcases product offerings with a responsive and visually appealing design.",
    techStack: ["React.js", "Tailwind CSS"],
    imgSrc: virtualR,
    link: "https://virtualr-landingpage-one.vercel.app/",
  },
  {
    id: 1,
    title: "Doctor Appointment Booking System",
    description:
      "A full-stack appointment booking platform with patient, doctor, and admin roles, featuring online payments and scheduling.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    imgSrc: priscripto,
    link: "https://prescripto-frontend-alpha.vercel.app/"
  }

  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
  //   techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
  //   imgSrc: project6,
  //   link: "https://example-learningplatform.com",
  // },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Remote – September 2022 – Present",
    role: "Web Developer (Shopify & React)",
    company: "Redapes.se",
    description:
      "Led the development of Shopify apps and React web applications, ensuring seamless integration with Shopify APIs. Designed and implemented scalable solutions using Remix, GraphQL, and modern frontend frameworks. Optimized application performance and user experience, contributing to increased client satisfaction. Collaborated with cross-functional teams to define requirements, troubleshoot issues, and deploy high-quality software solutions.",
    techStack: ["React.js", "Remix", "NodeJs"],
  },
  {
    yearRange: "2023 - Present",
    role: "Freelance Developer",
    company: "Upwork & Fiverr",
    description:
      "Delivered custom web applications for clients, specializing in React.js, Node.js, and Shopify app development. Provided end-to-end solutions, from requirement gathering to deployment. Ensured high-quality code, performance optimization, and user-friendly interfaces. Managed multiple projects simultaneously, meeting deadlines and exceeding client expectations.",
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "NodeJs",
      "MySQL",
    ],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "International Islamic University Islamabad",
    duration: "2018 - 2022",
    description:
      "Graduated with Bachelor in Software Engineering, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  // {
  //   id: 2,
  //   degree: "Master of Science in Software Engineering",
  //   institution: "MIT",
  //   duration: "2016 - 2018",
  //   description:
  //     "Focused on advanced software engineering concepts, system design, and AI technologies. Completed a thesis on machine learning applications in real-time data processing.",
  // },
  // {
  //   id: 3,
  //   degree: "Certified React Developer",
  //   institution: "Udacity Nanodegree",
  //   duration: "2019",
  //   description:
  //     "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  // },
];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
