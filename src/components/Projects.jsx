import React from "react";
import projects from "../data/projects.json";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <div className="bg-[#d4d4d4] pb-[5%]">
      <div
        id="title-container"
        className="flex flex-row justify-between px-[5.7%] py-[5%]"
      >
        <div id="sub-titles-one">
          <p className="font-brunoAce xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
            projects
          </p>
          <p className="font-bold text-xs xs:text-xs sm:text-sm md:text-xl lg:text-2xl">
            プロジェクト
          </p>
        </div>
        <div
          id="sub-titles-two"
          className="font-brunoAce xs:text-2xl sm:text-2xl md:text-3xl lg:text-5xl"
        >
          <p>selected project</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[5.7%] rounded-xl">
        {projects.map((project) => (
          <ProjectCards key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
