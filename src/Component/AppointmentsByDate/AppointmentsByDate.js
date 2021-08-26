import React from "react";
import AppointmentDataTable from "../AppointmentDataTable/AppointmentDataTable";
import AppointmentShortList from "../AppointmentShortList/AppointmentShortList";

const AppointmentsByDate = ({ appointments }) => {
  console.log(appointments);
  return (
    <div>
      <h2 className="text-brand text-center">Appointments</h2>
      <AppointmentDataTable appointments={appointments}></AppointmentDataTable>
    </div>
  );
};

export default AppointmentsByDate;
