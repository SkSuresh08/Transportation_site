import React from "react";
import Carousel from "./Carousel";

const TransportationCarousel = () => {
  const transportationItems = [
    {
      name: "Suresh Kumar",
      description:
        'You are really the Best!!! Thank you so much for helping me out to receive the parcel during unexpected and stressful days of becoming a father. Finally after countless rescheduling due to unplanned emergency hospitalization we are all home and successfully received a parcel with our baby monitor. Thank you very much for making this happen!!!"',
    },
    {
      name: "Favas",
      description:
        "The tracking option is very fancy and helpful in letting you plan around the delivery. It even gives you an estimated delivery time which was spot on. Driver also called a minute or so before delivery and was very pleasant during delivery. Overall a very nice delivery experience. Will definitely use this company again.",
    },
    {
      name: "Viswa",
      description:
        "The polite delivery man rang on the door bell and waited until we opened the door and then stayed outside the door and handed over the packet “face to face” to my husband. In this Corona dilemma we all are trapped in, it should be OK to only place the packet just outside the doorstep and then send a message that the deliver is done for the safety of both.",
    },
    {
      name: "Kaviprasanth",
      description:
        "Without hassle.. Smart and fast delivery.. Can’t be better than this.. I love it.. Plus You can get your order the next day.",
    },
  ];

  return (
    <div
      style={{ textAlign: "center", marginTop: "100px", marginBottom: "100px" }}
    >
      <h2>Our Clients Says</h2>
      <Carousel items={transportationItems} />
    </div>
  );
};

export default TransportationCarousel;
