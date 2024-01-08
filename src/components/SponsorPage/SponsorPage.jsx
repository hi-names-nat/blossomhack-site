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
