import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { RiRobot2Line } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa"; 
import { GiMoneyStack } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PTSImg from "@/public/PTS.png";
import BSMCImg from "@/public/BSMC.png";
import scotlandImg from "@/public/scotlandyard_ai.png";
import appImg from "@/public/dropkick_app.png";
import heImg from "@/public/he_project.png";
import mandelbrotImg from "@/public/mandelbrot.png"; 
import golImg from "@/public/gol.png"; 
import socialImg from "@/public/socialmedia.png"; 



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bank of America",
    subtitle: "Software Developer Intern; Equities Cash Trading (OMS)",
    description:
    `• Automated Load Testing: Utilised Python and Bash to automate manual load testing for the order management system, reducing the testing time from 24 hours to 30 minutes daily, with global implementation across the bank.
    • FIX Replay Project: Enhanced the FIX Replay testing software by adding an auto-acknowledgment feature, streamlining the QA process for identifying discrepancies in FIX messages between production and QA environments.
    • Resolved Production Issues: Diagnosed and resolved two critical production issues related to FIX messages, addressing client trading disruptions and ensuring smoother operations.
    • Gained Workflow Insight: Acquired extensive knowledge of the trading floor’s operations, including interactions between the support team, product team, development team, and traders.`,
    icon: React.createElement(FaBuilding),
    date: "Jun 2024 - Aug 2024",
  },
  {
    title: "SpaceNXTLabs",
    subtitle: "AI Software Developer Contractor",
    description:
    `• Assumed the roles of software developer, client liaison and project manager for an AI-driven social media content generator
    • Utilised Stable Diffusion for images, GPT-3.5 for captions, and Google's API for trend tracking, 
    • Employed Vue.js front-end and back-end API integration for Twitter (X) and LinkedIn.`,
    icon: React.createElement(FaReact),
    date: "Sept 2023 - May 2024",
  },
  {
    title: "Pyng (Start-Up)",
    subtitle: "Software Developer",
    description:
    `• Enhanced transactions for a mobile payment app enhancing time efficiency and UX for transfers and bill splitting based on Barclay's 'Pingit'. 
    •	Utilised React Native to enhance UI/UX of app. 
    •	Employed Python to build transaction calculator.`,
    icon: React.createElement(FaMobileAlt),
    date: "Mar 2023 - Aug 2023",
  },
  {
    title: "Alfa Financial Software",
    subtitle: "Technology Consultant & Software Developer Intern",
    description:
    `•	Technology consultancy - tackled customer queries, advised on the best software and how to use it. 
    •	Enhanced UI/UX of Alfa’s software using HTML/CSS/JS and developed Java software for asset management company.`,
    icon: React.createElement(GiMoneyStack),
    date: "July 2023",
  },
  {
    title: "upReach",
    subtitle: "Tech500 Associate",
    description:
    `•	Selected as a high potential undergraduate to join an accelerated professional 
    development programme – includes professional workshops and academic mentoring.
    • Tech500 Bootcamp 2023 Highlights:       
    - G-Research: Coding challenge using Python to optimize decision making for auction bidding. 
    - Reply Group: Combined optimal Google Cloud software related to machine learning, cloud storage, and visualisation to obtain optimal performance depending on client preferences.
    - JMAN (Data Science): Client consulting project; extracted data using Power BI and Excel, cleaned data using Python Numpy and Panda libraries.`,
    icon: React.createElement(FaLaptopCode),
    date: "Mar 2023 - Present",
  },
  {
    title: "WeBuyAnyCar",
    subtitle: "Sales Manager",
    description:
    `• 	Consistent top performer (cars bought & bonus made) in the divison of South West and Wales`,
    icon: React.createElement(FaCar),
    date: "Jan 2022 - Sept 2022",
  },
  {
    title: "University of Bristol",
    subtitle: "BSc Computer Science",
    description:
    `Modules Including:
    Machine Learning
    Imperative and Functional Programming
    Object-Oriented Programming  
    Concurrent & Distributed Programming
    Algorithms
    Discrete Mathematics (Linear Algebra, Probabability & Statistics)
    Data Science 
    Cyber Security & Networks

    Roles: 
    • STEM Outreach Ambassador: Teaching Python and GCSE Maths to disadvantaged students at local secondary school.
    • TA: Teaching Discrete Mathematics (Linear Algebra, Probability & Statistics) and mentoring two groups of 6 for 'Software Engineering Project' for first and second year UG's. Projects include: AR Student Chatbot (IBM) and AI/ML Microservives Prediction (DigitalU3 LTD).
    •	'Bristol Scholar' & Access to Bristol: Selected by sixth form as a high-performer in academia which granted me access to exclusive academic opportunities. 

    Predicted: 1st Class`,
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Cointegration-Driven Pairs Trading with Technical Indicators",
    description:
    "Used statistical cointergation tests to identify valid, correlated stock pairs and used the pair to implement the Pairs Trading Strategy with various technical indicators (RSI, Bollinger Bands) with dynamic risk controls. Sharpe Ratio: 1.06, Total Returns: 115% (4-year period). ",
    tags: ["Python", "NumPy", "Pandas"],
    imageUrl: PTSImg,
  },
  {
    title: "Stochastic Options Pricing Engine",
    description:
    "Real-time interactive UI to compare options pricing between Black-Scholes and Monte Carlo Simulations. Simulates asset price paths using Geometric Brownian Motion across 50_ scenarios and provides dynamic adjustment to options pricing parameters such as volatility, risk-free rate etc.",
    tags: ["Python", "NumPy", "Pandas"],
    imageUrl: BSMCImg,
  },
  {
    title: "AI Social Media",
    description:
    "As the client liaison, project manager, and software developer, I developed an AI-driven social media content generator using Stable Diffusion for images, GPT-3.5 for captions, and Google's API for trend tracking, with a Vue.js front-end and back-end API integration for Twitter (X) and LinkedIn, delivered to SpaceNXT Labs.",
    tags: ["Stable Diffusion", "Social Media", "Java"],
    imageUrl: socialImg,
  },
  {
    title: "Scotland Yard AI",
    description:
    "AI agent designed to play the Scotland Yard boardgame, implementing Dijkstra’s algorithm and a Mini-Max game tree with alpha-beta pruning to optimize the AI agents winning performance based on a custom scoring function.",
    tags: ["Java","OOP", "Design Patterns"],
    imageUrl: scotlandImg,
  },
  {
    title: "Parallelised Game of Life Simulation (AWS Distributed)",
    description:
    "Utilised Go distributed processing on AWS EC2 to improve efficiency by benchmarking algorithmic performance and identifying bottlenecks using CPU profiling. Optimised network communication via publish/subscribe model ensuring fault tolerance and scalability.",
    tags: ["Go", "AWS"],
    imageUrl: golImg,
  },
  {
    title: "Mandelbrot Set Fractal Visualisation Tool",
    description:
    "Mathematical modelling simulation implemented using Python with NumPy for efficient calculations and SQL for data management, featuring zooming capabilities with a secondary Julia set visualisation to deliver an engaging and dynamic user experience. ",
    tags: ["Python", "NumPy", "SQL", "UI/UX"],
    imageUrl: mandelbrotImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C++",
  "C",
  "Haskell",
  "R",
  "Go", 
  "JavaScript",
  "HTML",
  "CSS", 
  "React",
  "Vue.js",
  "Quasar", 
  "Figma",
  "Jira", 
  "Git",
  "GitHub",
  "JSON",
  "Linux",
  "SQL",
  "Bash",
  "Algorithms",
  "Pandas", 
  "NumPy", 
  "QuantConnect"
] as const;