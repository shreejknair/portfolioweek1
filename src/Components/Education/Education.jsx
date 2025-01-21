import React from "react";

const Education = () => {
  return (
    <section id="education" className="p-6 bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold mb-4">Education</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-xl font-semibold">Bachelor of Technology (B.Tech)</h3>
          <p>Electronics and Communication Engineering - APJ Abdul Kalam University</p>
          <p className="text-gray-600">2020 - 2024</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">High School</h3>
          <p>Carmel School</p>
          <p className="text-gray-600">2018 - 2020</p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
