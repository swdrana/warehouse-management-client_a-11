import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import "./Update.css";
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
    const quantity = e.target.formBasicQuantity.value?e.target.formBasicQuantity.value:product.quantity;
    const pricePerItem = e.target.pricePerItem.value?e.target.pricePerItem.value:product.pricePerItem;
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

      const updatedProduct = {_id, name, email, imgLink, quantity, pricePerItem, supplierName, description, };
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
        <h2 className="text-center">Welcome To Update Page!</h2>
        <div className="row d-flex align-items-center">

        <Product key={product._id} product={product}></Product>
        {console.log(product)}
      <Form onSubmit={handelUpdate} className="col-md-8 mt-5 w-50">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="newEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productName">
          <Form.Control type="text" placeholder="Product Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Control type="number" placeholder="Quantity" min="1" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="pricePerItem">
          <Form.Control type="number" placeholder="Price of each item" min="0" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSupplier">
          <Form.Control type="text" placeholder="Supplier Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <textarea
            name=""
            id="formBasicDescription"
            style={{ width: "100%", border: "1px solid #ced4da" }}
            rows="4"
            placeholder="Description"
          ></textarea>
        </Form.Group>
        <Form.Group className="mb-3" controlId="imgLink">
          <Form.Control type="text" placeholder="Image Link" />
        </Form.Group>
        <div className="btn d-flex justify-content-between w-50 mx-auto">
          <Button variant="success" type="submit">
            Update
          </Button>
          <Button variant="danger" onClick={handelDelivered}>Delivered</Button>
        </div>
      </Form>
        </div>
    </div>
  );
};

export default Update;
