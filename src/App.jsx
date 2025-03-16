import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Experience from "./component/Experience";
import Education from "./component/Education";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";

const App = () => {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      {/* <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"> */}
      <div className="bg-image bg-cover bg-center bg-fixed">
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Project />
          <Skills />
          <Experience />
          <Education />
          <Testimonial />
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default App;
