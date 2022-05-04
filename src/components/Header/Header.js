import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
const Header = () => {
  return (
    <div>
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand to="/" as={Link}>
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
              </Nav>
              <Nav className="d-flex">
                <Nav.Link to="/about" as={Link}>About</Nav.Link>
                <Nav.Link to="/blogs" as={Link}>Blogs</Nav.Link>
                <Nav.Link to="/manage-items" as={Link}>Manage Items</Nav.Link>
                <Nav.Link to="/add-item" as={Link}>Add Item</Nav.Link>
                <Nav.Link to="/my-items" as={Link}>My items</Nav.Link>
                <Nav.Link to={`${false ? "log-out":"log-in"} `} as={Link}>Login</Nav.Link>
                {/* <Button>{`${true ? "Log-out":"Log-in"} `}</Button> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
