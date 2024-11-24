import React from "react";
import ougda from "../../images/hosts/ougda.png";
import nsbe from "../../images/hosts/nsbe.png";
import ieee from "../../images/hosts/ieee.png";
import acm from "../../images/hosts/acm.png";
import swe from "../../images/hosts/swe.png";
import "./Hosts.css";

function Hosts() {
  return (
    <div className="Container">
      <img src={swe} className="Img" /> */
      <img src={nsbe} className="Img" />
      <img src={ougda} className="Img" />
      <img src={acm} className="Img" />
      <img src={ieee} className="Img" />
    </div>
  );
}

export default Hosts;
