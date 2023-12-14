import { useState } from "react";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import "./NavBar.scss";

const NavBar = () => {
  // State to track and update navBar
  const [navBar, setNavBar] = useState(false);

  // Function to show navBar

  const showNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span>Suc-cess Trips</span>

        <div className="menu">
          <ul>
            <li className="navList">Destination</li>
            <li className="navList">Testimonial</li>
            <li className="navList">About Us</li>
            <li className="navList">Gallery</li>
          </ul>

          {/* Icon to remove navBar */}
          <AiFillCloseCircle className="icon closeIcon" />
        </div>

        <button className="signUpBtn btn">Sign Up</button>

        {/* Icon to toggle navBar */}
        <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
      </div>
    </div>
  );
};

export default NavBar;