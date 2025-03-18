import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Home Section */}
      <div className="home-container">
        <h1 className="home-title">
          Hi, I'm <span className="highlight">Chandramani Singh</span>
        </h1>
        <p className="home-subtitle">
          BCA Student | Web Development Aspirant | Looking for opportunities to
          grow 🚀
        </p>
      </div>
      {/* Other Sections */}
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
