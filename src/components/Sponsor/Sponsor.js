import "./Sponsor.css";
import React, { Component } from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images/sponsors", false, /\.(png|jpe?g|svg)$/)
);

class Sponsor extends Component {
  render() {
    return (
      <div id="Sponsors">
        {/* this is how they did the grid. Saving it for re-use later. */}
        <h3 className="placeholder">TBA!</h3>
        <div className="ui centered grid" id="blurWrap">
          {/*<div className="row">*/}
          {/*  <a href="https://www.ciena.ca/" target="_blank">*/}
          {/*    <img src={images["ciena.png"]} style={{ width: "150px" }} />*/}
          {/*  </a>*/}
          {/*  <a href="https://innovapost.com/" target="_blank">*/}
          {/*    <img src={images["innovapost.png"]} style={{ width: "275px" }} />*/}
          {/*  </a>*/}
          {/*  <a href="https://www.nokia.com/" target="_blank">*/}
          {/*    <img src={images["nokia.png"]} style={{ width: "175px" }} />*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}

export default Sponsor;
