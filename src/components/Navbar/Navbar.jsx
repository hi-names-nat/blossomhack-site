import React from "react";
import "./Navbar.css";
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
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

export default function navbar() {
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
            <Image src={images["thumbnail.png"]} size="mini" circular />
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
          {/* <Link
            to="Sponsors"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Sponsors
          </Link> */}
          <nav>
          <ul>
            <li>
              <NavLink to={`/sponsor-page`}>Sponsors</NavLink>
            </li>
            
          </ul>
        </nav>
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
        <div className="NavLinks">
          <a href="https://blossom-hack.devpost.com/" target="_blank">
            Dev Post
          </a>
        </div>
      </div>
    </div>
  );
}
