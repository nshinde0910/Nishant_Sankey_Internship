import React from "react";
import "../../src/index.css"; //Frontend\FinalPayment\src\index.css
import "../../src/global.css";

const Navbar = () => (
  <nav className="profile-headerwhite">
    <div className="header">
      <div className="logo">
        <img
          className="last-minutes-flights"
          loading="eager"
          alt=""
          src="./src/assets/vector1.svg"
        />
        <b className="easyset-24">EasySet 24</b>
      </div>
      <div className="header1">
        <div className="country">
          <img
            className="button-icon"
            loading="eager"
            alt=""
            src="./src/assets/india_flag.jpg"
          />
        </div>
        <div className="icon-buttons">
          <div className="button">
            <img
              className="iconscharacterhelp"
              loading="eager"
              alt=""
              src="./src/assets/iconscharacterhelp1.svg"
            />
          </div>
        </div>
        <img
          className="profile-photo"
          loading="eager"
          alt=""
          src="./src/assets/nishant.jpg"
        />
        <div className="text">
          <div className="your-account">Your Account</div>
          <div className="profile-name">
            <div className="anna-carinna">Nishant Shinde</div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
