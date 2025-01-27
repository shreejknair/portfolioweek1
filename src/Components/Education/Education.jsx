import React from "react";

const Education = () => {
  return (
    <section 
      id="Education" 
      className="min-h-screen p-10 text-white flex flex-col justify-center"
      style={{ backgroundColor: "#465697" }} // 
    >
      <h2 className="text-4xl font-bold mb-8 text-left">Education</h2>

      {/* Card Container - Responsive Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        
        {/* B.Tech Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition duration-300 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-[#465697]">Bachelor of Technology (B.Tech)</h3>
          <p className="text-gray-700">Electronics and Communication Engineering</p>
          <p className="text-gray-500 font-medium">APJ Abdul Kalam Technological University</p>
          <p className="text-gray-600 mt-2 italic">2020 - 2024</p>
        </div>

        {/* High School Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition duration-300 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-[#465697]">Higher Secondary School</h3>
          <p className="text-gray-700">Computer Science - Maths</p>
          <p className="text-gray-700">Carmel School</p>
          <p className="text-gray-600 mt-2 italic">2018 - 2020</p>
        </div>
        
        {/* 10th Standard Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition duration-300 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-[#465697]">Secondary School</h3>
          <p className="text-gray-500 font-medium">Carmel School</p>
          <p className="text-gray-600 mt-2 italic">2017 - 2018</p>
        </div>

      </div>
    </section>
  );
};

export default Education;
