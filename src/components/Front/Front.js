import React from "react";
import "./Front.css";
import TextLogo from "../../images/uottahack19.png";

const front = () => {
  return (
    <div className="Front">
      <div className="Hero">
        <div class="LogoContainer">
          <img className="TextLogo" src={TextLogo} alt="" />
        </div>
        <div class="HeroText">
          <h1>The Biggest Hackathon at Ohio University</h1>
          <div className="logobutton">
            <a href="#" target="_blank">
              <button className="btn">Registration not available yet →</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default front;
