import React from "react";
import "./Contact.css";
import { Button } from "semantic-ui-react";

export default function Contact() {
    return (
      <div className="Contact" id="Contact">
        <p>
          We're always excited to partner with innovative groups
          both on campus and professionally. Reach out to us if you'd like to
          join us on our quest!
        </p>

        <div className="buttons">
          <h3>Interested in sponsoring our hackathon?</h3>
          <Button animated size="large" href="mailto:jg390518@ohio.edu">
            <Button.Content visible>
              Message us at
            </Button.Content>
            <Button.Content hidden>jg390518@ohio.edu</Button.Content>
          </Button>

          <h3>Would you like to partner with us for an on-campus event?</h3>
          <Button animated size="large" href="mailto:jg390518@ohio.edu">
            <Button.Content visible>Message us at</Button.Content>
            <Button.Content hidden>jg390518@ohio.edu</Button.Content>
          </Button>

          <h3>Looking for promotion or communication help? </h3>
          <Button animated size="large" href="mailto:jg390518@ohio.edu">
            <Button.Content visible>Message us at</Button.Content>
            <Button.Content hidden>marketing@uottahack.ca</Button.Content>
          </Button>

          <h3>For any other inquiries please contact us!</h3>
          <Button animated size="large" href="mailto:jg390518@ohio.edu">
            <Button.Content visible>Message us at</Button.Content>
            <Button.Content hidden>chair@uottahack.ca</Button.Content>
          </Button>
        </div>
      </div>
    );
  }
