import React from "react";
import "./Footer.css";
import FooterLogo from "../../images/footerlogo.png";

const footer = () => {
  return (
    <div className="Footer">
      <div className="FooterBody">
        <div className="FooterLogo">
          <img src={FooterLogo} alt="Logo" />
        </div>
        <div className="LogoText">
          <p>Ohio University's Biggest Hackathon</p>
        </div>
        <div class="FooterContainer">
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
        </div>
      </div>
    </div>
  );
};

export default footer;
