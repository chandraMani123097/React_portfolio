import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  };

  // Apply Dark Mode if previously enabled
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Chandramani's Portfolio</Link>
      </div>
      <div className="nav-links">
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#education" className="nav-link">
          Education
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>
      {/* Dark Mode Button */}
      <div className="toggle-container" onClick={toggleDarkMode}>
        {darkMode ? (
          <FaSun className="toggle-icon" />
        ) : (
          <FaMoon className="toggle-icon" />
        )}
        <span className="toggle-label">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
