import React from "react";
import "./Product.css";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { Button } from "react-bootstrap";
const Product = ({ product }) => {
  const { _id, name, text, prices } = product;
  return (
    <div className="col-md-4 col-sm-6 mx-auto product position-relative">
      <div className="img w-100 position-relative">
        <img src={product.img} className="img-fluid" alt="" />
        <div className="overlay-a overlay"></div>
        <div className="overlay-b overlay"></div>
      </div>
      <div className="product-info">
        <h4 className="text-start mt-3">{name}</h4>
        <p className="text-start product-description" title={text}>
          {text.length > 180 ? text.slice(0, 180) + "..." : text}
        </p>
        <div className="details-info w-100 row m-0 mb-4 text-center " >
          <div className="col-md-4 d-flex justify-content-center p-1">
              <MdOutlineProductionQuantityLimits size="40px" color="red"/>
              <p className="p-0"><strong className="text-danger">Quantity</strong>
                <p className="p-0 text-danger">
                  {prices}
                </p>
              </p>
          </div>
          <div className="col-md-4 d-flex d-flex justify-content-center p-1">
              <MdPersonOutline size="40px" color="green"/>
              <p className="text-success"><strong>Supplier</strong>
                <p>
                  {prices}
                </p>
              </p>
          </div>
          <div className="col-md-4 d-flex d-flex justify-content-center p-1">
              <MdUpdate size="35px" color="#0d6efd"/>
              <p className="ms-2">
                <Button>Update</Button>
              </p>
          </div>
        </div>
      </div>
      <h3 className="position-absolute">
        $ {prices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
      </h3>
    </div>
  );
};

export default Product;
