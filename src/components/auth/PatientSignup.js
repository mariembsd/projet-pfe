import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forms.css';

const PatientSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthdate: '',
    gender: '',
    phone: '',
    skinType: '',
    medicalConditions: '',
    profileImage: null
  });

  const [errors, setErrors] = useState({}); // Add errors state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!formData.birthdate) newErrors.birthdate = 'Birthdate is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.skinType) newErrors.skinType = 'Skin type is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Patient form submitted:', formData);
      // Add your form submission logic here
      navigate('/success'); // Redirect to success page after submission
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Patient Registration</h2>
        <p>Please fill in your details</p>
      </div>
      
      <form onSubmit={handleSubmit} className="derma-form">
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        
        <div className="form-group">
          <label>Birthdate</label>
          <input 
            type="date" 
            name="birthdate" 
            value={formData.birthdate} 
            onChange={handleChange}
            className={errors.birthdate ? 'error' : ''}
          />
          {errors.birthdate && <span className="error-message">{errors.birthdate}</span>}
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
          <label>Gender</label>
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange}
            className={errors.gender ? 'error' : ''}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>
        
        <div className="form-group">
          <label>Skin Type</label>
          <select 
            name="skinType" 
            value={formData.skinType} 
            onChange={handleChange}
            className={errors.skinType ? 'error' : ''}
          >
            <option value="">Select</option>
            <option value="normal">Normal</option>
            <option value="dry">Dry</option>
            <option value="oily">Oily</option>
            <option value="combination">Combination</option>
            <option value="sensitive">Sensitive</option>
          </select>
          {errors.skinType && <span className="error-message">{errors.skinType}</span>}
        </div>
        
        <div className="form-group">
          <label>Medical Conditions</label>
          <textarea 
            name="medicalConditions" 
            value={formData.medicalConditions} 
            onChange={handleChange} 
            placeholder="List any skin conditions or allergies"
          />
        </div>
        
        <div className="form-group">
          <label>Profile Image</label>
          <input 
            type="file" 
            name="profileImage" 
            onChange={handleChange} 
            accept="image/*"
          />
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

export default PatientSignup;