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
                  
                  <div className="socials flex">
                      <ImFacebook2 />
                      <FaTwitter />
                      <FaInstagramSquare />
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
