import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import cali from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/assets/calibration.jpeg";

const LabMonitoring = () => {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 md:p-24 text-white">
      {/* Enlarged Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Lab Monitoring and Calibration System
      </h1>

      {/* Adjusted Image (Reduced Height, Increased Width) */}
      <img
        src={cali}
        alt="LAB MONITORING SYSTEM"
        className="w-[450px] h-[250px] mt-8 object-cover border-8 border-[#465697] rounded-lg shadow-lg"
      />

      {/* Justified Paragraph */}
      <p className="mt-8 text-lg md:text-xl text-justify max-w-3xl leading-relaxed">
        The Lab Monitoring and Calibration System is a comprehensive solution
        designed to ensure the accuracy and reliability of laboratory
        instruments by automating monitoring, calibration scheduling, and
        compliance tracking. This system helps laboratories maintain optimal
        working conditions by continuously monitoring environmental factors such
        as temperature and humidity through IoT sensors. It also ensures that
        all instruments are calibrated on time by providing automated reminders
        and maintaining detailed calibration records. Users, including lab
        managers and technicians, can track equipment performance, receive
        alerts for deviations, and generate compliance reports for audits. By
        integrating real-time monitoring with an efficient calibration
        management system, this project enhances laboratory efficiency, reduces
        human error, and ensures adherence to industry regulations and quality
        standards.
      </p>

      {/* Back Button */}
      <button
        onClick={() => navigate("/#Projects")} 
        className="mt-10 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
      >
        ← Back To Home
      </button>
    </div>
  );
};

export default LabMonitoring;
