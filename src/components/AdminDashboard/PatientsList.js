import React, { useState } from 'react';
import './PatientsList.css';

const PatientsList = () => {
    const [patients, setPatients] = useState([
        { 
            id: 1, 
            patient: 'Sarah Johnson', 
            age: '22', 
            condition: 'Acne', 
            status: 'confirmed',
            avatar: 'SJ'
        },
        { 
            id: 2, 
            patient: 'Michael Brown', 
            age: '35', 
            condition: 'Skin Allergy', 
            status: 'confirmed',
            avatar: 'MB'
        },
        { 
            id: 3, 
            patient: 'Emily Davis', 
            age: '44', 
            condition: 'Hair dandruff', 
            status: 'pending',
            avatar: 'ED'
        }
    ]);

    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editFormData, setEditFormData] = useState({
        patient: '',
        age: '',
        condition: ''
    });

    const handleView = (patient) => {
        setSelectedPatient(patient);
        setIsEditing(false);
    };

    const handleEdit = (patient) => {
        setSelectedPatient(patient);
        setIsEditing(true);
        setEditFormData({
            patient: patient.patient,
            age: patient.age,
            condition: patient.condition
        });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({
            ...editFormData,
            [name]: value
        });
    };

    const handleSave = () => {
        const updatedPatients = patients.map(patient => 
            patient.id === selectedPatient.id 
                ? { ...patient, ...editFormData } 
                : patient
        );
        setPatients(updatedPatients);
        setSelectedPatient({ ...selectedPatient, ...editFormData });
        setIsEditing(false);
    };

    const handleConfirm = (id) => {
        const updatedPatients = patients.map(patient => 
            patient.id === id 
                ? { ...patient, status: 'confirmed' } 
                : patient
        );
        setPatients(updatedPatients);
    };

    const handleCloseDetails = () => {
        setSelectedPatient(null);
        setIsEditing(false);
    };

    return (
        <div className="dashboard-section">
            <div className="section-header">
                <h3>Patients List</h3>
                <button className="btn link">View All</button>
            </div>
            <div className="patients-table">
                <table>
                    <thead>
                        <tr>
                            <th>Patient</th>
                            <th>Age</th>
                            <th>Condition</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.id}>
                                <td>
                                    <div className="patient-info">
                                        <div className="patient-avatar">{patient.avatar}</div>
                                        <div className="patient-name">{patient.patient}</div>
                                    </div>
                                </td>
                                <td>{patient.age}</td>
                                <td>{patient.condition}</td>
                                <td>
                                    <span className={`status-badge ${patient.status}`}>
                                        {patient.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button 
                                            className="btn small view" 
                                            onClick={() => handleView(patient)}
                                        >
                                            View
                                        </button>
                                        <button 
                                            className="btn small edit" 
                                            onClick={() => handleEdit(patient)}
                                        >
                                            Edit
                                        </button>
                                        {patient.status === 'pending' && (
                                            <button 
                                                className="btn small primary" 
                                                onClick={() => handleConfirm(patient.id)}
                                            >
                                                Confirm
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Patient Details Modal - Improved */}
            {selectedPatient && (
                <div className="patient-details-modal">
                    <div className="modal-overlay" onClick={handleCloseDetails}></div>
                    <div className="modal-content-enhanced">
                        <button className="close-btn" onClick={handleCloseDetails}>×</button>
                        <h3>Patient Details</h3>
                        
                        <div className="patient-avatar-large">{selectedPatient.avatar}</div>
                        
                        {isEditing ? (
                            <div className="edit-form-enhanced">
                                <div className="form-group-enhanced">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        name="patient"
                                        value={editFormData.patient}
                                        onChange={handleEditChange}
                                        className="form-input-enhanced"
                                    />
                                </div>
                                <div className="form-group-enhanced">
                                    <label>Age:</label>
                                    <input
                                        type="text"
                                        name="age"
                                        value={editFormData.age}
                                        onChange={handleEditChange}
                                        className="form-input-enhanced"
                                    />
                                </div>
                                <div className="form-group-enhanced">
                                    <label>Condition:</label>
                                    <input
                                        type="text"
                                        name="condition"
                                        value={editFormData.condition}
                                        onChange={handleEditChange}
                                        className="form-input-enhanced"
                                    />
                                </div>
                                <div className="form-group-enhanced">
                                    <label>Status:</label>
                                    <div className="form-field">
                                        <span className={`status-badge ${selectedPatient.status}`}>
                                            {selectedPatient.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-actions-enhanced">
                                    <button className="btn primary" onClick={handleSave}>
                                        Save Changes
                                    </button>
                                    <button className="btn secondary" onClick={() => setIsEditing(false)}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="details-view-enhanced">
                                <div className="form-group-enhanced">
                                    <label>Name:</label>
                                    <div className="form-field-enhanced">{selectedPatient.patient}</div>
                                </div>
                                <div className="form-group-enhanced">
                                    <label>Age:</label>
                                    <div className="form-field-enhanced">{selectedPatient.age}</div>
                                </div>
                                <div className="form-group-enhanced">
                                    <label>Condition:</label>
                                    <div className="form-field-enhanced">{selectedPatient.condition}</div>
                                </div>
                                <div className="form-group-enhanced">
                                    <label>Status:</label>
                                    <div className="form-field-enhanced">
                                        <span className={`status-badge ${selectedPatient.status}`}>
                                            {selectedPatient.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-actions-enhanced">
                                    <button className="btn edit" onClick={() => handleEdit(selectedPatient)}>
                                        Edit
                                    </button>
                                    <button className="btn secondary" onClick={handleCloseDetails}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PatientsList;