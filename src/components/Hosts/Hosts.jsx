import React from "react";
import ougda from "../../images/ougda_logo_updated-640x242.png";
import nsbe from "../../images/NSBELogo_Color_withName.png";
import ieee from "../../images/ieee_logo.png";
import acm from "../../images/acm_logo.png";
import swe from "../../images/swe_logo.png";
import "./Hosts.css";

function Hosts() {
  return (
    <div className="Container">
      <img src={swe} className="Img" />
      <img src={nsbe} className="Img" />
      <img src={ougda} className="Img" />
      <img src={ieee} className="Img" />
      <img src={acm} className="Img" />
    </div>
  );
}

export default Hosts;
