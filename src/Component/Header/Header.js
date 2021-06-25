import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto mt-auto">
          <Navbar.Brand href="/home">
            {" "}
            <b>Surprise BD</b>{" "}
          </Navbar.Brand>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/customized">Customized Order</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          {loggedInUser.name ? (
            <Nav.Link onClick={() => setLoggedInUser({})}>Sign Out</Nav.Link>
          ) : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
          <Nav.Link className="text-warning">
            {" "}
            <b>{loggedInUser.name} </b>{" "}
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button
            variant="outline-info"
            className="mr-sm-2 bg-danger text-white"
          >
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
