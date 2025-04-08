import React from 'react';
import { NavLink } from 'react-router-dom';
import './Css.css';

const Sidebar = ({ setActiveView }) => {
  return (
    <div className="bg-white border-end p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <h5 className="mb-4 text-primary">Patient Dashboard</h5>
      <ul className="list-unstyled">
        <li>
          <NavLink 
            to="/patient/dashboard/profile" 
            className={({ isActive }) => `btn w-100 text-start mb-2 ${isActive ? 'active' : ''}`}
          >
            👤 Profile
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/patient/dashboard/dermatologists" 
            className={({ isActive }) => `btn w-100 text-start mb-2 ${isActive ? 'active' : ''}`}
          >
            👩‍⚕️ Dermatologists
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/patient/dashboard/appointments" 
            className={({ isActive }) => `btn w-100 text-start mb-2 ${isActive ? 'active' : ''}`}
          >
            📅 Appointments
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/patient/dashboard/calendar" 
            className={({ isActive }) => `btn w-100 text-start mb-2 ${isActive ? 'active' : ''}`}
          >
            📅 Calendar
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
/**import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Css.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-end p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <h5 className="mb-4 text-primary">Patient Dashboard</h5>
      <ul className="list-unstyled">
        <li>
          <button className="btn w-100 text-start mb-2" onClick={() => navigate('/profile')}>
            👤 Profile
          </button>
        </li>
        <li>
          <button className="btn w-100 text-start mb-2" onClick={() => navigate('/dermatologists')}>
            👩‍⚕️ Dermatologists
          </button>
        </li>
        <li>
          <button className="btn w-100 text-start mb-2" onClick={() => navigate('/appointments')}>
            📅 Appointments
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
 */