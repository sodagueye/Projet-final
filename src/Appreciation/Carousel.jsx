/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselComponent = () => {
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;

    return <button onClick={() => onClick()} className="right-arrow"><FaArrowRight /></button>;
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;

    return <button onClick={() => onClick()} className="left-arrow"><FaArrowLeft /></button>;
  };

  return (
    
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      Class="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      arrows
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="carousel-item">
            <div class="card">
              <div class="card-body">
                <div className="card-body-head d-flex justify-content-between">
                  <img
                    className="card-img-top"
                    src={`https://picsum.photos/200/300?image=${index + 1}`}
                    alt="image"
                  />{" "}
                  <h5 class="card-title">le nom de l'user {index + 1}</h5>
                  <div className="quote">
                    <FaQuoteRight />
                  </div>
                </div>
                <p class="card-text">
                  l'appreciation de l'user {index + 1} sur le service sera pris
                  en compte ici
                </p>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
};

export default CarouselComponent;
