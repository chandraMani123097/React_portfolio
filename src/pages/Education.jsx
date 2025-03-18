import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <div id="education" className="education-container section-container">
      <h2 className="section-title">Education</h2>
      <div className="education-content">
        <div className="education-item">
          <FaGraduationCap className="education-icon" />
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>
            Global Institute of Information Technology, Greater Noida
            <br />
            <strong>2022 - 2025 (Final Year)</strong>
          </p>
        </div>
        <div className="education-item">
          <FaSchool className="education-icon" />
          <h3>Intermediate (12th Grade)</h3>
          <p>
            Uttar Pradesh Board | Arts Stream <br />
            <strong>2020 - 2021</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
