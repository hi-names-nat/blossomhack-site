import React from "react";
import { Accordion } from "semantic-ui-react";
import "./FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = (_, titleProps) => {
    setActiveIndex(activeIndex === titleProps.index ? -1 : titleProps.index);
  };

  return (
    <div className="FAQ" id = "FAQ">
      <div className="accordionContainer">
        <Accordion className="accordionContainer" styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <h3>What is a Hackathon?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              A hackathon is an event in which groups of 'hackers' get together to
              create a solution to a technological problem in a single day. Anyone
              who has an interest in technology attends a hackathon to learn,
              build, and share their creations over the course of a weekend in a
              relaxed and welcoming atmosphere. You don't have to be a programmer
              or majored in Computer Science to participate!
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 15}
            index={15}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>What is a Capture-the-Flag?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 15}>
            <p>
              Our Capture-the-Flag track challenges participants to test their
              knowledge of cybersecurity and their skills in performing attacks or
              defenses.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>Do I Need a Team?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              No, you can either work solo or form a team with others before the
              event starts.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>How Do I Register?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              You can register <a href="https://l5kysdlzy94.typeform.com/to/IOsDKBh4">HERE.</a>
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>Will the Event Be Virtual or Have a Virtual Component?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              Judging and the awards ceremony will be done entirely in person, so we will have no virtual component. If you need to travel, feel free to reach out to reserve a travel reimbursement package
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 4}
            index={4}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>Can I Attend BlossomHack?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <p>
              As long as you are an active college student, you can attend
              BlossomHack.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 5}
            index={5}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>Is It Free?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <p>BlossomHack will be entirely free.</p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 6}
            index={6}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>Do I Need an Idea Beforehand?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <p>No. Many attendees will create their ideas at the event.</p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 7}
            index={7}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>How Can I Help?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 7}>
            <p>
              If you are a student at OU, please contact one of the organizations
              hosting the event. If you are interested in sponsoring, we have a
              section below just for you.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 8}
            index={8}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>Will There Be Swag?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 8}>
            <p>Yes! There will be! More info TBA.</p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 9}
            index={9}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>
              If I Can't Pick Up Swag Myself, Can Someone Else Pick It Up For Me??
            </h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 9}>
            <p>
              You must be in person to be able to get swag. 
              (But if someone is here willing to grab some for you and we have extra, by all means go ahead!)
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 10}
            index={10}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>Who is Hosting BlossomHack?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 10}>
            <p>
              BlossomHack is hosted by a group of Ohio University student
              organizations.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 11}
            index={11}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>What if I Have No Programming Experience?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 11}>
            <p>
              You can still participate! Hackathons exist to help people learn new
              skills, and mentors will be available throughout the event if you
              need help.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 12}
            index={12}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>COVID Info?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 12}>
            <p>
              If you are feeling sick, please stay home. There will be hand
              sanitizer provided. To be proactive, you can mask up.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 13}
            index={13}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>Will There Be Travel Reimbursement?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 13}>
            <p>
              Limited travel reimbursement will be available. Please contact us if
              you will be needing it.
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
    </div>
  );
}
