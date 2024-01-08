import React from "react";
import "./SponsorPageNavbar.css";
import { Link } from "react-scroll";
import { Image } from "semantic-ui-react";
import { Link as NavLink} from "react-router-dom";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../../images", false, /\.(png|jpe?g|svg)$/)
);

export default function SponsorPageNavbar() {
  return (
    <div className="NavbarContainer">
      <div className="Navbar">
        <div className="PageTitle">
          <NavLink
            to={`/`}
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Image src={images["thumbnail.png"]} size="mini" circular />
          </NavLink>
        </div>
        
        <div className="PageLinks">
          <NavLink
            to={`/`}
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Home
          </NavLink>

          <Link
            to="SponsorPageAbout"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Who Are We?
          </Link>

          <Link
            to="SponsorPageFAQ"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            FAQ
          </Link>

          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            
            >
              Contact Us
            </Link>
        </div>
        <div className="NavLinks">
          <a href="https://blossom-hack.devpost.com/" target="_blank">
            Dev Post
          </a>
        </div>
      </div>
    </div>
  );
}
