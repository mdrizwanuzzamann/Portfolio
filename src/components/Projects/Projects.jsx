import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="px-6 py-10 sm:px-10 sm:py-14 md:px-24 md:py-20 text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-2">
        Projects
      </h1>

      <div className="py-8 flex flex-wrap justify-center sm:justify-start gap-6">
        <ProjectCard title="Blogging Website" main="This is a blogging website created in Next.js and used some component library" />
        <ProjectCard title="Youtube Clone" main="This is a blogging website created in Next.js and used some component library" />
        <ProjectCard title="Netflix Clone" main="This is a blogging website created in Next.js and used some component library" />
      </div>
    </div>
  );
};

export default Projects;