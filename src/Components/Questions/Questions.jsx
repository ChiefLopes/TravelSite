import { useState } from "react";
import Accordion from "./Accordion";
import "./Questions.scss";

const Questions = () => {
  const [active, setActive] = useState(
    "How do I choose the right destination for me?"
  );

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>

      <div className="sceContainer grid">
        <div className="accordion grid">
          <Accordion
            title="How do I choose the right destination for me?"
            desc="Consider your interests, budget desired experiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="How do I choose the right destination for me?"
            desc="Consider your interests, budget desired experiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="form">
          <div className="secHeading">
            <h4>Do You Have any specific questions?</h4>
            <p>
              Please fill the form below and our dedicated team will get in
              touch with you as soon as possible.
            </p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder="Enter e-mail address" />
            <textarea placeholder="Enter Your question here"></textarea>
            <button className="btn">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
