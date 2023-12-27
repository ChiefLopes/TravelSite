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
                          <a href="#">Explore</a>
                          <a href="#">Travel</a>
                          <a href="#">Blog</a>
                      </li>
                  </div>
                  
                  <div className="footerLinks">
                      <span className="span linkTitle">
                          Helpful Links
                      </span>
                      <li>
                          <a href="#">Destination</a>
                          <a href="#">Support</a>
                          <a href="#">Travel and condition</a>
                          <a href="#">Privacy</a>
                      </li>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
