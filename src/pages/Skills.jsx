import {
  FaCode,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaJava,
  FaLaptopCode,
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiCplusplus } from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" }, // ✅ Added Bootstrap
  { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "C", icon: <FaCode />, color: "#A8B9CC" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { name: "Problem Solving", icon: <FaLaptopCode />, color: "#4A90E2" },
];

const Skills = () => {
  return (
    <div id="skills" className="skills-container section-container">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
