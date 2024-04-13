import React, { useState } from "react";
import "./TrackingPage-style.css";
import "font-awesome/css/font-awesome.min.css";

function TrackingPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Your Frieght",
      status: "In-Transit",
      location: "Erode",
      deliveryDate: "April 15, 2024",
    },
  ]);

  return (
    <div className="main-tracking-container">
      <div className="tracking-container">
        <h1 className="tracking-title">Shipment Details</h1>
        <div className="tracking-list">
          {items.map((item) => (
            <div key={item.id} className="tracking-item">
              <div className="item-header">
                <span className="item-name">{item.name}</span>
                <span
                  className={`item-status ${item.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {item.status}
                </span>
              </div>
              <div className="item-details">
                <span className="item-location">
                  <i className="fa fa-map-marker"></i> {item.location}
                </span>
                <span className="item-delivery-date">
                  <i className="fa fa-calendar"></i> Expected Delivery:{" "}
                  {item.deliveryDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrackingPage;
