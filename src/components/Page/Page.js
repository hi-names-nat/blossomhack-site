import React, { Component } from "react";
import "./Page.css";
import Section from "../Section/Section";

class Page extends Component {
  render() {
    const sectionItem = this.props.section.map(section => {
      return (
        <Section
          sectionName={section.sectionName}
          Subtitle={section.Subtitle}
        />
      );
    });
    return <div className="Page">{sectionItem}</div>;
  }
}

export default Page;
