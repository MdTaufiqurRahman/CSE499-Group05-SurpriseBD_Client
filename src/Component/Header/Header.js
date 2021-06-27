import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="header">
      <Navbar variant="dark">
        <Nav className="mr-auto mt-auto">
          <Navbar.Brand href="/home">
            {" "}
            <b style={{fontSize:'22px'}}>Surprise BD</b>{" "}
          </Navbar.Brand>
          <Nav.Link style={{color:'white'}} href="/home">Home</Nav.Link>
          <Nav.Link style={{color:'white'}} href="/customized">Customized Order</Nav.Link>
          <Nav.Link style={{color:'white'}} href="/about">About Us</Nav.Link>
          <Nav.Link style={{color:'white'}} href="/contact">Contact</Nav.Link>
          {loggedInUser.name ? (
            <Nav.Link style={{color:'white'}} onClick={() => setLoggedInUser({})}>Sign Out</Nav.Link>
          ) : (
            <Nav.Link style={{color:'white'}} href="/login">Login</Nav.Link>
          )}
          <Nav.Link className="text-warning">
            {" "}
            <b>{loggedInUser.name} </b>{" "}
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button

            className="mr-sm-2 bg-warning text-black"
          >
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
