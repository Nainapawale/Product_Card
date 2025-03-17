import React from "react";
import Image1 from "../assets/img1.jpg";
import "./Product.css";

function Product() {
  return (
    <div className="product-card">
      <img src={Image1} className="product-image" alt="Product" />
      <h2 className="product-title">Awesome Product</h2>
      <p>Rs 199/-</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
}

export default Product;
