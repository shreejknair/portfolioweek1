import React from "react";
import me from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/assets/ME2.jpeg";
import TextChange from "../TextChange";
import resume from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/assets/resume.pdf";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-center items-center p-10 md:p-20">
  {/* Text Section */}
  <div className="md:w-2/4 md:pt-10 text-center">
    <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
      <TextChange />
    </h1>
    <p className="text-sm md:text-2xl tracking-tight">
      Let me walk you through my portfolio!
    </p>
    <a 
      href={resume} 
      download="Sreelakshmy_Jayakumar_Resume.pdf"
      className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
                 hover:opacity-85 duration-300 hover:scale-105 font-semibold 
                 rounded-5xl bg-[#465697] inline-block"
    >
      Download CV
    </a>
  </div>

  {/* Image Section */}
  <div className="flex justify-start items-center md:w-1/4">
    <img 
      className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover mr-auto ml-0" 
      src={me} 
      alt="Profile" 
    />
  </div>
</div>




  
  );
};

export default Home;
