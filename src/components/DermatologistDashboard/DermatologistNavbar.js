// src/components/DermatologistDashboard/DermatologistNavbar.js
import React from "react";
import { FaBell } from "react-icons/fa";
import "./DermatologistNavbar.css";

const DermatologistNavbar = () => {
  return (
    <nav className="derm-navbar">
      <h3>Dermatologist Dashboard</h3>
      <div className="derm-icons">
        <FaBell />
      </div>
    </nav>
  );
};

export default DermatologistNavbar;
