import React from "react";
import "./Product.css";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const { _id, name, email, productName, imgLink, quantity, pricePerItem, supplierName, description } = product;
  
  // for navigate spacific id 
  const navigate = useNavigate();
  const goToProductDetails = (id) =>{
    navigate(`/update/${id}`);
  }
  return (
    <div className="col-md-4 col-sm-6 mx-auto product position-relative mb-5">
      <div className="img w-100 position-relative">
        <img src={imgLink} className="img-fluid" alt="" />
        <div className="overlay-a overlay"></div>
        <div className="overlay-b overlay"></div>
      </div>
      <div className="product-info">
        <h4 className="text-start mt-3">{productName}</h4>
        <p className="text-start product-description" title={description}>
          {description?.length > 180 ? description.slice(0, 180) + "..." : description}
        </p>
        <div className="details-info w-100 row m-0 mb-4 text-center " >
          <div className="col-md-4 d-flex justify-content-center p-1">
              <MdOutlineProductionQuantityLimits size="40px" color="red"/>
              <p className="p-0"><strong className="text-danger">Quantity</strong>
                <span className="p-0 text-danger d-block">
                  {quantity}
                </span>
              </p>
          </div>
          <div className="col-md-4 d-flex d-flex justify-content-center p-1">
              <MdPersonOutline size="40px" color="green"/>
              <p className="text-success"><strong>Supplier</strong>
                <span className="d-block">
                  {supplierName}
                </span>
              </p>
          </div>
          <div className="col-md-4 d-flex d-flex justify-content-center p-1">
              <MdUpdate size="35px" color="#0d6efd"/>
              <p className="ms-2">
                <Button onClick={()=>goToProductDetails(_id)}>Update</Button>
              </p>
          </div>
        </div>
      </div>
      <h3 className="position-absolute">
        {/* $ {pricePerItem?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "} */}
        $ {pricePerItem?.toLocaleString('hi-IN', { maximumFractionDigits: 2 })}{" "}
      </h3>
    </div>
  );
};

export default Product;
