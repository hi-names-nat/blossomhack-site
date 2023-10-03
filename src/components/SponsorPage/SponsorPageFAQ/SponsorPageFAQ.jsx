import React from "react";
import { Accordion } from "semantic-ui-react";
import "./SponsorPageFAQ.css";
import { Link } from "react-scroll";

export default function SponsorPageFAQ() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = (_, titleProps) => {
    setActiveIndex(activeIndex === titleProps.index ? -1 : titleProps.index);
  };

  return (
    <div className="accordionContainer">
      <Accordion className="accordionContainer" styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <h3>What is a hackathon?</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            A hackathon is an event in which groups of 'hackers' get together to
            create a solution to a technological problem in a single day. Anyone
            who has an interest in technology attends a hackathon to learn,
            build & share their creations over the course of a weekend in a
            relaxed and welcoming atmosphere. You don't have to be a programmer
            or majored in Computer Science to participate!
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          {/*<Icon/>*/}
          <h3>What Can We Donate?</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            To be added.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          {/*<Icon/>*/}
          <h3>How Can We Send Money?</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
          To be added.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={handleClick}
        >
          {/*<Icon/>*/}
          <h3>What Will Our Money Be Spent On?</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            To be added.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={handleClick}
        >
          {/*<Icon/>*/}
          <h3>Will the event be virtual or have a virtual component?</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            Our event is in-person focused, however virtual participation is
            permitted.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={handleClick}
        >
          {/*<Icon/>*/}
          <h3>Who is hosting BlossomHack?</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            BlossomHack is hosted by a group of Ohio University student
            orginizations.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={handleClick}
        >
          {/*<Icon/>*/}
          <h3>COVID info?</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>
            If you are feeling sick, please stay home. There will be hand
            sanitizer provided. To be proactive, you can mask up.
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 7}
          index={7}
          onClick={handleClick}
        >
          {/*<Icon/>*/}
          <h3>Will there be travel reimbursement?</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <p>
            Limited travel reimbursement will be available. Please contact us if
            you will be needing it.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 8}
          index={8}
          onClick={handleClick}
        >
          <h3>What Are Your Goals For This Event?</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 8}>
          <p>
            To be added.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 9}
          index={9}
          onClick={handleClick}
        >
          <h3>How Can We Contact You or Set Up a Meeting?</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 9}>
          <p>
            Go to the 
            
            <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            
            >
            <div className= "p2">
              Get in Touch
             </div>
          </Link>
            
            section below and message us using the buttons provided.
          </p>
        </Accordion.Content>

      </Accordion>
    </div>
  );
}
