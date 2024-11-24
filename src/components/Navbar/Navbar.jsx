import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Image } from "semantic-ui-react";

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown menu

  // Toggles the dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="NavbarContainer">
      <div className="Navbar">
        <div className="PageTitle">
          <Link to="About" spy={true} smooth={true} offset={-150} duration={500}>
            <Image src={images["thumbnail.png"]} size="mini" circular />
          </Link>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="Hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`PageLinks ${isOpen ? "Open" : ""}`}>
          <Link className="hamLink" to="About" spy={true} smooth={true} offset={-150} duration={500}>
            About
          </Link>
          <Link to="FAQ" spy={true} smooth={true} offset={-150} duration={500}>
            FAQ
          </Link>
          <Link
            to="Sponsor"
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
            Contact Us
          </Link>
          <a
            href="http://hackp.ac/coc"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Code of Conduct
          </a>
          <a
            href="https://blossomhack-2024-20522.devpost.com/?ref_feature=challenge&ref_medium=discover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dev Post
          </a>
        </div>
      </div>
    </div>
  );
}
