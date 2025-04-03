import React from 'react';
import './AppointmentsList.css';

const AppointmentsList = () => {
    const appointments = [
        { id: 1, patient: 'John Doe', date: '2025-04-10', time: '10:00 AM' },
        { id: 2, patient: 'Jane Smith', date: '2025-04-12', time: '2:00 PM' },
        { id: 3, patient: 'Mike Johnson', date: '2025-04-15', time: '9:30 AM' }
    ];

    return (
        <div className="appointments-container">
            <h2>Appointments List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Patient</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.id}</td>
                            <td>{appointment.patient}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsList;