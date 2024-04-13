import "./Services-style.css";
import React from "react";
import road from "./truck-fast-solid.svg";
import plane from "./plane-departure-solid.svg";
import ship from "./ship-solid.svg";
import TransportationCarousel from "../Carousel/TransportationCarousel";

function Service(props) {
  const defaultData = {
    name: "Road Freight",
    logo: road,
    details:
      "Road transport is the physical process of transporting cargo or people by road using motor vehicles or other means such as bicycle,motorcycle, etc. In this case, road is a lane/route between the point of departure and the point of destination.",
  };

  const { transport = defaultData } = props;

  return (
    <>
      <div className="services">
        <div className="service">
          <img src={transport.logo} alt="icon" />
          <h3>{transport.name}</h3>
          <p>{transport.details}</p>
        </div>
      </div>
    </>
  );
}

function Services() {
  const transport_2 = {
    name: "Air Freight",
    logo: plane,
    details:
      "Air transport is that which transports by air, by means of airplanes. Allows the movement of people, goods and mail. Aircraft are the fastest means of transportation and therefore the most suitable for shipping products within the supply chain that require fast and agile delivery",
  };

  const transport_3 = {
    name: "Ship Freight",
    logo: ship,
    details:
      "Maritime transport refers to a means of transport where goods are transported via sea routes. In some cases, maritime transport can encompass pre- and post-shipping activities.It's a major part of global trade, moving over 10 billion tons of cargo annually.",
  };
  return (
    <>
      <div class="srv-container" id="services">
        <div className="text-1">
          <span>Services</span>
        </div>
        <div className="text-2">
          <h1>Best Logistics Services</h1>
        </div>

        <div className="services">
          <Service />
          <Service transport={transport_2} />
          <Service transport={transport_3} />
        </div>
      </div>
      <TransportationCarousel />
    </>
  );
}

export default Services;
