import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-container section-container">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-text">
        Feel free to connect with me via the platforms below:
      </p>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/chandramani-singh-65240128b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaLinkedin className="contact-icon" />
          LinkedIn
        </a>
        <a
          href="https://github.com/chandraMani123097"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaGithub className="contact-icon" />
          GitHub
        </a>
        <a
          href="mailto:chandramani.singh107@gmail.com"
          className="contact-link"
        >
          <FaEnvelope className="contact-icon" />
          Email
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaInstagram className="contact-icon" />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Contact;
