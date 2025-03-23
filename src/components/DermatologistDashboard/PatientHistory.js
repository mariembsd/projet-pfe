// src/components/DermatologistDashboard/PatientHistory.js
import React from "react";
import { Table } from "react-bootstrap";
import "./PatientHistory.css";

const PatientHistory = () => {
  // Mock data for patient history (replace with API data later)
  const history = [
    { id: 1, date: "2023-10-01", diagnosis: "Eczema", prescription: "Topical Steroid" },
    { id: 2, date: "2023-09-25", diagnosis: "Acne", prescription: "Retinoid Cream" },
  ];

  return (
    <div className="patient-history">
      <h4>Patient History & Records</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Prescription</th>
          </tr>
        </thead>
        <tbody>
          {history.map((record) => (
            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.diagnosis}</td>
              <td>{record.prescription}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientHistory;