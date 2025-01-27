import React from "react";
import { useNavigate } from "react-router-dom";
import lig from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/assets/light.jpeg";

const RoomLighting= () => {
  const navigate = useNavigate(); 
  
    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 md:p-24 text-white">
      {/* Enlarged Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Automatic Room Lighting System
      </h1>

      {/* Adjusted Image (Reduced Height, Increased Width) */}
      <img src={lig} alt="Automatic Room Lighting System" className="w-[450px] h-[250px] mt-8 object-cover border-8 border-[#465697] rounded-lg shadow-lg" />

      {/* Justified Paragraph */}
      <p className="mt-8 text-lg md:text-xl text-justify max-w-3xl leading-relaxed">
      The Automatic Room Lighting System using an Operational Amplifier (Op-Amp) is a smart lighting solution that automatically controls the lighting based on ambient light levels. This system utilizes an Op-Amp comparator circuit to compare the intensity of light in a room with a predetermined reference level. A light-dependent resistor (LDR) is used to detect the ambient light, where its resistance changes according to the amount of light falling on it. When the room’s light level falls below the set threshold (e.g., during the evening or in a dark room), the Op-Amp activates a relay that switches on the room light. Conversely, when the light level exceeds the threshold (during daylight), the system turns off the light to save energy. The Op-Amp’s role is to serve as a precise and efficient comparator, ensuring the system responds dynamically to changing light conditions. This automatic lighting system is energy-efficient, reducing electricity consumption while providing convenience by ensuring the lights are on only when needed.
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

export default RoomLighting;
