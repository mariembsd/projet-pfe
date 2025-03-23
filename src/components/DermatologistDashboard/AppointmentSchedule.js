// src/components/DermatologistDashboard/AppointmentSchedule.js
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./AppointmentSchedule.css";

const localizer = momentLocalizer(moment);

const AppointmentSchedule = () => {
  // Mock data for appointments (replace with API data later)
  const appointments = [
    {
      id: 1,
      title: "Consultation with John Doe",
      start: new Date(2023, 9, 10, 10, 0), // October 10, 2023, 10:00 AM
      end: new Date(2023, 9, 10, 11, 0), // October 10, 2023, 11:00 AM
    },
    {
      id: 2,
      title: "Follow-up with Jane Smith",
      start: new Date(2023, 9, 12, 14, 0), // October 12, 2023, 2:00 PM
      end: new Date(2023, 9, 12, 15, 0), // October 12, 2023, 3:00 PM
    },
  ];

  return (
    <div className="appointment-schedule">
      <h4>Appointment Schedule</h4>
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default AppointmentSchedule;