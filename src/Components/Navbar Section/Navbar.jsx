import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar_top">
          <h1>LOGO</h1>

          <div className="navbar-ul">
            <ul>
              <li>
                <a href="#Hero">Home</a>
              </li>
              <li>
                <a href="#Trending">Trending</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Emailus">Email us</a>
              </li>
            </ul>
            <div>
              <button className="orange_btn">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
