import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#465697] text-white py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Sreelakshmy Jayakumar. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
