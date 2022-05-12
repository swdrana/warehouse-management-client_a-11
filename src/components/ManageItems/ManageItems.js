import "./ManageItems.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Table } from 'react-bootstrap'
import paginationFactory from "react-bootstrap-table2-paginator";
import LoadProducts from "../../hooks/LoadProducts";
import { Link } from "react-router-dom";
const ManageItems = () => {
  const [Products] = LoadProducts();
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
  return (
    <div className="container">
      <h2 className="text-center my-4">Manage Items</h2>
      {/* <BootstrapTable keyField='_id' data={Products} columns={columns} pagination={paginationFactory()} hover="table-hover" /> */}

      <Table striped bordered hover>
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
                  <td><Button variant="danger">Delete</Button></td>
                </tr>
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageItems;
