import React from "react";
import "./Trending.css";
import Carousel from "react-elastic-carousel";
import firstImage from "../../assets/trending-1.png";
import secondImage from "../../assets/trending-2.png";
import thirdImage from "../../assets/trending-3.png";
import lastImage from "../../assets/trending-4.png";
import banner from "../../assets/Rectangle 4.png";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Trending = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <section id="Trending">
      <Fade left>
        <div className="trending_section">
          <h1>Currently Trending Games</h1>
          <div>
            <Carousel breakPoints={breakPoints}>
              <div className="carousel_pic">
                <img src={firstImage} />
                <h2> 🔥 40 Followers</h2>
              </div>

              <div className="carousel_pic">
                <img src={secondImage} />
                <h2> 🔥 40 Followers</h2>
              </div>

              <div className="carousel_pic">
                <img src={thirdImage} />
                <h2> 🔥 40 Followers</h2>
              </div>

              <div className="carousel_pic">
                <img src={lastImage} />
                <h2> 🔥 40 Followers</h2>
              </div>

              <div className="carousel_pic">
                <img src={firstImage} />
                <h2> 🔥 40 Followers</h2>
              </div>

              <div className="carousel_pic">
                <img src={secondImage} />
                <h2> 🔥 40 Followers</h2>
              </div>

              <div className="carousel_pic">
                <img src={thirdImage} />
                <h2> 🔥 40 Followers</h2>
              </div>

              <div className="carousel_pic">
                <img src={lastImage} />
                <h2> 🔥 40 Followers</h2>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="trending_section_two">
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>

          <div className="banner_section">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <img src={banner} />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Trending;
