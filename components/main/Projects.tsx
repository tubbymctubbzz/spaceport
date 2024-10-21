import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">

        <ProjectCard 
          src="/clock.png"
          title="A clock that tracks the time!"
          description="Something I create to show what skills I have I am proud of this"

        />
        <ProjectCard
          src="/mmp.png"
          title="Mini-Music Player"
          description="I create this to play music on the web!"
        />
        <ProjectCard
          src="/recent.png"
          title="Space Themed Website "
          description="This is my most recent project and probably my favorite" 
        />
      </div>
    </div>
  );
};

export default Projects;