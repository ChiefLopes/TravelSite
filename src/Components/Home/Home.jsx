import "./home.scss";
// impo
// Imported Icons
import { AiOutlineSwapRight } from "react-icons/ai";

// Imported Assets/Media
import VideoBg from "../../Asset/Baloons.mp4";
import photo1 from "../../Asset/photo1.jpg";
import photo2 from "../../Asset/photo2.jpg";
import photo3 from "../../Asset/Photo3.jpg";
import photo4 from "../../Asset/photo4.jpg";



const Home = () => {

  return (
    <div className="Home">
      <div className="videoBg">
        <video src={VideoBg} autoPlay loop muted />
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-down">Unlock Your Travel Dreams With Us!</h1>
        <p data-aos="fade-right">
          Discover the World&apos; most adventurous nature, Life is so short for
          a trip
        </p>
        <button className="btn flex" data-aos="fade-left">
          GET STARTED <AiOutlineSwapRight />
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="flip-left">Popular Places</h3>

          <div className="image flex" data-aos="fade-up">
            <img src={photo1} alt="Destination images" />
            <img src={photo2} alt="Destination images" />
            <img src={photo3} alt="Destination images" />
            <img src={photo4} alt="Destination images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
