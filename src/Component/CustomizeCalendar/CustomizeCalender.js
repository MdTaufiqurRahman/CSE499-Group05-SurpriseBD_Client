import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomizeCalender = ({handleDateChange}) => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
             <h1 className="text-center text-danger" >Customize Your Order</h1>
        <main style={{ height: "600px"}} className="d-flex justify-content-center">
        <div className="col-md-5 offset-md-2 mt-3">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
      </main>
      </div>
    );
};

export default CustomizeCalender;