import { BiLogoMediumOld } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
                  <div className="footerLogo">
                      <BiLogoMediumOld className="icon" />
                      <span>Success-Trips</span>
                  </div>
                  
                  <div className="socials flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
