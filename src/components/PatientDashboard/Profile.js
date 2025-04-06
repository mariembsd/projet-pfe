import React from 'react';
import { Card } from 'react-bootstrap';
import './Css.css';

const Profile = () => {
  return (
    <Card className="p-4">
      <h4>👤 Patient Profile</h4>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Email:</strong> john@example.com</p>
      <p><strong>Phone:</strong> +123456789</p>
      <p><strong>Address:</strong> City, Country</p>
      <p><strong>Type of Disease:</strong> Acne</p>
      <p><strong>Skin Type:</strong> Oily</p>
      <p><strong>Age:</strong> 25</p>
    </Card>
  );
};

export default Profile;
