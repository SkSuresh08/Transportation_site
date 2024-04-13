import "./About-style.css";
import img from "./about-image.jpeg";
import svg from "./svg-2.svg";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function About() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="counter-container">
          <div className="CounterUp">
            <div className="num">
              <h1>
                {counterOn && (
                  <CountUp
                    style={{ fontSize: "30px" }}
                    start={0}
                    end={253}
                    duration={2}
                    delay={0}
                  />
                )}
                +
              </h1>
            </div>
            <span className="num-lable">Skilled Experts</span>
          </div>

          <div className="CounterUp">
            <div className="num">
              <h1>
                {counterOn && (
                  <CountUp
                    style={{ fontSize: "30px" }}
                    start={0}
                    end={1500}
                    duration={2}
                    delay={0}
                  />
                )}
                +
              </h1>
            </div>
            <span className="num-lable">Happy Customers</span>
          </div>

          <div className="CounterUp">
            <div className="num">
              <h1>
                {counterOn && (
                  <CountUp
                    style={{ fontSize: "30px" }}
                    start={0}
                    end={5}
                    duration={2}
                    delay={0}
                  />
                )}
                &nbsp; Star
              </h1>
            </div>
            <span className="num-Lable">Rating</span>
          </div>
        </div>
      </ScrollTrigger>

      <div className="abt-container" id="about">
        <div id="img-container">
          <img src={img} alt="About-transport"></img>
          <h2>25+ Years Experience</h2>
        </div>

        <div id="abt-caption">
          <img src={svg} alt="svg"></img>
          <p>About Us</p>
          <span>Trusted And Faster Logistics Provider</span>
          <br></br>
          <text>
            Transportation and logistics services play a crucial role in the
            movement of goods and materials from one place to another. These
            services encompass various modes of transportation, including air,
            sea, rail, and road, to ensure efficient and timely delivery.
            Additionally, logistics services involve managing the entire supply
            chain, from procurement to distribution, to optimize operations and
            minimize costs. With the advancement of technology, transportation
            and logistics services have become more streamlined and integrated.
          </text>
        </div>
      </div>
    </>
  );
}
export default About;
