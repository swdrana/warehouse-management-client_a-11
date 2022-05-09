import React from "react";
import "./Product.css";
import "./Product.css";
const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="col-md-4 col-sm-6 mx-auto product position-relative">
      <div className="img w-100 position-relative">
        <img src={product.img} className="img-fluid" alt="" />
        <div className="overlay-a overlay"></div>
        <div className="overlay-b overlay"></div>
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
      </div>
      <h3 className="position-absolute">$34.55</h3>
    </div>
  );
};

export default Product;
