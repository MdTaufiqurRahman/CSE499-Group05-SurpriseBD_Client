import React, { useEffect, useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const AdminPanel = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("https://pacific-wildwood-12473.herokuapp.com/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppointments(data);
      });
  }, [selectedDate]);
  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-5 d-flex justify-content-center mt-2 mb-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
