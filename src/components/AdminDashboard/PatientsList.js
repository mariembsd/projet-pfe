import React from 'react';
import './PatientsList.css';

const PatientsList = () => {
    const patients = [
        { id: 1, name: 'John Doe', age: 29, condition: 'Acne' },
        { id: 2, name: 'Jane Smith', age: 35, condition: 'Eczema' },
        { id: 3, name: 'Mike Johnson', age: 42, condition: 'Psoriasis' }
    ];

    return (
        <div className="patients-container">
            <h2>Patients List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Condition</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>{patient.age}</td>
                            <td>{patient.condition}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientsList;
