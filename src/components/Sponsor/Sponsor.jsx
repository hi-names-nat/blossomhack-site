import React from "react";
import "./Sponsor.css";
import { Link as NavLink} from "react-router-dom";


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
    
    // <div className="Container" id="Sponsor">
    //   <div className="logobutton">
        
    //     <NavLink className="btn" 
    //       to={`/sponsor-page`}
    //     >
    //       <button role = "button">
    //       <h1 className="hbtn">
    //         Meet the Sponsors
    //       </h1>
    //       </button>
    //     </NavLink>
        
    //   </div>
    // </div>
    
    <div className="Container" id="Sponsor">
      {Object.keys(images).map((item, idx) => {
        return (
          <div className="logobutton">
            <div style={{display: 'flex', lineHeight: '12px'}}>
              <img src={images[`${item}`]} className="Img" key={idx} />
            </div>
            
            <NavLink className="btn" to={`/sponsor-page`} >
              <button role = "button">
                <h1 className="hbtn">
                  Meet the Sponsors
                </h1>
              </button>
            </NavLink>
          
        </div>
        )
      })}
    </div>
  );
}
