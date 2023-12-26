import safetyIcon from "../../Asset/icons/safety.svg";
import destIcon from "../../Asset/icons/destination.svg";
import Support from "../../Asset/icons/customerSupport.svg";
import manAtBeach from "../../Asset/manAtBeach.jpg"
import "./Portfolio.scss"

const Portfolio = () => {
  return (
    <div className="portfolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why You should Choose Us?</h3>
            <p>
              We have extensive knowlede and experience in the travel industry
            </p>
          </div>

          <div className="grid">
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={safetyIcon} alt="" />
              </div>

              <div className="infor">
                <h4>Safety and Support</h4>
                <p>
                  Our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency support
                  available during the trip.
                </p>
              </div>
            </div>
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={destIcon} alt="" />
              </div>

              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Wether it&apos;s a domestic tour or an international
                  adventure, we cover a wide range of destinations and cater for
                  different interests and preferences.
                </p>
              </div>
            </div>
            <div className="singlePortfolio flex">
              <div className="iconDiv">
                <img src={Support} alt="" />
              </div>

              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                 Our top priority is the safety and well-being of our clients. We maintainn higt and safety
                </p>
              </div>
            </div>
          </div>
              </div>
              <div className="rightContent">
                  <img src={manAtBeach} alt="man at a beach" className="manAtBeach"/>
              </div>
      </div>
    </div>
  );
};

export default Portfolio;
