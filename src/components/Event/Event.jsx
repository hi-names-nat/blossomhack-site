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
            description="In the Fall we hosted a hardware CTF event event."
          />
          <Card
            header="BobcatCTF Spring"
            meta="Flagship Capture the Flag"
            description="Our first event, a Capture the Flag competition we hold every year."
          />
        </div>
      </div>
    </div>
  );
}
