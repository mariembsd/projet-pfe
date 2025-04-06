import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './DermCss.css';

const AppointmentPage = () => {
  const appointments = [
    { time: '9:00 AM', patient: 'John Doe' },
    { time: '10:30 AM', patient: 'Jane Smith' },
    { time: '1:00 PM', patient: 'Emily Johnson' },
  ];

  return (
    <Card className="p-4">
      <h4>📅 Appointments</h4>
      <ListGroup variant="flush">
        {appointments.map((appointment, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between">
            <span>{appointment.time}</span>
            <span>{appointment.patient}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default AppointmentPage;