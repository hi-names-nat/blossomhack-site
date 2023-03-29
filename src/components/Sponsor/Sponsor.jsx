import React from "react";
import "./Sponsor.css";

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

export default function Sponsor() {
  return (

    <div className="Container" id="Sponsors">
      {Object.keys(images).map((item, idx) => {
        return (
          <img src={images[`${item}`]} className="Img" key={idx} />
        )
      })}
    </div>
  );
}
