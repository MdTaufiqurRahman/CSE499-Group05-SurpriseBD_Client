import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import "./Shipment.css";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";
import { useHistory } from "react-router";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const Shipment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState(null);

  const onSubmit = (data) => {
    setShippingData(data);
  };
  const handlePaymentSuccess = (paymentId) => {
    const savedCart = getDatabaseCart();
    const orderDetails = {
      ...loggedInUser,
      products: savedCart,
      shipment: shippingData,
      paymentId,
      orderTime: new Date(),
    };

    fetch("https://pacific-wildwood-12473.herokuapp.com/addOrder", {
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
          alert("Your order placed successfully");
          history.push("/home");
        }
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="row shipment container">
      <div className="col-6 form-container pb-5 container">
        <form className="ship-form container" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="ps-5 text-primary font-weight-bold text-uppercase">
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

          <input
            className="btn btn-primary"
            type="submit"
            style={{ display: shippingData ? "none" : "block" }}
          />
        </form>
      </div>
      <div
        className="ship-img col-4"
        style={{ display: shippingData ? "none" : "block" }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2015/11/06/12/53/roller-1027351_960_720.jpg"
          alt=""
        />
      </div>
      <div
        style={{ display: shippingData ? "block" : "none" }}
        className="col-4 pb-5 mb-5"
      >
        <div className="payment-div mb-5 py-5">
          <h5 className="text-primary text-uppercase pb-2">Please Pay: </h5>
          <ProcessPayment
            handlePaymentSuccess={handlePaymentSuccess}
          ></ProcessPayment>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
