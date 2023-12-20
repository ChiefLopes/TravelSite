import "./Destination.scss"
import { MdLocationPin } from "react-icons/md";


const Destinations = () => {
  return (
    <div className="destination section cont">
      <div className="secContainer">
        <div className="">
          <span className="redText">EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Fill in the fields below to find out the best spot for your next
            tour
          </p>
        </div>

        <div className="searchFiled grid">
          <div className="inputField flex">
            <MdLocationPin className="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
