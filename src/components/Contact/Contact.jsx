import React from "react";
import "./Contact.css";
import { Button } from "semantic-ui-react";

export default function Contact() {
  return (
    <div className="Contact" id="Contact">
      <p>
        We're always excited to partner with others both on campus and
        professionally. Reach out to us if you'd like to join us on our quest!
      </p>

      <div className="buttons">
        <h3>Interested in sponsoring our hackathon, becoming a partner or looking for a promotion?</h3>
        <Button animated size="large" href="mailto:blossomhackou@gmail.com">
          <Button.Content visible>Message us at</Button.Content>
          <Button.Content hidden>blossomhackou@gmail.com</Button.Content>
        </Button>
        <h3>For any other inquiries please contact us!</h3>
        <Button animated size="large" href="mailto:blossomhackou@gmail.com">
          <Button.Content visible>Message us at</Button.Content>
          <Button.Content hidden>blossomhackou@gmail.com</Button.Content>
        </Button>
      </div>
    </div>
  );
}
