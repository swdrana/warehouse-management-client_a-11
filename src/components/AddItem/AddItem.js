import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddItem = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [description, setDescription] = useState("");
  const [imgLink, setImgLink] = useState("");
  const handelAddItem = (e) => {
    e.preventDefault();
    const name = (e.target.formBasicName.value);
    const email = (e.target[1].value);
    const productName = (e.target[2].value);
    const quantity = Number.parseInt(e.target[3].value);
    const pricePerItem = Number.parseInt(e.target[4].value);
    const supplierName = (e.target[5].value);
    const description = (e.target[6].value);
    const imgLink = (e.target[7].value);

    const item = { name, email, productName, quantity, pricePerItem, supplierName, description,imgLink };
    console.log(item);
    
    // send data to the server
    fetch("http://localhost:8080/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Item Added!")
      });

    e.target.reset();
  };
  return (
    <div>
        <h2 className="text-center">Add New Item</h2>
      <Form className="w-50 mx-auto my-5" onSubmit={handelAddItem}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
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
            rows="10"
            placeholder="Description"
          ></textarea>
        </Form.Group>
        <Form.Group className="mb-3" controlId="imgLink">
          <Form.Control type="text" placeholder="Image Link" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
