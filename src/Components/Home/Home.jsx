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
        <button>
          GET STARTED <AiOutlineSwapRight />
        </button>
      </div>
    </div>
  );
}

export default Home