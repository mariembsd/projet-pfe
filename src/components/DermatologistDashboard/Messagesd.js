import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import './DermCss.css';

const PatientMessages = () => {
  const [open, setOpen] = useState(null); // State to manage which message info is shown

  const messages = [
    {
      name: 'John Doe',
      message: 'Hi, I’ve been experiencing severe acne lately. Can you suggest any treatment?',
      date: '2023-10-15',
      status: 'Unread', // Message status: Unread or Read
    },
    {
      name: 'Jane Smith',
      message: 'I have a rash on my legs. Could you please recommend a treatment?',
      date: '2023-11-01',
      status: 'Read',
    },
    {
      name: 'Emily Johnson',
      message: 'I have been using the prescribed lotion, but I feel my eczema is getting worse.',
      date: '2023-12-05',
      status: 'Unread',
    },
  ];

  const handleToggle = (index) => {
    setOpen(open === index ? null : index); // Toggle the display of detailed info
  };

  return (
    <Card className="p-4">
      <h4>💬 Messages from Patients</h4>
      {messages.map((msg, index) => (
        <div key={index} className="mb-3 border p-3">
          <h5>{msg.name}</h5>
          <p><strong>Message:</strong> {msg.message}</p>
          <p><strong>Date:</strong> {msg.date}</p>
          <p><strong>Status:</strong> <span className={msg.status === 'Unread' ? 'text-danger' : 'text-success'}>{msg.status}</span></p>

          <Button variant="info" onClick={() => handleToggle(index)}>
            🔍 {open === index ? 'Hide Info' : 'View Details'}
          </Button>

          <Collapse in={open === index}>
            <div className="mt-3">
              <p><strong>Full Message:</strong> {msg.message}</p>
              {/* Add any additional info here */}
            </div>
          </Collapse>
        </div>
      ))}
    </Card>
  );
};

export default PatientMessages;
