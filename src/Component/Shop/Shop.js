import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKey = Object.keys(savedCart);
    const previousCart = productKey.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = savedCart[existingKey];
      return product;
    });

    setCart(previousCart);
  }, []);

  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      const count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="twin-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            key={pd.key}
            product={pd}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <Button variant="danger"> Review Order</Button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
