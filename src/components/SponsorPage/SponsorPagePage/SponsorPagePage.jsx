import React from "react";
import "./SponsorPagePage.css";
import SponsorPageSection from "../SponsorPageSection/SponsorPageSection";

export default function SponsorPagePage(sections) {
  return (
    <div className="SponsorPagePage">
      {sections && sections.sections.map((section, idx) => {
        return (
          <SponsorPageSection
            sectionName={section.sectionName}
            Subtitle={section.Subtitle}
            key={idx}
          />
        );
      })}
    </div>
  );
}
