import {Navbar, Nav} from "react-bootstrap";
import React from "react";

const Header = () => {
  return (

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Surprise BD</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#customize">Customize Order</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
  );
};

export default Header;
