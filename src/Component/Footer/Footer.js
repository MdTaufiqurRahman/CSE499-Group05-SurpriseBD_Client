import React from 'react';
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <MDBFooter  className="font-small pt-4 mt-4 footer-area">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="5">
              <h5 className="title text-rgb(156, 169, 190)">About Us</h5>
              <p style={{textAlign:"justify"}} >People willing to give surprises for their special ones can contact us and we can arrange surprises and gifts for their special ones. We can arrange gifts and surprises at the exact time our customer want. It can be at 12 am sharp. Customers can share their thoughts or ideas for a surprise with us and we can help them arrange surprises. We will take responsibility for arranging the party on behalf of our customer(Pay and go service). People can use our web app to send gifts to their close ones from one city to another.</p>
              <i class="fab fa-facebook-square"></i>

            </MDBCol>
            <MDBCol md="2">
              <h5 className="title text-rgb(156, 169, 190)">Services</h5>
                <p>Emergency Special Care</p>
                <p>For Gift Selection Item</p>
                <p>24/7 Open Help center </p>
                <p>Save your Special Date</p>
                <p>Venue Selection Item</p>
            </MDBCol>
            <MDBCol md="2">
              <h5 className="title text-rgb(156, 169, 190)">Gift Item</h5>
                <p>Birthday Gift Item</p>
                <p>Anniversary Gift Item</p>
                <p>Thank You Gift Item</p>
                <p>Grandparents Gift Item</p>
                <p>Children Gift Item</p>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title text-rgb(156, 169, 190)">Contact</h5>
              <p> Bashundhara R/A - 1219 <br />Dhaka, Bangladesh </p>
              <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/taufiqur.anik/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/taufiqur_anik/"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-3 text-rgb(156, 169, 190)">
                            <h5>Call now</h5>
                            <button className="btn btn-warning">+8801718003362</button>
                        </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3 top">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} All Rights Reserved
          </MDBContainer>
        </div>
      </MDBFooter>
    );
};

export default Footer;