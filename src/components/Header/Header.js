import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const Header = () => {
  
  let navigete = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const loginSignupBTN = ()=>{
    if(!user){
      navigete('login');
    }else{
      signOut(auth);
      navigete('/login')
    }
  }
  return (
    <div className="top-nav">
      <div className="container">
        <Navbar bg="" expand="lg">
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
                <Nav.Link to="/manage-items" as={Link}>Manage Items</Nav.Link>
                <Nav.Link to="/add-item" className={user ? "":"d-none"}  as={Link}>Add Item</Nav.Link>
                <Nav.Link to="/my-items" className={user ? "":"d-none"} as={Link}>My items</Nav.Link>
                <Nav.Link to="/about" as={Link}>About</Nav.Link>
                <Nav.Link to="/blogs" as={Link}>Blogs</Nav.Link>

                <Button variant="outline-secondary" onClick={()=>{navigete('signup')}} className={user ? "signup-btn border-0 rounded-3 ms-2 px-2 d-none ": "signup-btn border-0 rounded-3 ms-2    px-2 "}>Create Account</Button>

                <Button variant={user ? "danger" : "success"} onClick={loginSignupBTN}className="login-btn border-0 rounded-3 ms-2 px-4">{user? "Sign Out " : "Log in"}</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
