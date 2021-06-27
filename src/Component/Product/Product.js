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
        <h5 className="product-name">
          <Link className="link" to={"/product/" + key}>{name}</Link>
        </h5>
        <br />

        <p>
          By : {seller}
        </p>

        <p>
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
