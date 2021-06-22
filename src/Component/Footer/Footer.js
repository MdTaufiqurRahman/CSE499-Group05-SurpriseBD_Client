import React from 'react';
import FooterCol from './FooterCol';

const Footer = () => {

    const services = [
        { name: "Emergency care", link: "/emergency" },
        { name: "Gift selection", link: "/gift-selection" },
        { name: "Venue selection", link: "/venue-selection" },
        { name: "Gift selection", link: "/gift-selection" },
        { name: "Venue selection", link: "/venue-selection" },
        
    ]
    const giftItem = [
        { name: "Birthday gift", link: "/birthday" },
        { name: "Anniversary gift", link: "/anniversary-gift" },
        { name: "Other gifts", link: "/Other-gifts" },
        { name: "Anniversary gift", link: "/anniversary-gift" },
        { name: "Other gifts", link: "/Other-gifts" },
       
    ]
    const ourAddress = [
        { name: "Dhaka - 1216 Mirpur", link: "/contact" },
        { name: "Bangladesh", link: "/contact" },
    ]
    return (
        <footer style={{backgroundColor:'#20232a'}} className="footer-area">
        <div className="container">
            <div style={{ color:'white'}} className="row">
                <FooterCol  key={1} menuTitle="Services" menuItems={services} />
                <FooterCol key={2} menuTitle="Gift Items" menuItems={giftItem} />
                <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}>
                    <div className="mt-5">
                        <h6>Call now</h6>
                        <button className="btn btn-danger">+8801521416033</button>
                    </div>
                </FooterCol>
            </div>
            <div className="copyright text-center mt-5" >
                <p style={{ color: 'white', paddingBottom:'20px'}}>Copyright @SURPRISE BD {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>

    </footer>
    );
};

export default Footer;