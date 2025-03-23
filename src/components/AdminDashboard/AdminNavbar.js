// src/components/AdminDashboard/AdminNavbar.js
import React from "react";
import { FaBell } from "react-icons/fa";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <h3>Admin Dashboard</h3>
      <div className="admin-icons">
        <FaBell />
      </div>
    </nav>
  );
};

export default AdminNavbar;
