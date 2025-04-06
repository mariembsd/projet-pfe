import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DermCss.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h5 className="sidebar-title">🩺 Dermatologist Dashboard</h5>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="profile">👤 Profile</Nav.Link>
        <Nav.Link as={Link} to="messagesd">💬 Messages</Nav.Link>
        <Nav.Link as={Link} to="appointments">📅 Appointments</Nav.Link>
        <Nav.Link as={Link} to="consulted-patients">👥 Patients Consulted</Nav.Link>
        <Nav.Link as={Link} to="diagnostic">🩺 Diagnostic</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;