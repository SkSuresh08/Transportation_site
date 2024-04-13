import React from "react";
import "./Footer-style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <i className="fa fa-map-marker"></i>
              <li>1st Main Street,Pallipalayam,Erode.</li>
              <i className="fa fa-phone"></i>
              <li>+91 9123578478</li>
              <i className="fa fa-envelope"></i>
              <li>suresh264656@gmail.com</li>
            </ul>
          </div>

          <div class="footer-col" id="properties">
            <h4>Properties</h4>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/services">
                <li>Services</li>
              </Link>
              <Link to="/getintouch">
                <li>Get-In-Touch</li>
              </Link>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Road Transport</li>
              <li>Air Transport</li>
              <li>Ship Transport</li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Newsletter</h4>
            <form action="">
              <input type="text" placeholder="Your Name" class="inputName" />
              <input
                type="email"
                placeholder="Enter Company Email"
                class="inputEmail"
              />
              <input type="submit" value="Submit" class="inputSubmit" />
            </form>
          </div>
        </div>
      </div>

      <hr />
      <div class="last-footer">
        <div class="col">
          <p>&#169; Co-apps 2024 . All Rights Reserved.</p>
        </div>
        <div class="socialIcons">
          <a href="mailto:suresh264656@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
