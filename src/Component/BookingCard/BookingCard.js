import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
      return (
          <div className="col-md-4 mb-5">
              <div className="card p-3">
                  <div className="card-body text-center">
                      <h5 className="card-title">{booking.subject}</h5>
                      <img style={{width: '100%', height:'200px'}} src={booking.image} alt="" />
                      <h6>{booking.HelpingHour}</h6>
                      <p>{booking.totalSpace} SEATS AVAILABLE</p>
                      <button onClick={openModal} className="btn btn-primary text-uppercase">Booking</button>
                      <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm>
                  </div>
              </div>
          </div>
      );
  };

export default BookingCard;