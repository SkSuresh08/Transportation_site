import React, { useState } from "react";
import "./Carousel-style.css";
import profile from "./profile.png";
import hangout from "./google-hangouts.svg";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="left" onClick={goToPrev}>
        &lt;
      </button>
      <div className="carousel-content">
        <img className="hangout" src={hangout} alt="#" />
        <div className="profile">
          <img src={profile} alt="Profile" />
        </div>

        <h3>{items[currentIndex].name}</h3>
        <p>{items[currentIndex].description}</p>
      </div>
      <button className="right" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
