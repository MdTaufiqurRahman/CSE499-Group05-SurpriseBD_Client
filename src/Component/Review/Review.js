import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import { Button } from "react-bootstrap";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import { useHistory } from "react-router";

const Review = () => {
  const [cart, setCart] = useState([]);
  const history = useHistory();

  const handleProceedCheckout = () => {
    history.push("/shipment");
  };

  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    //cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    fetch("https://pacific-wildwood-12473.herokuapp.com/productsByKeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            key={pd.key}
            removeProduct={removeProduct}
            product={pd}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Button
            style={{ marginBottom: "30px" }}
            variant="primary"
            onClick={handleProceedCheckout}
          >
            Proceed Checkout
          </Button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
