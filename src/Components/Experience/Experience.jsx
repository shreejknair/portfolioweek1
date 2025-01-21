import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          
            <span className="text-white">
              <h2 className="leading-tight">Intern,Vikram Sarabhai Space Centre</h2>
              <p className="text-sm leading-tight font-thin">
                June 2023 - July 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Intern at Electronics Systems & Actuators Entity [ESAE]</li>
                
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            
            <span className="text-white">
              <h2 className="leading-tight">Intern,ICT Academy of Kerala </h2>
              <p className="text-sm leading-tight font-thin">
                May 2023 
              </p>
              <ul className="text-sm p-2">
                <li>-Intern in projects based on Machine learning and artificial Intelligence</li>
                
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            
            <span className="text-white">
              <h2 className="leading-tight">Software Engineering Job Simulation, Accenture</h2>
              <p className="text-sm leading-tight font-thin">
                Dec 2024-Jan 2025 
              </p>
              <ul className="text-sm p-2">
                <li>Agile,Architecture,Security Task Management</li>
                
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
