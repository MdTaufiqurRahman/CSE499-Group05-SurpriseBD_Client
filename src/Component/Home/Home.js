import React from "react";
import Categories from "../Categories/Categories";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-design">
      <div>
        <HomeCarousel></HomeCarousel>
      </div>
      <div>
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Home;
