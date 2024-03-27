import React from "react";
import "./SponsorPageSection.css";
import Event from "../../Event/Event";
import Organizer from "../../Organizer/Organizer";
import SponsorPageAbout from "../SponsorPageAbout/SponsorPageAbout"
import Contact from "../../Contact/Contact";
import Sponsor from "../../Sponsor/Sponsor";
import Partners from "../../Partners/Partners";
import SponsorPageFAQ from "../SponsorPageFAQ/SponsorPageFAQ";
import Hosts from "../../Hosts/Hosts";
import Schedule from "../../Schedule/Schedule";
import SponsorPageSponsor from "../SponsorPageSponsor/SponsorPageSponsor";
import Map from "../../Map/Map"



export default function SponsorPageSection({sectionName, subtitle}) {
  return (
    <div className="Section">
      <h2>{sectionName}</h2>
      <h3>{subtitle}</h3>

      {sectionName === "Who Are We?" && <SponsorPageAbout />}
      {sectionName === "Location" && <Map />}
      {sectionName === "FAQ" && <SponsorPageFAQ />}
      {/* {sectionName === "Our Events" && <Event />} */}
      {sectionName === "Our Sponsors" && <SponsorPageSponsor />}
      {sectionName === "Partners" && <Partners />}
      {sectionName === "Get in Touch" && <Contact />}
      {sectionName === "Our Team" && <Organizer />}
      {sectionName === "Hosted By" && <Hosts />}
      {sectionName === "Schedule" && <Schedule />}
    </div>
  );
}
