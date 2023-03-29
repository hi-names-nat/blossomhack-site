import React from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Front from "../Front/Front";
import Page from "../Page/Page";
import Footer from "../Footer/Footer";

/* This App is brought to you by the hecking_squad */ 

export default function App() {
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

  return (
    <div className="App">
      <Navbar />
      <Front />
      <Page sections={sections} />
      <hr />
      <Footer />
    </div>
  );
}
