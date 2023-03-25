import React from "react";
import "./Project.css";
import projectImage1 from "../../assets/Projects-1.png";
import projectImage2 from "../../assets/Projects-2.png";
import projectImage3 from "../../assets/Projects-3.png";
import projectImage4 from "../../assets/Projects-4.png";
import projectImage5 from "../../assets/Projects-5.png";
import projectImage6 from "../../assets/Projects-6.png";
import Fade from "react-reveal/Fade";

const Project = () => {
  return (
    <>
      <section id="Projects">
        <div className="projects_section">
          <h1>Our Recent Projects</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <Fade bottom>
          <div className="projectImage_section">
            <div>
              <img src={projectImage1} />
            </div>
            <div>
              <img src={projectImage2} />
            </div>
            <div>
              <img src={projectImage3} />
            </div>
            <div>
              <img src={projectImage4} />
            </div>
            <div>
              <img src={projectImage5} />
            </div>
            <div>
              <img src={projectImage6} />
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Project;
