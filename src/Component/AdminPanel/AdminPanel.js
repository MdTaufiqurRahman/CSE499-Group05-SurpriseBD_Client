import React from "react";
import fakeData from "../../fakeData";

const AdminPanel = () => {
  const handleAddProduct = () => {
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData[0]),
    });
  };
  return (
    <div>
      <button onClick={handleAddProduct} className="btn btn-primary">
        Add Product
      </button>
    </div>
  );
};

export default AdminPanel;
