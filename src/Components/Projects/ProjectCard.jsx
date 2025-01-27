import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, main, link }) => {
  const navigate = useNavigate();

  return (
    <div
      className="p-8 md:p-10 flex flex-col w-[450px] h-64 bg-[#0c0e19] text-white shadow-xl shadow-slate-900 
                  rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 
                  hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer"
      onClick={() => navigate(link)} 
    >
      <h3 className="px-4 text-3xl md:text-4xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-lg md:text-xl leading-tight py-3">{main}</p>
    </div>
  );
};

export default ProjectCard;
