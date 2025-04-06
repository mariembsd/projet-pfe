import React, { useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';
import DermatologistDetails from './DermatologistDetails';
import './Css.css';
const DermatologistList = () => {
  const [selectedDerm, setSelectedDerm] = useState(null);

  const dermatologists = [
    {
      id: 1,
      name: 'Dr. Sarah Lee',
      speciality: 'Acne Specialist',
      phone: '+987654321',
      address: 'Downtown Clinic',
    },
    {
      id: 2,
      name: 'Dr. Alex Kim',
      speciality: 'Skin Cancer Expert',
      phone: '+123456789',
      address: 'SkinCare Center',
    },
  ];

  return (
    <div>
      <h4>👩‍⚕️ Dermatologist List</h4>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Speciality</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dermatologists.map((derm) => (
            <tr key={derm.id}>
              <td>{derm.name}</td>
              <td>{derm.speciality}</td>
              <td>{derm.phone}</td>
              <td>{derm.address}</td>
              <td>
                <Button variant="info" onClick={() => setSelectedDerm(derm)}>
                  Consulter
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedDerm && <DermatologistDetails dermatologist={selectedDerm} />}
    </div>
  );
};

export default DermatologistList;
