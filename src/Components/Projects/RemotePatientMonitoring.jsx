import React from "react";
import { useNavigate } from "react-router-dom";
import hea from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/assets/health.jpeg";

const RemotePatientMonitoring= () => {
  const navigate = useNavigate(); // Initialize navigation function
  
    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 md:p-24 text-white">
      {/* Enlarged Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Remote patient health monitoring system
      </h1>

      {/* Adjusted Image (Reduced Height, Increased Width) */}
      <img src={hea} alt="REMOTE PATIENT HEALTH MONITORING" className="w-[450px] h-[250px] mt-8 object-cover border-8 border-[#465697] rounded-lg shadow-lg" />

      {/* Justified Paragraph */}
      <p className="mt-8 text-lg md:text-xl text-justify max-w-3xl leading-relaxed">
      The Remote Patient Health Monitoring System using Arduino is an advanced healthcare solution designed to monitor a patient's vital signs in real time. It integrates an Arduino microcontroller with various medical sensors such as a heart rate sensor, temperature sensor, blood pressure sensor, and SpO2 sensor to continuously track health parameters. The collected data is processed by the Arduino and transmitted wirelessly using a Wi-Fi (ESP8266) or Bluetooth (HC-05) module to a cloud server, mobile application, or healthcare provider's system. This enables doctors and caregivers to remotely access the patient's health status from anywhere. In case of abnormal readings, an alert system using buzzers or notifications ensures immediate medical attention. The system is highly beneficial for hospitals, home healthcare, and telemedicine, allowing continuous monitoring of elderly, chronically ill, or post-surgery patients. By reducing hospital visits and providing early warnings for medical conditions, this technology enhances patient care, improves response times, and supports the growing need for remote healthcare solutions.
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

export default RemotePatientMonitoring;
