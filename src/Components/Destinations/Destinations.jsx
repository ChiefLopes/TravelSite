import "./Destination.scss";
import { useEffect } from "react";

// Imported Library for scroll animation
import Aos from "aos";
import "aos/dist/aos.css";

// Imported Icons
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

// Imported photos
import photo1 from "../../Asset/photo1.jpg";
import photo2 from "../../Asset/photo2.jpg";
import photo3 from "../../Asset/Photo3.jpg";
import photo4 from "../../Asset/photo4.jpg";
import photo5 from "../../Asset/photo5.jpg";
import photo6 from "../../Asset/photo6.jpg";
import photo7 from "../../Asset/photo7.jpg";
import photo8 from "../../Asset/photo8.jpg";

// An array that has all detination data so we can loop through them
const destinationData = [
  {
    id: 1,
    img: photo1,
    name: "Seychelles Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
  {
    id: 2,
    img: photo2,
    name: "Bora bora Island",
    location: "Polynesia",
    rating: 4.3,
  },
  {
    id: 3,
    img: photo3,
    name: "Maldives Island",
    location: "Indian Ocean",
    rating: 4.9,
  },
  {
    id: 4,
    img: photo4,
    name: "Santorini Island",
    location: "Greece",
    rating: 4.5,
  },
  {
    id: 5,
    img: photo5,
    name: "Bali Island",
    location: "Indonesia",
    rating: 4.9,
  },
  {
    id: 6,
    img: photo6,
    name: "Maui Island",
    location: "Hawaii, USA",
    rating: 4.7,
  },
  {
    id: 7,
    img: photo7,
    name: "Capri Island",
    location: "Italy",
    rating: 4.7,
  },
  {
    id: 8,
    img: photo8,
    name: "Fiji Island",
    location: "South Pacific",
    rating: 4.4,
  },
];

const Destinations = () => {
    
    // 
      useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle" data-aos="fade-up">
          <span className="redText">EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Fill in the fields below to find out the best spot for your next
            tour
          </p>
        </div>

        <div className="searchField grid" data-aos="fade-down">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>

          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div className="inputField flex">
            <BsFillCalendar2DateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>

          <button className="btn flex">
            <BiSearchAlt className="icon" /> Search
          </button>
        </div>

        <div
          className="secMenu"
          data-aos="flip-left"
        >
          <ul className="flex">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinationData.map((destination) => {
            return (
              <div key={destination.id} className="singleDestination">
                <div className="imgDiv" data-aos="fade-up">
                  <img src={destination.img} alt="Destination image" />

                  <div className="descInfo flex"> 
                    <div className="text" data-aos="fade-down">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation /> {destination.location}
                      </p>
                    </div>
                    <span className="rating" data-aos="fade-up">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
