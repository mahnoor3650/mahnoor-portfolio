import movieofinder from "../assets/movieofinder.png";
import receipemaker from "../assets/receipemaker.png";
import virtualR from "../assets/virtualR.png";
import stockspotter from "../assets/stockspotter.png";
import priscripto from "../assets/priscripto.png";
import pricematchMain from "../assets/pricematch/main.png";
import pricematchPopup from "../assets/pricematch/popup.png";
import pricematchCompetitor from "../assets/pricematch/competitor.png";
import pricematchReview from "../assets/pricematch/review.png";
import pricematchSettings from "../assets/pricematch/settings.png";

// BokaEnkelt project images
import bokaEnkeltMain from "../assets/Bookaenkelt/main (1).png";
import bokaEnkelt2 from "../assets/Bookaenkelt/main (2).png";
import bokaEnkelt3 from "../assets/Bookaenkelt/main (3).png";
import bokaEnkelt4 from "../assets/Bookaenkelt/main (4).png";
import bokaEnkelt5 from "../assets/Bookaenkelt/main (5).png";
import bokaEnkelt6 from "../assets/Bookaenkelt/main (6).png";
import bokaEnkelt7 from "../assets/Bookaenkelt/main (7).png";
import bokaEnkelt8 from "../assets/Bookaenkelt/main (8).png";
import bokaEnkelt9 from "../assets/Bookaenkelt/main (9).png";
import bokaEnkelt10 from "../assets/Bookaenkelt/main (10).png";
import bokaEnkelt11 from "../assets/Bookaenkelt/main (11).png";
import bokaEnkelt12 from "../assets/Bookaenkelt/main (12).png";
import bokaEnkelt13 from "../assets/Bookaenkelt/main (13).png";

// Kintrol project images
import kintrolMain from "../assets/kintrol/main.png";
import kintrolDashboard from "../assets/kintrol/dashborad.png";
import kintrolVDashboard from "../assets/kintrol/vdashborad.png";
import kintrolVehicles from "../assets/kintrol/vechiles.png";
import kintrolDrivers from "../assets/kintrol/drivers.png";
import kintrolDefects from "../assets/kintrol/defects.png";
import kintrolAllDefects from "../assets/kintrol/all defects.png";
import kintrolReporting from "../assets/kintrol/reportincident.png";
import kintrolBiweekly from "../assets/kintrol/biweekly.png";
import kintrolPopup from "../assets/kintrol/popup.png";
import kintrolThemeCollapse from "../assets/kintrol/theme collapse.png";
import kintrolWhiteTheme from "../assets/kintrol/white theme.png";

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
    title: "Kintrol - Fleet Management System",
    description:
      "A comprehensive full-stack fleet management system built with React, TypeScript, and Supabase. Features include vehicle tracking, maintenance management, driver management, and real-time dashboards. Each vehicle has its own dedicated dashboard with tyre tracking, service tracking, diary dates, and biweekly checks. Includes QR code scanning, Excel export functionality, and theme switching (light/dark mode). Streamlined fleet operations through digital transformation with improved maintenance tracking and compliance management.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Chart.js",
      "Radix UI",
    ],
    imgSrc: kintrolMain,
    galleryImages: [
      kintrolMain,
      kintrolDashboard,
      kintrolVDashboard,
      kintrolVehicles,
      kintrolDrivers,
      kintrolDefects,
      kintrolAllDefects,
      kintrolReporting,
      kintrolBiweekly,
      kintrolPopup,
      kintrolThemeCollapse,
      kintrolWhiteTheme,
    ],
  },
  {
    id: 2,
    title: "BokaEnkelt Booking System",
    description:
      "Built a room reservation system using React.js with features like drag-and-drop booking, calendar integration, and role-based access control (RBAC) via JWT tokens. Admins manage users and rooms, while both user types can create, edit, or view reservations. Developed the backend with .NET Core APIs and SQL Server, focusing on clean architecture and optimized database queries for performance.",
    techStack: ["React.js", ".NET Core", "SQL Server", "JWT", "RBAC"],
    imgSrc: bokaEnkeltMain,
    galleryImages: [
      bokaEnkeltMain,
      bokaEnkelt2,
      bokaEnkelt3,
      bokaEnkelt4,
      bokaEnkelt5,
      bokaEnkelt6,
      bokaEnkelt7,
      bokaEnkelt8,
      bokaEnkelt9,
      bokaEnkelt10,
      bokaEnkelt11,
      bokaEnkelt12,
      bokaEnkelt13,
    ],
  },
  {
    id: 3,
    title: "Stock Spotter",
    description:
      "Boosts sales by displaying real-time stock updates and low-stock alerts on product pages. Enhances product visibility and urgency, encouraging faster purchasing decisions. Offers high customization options, allowing seamless integration with Shopify stores.",
    techStack: ["Remix", "Shopify APIs", "GraphQL"],
    imgSrc: stockspotter,
    link: "https://apps.shopify.com/display-available-stock",
  },
  {
    id: 4,
    title: "Doctor Appointment Booking System",
    description:
      "A full-stack appointment booking platform with patient, doctor, and admin roles, featuring online payments and scheduling.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    imgSrc: priscripto,
    link: "https://prescripto-frontend-alpha.vercel.app/",
  },
  {
    id: 5,
    title: "Shopify Price Match App",
    description:
      "Developed a Shopify app with a theme extension for price match requests. Integrated AI-powered competitor price comparison and automated approval logic. Built an admin dashboard for managing requests, discounts, and competitor data. Implemented automatic discount application at checkout and email notifications. Ensured secure request validation to prevent duplicate submissions.",
    techStack: [
      "Shopify Remix",
      "Prisma (SQLite)",
      "Node.js",
      "React",
      "AI API",
    ],
    imgSrc: pricematchPopup,
    galleryImages: [
      pricematchPopup,
      pricematchMain,
      pricematchCompetitor,
      pricematchReview,
      pricematchSettings,
    ],
  },
  {
    id: 6,
    title: "Movie Finder",
    description:
      "A React-based web application that enables users to search for movies effortlessly. Fetches movie data dynamically and presents detailed information in an intuitive interface.",
    techStack: ["React.js", "Appwrite"],
    imgSrc: movieofinder,
    link: "https://movie-finder-three-brown.vercel.app/",
  },
  {
    id: 7,
    title: "Recipe Maker",
    description:
      "Utilizes a Hugging Face model to suggest recipes based on provided ingredients. Offers an AI-powered solution for efficient meal planning.",
    techStack: ["React.js", "Hugging Face API"],
    imgSrc: receipemaker,
    link: "https://recipe-maker-xi.vercel.app/",
  },
  {
    id: 8,
    title: "VirtualR Landing Page",
    description:
      "A sleek and modern landing page for VirtualR, a service-based platform. Showcases product offerings with a responsive and visually appealing design.",
    techStack: ["React.js", "Tailwind CSS"],
    imgSrc: virtualR,
    link: "https://virtualr-landingpage-one.vercel.app/",
  },
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
  // image: personImage,
};
