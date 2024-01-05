import { useState } from "react";
import Accordion from "./Accordion";
import "./Questions.scss";

import { useEffect } from "react";

// Imported Library for scroll animation
import Aos from "aos";
import "aos/dist/aos.css";

const Questions = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const [active, setActive] = useState(
    "How do I choose the right destination for me?"
  );

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>

      <div className="secContainer grid">
        <div className="accordion grid" data-aos="flip-up">
          <Accordion
            title="How do I choose the right travel destinations for me?"
            desc="Consider your interests, budget desired experiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="What are the best times to visit specific destinations?"
            desc="Research the climate, weather patterns and peak tourist seasons of the destination you are interested in. Opt for the shoulder seasons when the weather is pleasant, and crowds are fewer if possible"
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="How can i find budget-friendly option travel options and deals?"
            desc="Look for travel deals, discounts on flights and accommodations, and consider using travel apps or websites that offer competitive prices. Being flexible with your travel dates can also help you find better deals."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="What essential items should I pick for my adventure?"
            desc="Pack appropriate clothings,toiletries, travel documents(passport, visa, etc), essential medications and any specific gear needed for your adventure(e.g hiking boots, snorkeling gear)."
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="form" data-aos="flip-down">
          <div className="secHeading">
            <h4>Do you have any specific questions?</h4>
            <p>
              Please fill in the form below and our dedicated team will get in
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
