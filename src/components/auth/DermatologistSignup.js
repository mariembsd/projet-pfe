import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forms.css';

const DermatologistSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    speciality: '',
    experience: '',
    availability: '',
    phone: '',
    diploma: null,
    status: 'pending'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
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
          <label>Speciality</label>
          <input 
            type="text" 
            name="speciality" 
            value={formData.speciality} 
            onChange={handleChange} 
            required 
            placeholder="e.g. Pediatric Dermatology, Cosmetic Dermatology"
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
          <label>Availability</label>
          <select 
            name="availability" 
            value={formData.availability} 
            onChange={handleChange} 
            required
          >
            <option value="">Select</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="consultation-basis">Consultation basis</option>
          </select>
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