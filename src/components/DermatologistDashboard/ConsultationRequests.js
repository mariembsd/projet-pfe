// src/components/DermatologistDashboard/ConsultationRequests.js
import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ConsultationRequests.css";

const ConsultationRequests = () => {
  // Mock data for consultation requests (replace with API data later)
  const requests = [
    { id: 1, patientName: "John Doe", symptoms: "Rash on arms", date: "2023-10-05" },
    { id: 2, patientName: "Jane Smith", symptoms: "Acne breakout", date: "2023-10-04" },
  ];

  return (
    <div className="consultation-requests">
      <h4>Pending Consultation Requests</h4>
      {requests.map((request) => (
        <Card key={request.id} className="mb-3">
          <Card.Body>
            <Card.Title>{request.patientName}</Card.Title>
            <Card.Text>Symptoms: {request.symptoms}</Card.Text>
            <Card.Text>Date: {request.date}</Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ConsultationRequests;