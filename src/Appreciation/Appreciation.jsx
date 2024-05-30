import React from "react";
import "./Appreciation.css";
import CarouselComponent from "./Carousel";

const Appreciation = () => {
    
  return (
    <section id="appreciation">
      <div className="container">
        <div className="row">
          <h1>What people say about us</h1>
          <CarouselComponent />
        </div>
      </div>
    </section>
  );
};

export default Appreciation;
