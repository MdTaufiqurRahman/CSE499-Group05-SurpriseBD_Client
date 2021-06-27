import React from "react";
import { Button } from "react-bootstrap";

const ReviewItem = (props) => {
  const { name, img, quantity, key, price } = props.product;
  const reviewItemStyle = {
    borderBottom: "1px solid lightgray",
    marginBottom: "10px",
    paddingBottom: "10px",
    marginLeft: "200px",
  };
  return (
    <div style={reviewItemStyle} className="review-item">
      <div>
        <img
          style={{ border: "5px", width: "200px", height: "200px" }}
          src={img}
          alt=""
        ></img>
      </div>

      <h4 className="product-name" style={{fontFamily:'sans-serif'}}>{name}</h4>
      <p style={{fontFamily:'sans-serif', fontStyle:'italic'}}>Quantity: {quantity}</p>
      <p>
        <h5>$ {price}</h5>
      </p>
      <br />
      <Button variant="primary" onClick={() => props.removeProduct(key)}>
        Remove
      </Button>
    </div>
  );
};

export default ReviewItem;
