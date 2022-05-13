import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Product from "../Product/Product";

const MyItems = () => {
  let count = 0;
  // for modal
  const [deleteId, setDeleteId] = useState("");
  const [show, setShow] = useState(false);
  const [currentProductEmail, setCurrentProductEmail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id, email) => {
    setShow(true);
    setCurrentProductEmail(email);
    setDeleteId(id);
  };
  // for delete from database
  const handleYes = () => {
    // console.log("the delete item id is: ",deleteId);
    if (user.email === currentProductEmail) {
      fetch(
        `https://afternoon-savannah-49682.herokuapp.com/deleteProduct/${deleteId}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log("Deleted Data: ",data);
          // for remove deleted item from client side
          if (data.deletedCount > 0) {
            const remaining = myItems.filter(
              (product) => product._id !== deleteId
            );
            setMyItems(remaining);
          }
        });
      toast.success("Delete Success!", { theme: "colored" });
      handleClose();
    } else {
      toast.error("You did'nt add this item so, you can't delete!", {
        theme: "colored",
      });
      handleClose();
    }
  };

  const [user, loading, error] = useAuthState(auth);
  //   console.log(user.email);
  const email = user.email;
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    fetch(`https://afternoon-savannah-49682.herokuapp.com/my-items/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyItems(data);
      });
  }, []);
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="my-info text-center">
          <h5>{user?.displayName}</h5>
          <p>{user.email}</p>
        </div>
        {myItems?.length <= 0 ? (
          <div className="text-center">
            <h2 className="text-danger my-2">
              You have not added any products
            </h2>
            <p>Please Add a new product to see here</p>
            <h4 className="mb-5">
              Click <Link to="/add-item">Here</Link> to add a new item
            </h4>
          </div>
        ) : (
          <div className="">
            <h3 className="text-center text-success mb-5">{`You have added total: ${myItems.length} products`}</h3>
          </div>
        )}

        {/* {myItems.map((product) => {
          return <Product key={product._id} product={product}></Product>;
        })} */}

        <Table striped bordered hover className="mb-5">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price/Item</th>
              <th>Supplier</th>
              <th>Description</th>
              <th>Name</th>
              <th>Added By (E-mail)</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myItems.map((product) => {
              const {
                _id,
                name,
                email,
                productName,
                quantity,
                pricePerItem,
                supplierName,
                description,
                imgLink,
              } = product;
              count++;
              return (
                <tr key={_id}>
                  <td>{count}</td>
                  <td>{productName}</td>
                  <td>
                    <img src={imgLink} alt={productName} className="w-75" />
                  </td>
                  <td>{quantity}</td>
                  <td className="text-end">
                    ${" "}
                    {pricePerItem?.toLocaleString("hi-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td>{supplierName}</td>
                  <td>{description}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td className="text-center">
                    <Link to={`/update/${_id}`}>Edit</Link>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleShow(_id, email)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* Modal for conform delete  */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Remove This item</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure? </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={handleYes}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default MyItems;
