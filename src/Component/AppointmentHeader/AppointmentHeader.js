import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import resort from '../../../src/images/resort.jpg';
import './AppointmentHeader.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '600px' }} className="body row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: 'DarkBlue' }}>Resort Booking & <span>Customize Order</span></h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />

            </div>
            <div className="col-md-6">
                <img src={resort} alt="" className="img-fluid" />
            </div>

        </main>
    );
};

export default AppointmentHeader;