import React from "react";

const AppointmentShortList = ({ appointments }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Phone
          </th>
          <th className="text-secondary" scope="col">
            Email
          </th>
          <th className="text-secondary" scope="col">
            Service
          </th>
          <th className="text-secondary" scope="col">
            details
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr>
            <td>{appointment.name}</td>
            <td>{appointment.phone}</td>
            <td>{appointment.email}</td>
            <td>{appointment.service}</td>
            <td>{appointment.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentShortList;
