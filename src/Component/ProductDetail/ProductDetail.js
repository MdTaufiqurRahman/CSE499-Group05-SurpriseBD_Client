import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productKey } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/product/" + productKey)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productKey]);

  // const product = fakeData.find((pd) => pd.key === productKey);

  return (
    <div>
      <h1>{productKey} Detail: </h1>
      <Product showAddToCart={false} product={product}>
        {" "}
      </Product>
    </div>
  );
};

export default ProductDetail;
