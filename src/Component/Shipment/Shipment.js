import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import "./Shipment.css";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";

const Shipment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = (data) => {
    const savedCart = getDatabaseCart();
    const orderDetails = {
      ...loggedInUser,
      products: savedCart,
      shipment: data,
      orderTime: new Date(),
    };

    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          processOrder();
          alert("your order placed successfully");
        }
      });
  };

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
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
          {errors.name && <span className="error">Name is required</span>}

          <input
            defaultValue={loggedInUser.email}
            {...register("email", { required: true })}
            placeholder="Your Email"
          />
          {errors.email && <span className="error">Email is required</span>}

          <input
            {...register("address", { required: true })}
            placeholder="Your Address"
          />
          {errors.address && <span className="error">Address is required</span>}

          <input
            {...register("phone", { required: true })}
            placeholder="Your Phone"
          />
          {errors.phone && (
            <span className="error">Phone number is required</span>
          )}

          <input
            {...register("description", { required: true })}
            placeholder="Describe when you need this product"
          />
          {errors.description && (
            <span className="error">This field is required</span>
          )}

          <input className="btn btn-primary" type="submit" />
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
