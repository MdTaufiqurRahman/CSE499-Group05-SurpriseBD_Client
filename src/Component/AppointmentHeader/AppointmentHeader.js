import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import resort from "../../../src/images/resort.jpg";
import "./AppointmentHeader.css";
import { Carousel } from "react-bootstrap";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main className="body d-flex align-items-center p-5">
      <div className="col-6 d-flex flex-column align-items-center">
        <div>
          <h3 className="font-weight-bold">
            Resort Booking & <span>Customize Order</span>
          </h3>
        </div>
        <div className="d-flex align-items-center shadow-sm p-4 mt-2 bg-white rounded">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
      </div>
      <div className="col-6 mt-3 mr-5 pr-3">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              style={{ height: "400px", width: "700px" }}
              src="https://c4.wallpaperflare.com/wallpaper/773/386/327/maldive-islands-resort-wallpaper-preview.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              style={{ height: "400px", width: "700px" }}
              src="https://c4.wallpaperflare.com/wallpaper/107/645/240/luxury-water-bungalows-maldives-wallpaper-preview.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              style={{ height: "400px", width: "700px" }}
              src="https://c4.wallpaperflare.com/wallpaper/639/747/795/balloons-birthday-colorful-cake-wallpaper-preview.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              style={{ height: "400px", width: "700px" }}
              src="https://c4.wallpaperflare.com/wallpaper/960/826/550/love-toy-heart-bear-wallpaper-preview.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
};

export default AppointmentHeader;
