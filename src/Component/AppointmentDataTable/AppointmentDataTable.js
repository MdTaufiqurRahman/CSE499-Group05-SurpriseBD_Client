import React from "react";

const AppointmentDataTable = ({ appointments }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            Sr No
          </th>
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
            Address
          </th>
          <th className="text-secondary" scope="col">
            Details
          </th>
          <th className="text-secondary" scope="col">
            Service
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{appointment.name}</td>
            <td>{appointment.phone}</td>
            <td>{appointment.email}</td>
            <td>{appointment.address}</td>
            <td>{appointment.details}</td>
            <td>{appointment.service}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentDataTable;
