import React from "react";
import { Carousel } from "react-bootstrap";
import pic_1 from "../../images/pic_1.jpg";
import pic_2 from "../../images/pic_2.jpg";
import pic_3 from "../../images/pic_3.jpg";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={
              "https://www.giftcart.com/pub/media/allbanners/friendship-2.jpg"
            }
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={"https://www.giftcart.com/pub/media/allbanners/Birthday-1.jpg"}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={
              "https://www.giftcart.com/pub/media/allbanners/Hatke_Gifts.jpg"
            }
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={
              "https://www.giftcart.com/pub/media/allbanners/Garden-Gifts-HP-Banner-2.jpg"
            }
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
