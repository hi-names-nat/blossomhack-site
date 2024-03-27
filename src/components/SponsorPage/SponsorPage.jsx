import React from 'react';
import SponsorPageNavbar from './SponsorPageNavbar/SponsorPageNavbar';
import Footer from '../Footer/Footer';
import { Image } from "semantic-ui-react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import SponsorFront from './SponsorPageFront/SponsorPageFront';
import SponsorPagePage from './SponsorPagePage/SponsorPagePage';

export default function SponsorPage() {

  const [sections, _] = React.useState([
    {
      sectionName: "Who Are We?",
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
      sectionName: "Our Sponsors",
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

  return (
    <div id="sponsor-page">
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
      <SponsorPageNavbar />
      {/* <img src="https://placekitten.com/g/200/200"/> */}
      {/* <img src = {require('../../images/sponsors/ai_futures.png')}/> */}
      <SponsorFront />
      <SponsorPagePage sections={sections} />
      <hr />
      <Footer />
      <div id="detail">
        <Outlet />
      </div>
      <ScrollRestoration/>
    </div>

  );

}
