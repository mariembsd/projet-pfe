import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forms.css';

const DermatologistSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    experience: '',
    phone: '',
    address: '',
    diploma: null,
    cinCard: null,
    availableDays: [],
    status: 'pending'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (name === 'cinCard' || name === 'diploma') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else if (name === 'availableDays') {
      setFormData(prev => ({
        ...prev,
        availableDays: checked
          ? [...prev.availableDays, value]
          : prev.availableDays.filter(day => day !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dermatologist form submitted:', formData);
    // Add your form submission logic here
    navigate('/'); // Redirect after submission
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Dermatologist Registration</h2>
        <p>Please provide your professional details</p>
      </div>

      <form onSubmit={handleSubmit} className="derma-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Years of Experience</label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your clinic or practice location"
          />
        </div>

        <div className="form-group">
          <label>Diploma/Certificate</label>
          <input
            type="file"
            name="diploma"
            onChange={handleChange}
            required
            accept=".pdf,.jpg,.png"
          />
          <small>Upload your medical license or diploma</small>
        </div>

        <div className="form-group">
          <label>CIN Card Photo</label>
          <input
            type="file"
            name="cinCard"
            onChange={handleChange}
            required
            accept=".jpg,.jpeg,.png"
          />
          <small>Upload a photo of your CIN card</small>
        </div>
        <div className="form-group">
  <label>Available Days for Consultation</label>
  <div className="day-grid">
    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
      <label key={day} className="day-checkbox">
        <input
          type="checkbox"
          name="availableDays"
          value={day}
          checked={formData.availableDays.includes(day)}
          onChange={handleChange}
        />
        {day}
      </label>
    ))}
  </div>
</div>


        <div className="form-actions">
          <button type="button" className="secondary-btn" onClick={() => navigate('/')}>
            Back
          </button>
          <button type="submit" className="primary-btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default DermatologistSignup;
