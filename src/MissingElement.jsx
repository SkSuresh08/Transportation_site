import React from "react";
import NotFound from "./404-page-not-found.svg";
import "./MissingElement-style.css";

const MissingElement = () => {
  return (
    <div className="missing-container">
      <img src={NotFound} className="center-image" alt="Not Found" />
      <h1>Page Not Found</h1>
    </div>
  );
};

export default MissingElement;
