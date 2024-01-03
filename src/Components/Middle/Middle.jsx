import "./Middle.scss"
import { useEffect } from "react";

// Imported Library for scroll animation
import Aos from "aos";
import "aos/dist/aos.css";


const Middle = () => {
    
      useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    
    
  return (
    <div className="middleSection" data-aos="fade-down" data-aos-duration="2000">
      <div className="secContainer container">
        <div className="grid">
          <span className="flex" data-aos="fade-up">
            <h1>10</h1>
            <p>World Of experiences</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>2k+</h1>
            <p>Final Destination</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>10k+ </h1>
            <p>Customer Reviews</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>4.8</h1>
            <p>Overall Rating</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Middle;
