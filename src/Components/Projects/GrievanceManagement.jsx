import React from "react";
import { useNavigate } from "react-router-dom";
import gri from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/assets/grie.jpeg";

const GrievanceManagement = () => {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 md:p-24 text-white">
      {/* Enlarged Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Grievance Management System
      </h1>

      {/* Adjusted Image (Reduced Height, Increased Width) */}
      <img src={gri} alt="GRIEVANCE MANAGEMENT SYSTEM" className="w-[450px] h-[250px] mt-8 object-cover border-8 border-[#465697] rounded-lg shadow-lg" />

      {/* Justified Paragraph */}
      <p className="mt-8 text-lg md:text-xl text-justify max-w-3xl leading-relaxed">
        The Grievance Management System is a comprehensive solution designed to efficiently handle, track, and resolve complaints within an organization. It consists of three main components: the frontend, backend, and a database. The frontend is the user interface where employees or customers (users) can submit grievances, and supervisors and assignees can manage them. Users can view the status of their complaints, while supervisors assign grievances to relevant assignees. The backend handles the business logic, processing data, and managing roles and permissions for users, supervisors, and assignees, ensuring appropriate access for each role. It also provides APIs to create, update, and retrieve grievances. The database stores grievance details, statuses, user information, and feedback, enabling efficient retrieval and management of data. The workflow starts with users submitting grievances through the frontend, which are then categorized and assigned by supervisors to assignees for resolution. Assignees update the status and provide feedback, triggering notifications to both users and supervisors. The system enhances communication, speeds up grievance resolution, and ensures transparency, making it an effective tool for managing complaints and improving organizational efficiency.
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

export default GrievanceManagement;
