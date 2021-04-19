import React, { useContext } from "react";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";
import header from '../../images/header.png';
import './Header.css';

const Header = () => {
    const [loggedIn, setLoggedIn, name, setName] = useContext(UserContext);

  return (
    <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
    <nav className="nav">
        <ul>
        
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link className="btn-book" to="/gift">Gift Item</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            
        </ul>
        {
                    loggedIn?  
                        <h6 style={{color:"white", marginLeft:"450px"}} >
                            <span style={{color:"orange"}}>| </span>
                            Welcome, {name}
                        </h6>
                    : <>
                        <Link style={{textDecoration:"none", color:"white"}} to="/login">
                            <Button size="small" style={{background:"red", color:"orange"}}>
                                Login
                            </Button>
                        </Link>
                    </>
                } 
    </nav>
      <div className="title-container" style={{ marginTop:'120px'}}>
          <h1 style={{fontSize:'70px'}}>SURPRISE BD</h1>
          <h2>SPREAD A LITTLE HAPPINESS</h2>
      </div>
</div>
  );
};

export default Header;
