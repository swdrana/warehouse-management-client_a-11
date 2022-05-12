import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import "./Update.css";
import {RiUserReceivedLine} from 'react-icons/ri'
import {HiOutlineMail} from 'react-icons/hi'
import {MdPersonOutline, MdProductionQuantityLimits} from 'react-icons/md'
import {FcAddImage, FcCurrencyExchange, FcMultipleDevices} from 'react-icons/fc'
import {BsPencilSquare} from 'react-icons/bs'


const Update = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8080/singleProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);



  
  let { _id, name, email, productName, quantity, pricePerItem, supplierName, description, imgLink} = product;
  const handelUpdate = (e) => {
    e.preventDefault();
    const name = e.target[0].value?e.target[0].value:product.name;
    const email = e.target.newEmail.value?e.target.newEmail.value:product.email;
    const productName = e.target.productName.value?e.target.productName.value:product.productName;
    const quantity = Number.parseInt(e.target.formBasicQuantity.value?e.target.formBasicQuantity.value:product.quantity);
    const pricePerItem = Number.parseFloat(e.target.pricePerItem.value?e.target.pricePerItem.value:product.pricePerItem);
    const supplierName = e.target.formBasicSupplier.value?e.target.formBasicSupplier.value:product.supplierName;
    const description = e.target.formBasicDescription.value?e.target.formBasicDescription.value:product.description;
    const imgLink = e.target.imgLink.value?e.target.imgLink.value:product.imgLink;


    const updatedProduct = {_id, name, email, productName, quantity, pricePerItem, supplierName, description, imgLink};

    // send updated product to database
    fetch(`http://localhost:8080/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Updated!");
        e.target.reset();
      });
  };
  const handelDelivered = () =>{
      let quantityInNumber = Number.parseInt(quantity);
      quantityInNumber--;
      quantity = quantityInNumber;
      console.log(quantityInNumber);

      const updatedProduct = {_id, name, email, productName, quantity, pricePerItem, supplierName, description, imgLink};
      // send updated product to database
      fetch(`http://localhost:8080/update/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Updated!");
        });
  }
  return (
    <div className="mx-auto my-5 container">
        <h2 className="text-center my-5">📝 Welcome To Update Page! 📝</h2>
        <div className="row d-flex align-items-center">

        <Product key={product._id} product={product}></Product>
      <Form onSubmit={handelUpdate} className="col-md-8 mt-5 px-5 mx-auto">
        <Form.Group className="mb-2 d-flex" controlId="formBasicName">
            <RiUserReceivedLine size="35px" className="me-4" color="gray"/>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-2 d-flex" controlId="newEmail">
            <HiOutlineMail size="35px" className="me-4" color="gray"/>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-2 d-flex" controlId="productName">
            <FcMultipleDevices size="35px" className="me-4" color="black"/>
          <Form.Control type="text" placeholder="Product Name" />
        </Form.Group>
        <Form.Group className="mb-2 d-flex" controlId="formBasicQuantity">
            <MdProductionQuantityLimits size="35px" className="me-4" color="red"/>
          <Form.Control type="number" placeholder="Quantity" min="1" />
        </Form.Group>
        <Form.Group className="mb-2 d-flex" controlId="pricePerItem">
            <FcCurrencyExchange size="35px" className="me-4" color="black"/>
          <Form.Control type="number" step="any" placeholder="Price of each item" min="0" />
        </Form.Group>
        <Form.Group className="mb-2 d-flex" controlId="formBasicSupplier">
            <MdPersonOutline size="35px" className="me-4" color="green"/>
          <Form.Control type="text" placeholder="Supplier Name" />
        </Form.Group>
        <Form.Group className="mb-2 d-flex">
            <BsPencilSquare size="35px" className="me-4" color="grey"/>
          <textarea
            name=""
            id="formBasicDescription"
            style={{ width: "100%", border: "1px solid #ced4da" }}
            rows="4"
            placeholder=" Description"
            className="ps-2"
          ></textarea>
        </Form.Group>
        <Form.Group className="mb-2 d-flex" controlId="imgLink">
            <FcAddImage size="35px" className="me-4" color="black"/>
          <Form.Control type="text" placeholder="Image Link" />
        </Form.Group>
        <div className="btn d-flex justify-content-between w-50 mx-auto">
          <Button variant="success" type="submit">
            Update Changes
          </Button>
          <Button variant="danger" onClick={handelDelivered}>Delivered</Button>
        </div>
      </Form>
        </div>
    </div>
  );
};

export default Update;
