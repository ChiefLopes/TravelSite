import "./Footer.scss"

// Imported social icons
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <BiLogoMediumOld className="icon" />
            <span>Success-Trips</span>
          </div>

          <div className="socials ">
            <ImFacebook2 className="icon" />
            <FaTwitter className="icon" />
            <FaInstagramSquare className="icon" />
                  </div>
                  
                  <div className="footerLinks">
                      <span className="span linkTitle">
                          Information
                      </span>
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
                  
                  <div className="footerLinks">
                      <span className="linkTitle">
                          Helpful Links
                      </span>
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
                  <div className="footerLinks">
                      <span className="linkTitle">Contact Details</span>
                      <span className="phone">+234-990-224-567-0</span>
                      <span className="email">chieflopesekede@gmail.com</span>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
