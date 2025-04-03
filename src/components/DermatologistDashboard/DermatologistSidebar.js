import React from "react";
import { Link } from "react-router-dom";
import { FaUserMd, FaNotesMedical, FaCalendarCheck } from "react-icons/fa";
import "./DermatologistSidebar.css";

const DermatologistSidebar = () => {
  return (
    <div className="derm-sidebar">
      <h2>Dermatologist Panel</h2>
      <ul>
        <li><Link to="/dermatologist/dashboard"><FaNotesMedical /> Dashboard</Link></li>
        <li><Link to="patients"><FaUserMd /> Patients</Link></li>
        <li><Link to="appointments"><FaCalendarCheck /> Appointments</Link></li>
      </ul>
    </div>
  );
};

export default DermatologistSidebar;
