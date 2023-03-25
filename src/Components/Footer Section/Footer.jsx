import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_section">
          <div className="footer_logo_section">
            <h1>LOGO</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <h4>@Logo</h4>
          </div>

          <div className="about_div">
            <h3>About us</h3>
            <ul>
              <li>Zeux</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="contact_div">
            <h3>Contact us</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <h4>+908 89097 890</h4>
          </div>
        </div>

        <div className="border_bottom"></div>
        <div className="copyright_text">
          <p>Copyright ® 2021 Lorem All rights Rcerved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
