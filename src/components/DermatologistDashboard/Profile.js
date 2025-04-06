import React from 'react';
import { Card } from 'react-bootstrap';
import './DermCss.css';

const ProfilePage = () => {
  // Static data for the dermatologist's profile
  const profileData = {
    name: 'Dr. John Doe',
    email: 'john.doe@example.com',
    phone: '+123456789',
    specialty: 'Dermatologist',
    experience: '10 years of experience in dermatology',
    clinic: 'Downtown Skin Care Clinic',
    location: '123 Skin St, Springfield, USA',
    availableHours: 'Mon-Fri: 9 AM - 5 PM',
  };

  return (
    <Card className="p-4">
      <h4>👤 Dermatologist Profile</h4>
      <div className="profile-info">
        <p><strong>Name:</strong> {profileData.name}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        <p><strong>Phone:</strong> {profileData.phone}</p>
        <p><strong>Specialty:</strong> {profileData.specialty}</p>
        <p><strong>Experience:</strong> {profileData.experience}</p>
        <p><strong>Clinic:</strong> {profileData.clinic}</p>
        <p><strong>Location:</strong> {profileData.location}</p>
        <p><strong>Available Hours:</strong> {profileData.availableHours}</p>
      </div>
    </Card>
  );
};

export default ProfilePage;
