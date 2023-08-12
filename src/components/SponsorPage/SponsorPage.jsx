import React from 'react';
import SponsorPageNavbar from './SponsorPageNavbar';
import Footer from '../Footer/Footer';
import { Image } from "semantic-ui-react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import SponsorFront from './SponsorFront';
import Page from '../Page/Page';

export default function SponsorPage() {

  const [sections, _] = React.useState([
    {
      sectionName: "What is BlossomHack?",
      subtitle: "",
    },
    {
      sectionName: "Our Events",
      subtitle: "",
    },
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
      sectionName: "Get in touch",
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
      <Page sections={sections} />
      <hr />
      <Footer />
      <div id="detail">
        <Outlet />
      </div>
      <ScrollRestoration/>
    </div>

  );

}
