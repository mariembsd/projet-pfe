import React from 'react';
import './DermatologistsList.css';

const DermatologistsList = () => {
    const dermatologists = [
        { id: 1, name: 'Dr. Emily Clark', experience: '10 years', specialty: 'Acne Treatment' },
        { id: 2, name: 'Dr. Robert Wilson', experience: '15 years', specialty: 'Psoriasis Care' },
        { id: 3, name: 'Dr. Sarah Adams', experience: '8 years', specialty: 'Eczema Management' }
    ];

    return (
        <div className="dermatologists-container">
            <h2>Dermatologists List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Experience</th>
                        <th>Specialty</th>
                    </tr>
                </thead>
                <tbody>
                    {dermatologists.map(derm => (
                        <tr key={derm.id}>
                            <td>{derm.id}</td>
                            <td>{derm.name}</td>
                            <td>{derm.experience}</td>
                            <td>{derm.specialty}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DermatologistsList;
