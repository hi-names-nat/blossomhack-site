import React from "react";
import "./Footer.css";
import FooterLogo from "../../images/footerlogo.png";

export default function footer() {
  return (
    <div className="Footer">
      <div className="FooterBody">
        <div className="FooterLogo">
          <img src={FooterLogo} alt="Logo" />
        </div>
        <div className="LogoText">
          <p>Ohio University's Biggest Hackathon</p>
        </div>
        <div className="FooterContainer">
          <div className="FooterLinks">
            <a href="https://mlh.io/privacy" target="_blank">
              Privacy Policy
            </a>
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              target="_blank"
            >
              Code of Conduct
            </a>
            <a
              href="https://github.com/hi-names-nat/blossomhack"
              target="_blank"
            >
              GitHub
            </a>

          </div>
          <br/>
          <a href="https://www.flaticon.com/" title="icons" target="_blank" rel="noopener noreferrer">
          <div className = "IconLinks">Link and GPS icons created by Kumakamu and Icon Wind - Flaticon</div></a>
        </div>
      </div>
    </div>
  );
}
