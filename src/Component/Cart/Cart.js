import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  //   console.log(cart);
  //   const total = cart.reduce((total, prd) => total + prd.price*prd.quantity, 0);
  const carts = cart.length;
  console.log(carts);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price * product.quantity || 1;
  }

  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const tax = (total / 10).toFixed(2);

  const grandTotal = (total + shipping + Number(tax)).toFixed(2);

  const formatNumber = (num) => {
    const precision = parseFloat(num).toFixed(2);
    return Number(precision);
  };
  return (
    <div className="cart">
      <h4>Order Summary: </h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: {formatNumber(total)}</p>
      <p>
        <small>Shipping Cost: {shipping} </small>
      </p>
      <p>
        <small>Tax + Vat: {formatNumber(tax)} </small>
      </p>
      <p>Total Price: {grandTotal}</p>
      {props.children}
    </div>
  );
};

export default Cart;
