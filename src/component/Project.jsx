import React, { useRef } from "react";
import { PROJECTS } from "../constants";
const Project = () => {
  const projectsRef = useRef(null);
 console.log("Projects component rendering");
  return (
    <section className="pt-16 " id="projects" ref={projectsRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl ">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-col
                p-4 md:w-1/2 lg:w-1/3"
            >
              <div
                className="flex-grow overflow-hidden rounded-lg
                    border border-purple-300/20"
              >
              <a href={item.link} target="_blank" rel="noopener norederrer">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="h-60 w-full object-cover"
                  />
                </a>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mb-4"> {item.description}</p>
                  <div className="mb-4">
                    <strong>Tech Stack</strong>
                    <ul>
                      {item.techStack.map((texh, index) => (
                        <li
                          key={index}
                          className="mb-1 mr-2 mt-2 inline-block rounded-full border border-pink-500/30 px-3 py-1 text-sm font-semibold"
                        >
                          {texh}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

