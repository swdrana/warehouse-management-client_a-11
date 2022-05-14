import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { RiUserReceivedLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { MdPersonOutline, MdProductionQuantityLimits } from "react-icons/md";
import {
  FcAddImage,
  FcCurrencyExchange,
  FcMultipleDevices,
} from "react-icons/fc";
import { BsPencilSquare } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const AddItem = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [description, setDescription] = useState("");
  const [imgLink, setImgLink] = useState("");
  const handelAddItem = (e) => {
    e.preventDefault();
    const name = user?.displayName;
    const email = user.email;
    const productName = e.target[2].value;
    const quantity = Number.parseInt(e.target[3].value);
    const pricePerItem = Number.parseFloat(e.target[4].value);
    const supplierName = e.target[5].value;
    const description = e.target[6].value;
    const imgLink = e.target[7].value;

    const item = {
      name,
      email,
      productName,
      quantity,
      pricePerItem,
      supplierName,
      description,
      imgLink,
    };
    console.log(item);

    // send data to the server
    fetch("https://afternoon-savannah-49682.herokuapp.com/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Item Added!", { theme: "colored" });
      });
      
    e.target.reset();
  };
  return (
    <div>
      <h2 className="text-center">Add New Item</h2>
      <Form className="w-50 mx-auto my-5" onSubmit={handelAddItem}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicName">
          <RiUserReceivedLine size="35px" className="me-4" color="gray" />
          <Form.Control
            type="text"
            placeholder="Name"
            value={user?.displayName}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <HiOutlineMail size="35px" className="me-4" color="gray" />
          <Form.Control
            type="email"
            placeholder="Email"
            value={user.email}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="productName">
          <FcMultipleDevices size="35px" className="me-4" color="black" />
          <Form.Control type="text" placeholder="Product Name" required />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formBasicQuantity">
          <MdProductionQuantityLimits
            size="35px"
            className="me-4"
            color="red"
          />
          <Form.Control type="number" placeholder="Quantity" min="1" required />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="pricePerItem">
          <FcCurrencyExchange size="35px" className="me-4" color="black" />
          <Form.Control
            type="number"
            step="any"
            placeholder="Price of each item"
            min="0"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formBasicSupplier">
          <MdPersonOutline size="35px" className="me-4" color="green" />
          <Form.Control type="text" placeholder="Supplier Name" required />
        </Form.Group>
        <Form.Group className="mb-3 d-flex">
          <BsPencilSquare size="35px" className="me-4" color="grey" />
          <textarea
            name=""
            id="formBasicDescription"
            style={{ width: "100%", border: "1px solid #ced4da" }}
            rows="10"
            placeholder="Description"
            required
          ></textarea>
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="imgLink">
          <FcAddImage size="35px" className="me-4" color="black" />
          <Form.Control type="text" placeholder="Image Link" required />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddItem;
