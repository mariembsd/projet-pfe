import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DermCss.css';

const Sidebar = () => {
  // Simulated notification states
  const [messageNotif, setMessageNotif] = useState(2); // e.g., 2 unread messages
  const [appointmentNotif, setAppointmentNotif] = useState(1); // 1 new appointment
  const [generalNotif, setGeneralNotif] = useState(true);

  const clearMessages = () => setMessageNotif(0);
  const clearAppointments = () => setAppointmentNotif(0);
  const clearGeneralNotif = () => setGeneralNotif(false);

  return (
    <div className="sidebar">
      <h5 className="sidebar-title">
      🩺 Dermatologist Dashboard
       
      </h5> 
 
      <Nav className="flex-column">
        <Nav.Link as={Link} to="profile" className=" text-light">👤 Profile</Nav.Link>

        <Nav.Link as={Link} to="messagesd" onClick={clearMessages} className=" text-light">
          💬 Messages
          {messageNotif > 0 && (
            <span className="notif-bell-wrapper">
              <i className="bi bi-bell-fill notif-icon"></i>
              <span className="notif-count">{messageNotif}</span>
            </span>
          )}
        </Nav.Link>

        <Nav.Link as={Link} to="appointments" onClick={clearAppointments} className=" text-light">
          📅 Appointments
          {appointmentNotif > 0 && (
            <span className="notif-bell-wrapper">
              <i className="bi bi-bell-fill notif-icon"></i>
              <span className="notif-count">{appointmentNotif}</span>
            </span>
          )}
        </Nav.Link>

        <Nav.Link as={Link} to="consulted-patients" className=" text-light">👥 Patients Consulted</Nav.Link>
        <Nav.Link as={Link} to="diagnostic" className=" text-light">🩺 Diagnostic</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
