import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(51, 62, 79)",
    width: "40%",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    date.created = new Date();
    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Appointment created successfully.");
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{ color: "white" }} className="text-center ">
          {appointmentOn}
        </h2>
        <p className="text-white text-center">On {date.toDateString()}</p>

        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Your Name"
              className="form-control"
            />
            {errors.name && <span>This field is required</span>}
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              {...register("phone", { required: true })}
              name="phone"
              placeholder="Phone Number"
              className="form-control"
            />
            {errors.phone && <span>This field is required</span>}
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              {...register("email", { required: true })}
              name="email"
              placeholder="Email"
              className="form-control"
            />
            {errors.email && <span>This field is required</span>}
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              {...register("address", { required: true })}
              name="address"
              placeholder="Address"
              className="form-control"
            />
            {errors.address && <span>This field is required</span>}
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              {...register("details", { required: true })}
              name="details"
              placeholder="Order Details"
              className="form-control"
            />
            {errors.details && <span>This field is required</span>}
          </div>

          <div className="form-group text- mt-3">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
