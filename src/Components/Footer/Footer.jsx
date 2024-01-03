import "./Footer.scss";

// import { useEffect } from "react";

// Imported Library for scroll animation
// import Aos from "aos";
// import "aos/dist/aos.css";

// Imported social icons
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    
    // useEffect(() => {
    //       Aos.init({duration: 2000}) 
    // })
    
  return (
    <div className="footer" data-aos="fade-up">
      <div className="secContainer container grid">
        <div className="logoDiv" data-aos="fade-left">
          <div className="footerLogo">
            <BiLogoMediumOld className="icon" />
            <span>Success-Trips</span>
          </div>
        <div className="socials ">
          <ImFacebook2 className="icon" />
          <FaTwitter className="icon" />
          <FaInstagramSquare className="icon" />
        </div>
        </div>

        <div className="footerLinks" data-aos="fade-right">
          <span className="span linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-right">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel and Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>
        <div className="footerLinks" data-aos="fade-right">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">+234-990-224-567-0</span>
          <span className="email">chieflopesekede@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
