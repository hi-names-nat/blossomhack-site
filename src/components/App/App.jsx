import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Front from "../Front/Front";
import Page from "../Page/Page";
import Footer from "../Footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

/* This App is brought to you by the hecking_squad */ 
/* Who is the squad? */

export default function App() {
  const [sections, _] = React.useState([
    {
      sectionName: "What is BlossomHack?",
      subtitle: "",
    },
    // {
    //   sectionName: "Our Events",
    //   subtitle: "",
    // },
    {
      sectionName: "FAQ",
      subtitle: "",
    },
    {
      sectionName: "Sponsors",
      subtitle: "",
    },
    {
      sectionName: "Our Team",
      subtitle: "",
    },
    {
      sectionName: "Hosted By",
      subtitle: "",
    },
    {
      sectionName: "Get in Touch",
      subtitle: "",
    },
    {
      sectionName: "Schedule",
      subtitle: "",
    },
  ]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);
  const bannerStyle = {
    display: "block",
    maxWidth: isMobile ? "85px" : "130px", 
    minWidth: isMobile ? "45px" : "70px", 
    position: "fixed",
    right: isMobile ? "55px" : "50px", 
    top: isMobile ? "-30px" : "-35px", 
    width: "10%",
    zIndex: "10000",
  };

  return (
    <div className="App">
      <Navbar />
      <a
        id="mlh-trust-badge"
        style={bannerStyle}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img 
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" 
        alt="Major League Hacking 2025 Hackathon Season" 
        style={{width: "100%"}}
      />
    </a>
      <Front />
      <Page sections={sections} />
      <hr />
      <Footer />
      <div id="detail">
        <Outlet />
      </div>
      <ScrollRestoration />
    </div>
  );
}
