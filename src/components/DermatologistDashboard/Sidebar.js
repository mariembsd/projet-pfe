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
      🩺 Dermatologist<br />Dashboard
        {generalNotif && (
          <span onClick={clearGeneralNotif} className="notif-bell-wrapper">
            <i className="bi bi-bell-fill notif-bell"></i>
            <span className="notif-count">!</span>
          </span>
        )}
      </h5>

      <Nav className="flex-column">
        <Nav.Link as={Link} to="profile">👤 Profile</Nav.Link>

        <Nav.Link as={Link} to="messagesd" onClick={clearMessages}>
          💬 Messages
          {messageNotif > 0 && (
            <span className="notif-bell-wrapper">
              <i className="bi bi-bell-fill notif-icon"></i>
              <span className="notif-count">{messageNotif}</span>
            </span>
          )}
        </Nav.Link>

        <Nav.Link as={Link} to="appointments" onClick={clearAppointments}>
          📅 Appointments
          {appointmentNotif > 0 && (
            <span className="notif-bell-wrapper">
              <i className="bi bi-bell-fill notif-icon"></i>
              <span className="notif-count">{appointmentNotif}</span>
            </span>
          )}
        </Nav.Link>

        <Nav.Link as={Link} to="consulted-patients">👥 Patients Consulted</Nav.Link>
        <Nav.Link as={Link} to="diagnostic">🩺 Diagnostic</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
