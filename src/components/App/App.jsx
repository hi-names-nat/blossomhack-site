import React from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Front from "../Front/Front";
import Page from "../Page/Page";
import Footer from "../Footer/Footer";

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
      sectionName: "Partners",
      subtitle: "",
    },
    {
      sectionName: "Get in touch",
      subtitle: "",
    },
    {
      sectionName: "Our Team",
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
