import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Update.css";
const Update = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8080/singleProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const {
    _id,
    name,
    email,
    imgLink,
    quantity,
    pricePerItem,
    supplierName,
    description,
  } = product;
  const handelUpdate = (e) => {
    e.preventDefault();
    const newEmail = e.target.newEmail.value;
    console.log(email);
    const updatedProduct = {
      _id,
      name,
      newEmail,
      imgLink,
      quantity,
      pricePerItem,
      supplierName,
      description,
    };
    // send updated product to database 
    fetch(`http://localhost:8080/update/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(updatedProduct)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        alert('Updated!');
        e.target.reset();
    })
  };
  return (
    <div className="w-50 mx-auto my-5">
      <Form onSubmit={handelUpdate}>
        <Form.Group className="mb-3" controlId="newEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Update;
