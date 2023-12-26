import "./Questions.scss";
import { BsArrowDownCircle } from "react-icons/bs";

const Accordion = ({ title, desc, active, setActive }) => {
  return (
    <div className="accordionContainer">
      <span
        className={(active === title ? "activeTitle " :  "" ) + "flex " + "title "}>
        {title}
        <span>
          <BsArrowDownCircle className="icon" />
        </span>
      </span>
      <p className="description">{desc}</p>
    </div>
  );
};

export default Accordion;
