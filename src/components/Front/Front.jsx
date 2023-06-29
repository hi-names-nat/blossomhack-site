import React from "react";
import "./Front.css";
import TextLogo from "../../images/logo.png";

export default function front() {
  return (
    <div className="Front">
      <div className="Hero">
        <div className="LogoContainer">
          <img className="TextLogo" src={TextLogo} alt="" />
        </div>
        <div className="HeroText">
          <h1>The Biggest Hackathon at Ohio University</h1>
          <div className="logobutton">
            <a href="https://l5kysdlzy94.typeform.com/to/IOsDKBh4" target="_blank">
              <button role="button" className="btn"><h1 className="hbtn">Register→</h1></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
