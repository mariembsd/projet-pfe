import React from 'react';
import { Card } from 'react-bootstrap';
import './Css.css';
const Appointments = () => {
  const appointments = [
    {
      id: 1,
      dermatologist: 'Dr. Sarah Lee',
      date: '10 April 2025',
      time: '15:00',
      location: 'Downtown Clinic',
    },
    {
      id: 2,
      dermatologist: 'Dr. Alex Kim',
      date: '20 April 2025',
      time: '11:30',
      location: 'SkinCare Center',
    },
  ];

  return (
    <Card className="p-4">
      <h4>📅 My Appointments</h4>
      <ul className="list-group mt-3">
        {appointments.map((appt) => (
          <li key={appt.id} className="list-group-item">
            <strong>{appt.dermatologist}</strong> <br />
            {appt.date}, {appt.time} <br />
            {appt.location}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Appointments;
