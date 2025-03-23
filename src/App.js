import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BookAppointment from './pages/Appointment';
import Dermatologists from './pages/Dermatologist';
import AdminDashboardPage from './pages/AdminDashboardPage';
import DermatologistDashboardPage from './pages/DermatologistDashboardPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<Contact />} />  
        <Route path="/blog" element={<Blog />} />  
        <Route path="/dermatologist" element={<Dermatologists />} />  
        <Route path="/services" element={<ServicesPage />} />  
        <Route path="/bookanappointment" element={<BookAppointment />} />  
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/dermatologist/dashboard" element={<DermatologistDashboardPage />} />
        <Route path="/dermatologist/patients" element={<Patients />} /> {/* Add this route */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;