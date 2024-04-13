import React from "react";
import { Link } from "react-router-dom";
import "./Image-style.css";
import About from "../About/About";
import Services from "../Services/Services";
import Choose from "../Why-Choose-us/choose";
import Git from "../Get-In-Touch/GetInTouch";
const Image = () => {
  return (
    <>
      <div className="background-image">
        <div className="caption">
          <h3>Safe & Faster</h3>
          <h1>Logistics Services</h1>
          <p>
            We have had just one main purpose during these years, and that is to
            give the people transportation of the most dependable quality at the
            lowest possible cost.
          </p>
          <br />
          <input
            className="track-input"
            type="text"
            placeholder="Tracking Id"
          />
          <br />
          <Link to="/dashboard/TrackingPage" class="cta">
            Track
          </Link>
        </div>
      </div>
      <About />
      <Services />
      <Choose />
      <Git />
    </>
  );
};

export default Image;
