import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // 
import Acc from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/assets/ACC.png";
import ICT from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/assets/ICT.png";
import ISRO from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/assets/ISRO.png";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <div id="Experience" className="min-h-screen p-10 md:p-24">

      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>

      {/* Icons Section */}
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {/* ISRO */}
          <span 
            className={`p-3 bg-zinc-950 flex items-center rounded-2xl cursor-pointer transition-all duration-300 ${
              selectedExperience === "ISRO" ? "scale-110" : "hover:scale-105"
            }`}
            onClick={() => setSelectedExperience("ISRO")}
          >
            <img src={ISRO} alt="ISRO" className="w-[130px] h-[130px]" />
          </span>

          {/* ICT */}
          <span 
            className={`p-3 bg-zinc-950 flex items-center rounded-2xl cursor-pointer transition-all duration-300 ${
              selectedExperience === "ICT" ? "scale-110" : "hover:scale-105"
            }`}
            onClick={() => setSelectedExperience("ICT")}
          >
            <img src={ICT} alt="ICT" className="w-[130px] h-[130px]" />
          </span>

          {/* Accenture */}
          <span 
            className={`p-3 bg-zinc-950 flex items-center rounded-2xl cursor-pointer transition-all duration-300 ${
              selectedExperience === "Accenture" ? "scale-110" : "hover:scale-105"
            }`}
            onClick={() => setSelectedExperience("Accenture")}
          >
            <img src={Acc} alt="ACCENTURE" className="w-[130px] h-[130px]" />
          </span>
        </div>

        {/* Experience List */}
<div className="space-y-6">
  {/* ISRO Experience */}
  <div className={`flex gap-6 items-center p-4 rounded-lg transition-all duration-300 
      ${selectedExperience === "ISRO" 
        ? "border-l-4 border-[#465697] bg-gradient-to-r from-[#1e293b] to-[#465697] shadow-lg shadow-[#465697]/50 text-white" 
        : "bg-slate-950 bg-opacity-45 text-gray-300"
      }`}>
    {selectedExperience === "ISRO" && (
      <FaArrowRight className="text-[#ffffff] text-2xl animate-pulse" />
    )}
    <span>
      <h2 className="leading-tight font-bold">Intern, Vikram Sarabhai Space Centre</h2>
      <p className="text-sm font-thin">June 2023 - July 2023</p>
      <ul className="text-sm p-2">
        <li>- Intern at Electronics Systems & Actuators Entity [ESAE]</li>
      </ul>
    </span>
  </div>

  {/* ICT Experience */}
  <div className={`flex gap-6 items-center p-4 rounded-lg transition-all duration-300 
      ${selectedExperience === "ICT" 
        ? "border-l-4 border-[#eab308] bg-gradient-to-r from-[#1e1b4b] to-[#eab308] shadow-lg shadow-[#eab308]/50 text-white" 
        : "bg-slate-950 bg-opacity-45 text-gray-300"
      }`}>
    {selectedExperience === "ICT" && (
      <FaArrowRight className="text-[#ffffff] text-2xl animate-pulse" />
    )}
    <span>
      <h2 className="leading-tight font-bold">Intern, ICT Academy of Kerala</h2>
      <p className="text-sm font-thin">May 2023</p>
      <ul className="text-sm p-2">
        <li>- Intern in projects based on Machine Learning and AI</li>
      </ul>
    </span>
  </div>

  {/* Accenture Experience */}
  <div className={`flex gap-6 items-center p-4 rounded-lg transition-all duration-300 
      ${selectedExperience === "Accenture" 
        ? "border-l-4 border-[#ff4d4d] bg-gradient-to-r from-[#4d0000] to-[#ff4d4d] shadow-lg shadow-[#ff4d4d]/50 text-white" 
        : "bg-slate-950 bg-opacity-45 text-gray-300"
      }`}>
    {selectedExperience === "Accenture" && (
      <FaArrowRight className="text-[#ffffff] text-2xl animate-pulse" />
    )}
    <span>
      <h2 className="leading-tight font-bold">Software Engineering Job Simulation, Accenture</h2>
      <p className="text-sm font-thin">Dec 2024 - Jan 2025</p>
      <ul className="text-sm p-2">
        <li>- Agile, Architecture, Security Task Management</li>
      </ul>
    </span>
  </div>
</div>

      </div>
    </div>
  );
};

export default Experience;
