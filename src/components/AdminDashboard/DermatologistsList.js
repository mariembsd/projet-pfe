import React from 'react';
import './DermatologistsList.css';

const DermatologistsList = () => {
    const dermatologists = [
        { 
            id: 1, 
            doctor: 'Dr. Smith', 
            dermatologist: 'Rachel Smith', 
            experience: '10 years', 
            status: 'confirmed',
            avatar: 'SJ'
          },
          { 
            id: 2, 
            doctor: 'Dr.Lee', 
            dermatologist: 'Michael Brown', 
            experience: '5 years',  
            status: 'confirmed',
            avatar: 'MB'
          },
          { 
            id: 3, 
            doctor: 'Dr. Wilson', 
            dermatologist: 'Emily Wilson', 
            experience: '8 years', 
            status: 'pending',
            avatar: 'ED'
          }
    ];

    return (
        <div className="dashboard-section">
        <div className="section-header">
          <h3>Dermatologists List</h3>
          <button className="btn link">View All</button>
        </div>
        <div className="dermatologists-table">
          <table>
            <thead>
              <tr>
                <th>Dermatologist</th>
                <th>Name</th>
                <th>Experience</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dermatologists.map(dermatologist => (
                <tr key={dermatologist.id}>
                  <td>
                    <div className="doctor-info">
                      <div className="doctor-avatar">{dermatologist.avatar}</div>
                      <div className="doctor-name">{dermatologist.doctor}</div>
                    </div>
                  </td>
                  <td>{dermatologist.dermatologist}</td>
                  <td>{dermatologist.experience}</td>
                  <td>
                    <span className={`status-badge ${dermatologist.status}`}>
                      {dermatologist.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn small view">View</button>
                      {dermatologist.status === 'pending' && (
                        <button className="btn small primary">Confirm</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default DermatologistsList;
