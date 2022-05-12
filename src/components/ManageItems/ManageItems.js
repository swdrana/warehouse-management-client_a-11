import "./ManageItems.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Modal, Table } from 'react-bootstrap'
import paginationFactory from "react-bootstrap-table2-paginator";
import LoadProducts from "../../hooks/LoadProducts";
import { Link } from "react-router-dom";
import { useState } from "react";
import {FcPlus} from 'react-icons/fc';
const ManageItems = () => {
  const [Products, setProducts] = LoadProducts();
  const columns = [
    { dataField: "productName", text: "Product Name" },
    { dataField: "quantity", text: "Available Quantity" },
    { dataField: "pricePerItem", text: "Price/Item" },
    { dataField: "supplierName", text: "Supplier Name" },
    { dataField: "description", text: "Description" },
    { dataField: "imgLink", text: "imgLink" },
    { dataField: "_id", text: "h" },
  ];
  let count = 0;

  // for modal 
  const [deleteId, setDeleteId] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setDeleteId(id);
  };


  // for delete from database 
  const handleYes= () =>{
    // console.log("the delete item id is: ",deleteId);
    fetch(`http://localhost:8080/deleteProduct/${deleteId}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log("Deleted Data: ",data);
      // for remove deleted item from client side 
      if(data.deletedCount>0){
        const remaining = Products.filter(product => product._id !== deleteId);
        setProducts(remaining);
      }
    })
    handleClose();
  }
  return (
    <div className="container position-relative">
      <h2 className="text-center my-4">Manage Items</h2>
      {/* <BootstrapTable keyField='_id' data={Products} columns={columns} pagination={paginationFactory()} hover="table-hover" /> */}

      <Link className="add-btn" to="/add-item"><FcPlus size="60px"/></Link>

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
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {Products.map((product)=>{
                const { _id, name, email, productName, quantity, pricePerItem, supplierName, description,imgLink } = product;
                count++;
                return <tr key={_id}>
                  <td>{count}</td>
                  <td>{productName}</td>
                  <td><img src={imgLink} alt={productName} className="w-75" /></td>
                  <td>{quantity}</td>
                  <td className="text-end">$ {pricePerItem?.toLocaleString('hi-IN', { maximumFractionDigits: 2 })}</td>
                  <td>{supplierName}</td>
                  <td>{description}</td>
                  <td className="text-center"><Link to={`/update/${_id}`}>Edit</Link></td>
                  <td><Button variant="danger" onClick={()=>handleShow(_id)}>Delete</Button></td>
                </tr>
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
  );
};

export default ManageItems;
