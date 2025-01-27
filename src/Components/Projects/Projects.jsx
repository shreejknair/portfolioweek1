import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="min-h-screen p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-left">
        Projects
      </h1>

      {/* Grid Layout for Project Cards */}
      <div className="py-12 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        <ProjectCard
          title="Lab Monitoring and Calibration System"
          main="Fluid Control Research Institute"
          link="/lab-monitoring"
        />
        <ProjectCard
          title="Remote Patient Health Monitoring System"
          main="NSS College Of Engineering"
          link="/remote-patient-monitoring"
        />
        <ProjectCard
          title="Automatic Room Lighting System"
          main="NSS College Of Engineering"
          link="/room-lighting"
        />
        <ProjectCard
          title="Grievance Management System"
          main="Tarento Technologies Pvt Ltd"
          link="/grievance-management"
        />
      </div>
    </div>
  );
};

export default Projects;
