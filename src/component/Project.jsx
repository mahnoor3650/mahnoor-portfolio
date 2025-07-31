import React, { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Gallery from "./Gallery";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectsRef = useRef(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 50,

        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, projectsRef);
    return () => ctx.revert();
  }, []);

  const handleImageClick = (project) => {
    if (project.galleryImages && project.galleryImages.length > 0) {
      setCurrentProject(project);
      setGalleryOpen(true);
    } else if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="pt-6 " id="projects" ref={projectsRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl ">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((item, index) => (
            <div
              key={index}
              className="project-card flex w-full flex-col
                p-4 md:w-1/2 lg:w-1/3"
            >
              <div
                className="flex-grow overflow-hidden rounded-lg
                    border border-purple-300/20"
              >
                <div 
                  className="cursor-pointer"
                  onClick={() => handleImageClick(item)}
                >
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="h-60 w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
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

      {/* Gallery Modal */}
      {currentProject && (
        <Gallery
          images={currentProject.galleryImages}
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          title={currentProject.title}
        />
      )}
    </section>
  );
};

export default Project;
