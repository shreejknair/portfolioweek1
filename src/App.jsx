import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

// Import project detail pages
import LabMonitoring from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/Components/Projects/LabMonitoring.jsx";
import RemotePatientMonitoring from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/Components/Projects/RemotePatientMonitoring.jsx";
import RoomLighting from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/Components/Projects/RoomLighting.jsx";
import GrievanceManagement from "/home/sreelakshmyjayakumar/Downloads/portfolio-website-main/src/Components/Projects/GrievanceManagement.jsx";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation(); // Get current route
  const projectPages = [
    "/lab-monitoring",
    "/remote-patient-monitoring",
    "/room-lighting",
    "/grievance-management",
  ];

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      {/* Show Navbar only if NOT on a project page */}
      <Navbar />

      <Routes>
        {/* Main Sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Experience />
              <Education />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* Project Detail Pages */}
        <Route path="/lab-monitoring" element={<LabMonitoring />} />
        <Route path="/remote-patient-monitoring" element={<RemotePatientMonitoring />} />
        <Route path="/room-lighting" element={<RoomLighting />} />
        <Route path="/grievance-management" element={<GrievanceManagement />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
