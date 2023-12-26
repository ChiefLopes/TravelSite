import "./Questions.scss"
import { BsArrowDownCircleFill } from "react-icons/bs";

const Accordion = () => {
  return (
    <div className="accordionContainer">
      <span className="title flex">
        How do I choose the right destination for me?
        <span>
          <BsArrowDownCircleFill className="icon" />
        </span>
      </span> 
      <p>Consider your interests, budget desired experiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing.</p>
    </div>
  );
};

export default Accordion;
