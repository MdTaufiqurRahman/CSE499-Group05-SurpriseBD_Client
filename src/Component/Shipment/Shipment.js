import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import "./Shipment.css";

const Shipment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="shipment container">
      <div className="form-container pt-5">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="text-center text-primary font-weight-bold text-uppercase">
            Please fill the shipment form
          </h4>
          <input
            defaultValue={loggedInUser.name}
            {...register("nameRequired", { required: true })}
            placeholder="Your Name"
          />
          {errors.nameRequired && (
            <span className="error">Name is required</span>
          )}

          <input
            defaultValue={loggedInUser.email}
            {...register("emailRequired", { required: true })}
            placeholder="Your Email"
          />
          {errors.nameRequired && (
            <span className="error">Email is required</span>
          )}

          <input
            {...register("addressRequired", { required: true })}
            placeholder="Your Address"
          />
          {errors.nameRequired && (
            <span className="error">Address is required</span>
          )}

          <input
            {...register("phoneRequired", { required: true })}
            placeholder="Your Phone"
          />
          {errors.nameRequired && (
            <span className="error">Phone number is required</span>
          )}

          <input
            {...register("descriptionRequired", { required: true })}
            placeholder="Describe when you need this product"
          />
          {errors.nameRequired && (
            <span className="error">This field is required</span>
          )}

          <input type="submit" />
        </form>
      </div>
      <div className="ship-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/11/06/12/53/roller-1027351_960_720.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Shipment;
