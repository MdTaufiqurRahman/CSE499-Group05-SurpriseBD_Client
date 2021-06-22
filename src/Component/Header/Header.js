import React, { useContext } from "react";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";
import './Header.css';
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    const [loggedIn, setLoggedIn, name, setName] = useContext(UserContext);

  return (

    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">Surprise BD</Navbar.Brand>
    <Nav className="mr-auto mt-3">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/customized">Customized Order</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link> {
                    loggedIn?  
                        <p className="text-light" >
                            <span className="text-warning"> | </span> Welcome, {name}   
                        </p>
                    : <>
                        <Link style={{textDecoration:"none", color:"white"}} to="/login">
                            <Button size="small" style={{background:"red", color:"orange"}}>
                                Login
                            </Button>
                        </Link>
                    </>
                } </Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info" className="mr-sm-2 bg-danger">Search</Button>
    </Form>
   </Navbar>
    </div>
    
   
     

  );
};

export default Header;
