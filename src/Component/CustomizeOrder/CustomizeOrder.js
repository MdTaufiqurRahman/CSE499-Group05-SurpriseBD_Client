import React from "react";
import { useForm } from "react-hook-form";
import CustomClock from "../CustomClock/CustomClock";
import CustomizeCalender from "../CustomizeCalendar/CustomizeCalender";

const CustomizeOrder = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert("Order has been customized successfully.");
  };

  console.log(watch("example"));
  return (
    <div className="pb-5 bg-light" >
      <h1 className="text-center text-black font-weight-bold p-3">Customize Your Order</h1>

      <div className="row-1 d-flex justify-content-center">
        <div className="col-8">
          <CustomizeCalender></CustomizeCalender>
        </div>
        <div className="col-4">
          <CustomClock></CustomClock>
        </div>
      </div>
      
      <form
        className="container bg-dark pt-4 pb-3 border border-dark"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <h3 className="text-white">Provide your information</h3>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            placeholder="Your Name"
            className="form-control"
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            {...register("phone", { required: true })}
            name="phone"
            placeholder="Phone Number"
            className="form-control"
          />
          {errors.phone && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            {...register("email", { required: true })}
            name="email"
            placeholder="Email"
            className="form-control"
          />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            {...register("address", { required: true })}
            name="address"
            placeholder="Address To Deliver"
            className="form-control"
          />
          {errors.address && (
            <span className="text-danger">This field is required</span>
          )}
        </div>

        <div className="form-group row">
          <div className="col-4">
            <select
              className="form-control"
              name="giftType"
              {...register("giftType", { required: true })}
            >
              <option disabled={false} value="Not set">
                Select Gift Type
              </option>
              <option value="Birthday Gift">Birthday Gift</option>
              <option value="Anniversary Gift">Anniversary Gift</option>
              <option value="Gifts For Parents">Gifts for Parents</option>
              <option value="Gift For Him/Her">Gift For Him/Her</option>
              <option value="Gift For Babies">Gift For Babies</option>
              <option value="Not set">Other</option>
            </select>
            {errors.giftType && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="col-4">
            <input
              {...register("Quantity", { required: true })}
              className="form-control"
              name="Quantity"
              placeholder="Quantity"
              type="number"
            />
            {errors.Quantity && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="col-4">
            <select
              className="form-control"
              name="Venue"
              {...register("Venue", { required: false })}
            >
              <option disabled={false} value="Not set">
                Select Venue Type If Needed
              </option>
              <option value="Restaurant">Restaurant</option>
              <option value="Resort">Resort</option>
              <option value="Not set">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group text-right">
          <button type="submit" className="btn btn-warning">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomizeOrder;
