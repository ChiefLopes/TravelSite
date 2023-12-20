import "./home.scss"

// Imported Icons
import { AiOutlineSwapRight } from "react-icons/ai";

// Imported Assets 
import VideoBg from "../../Asset/Baloons.mp4"

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={VideoBg} autoPlay loop muted />
      </div>

      <div className="sectionText">
        <h1>Unlock Your Travel Dreams With Us!</h1>
        <p>
          Discover the World&apos; most adventurous nature, Life is so short for
          a trip
        </p>
        <button className="btn flex">
          GET STARTED <AiOutlineSwapRight />
        </button>
          </div>
          
          <div className="popularPlaces">
              <div className="content">
                  <h3>Popular Places</h3>
                  
                  <div className="image flex">
                      {/* <img src="" alt=""/>
                      <img src="" alt=""/>
                      <img src="" alt=""/>
                      <img src="" alt=""/> */}
                  </div>
              </div>
          </div>
    </div>
  );
}

export default Home