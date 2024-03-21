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
    <div className="SponsorPageFAQ" id="SponsorPageFAQ">
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
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
          >
            <h3>What Is The Difference Between Sponsorship And Donation?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
            Sponsorship is when a gift (money, supplies, etc.) is given to an organization with an expectation or an 
            agreement of something in return (i.e. promotion for the donor). Donation on the other hand does not result 
            in any benefit to the donor and most importantly can be claimed as a charitable deductible on the donor's taxes.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>What Can We Donate?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              We accept financial donations of $1,000, $2,000, $4,000, or $5,000 as 
              well as in-kind sponsorships where we will accept donations of food, 
              swag, supplies, or prize support. Please go to the 

              <div className= "p2">
                Get in Touch
              </div> section 
              
              to contact us with any questions.

            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>How Can We Donate?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
            Sponsorships/donations made via cash or check will be mailed to the Ohio University Bursar's office.
            Sponsorships/donations made via credit card can be made by sending funds to The Russ College Student 
            Support Fund <a href="https://giving.ohio.edu/">HERE.</a> A receipt of the donation must be sent to event leadership 
            so the funds can be collected. Please contact event leadership via the 
            
            <div className= "p2">
                Get in Touch
              </div> 

            section below so 
            that we can ensure that the funds correctly arrive in our account and that you receive any sponsorship perks you request.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 4}
            index={4}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>What Will Our Money Be Spent On?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <p>
              Sponsorships/donations will be spent on providing food, swag, prizes, supplies, and janitorial services.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 5}
            index={5}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>Will the Event be Virtual or Have a Virtual Component?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <p>
              Judging and the awards ceremony will be done entirely in person, so we will have no virtual component. If you need to travel, feel free to reach out to reserve a travel reimbursement package
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 6}
            index={6}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>Who is Hosting BlossomHack?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <p>
              BlossomHack is hosted by a group of Ohio University student
              organizations.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex ===7}
            index={7}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>COVID Info?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 7}>
            <p>
              If you are feeling sick, please stay home. There will be hand
              sanitizer provided. To be proactive, you can mask up.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 8}
            index={8}
            onClick={handleClick}
          >
            {/*<Icon/>*/}
            <h3>Will There Be Travel Reimbursement?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 8}>
            <p>
              Limited travel reimbursement will be available. Please contact us if
              you will be needing it.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 9}
            index={9}
            onClick={handleClick}
          >
            <h3>What Are Your Goals For This Event?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 9}>
            <p>
            Our goal for 2024 is to increase our attendance from 77 last year to 125 
            along with providing an experience more supportive of less experienced hackers.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 10}
            index={10}
            onClick={handleClick}
          >
            <h3>How Can We Contact You or Set Up a Meeting?</h3>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 10}>
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
    </div>
  );
}
