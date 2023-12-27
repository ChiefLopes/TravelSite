import photo1 from "../../Asset/clients/client1.jpg";
import "./Subscribe.scss"


const Subscribe = () => {
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={photo1} alt="Div Image" />

        <div className="textDiv">
          <h4>Best way to Start Your Journey!</h4>
          <p>
            We offer personalized itineraries tailored to individual preferences
            and interests.
          </p>

          <button className="btn">Start Here</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
