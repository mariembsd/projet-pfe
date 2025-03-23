// src/components/DermatologistDashboard/PatientsList.js
import React from "react";
import { Table } from "react-bootstrap";
import "./PatientsList.css";

const PatientsList = () => {
  // Mock data for patients (replace with API data later)
  const patients = [
    { id: 1, name: "John Doe", email: "john@example.com", lastVisit: "2023-10-01" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", lastVisit: "2023-09-25" },
  ];

  return (
    <div className="patients-list">
      <h4>Assigned Patients</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Last Visit</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={patient.id}>
              <td>{index + 1}</td>
              <td>{patient.name}</td>
              <td>{patient.email}</td>
              <td>{patient.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientsList;