import React from 'react';
import { Container } from 'react-bootstrap';
import Map from '../Map/Map';

const Contact = () => {
    return (
        <div style={{margin:'50px',border:'2px solid gray'}}>
            <form style={{textAlign: 'center', marginTop:'20px',padding:'10px', fontFamily:'sans-serif'}} action="">
            <h1>Contact Us</h1>
             <input style={{
                 padding:'10px',
                 width:'30%',
                 marginTop:'10px',
                 borderRadius: '5px',
                 border: '1px solid gray',
             }} type="text" placeholder="Enter Your Name" required/>
             <br/>
             <input style={{
                 padding:'10px',
                 width:'30%',
                 marginTop:'10px',
                 borderRadius: '5px',
                 border: '1px solid gray',
             }} type="text" placeholder="Enter Your Email" required/>
             <br/>
             <input style={{
                 padding:'10px',
                 width:'30%',
                 marginTop:'10px',
                 borderRadius: '5px',
                 border: '1px solid gray',
             }} type="text" placeholder="Your Message" required/>
             <br/>
             <input style={{
                 padding:'10px',
                 width:'30%',
                 marginTop:'10px',
                 borderRadius: '5px',
                 border: '1px solid gray',
             }} type="text" placeholder="Your Phone No" required/>
             <br/>
             <input className="btn btn-primary mt-3" style={{
                 width:'30%',
                 
             }} type="submit" value="Submit"/>
            </form>

           <Container>
           <div style={{border: '2px solid gray',textAlign:'center', marginTop:'20px',marginBottom:'20px'}} >
            <h1 style={{margin:'20px'}} >Our Office: </h1>
            <Map></Map>
            </div>
           </Container>
        </div>
    );
};

export default Contact;