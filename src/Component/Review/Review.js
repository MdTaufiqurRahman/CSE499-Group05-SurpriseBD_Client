import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import { Button } from "react-bootstrap";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlacedOrder = () => {
    processOrder();
    setCart([]);
    setOrderPlaced(true);
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

    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });

    setCart(cartProducts);
  }, []);

  let thankYou;
  if (orderPlaced) {
    thankYou = (
      <img
        style={{ margin: "20px", borderRadius: "10px" }}
        src="https://cdn.dribbble.com/users/1162379/screenshots/6822916/gift.gif?fbclid=IwAR04kspOJ_KFxKuPoA7qiYBaWIPRheCRgUgFN3Yy6DQmnKE9hx0JQaDCFxE"
        alt=""
      ></img>
    );
  }

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
        {thankYou}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Button style={{marginBottom:'30px'}} variant="danger"  onClick={handlePlacedOrder}>
            Place Order
          </Button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
