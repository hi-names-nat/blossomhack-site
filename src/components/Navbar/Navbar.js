import React from "react";
import "./Navbar.css";
import ProfileLogo from "../../images/uOttaHack-Logo.svg";
import "boxicons";
import { Link } from "react-scroll";

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("Navbar").style.top = "0";
  } else {
    document.getElementsByClassName("Navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

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

const navbar = () => {
  return (
    <div className="NavbarContainer">
      <div className="Navbar">
        <div className="PageTitle">
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <img src={images["uottahackLogo.png"]} alt="Logo" />
          </Link>
        </div>
        <div className="PageLinks">
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            About
          </Link>
          <Link
            to="Events"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            FAQ
          </Link>
          <Link
            to="Sponsors"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Sponsors
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default navbar;
