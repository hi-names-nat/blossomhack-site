import "./Partners.css";
import React from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

export default function Partners() {
  return (
    <div id="Sponsors">
      {/*Leaving this here to refer back to when we're adding in */}
      {/*<div className="ui centered grid" id="blurWrap">*/}
      {/*  <div className="row">*/}
      {/*    <a href="https://mlh.io/" target="_blank">*/}
      {/*      <img src={images["mlh.png"]} style={{ width: "150px" }} />*/}
      {/*    </a>*/}
      {/*    <a href="https://www2.uottawa.ca" target="_blank">*/}
      {/*      <img src={images["uottawa.png"]} style={{ width: "275px" }} />*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      href="https://www2.uottawa.ca/faculty-engineering/"*/}
      {/*      target="_blank"*/}
      {/*    >*/}
      {/*      <img src={images["uottawaEng.png"]} style={{ width: "275px" }} />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <h3 className="placeholder">TBA!</h3>
    </div>
  );
}
