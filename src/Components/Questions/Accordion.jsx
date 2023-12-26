import "./Questions.scss";
import { BsArrowDownCircle } from "react-icons/bs";

const Accordion = ({title, desc}) => {
  return (
    <div className="accordionContainer">
      <span className="title flex">
     {title}
        <span>
          <BsArrowDownCircle className="icon" />
        </span>
      </span>
      <p className="description">
        {desc}
      </p>
    </div>
  );
};

export default Accordion;
