// src/components/AdminDashboard/AdminDashboard.js
import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import "./AdminDashboard.css";
import UserManagement from "./UserManagement";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-main-content">
        <AdminNavbar />
        <div className="dashboard-content">
          <h2>Welcome, Admin!</h2>
          <p>Manage users, appointments, and analytics here.</p>
          <UserManagement/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
