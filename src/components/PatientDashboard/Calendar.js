import React, { useState } from 'react';
import { ButtonGroup, ToggleButton, Modal, Button } from 'react-bootstrap';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom';

// Import components for views
import Sidebar from './Sidebar';
import Profile from './Profile';
import DermatologistList from './DermatologistList';
import Appointments from './Appointments';

const AppointmentCalendar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;

  const [view, setView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(moment());
  const [showModal, setShowModal] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);

  const [activeView, setActiveView] = useState('calendar'); // from DashboardPatient

  const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8AM–8PM

  const isHourAvailable = (hour) => hour !== 12 && hour !== 15;

  const handleHourClick = (date, hour) => {
    setSelectedDate(date);
    setSelectedHour(hour);
    setShowModal(true);
  };

  const confirmAppointment = () => {
    console.log("Navigating with:", doctor, selectedDate.format('dddd, MMMM Do YYYY'), selectedHour);
    navigate('/appointment-info', {
      state: {
        doctor,
        date: selectedDate.format('dddd, MMMM Do YYYY'),
        hour: selectedHour,
      },
    });
  };

  const renderHourButtons = (date) => (
    <div className="d-flex flex-wrap justify-content-center mb-3">
      {hours.map(hour => (
        <Button
          key={hour}
          variant={isHourAvailable(hour) ? 'outline-primary' : 'secondary'}
          disabled={!isHourAvailable(hour)}
          className="m-2"
          onClick={() => handleHourClick(date, hour)}
        >
          {hour}:00
        </Button>
      ))}
    </div>
  );

  const renderDayView = () => (
    <div className="text-center">
      <h5 className="mb-3">{selectedDate.format('dddd, MMMM Do YYYY')}</h5>
      {renderHourButtons(selectedDate)}
    </div>
  );

  const renderWeekView = () => {
    const startOfWeek = moment(selectedDate).startOf('week');
    const days = Array.from({ length: 7 }, (_, i) => moment(startOfWeek).add(i, 'days'));

    return (
      <div className="row">
        {days.map((day, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="border rounded p-3 h-100">
              <h6 className="text-primary">{day.format('dddd')}</h6>
              <small className="text-muted">{day.format('MMM D')}</small>
              {renderHourButtons(day)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderMonthView = () => {
    const startOfMonth = moment(selectedDate).startOf('month');
    const daysInMonth = selectedDate.daysInMonth();
    const firstDay = startOfMonth.day();
    const rows = [];
    let cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(<td key={`empty-${i}`} className="bg-light"></td>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const day = moment(startOfMonth).date(d);
      cells.push(
        <td
          key={d}
          onClick={() => {
            setSelectedDate(day);
            setShowModal(true);
            setSelectedHour(null);
          }}
          className="selectable"
        >
          {d}
        </td>
      );

      if ((cells.length % 7 === 0) || d === daysInMonth) {
        rows.push(<tr key={d}>{cells}</tr>);
        cells = [];
      }
    }

    return (
      <table className="table table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };

  const goToPrevious = () => {
    if (view === 'day') setSelectedDate(prev => moment(prev).subtract(1, 'day'));
    if (view === 'week') setSelectedDate(prev => moment(prev).subtract(1, 'week'));
    if (view === 'month') setSelectedDate(prev => moment(prev).subtract(1, 'month'));
  };

  const goToNext = () => {
    if (view === 'day') setSelectedDate(prev => moment(prev).add(1, 'day'));
    if (view === 'week') setSelectedDate(prev => moment(prev).add(1, 'week'));
    if (view === 'month') setSelectedDate(prev => moment(prev).add(1, 'month'));
  };

  const renderCalendar = () => (
    <>
      <h3 className="text-center mb-4">📅 Appointment Calendar</h3>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <Button variant="outline-secondary" onClick={goToPrevious} className="me-2">← Prev</Button>
          <Button variant="outline-secondary" onClick={goToNext}>Next →</Button>
        </div>
        <h5 className="mb-0">
          {view === 'month' && selectedDate.format('MMMM YYYY')}
          {view === 'week' && `Week of ${moment(selectedDate).startOf('week').format('MMM D')}`}
          {view === 'day' && selectedDate.format('dddd, MMM D')}
        </h5>
        <ButtonGroup>
          {['day', 'week', 'month'].map((val) => (
            <ToggleButton
              key={val}
              type="radio"
              variant="outline-primary"
              name="view"
              value={val}
              checked={view === val}
              onChange={(e) => setView(e.currentTarget.value)}
            >
              {val.charAt(0).toUpperCase() + val.slice(1)}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      {view === 'month' && renderMonthView()}
      {view === 'week' && renderWeekView()}
      {view === 'day' && renderDayView()}

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pick an Hour on {selectedDate?.format('dddd, MMM Do')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderHourButtons(selectedDate)}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="success" disabled={!selectedHour} onClick={confirmAppointment}>
            Confirm Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ); 

  return (
    <div className="d-flex">
      
      <div className="p-4 flex-grow-1" style={{ backgroundColor: '#f4f6fa', minHeight: '100vh' }}>
        {activeView === 'profile' && <Profile />}
        {activeView === 'dermatologists' && <DermatologistList />}
        {activeView === 'appointments' && <Appointments />}
        {activeView === 'calendar' && renderCalendar()}
      </div>

      <style>{`
        .selectable {
          cursor: pointer;
          transition: 0.3s;
        }
        .selectable:hover {
          background-color: #d4edda;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default AppointmentCalendar;