import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const DermatologistDetails = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/patient/dashboard/calendar');
  };

  const handleSendMessage = () => {
    navigate('/patient/dashboard/calendar', {
      state: {
        doctor: {
          id: 1,
          name: 'Dr. John Doe',
          specialty: 'Dermatology',
           
        },
      },
    });
  };

  return (
    <Card className="p-4 mt-4">
      <h4>👨‍⚕️ Dermatologist Details</h4>
      <p><strong>Name:</strong> Dr. Sarah Lee</p>
      <p><strong>Speciality:</strong> Acne & Skincare</p>
      <p><strong>Phone:</strong> +123456789</p>
      <p><strong>Address:</strong> Paris, France</p>

      <div className="d-flex gap-3 mt-3">
        <Button variant="success" onClick={handleBookAppointment}>📅 Book an Appointment</Button>
        <Button variant="info" onClick={handleSendMessage}>💬 Write a Message</Button>
      </div>
    </Card>
  );
};

export default DermatologistDetails;
