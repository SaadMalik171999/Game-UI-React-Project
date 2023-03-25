import React from "react";
import "./Hero.css";
import Controller from "../../assets/Controller.png";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <>
      <section>
        <div id="Hero" className="hero_section">
          <Fade left>
            <div className="left_section">
              <h3>3D game Dev </h3>
              <h1>Work that we produce for our clients</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <button className="orange_rounded_btn">Get more details</button>
            </div>
          </Fade>

          <Fade right>
            <div className="right_section">
              <img src={Controller} />
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Hero;
