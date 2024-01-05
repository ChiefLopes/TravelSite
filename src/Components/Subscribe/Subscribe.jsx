import photo1 from "../../Asset/clients/client1.jpg";
import "./Subscribe.scss";

import { useEffect } from "react";

// Imported Library for scroll animation
import Aos from "aos";
import "aos/dist/aos.css";

// Using the useEffect hook to trigger the animation side-effect
const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={photo1} alt="Div Image" data-aos="fade-left" />

        <div className="textDiv" data-aos="fade-right">
          <h4>Best way to Start Your Journey!</h4>
          <p>
            We offer personalized itineraries tailored to individual preferences
            and interests.
          </p>

          <button className="btn">Start Here</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
