import React from "react";
import "./Event.css";
import { Card } from "semantic-ui-react";

export default function Event() {
  return (
    <div className="Event" id="Events">
      <div className="ui centered grid">
        <div className="row" id="cardRow">
          <Card
            header="BobcatCTF Fall"
            meta="Hardware CTF"
            description="In the Fall we hosted a hardware CTF event."
          />
          <Card
            header="BobcatCTF Spring"
            meta="Flagship Capture the Flag Event"
            description="The annual Capture the Flag competition bringing cyber security topics to students in the form of contained and fun challenges."
          />
        </div>
      </div>
    </div>
  );
}
