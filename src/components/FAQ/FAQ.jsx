import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";



export default function FAQ() {

    return (
      <div className="accordionContainer">
        <Accordion  className="Dropdown">
          <Accordion.Title active={props.activeIndex === 0} index={0} onClick={props.onClick}>
            <h3>What is a hackathon?</h3>
          </Accordion.Title >
          <Accordion.Content active={props.activeIndex === 0}>
            <p>
              A hackathon is an event in which groups of 'hackers' get
              together to create a solution to a technological problem
              in a single day. Anyone who has an interest in technology attends
              a hackathon to learn, build & share their creations over
              the course of a weekend in a relaxed and welcoming atmosphere.
              You don't have to be a programmer or majored in Computer Science
              to participate!
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
    )
  }