import React from "react";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import Navbar from "./components/Nav";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  return (
    <div className="scroll-smoth">
      <Navbar />
      <Hero />
      <Skills />
      <Contact />
      <Project />
    </div>
  );
};

export default App;
