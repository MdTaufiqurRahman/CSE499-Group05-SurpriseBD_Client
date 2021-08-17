import React from "react";

const AdminPanel = () => {
  const handleAddProduct = () => {
    const product = {};
    fetch("https://pacific-wildwood-12473.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };

  return (
    <section className="container p-5">
      <div className="container shadow m-5 p-5">
        <h4>Product Add</h4>
        <button onClick={handleAddProduct} className="btn btn-primary">
          Add Product
        </button>
      </div>
    </section>
    //     <form action="">
    //     <p><span>Name: </span><input type="text"/></p>
    //     <p><span>price: </span><input type="text"/></p>
    //     <p><span>Quantity:</span><input type="text"/></p>
    //     <p><span>Product Image</span><input type="file"/></p>
    //     <button onClick={handleAddProduct}>Add Product</button>
    // </form>
  );
};

export default AdminPanel;
