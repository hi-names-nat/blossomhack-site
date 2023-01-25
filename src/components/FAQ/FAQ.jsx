import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";



export default class FAQ extends Component{
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div className="accordionContainer">
        {/*We can update the style later.*/}
        <Accordion className="Dropdown" styled>
          <Accordion.Title active={activeIndex === 0}
                           index={0}
                           onClick={this.handleClick}>
            <h3>What is a hackathon?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
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
          <Accordion.Title active={activeIndex === 15}
                           index={15}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>What is a Capture-the-Flag?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 15}>
            <p>
              Our Capture-the-Flag track challenges participants to test their knowledge
              of cybersecurity and their skills in performing attacks or defenses
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 1}
                           index={1}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>Do I need a team?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              No, you can either work solo, or form a team with others before the
              event starts.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 2}
                           index={2}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>How will I register?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              TBA!!
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 3}
                           index={3}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>Will the event be virtual or have a virtual component?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              Our event is in-person focused, however virtual participation is permitted.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 4}
                           index={4}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>Can I attend BlossomHack?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <p>
              As long as you are an active college student, you can attend
              BlossomHack.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 5}
                           index={5}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>Is it free?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <p>
              BlossomHack will be entirely free.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 6}
                           index={6}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>Do I need an idea beforehand?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <p>
              No. Many attendees will create their ideas at the event.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 7}
                           index={7}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>How can I help?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 7}>
            <p>
              TBA...
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 8}
                           index={8}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>Will there be swag?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 8}>
            <p>
              Yes! There will be! More info TBA.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 9}
                           index={9}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>If I can't pick up swag myself, can someone else pick it up for me??</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 9}>
            <p>
              TBA
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 10}
                           index={10}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>Who is hosting BlossomHack?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 10}>
            <p>
              BlossomHack is hosted by a group of Ohio University student orginizations.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 11}
                           index={11}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>What if I have no programming experience?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 11}>
            <p>
              You can still participate! Hackathons exist to help people learn new skills,
              and mentors will be available throughout the event if you need help.
            </p>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 12}
                           index={12}
                           onClick={this.handleClick}>
            {/*<Icon/>*/}
            <h3>COVID info?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 12}>
            <p>
              TBA
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
    )
  }
}