import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Button } from "react-bootstrap";

const Product = (props) => {
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      <div>
        <img style={{border:'5px', width:'200px', height:'200px'}} src={img} alt=""></img>
      </div>

      <div className="ml-5">
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>&{price}</p>
        <p>
          <small>Only {stock} left in stock - Order soon</small>
        </p>
        {props.showAddToCart && (
          <Button
            variant="danger"
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
