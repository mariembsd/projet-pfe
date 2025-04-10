import React from 'react';
import './AppointmentsList.css';

const AppointmentsList = () => {
    const appointments = [
        { 
            id: 1, 
            patient: 'Sarah Johnson', 
            dermatologist: 'Dr. Smith', 
            date: 'Today, 10:30 AM', 
            status: 'confirmed',
            avatar: 'SJ'
          },
          { 
            id: 2, 
            patient: 'Michael Brown', 
            dermatologist: 'Dr. Lee', 
            date: 'Today, 11:45 AM', 
            status: 'confirmed',
            avatar: 'MB'
          },
          { 
            id: 3, 
            patient: 'Emily Davis', 
            dermatologist: 'Dr. Wilson', 
            date: 'Tomorrow, 9:15 AM', 
            status: 'pending',
            avatar: 'ED'
          }
    ];

    return (
        <div className="dashboard-section">
        <div className="section-header">
          <h3>Appointments</h3>
          <button className="btn link">View All</button>
        </div>
        <div className="appointments-table">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Dermatologist</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>
                    <div className="patient-info">
                      <div className="patient-avatar">{appointment.avatar}</div>
                      <div className="patient-name">{appointment.patient}</div>
                    </div>
                  </td>
                  <td>{appointment.dermatologist}</td>
                  <td>{appointment.date}</td>
                  <td>
                    <span className={`status-badge ${appointment.status}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn small view">View</button>
                      {appointment.status === 'pending' && (
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

export default AppointmentsList;