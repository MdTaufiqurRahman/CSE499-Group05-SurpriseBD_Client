import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomizeCalender = ({handleDateChange}) => {
    const [value, onChange] = useState(new Date());

    return (
      
        <div>
        <main style={{ height: "400px"}} className="d-flex justify-content-center">
        <div className="col-md-5 offset-md-2 mt-3">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
      </main>
      </div>
    );
};

export default CustomizeCalender;