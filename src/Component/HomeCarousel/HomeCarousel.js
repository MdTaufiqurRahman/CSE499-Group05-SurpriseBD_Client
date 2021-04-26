import React from "react";
import { Carousel } from "react-bootstrap";
import pic_1 from "../../images/pic_1.jpg";
import pic_2 from "../../images/pic_2.jpg";
import pic_3 from "../../images/pic_3.jpg";
import './HomeCarousel.css'

const HomeCarousel = () => {
  return (
    <div className="container mt-3" style={{display:'center',
    marginLeft: "auto",
    marginRight: "auto",
    width: "62%"}}>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={pic_2} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-light">Show Your Love</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic_1} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-light">Customized Gift</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic_3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-light">Spread Happiness</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
