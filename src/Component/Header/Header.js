import {Navbar, Nav} from "react-bootstrap";
import React from "react";
import { Link } from 'react-router-dom';
import header from '../../images/header.png';
import './Header.css';

const Header = () => {
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
                <Link to="/login">About Us</Link>
            </li>
            <li>
                <Link className="btn-book" to="/book">Gift Item</Link>
            </li>
        </ul>
    </nav>
      <div className="title-container">
          <h1>SURPRISE BD</h1>
          <h2>SPREAD A LITTLE HAPPINESS</h2>
      </div>
</div>
  );
};

export default Header;
