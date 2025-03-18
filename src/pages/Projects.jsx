import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const projectsData = [
  {
    title: "Amazon Landing Page",
    description:
      "A simple replica of Amazon's landing page, built using HTML5 and CSS3. This project was developed during the initial stages of learning web development.",
    techStack: [<FaHtml5 />, <FaCss3Alt />],
    link: "https://github.com/chandraMani123097/amazon-landing-page",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A fun and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript. It features a basic AI to play against the user.",
    techStack: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
    link: "https://github.com/chandraMani123097/tic-tac-toe",
  },
  {
    title: "Weather Chat-Bot",
    description:
      " A Chat-Bot that provides weather updates by fetching data from API's. Built using HTML, CSS, JavaScript and API integration.",
    techStack: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
    link: " https://github.com/chandraMani123097/weather-chatbot",
  },
  {
    title: "Calculator",
    description:
      "A fully functional calculator built using React. It performs basic arithmetic operations and includes a responsive design.",
    techStack: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaReact />],
    link: " https://chandramani123097.github.io/React-Projects/",
  },
  {
    title: "Password Generator",
    description:
      "A secure password generator built using React. It generates random passwords with customizable length and complexity.",
    techStack: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaReact />],
    link: "https://github.com/chandraMani123097/password-generator",
  },
  {
    title: "Currency Converter",
    description:
      "A real-time currency converter built using HTML, CSS, JavaScript, and API fetching. It allows users to convert between multiple currencies and fetches live exchange rates.",
    techStack: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaReact />],
    link: "https://chandramani123097.github.io/Currency-converter/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container section-container">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.techStack.map((icon, i) => (
                <span key={i} className="tech-icon">
                  {icon}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
