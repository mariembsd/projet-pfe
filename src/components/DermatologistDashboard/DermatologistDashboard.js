// src/components/DermatologistDashboard/DermatologistDashboard.js
import React from "react";
import DermatologistSidebar from "./DermatologistSidebar";
import DermatologistNavbar from "./DermatologistNavbar";
import PatientsList from './PatientsList';
import ConsultationRequests from "./ConsultationRequests";
import "./DermatologistDashboard.css";
import AppointmentSchedule from "./AppointmentSchedule";
import PatientHistory from "./PatientHistory";
import Chat from "./Chat";

const DermatologistDashboard = () => {
  
  return (
    <div className="derm-dashboard">
      <DermatologistSidebar />
      <div className="derm-main-content">
        <DermatologistNavbar />
        <div className="dashboard-content">
          <h2>Welcome, Doctor!</h2>
          <p>Manage your patients, view appointments, and diagnose skin conditions.</p>
          <ConsultationRequests/>
          <PatientsList/>
          <AppointmentSchedule/>
          <PatientHistory/>
          <Chat/>
        </div>
      </div>
    </div>
  );
};

export default DermatologistDashboard;
