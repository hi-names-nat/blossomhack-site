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

export default function SponsorPageSection({sectionName, subtitle}) {
  return (
    <div className="Section">
      <h2>{sectionName}</h2>
      <h3>{subtitle}</h3>
      {sectionName === "Who Are We?" && <SponsorPageAbout />}
      {sectionName === "FAQ" && <SponsorPageFAQ />}
      {sectionName === "Our Events" && <Event />}
      {sectionName === "Sponsors" && <Sponsor />}
      {sectionName === "Partners" && <Partners />}
      {sectionName === "Get in touch" && <Contact />}
      {sectionName === "Our Team" && <Organizer />}
      {sectionName === "Hosted By" && <Hosts />}
      {sectionName === "Schedule" && <Schedule />}
    </div>
  );
}
