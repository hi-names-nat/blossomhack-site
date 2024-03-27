import React from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Front from "../Front/Front";
import Page from "../Page/Page";
import Footer from "../Footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

/* This App is brought to you by the hecking_squad */ 

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
    {
      sectionName: "Location",
      subtitle: "",
    },

  ]);

  return (
    <div className="App">
      <Navbar />
      <a 
      id="mlh-trust-badge" 
      style={{display: "block", maxWidth: "130px", minWidth: "70px", position: "fixed", right: "50px", top: "-35px", width: "10%", zIndex: "10000"}} 
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" 
        alt="Major League Hacking 2024 Hackathon Season" 
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
