// src/components/AdminDashboard/AdminSidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaChartBar } from "react-icons/fa";
import "./AdminSidebar.css"; // Custom CSS file

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/admin/dashboard"><FaChartBar /> Dashboard</Link></li>
        <li><Link to="/admin/users"><FaUser /> Users</Link></li>
        <li><Link to="/admin/appointments"><FaCalendarAlt /> Appointments</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
