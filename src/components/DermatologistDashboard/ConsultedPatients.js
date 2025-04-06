import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import './DermCss.css';

const ConsultedPatients = () => {
  const [open, setOpen] = useState(null); // State to manage which patient info is shown

  const patients = [
    {
      name: 'John Doe',
      disease: 'Acne',
      skinType: 'Oily',
      age: 28,
      address: '123 Main St, Springfield',
      treatment: 'Topical cream and antibiotics',
      gender: 'Male',
      medicalHistory: 'No significant medical history.',
      medications: 'Accutane (20mg)',
      allergies: 'None',
      lastVisit: '2023-10-15',
    },
    {
      name: 'Jane Smith',
      disease: 'Psoriasis',
      skinType: 'Dry',
      age: 34,
      address: '456 Elm St, Springfield',
      treatment: 'Steroid cream and moisturizing ointment',
      gender: 'Female',
      medicalHistory: 'Family history of autoimmune diseases.',
      medications: 'Prednisone (10mg)',
      allergies: 'Penicillin',
      lastVisit: '2023-11-01',
    },
    {
      name: 'Emily Johnson',
      disease: 'Eczema',
      skinType: 'Normal',
      age: 40,
      address: '789 Oak St, Springfield',
      treatment: 'Moisturizing lotion and antihistamines',
      gender: 'Female',
      medicalHistory: 'Chronic eczema since childhood.',
      medications: 'Hydrocortisone cream (1%)',
      allergies: 'Dust mites, Pollen',
      lastVisit: '2023-12-05',
    },
  ];

  const handleToggle = (index) => {
    setOpen(open === index ? null : index); // Toggle the display of detailed info
  };

  return (
    <Card className="p-4">
      <h4>👥 Consulted Patients</h4>
      {patients.map((patient, index) => (
        <div key={index} className="mb-3 border p-3">
          <h5>{patient.name}</h5>
          <p><strong>Disease:</strong> {patient.disease}</p>
          <p><strong>Skin Type:</strong> {patient.skinType}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <Button variant="info" onClick={() => handleToggle(index)}>
            🔍 {open === index ? 'Hide Info' : 'View Info'}
          </Button>

          <Collapse in={open === index}>
            <div className="mt-3">
              <p><strong>Address:</strong> {patient.address}</p>
              <p><strong>Treatment:</strong> {patient.treatment}</p>
              <p><strong>Gender:</strong> {patient.gender}</p>
              <p><strong>Medical History:</strong> {patient.medicalHistory}</p>
              <p><strong>Medications:</strong> {patient.medications}</p>
              <p><strong>Allergies:</strong> {patient.allergies}</p>
              <p><strong>Last Visit:</strong> {patient.lastVisit}</p>
            </div>
          </Collapse>
        </div>
      ))}
    </Card>
  );
};

export default ConsultedPatients;
