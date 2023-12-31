import "./Reviews.scss";
import { useEffect } from "react";

// Imported Icon
import { AiFillStar } from "react-icons/ai";

// Imported Images
import client1 from "../../Asset/clients/client1.jpg";
import client2 from "../../Asset/clients/client2.jpg";
import client3 from "../../Asset/clients/client3.jpg";
import client4 from "../../Asset/clients/client4.jpg";
import client5 from "../../Asset/clients/client5.jpg";

// Imported Library for scroll animation
import Aos from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv" data-aos="fade-down">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency, customers can expect an
            enriching an enriching and enjoyable travel experience, filled with
            unforgettable memories that will last a lifetime.
          </p>
          <span className="stars flex" data-aos="flip-left">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImages flex" data-aos="flip-right">
            <img src={client1} alt="client image" />
            <img src={client2} alt="client image" />
            <img src={client3} alt="client image" />
            <img src={client4} alt="client image" />
          </div>
        </div>

        <div className="imgDiv" data-aos="fade-up">
          <img src={client5} alt="Div Image" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
