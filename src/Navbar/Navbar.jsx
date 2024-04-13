import { Link } from "react-router-dom";
import "./Navbar-style.css";
import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-logo" to="/">
          SpeedUp
        </Link>
        <ul className="nav-menu">
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-links" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/GetInTouch">
              Get-In-Touch
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
