import React from "react";
import "./Organizer.css";
import organizer2022 from "./organizers2022.json";
import { Card, Dropdown, Menu } from "semantic-ui-react";

const options = [
  { key: 1, text: "2023/2024", value: 1 },
  { key: 2, text: "2022/2023", value: 2 },
];

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
);

export default function Organizer() {
  return (
    <div className="Organizer">
      <div className="menu">
        <Menu compact>
          <Dropdown text="2022/2023"  /*options={options}*/ simple item />
        </Menu>
      </div>
      <Card.Group centered items={organizer2022} id="cards" />
    </div>
  );
}
