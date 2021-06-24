import React from 'react';
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <MDBFooter  className="font-small pt-4 mt-4 ml-5 footer-area">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="3">
              <h5 className="title text-primary">About Us</h5>
              <p>Lorem ipsum dolored sitte amet consectur addipsdddisicing elit. Numquam quisquam eligendi tenetur quibusdam reiciendis soluta maioorrees vero dolores enegry by the work Loremed ipsum dolor sitt amet consectetur adipisicing elit then the other part.</p>
              <i class="fab fa-facebook-square"></i>

            </MDBCol>
            <MDBCol md="3">
              <h5 className="title text-primary">Services</h5>
                <p>Emergency Special Care</p>
                <p>Gift Selection Item</p>
                <p>For Special Help </p>
                <p>Gift Selection Item</p>
                <p>Venue Selection Item</p>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title text-primary">Gift Item</h5>
                <p>Birthday Gift Item</p>
                <p>Anniversary Gift Item</p>
                <p>Birthday Gift Item</p>
                <p>Birthday Gift Item</p>
                <p>Birthday Gift Item</p>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title text-primary">Contact</h5>
              <p> Bashundhara R/A - 1219 <br />Dhaka, Bangladesh </p>
              <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/taufiqur.anik/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/taufiqur_anik/"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-3 text-primary">
                            <h5>Call now</h5>
                            <button className="btn btn-danger">+8801718003362</button>
                        </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} All Rights Reserved
          </MDBContainer>
        </div>
      </MDBFooter>
    );
};

export default Footer;