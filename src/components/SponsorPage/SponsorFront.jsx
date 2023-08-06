import React from "react";
import "./SponsorFront.css";
import TextLogo from "../../images/logo.png";

export default function sponsorFront() {
  return (
    <div className="Front">
      <div className="Hero">
        <div className="LogoContainer">
          <img className="TextLogo" src={TextLogo} alt="" />
        </div>
        <div className="HeroText">
          <h2><div className="date">Sponsors</div></h2>
        </div>
      </div>
    </div>
  );
}
