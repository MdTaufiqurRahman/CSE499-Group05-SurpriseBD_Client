import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Button } from "react-bootstrap";

const Product = (props) => {
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product container">
      <div>
        <img
          style={{ border: "5px", width: "200px", height: "200px" }}
          src={img}
          alt=""
        ></img>
      </div>

      <div className="ml-5">
        <h5 className="product-name">
          <Link
            style={{ fontFamily: "sans-serif" }}
            className="link"
            to={"/product/" + key}
          >
            {name}
          </Link>
        </h5>
        <br />

        <p style={{ fontFamily: "sans-serif", fontStyle: "italic" }}>
          Seller Name : {seller}
        </p>

        <p style={{ fontFamily: "sans-serif", fontStyle: "italic" }}>
          Only {stock} left in stock - Order soon
        </p>

        <h5> $ {price}</h5>
        {props.showAddToCart && (
          <Button
            variant="primary"
            onClick={() => props.handleAddProduct(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default Product;
