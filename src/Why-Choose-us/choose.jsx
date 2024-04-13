import React from "react";
import image from "./cargo.jpg";
import "./choose-style.css";
import svg from "./circle-dot-solid.svg";

function Choose() {
  return (
    <div className="container" id="Transport">
      <div id="image-container">
        <img src={image} alt="Cargo Image" />
      </div>

      <div className="abt-caption">
        <p>Why Choose Us</p>
        <span>Faster, Safe and Trusted Logistics Services</span>
        <br></br>
        <text>
          Startup Company is a team of dedicated individuals who are passionate
          about creating innovative solutions.
        </text>
        <div className="list">
          <li>
            <img src={svg} alt="dot" />
            &nbsp; Best In Industry
          </li>
          <li>
            <img src={svg} alt="dot" />
            &nbsp; Emergency Services
          </li>
          <li>
            <img src={svg} alt="dot" />
            &nbsp; 24/7 Customer Support
          </li>
        </div>
      </div>
    </div>
  );
}
export default Choose;
