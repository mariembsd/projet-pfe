import React, { useState } from 'react';
import { Card, Form, Button, Dropdown } from 'react-bootstrap';
import './DermCss.css';

const DiagnosePage = () => {
  const [medications, setMedications] = useState([{ name: '', dosage: '', duration: '', frequency: '' }]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [creationDate, setCreationDate] = useState(new Date().toISOString().split('T')[0]);
  const [expirationDate, setExpirationDate] = useState('');
  const [severity, setSeverity] = useState('medium');
  
  const patients = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Robert Johnson' },
    { id: 4, name: 'Emily Davis' },
    { id: 5, name: 'Michael Wilson' },
  ];

  const handleMedicationChange = (index, field, value) => {
    const updated = [...medications];
    updated[index][field] = value;
    setMedications(updated);
  };

  const addMedicationField = () => {
    setMedications([...medications, { name: '', dosage: '', duration: '', frequency: '' }]);
  };

  const handleSave = () => {
    console.log('Saved Diagnosis', {
      patient: selectedPatient,
      creationDate,
      expirationDate,
      severity,
      medications
    });
  };

  return (
    <Card className="p-4 diagnostic-form">
      <h4>🩺 Diagnostic Form</h4>
      <Form>
        {/* Patient Selection Dropdown */}
        <Form.Group className="mb-3 patient-select-container">
          <Form.Label>Select Patient</Form.Label>
          <Dropdown className="patient-dropdown">
            <Dropdown.Toggle variant="outline-secondary" className="patient-dropdown-toggle">
              {selectedPatient ? selectedPatient.name : 'Select a patient'}
            </Dropdown.Toggle>
            <Dropdown.Menu className="patient-dropdown-menu">
              {patients.map(patient => (
                <Dropdown.Item 
                  key={patient.id} 
                  className="patient-dropdown-item"
                  onClick={() => setSelectedPatient(patient)}
                  active={selectedPatient && selectedPatient.id === patient.id}
                >
                  {patient.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Disease Name</Form.Label>
          <Form.Control type="text" placeholder="e.g., Acne" className="form-control" />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter disease description" className="form-control" />
        </Form.Group>
        
        {/* Severity Level */}
        <Form.Group className="mb-3 severity-level">
          <Form.Label>Severity Level</Form.Label>
          <div className="severity-options">
            <Form.Check
              inline
              label="Mild"
              name="severity"
              type="radio"
              id="severity-mild"
              checked={severity === 'mild'}
              onChange={() => setSeverity('mild')}
            />
            <Form.Check
              inline
              label="Medium"
              name="severity"
              type="radio"
              id="severity-medium"
              checked={severity === 'medium'}
              onChange={() => setSeverity('medium')}
            />
            <Form.Check
              inline
              label="Severe"
              name="severity"
              type="radio"
              id="severity-severe"
              checked={severity === 'severe'}
              onChange={() => setSeverity('severe')}
            />
            <Form.Check
              inline
              label="Critical"
              name="severity"
              type="radio"
              id="severity-critical"
              checked={severity === 'critical'}
              onChange={() => setSeverity('critical')}
            />
          </div>
        </Form.Group>

        <h5 className="mt-4">📝 Prescription</h5>
        
        {/* Prescription Dates */}
        <div className="prescription-dates-container">
          <Form.Group className="prescription-date-field">
            <Form.Label>Creation Date</Form.Label>
            <Form.Control 
              type="date" 
              className="form-control prescription-date-input"
              value={creationDate}
              onChange={(e) => setCreationDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="prescription-date-field">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control 
              type="date" 
              className="form-control prescription-date-input"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              min={creationDate}
            />
          </Form.Group>
        </div>

        {medications.map((med, index) => (
          <div key={index} className="mb-3 border rounded p-3 medication-block medication-item">
            <div className="row g-3">
              <Form.Group className="col-md-3">
                <Form.Label>Medication Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., Benzoyl Peroxide"
                  value={med.name}
                  onChange={(e) => handleMedicationChange(index, 'name', e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="col-md-3">
                <Form.Label>Dosage</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., 200mg"
                  value={med.dosage}
                  onChange={(e) => handleMedicationChange(index, 'dosage', e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="col-md-3">
                <Form.Label>Frequency</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., 3 times a day"
                  value={med.frequency}
                  onChange={(e) => handleMedicationChange(index, 'frequency', e.target.value)}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group className="col-md-3">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., 1 month"
                  value={med.duration}
                  onChange={(e) => handleMedicationChange(index, 'duration', e.target.value)}
                  className="form-control"
                />
              </Form.Group>
            </div>
          </div>
        ))}
        
        <div className="col-md-10 d-inline-flex gap-3">
          <div className="mt-3 col-md-4">
            <Button variant="secondary" onClick={addMedicationField} className="btn-add-prescription">➕ Add Medication</Button>
          </div>
          <div className="mt-3 col-md-3">
            <Button variant="primary" onClick={handleSave} className="btn-save-diagnosis">💾 Save</Button>
          </div>
        </div>
      </Form>
    </Card>
  );
};

export default DiagnosePage;