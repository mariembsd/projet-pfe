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
            avatar: 'SJ',
            email: 'r.smith@clinic.com',
            phone: '(555) 123-4567',
            specialty: 'Acne Treatment'
        },
        { 
            id: 2, 
            doctor: 'Dr.Lee', 
            dermatologist: 'Michael Brown', 
            experience: '5 years',  
            status: 'confirmed',
            avatar: 'MB',
            email: 'm.brown@clinic.com',
            phone: '(555) 987-6543',
            specialty: 'Skin Cancer'
        },
        { 
            id: 3, 
            doctor: 'Dr. Wilson', 
            dermatologist: 'Emily Wilson', 
            experience: '8 years', 
            status: 'pending',
            avatar: 'ED',
            email: 'e.wilson@clinic.com',
            phone: '(555) 456-7890',
            specialty: 'Cosmetic Dermatology'
        }
    ];

    const [selectedDermatologist, setSelectedDermatologist] = React.useState(null);
    const [isEditing, setIsEditing] = React.useState(false);

    const handleView = (derm) => {
        setSelectedDermatologist(derm);
        setIsEditing(false);
    };

    const handleEdit = (derm) => {
        setSelectedDermatologist(derm);
        setIsEditing(true);
    };

    const handleClose = () => {
        setSelectedDermatologist(null);
        setIsEditing(false);
    };

    const handleSave = () => {
        // Save logic would go here
        handleClose();
    };

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
                                        <button 
                                            className="btn small view" 
                                            onClick={() => handleView(dermatologist)}
                                        >
                                            View
                                        </button>
                                        <button 
                                            className="btn small edit" 
                                            onClick={() => handleEdit(dermatologist)}
                                        >
                                            Edit
                                        </button>
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

            {/* View Modal */}
            {selectedDermatologist && !isEditing && (
                <div className="modal-overlay">
                    <div className="modal-content white-bg">
                        <div className="modal-header">
                            <h3>Dermatologist Details</h3>
                            <button className="close-btn" onClick={handleClose}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="detail-row">
                                <div className="detail-avatar">{selectedDermatologist.avatar}</div>
                                <div>
                                    <h4>{selectedDermatologist.doctor}</h4>
                                    <p className="text-muted">{selectedDermatologist.dermatologist}</p>
                                </div>
                            </div>
                            <div className="detail-info">
                                <div className="info-item">
                                    <span className="info-label">Experience:</span>
                                    <span>{selectedDermatologist.experience}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Specialty:</span>
                                    <span>{selectedDermatologist.specialty}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Email:</span>
                                    <span>{selectedDermatologist.email}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Phone:</span>
                                    <span>{selectedDermatologist.phone}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Status:</span>
                                    <span className={`status-badge ${selectedDermatologist.status}`}>
                                        {selectedDermatologist.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {selectedDermatologist && isEditing && (
                <div className="modal-overlay">
                    <div className="modal-content white-bg">
                        <div className="modal-header">
                            <h3>Edit Dermatologist</h3>
                            <button className="close-btn" onClick={handleClose}>×</button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Doctor Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        defaultValue={selectedDermatologist.doctor} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        defaultValue={selectedDermatologist.dermatologist} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Experience</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        defaultValue={selectedDermatologist.experience} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Specialty</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        defaultValue={selectedDermatologist.specialty} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        defaultValue={selectedDermatologist.email} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input 
                                        type="tel" 
                                        className="form-control" 
                                        defaultValue={selectedDermatologist.phone} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <select className="form-control" defaultValue={selectedDermatologist.status}>
                                        <option value="confirmed">Confirmed</option>
                                        <option value="pending">Pending</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn" onClick={handleClose}>Cancel</button>
                            <button className="btn primary" onClick={handleSave}>Save Changes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DermatologistsList;