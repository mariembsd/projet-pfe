import React, { useState } from 'react';
import Sidebar from '../components/PatientDashboard/Sidebar';
import Profile from '../components/PatientDashboard/Profile';
import DermatologistList from '../components/PatientDashboard/DermatologistList';
import Appointments from '../components/PatientDashboard/Appointments';
import Calendar from '../components/PatientDashboard/Calendar';

const DashboardPatient = () => {
  const [activeView, setActiveView] = useState('profile');

  return (
    <div className="d-flex">
      <Sidebar setActiveView={setActiveView} />
      <div className="p-4 flex-grow-1" style={{ backgroundColor: '#f4f6fa', minHeight: '100vh' }}>
        {activeView === 'profile' && <Profile />}
        {activeView === 'dermatologists' && <DermatologistList />}
        {activeView === 'appointments' && <Appointments />}
        {activeView === 'calendar' && <Calendar />}
      </div>
    </div>
  );
};

export default DashboardPatient;
