import React from "react";
import "./SponsorPageSponsor.css";
import { Link as NavLink} from "react-router-dom";


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../../images/sponsors", false, /\.(png|jpe?g|svg)$/)
);

export default function SponsorPageSponsor() {
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
