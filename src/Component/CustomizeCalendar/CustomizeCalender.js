import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomizeCalender = ({ handleDateChange }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={handleDateChange} value={new Date()} />
    </div>
  );
};

export default CustomizeCalender;
