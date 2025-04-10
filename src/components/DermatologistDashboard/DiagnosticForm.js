import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './DermCss.css';

const DiagnosePage = () => {
  const [medications, setMedications] = useState([{ name: '', dosage: '', duration: '', frequency: '' }]);

  const handleMedicationChange = (index, field, value) => {
    const updated = [...medications];
    updated[index][field] = value;
    setMedications(updated);
  };

  const addMedicationField = () => {
    setMedications([...medications, { name: '', dosage: '', duration: '', frequency: '' }]);
  };

  const handleSave = () => {
    // Handle save logic
    console.log('Saved Diagnosis', medications);
  };

  return (
    <Card className="p-4">
      <h4>🩺 Diagnostic Form</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Disease Name</Form.Label>
          <Form.Control type="text" placeholder="e.g., Acne" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter disease description" />
        </Form.Group>

        <h5 className="mt-4">📝 Prescription</h5>
        {medications.map((med, index) => (
          <div key={index} className="mb-3 border rounded p-3 medication-block">
            <div className="row g-3">
              <Form.Group className="col-md-3">
                <Form.Label>Medication Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., Benzoyl Peroxide"
                  value={med.name}
                  onChange={(e) => handleMedicationChange(index, 'name', e.target.value)}
                />
              </Form.Group>
              <Form.Group className="col-md-3">
                <Form.Label>Dosage</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., 200mg"
                  value={med.dosage}
                  onChange={(e) => handleMedicationChange(index, 'dosage', e.target.value)}
                />
              </Form.Group>
              <Form.Group className="col-md-3">
                <Form.Label>Frequency</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., 3 times a day"
                  value={med.frequency}
                  onChange={(e) => handleMedicationChange(index, 'frequency', e.target.value)}
                />
              </Form.Group>
              <Form.Group className="col-md-3">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., 1 month"
                  value={med.duration}
                  onChange={(e) => handleMedicationChange(index, 'duration', e.target.value)}
                />
              </Form.Group>
            </div>
          </div>
        ))}
         <div className="col-md-10 d-inline-flex gap-3">
          <div className=" mt-3 col-md-4">
            <Button variant="secondary" onClick={addMedicationField}  >➕ Add Medication</Button>
          </div>
          <div className=" mt-3 col-md-3">
            <Button variant="primary" onClick={handleSave}  >💾 Save</Button>
          </div>
        </div>
      </Form>
    </Card>
  );
};

export default DiagnosePage;
